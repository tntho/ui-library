var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-ec84eadc.js';
import { F as FileUploadRejectionReason } from './file-upload.type-721605f0.js';
function unwrapExports(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}
function createCommonjsModule(fn, basedir, module) {
    return module = {
        path: basedir,
        exports: {},
        require: function (path, base) {
            return commonjsRequire();
        }
    }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
    throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}
var spec = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var si = { radix: 1e3, unit: ['b', 'kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb'] };
    var iec = { radix: 1024, unit: ['b', 'Kib', 'Mib', 'Gib', 'Tib', 'Pib', 'Eib', 'Zib', 'Yib'] };
    var jedec = { radix: 1024, unit: ['b', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb'] };
    exports.SPECS = {
        si: si,
        iec: iec,
        jedec: jedec,
    };
});
unwrapExports(spec);
var lib = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * file size
     * @param bytes
     * @param fixed
     * @param spec
     */
    function default_1(bytes, fixed, spec$1) {
        if (fixed === void 0) {
            fixed = 1;
        }
        bytes = Math.abs(bytes);
        var _a = spec.SPECS[spec$1] || spec.SPECS['jedec'], radix = _a.radix, unit = _a.unit;
        var loop = 0;
        // calculate
        while (bytes >= radix) {
            bytes /= radix;
            ++loop;
        }
        return bytes.toFixed(fixed) + " " + unit[loop];
    }
    exports.default = default_1;
});
var filesize = unwrapExports(lib);
var fileUploadCss = ".file{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.file-cta,.file-name{-moz-appearance:none;-webkit-appearance:none;-ms-flex-align:center;align-items:center;border:1px solid transparent;border-radius:4px;-webkit-box-shadow:none;box-shadow:none;display:-ms-inline-flexbox;display:inline-flex;font-size:0.9375rem;height:2.5em;-ms-flex-pack:start;justify-content:flex-start;line-height:1.5;padding-bottom:calc(0.5em - 1px);padding-left:calc(0.75em - 1px);padding-right:calc(0.75em - 1px);padding-top:calc(0.5em - 1px);position:relative;vertical-align:top}.file-cta:focus,.file-name:focus,.is-focused.file-cta,.is-focused.file-name,.file-cta:active,.file-name:active,.is-active.file-cta,.is-active.file-name{outline:none}[disabled].file-cta,[disabled].file-name,fieldset[disabled] .file-cta,fieldset[disabled] .file-name{cursor:not-allowed}*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}.bal-list{position:static;display:block;width:100%}.bal-list.is-inverted .bal-list-item.is-selected{background:#002b82}.bal-list.is-inverted .bal-list-item:not(.is-selected):hover{background:#002b82}.bal-list.is-disabled .bal-list-item,.bal-list .bal-list-item.is-disabled{-webkit-transition:0;transition:0;cursor:default}.bal-list.is-disabled .bal-list-item:hover,.bal-list .bal-list-item.is-disabled:hover{padding:0}.bal-list.is-disabled .bal-list-item:not(.is-selected):hover{background:transparent}.bal-list.has-border .bal-list-item{border-bottom:1px solid #d3dbeb}.bal-list.has-border.is-inverted .bal-list-item{border-bottom:1px solid #294d98}.bal-list.is-inverted .bal-list-item-title{color:#ffffff}.bal-list-item{position:relative;display:-ms-flexbox;display:flex;-ms-flex:1 1 100%;flex:1 1 100%;-ms-flex-align:center;align-items:center;letter-spacing:normal;min-height:48px;outline:none;text-decoration:none;-webkit-transition:0.2s ease-in-out;transition:0.2s ease-in-out;cursor:pointer}.bal-list-item:hover{padding:0 8px}.bal-list-item.is-selected{background:#f0fbff}.bal-list-item-icon{display:block;-ms-flex-item-align:start;align-self:flex-start;display:-ms-inline-flexbox;display:inline-flex;min-width:24px;margin:8px 0;margin-right:20px}.bal-list-item-icon.is-right{margin-right:0;margin-left:20px}.bal-list-item-title,.bal-list-item-subtitle,.bal-list-item-content{font-weight:400;-ms-flex-item-align:center;align-self:center;overflow:hidden}.bal-list-item-title,.bal-list-item-subtitle{display:block;-ms-flex:1 1 100%;flex:1 1 100%;text-overflow:ellipsis;white-space:nowrap}.bal-list-item-title{color:#003399}.bal-list-item-subtitle{color:#7188b8}.bal-list-item-content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex:1 1;flex:1 1;overflow:hidden}.file{-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;position:relative}.file.is-white .file-cta{background-color:#ffffff;border-color:transparent;color:#222222}.file.is-white:hover .file-cta,.file.is-white.is-hovered .file-cta{background-color:#f9f9f9;border-color:transparent;color:#222222}.file.is-white:focus .file-cta,.file.is-white.is-focused .file-cta{border-color:transparent;-webkit-box-shadow:0 0 0.5em rgba(255, 255, 255, 0.25);box-shadow:0 0 0.5em rgba(255, 255, 255, 0.25);color:#222222}.file.is-white:active .file-cta,.file.is-white.is-active .file-cta{background-color:#f2f2f2;border-color:transparent;color:#222222}.file.is-black .file-cta{background-color:#222222;border-color:transparent;color:#ffffff}.file.is-black:hover .file-cta,.file.is-black.is-hovered .file-cta{background-color:#1c1c1c;border-color:transparent;color:#ffffff}.file.is-black:focus .file-cta,.file.is-black.is-focused .file-cta{border-color:transparent;-webkit-box-shadow:0 0 0.5em rgba(34, 34, 34, 0.25);box-shadow:0 0 0.5em rgba(34, 34, 34, 0.25);color:#ffffff}.file.is-black:active .file-cta,.file.is-black.is-active .file-cta{background-color:#151515;border-color:transparent;color:#ffffff}.file.is-light .file-cta{background-color:#fafafa;border-color:transparent;color:rgba(0, 0, 0, 0.7)}.file.is-light:hover .file-cta,.file.is-light.is-hovered .file-cta{background-color:#f4f4f4;border-color:transparent;color:rgba(0, 0, 0, 0.7)}.file.is-light:focus .file-cta,.file.is-light.is-focused .file-cta{border-color:transparent;-webkit-box-shadow:0 0 0.5em rgba(250, 250, 250, 0.25);box-shadow:0 0 0.5em rgba(250, 250, 250, 0.25);color:rgba(0, 0, 0, 0.7)}.file.is-light:active .file-cta,.file.is-light.is-active .file-cta{background-color:#ededed;border-color:transparent;color:rgba(0, 0, 0, 0.7)}.file.is-dark .file-cta{background-color:#003399;border-color:transparent;color:#fff}.file.is-dark:hover .file-cta,.file.is-dark.is-hovered .file-cta{background-color:#002f8c;border-color:transparent;color:#fff}.file.is-dark:focus .file-cta,.file.is-dark.is-focused .file-cta{border-color:transparent;-webkit-box-shadow:0 0 0.5em rgba(0, 51, 153, 0.25);box-shadow:0 0 0.5em rgba(0, 51, 153, 0.25);color:#fff}.file.is-dark:active .file-cta,.file.is-dark.is-active .file-cta{background-color:#002b80;border-color:transparent;color:#fff}.file.is-primary .file-cta{background-color:#009ee7;border-color:transparent;color:#ffffff}.file.is-primary:hover .file-cta,.file.is-primary.is-hovered .file-cta{background-color:#0095da;border-color:transparent;color:#ffffff}.file.is-primary:focus .file-cta,.file.is-primary.is-focused .file-cta{border-color:transparent;-webkit-box-shadow:0 0 0.5em rgba(0, 158, 231, 0.25);box-shadow:0 0 0.5em rgba(0, 158, 231, 0.25);color:#ffffff}.file.is-primary:active .file-cta,.file.is-primary.is-active .file-cta{background-color:#008dce;border-color:transparent;color:#ffffff}.file.is-link .file-cta{background-color:#009ee7;border-color:transparent;color:#003399}.file.is-link:hover .file-cta,.file.is-link.is-hovered .file-cta{background-color:#0095da;border-color:transparent;color:#003399}.file.is-link:focus .file-cta,.file.is-link.is-focused .file-cta{border-color:transparent;-webkit-box-shadow:0 0 0.5em rgba(0, 158, 231, 0.25);box-shadow:0 0 0.5em rgba(0, 158, 231, 0.25);color:#003399}.file.is-link:active .file-cta,.file.is-link.is-active .file-cta{background-color:#008dce;border-color:transparent;color:#003399}.file.is-info .file-cta{background-color:#003399;border-color:transparent;color:#fff}.file.is-info:hover .file-cta,.file.is-info.is-hovered .file-cta{background-color:#002f8c;border-color:transparent;color:#fff}.file.is-info:focus .file-cta,.file.is-info.is-focused .file-cta{border-color:transparent;-webkit-box-shadow:0 0 0.5em rgba(0, 51, 153, 0.25);box-shadow:0 0 0.5em rgba(0, 51, 153, 0.25);color:#fff}.file.is-info:active .file-cta,.file.is-info.is-active .file-cta{background-color:#002b80;border-color:transparent;color:#fff}.file.is-success .file-cta{background-color:#3fc889;border-color:transparent;color:#ffffff}.file.is-success:hover .file-cta,.file.is-success.is-hovered .file-cta{background-color:#38c383;border-color:transparent;color:#ffffff}.file.is-success:focus .file-cta,.file.is-success.is-focused .file-cta{border-color:transparent;-webkit-box-shadow:0 0 0.5em rgba(63, 200, 137, 0.25);box-shadow:0 0 0.5em rgba(63, 200, 137, 0.25);color:#ffffff}.file.is-success:active .file-cta,.file.is-success.is-active .file-cta{background-color:#35b97c;border-color:transparent;color:#ffffff}.file.is-warning .file-cta{background-color:#ff9900;border-color:transparent;color:#fff}.file.is-warning:hover .file-cta,.file.is-warning.is-hovered .file-cta{background-color:#f29100;border-color:transparent;color:#fff}.file.is-warning:focus .file-cta,.file.is-warning.is-focused .file-cta{border-color:transparent;-webkit-box-shadow:0 0 0.5em rgba(255, 153, 0, 0.25);box-shadow:0 0 0.5em rgba(255, 153, 0, 0.25);color:#fff}.file.is-warning:active .file-cta,.file.is-warning.is-active .file-cta{background-color:#e68a00;border-color:transparent;color:#fff}.file.is-danger .file-cta{background-color:#ff3366;border-color:transparent;color:#fff}.file.is-danger:hover .file-cta,.file.is-danger.is-hovered .file-cta{background-color:#ff265c;border-color:transparent;color:#fff}.file.is-danger:focus .file-cta,.file.is-danger.is-focused .file-cta{border-color:transparent;-webkit-box-shadow:0 0 0.5em rgba(255, 51, 102, 0.25);box-shadow:0 0 0.5em rgba(255, 51, 102, 0.25);color:#fff}.file.is-danger:active .file-cta,.file.is-danger.is-active .file-cta{background-color:#ff1a53;border-color:transparent;color:#fff}.file.is-small{font-size:0.8125rem}.file.is-medium{font-size:1.125rem}.file.is-medium .file-icon .fa{font-size:21px}.file.is-large{font-size:1.375rem}.file.is-large .file-icon .fa{font-size:28px}.file.has-name .file-cta{border-bottom-right-radius:0;border-top-right-radius:0}.file.has-name .file-name{border-bottom-left-radius:0;border-top-left-radius:0}.file.has-name.is-empty .file-cta{border-radius:4px}.file.has-name.is-empty .file-name{display:none}.file.is-boxed .file-label{-ms-flex-direction:column;flex-direction:column}.file.is-boxed .file-cta{-ms-flex-direction:column;flex-direction:column;height:auto;padding:1em 3em}.file.is-boxed .file-name{border-width:0 1px 1px}.file.is-boxed .file-icon{height:1.5em;width:1.5em}.file.is-boxed .file-icon .fa{font-size:21px}.file.is-boxed.is-small .file-icon .fa{font-size:14px}.file.is-boxed.is-medium .file-icon .fa{font-size:28px}.file.is-boxed.is-large .file-icon .fa{font-size:35px}.file.is-boxed.has-name .file-cta{border-radius:4px 4px 0 0}.file.is-boxed.has-name .file-name{border-radius:0 0 4px 4px;border-width:0 1px 1px}.file.is-centered{-ms-flex-pack:center;justify-content:center}.file.is-fullwidth .file-label{width:100%}.file.is-fullwidth .file-name{-ms-flex-positive:1;flex-grow:1;max-width:none}.file.is-right{-ms-flex-pack:end;justify-content:flex-end}.file.is-right .file-cta{border-radius:0 4px 4px 0}.file.is-right .file-name{border-radius:4px 0 0 4px;border-width:1px 0 1px 1px;-ms-flex-order:-1;order:-1}.file-label{-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;cursor:pointer;-ms-flex-pack:start;justify-content:flex-start;overflow:hidden;position:relative}.file-label:hover .file-cta{background-color:#f9f9f9;color:#003399}.file-label:hover .file-name{border-color:#cad4e7}.file-label:active .file-cta{background-color:#f2f2f2;color:#003399}.file-label:active .file-name{border-color:#c1cde3}.file-input{height:100%;left:0;opacity:0;outline:none;position:absolute;top:0;width:100%}.file-cta,.file-name{border-color:#d3dbeb;border-radius:4px;font-size:1em;padding-left:1em;padding-right:1em;white-space:nowrap}.file-cta{background-color:#ffffff;color:#222222}.file-name{border-color:#d3dbeb;border-style:dashed;border-width:1px 1px 1px 0;display:block;max-width:16em;overflow:hidden;text-align:inherit;text-overflow:ellipsis}.file-icon{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;height:1em;-ms-flex-pack:center;justify-content:center;margin-right:0.5em;width:1em}.file-icon .fa{font-size:14px}:host{position:static;display:block}span.file-cta,label.file-label{-ms-flex:1;flex:1}span.file-cta{height:90px;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border-style:dashed}.file-label.is-hovered .file-cta,.file-label:hover .file-cta{background:#f0fbff;color:#003399}span.file-icon bal-icon{margin-right:6px;margin-top:6px}bal-list{margin-top:15px}.file-remove{cursor:pointer}label.file-label.is-disabled{cursor:not-allowed}label.file-label.is-disabled .file-cta,label.file-label.is-disabled.is-hovered .file-cta,label.file-label.is-disabled:hover .file-cta{background:#f0fbff;color:#222222}";
var FileUpload = /** @class */ (function () {
    function FileUpload(hostRef) {
        registerInstance(this, hostRef);
        this.balChangeEventEmitter = createEvent(this, "balChange", 7);
        this.balFileUploadRejectedFileEventEmitter = createEvent(this, "balFileUploadRejectedFile", 7);
        this.bundleSize = 0;
        this.isOver = false;
        this.files = [];
        /**
         * Label of the drop area.
         */
        this.label = "Choose or drop a file...";
        /**
         * If `true` multiple file upload is possible.
         */
        this.multiple = true;
        /**
         * Accepted MIME-Types like `image/png,image/jpeg`.
         */
        this.accept = "";
        /**
         * Allowed number of files in the bundle.
         */
        this.maxFiles = undefined;
        /**
         * Allowed max file size in bytes.
         */
        this.maxFileSize = undefined;
        /**
         * Allowed max bundle size in bytes.
         */
        this.maxBundleSize = undefined;
    }
    FileUpload.prototype.dragenterHandler = function () {
        if (!this.disabled) {
            this.isOver = true;
        }
    };
    FileUpload.prototype.dragoverHandler = function () {
        if (!this.disabled) {
            this.isOver = true;
        }
    };
    FileUpload.prototype.dragleaveHandler = function () {
        if (!this.disabled) {
            this.isOver = false;
        }
    };
    FileUpload.prototype.dropHandler = function (event) {
        if (!this.disabled) {
            this.isOver = false;
            var dataTransfer = event.dataTransfer;
            if (event.dataTransfer) {
                this.handleFiles(dataTransfer.files);
            }
        }
    };
    FileUpload.prototype.handleFiles = function (files) {
        if (!this.disabled) {
            var list = __spreadArrays(this.files);
            var _loop_1 = function (index) {
                var file = files.item(index);
                var rejectReasons = [];
                if (this_1.accept &&
                    this_1.accept.split(" ").join("").split(",").indexOf(file.type) === -1) {
                    rejectReasons.push(FileUploadRejectionReason.BAD_EXTENSION);
                }
                if (this_1.maxFileSize && file.size > this_1.maxFileSize) {
                    rejectReasons.push(FileUploadRejectionReason.FILE_TOO_BIG);
                }
                var transactionFileSizeSum = this_1.files
                    .map(function (f) { return f.size; })
                    .reduce(function (a, b) { return a + b; }, 0);
                var bundleSize = file.size + transactionFileSizeSum;
                if (this_1.maxBundleSize && bundleSize > this_1.maxBundleSize) {
                    rejectReasons.push(FileUploadRejectionReason.FILE_SIZE_SUM_TOO_BIG);
                }
                if (this_1.maxFiles && list.length + 1 > this_1.maxFiles) {
                    rejectReasons.push(FileUploadRejectionReason.TOO_MANY_FILES);
                }
                var duplicatedFiles = list.filter(function (f) { return f.size === file.size &&
                    f.name === file.name &&
                    f.type === file.type; });
                if (duplicatedFiles.length > 0) {
                    rejectReasons.push(FileUploadRejectionReason.DUPLICATED_FILE);
                }
                if (rejectReasons.length > 0) {
                    this_1.balFileUploadRejectedFileEventEmitter.emit({
                        file: file,
                        reasons: rejectReasons,
                    });
                }
                else {
                    list.push(file);
                }
            };
            var this_1 = this;
            for (var index = 0; index < files.length; index++) {
                _loop_1(index);
            }
            this.files = __spreadArrays(list);
            this.balChangeEventEmitter.emit(this.files);
        }
    };
    FileUpload.prototype.componentDidLoad = function () {
        var _this = this;
        ["dragenter", "dragover", "dragleave", "drop"].forEach(function (eventName) {
            _this.element.addEventListener(eventName, _this.preventDefaults, false);
            document.body.addEventListener(eventName, _this.preventDefaults, false);
        });
    };
    FileUpload.prototype.componentDidUnload = function () {
        var _this = this;
        ["dragenter", "dragover", "dragleave", "drop"].forEach(function (eventName) {
            _this.element.removeEventListener(eventName, _this.preventDefaults, false);
            document.body.removeEventListener(eventName, _this.preventDefaults, false);
        });
    };
    FileUpload.prototype.preventDefaults = function (e) {
        e.preventDefault();
        e.stopPropagation();
    };
    FileUpload.prototype.removeFile = function (indexToRemove) {
        if (!this.disabled) {
            var list = [];
            for (var index = 0; index < this.files.length; index++) {
                if (index !== indexToRemove) {
                    list.push(this.files[index]);
                }
            }
            this.files = __spreadArrays(list);
            this.balChangeEventEmitter.emit(this.files);
        }
    };
    FileUpload.prototype.render = function () {
        var _this = this;
        return (h(Host, { class: ["bal-file-upload", this.disabled ? "is-disabled" : ""].join(" ") }, h("div", { class: "file" }, h("label", { class: [
                "file-label",
                this.isOver ? "is-hovered" : "",
                this.disabled ? "is-disabled" : "",
            ].join(" ") }, h("input", { class: "file-input", type: "file", name: "resume", multiple: this.multiple, disabled: this.disabled, accept: this.accept, onChange: function () { return _this.handleFiles(_this.fileInput.files); }, ref: function (el) { return (_this.fileInput = el); } }), h("span", { class: "file-cta" }, h("span", { class: "file-icon" }, h("bal-icon", { name: "upload", size: "medium" })), h("span", { class: "file-label" }, this.label)))), h("bal-list", { disabled: true, border: true }, this.files.map(function (file, index) { return (h("bal-list-item", null, h("bal-list-item-icon", null, h("bal-icon", { size: "medium", name: "document" })), h("bal-list-item-content", null, h("bal-list-item-title", null, file.name), h("bal-list-item-subtitle", null, filesize(file.size))), h("bal-list-item-icon", { right: true, class: "file-remove", onClick: function () { return _this.removeFile(index); } }, h("bal-icon", { size: "medium", name: "trash" })))); }))));
    };
    Object.defineProperty(FileUpload.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return FileUpload;
}());
FileUpload.style = fileUploadCss;
export { FileUpload as bal_file_upload };
