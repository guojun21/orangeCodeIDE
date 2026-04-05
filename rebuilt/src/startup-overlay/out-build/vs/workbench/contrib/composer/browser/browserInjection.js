"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/browserInjection.js
// Offset: 31701945 (bundle byte offset)
// Size: 122182 bytes
LNf = `
(function() {
	'use strict';

	// Prevent multiple injections
	if (window.__cursorDevToolsInjected) return;
	window.__cursorDevToolsInjected = true;

	let selectedElement = null;
	let selectedElementPath = '';

	// Expose selected element for CDP access
	window.__cursorDevToolsSelectedElement = null;
	let styleChanges = [];
	let cssInspectorPanelOpen = false;

	// =============================================================================
	// Unique Element Identifier System
	// =============================================================================
	// Uses data attributes to reliably find elements regardless of class name changes
	const CURSOR_ELEMENT_ID_ATTR = 'data-cursor-element-id';
	let elementIdCounter = 0;

	// Get or assign a unique ID to an element
	function getOrAssignElementId(element) {
		if (!element || element.nodeType !== Node.ELEMENT_NODE) {
			return null;
		}
		let id = element.getAttribute(CURSOR_ELEMENT_ID_ATTR);
		if (!id) {
			id = 'cursor-el-' + (++elementIdCounter);
			element.setAttribute(CURSOR_ELEMENT_ID_ATTR, id);
		}
		return id;
	}

	// Find element by its unique ID (most reliable method)
	function getElementByUniqueId(uniqueId) {
		if (!uniqueId) return null;
		return document.querySelector('[' + CURSOR_ELEMENT_ID_ATTR + '="' + uniqueId + '"]');
	}
	let dragTargetElement = null;
	let dragState = null;
	let suppressedLinkDragState = null;
	let pendingHighlightUpdate = false;
	let pendingElementUpdate = false;
	const DRAG_UPDATE_INTERVAL_MS = 80;
	let lastElementUpdateTime = 0;
	const FLOW_DRAG_DISTANCE_THRESHOLD = 4;
	// Threshold for distinguishing click-to-select-child vs drag-to-move-parent
	const DRAG_INITIATION_THRESHOLD = 5;
	// Pending drag state for click vs drag detection when pointer is over a child
	let pendingDragDetection = null;
	const FLOW_DROP_INDICATOR_THICKNESS = 2;

	// Get the cumulative transform matrix from an element's ancestors
	// that affects how screen-space coordinates map to the element's positioning context
	function getAncestorTransformMatrix(element) {
		const matrix = new DOMMatrix();
		let current = element.parentElement;

		while (current && current !== document.body && current !== document.documentElement) {
			const computed = window.getComputedStyle(current);
			const transform = computed.transform;
			if (transform && transform !== 'none') {
				try {
					const parentMatrix = new DOMMatrix(transform);
					// Pre-multiply to accumulate transforms from outermost to innermost
					matrix.preMultiplySelf(parentMatrix);
				} catch {
					// Ignore invalid transforms
				}
			}
			current = current.parentElement;
		}

		return matrix;
	}

	// Transform a screen-space delta to the element's local coordinate system
	// by applying the inverse of the accumulated ancestor transforms
	function transformDeltaToLocal(deltaX, deltaY, inverseMatrix) {
		if (!inverseMatrix) {
			return { x: deltaX, y: deltaY };
		}

		// Transform the delta vector (not a point) through the inverse matrix
		// We only care about the rotation/scale, not translation
		const transformedX = inverseMatrix.a * deltaX + inverseMatrix.c * deltaY;
		const transformedY = inverseMatrix.b * deltaX + inverseMatrix.d * deltaY;

		return { x: transformedX, y: transformedY };
	}
	const FLOW_DROP_INDICATOR_MIN_LENGTH = 24;
	const FLOW_DROP_PARENT_EDGE_PENALTY = 0.05;
	const FLOW_DROP_DEPTH_BIAS = 0.001;
	const FLOW_DROP_MAX_DEPTH = 40;
	let flowDropIndicator = null;

	// Convert a color value to hex using the Canvas 2D API
	// This handles modern color formats like oklab(), oklch(), lab(), lch(), color() etc.
	// The Canvas API always renders to RGBA regardless of input color format
	function convertColorToHex(colorValue) {
		if (!colorValue || colorValue === 'transparent' || colorValue === 'rgba(0, 0, 0, 0)') {
			return null;
		}

		try {
			// Use Canvas to convert any CSS color to RGBA
			// This works because the canvas always renders in sRGB color space
			const canvas = document.createElement('canvas');
			canvas.width = 1;
			canvas.height = 1;
			const ctx = canvas.getContext('2d');
			if (!ctx) return null;

			// Set fillStyle to the color value - Canvas will parse it
			ctx.fillStyle = colorValue;
			ctx.fillRect(0, 0, 1, 1);

			// Read the pixel data which is always in RGBA format
			const imageData = ctx.getImageData(0, 0, 1, 1).data;

			const r = imageData[0];
			const g = imageData[1];
			const b = imageData[2];
			const a = imageData[3] / 255;

			const hex = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('').toUpperCase();
			return { hex, alpha: Math.round(a * 100) };
		} catch {
			// Ignore conversion errors
		}
		return null;
	}

	// Cache for matched style declarations per element
	// Key: element, Value: { declarations, timestamp, classKey }
	const matchedDeclarationsCache = new WeakMap();
	const MATCHED_DECLARATIONS_CACHE_TTL = 2000; // 2 second cache per element

	// Color properties that we need to check for var() references (for token detection)
	const COLOR_PROPERTIES_FOR_MATCHING = [
		'color', 'background-color', 'background',
		'border-color', 'border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color',
		'border', 'border-top', 'border-right', 'border-bottom', 'border-left',
		'outline-color', 'text-decoration-color', 'fill', 'stroke'
	];

	// Get the original CSS declarations from stylesheets that apply to an element
	// OPTIMIZED: Only extracts color-related properties with var() references for token detection
	function getMatchedStyleDeclarations(element) {
		// Check cache first - use className as part of cache key since it affects matching
		const now = typeof performance !== 'undefined' ? performance.now() : Date.now();
		const classKey = typeof element.className === 'string' ? element.className : '';
		const cached = matchedDeclarationsCache.get(element);
		if (cached && cached.classKey === classKey && (now - cached.timestamp) < MATCHED_DECLARATIONS_CACHE_TTL) {
			return cached.declarations;
		}

		const declarations = {};
		const styleSheets = Array.from(document.styleSheets || []);

		for (const sheet of styleSheets) {
			if (!sheet) continue;
			try {
				const rules = sheet.cssRules || sheet.rules;
				if (!rules) continue;

				// Recursively process rules including @media, @supports, etc.
				function processRules(ruleList) {
					for (let i = 0; i < ruleList.length; i++) {
						const rule = ruleList[i];
						if (!rule) continue;

						// Handle nested rules (@media, @supports, @layer, etc.)
						if (rule.cssRules) {
							processRules(rule.cssRules);
							continue;
						}

						if (rule.type !== CSSRule.STYLE_RULE) continue;

						try {
							// Check if this rule matches the element
							if (element.matches(rule.selectorText)) {
								const style = rule.style;
								// OPTIMIZATION: Only check color properties with var() references
								for (const prop of COLOR_PROPERTIES_FOR_MATCHING) {
									const value = style.getPropertyValue(prop);
									// Only store if it contains var() - that's all we need for token detection
									if (value && value.includes('var(')) {
										declarations[prop] = value;
									}
								}
							}
						} catch {
							// Skip invalid selectors
						}
					}
				}

				processRules(rules);
			} catch (e) {
				// Ignore cross-origin stylesheets
			}
		}

		// Cache the result
		matchedDeclarationsCache.set(element, {
			declarations,
			timestamp: now,
			classKey
		});

		return declarations;
	}

	// Get effective styles (important CSS properties)
	// Uses computed values directly - var() references are handled separately via matched declarations
	function getEffectiveStyles(computed) {
		const effective = {};
		const importantProps = [
			'display', 'position', 'top', 'right', 'bottom', 'left',
			'width', 'height', 'min-width', 'min-height', 'max-width', 'max-height',
			'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
			'padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
			'box-sizing', 'overflow', 'overflow-x', 'overflow-y',
			'flex', 'flex-direction', 'flex-wrap', 'justify-content', 'align-items',
			'align-content', 'flex-grow', 'flex-shrink', 'flex-basis',
			'grid-template-columns', 'grid-template-rows', 'grid-gap', 'gap',
			'font-family', 'font-size', 'font-weight', 'font-style',
			'line-height', 'text-align', 'text-decoration', 'text-transform',
			'letter-spacing', 'word-spacing', 'white-space',
			'color', 'background-color', 'background', 'background-image',
			'background-position', 'background-size', 'background-repeat',
			'opacity',
			'border', 'border-top', 'border-right', 'border-bottom', 'border-left',
			'border-radius', 'border-color', 'border-style', 'border-width',
			'box-shadow', 'text-shadow', 'transform', 'transition', 'animation',
			'z-index', 'cursor', 'visibility', 'float', 'clear'
		];

		for (const prop of importantProps) {
			effective[prop] = computed.getPropertyValue(prop);
		}

		return effective;
	}

	// Get all computed styles for an element
	function getAllComputedStyles(element) {
		// Validate that element is actually a DOM Element
		if (!element || !(element instanceof Element)) {
			console.error('getAllComputedStyles: Invalid element parameter', element);
			return {};
		}

		const computed = window.getComputedStyle(element);
		const styles = {};

		for (let i = 0; i < computed.length; i++) {
			const prop = computed[i];
			const value = computed.getPropertyValue(prop);
			const priority = computed.getPropertyPriority(prop);

			styles[prop] = {
				value: value,
				priority: priority || null
			};
		}

		const inlineStyles = {};
		if (element.style && element.style.length > 0) {
			for (let i = 0; i < element.style.length; i++) {
				const prop = element.style[i];
				inlineStyles[prop] = {
					value: element.style.getPropertyValue(prop),
					priority: element.style.getPropertyPriority(prop) || null
				};
			}
		}

		// Convert color properties to hex for matching
		const colorProperties = ['color', 'background-color', 'border-color',
			'border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color'];
		const convertedColors = {};
		for (const prop of colorProperties) {
			const value = computed.getPropertyValue(prop);
			if (value) {
				const converted = convertColorToHex(value);
				if (converted) {
					convertedColors[prop] = converted;
				}
			}
		}

		// Get matched declarations with var() preserved for color token detection only
		// This is optimized to only check color properties with var() references
		const matchedDeclarations = getMatchedStyleDeclarations(element);

		return {
			computed: styles,
			inline: inlineStyles,
			effective: getEffectiveStyles(computed),
			matched: matchedDeclarations,
			convertedColors: convertedColors,
		};
	}

	function collectCustomPropertyNamesFromRules(rules, names, propertyRuleValues) {
		if (!rules) {
			return;
		}
		for (let i = 0; i < rules.length; i++) {
			const rule = rules[i];
			if (!rule) {
				continue;
			}
			// Handle @property rules (registered custom properties) - used by Tailwind v4
			// CSSPropertyRule has type 15 and a .name property containing the custom property name
			if (rule.type === 15 && rule.name && typeof rule.name === 'string') {
				const propName = rule.name;
				if (propName.charCodeAt(0) === 45 && propName.charCodeAt(1) === 45) {
					names.add(propName);
					// Store the initial value from @property rule as a fallback
					if (propertyRuleValues && rule.initialValue) {
						propertyRuleValues.set(propName, rule.initialValue);
					}
				}
			}
			const style = rule.style;
			if (style && style.length > 0) {
				for (let j = 0; j < style.length; j++) {
					const prop = style[j];
					if (!prop || prop.charCodeAt(0) !== 45 || prop.charCodeAt(1) !== 45) {
						continue;
					}
					names.add(prop);
				}
			}
			if (rule.cssRules) {
				collectCustomPropertyNamesFromRules(rule.cssRules, names, propertyRuleValues);
			}
		}
	}

	// Cache for CSS custom property names - they rarely change during a page session
	let cachedPropertyNames = null;
	let cachedPropertyRuleValues = null;
	let cachedPropertyNamesTimestamp = 0;
	const PROPERTY_NAMES_CACHE_TTL = 5000; // 5 seconds cache

	function getCustomPropertyNamesFromStyleSheets() {
		// Return cached result if still valid
		const now = typeof performance !== 'undefined' ? performance.now() : Date.now();
		if (cachedPropertyNames && (now - cachedPropertyNamesTimestamp) < PROPERTY_NAMES_CACHE_TTL) {
			return { names: cachedPropertyNames, propertyRuleValues: cachedPropertyRuleValues };
		}

		const names = new Set();
		const propertyRuleValues = new Map();
		const styleSheets = Array.from(document.styleSheets || []);
		for (const sheet of styleSheets) {
			if (!sheet) {
				continue;
			}
			try {
				const rules = sheet.cssRules;
				if (rules) {
					collectCustomPropertyNamesFromRules(rules, names, propertyRuleValues);
				}
			} catch {
				// Ignore cross-origin stylesheets
			}
		}
		const inlineStyle = document.documentElement?.style;
		if (inlineStyle && inlineStyle.length > 0) {
			for (let i = 0; i < inlineStyle.length; i++) {
				const prop = inlineStyle[i];
				if (!prop || prop.charCodeAt(0) !== 45 || prop.charCodeAt(1) !== 45) {
					continue;
				}
				names.add(prop);
			}
		}

		// Cache the result
		cachedPropertyNames = names;
		cachedPropertyRuleValues = propertyRuleValues;
		cachedPropertyNamesTimestamp = now;
		return { names, propertyRuleValues };
	}

	function getElementPath(element) {
		const path = [];
		let el = element;
		while (el && el !== document.body) {
			let selector = el.tagName.toLowerCase();
			if (el.id) {
				selector += '#' + el.id;
			} else if (el.className && typeof el.className === 'string') {
				const classes = el.className.trim().split(/\\s+/).filter(Boolean);
				if (classes.length > 0) {
					selector += '.' + classes.join('.');
				}
			}

			if (el.parentElement && !el.id) {
				const siblings = Array.from(el.parentElement.children);
				const sameSelectorSiblings = siblings.filter((sibling) => {
					if (sibling.tagName !== el.tagName) {
						return false;
					}
					const siblingClasses =
						sibling.className && typeof sibling.className === 'string'
							? sibling.className
									.trim()
									.split(/\\s+/)
									.filter(Boolean)
									.sort()
									.join('.')
							: '';
					const elClasses =
						el.className && typeof el.className === 'string'
							? el.className.trim().split(/\\s+/).filter(Boolean).sort().join('.')
							: '';
					return siblingClasses === elClasses;
				});

				if (sameSelectorSiblings.length > 1) {
					const index = sameSelectorSiblings.indexOf(el);
					selector += '[' + index + ']';
				}
			}

			path.unshift(selector);
			el = el.parentElement;
		}
		return path.join(' > ');
	}

	/**
	 * Parse a selector part into its components.
	 * Handles complex class names with special characters (Tailwind, CSS-in-JS, etc.)
	 * Format: tagName#id.class1.class2[index]
	 */
	function parseSelectorPart(part) {
		if (!part) return null;

		let remaining = part;
		let tagName = '';
		let id = null;
		let classes = [];
		let elementIndex = -1;

		// Extract trailing index [n] first - we only care about our own index suffix
		// which is always at the very end of the selector.
		// We must distinguish element indices from Tailwind arbitrary values like w-[20], h-[100].
		// Element indices are NEVER preceded by a hyphen, but Tailwind arbitrary values are.
		const trailingIndexMatch = remaining.match(/[(d+)]$/);
		if (trailingIndexMatch) {
			// Check the character before the bracket - if it's a hyphen, this is a Tailwind
			// arbitrary value (e.g., w-[20]), not an element index
			const matchStart = remaining.length - trailingIndexMatch[0].length;
			const charBefore = matchStart > 0 ? remaining[matchStart - 1] : '';
			if (charBefore !== '-') {
				elementIndex = parseInt(trailingIndexMatch[1], 10);
				remaining = remaining.slice(0, -trailingIndexMatch[0].length);
			}
		}

		// Extract tag name (must come first, alphanumeric + hyphens only)
		const tagMatch = remaining.match(/^([a-zA-Z][a-zA-Z0-9-]*)/);
		if (tagMatch) {
			tagName = tagMatch[1];
			remaining = remaining.slice(tagMatch[0].length);
		} else {
			// No valid tag name found
			return null;
		}

		// Extract ID if present (#id)
		if (remaining.startsWith('#')) {
			// ID can contain special chars but typically ends at . or end of string
			const idMatch = remaining.match(/^#([^.]+)/);
			if (idMatch) {
				id = idMatch[1];
				remaining = remaining.slice(idMatch[0].length);
			}
		}

		// Extract classes - everything remaining should be classes
		// Classes are separated by dots, but dots can appear inside class names (rare)
		// We'll use a smarter approach: split by dots that are followed by valid class start chars
		if (remaining.startsWith('.')) {
			remaining = remaining.slice(1); // Remove leading dot

			// Split classes - but handle special chars in class names
			// Tailwind classes like hover:bg-blue-500, w-[100px], mt-1/2
			// We need to be careful not to split on dots inside brackets
			const rawClasses = [];
			let currentClass = '';
			let bracketDepth = 0;

			for (let i = 0; i < remaining.length; i++) {
				const char = remaining[i];
				if (char === '[') {
					bracketDepth++;
					currentClass += char;
				} else if (char === ']') {
					bracketDepth--;
					currentClass += char;
				} else if (char === '.' && bracketDepth === 0) {
					if (currentClass) {
						rawClasses.push(currentClass);
					}
					currentClass = '';
				} else {
					currentClass += char;
				}
			}
			if (currentClass) {
				rawClasses.push(currentClass);
			}

			classes = rawClasses.filter(Boolean);
		}

		return { tagName: tagName.toUpperCase(), id, classes, elementIndex };
	}

	function getElementFromPath(path) {
		if (!path || typeof path !== 'string') {
			return null;
		}

		// First, check if this looks like a unique ID (most reliable method)
		if (path.startsWith('cursor-el-')) {
			const element = getElementByUniqueId(path);
			if (element) {
				return element;
			}
			// If unique ID lookup fails, fall through to path-based lookup
		}

		// Fall back to path-based lookup
		const parts = path.split(' > ').filter(Boolean);
		if (parts.length === 0) {
			return null;
		}

		let current = document.body;
		if (!current) {
			return null;
		}

		if (parts[0] === 'body') {
			parts.shift();
		}

		for (const part of parts) {
			const parsed = parseSelectorPart(part);

			if (!parsed) {
				return null;
			}

			const { tagName, id, classes, elementIndex } = parsed;

			const matchingChildren = [];
			for (const child of current.children) {
				if (child.tagName !== tagName) {
					continue;
				}
				if (id && child.id !== id) {
					continue;
				}
				if (classes.length > 0) {
					// Check if child has all required classes
					const hasAllClasses = classes.every((cls) => {
						// Direct classList check
						if (child.classList.contains(cls)) return true;

						// For classes with special chars that classList might not handle,
						// check if the class appears in className string
						if (child.className && typeof child.className === 'string') {
							const childClasses = child.className.trim().split(/\\s+/);
							return childClasses.includes(cls);
						}
						return false;
					});
					if (!hasAllClasses) {
						continue;
					}
				}
				matchingChildren.push(child);
			}

			let found = null;
			if (elementIndex >= 0 && elementIndex < matchingChildren.length) {
				found = matchingChildren[elementIndex];
			} else if (matchingChildren.length > 0) {
				found = matchingChildren[0];
			}

			if (!found) {
				return null;
			}
			current = found;
		}

		return current;
	}

	function captureElementAttributes(element) {
		const attributes = [];
		if (!element || !element.attributes) {
			return attributes;
		}
		for (let i = 0; i < element.attributes.length; i++) {
			const attr = element.attributes[i];
			if (!attr || typeof attr.name !== 'string') {
				continue;
			}
			attributes.push({
				name: attr.name,
				value: attr.value || ''
			});
		}
		return attributes;
	}

	function getElementIndexWithinParent(element) {
		if (!element || !element.parentElement) {
			return -1;
		}
		const children = Array.from(element.parentElement.children);
		return children.indexOf(element);
	}

	function buildStyleChangeRecord(
		element,
		property,
		oldValue,
		newValue,
		hadInlineStyle,
		domOrderChange
	) {
		if (!element) {
			return null;
		}
		const elementPath = getElementPath(element);
		// Get or assign unique ID for reliable element lookup during reset
		const elementUniqueId = getOrAssignElementId(element);
		const record = {
			selector: selectedElementPath || elementPath || '',
			property: property,
			oldValue: typeof oldValue === 'string' ? oldValue : '',
			newValue: typeof newValue === 'string' ? newValue : '',
			hadInlineStyle: !!hadInlineStyle,
			timestamp: Date.now(),
			elementPath: elementPath || '',
			elementHTML:
				typeof element.outerHTML === 'string' ? element.outerHTML : '',
			elementId: element.id || '',
			elementClassName: element.className || '',
			elementTagName: element.tagName || '',
			elementAttributes: captureElementAttributes(element),
			elementUniqueId: elementUniqueId || '',
		};
		if (domOrderChange) {
			record.changeType = 'dom';
			record.domOrderChange = domOrderChange;
		} else {
			record.changeType = 'style';
		}
		return record;
	}

	function sendStyleChangeRecords(records) {
		if (!records || records.length === 0) {
			return;
		}
		try {
			if (window.cursorBrowser && typeof window.cursorBrowser.send === 'function') {
				window.cursorBrowser.send('css-inspector-style-change', records);
			}
		} catch (error) {
			// Ignore inability to send style change records
		}
	}

	function notifyDragState(isDragging) {
		try {
			window.postMessage(
				{
					type: 'css-inspector-drag-state',
					dragging: !!isDragging
				},
				'*'
			);
		} catch (error) {
			// Ignore inability to notify drag state
		}
	}

	function ensurePositionContext(element, computedStyle) {
		if (!element) {
			return;
		}
		const computed =
			computedStyle || (typeof window !== 'undefined'
				? window.getComputedStyle(element)
				: null);
		if (!computed) {
			return;
		}
		if (computed.position === 'static') {
			element.style.position = 'relative';
		}
	}

	function getFlowLayoutInfo(parentElement) {
		const info = {
			axis: 'vertical',
			reverse: false
		};
		if (!parentElement || typeof window === 'undefined') {
			return info;
		}
		try {
			const computed = window.getComputedStyle(parentElement);
			if (!computed) {
				return info;
			}
			const display = (computed.display || '').toLowerCase();
			if (display === 'flex' || display === 'inline-flex') {
				const direction = (computed.flexDirection || 'row').toLowerCase();
				if (direction.includes('column')) {
					info.axis = 'vertical';
				} else {
					info.axis = 'horizontal';
				}
				info.reverse = direction.includes('reverse');
				return info;
			}
			if (display === 'grid' || display === 'inline-grid') {
				const autoFlow = (computed.gridAutoFlow || '').toLowerCase();
				info.axis = autoFlow.includes('column') ? 'horizontal' : 'vertical';
				return info;
			}
			if (display.startsWith('inline')) {
				info.axis = 'horizontal';
				info.reverse = (computed.direction || '').toLowerCase() === 'rtl';
				return info;
			}
			if (display === 'table' || display === 'table-row') {
				info.axis = 'horizontal';
				return info;
			}
		} catch (error) {
			// Ignore inability to read computed styles
		}
		return info;
	}

	function ensureFlowDropIndicator() {
		if (flowDropIndicator && flowDropIndicator.isConnected) {
			return flowDropIndicator;
		}
		if (!document || !document.body) {
			return null;
		}
		const indicator = document.createElement('div');
		indicator.setAttribute('data-cursor-overlay', 'true');
		indicator.setAttribute('data-cursor-drop-indicator', 'true');
		indicator.style.position = 'fixed';
		indicator.style.pointerEvents = 'none';
		indicator.style.zIndex = '2147483648';
		indicator.style.background = '#3794ff';
		indicator.style.boxShadow = '0 0 10px rgba(55, 148, 255, 0.45)';
		indicator.style.borderRadius = '1px';
		indicator.style.opacity = '0.95';
		indicator.style.display = 'none';
		indicator.style.transition = 'opacity 0.1s ease';
		document.body.appendChild(indicator);
		flowDropIndicator = indicator;
		return indicator;
	}

	function hideFlowDropIndicator() {
		if (flowDropIndicator) {
			flowDropIndicator.style.display = 'none';
		}
	}

	function updateFlowDropIndicator(targetParent, referenceNode, axis, reverse) {
		if (!targetParent) {
			hideFlowDropIndicator();
			return;
		}
		const indicator = ensureFlowDropIndicator();
		if (!indicator) {
			return;
		}

		let parentRect = null;
		try {
			parentRect = targetParent.getBoundingClientRect();
		} catch {
			parentRect = null;
		}
		if (!parentRect) {
			hideFlowDropIndicator();
			return;
		}

		let referenceRect = null;
		if (referenceNode && referenceNode instanceof Element) {
			try {
				referenceRect = referenceNode.getBoundingClientRect();
			} catch {
				referenceRect = null;
			}
		}

		const fallbackWidth = Math.max(
			Math.abs(parentRect.width) || targetParent.offsetWidth || 0,
			FLOW_DROP_INDICATOR_MIN_LENGTH
		);
		const fallbackHeight = Math.max(
			Math.abs(parentRect.height) || targetParent.offsetHeight || 0,
			12
		);

		let left = parentRect.left;
		let top = parentRect.top;
		let width = FLOW_DROP_INDICATOR_THICKNESS;
		let height = FLOW_DROP_INDICATOR_THICKNESS;

		if (axis === 'horizontal') {
			const anchorX = referenceRect
				? reverse
					? referenceRect.right
					: referenceRect.left
				: reverse
					? parentRect.left
					: parentRect.right;
			left = anchorX - FLOW_DROP_INDICATOR_THICKNESS / 2;
			top = referenceRect ? referenceRect.top : parentRect.top;
			height = Math.max(
				referenceRect ? referenceRect.height : fallbackHeight,
				12
			);
			width = FLOW_DROP_INDICATOR_THICKNESS;
		} else {
			const anchorY = referenceRect
				? reverse
					? referenceRect.bottom
					: referenceRect.top
				: reverse
					? parentRect.top
					: parentRect.bottom;
			top = anchorY - FLOW_DROP_INDICATOR_THICKNESS / 2;
			left = referenceRect ? referenceRect.left : parentRect.left;
			width = Math.max(
				referenceRect ? referenceRect.width : fallbackWidth,
				FLOW_DROP_INDICATOR_MIN_LENGTH
			);
			height = FLOW_DROP_INDICATOR_THICKNESS;
		}

		if (
			!Number.isFinite(left) ||
			!Number.isFinite(top) ||
			!Number.isFinite(width) ||
			!Number.isFinite(height)
		) {
			hideFlowDropIndicator();
			return;
		}

		indicator.style.left = Math.round(left) + 'px';
		indicator.style.top = Math.round(top) + 'px';
		indicator.style.width = Math.max(
			FLOW_DROP_INDICATOR_THICKNESS,
			Math.round(width)
		) + 'px';
		indicator.style.height = Math.max(
			FLOW_DROP_INDICATOR_THICKNESS,
			Math.round(height)
		) + 'px';
		indicator.style.display = 'block';
	}

	function applyFlowDragTransform(deltaX, deltaY) {
		if (
			!dragState ||
			dragState.mode !== 'flow' ||
			!dragTargetElement
		) {
			return;
		}

		// Transform the screen-space delta to account for ancestor transforms
		const localDelta = transformDeltaToLocal(
			deltaX,
			deltaY,
			dragState.inverseTransformMatrix
		);

		const style = dragTargetElement.style;
		const roundedX = Math.round(localDelta.x);
		const roundedY = Math.round(localDelta.y);
		const translate =
			'translate3d(' + roundedX + 'px, ' + roundedY + 'px, 0)';
		const baseTransform = dragState.baseTransform || '';

		// IMPORTANT: Prepend the translate so it's applied in screen space BEFORE
		// the element's own rotation/transform. CSS transforms are applied right-to-left,
		// so "translate rotate" means: first rotate (in place), then translate (in screen space).
		// This ensures dragging moves the element in the direction of the cursor.
		style.transform =
			baseTransform && baseTransform.trim().length > 0
				? translate + ' ' + baseTransform
				: translate;
	}

	function restoreFlowDragVisualState() {
		if (
			!dragState ||
			dragState.mode !== 'flow' ||
			!dragTargetElement
		) {
			return;
		}
		const style = dragTargetElement.style;
		if (dragState.baseTransform && dragState.baseTransform.trim().length > 0) {
			style.transform = dragState.baseTransform;
		} else {
			style.removeProperty('transform');
		}
		if (
			dragState.originalTransition !== undefined &&
			dragState.originalTransition !== null &&
			dragState.originalTransition.trim().length > 0
		) {
			style.transition = dragState.originalTransition;
		} else {
			style.removeProperty('transition');
		}
		if (
			dragState.originalWillChange !== undefined &&
			dragState.originalWillChange !== null &&
			dragState.originalWillChange.trim().length > 0
		) {
			style.willChange = dragState.originalWillChange;
		} else {
			style.removeProperty('will-change');
		}
		if (
			dragState.originalZIndex !== undefined &&
			dragState.originalZIndex !== null &&
			dragState.originalZIndex.trim().length > 0
		) {
			style.zIndex = dragState.originalZIndex;
		} else {
			style.removeProperty('z-index');
		}
	}

	function restoreFlowPositionToOriginal() {
		if (
			!dragState ||
			dragState.mode !== 'flow' ||
			!dragTargetElement ||
			!dragState.originalParentElement
		) {
			return;
		}
		let referenceNode = dragState.originalNextSibling || null;
		if (
			referenceNode &&
			referenceNode.parentNode !== dragState.originalParentElement
		) {
			referenceNode = null;
		}
		try {
			dragState.originalParentElement.insertBefore(
				dragTargetElement,
				referenceNode
			);
		} catch {
			// Ignore inability to restore original order
		}
	}

	function commitFlowDropTarget() {
		if (
			!dragState ||
			dragState.mode !== 'flow' ||
			!dragTargetElement
		) {
			return;
		}

		restoreFlowDragVisualState();

		if (!dragState.hasMoved || !dragState.pendingDropParent) {
			restoreFlowPositionToOriginal();
			return;
		}

		const targetParent = dragState.pendingDropParent;
		let referenceNode = dragState.pendingDropReference || null;

		if (referenceNode && referenceNode.parentNode !== targetParent) {
			referenceNode = null;
		}

		try {
			targetParent.insertBefore(dragTargetElement, referenceNode);
		} catch (error) {
			restoreFlowPositionToOriginal();
			return;
		}

		refreshSelectedElementPath();

		const newParentPath = getElementPath(targetParent) || '';
		const newNextSiblingPath =
			referenceNode && referenceNode instanceof Element
				? getElementPath(referenceNode)
				: null;
		const newIndex = getElementIndexWithinParent(dragTargetElement);
		// Store unique IDs for reliable element lookup during reset
		const originalParentUniqueId = dragState.originalParentElement
			? getOrAssignElementId(dragState.originalParentElement)
			: null;
		const originalNextSiblingUniqueId = dragState.originalNextSibling && dragState.originalNextSibling instanceof Element
			? getOrAssignElementId(dragState.originalNextSibling)
			: null;
		// Store unique IDs for new parent/sibling for reliable redo
		const newParentUniqueId = getOrAssignElementId(targetParent);
		const newNextSiblingUniqueId = referenceNode && referenceNode instanceof Element
			? getOrAssignElementId(referenceNode)
			: null;
		const domOrderChange = {
			originalParentPath: dragState.originalParentPath || '',
			originalNextSiblingPath: dragState.originalNextSiblingPath || null,
			originalIndex:
				typeof dragState.originalIndex === 'number'
					? dragState.originalIndex
					: -1,
			newParentPath: newParentPath,
			newNextSiblingPath: newNextSiblingPath,
			newIndex: newIndex,
			originalParentUniqueId: originalParentUniqueId || null,
			originalNextSiblingUniqueId: originalNextSiblingUniqueId,
			newParentUniqueId: newParentUniqueId || null,
			newNextSiblingUniqueId: newNextSiblingUniqueId,
		};
		const changeIsNoOp =
			domOrderChange.originalParentPath === domOrderChange.newParentPath &&
			domOrderChange.originalIndex === domOrderChange.newIndex &&
			(domOrderChange.originalNextSiblingPath || '') ===
				(domOrderChange.newNextSiblingPath || '');
		if (!changeIsNoOp) {
			const oldValue = JSON.stringify({
				parentPath: domOrderChange.originalParentPath,
				nextSiblingPath: domOrderChange.originalNextSiblingPath,
				index: domOrderChange.originalIndex,
			});
			const newValue = JSON.stringify({
				parentPath: domOrderChange.newParentPath,
				nextSiblingPath: domOrderChange.newNextSiblingPath,
				index: domOrderChange.newIndex,
			});
			const record = buildStyleChangeRecord(
				dragTargetElement,
				'dom-order',
				oldValue,
				newValue,
				false,
				domOrderChange
			);
			if (record) {
				sendStyleChangeRecords([record]);
			}
		}
	}

	function commitAbsoluteDragChanges() {
		if (
			!dragState ||
			dragState.mode !== 'absolute' ||
			!dragTargetElement
		) {
			return;
		}
		const style = dragTargetElement.style || {};
		const getInline = (property) =>
			typeof style.getPropertyValue === 'function'
				? style.getPropertyValue(property) || ''
				: style[property] || '';
		const finalLeft = getInline('left') || '';
		const finalTop = getInline('top') || '';
		const originalLeftValue = dragState.hadInlineLeft
			? dragState.initialInlineLeft || ''
			: dragState.initialComputedLeft || '';
		const originalTopValue = dragState.hadInlineTop
			? dragState.initialInlineTop || ''
			: dragState.initialComputedTop || '';
		const valuesDiffer = (a, b) => {
			const normalizedA = (a || '').trim();
			const normalizedB = (b || '').trim();
			if (normalizedA === normalizedB) {
				return false;
			}
			const numericA = parseFloat(normalizedA);
			const numericB = parseFloat(normalizedB);
			if (Number.isFinite(numericA) && Number.isFinite(numericB)) {
				return Math.abs(Math.round(numericA) - Math.round(numericB)) > 0;
			}
			return true;
		};
		const records = [];
		if (valuesDiffer(finalLeft, originalLeftValue)) {
			const leftRecord = buildStyleChangeRecord(
				dragTargetElement,
				'left',
				originalLeftValue || '',
				finalLeft || '',
				!!dragState.hadInlineLeft
			);
			if (leftRecord) {
				records.push(leftRecord);
			}
		}
		if (valuesDiffer(finalTop, originalTopValue)) {
			const topRecord = buildStyleChangeRecord(
				dragTargetElement,
				'top',
				originalTopValue || '',
				finalTop || '',
				!!dragState.hadInlineTop
			);
			if (topRecord) {
				records.push(topRecord);
			}
		}
		if (records.length > 0) {
			sendStyleChangeRecords(records);
		}
	}

	function isIgnoredDragElement(node) {
		if (!node || !(node instanceof Element)) {
			return false;
		}
		if (node.closest('[data-cursor-overlay]')) {
			return true;
		}
		if (node.closest('[data-cursor-toast]')) {
			return true;
		}
		return false;
	}

	function pickElementFromPoint(x, y) {
		const shouldSkipHitElement = (element) => {
			if (!element || !(element instanceof Element)) {
				return true;
			}
			if (isIgnoredDragElement(element)) {
				return true;
			}
			if (dragTargetElement && dragTargetElement.contains(element)) {
				return true;
			}
			return false;
		};

		if (typeof document.elementsFromPoint === 'function') {
			const elements = document.elementsFromPoint(x, y);
			for (const element of elements) {
				if (!shouldSkipHitElement(element)) {
					return element;
				}
			}
		}

		let element = document.elementFromPoint(x, y);
		while (element && shouldSkipHitElement(element)) {
			element = element.parentElement;
		}
		return element instanceof Element && !isIgnoredDragElement(element)
			? element
			: null;
	}

	function canElementBeDropContainer(element) {
		if (!element || !(element instanceof Element)) {
			return false;
		}
		// Never allow dropping into document.documentElement (html element)
		// This would place elements outside of body, making them invisible
		if (element === document.documentElement) {
			return false;
		}
		if (element === dragTargetElement) {
			return false;
		}
		if (dragTargetElement && dragTargetElement.contains(element)) {
			return false;
		}
		if (isIgnoredDragElement(element)) {
			return false;
		}
		return true;
	}

	function clamp01(value) {
		if (!Number.isFinite(value)) {
			return 0.5;
		}
		if (value < 0) {
			return 0;
		}
		if (value > 1) {
			return 1;
		}
		return value;
	}

	function safeGetRect(element) {
		if (!element) {
			return null;
		}
		try {
			return element.getBoundingClientRect();
		} catch {
			return null;
		}
	}

	function computeRelativePosition(rect, axis, pointerX, pointerY) {
		if (!rect) {
			return 0.5;
		}
		const size = axis === 'horizontal' ? rect.width : rect.height;
		if (!Number.isFinite(size) || size === 0) {
			return 0.5;
		}
		const start = axis === 'horizontal' ? rect.left : rect.top;
		const coordinate = axis === 'horizontal' ? pointerX : pointerY;
		return clamp01((coordinate - start) / size);
	}

	function collectFlowDropPath(x, y) {
		const path = [];
		const seen = new Set();
		let current = pickElementFromPoint(x, y);
		let depth = 0;
		while (
			current &&
			current instanceof Element &&
			!seen.has(current) &&
			depth < FLOW_DROP_MAX_DEPTH
		) {
			path.push(current);
			seen.add(current);
			current = current.parentElement;
			depth++;
		}
		if (document.body && !seen.has(document.body)) {
			path.push(document.body);
		}
		return path;
	}

	function findReferenceNodeWithinParent(parent, axis, reverse, pointerCoord) {
		const normalizedPointer = reverse ? -pointerCoord : pointerCoord;
		const children = Array.from(parent.children);
		for (const child of children) {
			if (child === dragTargetElement) {
				continue;
			}
			let rect = null;
			try {
				rect = child.getBoundingClientRect();
			} catch {
				rect = null;
			}
			if (!rect) {
				continue;
			}
			const midpoint =
				axis === 'horizontal'
					? rect.left + rect.width / 2
					: rect.top + rect.height / 2;
			const normalizedMidpoint = reverse ? -midpoint : midpoint;
			if (normalizedPointer < normalizedMidpoint) {
				return child;
			}
		}
		return null;
	}

	function buildDropInsideOption(candidate, depth, pointerX, pointerY) {
		if (!canElementBeDropContainer(candidate)) {
			return null;
		}
		// Don't allow dropping inside a sibling element - prefer sibling reordering.
		// When dragging h1 and hovering over its sibling h2, we want "before/after h2"
		// options (sibling reordering), not "inside h2" (which would make h1 a child of h2).
		const isSibling = dragTargetElement &&
			candidate.parentElement &&
			candidate.parentElement === dragTargetElement.parentElement;
		if (isSibling) {
			return null;
		}
		const layoutInfo = getFlowLayoutInfo(candidate);
		const axis = layoutInfo.axis;
		const reverse = layoutInfo.reverse;
		const pointerCoord = axis === 'horizontal' ? pointerX : pointerY;
		const referenceNode = findReferenceNodeWithinParent(
			candidate,
			axis,
			reverse,
			pointerCoord
		);
		const relative = computeRelativePosition(
			safeGetRect(candidate),
			axis,
			pointerX,
			pointerY
		);
		const oriented = reverse ? 1 - relative : relative;
		const distanceToCenter = Math.abs(oriented - 0.5);
		const score = distanceToCenter + depth * FLOW_DROP_DEPTH_BIAS;
		return {
			parent: candidate,
			reference: referenceNode || null,
			axis: axis,
			reverse: reverse,
			score: score,
			depth,
		};
	}

	function buildDropAroundOptions(candidate, depth, pointerX, pointerY) {
		const options = [];
		if (candidate === dragTargetElement) {
			return options;
		}
		// Never allow dropping as a sibling of <body> (would place element outside body)
		if (candidate === document.body) {
			return options;
		}
		const parent = candidate.parentElement;
		if (
			!parent ||
			parent === dragTargetElement ||
			(dragTargetElement && dragTargetElement.contains(parent)) ||
			!canElementBeDropContainer(parent)
		) {
			return options;
		}
		const layoutInfo = getFlowLayoutInfo(parent);
		const axis = layoutInfo.axis;
		const reverse = layoutInfo.reverse;
		// Use the candidate's rect for position calculation, not the parent's.
		// This way, when hovering over h2:
		// - Top half of h2 \u2192 "before h2" has lower score
		// - Bottom half of h2 \u2192 "after h2" has lower score
		const relative = computeRelativePosition(
			safeGetRect(candidate),
			axis,
			pointerX,
			pointerY
		);
		const oriented = reverse ? 1 - relative : relative;
		// Check if we're reordering within the same parent as the drag target.
		// If so, give these options a strong preference (lower score) to ensure
		// sibling reordering is prioritized over "inside parent" options.
		const isSiblingReorder = dragTargetElement &&
			dragTargetElement.parentElement === parent;
		const baseScore = isSiblingReorder
			? depth * FLOW_DROP_DEPTH_BIAS  // No edge penalty for sibling reordering
			: depth * FLOW_DROP_DEPTH_BIAS + FLOW_DROP_PARENT_EDGE_PENALTY;
		const beforeScore = oriented + baseScore;
		const afterScore = (1 - oriented) + baseScore;
		const nextSibling = candidate.nextElementSibling;
		// Skip the drag target when finding next sibling
		const effectiveNextSibling = nextSibling === dragTargetElement
			? (nextSibling ? nextSibling.nextElementSibling : null)
			: nextSibling;
		options.push({
			parent: parent,
			reference: candidate,
			axis: axis,
			reverse: reverse,
			score: beforeScore,
			depth,
		});
		options.push({
			parent: parent,
			reference: effectiveNextSibling || null,
			axis: axis,
			reverse: reverse,
			score: afterScore,
			depth,
		});
		return options;
	}

	function findBestFlowDropTarget(pointerX, pointerY) {
		const path = collectFlowDropPath(pointerX, pointerY);
		if (path.length === 0) {
			return null;
		}

		// Check if path includes a sibling of the drag target (same parent).
		// If so, we ONLY allow sibling reordering options - no other "inside" options.
		const dragParent = dragTargetElement ? dragTargetElement.parentElement : null;
		const pathIncludesSibling = dragParent && path.some(el =>
			el !== dragTargetElement &&
			el.parentElement === dragParent
		);

		let bestOption = null;
		let bestSiblingOption = null;

		const considerOption = (option, isSiblingReorder) => {
			if (!option || !option.parent) {
				return;
			}

			// Track sibling reorder options separately
			if (isSiblingReorder) {
				if (
					!bestSiblingOption ||
					option.score < bestSiblingOption.score
				) {
					bestSiblingOption = option;
				}
			}

			if (
				!bestOption ||
				option.score < bestOption.score ||
				(Math.abs(option.score - bestOption.score) <= 0.000001 &&
					option.depth < bestOption.depth)
			) {
				bestOption = option;
			}
		};

		// Add original position as a valid drop target option.
		// This ensures small drags don't accidentally move the element far away.
		// Only strongly prefer original position when pointer is very close to drag start.
		if (
			dragState &&
			dragState.mode === 'flow' &&
			dragState.originalParentElement &&
			dragTargetElement
		) {
			// Use distance from drag START point, not element bounds
			// This creates a small "dead zone" around where user clicked
			const distFromStart = Math.hypot(
				pointerX - dragState.startX,
				pointerY - dragState.startY
			);

			// Small radius (20px) where original position ALWAYS wins
			// Use negative score to guarantee it beats any other option (which have scores >= 0)
			const DEAD_ZONE_RADIUS = 20;
			let originalPositionScore;
			if (distFromStart <= DEAD_ZONE_RADIUS) {
				// Within dead zone - use negative score to GUARANTEE original position wins
				// Other options have scores >= 0, so negative always wins
				originalPositionScore = -1 + (distFromStart / DEAD_ZONE_RADIUS);
			} else {
				// Outside dead zone - score that competes fairly with other options
				// Starts at 0 right at edge, increases with distance
				originalPositionScore = (distFromStart - DEAD_ZONE_RADIUS) / 50;
			}

			const layoutInfo = dragState.layoutInfo || getFlowLayoutInfo(dragState.originalParentElement);
			const originalPositionOption = {
				parent: dragState.originalParentElement,
				reference: dragState.originalNextSibling instanceof Element
					? dragState.originalNextSibling
					: null,
				axis: layoutInfo.axis,
				reverse: layoutInfo.reverse,
				score: originalPositionScore,
				depth: 0,
				isOriginalPosition: true,
			};
			considerOption(originalPositionOption, true);
		}

		for (let depth = 0; depth < path.length; depth++) {
			const candidate = path[depth];
			const insideOption = buildDropInsideOption(
				candidate,
				depth,
				pointerX,
				pointerY
			);
			if (insideOption) {
				considerOption(insideOption, false);
			}
			const aroundOptions = buildDropAroundOptions(
				candidate,
				depth,
				pointerX,
				pointerY
			);
			// Check if these are sibling-reorder options
			const isSiblingReorder = dragParent && candidate.parentElement === dragParent;
			for (const option of aroundOptions) {
				considerOption(option, isSiblingReorder);
			}
		}

		// When hovering over a sibling, ALWAYS use sibling reorder options
		// regardless of what other "inside" options have lower scores.
		// This ensures drag-to-reorder siblings works as expected.
		return (pathIncludesSibling && bestSiblingOption)
			? bestSiblingOption
			: bestOption;
	}

	function refreshSelectedElementPath() {
		if (!selectedElement) {
			return;
		}
		const previousPath = selectedElementPath;
		const newPath = getElementPath(selectedElement);
		if (!newPath || newPath === previousPath) {
			return;
		}
		selectedElementPath = newPath;
		if (!previousPath) {
			return;
		}
		for (const change of styleChanges) {
			if (change && change.elementPath === previousPath) {
				change.elementPath = newPath;
			}
		}
	}

	// Patterns to match Tailwind color utility classes
	// Note: Tailwind escapes special chars in selectors, e.g. .text-[#ff0000]
	// Color names can have multiple hyphens like dark-blue-400
	// Double backslashes needed for template literal escaping
	const TAILWIND_COLOR_CLASS_PATTERNS = [
		// Text colors: text-red-500, text-dark-blue-400, text-[#ff0000], text-black, text-white
		/^\\.(text-([a-z]+(?:-[a-z]+)*-\\d+|black|white|\\\\?\\[[^\\]]+\\\\?\\]))$/,
		// Background colors: bg-red-500, bg-[#ff0000]
		/^\\.(bg-([a-z]+(?:-[a-z]+)*-\\d+|black|white|\\\\?\\[[^\\]]+\\\\?\\]))$/,
		// Border colors: border-red-500, border-[#ff0000]
		/^\\.(border-([a-z]+(?:-[a-z]+)*-\\d+|black|white|\\\\?\\[[^\\]]+\\\\?\\]))$/,
		// Ring colors: ring-red-500
		/^\\.(ring-([a-z]+(?:-[a-z]+)*-\\d+|black|white|transparent|\\\\?\\[[^\\]]+\\\\?\\]))$/,
		// Fill/stroke colors: fill-red-500, stroke-red-500
		/^\\.(fill-([a-z]+(?:-[a-z]+)*-\\d+|black|white|\\\\?\\[[^\\]]+\\\\?\\]))$/,
		/^\\.(stroke-([a-z]+(?:-[a-z]+)*-\\d+|black|white|\\\\?\\[[^\\]]+\\\\?\\]))$/,
	];

	// Map of CSS property to the actual color property in Tailwind compiled CSS
	const COLOR_PROPERTY_MAP = {
		'text-': 'color',
		'bg-': 'background-color',
		'border-': 'border-color',
		'ring-': '--tw-ring-color',
		'fill-': 'fill',
		'stroke-': 'stroke',
	};

	// Extract color from a Tailwind utility rule
	function extractColorFromTailwindRule(style, prefix) {
		const cssProperty = COLOR_PROPERTY_MAP[prefix];
		if (!cssProperty) return null;

		let colorValue = style.getPropertyValue(cssProperty);
		if (!colorValue) return null;

		colorValue = colorValue.trim();

		// Handle Tailwind's opacity variable pattern: rgb(R G B / var(--tw-X-opacity))
		// Extract just the color part (double backslashes for template literal escaping)
		const rgbMatch = colorValue.match(/^rgba?\\(\\s*(\\d+)[\\s,]+(\\d+)[\\s,]+(\\d+)/);
		if (rgbMatch) {
			const [, r, g, b] = rgbMatch;
			return 'rgb(' + r + ', ' + g + ', ' + b + ')';
		}

		if (colorValue && !colorValue.includes('var(')) {
			return colorValue;
		}

		return null;
	}

	// Collect Tailwind color tokens from stylesheet rules
	function collectTailwindColorTokens() {
		const tokens = [];
		const seen = new Set();
		const styleSheets = Array.from(document.styleSheets || []);

		for (const sheet of styleSheets) {
			if (!sheet) continue;
			try {
				const rules = sheet.cssRules || sheet.rules;
				if (!rules) continue;

				for (let i = 0; i < rules.length; i++) {
					const rule = rules[i];
					if (!rule || rule.type !== 1) continue; // Only STYLE_RULE

					const selector = rule.selectorText;
					if (!selector) continue;

					for (const pattern of TAILWIND_COLOR_CLASS_PATTERNS) {
						if (!pattern.test(selector)) continue;

						const className = selector.slice(1);
						if (seen.has(className)) continue;

						let prefix = null;
						for (const p of Object.keys(COLOR_PROPERTY_MAP)) {
							if (className.startsWith(p)) {
								prefix = p;
								break;
							}
						}
						if (!prefix) continue;

						const colorValue = extractColorFromTailwindRule(rule.style, prefix);
						if (!colorValue) continue;

						const converted = convertColorToHex(colorValue);
						if (!converted) continue;

						seen.add(className);
						tokens.push({
							name: className,
							value: colorValue,
							convertedColor: converted,
							isTailwindToken: true,
						});
					}
				}
			} catch {
				// Ignore cross-origin stylesheets
			}
		}

		return tokens;
	}

	function collectCssVariables(targetElement) {
		const results = [];
		const seen = new Set();
		const { names: propertyNames, propertyRuleValues } = getCustomPropertyNamesFromStyleSheets();

		if (propertyNames.size === 0) {
			try {
				const rootFallback = window.getComputedStyle(document.documentElement);
				for (let i = 0; i < rootFallback.length; i++) {
					const property = rootFallback[i];
					if (
						property &&
						property.charCodeAt(0) === 45 &&
						property.charCodeAt(1) === 45
					) {
						propertyNames.add(property);
					}
				}
				if (targetElement) {
					const targetFallback = window.getComputedStyle(targetElement);
					for (let i = 0; i < targetFallback.length; i++) {
						const property = targetFallback[i];
						if (
							property &&
							property.charCodeAt(0) === 45 &&
							property.charCodeAt(1) === 45
						) {
							propertyNames.add(property);
						}
					}
				}
			} catch {
				// ignore
			}
		}

		const rootStyle = (() => {
			try {
				return window.getComputedStyle(document.documentElement);
			} catch {
				return null;
			}
		})();
		const targetStyle = (() => {
			if (!targetElement) {
				return null;
			}
			try {
				return window.getComputedStyle(targetElement);
			} catch {
				return null;
			}
		})();

		const addToken = (property, value) => {
			if (!value) {
				return false;
			}
			const trimmed = value.trim();
			if (!trimmed || seen.has(property)) {
				return false;
			}
			seen.add(property);
			const entry = {
				name: property,
				value: trimmed,
			};
			// Try to convert the color for modern formats (oklch, oklab, etc.)
			const converted = convertColorToHex(trimmed);
			if (converted) {
				entry.convertedColor = converted;
			}
			results.push(entry);
			return true;
		};

		for (const property of propertyNames) {
			let added = false;
			if (rootStyle) {
				const rootValue = rootStyle.getPropertyValue(property);
				added = addToken(property, rootValue);
			}
			if (!added && targetStyle) {
				const targetValue = targetStyle.getPropertyValue(property);
				added = addToken(property, targetValue);
			}
			// Fallback to @property initial value if computed styles didn't have it
			if (!added && propertyRuleValues && propertyRuleValues.has(property)) {
				addToken(property, propertyRuleValues.get(property));
			}
		}

		// Also collect Tailwind color tokens from utility classes
		const tailwindTokens = collectTailwindColorTokens();
		for (const token of tailwindTokens) {
			if (!seen.has(token.name)) {
				seen.add(token.name);
				results.push(token);
			}
		}

		return results;
	}

	function getReactComponentInfo(element) {
		if (!element || typeof element !== 'object') return null;

		try {
			const reactKey = Object.keys(element).find(key =>
				key.startsWith('__reactFiber$') || key.startsWith('__reactInternalInstance$')
			);

			if (!reactKey) return null;

			const fiber = element[reactKey];
			if (!fiber) return null;

			let currentFiber = fiber;
			let componentName = null;
			let componentProps = null;

			while (currentFiber) {
				const type = currentFiber.type;
				const elementType = currentFiber.elementType;

				const getComponentNameFromType = (typeToCheck) => {
					if (!typeToCheck) return null;
					if (typeof typeToCheck === 'function') {
						return typeToCheck.displayName || typeToCheck.name || null;
					} else if (typeof typeToCheck === 'object' && typeToCheck !== null) {
						if (typeToCheck.$$typeof) {
							if (typeToCheck.render) {
								return typeToCheck.render.displayName || typeToCheck.render.name || 'ForwardRef';
							}
							if (typeToCheck.type) {
								return getComponentNameFromType(typeToCheck.type) || 'Memo';
							}
						}
					}
					return null;
				};

				const typeToCheck = elementType || type;

				if (typeToCheck && typeof typeToCheck !== 'string') {
					componentName = getComponentNameFromType(typeToCheck);

					if (!componentName && elementType && type && elementType !== type) {
						componentName = getComponentNameFromType(type);
					}

					if (currentFiber.memoizedProps) {
						componentProps = currentFiber.memoizedProps;
					} else if (currentFiber.pendingProps) {
						componentProps = currentFiber.pendingProps;
					}

					if (componentName) break;
				}

				currentFiber = currentFiber.return;
			}

			if (!componentName) return null;

			// Serialize props safely - must ensure all values are cloneable
			const serializedProps = componentProps ? Object.keys(componentProps).reduce((acc, key) => {
				const value = componentProps[key];
				if (value === null || value === undefined) {
					acc[key] = value;
				} else if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
					acc[key] = value;
				} else if (Array.isArray(value)) {
					// Arrays can contain DOM nodes (children), functions, etc - serialize safely
					try {
						acc[key] = JSON.parse(JSON.stringify(value));
					} catch {
						// If array can't be serialized, provide placeholder with length info
						acc[key] = '[Array(' + value.length + ')]';
					}
				} else if (typeof value === 'object') {
					// Check if it's a DOM node
					if (value && typeof value.nodeType === 'number') {
						acc[key] = '[DOMNode]';
					} else {
						// Try to serialize object, fallback to placeholder
						try {
							acc[key] = JSON.parse(JSON.stringify(value));
						} catch {
							acc[key] = '[Object]';
						}
					}
				} else if (typeof value === 'function') {
					acc[key] = '[Function]';
				} else {
					acc[key] = String(value);
				}
				return acc;
			}, {}) : null;

			return {
				name: componentName,
				props: serializedProps
			};
		} catch (e) {
			console.error('[CursorDevTools] Error getting React component info:', e);
			return null;
		}
	}

	function sendElementUpdate(skipExpensiveComputation, options) {
		if (!selectedElement || !window.cursorBrowser) {
			return;
		}
		try {
			const rect = selectedElement.getBoundingClientRect();

			// During drag operations, skip expensive style computations
			// Only send minimal position data to keep dragging smooth
			const shouldSkipExpensive = skipExpensiveComputation === true || dragState !== null;
			// Skip CSS variables collection during style updates - they don't change when
			// modifying styles on the same element, only when selecting a different element
			const skipCssVariables = options?.skipCssVariables === true;

			const updateData = {
				tagName: selectedElement.tagName,
				id: selectedElement.id || '',
				className: typeof selectedElement.className === 'string' ? selectedElement.className : '',
				rect: {
					top: rect.top,
					left: rect.left,
					width: rect.width,
					height: rect.height,
				},
				keepSelectionActive: true,
			};

			// Only compute expensive styles when not dragging
			if (!shouldSkipExpensive) {
				updateData.allStyles = getAllComputedStyles(selectedElement);
				// Skip CSS variables during style updates - they are cached in the panel
				// and only need to be collected when selecting a new element
				if (!skipCssVariables) {
					updateData.cssVariables = collectCssVariables(selectedElement);
					const reactInfo = getReactComponentInfo(selectedElement);
					if (reactInfo) {
						updateData.reactComponent = reactInfo;
					}
				}
			}

			window.cursorBrowser.send('element-updated', updateData);
		} catch (e) {
			console.error('[CursorDevTools] Error sending element update:', e);
			// Try to send a minimal update without potentially problematic data
			try {
				window.cursorBrowser.send('element-updated', {
					tagName: selectedElement.tagName,
					id: selectedElement.id || '',
					className: typeof selectedElement.className === 'string' ? selectedElement.className : '',
					keepSelectionActive: true,
				});
			} catch (e2) {
				console.error('[CursorDevTools] Failed to send even minimal element update:', e2);
			}
		}
	}

	function scheduleElementUpdate(force) {
		if (!selectedElement || !window.cursorBrowser) {
			return;
		}
		const shouldForce = force === true;
		if (shouldForce) {
			lastElementUpdateTime = typeof performance !== 'undefined'
				? performance.now()
				: 0;
			sendElementUpdate();
			return;
		}
		const now =
			typeof performance !== 'undefined' ? performance.now() : Date.now();
		if (now - lastElementUpdateTime >= DRAG_UPDATE_INTERVAL_MS) {
			lastElementUpdateTime = now;
			sendElementUpdate();
		} else if (!pendingElementUpdate) {
			pendingElementUpdate = true;
			requestAnimationFrame(() => {
				pendingElementUpdate = false;
				lastElementUpdateTime =
					typeof performance !== 'undefined'
						? performance.now()
						: Date.now();
				sendElementUpdate();
			});
		}
	}

	function scheduleHighlightUpdate() {
		if (!cssInspectorPanelOpen) {
			return;
		}
		if (pendingHighlightUpdate) {
			return;
		}
		pendingHighlightUpdate = true;
		requestAnimationFrame(() => {
			pendingHighlightUpdate = false;
			window.postMessage({ type: 'update-css-inspector-highlight' }, '*');
		});
	}

	function resetElementStylesForRecords(targetElement, records) {
		if (!targetElement || !Array.isArray(records) || records.length === 0) {
			return;
		}

		const earliestValues = new Map();
		for (const record of records) {
			if (!record || typeof record.property !== 'string') {
				continue;
			}
			if (!earliestValues.has(record.property)) {
				const hadInline = record.hadInlineStyle === true;
				// Use originalValue (pristine state before ANY modifications) if available,
				// otherwise fall back to oldValue for backwards compatibility
				const pristineValue =
					typeof record.originalValue === 'string' ? record.originalValue :
					typeof record.oldValue === 'string' ? record.oldValue : '';
				earliestValues.set(record.property, {
					value: pristineValue,
					hadInline: hadInline,
				});
			}
		}

		for (const [property, info] of earliestValues.entries()) {
			if (!info.hadInline || !info.value) {
				targetElement.style.removeProperty(property);
			} else {
				targetElement.style.setProperty(property, info.value);
			}
		}
	}

	function resetStyleChangesInDocument(changes) {
		if (!Array.isArray(changes) || changes.length === 0) {
			return;
		}

		const recordsByElement = new Map();
		let shouldUpdateSelectedElement = false;

		// Process DOM changes in REVERSE order (LIFO) to properly restore original state
		// This is crucial because later DOM changes may depend on earlier positions
		const domChanges = [];
		const styleChangesForReset = [];

		for (const change of changes) {
			if (!change || typeof change.property !== 'string') {
				continue;
			}

			if (
				change.property === 'dom-order' ||
				change.changeType === 'dom'
			) {
				domChanges.push(change);
			} else {
				styleChangesForReset.push(change);
			}
		}

		// Reset DOM changes in reverse order (most recent first)
		for (let i = domChanges.length - 1; i >= 0; i--) {
			const change = domChanges[i];
			if (resetDomOrderChange(change)) {
				shouldUpdateSelectedElement = true;
			}
		}

		// Process style changes - group by element
		for (const change of styleChangesForReset) {
			const targetElement = findElementForChange(change);
			if (!targetElement) {
				continue;
			}

			if (!recordsByElement.has(targetElement)) {
				recordsByElement.set(targetElement, []);
			}

			recordsByElement.get(targetElement).push(change);
		}

		for (const [element, records] of recordsByElement.entries()) {
			resetElementStylesForRecords(element, records);
			if (element === selectedElement) {
				shouldUpdateSelectedElement = true;
			}
		}

		styleChanges = [];

		if (shouldUpdateSelectedElement) {
			setTimeout(() => {
				sendElementUpdate();
			}, 50);
		}
		scheduleHighlightUpdate();
	}

	function cssInspectorEscapeClass(value) {
		if (!value) {
			return '';
		}
		if (typeof CSS !== 'undefined' && typeof CSS.escape === 'function') {
			return CSS.escape(value);
		}
		return value.replace(/([^\\w-])/g, '\\\\$1');
	}

	function findElementForChange(change) {
		let targetElement = null;

		// First, try to find by unique ID (most reliable method)
		if (change.elementUniqueId) {
			targetElement = getElementByUniqueId(change.elementUniqueId);
		}

		// Fallback to element path
		if (!targetElement && change.elementPath) {
			targetElement = getElementFromPath(change.elementPath);
		}

		// Fallback to DOM ID
		if (!targetElement && change.elementId) {
			targetElement = document.getElementById(change.elementId);
		}

		// PRIORITY: Use currently selected element before generic tag+class selector
		// The selected element is much more reliable than a generic selector which
		// can match multiple elements on the page
		if (!targetElement && selectedElement) {
			// Verify the selected element matches basic criteria (tag name if provided)
			const matchesTag = !change.elementTagName ||
				selectedElement.tagName.toUpperCase() === String(change.elementTagName).toUpperCase();
			if (matchesTag) {
				targetElement = selectedElement;
			}
		}

		// Last resort: tag + class selector (can match wrong element if multiple exist)
		if (!targetElement && change.elementTagName) {
			const tagName = String(change.elementTagName).toLowerCase();
			let selector = tagName;
			if (change.elementClassName) {
				const classes = String(change.elementClassName)
					.split(/\\s+/)
					.filter(Boolean)
					.map((cls) => '.' + cssInspectorEscapeClass(cls));
				if (classes.length > 0) {
					selector += classes.join('');
				}
			}
			try {
				targetElement = document.querySelector(selector);
			} catch (error) {
				// ignore invalid selectors
			}
		}

		return targetElement;
	}

	function getDomOrderChangeData(change) {
		if (change && change.domOrderChange) {
			return change.domOrderChange;
		}
		if (change && typeof change.oldValue === 'string') {
			try {
				const parsed = JSON.parse(change.oldValue);
				return {
					originalParentPath: parsed.parentPath || '',
					originalNextSiblingPath: parsed.nextSiblingPath || null,
					originalIndex:
						typeof parsed.index === 'number' ? parsed.index : -1,
					newParentPath: '',
					newNextSiblingPath: null,
					newIndex: -1,
				};
			} catch (error) {
				return null;
			}
		}
		return null;
	}

	function resetDomOrderChange(change) {
		const domData = getDomOrderChangeData(change);
		if (!domData) {
			return false;
		}

		const element = findElementForChange(change);
		if (!element) {
			return false;
		}

		// Try to find the original parent by unique ID first, then fallback to path
		let parent = null;
		if (domData.originalParentUniqueId) {
			parent = getElementByUniqueId(domData.originalParentUniqueId);
		}
		if (!parent && domData.originalParentPath) {
			parent = getElementFromPath(domData.originalParentPath);
		}
		if (!parent) {
			return false;
		}

		// Try to find the original next sibling by unique ID first, then fallback to path
		let referenceElement = null;
		if (domData.originalNextSiblingUniqueId) {
			const candidate = getElementByUniqueId(domData.originalNextSiblingUniqueId);
			if (candidate && candidate.parentElement === parent) {
				referenceElement = candidate;
			}
		}
		if (!referenceElement && domData.originalNextSiblingPath) {
			const candidate = getElementFromPath(domData.originalNextSiblingPath);
			if (candidate && candidate.parentElement === parent) {
				referenceElement = candidate;
			}
		}

		try {
			parent.insertBefore(element, referenceElement);
		} catch (error) {
			try {
				parent.appendChild(element);
			} catch (innerError) {
				// Ignore inability to restore DOM order
			}
		}
		return element === selectedElement;
	}

	function restoreSuppressedLinkDragState() {
		if (
			!suppressedLinkDragState ||
			!suppressedLinkDragState.element
		) {
			suppressedLinkDragState = null;
			return;
		}
		const { element, hadAttribute, attributeValue, propertyValue } =
			suppressedLinkDragState;
		try {
			if (typeof element.draggable === 'boolean') {
				element.draggable = propertyValue;
			}
			if (hadAttribute) {
				if (attributeValue === null) {
					element.setAttribute('draggable', '');
				} else {
					element.setAttribute('draggable', attributeValue);
				}
			} else {
				element.removeAttribute('draggable');
			}
		} catch {
			// Ignore inability to restore draggable state
		}
		suppressedLinkDragState = null;
	}

	function suppressLinkDragBehavior(element) {
		if (
			typeof HTMLAnchorElement === 'undefined' ||
			!(element instanceof HTMLAnchorElement)
		) {
			return;
		}
		restoreSuppressedLinkDragState();
		const hadAttribute = element.hasAttribute('draggable');
		const attributeValue = hadAttribute ? element.getAttribute('draggable') : null;
		const propertyValue =
			typeof element.draggable === 'boolean' ? element.draggable : false;
		try {
			element.setAttribute('draggable', 'false');
			element.draggable = false;
		} catch {
			// Ignore inability to override draggable state
		}
		suppressedLinkDragState = {
			element,
			hadAttribute,
			attributeValue,
			propertyValue,
		};
	}

	function detachDragHandlers() {
		// Clean up pending drag detection if active
		if (pendingDragDetection) {
			window.removeEventListener('pointermove', handlePendingDragMove, true);
			window.removeEventListener('pointerup', handlePendingDragUp, true);
			window.removeEventListener('pointercancel', handlePendingDragUp, true);
			pendingDragDetection = null;
		}

		if (dragTargetElement) {
			dragTargetElement.removeEventListener(
				'pointerdown',
				handlePointerDown,
				true
			);
			dragTargetElement.removeEventListener(
				'dragstart',
				preventNativeDrag,
				true
			);
			if (dragState) {
				try {
					dragTargetElement.releasePointerCapture(dragState.pointerId);
				} catch (error) {
					// Ignore inability to release pointer capture during cleanup
				}
			}
			if (dragState && dragState.mode === 'flow') {
				restoreFlowDragVisualState();
			}
			restoreSuppressedLinkDragState();
			dragTargetElement = null;
		}
		window.removeEventListener('pointermove', handlePointerMove, true);
		window.removeEventListener('pointerup', handlePointerUp, true);
		window.removeEventListener('pointercancel', handlePointerUp, true);
		dragState = null;
		hideFlowDropIndicator();
		notifyDragState(false);
	}

	function attachDragHandlers(element) {
		if (!element) {
			return;
		}
		if (dragTargetElement === element) {
			return;
		}
		detachDragHandlers();
		dragTargetElement = element;
		suppressLinkDragBehavior(element);
		dragTargetElement.addEventListener('pointerdown', handlePointerDown, true);
		dragTargetElement.addEventListener('dragstart', preventNativeDrag, true);
	}

	function preventNativeDrag(event) {
		event.preventDefault();
	}

	function handlePointerDown(event) {
		if (!cssInspectorPanelOpen || !dragTargetElement) {
			return;
		}
		if (event.button !== 0) {
			return;
		}
		const targetNode =
			event.target instanceof Node ? event.target : null;
		if (!targetNode || !dragTargetElement.contains(targetNode)) {
			return;
		}

		if (dragState) {
			return;
		}

		// If clicking on a child element, start pending drag detection.
		// We'll decide between "select child" vs "drag parent" based on movement.
		if (targetNode !== dragTargetElement) {
			// Start tracking for potential drag
			pendingDragDetection = {
				pointerId: event.pointerId,
				startX: event.clientX,
				startY: event.clientY,
				targetNode: targetNode,
			};

			// Add listeners to detect movement or release
			window.addEventListener('pointermove', handlePendingDragMove, true);
			window.addEventListener('pointerup', handlePendingDragUp, true);
			window.addEventListener('pointercancel', handlePendingDragUp, true);
			return;
		}

		const computed = window.getComputedStyle(dragTargetElement);
		const styleDeclaration = dragTargetElement.style || {};
		const positionValue = (computed.position || '').toLowerCase();
		const isAbsolutePositioned = positionValue === 'absolute';

		let nextDragState = null;

		if (isAbsolutePositioned) {
			ensurePositionContext(dragTargetElement, computed);
			const leftValue = parseFloat(computed.left);
			const topValue = parseFloat(computed.top);
			const inlineLeftValue =
				typeof styleDeclaration.getPropertyValue === 'function'
					? styleDeclaration.getPropertyValue('left') || ''
					: styleDeclaration.left || '';
			const inlineTopValue =
				typeof styleDeclaration.getPropertyValue === 'function'
					? styleDeclaration.getPropertyValue('top') || ''
					: styleDeclaration.top || '';

			// Get the inverse of the ancestor transform matrix to properly handle
			// dragging rotated/transformed elements. This converts screen-space
			// mouse deltas to the element's local coordinate system.
			const ancestorMatrix = getAncestorTransformMatrix(dragTargetElement);
			let inverseMatrix = null;
			if (!ancestorMatrix.isIdentity) {
				try {
					inverseMatrix = ancestorMatrix.inverse();
				} catch {
					// Matrix is singular/non-invertible, fall back to no transform
					inverseMatrix = null;
				}
			}

			nextDragState = {
				mode: 'absolute',
				pointerId: event.pointerId,
				startX: event.clientX,
				startY: event.clientY,
				startLeft: Number.isFinite(leftValue) ? leftValue : 0,
				startTop: Number.isFinite(topValue) ? topValue : 0,
				parentElement: dragTargetElement.parentElement || null,
				originalParentElement: dragTargetElement.parentElement || null,
				originalNextSibling: dragTargetElement.nextSibling || null,
				initialComputedLeft: typeof computed.left === 'string' ? computed.left : '',
				initialComputedTop: typeof computed.top === 'string' ? computed.top : '',
				initialInlineLeft: inlineLeftValue,
				initialInlineTop: inlineTopValue,
				hadInlineLeft: inlineLeftValue.trim().length > 0,
				hadInlineTop: inlineTopValue.trim().length > 0,
				inverseTransformMatrix: inverseMatrix,
			};
		} else {
			const parentElement = dragTargetElement.parentElement;
			if (!parentElement) {
				return;
			}
			const originalNextElementSibling = dragTargetElement.nextElementSibling;
			const originalNextSiblingPath = originalNextElementSibling
				? getElementPath(originalNextElementSibling)
				: null;
			const originalIndex = getElementIndexWithinParent(dragTargetElement);

			// Get the inverse of the ancestor transform matrix to properly handle
			// dragging rotated/transformed elements. This converts screen-space
			// mouse deltas to the element's local coordinate system.
			const ancestorMatrix = getAncestorTransformMatrix(dragTargetElement);
			let inverseMatrix = null;
			if (!ancestorMatrix.isIdentity) {
				try {
					inverseMatrix = ancestorMatrix.inverse();
				} catch {
					// Matrix is singular/non-invertible, fall back to no transform
					inverseMatrix = null;
				}
			}

			nextDragState = {
				mode: 'flow',
				pointerId: event.pointerId,
				startX: event.clientX,
				startY: event.clientY,
				parentElement: parentElement,
				originalParentElement: parentElement,
				originalNextSibling: dragTargetElement.nextSibling,
				layoutInfo: getFlowLayoutInfo(parentElement),
				hasMoved: false,
				baseTransform: styleDeclaration.transform || '',
				originalTransition: styleDeclaration.transition || '',
				originalWillChange: styleDeclaration.willChange || '',
				originalZIndex: styleDeclaration.zIndex || '',
				pendingDropParent: parentElement,
				pendingDropReference: dragTargetElement.nextSibling || null,
				originalParentPath: getElementPath(parentElement) || '',
				originalNextSiblingPath: originalNextSiblingPath,
				originalIndex: originalIndex,
				inverseTransformMatrix: inverseMatrix,
			};
			styleDeclaration.transition = 'none';
			styleDeclaration.willChange = 'transform';
			styleDeclaration.zIndex = '2147483646';
		}

		event.preventDefault();
		event.stopPropagation();

		dragState = nextDragState;

		try {
			dragTargetElement.setPointerCapture(event.pointerId);
		} catch (error) {
			// Ignore inability to capture pointer (may happen on some elements)
		}

		window.addEventListener('pointermove', handlePointerMove, true);
		window.addEventListener('pointerup', handlePointerUp, true);
		window.addEventListener('pointercancel', handlePointerUp, true);
		notifyDragState(true);
	}

	function handlePointerMove(event) {
		if (
			!dragState ||
			!dragTargetElement ||
			event.pointerId !== dragState.pointerId
		) {
			return;
		}

		event.preventDefault();
		event.stopPropagation();

		if (dragState.mode === 'flow') {
			handleFlowDragMove(event);
			return;
		}

		hideFlowDropIndicator();

		const deltaX = event.clientX - dragState.startX;
		const deltaY = event.clientY - dragState.startY;

		// Transform the screen-space delta to the element's local coordinate system
		// This handles cases where ancestors have rotation or other transforms
		const localDelta = transformDeltaToLocal(
			deltaX,
			deltaY,
			dragState.inverseTransformMatrix
		);

		const nextLeft = dragState.startLeft + localDelta.x;
		const nextTop = dragState.startTop + localDelta.y;

		dragTargetElement.style.setProperty('left', Math.round(nextLeft) + 'px');
		dragTargetElement.style.setProperty('top', Math.round(nextTop) + 'px');

		scheduleElementUpdate(false);
		scheduleHighlightUpdate();
	}

	function handleFlowDragMove(event) {
		if (
			!dragState ||
			dragState.mode !== 'flow' ||
			!dragTargetElement ||
			!dragState.parentElement
		) {
			return;
		}

		const deltaX = event.clientX - dragState.startX;
		const deltaY = event.clientY - dragState.startY;
		if (
			!dragState.hasMoved &&
			Math.hypot(deltaX, deltaY) < FLOW_DRAG_DISTANCE_THRESHOLD
		) {
			return;
		}
		dragState.hasMoved = true;

		applyFlowDragTransform(deltaX, deltaY);
		scheduleHighlightUpdate();

		const dropTarget = findBestFlowDropTarget(
			event.clientX,
			event.clientY
		);
		if (!dropTarget) {
			hideFlowDropIndicator();
			dragState.pendingDropParent = null;
			dragState.pendingDropReference = null;
			return;
		}

		if (dragState.parentElement !== dropTarget.parent) {
			dragState.parentElement = dropTarget.parent;
		}

		dragState.layoutInfo = {
			axis: dropTarget.axis,
			reverse: dropTarget.reverse,
		};

		updateFlowDropIndicator(
			dropTarget.parent,
			dropTarget.reference,
			dropTarget.axis,
			dropTarget.reverse
		);
		dragState.pendingDropParent = dropTarget.parent;
		dragState.pendingDropReference = dropTarget.reference || null;
	}

	function handlePointerUp(event) {
		if (!dragState || event.pointerId !== dragState.pointerId) {
			return;
		}

		event.preventDefault();
		event.stopPropagation();

		if (dragTargetElement) {
			try {
				dragTargetElement.releasePointerCapture(dragState.pointerId);
			} catch (error) {
				// Ignore inability to release pointer capture
			}
		}

		window.removeEventListener('pointermove', handlePointerMove, true);
		window.removeEventListener('pointerup', handlePointerUp, true);
		window.removeEventListener('pointercancel', handlePointerUp, true);
		hideFlowDropIndicator();

		if (dragState.mode === 'flow') {
			commitFlowDropTarget();
		} else if (dragState.mode === 'absolute') {
			commitAbsoluteDragChanges();
		}

		dragState = null;

		scheduleElementUpdate(true);
		scheduleHighlightUpdate();
		notifyDragState(false);
	}

	// =============================================================================
	// Pending Drag Detection (click vs drag on child elements)
	// =============================================================================
	// When the user clicks on a child of the selected element, we need to distinguish
	// between "click to select child" and "drag to move parent". We track movement
	// and if it exceeds a threshold, we initiate drag on the parent element.

	function cleanupPendingDragDetection() {
		window.removeEventListener('pointermove', handlePendingDragMove, true);
		window.removeEventListener('pointerup', handlePendingDragUp, true);
		window.removeEventListener('pointercancel', handlePendingDragUp, true);
		pendingDragDetection = null;
	}

	function handlePendingDragMove(event) {
		if (!pendingDragDetection || event.pointerId !== pendingDragDetection.pointerId) {
			return;
		}

		const deltaX = event.clientX - pendingDragDetection.startX;
		const deltaY = event.clientY - pendingDragDetection.startY;
		const distance = Math.hypot(deltaX, deltaY);

		// If movement exceeds threshold, convert to a real drag on the parent
		if (distance >= DRAG_INITIATION_THRESHOLD) {
			// Store the original start position before cleanup
			const startX = pendingDragDetection.startX;
			const startY = pendingDragDetection.startY;
			const pointerId = pendingDragDetection.pointerId;

			// Clean up pending detection
			cleanupPendingDragDetection();

			// Now initiate a real drag on the parent element
			if (!dragTargetElement || !cssInspectorPanelOpen) {
				return;
			}

			const computed = window.getComputedStyle(dragTargetElement);
			const styleDeclaration = dragTargetElement.style || {};
			const positionValue = (computed.position || '').toLowerCase();
			const isAbsolutePositioned = positionValue === 'absolute';

			let nextDragState = null;

			if (isAbsolutePositioned) {
				ensurePositionContext(dragTargetElement, computed);
				const leftValue = parseFloat(computed.left);
				const topValue = parseFloat(computed.top);
				const inlineLeftValue =
					typeof styleDeclaration.getPropertyValue === 'function'
						? styleDeclaration.getPropertyValue('left') || ''
						: styleDeclaration.left || '';
				const inlineTopValue =
					typeof styleDeclaration.getPropertyValue === 'function'
						? styleDeclaration.getPropertyValue('top') || ''
						: styleDeclaration.top || '';

				// Get the inverse of the ancestor transform matrix to properly handle
				// dragging rotated/transformed elements. This converts screen-space
				// mouse deltas to the element's local coordinate system.
				const ancestorMatrix = getAncestorTransformMatrix(dragTargetElement);
				let inverseMatrix = null;
				if (!ancestorMatrix.isIdentity) {
					try {
						inverseMatrix = ancestorMatrix.inverse();
					} catch {
						// Matrix is singular/non-invertible, fall back to no transform
						inverseMatrix = null;
					}
				}

				nextDragState = {
					mode: 'absolute',
					pointerId: pointerId,
					startX: startX,
					startY: startY,
					startLeft: Number.isFinite(leftValue) ? leftValue : 0,
					startTop: Number.isFinite(topValue) ? topValue : 0,
					parentElement: dragTargetElement.parentElement || null,
					originalParentElement: dragTargetElement.parentElement || null,
					originalNextSibling: dragTargetElement.nextSibling || null,
					initialComputedLeft: typeof computed.left === 'string' ? computed.left : '',
					initialComputedTop: typeof computed.top === 'string' ? computed.top : '',
					initialInlineLeft: inlineLeftValue,
					initialInlineTop: inlineTopValue,
					hadInlineLeft: inlineLeftValue.trim().length > 0,
					hadInlineTop: inlineTopValue.trim().length > 0,
					inverseTransformMatrix: inverseMatrix,
				};
			} else {
				const parentElement = dragTargetElement.parentElement;
				if (!parentElement) {
					return;
				}
				const originalNextElementSibling = dragTargetElement.nextElementSibling;
				const originalNextSiblingPath = originalNextElementSibling
					? getElementPath(originalNextElementSibling)
					: null;
				const originalIndex = getElementIndexWithinParent(dragTargetElement);

				// Get the inverse of the ancestor transform matrix to properly handle
				// dragging rotated/transformed elements. This converts screen-space
				// mouse deltas to the element's local coordinate system.
				const ancestorMatrix = getAncestorTransformMatrix(dragTargetElement);
				let inverseMatrix = null;
				if (!ancestorMatrix.isIdentity) {
					try {
						inverseMatrix = ancestorMatrix.inverse();
					} catch {
						// Matrix is singular/non-invertible, fall back to no transform
						inverseMatrix = null;
					}
				}

				nextDragState = {
					mode: 'flow',
					pointerId: pointerId,
					startX: startX,
					startY: startY,
					parentElement: parentElement,
					originalParentElement: parentElement,
					originalNextSibling: dragTargetElement.nextSibling,
					layoutInfo: getFlowLayoutInfo(parentElement),
					hasMoved: false,
					baseTransform: styleDeclaration.transform || '',
					originalTransition: styleDeclaration.transition || '',
					originalWillChange: styleDeclaration.willChange || '',
					originalZIndex: styleDeclaration.zIndex || '',
					pendingDropParent: parentElement,
					pendingDropReference: dragTargetElement.nextSibling || null,
					originalParentPath: getElementPath(parentElement) || '',
					originalNextSiblingPath: originalNextSiblingPath,
					originalIndex: originalIndex,
					inverseTransformMatrix: inverseMatrix,
				};
				styleDeclaration.transition = 'none';
				styleDeclaration.willChange = 'transform';
				styleDeclaration.zIndex = '2147483646';
			}

			dragState = nextDragState;

			try {
				dragTargetElement.setPointerCapture(pointerId);
			} catch (error) {
				// Ignore inability to capture pointer
			}

			window.addEventListener('pointermove', handlePointerMove, true);
			window.addEventListener('pointerup', handlePointerUp, true);
			window.addEventListener('pointercancel', handlePointerUp, true);
			notifyDragState(true);

			// Immediately process the current move event to start visual feedback
			handlePointerMove(event);
		}
	}

	function handlePendingDragUp(event) {
		if (!pendingDragDetection || event.pointerId !== pendingDragDetection.pointerId) {
			return;
		}

		// Movement didn't exceed threshold - this is a click to select child
		// Let the click event propagate naturally to select the child element
		cleanupPendingDragDetection();

		// The click will be handled by the normal element selection system
		// in browserOverlay.ts, which uses elementFromPoint to select the
		// topmost element at the click position
	}

	// =============================================================================
	// React Prop Update Support
	// =============================================================================

	function getReactFiber(element) {
		if (!element || typeof element !== 'object') return null;

		try {
			const reactKey = Object.keys(element).find(key =>
				key.startsWith('__reactFiber$') || key.startsWith('__reactInternalInstance$')
			);

			if (!reactKey) return null;
			return element[reactKey] || null;
		} catch (e) {
			return null;
		}
	}

	function findComponentFiber(element) {
		const fiber = getReactFiber(element);
		if (!fiber) return null;

		let currentFiber = fiber;
		while (currentFiber) {
			const type = currentFiber.type;
			const elementType = currentFiber.elementType;
			const typeToCheck = elementType || type;

			// Check if this is a function or class component (not a host element like 'div')
			if (typeToCheck && typeof typeToCheck !== 'string') {
				return currentFiber;
			}

			currentFiber = currentFiber.return;
		}

		return null;
	}

	// Find the component fiber that has a specific prop
	function findComponentFiberWithProp(element, propPath) {
		const fiber = getReactFiber(element);
		if (!fiber) return null;

		const topLevelProp = parsePathToParts(propPath)[0];
		if (!topLevelProp) return findComponentFiber(element);

		let currentFiber = fiber;
		let lastComponentFiber = null;

		while (currentFiber) {
			const type = currentFiber.type;
			const elementType = currentFiber.elementType;
			const typeToCheck = elementType || type;

			// Check if this is a function or class component
			if (typeToCheck && typeof typeToCheck !== 'string') {
				const props = currentFiber.memoizedProps || currentFiber.pendingProps;
				if (props && Object.prototype.hasOwnProperty.call(props, topLevelProp)) {
					return currentFiber;
				}
				lastComponentFiber = currentFiber;
			}

			currentFiber = currentFiber.return;
		}

		// Fall back to the first component fiber found
		return lastComponentFiber || findComponentFiber(element);
	}

	function getFiberID(fiber) {
		// Try to get the fiber ID from React DevTools
		const hook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (hook && hook.renderers) {
			for (const [rendererID, renderer] of hook.renderers) {
				if (renderer && renderer.getFiberIDForNative) {
					// Try to find a native element in the fiber tree
					let searchFiber = fiber;
					while (searchFiber) {
						if (searchFiber.stateNode && searchFiber.stateNode.nodeType === 1) {
							const id = renderer.getFiberIDForNative(searchFiber.stateNode);
							if (id !== null && id !== undefined) {
								return { rendererID, fiberID: id, renderer };
							}
						}
						searchFiber = searchFiber.child || searchFiber.return;
						if (searchFiber === fiber) break; // Prevent infinite loop
					}
				}
			}
		}
		return null;
	}

	function parsePathToParts(path) {
		// Parse path like "foo.bar[0].baz" into ["foo", "bar", 0, "baz"]
		const parts = [];
		const regex = /([^[.]+)|\\[(\\d+)\\]/g;
		let match;
		while ((match = regex.exec(path)) !== null) {
			if (match[1] !== undefined) {
				parts.push(match[1]);
			} else if (match[2] !== undefined) {
				parts.push(parseInt(match[2], 10));
			}
		}
		return parts;
	}

	function setNestedValue(obj, path, value) {
		if (!obj || typeof obj !== 'object') return false;

		const parts = parsePathToParts(path);
		if (parts.length === 0) return false;

		let current = obj;
		for (let i = 0; i < parts.length - 1; i++) {
			const part = parts[i];
			if (current[part] === undefined || current[part] === null) {
				// Create intermediate objects/arrays as needed
				const nextPart = parts[i + 1];
				current[part] = typeof nextPart === 'number' ? [] : {};
			}
			current = current[part];
			if (typeof current !== 'object') return false;
		}

		const lastPart = parts[parts.length - 1];
		current[lastPart] = value;
		return true;
	}

	function shallowCloneProps(props) {
		// Shallow clone that preserves functions and non-serializable values
		if (!props || typeof props !== 'object') return props;
		const clone = {};
		for (const key of Object.keys(props)) {
			clone[key] = props[key];
		}
		return clone;
	}

	function deepCloneWithPath(obj, path, newValue) {
		// Clone only the path that needs to change, preserving other references
		const parts = parsePathToParts(path);
		if (parts.length === 0) return obj;

		function cloneAtDepth(current, depth) {
			if (depth >= parts.length) {
				return newValue;
			}

			const part = parts[depth];
			const isLast = depth === parts.length - 1;

			if (Array.isArray(current)) {
				const clone = [...current];
				if (isLast) {
					clone[part] = newValue;
				} else {
					clone[part] = cloneAtDepth(current[part], depth + 1);
				}
				return clone;
			} else if (current && typeof current === 'object') {
				const clone = { ...current };
				if (isLast) {
					clone[part] = newValue;
				} else {
					clone[part] = cloneAtDepth(current[part], depth + 1);
				}
				return clone;
			}

			return current;
		}

		return cloneAtDepth(obj, 0);
	}

	function forceReactUpdate(fiber) {
		if (!fiber) return false;

		try {
			// Method 1: Use React DevTools overrideProps if available (most reliable)
			const hook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
			if (hook && hook.renderers) {
				for (const [rendererID, renderer] of hook.renderers) {
					if (renderer && renderer.overrideProps) {
						// Find the fiber ID
						let targetFiber = fiber;
						let fiberID = null;

						// Walk up to find a fiber that DevTools knows about
						while (targetFiber && fiberID === null) {
							if (renderer.getFiberIDForNative && targetFiber.stateNode && targetFiber.stateNode.nodeType === 1) {
								fiberID = renderer.getFiberIDForNative(targetFiber.stateNode);
							}
							if (fiberID === null) {
								targetFiber = targetFiber.return;
							}
						}

						if (fiberID !== null) {
							// DevTools overrideProps expects the fiber ID and a path array
							return { renderer, rendererID, fiberID };
						}
					}
				}
			}
			return null;
		} catch (e) {
			console.error('[CursorDevTools] Failed to get DevTools renderer:', e);
			return null;
		}
	}

	function triggerReactRerender(fiber) {
		if (!fiber) return false;

		try {
			// Method 1: Try to find a useState/useReducer dispatch in the component
			// We need to force an actual state change to bypass React's bailout optimization
			let currentFiber = fiber;
			let attempts = 0;
			const maxAttempts = 10;

			while (currentFiber && attempts < maxAttempts) {
				attempts++;
				let hookState = currentFiber.memoizedState;
				let hookIndex = 0;

				while (hookState) {
					// Check if this looks like a useState/useReducer hook (has queue with dispatch)
					if (hookState.queue && typeof hookState.queue.dispatch === 'function') {
						try {
							const dispatch = hookState.queue.dispatch;
							const currentValue = hookState.memoizedState;

							// Force an actual state change by using a unique symbol or wrapped object
							// This ensures React doesn't bail out
							if (typeof currentValue === 'object' && currentValue !== null) {
								// For objects, create a new reference with same content
								dispatch(function(prev) {
									if (Array.isArray(prev)) {
										return [...prev];
									} else if (prev && typeof prev === 'object') {
										return { ...prev };
									}
									return prev;
								});
								return true;
							} else if (typeof currentValue === 'number') {
								// For numbers, we can do a micro-increment then revert
								// Schedule two updates: one to change, one to revert
								// We add at the 7th decimal place (1e-7) and round to 6 decimal places to remove it
								dispatch(function(prev) { return prev + 0.0000001; });
								requestAnimationFrame(function() {
									dispatch(function(prev) { return Math.round(prev * 1000000) / 1000000; });
								});
								return true;
							} else {
								// For primitives, try to use React's internal scheduler
								// by creating a temporary wrapper and unwrapping
								const forceUpdateSymbol = Symbol('forceUpdate');
								dispatch(function(prev) {
									// Return a new wrapper object to force update
									return { __forceUpdate: forceUpdateSymbol, value: prev };
								});
								// Immediately dispatch again to restore original value
								requestAnimationFrame(function() {
									dispatch(function(wrapped) {
										if (wrapped && typeof wrapped === 'object' && '__forceUpdate' in wrapped) {
											return wrapped.value;
										}
										return wrapped;
									});
								});
								return true;
							}
						} catch (e) {
							// Continue to next hook
						}
					}
					hookState = hookState.next;
					hookIndex++;
				}
				// Try the child fiber (for HOCs wrapping the actual component)
				currentFiber = currentFiber.child;
			}

			// Method 2: Try forceUpdate for class components
			if (fiber.stateNode && typeof fiber.stateNode.forceUpdate === 'function') {
				fiber.stateNode.forceUpdate();
				return true;
			}

			// Method 3: Try React DevTools scheduleRefresh
			const hook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
			if (hook && hook.renderers) {
				for (const [, renderer] of hook.renderers) {
					if (renderer && typeof renderer.scheduleRefresh === 'function') {
						try {
							renderer.scheduleRefresh(fiber, fiber);
							return true;
						} catch (e) {
							// Continue
						}
					}
				}
			}

			// Method 4: Try to find the root and schedule an update from there
			try {
				let rootFiber = fiber;
				while (rootFiber.return) {
					rootFiber = rootFiber.return;
				}
				if (rootFiber.stateNode && rootFiber.stateNode.current) {
					// This is a FiberRoot
					const container = rootFiber.stateNode.containerInfo;
					if (container && container._reactRootContainer) {
						const root = container._reactRootContainer._internalRoot || container._reactRootContainer;
						if (root && root.render) {
							// Force a re-render by calling render again
						}
					}
				}
			} catch (e) {
				// Continue without this method
			}

			return false;
		} catch (e) {
			return false;
		}
	}

	// Try to find where a prop value is rendered in the DOM
	function findPropValueInDOM(element, propPath, currentValue) {
		if (currentValue === null || currentValue === undefined) return [];

		const valueStr = String(currentValue);
		if (valueStr === '' || valueStr === '[Object]' || valueStr === '[Function]' || valueStr === '[Array]') {
			return [];
		}

		const matches = [];

		// Search within a node and its descendants for text matching the prop value
		function searchNode(node) {
			if (node.nodeType === 3) { // Text node
				const text = node.textContent || '';
				if (text.includes(valueStr)) {
					matches.push({ node, type: 'text' });
				}
			} else if (node.nodeType === 1) { // Element node
				// Check common attributes that might contain the value
				const el = node;
				if (el.getAttribute && el.getAttribute('value') === valueStr) {
					matches.push({ node: el, type: 'value-attr' });
				}
				if (el.value === valueStr) {
					matches.push({ node: el, type: 'value-prop' });
				}
				// Check aria-label and title
				if (el.getAttribute && el.getAttribute('aria-label') === valueStr) {
					matches.push({ node: el, type: 'aria-label' });
				}
				// Recurse into children
				for (const child of node.childNodes) {
					searchNode(child);
				}
			}
		}

		// Start search from the element and also walk up to find common parent
		searchNode(element);

		// If no matches found in element, try searching from parent elements
		if (matches.length === 0) {
			let parent = element.parentElement;
			let depth = 0;
			while (parent && depth < 5 && matches.length === 0) {
				searchNode(parent);
				parent = parent.parentElement;
				depth++;
			}
		}

		return matches;
	}

	// Update DOM directly as a visual feedback mechanism
	function updateDOMWithPropValue(element, propPath, oldValue, newValue) {
		const matches = findPropValueInDOM(element, propPath, oldValue);

		const newValueStr = String(newValue);
		const oldValueStr = String(oldValue);
		let updatedCount = 0;

		for (const match of matches) {
			try {
				if (match.type === 'text') {
					const currentText = match.node.textContent || '';
					// Replace all occurrences
					const newText = currentText.split(oldValueStr).join(newValueStr);
					if (newText !== currentText) {
						match.node.textContent = newText;
						updatedCount++;
					}
				} else if (match.type === 'value-attr') {
					match.node.setAttribute('value', newValueStr);
					updatedCount++;
				} else if (match.type === 'value-prop') {
					match.node.value = newValueStr;
					updatedCount++;
				} else if (match.type === 'aria-label') {
					match.node.setAttribute('aria-label', newValueStr);
					updatedCount++;
				}
			} catch (e) {
				// Failed to update DOM match
			}
		}

		return updatedCount > 0;
	}

	function getNestedValue(obj, path) {
		if (!obj) return undefined;
		const parts = parsePathToParts(path);
		let current = obj;
		for (const part of parts) {
			if (current === null || current === undefined) return undefined;
			current = current[part];
		}
		return current;
	}

	function updateReactProp(element, propPath, newValue) {
		// Use the smarter finder that looks for a component with the specific prop
		const componentFiber = findComponentFiberWithProp(element, propPath);
		if (!componentFiber) {
			// Still try DOM manipulation
			updateDOMWithPropValue(element, propPath, undefined, newValue);
			return false;
		}

		// Get old value for DOM matching
		const currentProps = componentFiber.memoizedProps || componentFiber.pendingProps || {};
		const oldValue = getNestedValue(currentProps, propPath);

		let devToolsSuccess = false;

		try {
			// Method 1: Try to use React DevTools overrideProps API
			const hook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
			if (hook && hook.renderers) {
				for (const [rendererID, renderer] of hook.renderers) {
					if (renderer && typeof renderer.overrideProps === 'function') {
						let fiberID = null;

						// Method 1a: Try to get fiber ID from the selected element directly
						if (typeof renderer.getFiberIDForNative === 'function') {
							fiberID = renderer.getFiberIDForNative(element);
						}

						// Method 1b: Walk down from component fiber to find a DOM node
						if (fiberID === null && typeof renderer.getFiberIDForNative === 'function') {
							const findDOMNode = (f, depth) => {
								if (!f || depth > 50) return null;
								if (f.stateNode && f.stateNode.nodeType === 1) return f.stateNode;
								if (f.child) return findDOMNode(f.child, depth + 1);
								return null;
							};
							const domNode = findDOMNode(componentFiber, 0);
							if (domNode) {
								fiberID = renderer.getFiberIDForNative(domNode);
							}
						}

						// Method 1c: Try walking up from the element's fiber
						if (fiberID === null && typeof renderer.getFiberIDForNative === 'function') {
							const elementFiber = getReactFiber(element);
							if (elementFiber) {
								let walkFiber = elementFiber;
								let depth = 0;
								while (walkFiber && fiberID === null && depth < 50) {
									if (walkFiber.stateNode && walkFiber.stateNode.nodeType === 1) {
										fiberID = renderer.getFiberIDForNative(walkFiber.stateNode);
									}
									walkFiber = walkFiber.return;
									depth++;
								}
							}
						}

						if (fiberID !== null && fiberID !== undefined) {
							const pathArray = parsePathToParts(propPath);

							try {
								renderer.overrideProps(fiberID, pathArray, newValue);
								devToolsSuccess = true;
								break;
							} catch (e) {
								// overrideProps failed
							}
						}
					}
				}
			}
		} catch (e) {
			// DevTools method failed
		}

		// Method 2: Direct DOM manipulation for immediate visual feedback
		// This provides instant feedback even if React doesn't re-render properly
		// First try from the selected element
		let domUpdated = updateDOMWithPropValue(element, propPath, oldValue, newValue);

		// If no matches, try to find the component's root DOM node and search from there
		if (!domUpdated && componentFiber) {
			const findComponentDOMRoot = (fiber) => {
				if (!fiber) return null;
				// Walk down to find the first DOM node
				let current = fiber;
				while (current) {
					if (current.stateNode && current.stateNode.nodeType === 1) {
						return current.stateNode;
					}
					current = current.child;
				}
				return null;
			};

			const componentRoot = findComponentDOMRoot(componentFiber);
			if (componentRoot && componentRoot !== element) {
				domUpdated = updateDOMWithPropValue(componentRoot, propPath, oldValue, newValue);
			}
		}

		// Method 3: Try to trigger a re-render by walking up the tree
		// Some components are controlled by parent components, so we need to try multiple levels
		try {
			// Update the fiber's props
			const newProps = deepCloneWithPath(currentProps, propPath, newValue);
			componentFiber.memoizedProps = newProps;
			componentFiber.pendingProps = newProps;

			if (componentFiber.alternate) {
				componentFiber.alternate.memoizedProps = newProps;
				componentFiber.alternate.pendingProps = newProps;
			}

			// Try to trigger rerender on the component itself first
			let rerendered = triggerReactRerender(componentFiber);

			// If that didn't work, walk up and try parent components
			if (!rerendered && !devToolsSuccess) {
				let parentFiber = componentFiber.return;
				let attempts = 0;
				const maxParentAttempts = 5;

				while (parentFiber && !rerendered && attempts < maxParentAttempts) {
					const parentType = parentFiber.type || parentFiber.elementType;
					// Only try function/class components, not DOM elements
					if (parentType && typeof parentType !== 'string') {
						rerendered = triggerReactRerender(parentFiber);
						if (rerendered) {
							break;
						}
					}
					parentFiber = parentFiber.return;
					attempts++;
				}
			}

			// Method 4: If we still haven't succeeded, try using React's internal updater
			if (!rerendered && !devToolsSuccess) {
				try {
					// Find any fiber with state and try to force an update through its queue
					let searchFiber = componentFiber;
					while (searchFiber) {
						if (searchFiber.updateQueue && searchFiber.updateQueue.shared) {
							const queue = searchFiber.updateQueue.shared;
							if (queue.pending === null) {
								// Try to mark this fiber as having pending work
								const update = {
									lane: 1, // SyncLane
									tag: 0, // UpdateState
									payload: null,
									callback: null,
									next: null
								};
								update.next = update;
								queue.pending = update;
								rerendered = true;
								break;
							}
						}
						searchFiber = searchFiber.return;
					}
				} catch (e) {
					// Queue injection failed
				}
			}
		} catch (e) {
			// Failed to trigger rerender
		}

		return devToolsSuccess;
	}

	// Store selected element when CSS inspector selects it
	window.addEventListener('__cursor_css_inspector_element_selected', (event) => {
		if (event.detail && event.detail.element) {
			selectedElement = event.detail.element;
			window.__cursorDevToolsSelectedElement = selectedElement;
			selectedElementPath = getElementPath(selectedElement);
			if (cssInspectorPanelOpen) {
				attachDragHandlers(selectedElement);
			}
		}
	});

	// Listen for messages from the extension
	window.addEventListener('message', (event) => {
		if (event.data.type === 'enable-element-selection') {
			// Don't re-post the same message - the overlay system will handle it directly
		} else if (event.data.type === 'css-inspector-opened') {
			cssInspectorPanelOpen = true;
			if (selectedElement) {
				attachDragHandlers(selectedElement);
			}
		} else if (event.data.type === 'css-inspector-closed') {
			// Clear the selection when CSS inspector is closed
			cssInspectorPanelOpen = false;
			selectedElement = null;
			window.__cursorDevToolsSelectedElement = null;
			selectedElementPath = '';
			detachDragHandlers();
		} else if (event.data.type === 'css-inspector-sidebar-hidden') {
			// Sidebar is hidden but element is still selected - keep drag handlers attached
			// Do NOT set cssInspectorPanelOpen to false - drag should still work
			// Do NOT clear selectedElement or detach drag handlers
		} else if (event.data.type === 'update-style-changelog') {
			// Update the style changes array
			styleChanges = event.data.changes || [];
		} else if (event.data.type === 'apply-style-change') {
			// Apply style changes to the target element
			// First try to find element by elementPath (for redo operations), fall back to selectedElement
			if (event.data.property && event.data.value !== undefined) {
				let targetElement = null;

				// Try to find element by elementPath (could be a unique ID or a path)
				if (event.data.elementPath) {
					// First try as unique ID (most reliable)
					targetElement = getElementByUniqueId(event.data.elementPath);
					// Fallback to path-based lookup
					if (!targetElement) {
						targetElement = getElementFromPath(event.data.elementPath);
					}
					// If elementPath was provided but element not found, don't fall back to selectedElement
					// This prevents applying changes to the wrong element during redo
					if (!targetElement) {
						console.warn('[CSS Inspector] Could not find element for redo:', event.data.elementPath);
						return;
					}
				} else {
					// Only use selectedElement when no elementPath was provided (live editing)
					targetElement = selectedElement;
				}

				if (targetElement) {
					const property = event.data.property;
					const value = event.data.value;

					if (value === '' || value === 'initial' || value === 'unset') {
						// Remove the property if empty value
						targetElement.style.removeProperty(property);
					} else {
						// Set the property
						targetElement.style.setProperty(property, value);
					}

					// Notify the overlay system to update its highlight
					window.postMessage({ type: 'update-css-inspector-highlight' }, '*');

					// Send back the updated element info with new styles
					// Skip CSS variables - they don't change during style updates and are cached
					setTimeout(() => {
						// Small delay to ensure styles are applied
						sendElementUpdate(false, { skipCssVariables: true });
					}, 50);
				}
			}
		} else if (event.data.type === 'reset-style-changes') {
			resetStyleChangesInDocument(event.data.changes || []);
		} else if (event.data.type === 'update-react-prop') {
			// Update React component prop
			// First try to find element by elementPath (for redo operations), fall back to selectedElement
			if (event.data.propPath !== undefined) {
				let targetElement = null;

				// Try to find element by elementPath (could be a unique ID or a path)
				if (event.data.elementPath) {
					// First try as unique ID (most reliable)
					targetElement = getElementByUniqueId(event.data.elementPath);
					// Fallback to path-based lookup
					if (!targetElement) {
						targetElement = getElementFromPath(event.data.elementPath);
					}
					// If elementPath was provided but element not found, don't fall back to selectedElement
					// This prevents applying changes to the wrong element during redo
					if (!targetElement) {
						console.warn('[CSS Inspector] Could not find element for prop redo:', event.data.elementPath);
						return;
					}
				} else {
					// Only use selectedElement when no elementPath was provided (live editing)
					targetElement = selectedElement;
					if (!targetElement) {
						return;
					}
				}

				const propPath = event.data.propPath;
				const newValue = event.data.value;

				const success = updateReactProp(targetElement, propPath, newValue);

				// Notify the overlay system to update its highlight
				window.postMessage({ type: 'update-css-inspector-highlight' }, '*');

				// Send back the updated element info after delays to let React re-render
				// Use multiple attempts with increasing delays to catch async updates
				// Skip CSS variables - they don't change during prop updates
				const sendUpdates = [50, 150, 300, 500];
				let sentUpdate = false;

				sendUpdates.forEach((delay, index) => {
					setTimeout(() => {
						if (!sentUpdate || index === sendUpdates.length - 1) {
							sendElementUpdate(false, { skipCssVariables: true });
							sentUpdate = true;
						}
					}, delay);
				});

				// Send success/failure notification back
				if (window.cursorBrowser && window.cursorBrowser.send) {
					window.cursorBrowser.send('react-prop-updated', {
						success: success,
						propPath: propPath,
						value: newValue
					});
				}
			}
		} else if (event.data.type === 'reorder-dom-element') {
			// Reorder element in the DOM tree
			const { elementPath, newParentPath, beforeSiblingPath } = event.data;

			const element = getElementFromPath(elementPath);
			const newParent = getElementFromPath(newParentPath);
			const beforeSibling = beforeSiblingPath ? getElementFromPath(beforeSiblingPath) : null;

			if (element && newParent) {
				try {
					// Capture original position BEFORE moving for change tracking
					const originalParent = element.parentElement;
					const originalNextSibling = element.nextElementSibling;
					const originalParentPath = originalParent ? getElementPath(originalParent) : '';
					const originalParentUniqueId = originalParent ? getOrAssignElementId(originalParent) : '';
					const originalNextSiblingPath = originalNextSibling ? getElementPath(originalNextSibling) : null;
					const originalNextSiblingUniqueId = originalNextSibling ? getOrAssignElementId(originalNextSibling) : null;
					const originalIndex = getElementIndexWithinParent(element);

					// Remove element from current position and insert at new position
					if (beforeSibling) {
						newParent.insertBefore(element, beforeSibling);
					} else {
						newParent.appendChild(element);
					}

					// Capture new position AFTER moving
					const newNextSibling = element.nextElementSibling;
					const newNextSiblingPath = newNextSibling ? getElementPath(newNextSibling) : null;
					const newIndex = getElementIndexWithinParent(element);
					// Store unique IDs for new parent/sibling for reliable redo
					const newParentUniqueId = getOrAssignElementId(newParent);
					const newNextSiblingUniqueId = newNextSibling ? getOrAssignElementId(newNextSibling) : null;

					// Create DOM order change record for apply/reset tracking
					const domOrderChange = {
						originalParentPath: originalParentPath,
						originalNextSiblingPath: originalNextSiblingPath,
						originalIndex: originalIndex,
						newParentPath: getElementPath(newParent),
						newNextSiblingPath: newNextSiblingPath,
						newIndex: newIndex,
						originalParentUniqueId: originalParentUniqueId,
						originalNextSiblingUniqueId: originalNextSiblingUniqueId,
						newParentUniqueId: newParentUniqueId || null,
						newNextSiblingUniqueId: newNextSiblingUniqueId,
					};

					// Build oldValue/newValue as JSON for the change record
					const oldValue = JSON.stringify({
						parentPath: originalParentPath,
						nextSiblingPath: originalNextSiblingPath,
						index: originalIndex,
					});
					const newValue = JSON.stringify({
						parentPath: getElementPath(newParent),
						nextSiblingPath: newNextSiblingPath,
						index: newIndex,
					});

					// Create and send style change record so the change is tracked
					const record = buildStyleChangeRecord(
						element,
						'dom-order',
						oldValue,
						newValue,
						false,
						domOrderChange
					);
					if (record) {
						sendStyleChangeRecords([record]);
					}

					// Notify the overlay system to update its highlight
					window.postMessage({ type: 'update-css-inspector-highlight' }, '*');

					// Send back the updated element info
					// Skip CSS variables - they don't change during DOM reorder
					setTimeout(() => {
						sendElementUpdate(false, { skipCssVariables: true });
					}, 50);

					// Send success notification back
					if (window.cursorBrowser && window.cursorBrowser.send) {
						window.cursorBrowser.send('dom-element-reordered', {
							success: true,
							elementPath: elementPath,
							newParentPath: newParentPath,
							beforeSiblingPath: beforeSiblingPath
						});
					}
				} catch (err) {
					console.error('[CursorDevTools] Failed to reorder element:', err);
					if (window.cursorBrowser && window.cursorBrowser.send) {
						window.cursorBrowser.send('dom-element-reordered', {
							success: false,
							error: err instanceof Error ? err.message : 'Unknown error'
						});
					}
				}
			} else {
				if (window.cursorBrowser && window.cursorBrowser.send) {
					window.cursorBrowser.send('dom-element-reordered', {
						success: false,
						error: 'Element or parent not found'
					});
				}
			}
		} else if (event.data.type === 'cut-dom-element') {
			// Cut element - store in clipboard and mark for removal on paste
			const { elementPath } = event.data;
			const element = getElementFromPath(elementPath);

			if (element) {
				try {
					// Store the element's HTML and mark it as cut (will be removed on paste)
					window.__cursorClipboard = {
						html: element.outerHTML,
						operation: 'cut',
						sourceElementPath: elementPath,
						sourceElementId: getOrAssignElementId(element),
					};

					// Add visual feedback that element is cut (optional faded style)
					element.setAttribute('data-cursor-cut', 'true');

					if (window.cursorBrowser && window.cursorBrowser.send) {
						window.cursorBrowser.send('dom-element-cut', {
							success: true,
							elementPath: elementPath
						});
					}
				} catch (err) {
					console.error('[CursorDevTools] Failed to cut element:', err);
					if (window.cursorBrowser && window.cursorBrowser.send) {
						window.cursorBrowser.send('dom-element-cut', {
							success: false,
							error: err instanceof Error ? err.message : 'Unknown error'
						});
					}
				}
			} else {
				if (window.cursorBrowser && window.cursorBrowser.send) {
					window.cursorBrowser.send('dom-element-cut', {
						success: false,
						error: 'Element not found'
					});
				}
			}
		} else if (event.data.type === 'copy-dom-element') {
			// Copy element - store in clipboard
			const { elementPath } = event.data;
			const element = getElementFromPath(elementPath);

			if (element) {
				try {
					// Store the element's HTML for pasting
					window.__cursorClipboard = {
						html: element.outerHTML,
						operation: 'copy',
						sourceElementPath: elementPath,
						sourceElementId: getOrAssignElementId(element),
					};

					// Clear any previous cut markers
					const previousCut = document.querySelector('[data-cursor-cut="true"]');
					if (previousCut) {
						previousCut.removeAttribute('data-cursor-cut');
					}

					if (window.cursorBrowser && window.cursorBrowser.send) {
						window.cursorBrowser.send('dom-element-copied', {
							success: true,
							elementPath: elementPath
						});
					}
				} catch (err) {
					console.error('[CursorDevTools] Failed to copy element:', err);
					if (window.cursorBrowser && window.cursorBrowser.send) {
						window.cursorBrowser.send('dom-element-copied', {
							success: false,
							error: err instanceof Error ? err.message : 'Unknown error'
						});
					}
				}
			} else {
				if (window.cursorBrowser && window.cursorBrowser.send) {
					window.cursorBrowser.send('dom-element-copied', {
						success: false,
						error: 'Element not found'
					});
				}
			}
		} else if (event.data.type === 'paste-dom-element') {
			// Paste element - insert clipboard content as child of target
			const { targetElementPath } = event.data;
			const targetElement = getElementFromPath(targetElementPath);
			const clipboard = window.__cursorClipboard;

			if (targetElement && clipboard && clipboard.html) {
				try {
					// Create element from clipboard HTML
					const tempContainer = document.createElement('div');
					tempContainer.innerHTML = clipboard.html;
					const newElement = tempContainer.firstElementChild;

					if (newElement) {
						// Remove any cursor-specific data attributes from cloned element
						newElement.removeAttribute('data-cursor-element-id');
						newElement.removeAttribute('data-cursor-cut');

						// Also clean up nested elements
						const nestedElements = newElement.querySelectorAll('[data-cursor-element-id]');
						nestedElements.forEach(el => {
							el.removeAttribute('data-cursor-element-id');
						});

						// Assign new unique ID to the pasted element
						getOrAssignElementId(newElement);

						// If this was a cut operation, remove the original element
						if (clipboard.operation === 'cut' && clipboard.sourceElementId) {
							const sourceElement = document.querySelector('[data-cursor-element-id="' + clipboard.sourceElementId + '"]');
							if (sourceElement && sourceElement !== targetElement && !targetElement.contains(sourceElement)) {
								// Capture info for change tracking before removal
								const sourceParent = sourceElement.parentElement;
								const sourceNextSibling = sourceElement.nextElementSibling;
								const sourceParentPath = sourceParent ? getElementPath(sourceParent) : '';
								const sourceIndex = getElementIndexWithinParent(sourceElement);

								// Create delete change record
								const deleteRecord = buildStyleChangeRecord(
									sourceElement,
									'dom-delete',
									JSON.stringify({
										parentPath: sourceParentPath,
										nextSiblingPath: sourceNextSibling ? getElementPath(sourceNextSibling) : null,
										index: sourceIndex,
										html: sourceElement.outerHTML,
									}),
									'null',
									false
								);
								if (deleteRecord) {
									sendStyleChangeRecords([deleteRecord]);
								}

								sourceElement.remove();
							}
							// Clear clipboard after cut-paste
							window.__cursorClipboard = null;
						}

						// Insert as last child of target
						targetElement.appendChild(newElement);

						// Create insert change record for the new element
						const newIndex = getElementIndexWithinParent(newElement);
						const insertRecord = buildStyleChangeRecord(
							newElement,
							'dom-insert',
							'null',
							JSON.stringify({
								parentPath: getElementPath(targetElement),
								index: newIndex,
								html: newElement.outerHTML,
							}),
							false
						);
						if (insertRecord) {
							sendStyleChangeRecords([insertRecord]);
						}

						// Notify the overlay system to update
						window.postMessage({ type: 'update-css-inspector-highlight' }, '*');

						// Send back the updated element info
						setTimeout(() => {
							sendElementUpdate(false, { skipCssVariables: true });
						}, 50);

						if (window.cursorBrowser && window.cursorBrowser.send) {
							window.cursorBrowser.send('dom-element-pasted', {
								success: true,
								targetElementPath: targetElementPath,
								operation: clipboard.operation
							});
						}
					} else {
						throw new Error('Failed to parse clipboard HTML');
					}
				} catch (err) {
					console.error('[CursorDevTools] Failed to paste element:', err);
					if (window.cursorBrowser && window.cursorBrowser.send) {
						window.cursorBrowser.send('dom-element-pasted', {
							success: false,
							error: err instanceof Error ? err.message : 'Unknown error'
						});
					}
				}
			} else {
				if (window.cursorBrowser && window.cursorBrowser.send) {
					window.cursorBrowser.send('dom-element-pasted', {
						success: false,
						error: !clipboard || !clipboard.html ? 'Nothing to paste' : 'Target element not found'
					});
				}
			}
		} else if (event.data.type === 'delete-dom-element') {
			// Delete element from DOM
			const { elementPath } = event.data;
			const element = getElementFromPath(elementPath);

			if (element) {
				try {
					// Don't allow deleting body or html
					if (element.tagName === 'BODY' || element.tagName === 'HTML') {
						throw new Error('Cannot delete body or html element');
					}

					// Capture info for change tracking before removal
					const parent = element.parentElement;
					const nextSibling = element.nextElementSibling;
					const parentPath = parent ? getElementPath(parent) : '';
					const parentUniqueId = parent ? getOrAssignElementId(parent) : '';
					const nextSiblingPath = nextSibling ? getElementPath(nextSibling) : null;
					const nextSiblingUniqueId = nextSibling ? getOrAssignElementId(nextSibling) : null;
					const elementIndex = getElementIndexWithinParent(element);
					const elementHtml = element.outerHTML;

					// Remove the element
					element.remove();

					// Create delete change record
					const domDeleteChange = {
						parentPath: parentPath,
						nextSiblingPath: nextSiblingPath,
						index: elementIndex,
						html: elementHtml,
						parentUniqueId: parentUniqueId,
						nextSiblingUniqueId: nextSiblingUniqueId,
					};

					const record = buildStyleChangeRecord(
						parent || document.body,
						'dom-delete',
						JSON.stringify(domDeleteChange),
						'null',
						false,
						domDeleteChange
					);
					if (record) {
						sendStyleChangeRecords([record]);
					}

					// Notify the overlay system to update
					window.postMessage({ type: 'update-css-inspector-highlight' }, '*');

					// Clear selection since element is gone
					window.postMessage({ type: 'clear-element-selection' }, '*');

					// Send success notification
					if (window.cursorBrowser && window.cursorBrowser.send) {
						window.cursorBrowser.send('dom-element-deleted', {
							success: true,
							elementPath: elementPath
						});
					}
				} catch (err) {
					console.error('[CursorDevTools] Failed to delete element:', err);
					if (window.cursorBrowser && window.cursorBrowser.send) {
						window.cursorBrowser.send('dom-element-deleted', {
							success: false,
							error: err instanceof Error ? err.message : 'Unknown error'
						});
					}
				}
			} else {
				if (window.cursorBrowser && window.cursorBrowser.send) {
					window.cursorBrowser.send('dom-element-deleted', {
						success: false,
						error: 'Element not found'
					});
				}
			}
		}
	});

	// Clean up on page unload
	window.addEventListener('beforeunload', () => {
		// Ensure drag handlers are removed
		detachDragHandlers();
	});
})();
`;
