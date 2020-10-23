var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, c as createEvent, h, H as Host } from './index-ec84eadc.js';
var filterButtonCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}div.bal-checkbox{position:relative;padding-right:25px;padding-bottom:15px}div.bal-checkbox input[type=checkbox]{position:absolute;left:0;top:0;margin:0;padding:0;opacity:0;outline:0}div.bal-checkbox input[type=checkbox]+label{cursor:pointer;padding-left:34px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}div.bal-checkbox label{padding-left:34px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#003399}div.bal-checkbox label::before,div.bal-checkbox label::after{display:inline-block;position:absolute;background-color:transparent;background-position:center;background-repeat:no-repeat;background-size:24px 24px}div.bal-checkbox label::before{content:\"\";left:0;top:0;height:24px;width:24px;border:1px solid #99add6}div.bal-checkbox label::after{content:none;left:9px;top:6px;width:6px;height:10px;border-bottom:2px solid #003399;border-right:2px solid #003399;border-top:0;border-left:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}div.bal-checkbox input[type=checkbox]:disabled+label{cursor:not-allowed;opacity:0.5}div.bal-checkbox input[type=checkbox]:checked+label::after{content:\"\"}div.bal-checkbox input[type=checkbox]:focus+label::before{outline:1px dashed #009ee7 !important}div.bal-checkbox.is-inverted label{color:#ffffff}div.bal-checkbox.is-inverted label::before{border:1px solid #99add6}div.bal-checkbox.is-inverted label::after{border-bottom:2px solid #ffffff;border-right:2px solid #ffffff}div.bal-checkbox.is-inverted input[type=checkbox]:hover:not([disabled])+label:before{border-color:#ffffff}:host{display:-ms-inline-flexbox;display:inline-flex}.filter-button-inner{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center}div.bal-checkbox{padding:0}div.bal-checkbox label{padding-left:30px !important;line-height:1.25rem !important;font-weight:600 !important}div.bal-checkbox label::before{top:1px;width:18px;height:18px}div.bal-checkbox label::after{left:7px;top:5px;width:4px;height:8px}";
var FilterButton = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.balChangeEventEmitter = createEvent(this, "balChange", 7);
        this.isActive = false;
        /**
         * If `true` then the button is active/selected
         */
        this.active = false;
    }
    class_1.prototype.validateCollapsed = function (newValue) {
        this.isActive = newValue;
    };
    class_1.prototype.componentWillLoad = function () {
        this.isActive = this.active;
    };
    class_1.prototype.toggle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.isActive = !this.isActive;
                this.balChangeEventEmitter.emit(this.isActive);
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (h(Host, null, h("bal-button", { type: "is-info", dense: true, outlined: true, "is-active": this.isActive, onClick: function () { return _this.toggle(); } }, h("div", { class: "filter-button-inner" }, h("div", { class: "bal-checkbox" }, h("input", { type: "checkbox", checked: this.isActive }), h("label", null, h("slot", null)))))));
    };
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "active": ["validateCollapsed"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return class_1;
}());
FilterButton.style = filterButtonCss;
export { FilterButton as bal_filter_button };
