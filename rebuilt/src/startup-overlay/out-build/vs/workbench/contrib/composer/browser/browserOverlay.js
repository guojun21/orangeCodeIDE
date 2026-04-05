"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/browserOverlay.js
// Offset: 31824127 (bundle byte offset)
// Size: 89774 bytes
NNf = `
(function() {
	'use strict';

	// Prevent multiple injections
	if (window.__cursorBrowserOverlayInjected) return;
	window.__cursorBrowserOverlayInjected = true;

	// Only inject in top-level frame
	if (window !== window.top) return;

	// =============================================================================
	// Shared Overlay System
	// =============================================================================

	let selectionMode = false;
	let selectionFrozen = false;
	let currentSelectionType = null; // 'css-inspector' or 'composer-chat'
	let cursorStyleOverride = null;
	let selectionCursor = null;
	let overlay = null;
	let overlayLabel = null;
	let elementSelectionListeners = null;
	let cssInspectorSelectedElement = null; // Store the selected element for CSS inspector mode

	// Expose selected element for CDP access
	window.__cursorDevToolsSelectedElement = null;
	let cssInspectorPanelOpen = false; // Track if CSS inspector panel is showing


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
	let cssInspectorDragging = false;
	let cssInspectorHighlightSuppressed = false;
	let currentHighlightedElement = null;
	let highlightUpdateScheduled = false;
	let pointerOverSelectedElement = false;
	let hoverOverlay = null;
	let hoverOverlayLabel = null;

	// =============================================================================
	// Link Preview (status bar style URL preview on hover)
	// =============================================================================

	let linkPreviewElement = null;
	let linkPreviewTimeout = null;
	let currentTargetUrl = '';

	function createLinkPreview() {
		if (linkPreviewElement) return;
		linkPreviewElement = document.createElement('div');
		linkPreviewElement.style.cssText =
			'position: fixed;' +
			'bottom: 4px;' +
			'left: 4px;' +
			'max-width: 60%;' +
			'padding: 2px 8px;' +
			'background: rgba(30, 30, 30, 0.9);' +
			'color: rgba(255, 255, 255, 0.9);' +
			'font-size: 12px;' +
			'font-family: -apple-system, BlinkMacSystemFont, sans-serif;' +
			'border-radius: 4px;' +
			'overflow: hidden;' +
			'text-overflow: ellipsis;' +
			'white-space: nowrap;' +
			'z-index: 2147483646;' +
			'pointer-events: none;' +
			'opacity: 0;' +
			'transition: opacity 0.15s ease;';
		linkPreviewElement.setAttribute('data-cursor-link-preview', 'true');
		document.body.appendChild(linkPreviewElement);
	}

	function showLinkPreview(url) {
		if (!url) {
			hideLinkPreview();
			return;
		}
		currentTargetUrl = url;
		createLinkPreview();
		if (linkPreviewTimeout) clearTimeout(linkPreviewTimeout);
		linkPreviewTimeout = setTimeout(function() {
			if (currentTargetUrl === url && linkPreviewElement) {
				linkPreviewElement.textContent = url;
				linkPreviewElement.style.opacity = '1';
			}
		}, 400);
	}

	function hideLinkPreview() {
		currentTargetUrl = '';
		if (linkPreviewTimeout) {
			clearTimeout(linkPreviewTimeout);
			linkPreviewTimeout = null;
		}
		if (linkPreviewElement) {
			linkPreviewElement.style.opacity = '0';
		}
	}

	// =============================================================================
	// React DevTools Integration
	// =============================================================================

	function isLocalhost() {
		const hostname = window.location.hostname;
		return hostname === 'localhost' || hostname === '127.0.0.1';
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

			const isMeaningfulName = componentName.length > 1 && /^[A-Z]/.test(componentName);
			if (!isLocalhost() && !isMeaningfulName) return null;

			// Safely serialize a value with depth limit and circular reference handling
			const serializeValue = (val, depth = 0, seen = new WeakSet()) => {
				const maxDepth = 6;
				const maxArrayLength = 50;
				const maxObjectKeys = 50;

				if (val === null || val === undefined) {
					return val;
				}
				if (typeof val === 'string' || typeof val === 'number' || typeof val === 'boolean') {
					return val;
				}
				if (typeof val === 'function') {
					try {
						const fnSource = val.toString();
						const maxLength = 500;
						return { __type: 'function', source: fnSource.length > maxLength ? fnSource.slice(0, maxLength) + '...' : fnSource };
					} catch {
						return { __type: 'function', source: '[Function]' };
					}
				}
				// Check for DOM nodes - don't try to serialize these
				if (val instanceof Node || val instanceof Window || val instanceof Event) {
					return '[DOM Node]';
				}
				// Check for React elements - serialize them specially
				if (val && typeof val === 'object' && val.$$typeof) {
					return '[React Element]';
				}
				if (depth >= maxDepth) {
					if (Array.isArray(val)) {
						return '[Array: ' + val.length + ' items]';
					}
					return '[Object]';
				}
				// Handle circular references
				if (typeof val === 'object') {
					if (seen.has(val)) {
						return '[Circular]';
					}
					seen.add(val);
				}
				if (Array.isArray(val)) {
					const result = [];
					const len = Math.min(val.length, maxArrayLength);
					for (let i = 0; i < len; i++) {
						result.push(serializeValue(val[i], depth + 1, seen));
					}
					if (val.length > maxArrayLength) {
						result.push('... ' + (val.length - maxArrayLength) + ' more items');
					}
					return result;
				}
				if (typeof val === 'object') {
					const result = {};
					const keys = Object.keys(val);
					const len = Math.min(keys.length, maxObjectKeys);
					for (let i = 0; i < len; i++) {
						const key = keys[i];
						try {
							result[key] = serializeValue(val[key], depth + 1, seen);
						} catch {
							result[key] = '[Error reading property]';
						}
					}
					if (keys.length > maxObjectKeys) {
						result['__truncated'] = keys.length - maxObjectKeys + ' more keys';
					}
					return result;
				}
				return String(val);
			};

			const serializedProps = componentProps ? Object.keys(componentProps).reduce((acc, key) => {
				try {
					acc[key] = serializeValue(componentProps[key]);
				} catch {
					acc[key] = '[Error serializing]';
				}
				return acc;
			}, {}) : null;

			return {
				name: componentName,
				props: serializedProps
			};
		} catch (e) {
			return null;
		}
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

	// =============================================================================
	// Style Extraction
	// =============================================================================

	// Detect modern color formats that need conversion
	function isModernColorFormat(value) {
		if (!value || typeof value !== 'string') return false;
		const normalized = value.toLowerCase().trim();
		return (
			normalized.startsWith('oklab(') ||
			normalized.startsWith('oklch(') ||
			normalized.startsWith('lab(') ||
			normalized.startsWith('lch(') ||
			normalized.startsWith('color(')
		);
	}

	// Convert any CSS color to hex using Canvas API
	// This handles all color formats the browser supports (including oklab, oklch, etc.)
	let colorConversionCanvas = null;
	let colorConversionCtx = null;

	function convertColorToHex(colorValue) {
		if (!colorValue || typeof colorValue !== 'string') {
			return null;
		}

		try {
			// Create canvas lazily
			if (!colorConversionCanvas) {
				colorConversionCanvas = document.createElement('canvas');
				colorConversionCanvas.width = 1;
				colorConversionCanvas.height = 1;
				colorConversionCtx = colorConversionCanvas.getContext('2d', { willReadFrequently: true });
			}

			// Clear and set the color
			colorConversionCtx.clearRect(0, 0, 1, 1);
			colorConversionCtx.fillStyle = colorValue;
			colorConversionCtx.fillRect(0, 0, 1, 1);

			// Read back the pixel data
			const imageData = colorConversionCtx.getImageData(0, 0, 1, 1);
			const [r, g, b, a] = imageData.data;

			// Convert to hex
			const hex = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('').toUpperCase();
			const alpha = Math.round((a / 255) * 100);

			return { hex, alpha };
		} catch {
			return null;
		}
	}

	// Color properties that might use CSS variables
	const colorProperties = [
		'color', 'background-color', 'border-color',
		'border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color',
		'outline-color', 'text-decoration-color', 'fill', 'stroke'
	];

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

		// Get matched declarations from stylesheets (preserves var() syntax)
		const matchedDeclarations = getMatchedStyleDeclarations(element);

		// Convert modern color formats (oklab, oklch, etc.) to hex for color matching
		const convertedColors = {};
		for (const prop of colorProperties) {
			const value = computed.getPropertyValue(prop);
			if (value && isModernColorFormat(value)) {
				const converted = convertColorToHex(value);
				if (converted) {
					convertedColors[prop] = converted;
				}
			}
		}

		return {
			computed: styles,
			inline: inlineStyles,
			effective: getEffectiveStyles(computed),
			// Original declarations from CSS rules that contain var() syntax
			matched: matchedDeclarations,
			// Converted hex values for modern color formats (oklab, oklch, etc.)
			convertedColors: Object.keys(convertedColors).length > 0 ? convertedColors : undefined
		};
	}

	function getInlineStyles(element) {
		// Validate that element is actually a DOM Element
		if (!element || !(element instanceof Element)) {
			console.error('getInlineStyles: Invalid element parameter', element);
			return {};
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
		return inlineStyles;
	}

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

		importantProps.forEach(prop => {
			const value = computed.getPropertyValue(prop);
			if (value && value !== 'none' && value !== 'normal' && value !== 'auto' && value !== '0px' && value !== '') {
				effective[prop] = value;
			}
		});

		return effective;
	}

	// Cache for matched style declarations per element
	const matchedDeclarationsCache = new WeakMap();
	const MATCHED_DECLARATIONS_CACHE_TTL = 2000; // 2 second cache per element

	// Color properties that we need to check for var() references (for token detection)
	const COLOR_PROPERTIES_FOR_MATCHING = [
		'color', 'background-color', 'background',
		'border-color', 'border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color',
		'border', 'border-top', 'border-right', 'border-bottom', 'border-left',
		'outline-color', 'text-decoration-color', 'fill', 'stroke'
	];

	// Get matched style declarations from stylesheets that preserve var() syntax
	// OPTIMIZED: Only extracts color-related properties with var() references for token detection
	function getMatchedStyleDeclarations(element) {
		if (!element || !(element instanceof Element)) {
			return {};
		}

		// Check cache first
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
				const rules = sheet.cssRules;
				if (rules) {
					collectMatchedDeclarations(rules, element, declarations);
				}
			} catch {
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

	// Recursively collect declarations from CSS rules that match the element
	// OPTIMIZED: Only checks color properties with var() references
	function collectMatchedDeclarations(rules, element, declarations) {
		for (let i = 0; i < rules.length; i++) {
			const rule = rules[i];

			// Handle @media, @supports, @layer rules - recurse into them
			if (rule.cssRules) {
				// For conditional rules, check if they apply
				if (rule.conditionText !== undefined) {
					// CSSMediaRule or CSSSupportsRule
					try {
						const matches = rule.type === CSSRule.MEDIA_RULE
							? window.matchMedia(rule.conditionText).matches
							: CSS.supports(rule.conditionText);
						if (!matches) continue;
					} catch {
						continue;
					}
				}
				collectMatchedDeclarations(rule.cssRules, element, declarations);
				continue;
			}

			// Handle regular style rules
			if (rule.type !== CSSRule.STYLE_RULE) continue;

			try {
				// Check if this rule matches the element
				if (!element.matches(rule.selectorText)) continue;

				// OPTIMIZATION: Only check color properties with var() references
				const style = rule.style;
				for (const prop of COLOR_PROPERTIES_FOR_MATCHING) {
					const value = style.getPropertyValue(prop);
					if (value && value.includes('var(')) {
						declarations[prop] = value;
					}
				}
			} catch {
				// Selector may be invalid or element may not support matches()
			}
		}
	}

	// =============================================================================
	// Element Path
	// =============================================================================

	function getElementPath(element) {
		const path = [];
		let el = element;
		while (el && el !== document.body) {
			let selector = el.tagName.toLowerCase();
			if (el.id) {
				selector += '#' + el.id;
			} else if (el.className && typeof el.className === 'string') {
				const classes = el.className.trim().split(/s+/).filter(c => c);
				if (classes.length > 0) {
					selector += '.' + classes.join('.');
				}
			}

			// Add index if there are multiple siblings with the same selector
			if (el.parentElement && !el.id) { // Only add index if element doesn't have an ID
				const siblings = Array.from(el.parentElement.children);
				const sameSelectorSiblings = siblings.filter(sibling => {
					// Must have same tag
					if (sibling.tagName !== el.tagName) return false;

					// Compare classes
					const siblingClasses = sibling.className && typeof sibling.className === 'string'
						? sibling.className.trim().split(/s+/).filter(c => c).sort().join('.')
						: '';
					const elClasses = el.className && typeof el.className === 'string'
						? el.className.trim().split(/s+/).filter(c => c).sort().join('.')
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

			classes = rawClasses.filter(c => c);
		}

		return { tagName: tagName.toUpperCase(), id, classes, elementIndex };
	}

	function getElementFromPath(path) {
		if (!path) return null;

		// First, check if this looks like a unique ID (most reliable method)
		if (path.startsWith('cursor-el-')) {
			const element = getElementByUniqueId(path);
			if (element) {
				return element;
			}
			// If unique ID lookup fails, fall through to path-based lookup
		}

		// Fall back to path-based lookup
		// Split the path into parts
		const parts = path.split(' > ');
		if (parts.length === 0) return null;

		let current = document.body;

		// Skip body if it's the first part
		let startIndex = 0;
		if (parts[0] === 'body') {
			startIndex = 1;
		}

		// Navigate through each part of the path
		for (let i = startIndex; i < parts.length; i++) {
			const part = parts[i];
			const parsed = parseSelectorPart(part);

			if (!parsed) {
				return null;
			}

			const { tagName, id, classes, elementIndex } = parsed;

			// Find matching children
			const matchingChildren = [];
			for (let child of current.children) {
				if (child.tagName !== tagName) continue;

				if (id && child.id !== id) continue;

				if (classes.length > 0) {
					// Check if child has all required classes
					const hasAllClasses = classes.every(cls => {
						// Direct classList check
						if (child.classList.contains(cls)) return true;

						// For classes with special chars that classList might not handle,
						// check if the class appears in className string
						if (child.className && typeof child.className === 'string') {
							const childClasses = child.className.trim().split(/s+/);
							return childClasses.includes(cls);
						}
						return false;
					});
					if (!hasAllClasses) continue;
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

		// Fall back to computed style enumeration if no property names were discovered.
		if (propertyNames.size === 0) {
			try {
				const rootFallback = window.getComputedStyle(document.documentElement);
				for (let i = 0; i < rootFallback.length; i++) {
					const property = rootFallback[i];
					if (property && property.charCodeAt(0) === 45 && property.charCodeAt(1) === 45) {
						propertyNames.add(property);
					}
				}
				if (targetElement) {
					const targetFallback = window.getComputedStyle(targetElement);
					for (let i = 0; i < targetFallback.length; i++) {
						const property = targetFallback[i];
						if (property && property.charCodeAt(0) === 45 && property.charCodeAt(1) === 45) {
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
			// Convert modern color formats to hex for color matching
			if (isModernColorFormat(trimmed)) {
				const converted = convertColorToHex(trimmed);
				if (converted) {
					entry.convertedColor = converted;
				}
			}
			results.push(entry);
			return true;
		};

		for (const property of propertyNames) {
			let added = false;
			if (rootStyle) {
				added = addToken(property, rootStyle.getPropertyValue(property));
			}
			if (!added && targetStyle) {
				added = addToken(property, targetStyle.getPropertyValue(property));
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

	const genericFontFamilyTokens = new Set([
		'serif',
		'sans-serif',
		'system-ui',
		'monospace',
		'cursive',
		'fantasy',
		'ui-rounded',
		'ui-serif',
		'ui-sans-serif',
		'ui-monospace',
		'emoji',
		'math',
		'fangsong',
		'inherit',
		'initial',
		'unset',
		'revert',
		'revert-layer'
	]);

	function stripFallbackSuffix(value) {
		if (!value || typeof value !== 'string') {
			return '';
		}
		return value.replace(/s+fallback$/i, '').trim();
	}

	function normalizeFontToken(value) {
		if (!value || typeof value !== 'string') {
			return '';
		}
		const unquoted = value.replace(/['"]/g, '').trim();
		return stripFallbackSuffix(unquoted);
	}

	function extractFontTokens(value) {
		if (!value || typeof value !== 'string') {
			return [];
		}
		return value
			.split(',')
			.map((token) => normalizeFontToken(token))
			.filter((token) => {
				if (!token) {
					return false;
				}
				const lowercase = token.toLowerCase();
				if (genericFontFamilyTokens.has(lowercase)) {
					return false;
				}
				if (lowercase.includes('var(')) {
					return false;
				}
				return true;
			});
	}

	function collectFontFamiliesFromRules(rules, addFonts) {
		if (!rules) {
			return;
		}
		for (let i = 0; i < rules.length; i++) {
			const rule = rules[i];
			if (!rule) {
				continue;
			}
			const isFontFaceRule =
				(typeof CSSRule !== 'undefined' && rule.type === CSSRule.FONT_FACE_RULE) ||
				(rule.constructor && rule.constructor.name === 'CSSFontFaceRule');
			if (isFontFaceRule && rule.style) {
				const fontFamilyValue =
					rule.style.getPropertyValue('font-family') || rule.style.fontFamily;
				addFonts(fontFamilyValue);
			}
			if (rule.cssRules) {
				collectFontFamiliesFromRules(rule.cssRules, addFonts);
			}
		}
	}

	function collectAvailableFontFamilies(targetElement) {
		const fontMap = new Map();

		const addFontsFromValue = (value) => {
			if (!value) {
				return;
			}
			const tokens = extractFontTokens(value);
			for (const token of tokens) {
				const normalizedKeySource = stripFallbackSuffix(token);
				if (!normalizedKeySource) {
					continue;
				}
				const key = normalizedKeySource.toLowerCase();
				if (!fontMap.has(key)) {
					fontMap.set(key, token);
				}
			}
		};

		const rootElement = document.documentElement;
		if (rootElement) {
			if (rootElement.style && rootElement.style.fontFamily) {
				addFontsFromValue(rootElement.style.fontFamily);
			}
			try {
				const rootComputed = window.getComputedStyle(rootElement);
				if (rootComputed && rootComputed.fontFamily) {
					addFontsFromValue(rootComputed.fontFamily);
				}
			} catch {
				// ignore errors from getComputedStyle
			}
		}

		if (targetElement) {
			if (targetElement.style && targetElement.style.fontFamily) {
				addFontsFromValue(targetElement.style.fontFamily);
			}
			try {
				const targetComputed = window.getComputedStyle(targetElement);
				if (targetComputed && targetComputed.fontFamily) {
					addFontsFromValue(targetComputed.fontFamily);
				}
			} catch {
				// ignore errors from getComputedStyle
			}
		}

		const styleSheets = Array.from(document.styleSheets || []);
		for (const sheet of styleSheets) {
			if (!sheet) {
				continue;
			}
			let rules = null;
			try {
				rules = sheet.cssRules;
			} catch {
				// Ignore cross-origin stylesheets
			}
			if (rules) {
				collectFontFamiliesFromRules(rules, addFontsFromValue);
			}
		}

		const fontSet = document.fonts;
		if (fontSet && typeof fontSet.forEach === 'function') {
			try {
				fontSet.forEach((fontFace) => {
					if (fontFace && typeof fontFace.family === 'string') {
						addFontsFromValue(fontFace.family);
					}
				});
			} catch {
				// Ignore errors from FontFaceSet iteration
			}
		}

		return Array.from(fontMap.values());
	}

	// =============================================================================
	// Full DOM Tree Building
	// =============================================================================

	function buildDOMTree(element, selectedElement, maxDepth = 50, currentDepth = 0) {
		if (!element || currentDepth > maxDepth) {
			return null;
		}

		// Skip text nodes and other non-element nodes
		if (element.nodeType !== Node.ELEMENT_NODE) {
			return null;
		}

		// Build selector for this element
		let selector = element.tagName.toLowerCase();
		if (element.id) {
			selector += '#' + element.id;
		} else if (element.className && typeof element.className === 'string') {
			const classes = element.className.trim().split(/s+/).filter(c => c);
			if (classes.length > 0) {
				selector += '.' + classes[0]; // Just use first class for readability
			}
		}

		// Get React component info
		const reactInfo = getReactComponentInfo(element);

		// Get the full unique path for this element (fallback)
		const uniquePath = getElementPath(element);

		// Assign a unique ID to this element for reliable lookup
		const uniqueId = getOrAssignElementId(element);


		// Build the node
		// Note: className can be SVGAnimatedString for SVG elements, convert to string
		const classNameStr = typeof element.className === 'string' ? element.className : (element.className && element.className.baseVal) || null;
		const node = {
			selector: selector,
			tagName: element.tagName.toLowerCase(),
			id: element.id || null,
			className: classNameStr,
			isSelected: element === selectedElement,
			reactComponent: reactInfo ? {
				name: reactInfo.name,
				props: reactInfo.props
			} : null,
			children: [],
			fullPath: uniquePath, // Store the full unique path (fallback)
			uniqueId: uniqueId // Store the unique ID for reliable lookup
		};

		// Add all children
		for (const child of Array.from(element.children)) {
			const childNode = buildDOMTree(child, selectedElement, maxDepth, currentDepth + 1);
			if (childNode) {
				node.children.push(childNode);
			}
		}

		return node;
	}

	function getRootDOMTree(selectedElement) {
		// Start from document.body or a reasonable root
		let root = document.body;

		// For React apps, try to find the root element
		const reactRoot = document.getElementById('root') || document.querySelector('[id*="root"]');
		if (reactRoot && reactRoot.contains(selectedElement)) {
			root = reactRoot;
		}

		// Build the tree
		return buildDOMTree(root, selectedElement);
	}

	// =============================================================================
	// Cursor Creation
	// =============================================================================

	function createSelectionCursor() {
		const svgNS = 'http://www.w3.org/2000/svg';
		const cursor = document.createElementNS(svgNS, 'svg');
		cursor.setAttribute('width', '16');
		cursor.setAttribute('height', '16');
		cursor.setAttribute('viewBox', '0 0 16 16');
		cursor.setAttribute('fill', 'none');
		cursor.setAttribute('data-cursor-overlay', 'true');
		cursor.setAttribute('aria-hidden', 'true');
		cursor.setAttribute('focusable', 'false');
		cursor.style.position = 'fixed';
		cursor.style.pointerEvents = 'none';
		cursor.style.zIndex = '2147483646';
		cursor.style.transform = 'translate(-50%, -50%)';
		cursor.style.left = '-1000px';
		cursor.style.top = '-1000px';

		const title = document.createElementNS(svgNS, 'title');
		title.textContent = 'Cursor overlay';
		cursor.appendChild(title);

		const gClip = document.createElementNS(svgNS, 'g');
		gClip.setAttribute('clip-path', 'url(#clip0_cursor_overlay)');

		const gFilter = document.createElementNS(svgNS, 'g');
		gFilter.setAttribute('filter', 'url(#filter0_cursor_overlay)');

		const path = document.createElementNS(svgNS, 'path');
		path.setAttribute('d', 'M1.68066 2.14282C1.5253 1.49746 2.16954 0.975576 2.75195 1.21118L2.86816 1.26782L3.11035 1.41333L12.958 7.27954L13.2031 7.42505C13.8128 7.78856 13.682 8.70779 12.9951 8.88696L12.7197 8.95825L8.28223 10.1155L6.16895 13.9592L6.02148 14.2288C5.66933 14.869 4.71301 14.741 4.54199 14.0305L4.4707 13.7317L1.74707 2.41724L1.68066 2.14282Z');
		path.setAttribute('fill', 'black');
		path.setAttribute('stroke', 'white');

		gFilter.appendChild(path);
		gClip.appendChild(gFilter);

		const defs = document.createElementNS(svgNS, 'defs');
		const filter = document.createElementNS(svgNS, 'filter');
		filter.setAttribute('id', 'filter0_cursor_overlay');
		filter.setAttribute('x', '-1.51042');
		filter.setAttribute('y', '-1.34839');
		filter.setAttribute('width', '18.2708');
		filter.setAttribute('height', '19.8255');
		filter.setAttribute('filterUnits', 'userSpaceOnUse');
		filter.setAttribute('color-interpolation-filters', 'sRGB');

		const feFlood = document.createElementNS(svgNS, 'feFlood');
		feFlood.setAttribute('flood-opacity', '0');
		feFlood.setAttribute('result', 'BackgroundImageFix');
		filter.appendChild(feFlood);

		const feColorMatrix1 = document.createElementNS(svgNS, 'feColorMatrix');
		feColorMatrix1.setAttribute('in', 'SourceAlpha');
		feColorMatrix1.setAttribute('type', 'matrix');
		feColorMatrix1.setAttribute('values', '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0');
		feColorMatrix1.setAttribute('result', 'hardAlpha');
		filter.appendChild(feColorMatrix1);

		const feOffset = document.createElementNS(svgNS, 'feOffset');
		feOffset.setAttribute('dy', '0.666667');
		filter.appendChild(feOffset);

		const feGaussianBlur = document.createElementNS(svgNS, 'feGaussianBlur');
		feGaussianBlur.setAttribute('stdDeviation', '1.33333');
		filter.appendChild(feGaussianBlur);

		const feComposite = document.createElementNS(svgNS, 'feComposite');
		feComposite.setAttribute('in2', 'hardAlpha');
		feComposite.setAttribute('operator', 'out');
		filter.appendChild(feComposite);

		const feColorMatrix2 = document.createElementNS(svgNS, 'feColorMatrix');
		feColorMatrix2.setAttribute('type', 'matrix');
		feColorMatrix2.setAttribute('values', '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0');
		filter.appendChild(feColorMatrix2);

		const feBlend1 = document.createElementNS(svgNS, 'feBlend');
		feBlend1.setAttribute('mode', 'normal');
		feBlend1.setAttribute('in2', 'BackgroundImageFix');
		feBlend1.setAttribute('result', 'effect1_dropShadow_cursor_overlay');
		filter.appendChild(feBlend1);

		const feBlend2 = document.createElementNS(svgNS, 'feBlend');
		feBlend2.setAttribute('mode', 'normal');
		feBlend2.setAttribute('in', 'SourceGraphic');
		feBlend2.setAttribute('in2', 'effect1_dropShadow_cursor_overlay');
		feBlend2.setAttribute('result', 'shape');
		filter.appendChild(feBlend2);

		defs.appendChild(filter);

		const clipPath = document.createElementNS(svgNS, 'clipPath');
		clipPath.setAttribute('id', 'clip0_cursor_overlay');
		const rect = document.createElementNS(svgNS, 'rect');
		rect.setAttribute('width', '16');
		rect.setAttribute('height', '16');
		rect.setAttribute('fill', 'white');
		clipPath.appendChild(rect);
		defs.appendChild(clipPath);

		cursor.appendChild(gClip);
		cursor.appendChild(defs);

		return cursor;
	}

	// =============================================================================
	// Toast Notifications
	// =============================================================================

	function showToast(message) {
		try {
			const toast = document.createElement('div');
			toast.textContent = message;
			toast.style.position = 'fixed';
			toast.style.bottom = '16px';
			toast.style.right = '16px';
			toast.style.background = 'rgba(0, 0, 0, 0.85)';
			toast.style.color = 'rgba(255, 255, 255, 0.95)';
			toast.style.padding = '6px 10px';
			toast.style.borderRadius = '3px';
			toast.style.fontSize = '12px';
			toast.style.fontFamily = 'system-ui, -apple-system, sans-serif';
			toast.style.fontWeight = '400';
			toast.style.zIndex = '2147483647';
			toast.style.pointerEvents = 'none';
			toast.style.opacity = '0';
			toast.style.transition = 'opacity 150ms ease';

			document.body.appendChild(toast);

			requestAnimationFrame(() => {
				toast.style.opacity = '1';
			});

			setTimeout(() => {
				toast.style.opacity = '0';
				setTimeout(() => {
					if (toast.parentNode) {
						toast.parentNode.removeChild(toast);
					}
				}, 150);
			}, 2000);
		} catch (e) {
			// Silently fail
		}
	}

	// =============================================================================
	// Selection Mode Management
	// =============================================================================

	function isRectVisible(rect) {
		const viewportWidth = window.innerWidth || (document.documentElement ? document.documentElement.clientWidth : 0);
		const viewportHeight = window.innerHeight || (document.documentElement ? document.documentElement.clientHeight : 0);

		if (!viewportWidth || !viewportHeight) {
			return true;
		}

		if (rect.width === 0 && rect.height === 0) {
			return false;
		}

		const fullyAbove = rect.bottom <= 0;
		const fullyBelow = rect.top >= viewportHeight;
		const fullyLeft = rect.right <= 0;
		const fullyRight = rect.left >= viewportWidth;

		return !(fullyAbove || fullyBelow || fullyLeft || fullyRight);
	}

	function getActiveHighlightElement() {
		if (currentHighlightedElement && currentHighlightedElement.isConnected) {
			return currentHighlightedElement;
		}
		if (cssInspectorSelectedElement && cssInspectorSelectedElement.isConnected) {
			return cssInspectorSelectedElement;
		}
		return null;
	}

	function scheduleHighlightUpdate() {
		if (!selectionMode || highlightUpdateScheduled) {
			return;
		}

		const targetElement = getActiveHighlightElement();
		if (!targetElement) {
			return;
		}

		highlightUpdateScheduled = true;
		const raf = window.requestAnimationFrame || function(callback) {
			return setTimeout(callback, 16);
		};

		raf(() => {
			highlightUpdateScheduled = false;
			if (!selectionMode) {
				return;
			}
			const activeElement = getActiveHighlightElement();
			if (activeElement) {
				updateHighlight(activeElement);
			}
		});
	}

	function updateHighlight(element) {
		if (!element) {
			return;
		}

		currentHighlightedElement = element;

		if (typeof element.isConnected !== 'undefined') {
			if (!element.isConnected) {
				updateOverlayDisplay('none');
				return;
			}
		} else if (!document.documentElement || !document.documentElement.contains(element)) {
			updateOverlayDisplay('none');
			return;
		}

		// Create overlay elements if they don't exist
		if (!overlay) {
			overlay = document.createElement('div');
			overlay.style.cssText = 'position:fixed;border:2px solid #3a96dd;pointer-events:none;z-index:2147483647;';
			document.body.appendChild(overlay);
		}

		if (!overlayLabel) {
			overlayLabel = document.createElement('div');
			overlayLabel.style.cssText = 'position:fixed;background:#3a96dd;color:white;padding:2px 6px;font-size:11px;font-family:system-ui,-apple-system,sans-serif;font-weight:500;border-radius:2px;pointer-events:none;z-index:2147483648;white-space:nowrap;';
			document.body.appendChild(overlayLabel);
		}

		const rect = element.getBoundingClientRect();

		if (!isRectVisible(rect)) {
			updateOverlayDisplay('none');
			return;
		}

		// Always ensure overlay is visible when updateHighlight is called
		updateOverlayDisplay('block');
		overlay.style.top = rect.top + 'px';
		overlay.style.left = rect.left + 'px';
		overlay.style.width = rect.width + 'px';
		overlay.style.height = rect.height + 'px';

		// Update label
		const label = element.tagName.toLowerCase() +
			(element.id ? '#' + element.id : '') +
			(element.className && typeof element.className === 'string' ?
				'.' + element.className.split(' ').filter(c => c).join('.') : '');
		overlayLabel.textContent = label;
		overlayLabel.style.top = Math.max(0, rect.top - 26) + 'px';
		overlayLabel.style.left = rect.left + 'px';
	}

	function updateCssInspectorCursor() {
		if (currentSelectionType !== 'css-inspector') {
			return;
		}

		if (!cursorStyleOverride) {
			cursorStyleOverride = document.createElement('style');
			cursorStyleOverride.textContent = '';
			document.head.appendChild(cursorStyleOverride);
		}

		let cursorValue = 'crosshair';
		if (cssInspectorPanelOpen && pointerOverSelectedElement) {
			cursorValue = cssInspectorDragging ? 'grabbing' : 'grab';
		}

		document.body.style.cursor = cursorValue;
		cursorStyleOverride.textContent = '* { cursor: ' + cursorValue + ' !important; }';
	}

	function setPointerOverSelectedElement(isOverSelected) {
		if (pointerOverSelectedElement === isOverSelected) {
			return;
		}
		pointerOverSelectedElement = isOverSelected;
		updateCssInspectorCursor();
	}

	function updatePointerOverSelectedElement(target) {
		if (
			currentSelectionType !== 'css-inspector' ||
			!cssInspectorPanelOpen ||
			!cssInspectorSelectedElement ||
			!target
		) {
			setPointerOverSelectedElement(false);
			return;
		}

		// Only show grab cursor when directly over the selected element itself,
		// NOT when hovering over a child element. This prioritizes child selection
		// by showing crosshair cursor when over children.
		const isOver = target === cssInspectorSelectedElement;
		setPointerOverSelectedElement(isOver);
	}

	function shouldHideHighlight() {
		return currentSelectionType === 'css-inspector' && cssInspectorHighlightSuppressed;
	}

	function updateOverlayDisplay(displayValue = 'block') {
		if (!overlay) {
			return;
		}
		if (shouldHideHighlight()) {
			overlay.style.display = 'none';
			if (overlayLabel) {
				overlayLabel.style.display = 'none';
			}
			hideHoverOverlay();
			return;
		}
		overlay.style.display = displayValue;
		if (overlayLabel) {
			overlayLabel.style.display = displayValue;
		}
	}

	function ensureHoverOverlay() {
		if (!hoverOverlay) {
			hoverOverlay = document.createElement('div');
			hoverOverlay.style.cssText = 'position:fixed;border:1px dashed #5eb2f6;pointer-events:none;z-index:2147483646;';
			hoverOverlay.style.display = 'none';
			document.body.appendChild(hoverOverlay);
		}
		if (!hoverOverlayLabel) {
			hoverOverlayLabel = document.createElement('div');
			hoverOverlayLabel.style.cssText = 'position:fixed;background:rgba(62,150,221,0.9);color:white;padding:2px 6px;font-size:11px;font-family:system-ui,-apple-system,sans-serif;font-weight:500;border-radius:2px;pointer-events:none;z-index:2147483647;white-space:nowrap;';
			hoverOverlayLabel.style.display = 'none';
			document.body.appendChild(hoverOverlayLabel);
		}
	}

	function hideHoverOverlay() {
		if (hoverOverlay) {
			hoverOverlay.style.display = 'none';
		}
		if (hoverOverlayLabel) {
			hoverOverlayLabel.style.display = 'none';
		}
	}

	function updateHoverOverlay(element) {
		if (
			!element ||
			shouldHideHighlight() ||
			!selectionMode ||
			!selectionFrozen ||
			currentSelectionType !== 'css-inspector' ||
			!cssInspectorSelectedElement ||
			element === cssInspectorSelectedElement
		) {
			hideHoverOverlay();
			return;
		}

		const rect = element.getBoundingClientRect();
		if (!isRectVisible(rect)) {
			hideHoverOverlay();
			return;
		}

		ensureHoverOverlay();
		if (!hoverOverlay || !hoverOverlayLabel) {
			return;
		}

		hoverOverlay.style.display = 'block';
		hoverOverlay.style.top = rect.top + 'px';
		hoverOverlay.style.left = rect.left + 'px';
		hoverOverlay.style.width = rect.width + 'px';
		hoverOverlay.style.height = rect.height + 'px';

		const label =
			element.tagName.toLowerCase() +
			(element.id ? '#' + element.id : '') +
			(element.className && typeof element.className === 'string'
				? '.' + element.className.split(' ').filter((c) => c).join('.')
				: '');

		hoverOverlayLabel.textContent = label;
		hoverOverlayLabel.style.display = 'block';
		hoverOverlayLabel.style.top = Math.max(0, rect.top - 26) + 'px';
		hoverOverlayLabel.style.left = rect.left + 'px';
	}

	const scrollUpdateOptions = { passive: true, capture: true };
	document.addEventListener('scroll', scheduleHighlightUpdate, scrollUpdateOptions);
	window.addEventListener('scroll', scheduleHighlightUpdate, { passive: true });
	window.addEventListener('resize', scheduleHighlightUpdate);

	function enableElementSelection(type) {
		if (elementSelectionListeners) {
			return;
		}

		selectionMode = true;
		currentSelectionType = type;
		selectionFrozen = false;
		setPointerOverSelectedElement(false);
		hideHoverOverlay();

		// For CSS inspector mode, show a crosshair cursor instead of hiding it
		if (type === 'css-inspector') {
			if (!cursorStyleOverride) {
				cursorStyleOverride = document.createElement('style');
				cursorStyleOverride.textContent = '';
				document.head.appendChild(cursorStyleOverride);
			}
			cssInspectorDragging = false;
			cssInspectorHighlightSuppressed = false;
			updateCssInspectorCursor();
			// Don't create custom cursor for CSS inspector mode
		} else {
			// For other modes, hide cursor and show custom cursor
			document.body.style.cursor = 'none';

			if (!cursorStyleOverride) {
				cursorStyleOverride = document.createElement('style');
				cursorStyleOverride.textContent = '* { cursor: none !important; }';
				document.head.appendChild(cursorStyleOverride);
			}

			if (!selectionCursor) {
				selectionCursor = createSelectionCursor();
				document.body.appendChild(selectionCursor);
			}
		}

		if (!overlay) {
			overlay = document.createElement('div');
			overlay.style.cssText = 'position:fixed;border:2px solid #3a96dd;pointer-events:none;z-index:2147483647;';
			document.body.appendChild(overlay);

			overlayLabel = document.createElement('div');
			overlayLabel.style.cssText = 'position:fixed;background:#3a96dd;color:white;padding:2px 6px;font-size:11px;font-family:system-ui,-apple-system,sans-serif;font-weight:500;border-radius:2px;pointer-events:none;z-index:2147483648;white-space:nowrap;';
			document.body.appendChild(overlayLabel);
		}

		const mousemoveListener = (e) => {
			if (!selectionMode) return;

			// Update cursor position if not frozen (only for non-CSS inspector modes)
			if (selectionCursor && !selectionFrozen && currentSelectionType !== 'css-inspector') {
				selectionCursor.style.left = e.clientX + 'px';
				selectionCursor.style.top = e.clientY + 'px';
			}

			const elementAtPoint = document.elementFromPoint(e.clientX, e.clientY);
			const hoverCandidate = elementAtPoint &&
				elementAtPoint !== overlay &&
				elementAtPoint !== overlayLabel &&
				elementAtPoint !== selectionCursor &&
				elementAtPoint !== hoverOverlay &&
				elementAtPoint !== hoverOverlayLabel
				? elementAtPoint
				: null;

			updatePointerOverSelectedElement(hoverCandidate || null);

			if (selectionFrozen && currentSelectionType === 'css-inspector') {
				updateHoverOverlay(hoverCandidate);
			} else {
				hideHoverOverlay();
			}

			// Update overlay if not frozen
			if (!selectionFrozen && overlay && overlayLabel) {
				const element = hoverCandidate;
				if (element) {
					const rect = element.getBoundingClientRect();
					updateOverlayDisplay('');
					overlay.style.left = rect.left + 'px';
					overlay.style.top = rect.top + 'px';
					overlay.style.width = rect.width + 'px';
					overlay.style.height = rect.height + 'px';

					// Try to get React component info
					const reactInfo = isLocalhost() ? getReactComponentInfo(element) : null;
					let labelText = element.tagName.toLowerCase();
					if (reactInfo && reactInfo.name) {
						labelText = reactInfo.name + ' \xB7 ' + element.tagName.toLowerCase();
					}

					if (overlayLabel) {
						overlayLabel.textContent = labelText;
					}

					const labelTop = rect.top > 20 ? rect.top - 20 : rect.top + 2;
					if (overlayLabel) {
						overlayLabel.style.left = rect.left + 'px';
						overlayLabel.style.top = labelTop + 'px';
					}
				} else {
					updateOverlayDisplay('none');
				}
			}
		};

		const clickListener = (e) => {
			if (!selectionMode) return;

			// Allow clicks on special toast elements
			if (e.target && e.target.closest && e.target.closest('[data-cursor-toast]')) {
				return;
			}

			e.preventDefault();
			e.stopPropagation();
			e.stopImmediatePropagation();

			// Multi-select is always enabled - keep selection mode active after each click
			const isMultiSelect = true;

			// Use elementFromPoint to get the actual visible element at click position.
			// This ensures we select the topmost child element, not a parent that might
			// have captured the event through propagation.
			const elementAtPoint = document.elementFromPoint(e.clientX, e.clientY);
			const element = elementAtPoint &&
				elementAtPoint !== overlay &&
				elementAtPoint !== overlayLabel &&
				elementAtPoint !== selectionCursor &&
				elementAtPoint !== hoverOverlay &&
				elementAtPoint !== hoverOverlayLabel
				? elementAtPoint
				: e.target;

			if (!element) return;

			const rect = element.getBoundingClientRect();
			const computedStyle = window.getComputedStyle(element);

			// Build element info
			// Note: className can be SVGAnimatedString for SVG elements
			const elementClassName = typeof element.className === 'string' ? element.className : (element.className && element.className.baseVal) || '';
			const elementData = {
				tagName: element.tagName,
				id: element.id || '',
				uniqueId: getOrAssignElementId(element),  // Stable ID for reliable undo/redo targeting
				className: elementClassName,
				innerText: element.innerText ? element.innerText.substring(0, 200) : '',
				innerHTML: element.innerHTML || '',  // Full HTML, not truncated
				path: getElementPath(element),
				attributes: Array.from(element.attributes || []).map(a => ({
					name: a.name,
					value: a.value
				})),
				rect: {
					top: rect.top,
					left: rect.left,
					width: rect.width,
					height: rect.height
				},
				styles: {
					color: computedStyle.color,
					backgroundColor: computedStyle.backgroundColor,
					fontSize: computedStyle.fontSize,
					fontFamily: computedStyle.fontFamily,
					display: computedStyle.display,
					position: computedStyle.position
				},
				keepSelectionActive: isMultiSelect,
				shiftKey: isMultiSelect
			};

			// Add React component info if available
			const reactInfo = getReactComponentInfo(element);
			if (reactInfo) {
				elementData.reactComponent = {
					name: reactInfo.name,
					props: reactInfo.props
				};
			}

			// Add comprehensive styles for CSS inspector
			if (currentSelectionType === 'css-inspector') {
				elementData.allStyles = getAllComputedStyles(element);
				// Add the full DOM tree
				elementData.domTree = getRootDOMTree(element);
				elementData.cssVariables = collectCssVariables(element);
				elementData.availableFonts = collectAvailableFontFamilies(element);
			}

			// Send element selected event based on type
			if (window.cursorBrowser) {
				window.cursorBrowser.send('element-selected', elementData);
			}

			// If CSS inspector mode, also notify the DevTools script
			if (currentSelectionType === 'css-inspector') {
				// Store the selected element for CSS inspector
				cssInspectorSelectedElement = element;
				window.__cursorDevToolsSelectedElement = element;

				// Mark that CSS inspector panel is now open
				cssInspectorPanelOpen = true;
				setPointerOverSelectedElement(true);
				hideHoverOverlay();

				// Keep the highlight locked on the selected element until explicitly changed
				selectionFrozen = true;
				updateHighlight(element);

				// Dispatch custom event with the actual element reference
				const event = new CustomEvent('__cursor_css_inspector_element_selected', {
					detail: { element: element }
				});
				window.dispatchEvent(event);
			}

			// Show toast for composer chat selection
			if (currentSelectionType === 'composer-chat') {
				const elementDesc = reactInfo && reactInfo.name
					? reactInfo.name
					: (element.id ? \`<\${element.tagName.toLowerCase()}#\${element.id}>\` : \`<\${element.tagName.toLowerCase()}>\`);
				showToast(\`Element \${elementDesc} added to chat\`);
			}

			// Exit selection mode if not multi-select
			if (!isMultiSelect) {
				if (currentSelectionType === 'composer-chat') {
					disableElementSelection();
					window.cursorBrowser.send('element-selection-complete', {});
				}
				// For CSS inspector, we keep selection active but frozen
			}
		};

		// Block all pointer interactions when in CSS inspector mode
		const blockPointerEvent = (e) => {
			if (!selectionMode) return;

			// Allow clicks on special toast elements
			if (e.target && e.target.closest && e.target.closest('[data-cursor-toast]')) {
				return;
			}

			// When the CSS inspector panel is open, keep pointer events flowing so users can pick another element.
			if (cssInspectorPanelOpen && currentSelectionType === 'css-inspector') {
				return;
			}

			e.preventDefault();
			e.stopPropagation();
			e.stopImmediatePropagation();
			return false;
		};

		document.addEventListener('mousemove', mousemoveListener);
		document.addEventListener('click', clickListener, true);

		// Add additional event listeners to block interactions
		document.addEventListener('mousedown', blockPointerEvent, true);
		document.addEventListener('mouseup', blockPointerEvent, true);
		document.addEventListener('pointerdown', blockPointerEvent, true);
		document.addEventListener('pointerup', blockPointerEvent, true);
		document.addEventListener('touchstart', blockPointerEvent, true);
		document.addEventListener('touchend', blockPointerEvent, true);

		elementSelectionListeners = {
			mousemove: mousemoveListener,
			click: clickListener,
			mousedown: blockPointerEvent,
			mouseup: blockPointerEvent,
			pointerdown: blockPointerEvent,
			pointerup: blockPointerEvent,
			touchstart: blockPointerEvent,
			touchend: blockPointerEvent
		};
	}

	function disableElementSelection() {
		selectionMode = false;
		selectionFrozen = false;
		setPointerOverSelectedElement(false);
		hideHoverOverlay();
		currentSelectionType = null;
		cssInspectorSelectedElement = null; // Clear stored element
		window.__cursorDevToolsSelectedElement = null;
		cssInspectorPanelOpen = false; // Reset panel open state
		cssInspectorDragging = false;
		cssInspectorHighlightSuppressed = false;
		currentHighlightedElement = null;
		highlightUpdateScheduled = false;
		document.body.style.cursor = '';

		if (cursorStyleOverride) {
			cursorStyleOverride.remove();
			cursorStyleOverride = null;
		}

		if (selectionCursor) {
			selectionCursor.remove();
			selectionCursor = null;
		}

		if (overlay) {
			overlay.remove();
			overlay = null;
		}

		if (overlayLabel) {
			overlayLabel.remove();
			overlayLabel = null;
		}

		if (elementSelectionListeners) {
			const { mousemove, click, mousedown, mouseup, pointerdown, pointerup, touchstart, touchend } = elementSelectionListeners;
			document.removeEventListener('mousemove', mousemove);
			document.removeEventListener('click', click, true);
			document.removeEventListener('mousedown', mousedown, true);
			document.removeEventListener('mouseup', mouseup, true);
			document.removeEventListener('pointerdown', pointerdown, true);
			document.removeEventListener('pointerup', pointerup, true);
			document.removeEventListener('touchstart', touchstart, true);
			document.removeEventListener('touchend', touchend, true);
			elementSelectionListeners = null;
		}
	}

	// =============================================================================
	// Message Handling
	// =============================================================================

	window.addEventListener('message', (e) => {
		if (e.data.type === 'enable-element-selection') {
			const selectionType = e.data.selectionType || 'composer-chat';
			// Only enable if not already in the same mode
			if (!selectionMode || currentSelectionType !== selectionType) {
				enableElementSelection(selectionType);
			} else if (selectionMode && currentSelectionType === 'css-inspector') {
				// If already in CSS inspector mode, just refresh the highlight on the current element
				// This handles the case where we re-enable after an element update
				if (cssInspectorSelectedElement) {
					updateHighlight(cssInspectorSelectedElement);
				}
			}
		} else if (e.data.type === 'disable-element-selection') {
			disableElementSelection();
		} else if (e.data.type === 'freeze-element-selection') {
			selectionFrozen = true;
			if (selectionCursor) {
				selectionCursor.style.display = 'none';
			}
		} else if (e.data.type === 'unfreeze-element-selection') {
			selectionFrozen = false;
			if (selectionCursor) {
				selectionCursor.style.display = '';
			}
			hideHoverOverlay();
		} else if (e.data.type === 'apply-style-change') {
			// When applying style changes in CSS inspector mode, maintain the selection
			// The devtools injection script will handle the actual style application
			// We just need to ensure the overlay doesn't lose track of the element
			if (currentSelectionType === 'css-inspector' && cssInspectorSelectedElement) {
				// Force update the highlight to reflect any size changes from the style update
				setTimeout(() => {
					if (cssInspectorSelectedElement && selectionMode && currentSelectionType === 'css-inspector') {
						updateHighlight(cssInspectorSelectedElement);
					}
				}, 100); // Small delay to ensure styles are applied
			}
		} else if (e.data.type === 'update-css-inspector-highlight') {
			// Update the highlight position when CSS inspector panel is toggled
			if (currentSelectionType === 'css-inspector' && cssInspectorSelectedElement && selectionMode) {
				// Use requestAnimationFrame to ensure layout has settled
				requestAnimationFrame(() => {
					updateHighlight(cssInspectorSelectedElement);
				});
			}
		} else if (e.data.type === 'hover-element') {
			// Handle hover from DOM tree view
			const elementPath = e.data.elementPath;
			if (elementPath && selectionMode && currentSelectionType === 'css-inspector') {
				const element = getElementFromPath(elementPath);
				if (element) {
					updateHighlight(element);
				}
			} else if (!elementPath && cssInspectorSelectedElement) {
				// When hover ends, return overlay to the selected element
				updateHighlight(cssInspectorSelectedElement);
			} else if (!elementPath && overlay) {
				// Only hide overlay if no element is selected
				overlay.style.display = 'none';
				if (overlayLabel) {
					overlayLabel.style.display = 'none';
				}
			}
		} else if (e.data.type === 'select-element') {
			// Handle selection from DOM tree view
			const elementPath = e.data.elementPath;

			// Always allow selection from DOM tree - enable selection mode if needed
			if (elementPath) {
				// Enable selection mode first if not already enabled
				if (!selectionMode || currentSelectionType !== 'css-inspector') {
					enableElementSelection('css-inspector');
				}

				// Mark panel as open since we're receiving selection requests
				cssInspectorPanelOpen = true;

				const element = getElementFromPath(elementPath);

				if (!element) {
					return;
				}

				// Update the selected element
				cssInspectorSelectedElement = element;
				window.__cursorDevToolsSelectedElement = element;
				selectionFrozen = true;
				hideHoverOverlay();
				setPointerOverSelectedElement(false);

				// Notify the injected devtools script so it can keep a live reference
				try {
					const inspectorSelectionEvent = new CustomEvent(
						'__cursor_css_inspector_element_selected',
						{
							detail: { element },
						}
					);
					window.dispatchEvent(inspectorSelectionEvent);
				} catch (error) {
					console.error(
						'[BrowserOverlay] Failed to dispatch CSS inspector selection event:',
						error
					);
				}

				// Ensure overlay is visible when selecting from DOM tree
				if (!overlay || !overlayLabel) {
					// Create overlay elements if they don't exist
					if (!overlay) {
						overlay = document.createElement('div');
						overlay.style.cssText = 'position:fixed;border:2px solid #3a96dd;pointer-events:none;z-index:2147483647;';
						document.body.appendChild(overlay);
					}
					if (!overlayLabel) {
						overlayLabel = document.createElement('div');
						overlayLabel.style.cssText = 'position:fixed;background:#3a96dd;color:white;padding:2px 6px;font-size:11px;font-family:system-ui,-apple-system,sans-serif;font-weight:500;border-radius:2px;pointer-events:none;z-index:2147483648;white-space:nowrap;';
						document.body.appendChild(overlayLabel);
					}
				}

				updateHighlight(element);

				// Send element info back
				const rect = element.getBoundingClientRect();
				const computedStyle = window.getComputedStyle(element);
				// Note: className can be SVGAnimatedString for SVG elements
				const selectElementClassName = typeof element.className === 'string' ? element.className : (element.className && element.className.baseVal) || '';

				const elementData = {
					tagName: element.tagName,
					id: element.id || '',
					uniqueId: getOrAssignElementId(element),  // Stable ID for reliable undo/redo targeting
					className: selectElementClassName,
					innerText: element.innerText ? element.innerText.substring(0, 200) : '',
					innerHTML: element.innerHTML || '',
					path: getElementPath(element),
					attributes: Array.from(element.attributes || []).map(a => ({
						name: a.name,
						value: a.value
					})),
					rect: {
						top: rect.top,
						left: rect.left,
						width: rect.width,
						height: rect.height
					},
					styles: {
						color: computedStyle.color,
						backgroundColor: computedStyle.backgroundColor,
						fontSize: computedStyle.fontSize,
						fontFamily: computedStyle.fontFamily,
						display: computedStyle.display,
						position: computedStyle.position
					}
				};

				// Add React component info if available
				const reactInfo = getReactComponentInfo(element);
				if (reactInfo) {
					elementData.reactComponent = {
						name: reactInfo.name,
						props: reactInfo.props
					};
				}

				// Get all styles for CSS inspector (includes computed, inline, effective, matched, convertedColors)
				elementData.allStyles = getAllComputedStyles(element);
				elementData.cssVariables = collectCssVariables(element);

				// Keep selection active for CSS inspector
				elementData.keepSelectionActive = true;

				// Build DOM tree - use getRootDOMTree to ensure consistent tree structure
				elementData.domTree = getRootDOMTree(element);

				// Send the element data to parent
				if (window.cursorBrowser) {
					window.cursorBrowser.send('element-selected', elementData);
				} else {
					console.error('[BrowserOverlay] window.cursorBrowser not available, trying postMessage');
					// Fallback to postMessage if cursorBrowser is not available
					try {
						window.parent.postMessage({
							channel: 'element-selected',
							args: [elementData]
						}, '*');
					} catch (e) {
						console.error('[BrowserOverlay] Failed to send element data:', e);
					}
				}
			}
		} else if (e.data.type === 'css-inspector-opened') {
			// Mark that the CSS inspector panel is open
			cssInspectorPanelOpen = true;
			cssInspectorDragging = false;
			updateCssInspectorCursor();
		} else if (e.data.type === 'css-inspector-closed') {
			// Mark that the CSS inspector panel is closed
			cssInspectorPanelOpen = false;
			cssInspectorDragging = false;
			cssInspectorHighlightSuppressed = false;
			// Clear the selected element but keep selection mode active
			cssInspectorSelectedElement = null;
			window.__cursorDevToolsSelectedElement = null;
			selectionFrozen = false;
			hideHoverOverlay();
			setPointerOverSelectedElement(false);
			updateCssInspectorCursor();
			// Hide the selection overlay since nothing is selected
			if (overlay) {
				overlay.style.display = 'none';
			}
			if (overlayLabel) {
				overlayLabel.style.display = 'none';
			}
		} else if (e.data.type === 'css-inspector-sidebar-hidden') {
			// Sidebar is hidden but element is still selected
			// Keep selection state intact so drag and drop still works
			// Just hide the overlay highlight since sidebar is not visible
			if (overlay) {
				overlay.style.display = 'none';
			}
			if (overlayLabel) {
				overlayLabel.style.display = 'none';
			}
			hideHoverOverlay();
			// Do NOT clear cssInspectorSelectedElement or cssInspectorPanelOpen
			// This allows drag and drop to continue working
		} else if (e.data.type === 'css-inspector-highlight-visible') {
			if (currentSelectionType === 'css-inspector') {
				const shouldShowHighlight = e.data.visible !== false;
				cssInspectorHighlightSuppressed = !shouldShowHighlight;
				if (shouldShowHighlight) {
					if (cssInspectorSelectedElement && selectionMode) {
						updateHighlight(cssInspectorSelectedElement);
					} else {
						updateOverlayDisplay('block');
					}
				} else if (overlay) {
					overlay.style.display = 'none';
					if (overlayLabel) {
						overlayLabel.style.display = 'none';
					}
					hideHoverOverlay();
				}
			}
		} else if (e.data.type === 'css-inspector-drag-state') {
			if (currentSelectionType === 'css-inspector') {
				cssInspectorDragging = !!e.data.dragging;
				updateCssInspectorCursor();
			}
		} else if (e.data.type === 'auto-select-root-element') {
			// Auto-select root element to populate Element Tree sidebar
			const root = document.getElementById('root') || document.body;
			if (!root) return;

			// Set browser-side state for CSS inspector to work properly
			cssInspectorSelectedElement = root;
			window.__cursorDevToolsSelectedElement = root;
			cssInspectorPanelOpen = true;

			const rect = root.getBoundingClientRect();
			const computedStyle = window.getComputedStyle(root);
			const rootClassName = typeof root.className === 'string' ? root.className : (root.className && root.className.baseVal) || '';
			const reactInfo = getReactComponentInfo(root);

			const elementData = {
				tagName: root.tagName,
				id: root.id || '',
				uniqueId: getOrAssignElementId(root),  // Stable ID for reliable undo/redo targeting
				className: rootClassName,
				path: getElementPath(root),
				attributes: Array.from(root.attributes || []).map(a => ({ name: a.name, value: a.value })),
				rect: { top: rect.top, left: rect.left, width: rect.width, height: rect.height },
				styles: {
					color: computedStyle.color,
					backgroundColor: computedStyle.backgroundColor,
					fontSize: computedStyle.fontSize,
					fontFamily: computedStyle.fontFamily,
					display: computedStyle.display,
					position: computedStyle.position
				},
				allStyles: getAllComputedStyles(root),
				domTree: getRootDOMTree(root),
				reactComponent: reactInfo ? { name: reactInfo.name, props: reactInfo.props } : undefined,
				// Mark as auto-selected so we don't close sidebar or add context chip on browser auto-open
				isAutoSelected: true
			};

			if (window.cursorBrowser) {
				window.cursorBrowser.send('element-selected', elementData);
			}
		} else if (e.data.type === 'update-target-url') {
			var url = e.data.url || '';
			if (url) {
				showLinkPreview(url);
			} else {
				hideLinkPreview();
			}
		}
	});

	// =============================================================================
	// Keyboard Shortcuts
	// =============================================================================

	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && selectionMode) {
			e.preventDefault();
			e.stopPropagation();

			// For CSS inspector mode with an element selected, just deselect the element
			// but keep selection mode active so user can select other elements
			if (currentSelectionType === 'css-inspector' && cssInspectorSelectedElement) {
				// Clear the selected element but keep selection mode active
				cssInspectorSelectedElement = null;
				window.__cursorDevToolsSelectedElement = null;
				cssInspectorPanelOpen = false;
				selectionFrozen = false;
				hideHoverOverlay();

				// Hide the selection overlay since nothing is selected
				if (overlay) {
					overlay.style.display = 'none';
				}
				if (overlayLabel) {
					overlayLabel.style.display = 'none';
				}

				// Notify VS Code that element was deselected but selection mode is still active
				if (window.cursorBrowser) {
					window.cursorBrowser.send('element-deselected', { keepSelectionActive: true });
				}
				return;
			}

			// For all other cases (composer-chat mode or no element selected), fully disable selection
			window.postMessage({ type: 'disable-element-selection' }, '*');
			return;
		}

		// Handle Cmd+Z / Ctrl+Z for undo, Shift+Cmd+Z / Shift+Ctrl+Z for redo
		// Works in CSS inspector mode even when panel is closed
		if (currentSelectionType === 'css-inspector') {
			const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
			const hasModifier = isMac ? e.metaKey : e.ctrlKey;

			if (e.key === 'z' && hasModifier) {
				e.preventDefault();
				e.stopPropagation();
				e.stopImmediatePropagation();

				if (window.cursorBrowser && window.cursorBrowser.send) {
					if (e.shiftKey) {
						// Shift+Cmd+Z / Shift+Ctrl+Z = Redo
						window.cursorBrowser.send('css-inspector-redo', {});
					} else {
						// Cmd+Z / Ctrl+Z = Undo
						window.cursorBrowser.send('css-inspector-undo', {});
					}
				}
				return;
			}
		}

		// Handle Backspace/Delete to delete the selected element
		// Only in CSS inspector mode when an element is selected
		if (currentSelectionType === 'css-inspector' && cssInspectorPanelOpen && cssInspectorSelectedElement) {
			if (e.key === 'Backspace' || e.key === 'Delete') {
				// Skip if we're in an input field
				const activeElement = document.activeElement;
				const isInInput =
					activeElement?.tagName === 'INPUT' ||
					activeElement?.tagName === 'TEXTAREA' ||
					activeElement?.getAttribute('contenteditable') === 'true';
				if (isInInput) {
					return;
				}

				e.preventDefault();
				e.stopPropagation();
				e.stopImmediatePropagation();

				// Get the element path to delete
				const elementPath = getOrAssignElementId(cssInspectorSelectedElement);
				if (elementPath) {
					// Send delete message via postMessage (handled by browserInjection.ts)
					window.postMessage({ type: 'delete-dom-element', elementPath: elementPath }, '*');
				}
				return;
			}
		}

		// Handle typing with element selected to focus composer
		// Only when selection is frozen (element selected) and CSS inspector is open
		if (selectionFrozen && cssInspectorSelectedElement && currentSelectionType === 'css-inspector') {
			// Skip if we're in an input field
			const activeElement = document.activeElement;
			const isInInput =
				activeElement?.tagName === 'INPUT' ||
				activeElement?.tagName === 'TEXTAREA' ||
				activeElement?.getAttribute('contenteditable') === 'true';
			if (isInInput) {
				return;
			}

			// Handle printable characters (length 1, no ctrl/meta/alt modifiers)
			// Send message to VS Code to focus the composer input with the initial character
			if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
				e.preventDefault();
				e.stopPropagation();

				// Send message to focus composer and insert the typed character
				if (window.cursorBrowser && window.cursorBrowser.send) {
					window.cursorBrowser.send('focus-composer-input', { initialChar: e.key });
				}
				return;
			}
		}
	}, true);

	// =============================================================================
	// Cleanup
	// =============================================================================

	window.addEventListener('beforeunload', () => {
		disableElementSelection();
	});

})();
`;
