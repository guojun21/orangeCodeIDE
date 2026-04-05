"use strict";

// Module: out-build/vs/editor/browser/gpu/rectangleRenderer.js
// Offset: 1782384 (bundle byte offset)
// Size: 5023 bytes
ri();
yn();
rt();
Gft();
YOn();
f9e();
DlA();
BlA();
Pyh = class extends qVe {
  constructor(n, e, t, i, r, s) {
    super();
    this._context = n;
    this._contentLeft = e;
    this._devicePixelRatio = t;
    this._canvas = i;
    this._ctx = r;
    this._shapeBindBuffer = this._register(new uo());
    this._initialized = false;
    this._shapeCollection = this._register(IlA([{
      name: "x"
    }, {
      name: "y"
    }, {
      name: "width"
    }, {
      name: "height"
    }, {
      name: "red"
    }, {
      name: "green"
    }, {
      name: "blue"
    }, {
      name: "alpha"
    }], 32));
    this._context.addEventHandler(this);
    this._initWebgpu(s);
  }
  async _initWebgpu(n) {
    this._device = await n;
    if (this._store.isDisposed) {
      return;
    }
    const e = navigator.gpu.getPreferredCanvasFormat();
    this._ctx.configure({
      device: this._device,
      format: e,
      alphaMode: "premultiplied"
    });
    this._renderPassColorAttachment = {
      view: null,
      loadOp: "load",
      storeOp: "store"
    };
    this._renderPassDescriptor = {
      label: "Monaco rectangle renderer render pass",
      colorAttachments: [this._renderPassColorAttachment]
    };
    let t;
    {
      let o;
      (function (u) {
        u[u.FloatsPerEntry = 6] = "FloatsPerEntry";
        u[u.BytesPerEntry = 24] = "BytesPerEntry";
        u[u.Offset_CanvasWidth____ = 0] = "Offset_CanvasWidth____";
        u[u.Offset_CanvasHeight___ = 1] = "Offset_CanvasHeight___";
        u[u.Offset_ViewportOffsetX = 2] = "Offset_ViewportOffsetX";
        u[u.Offset_ViewportOffsetY = 3] = "Offset_ViewportOffsetY";
        u[u.Offset_ViewportWidth__ = 4] = "Offset_ViewportWidth__";
        u[u.Offset_ViewportHeight_ = 5] = "Offset_ViewportHeight_";
      })(o ||= {});
      const a = new Float32Array(6);
      const l = (u = this._canvas.width, d = this._canvas.height) => {
        a[0] = u;
        a[1] = d;
        a[2] = Math.ceil(this._context.configuration.options.get(151).contentLeft * $c().devicePixelRatio);
        a[3] = 0;
        a[4] = a[0] - a[2];
        a[5] = a[1] - a[3];
        return a;
      };
      t = this._register(GY.createBuffer(this._device, {
        label: "Monaco rectangle renderer uniform buffer",
        size: 24,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
      }, () => l())).object;
      this._register(yyh(this._canvas, $c(), (u, d) => {
        this._device.queue.writeBuffer(t, 0, l(u, d));
      }));
    }
    const i = 2;
    this._scrollOffsetBindBuffer = this._register(GY.createBuffer(this._device, {
      label: "Monaco rectangle renderer scroll offset buffer",
      size: i * Float32Array.BYTES_PER_ELEMENT,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
    })).object;
    this._scrollOffsetValueBuffer = new Float32Array(i);
    const r = () => GY.createBuffer(this._device, {
      label: "Monaco rectangle renderer shape buffer",
      size: this._shapeCollection.buffer.byteLength,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
    });
    this._shapeBindBuffer.value = r();
    this._register(In.runAndSubscribe(this._shapeCollection.onDidChangeBuffer, () => {
      this._shapeBindBuffer.value = r();
      if (this._pipeline) {
        this._updateBindGroup(this._pipeline, t);
      }
    }));
    this._vertexBuffer = this._register(GY.createBuffer(this._device, {
      label: "Monaco rectangle renderer vertex buffer",
      size: QVe.byteLength,
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    }, QVe)).object;
    const s = this._device.createShaderModule({
      label: "Monaco rectangle renderer shader module",
      code: Ryh
    });
    this._pipeline = this._device.createRenderPipeline({
      label: "Monaco rectangle renderer render pipeline",
      layout: "auto",
      vertex: {
        module: s,
        buffers: [{
          arrayStride: Float32Array.BYTES_PER_ELEMENT * 2,
          attributes: [{
            shaderLocation: 0,
            offset: 0,
            format: "float32x2"
          }]
        }]
      },
      fragment: {
        module: s,
        targets: [{
          format: e,
          blend: {
            color: {
              srcFactor: "src-alpha",
              dstFactor: "one-minus-src-alpha"
            },
            alpha: {
              srcFactor: "src-alpha",
              dstFactor: "one-minus-src-alpha"
            }
          }
        }]
      }
    });
    this._updateBindGroup(this._pipeline, t);
    this._initialized = true;
  }
  _updateBindGroup(n, e) {
    this._bindGroup = this._device.createBindGroup({
      label: "Monaco rectangle renderer bind group",
      layout: n.getBindGroupLayout(0),
      entries: [{
        binding: 0,
        resource: {
          buffer: this._shapeBindBuffer.value.object
        }
      }, {
        binding: 1,
        resource: {
          buffer: e
        }
      }, {
        binding: 2,
        resource: {
          buffer: this._scrollOffsetBindBuffer
        }
      }]
    });
  }
  register(n, e, t, i, r, s, o, a) {
    return this._shapeCollection.createEntry({
      x: n,
      y: e,
      width: t,
      height: i,
      red: r,
      green: s,
      blue: o,
      alpha: a
    });
  }
  onScrollChanged(n) {
    if (this._device) {
      const e = $c().devicePixelRatio;
      this._scrollOffsetValueBuffer[0] = this._context.viewLayout.getCurrentScrollLeft() * e;
      this._scrollOffsetValueBuffer[1] = this._context.viewLayout.getCurrentScrollTop() * e;
      this._device.queue.writeBuffer(this._scrollOffsetBindBuffer, 0, this._scrollOffsetValueBuffer);
    }
    return true;
  }
  _update() {
    if (!this._device) {
      return;
    }
    const n = this._shapeCollection;
    if (n.dirtyTracker.isDirty) {
      this._device.queue.writeBuffer(this._shapeBindBuffer.value.object, 0, n.buffer, n.dirtyTracker.dataOffset, n.dirtyTracker.dirtySize * n.view.BYTES_PER_ELEMENT);
      n.dirtyTracker.clear();
    }
  }
  draw(n) {
    if (!this._initialized) {
      return;
    }
    this._update();
    const e = this._device.createCommandEncoder({
      label: "Monaco rectangle renderer command encoder"
    });
    this._renderPassColorAttachment.view = this._ctx.getCurrentTexture().createView();
    const t = e.beginRenderPass(this._renderPassDescriptor);
    t.setPipeline(this._pipeline);
    t.setVertexBuffer(0, this._vertexBuffer);
    t.setBindGroup(0, this._bindGroup);
    const i = Math.ceil(this._contentLeft.get() * this._devicePixelRatio.get());
    t.setScissorRect(i, 0, this._canvas.width - i, this._canvas.height);
    t.draw(QVe.length / 2, this._shapeCollection.entryCount);
    t.end();
    const r = e.finish();
    this._device.queue.submit([r]);
  }
};
