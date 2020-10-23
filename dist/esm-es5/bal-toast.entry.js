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
import { r as registerInstance, h, H as Host, g as getElement } from './index-ec84eadc.js';
var toastCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}@-webkit-keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}@-webkit-keyframes fadeOutDown{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0)}}@keyframes fadeOutDown{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0)}}.fadeOutDown{-webkit-animation-name:fadeOutDown;animation-name:fadeOutDown}@-webkit-keyframes fadeOutUp{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(0, -100%, 0);transform:translate3d(0, -100%, 0)}}@keyframes fadeOutUp{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(0, -100%, 0);transform:translate3d(0, -100%, 0)}}.fadeOutUp{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}@-webkit-keyframes fadeInDown{from{opacity:0;-webkit-transform:translate3d(0, -100%, 0);transform:translate3d(0, -100%, 0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInDown{from{opacity:0;-webkit-transform:translate3d(0, -100%, 0);transform:translate3d(0, -100%, 0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInDown{-webkit-animation-name:fadeInDown;animation-name:fadeInDown}@-webkit-keyframes fadeInUp{from{opacity:0;-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInUp{from{opacity:0;-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInUp{-webkit-animation-name:fadeInUp;animation-name:fadeInUp}.container{-ms-flex-positive:1;flex-grow:1;margin:0 auto;position:relative;width:auto}.container.is-fluid{max-width:none;padding-left:32px;padding-right:32px;width:100%}@media screen and (min-width: 1024px){.container{max-width:960px}}@media screen and (max-width: 1215px){.container.is-widescreen{max-width:1152px}}@media screen and (max-width: 1407px){.container.is-fullhd{max-width:1344px}}@media screen and (min-width: 1216px){.container{max-width:1152px}}@media screen and (min-width: 1408px){.container{max-width:1344px}}:host{display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-item-align:center;align-self:center;cursor:pointer;width:100%;-ms-flex-pack:center;justify-content:center;-ms-flex-positive:0 !important;flex-grow:0 !important}:host .toast{-ms-flex-item-align:center;align-self:center;display:-ms-inline-flexbox;display:inline-flex;-webkit-animation-duration:150ms;animation-duration:150ms;margin:0.5em 0;text-align:center;-webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);box-shadow:0 1px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);border-radius:3px;padding:20px 40px;pointer-events:auto;max-width:600px;-ms-flex-positive:1;flex-grow:1;font-size:0.9375rem;font-weight:700}:host .toast.is-primary{background:#009ee7;color:#ffffff}:host .toast.is-info{background:#003399;color:#fff}:host .toast.is-success{background:#3fc889;color:#ffffff}:host .toast.is-warning{background:#ff9900;color:#ffffff}:host .toast.is-danger{background:#ff3366;color:#ffffff}";
var Toast = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.animationClass = "fadeInDown";
        /**
         * The theme type of the toast. Given by bulma our css framework.
         */
        this.type = "is-primary";
    }
    /**
     * Closes the toast after the given duration in ms
     */
    class_1.prototype.closeIn = function (duration) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.timer = setTimeout(function () { return _this.close(); }, duration);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Closes this toast
     */
    class_1.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                clearTimeout(this.timer);
                this.animationClass = "fadeOut";
                this.timer = setTimeout(function () {
                    _this.element.remove();
                    clearTimeout(_this.timer);
                }, 150);
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (h(Host, { class: "container" }, h("div", { role: "alert", onClick: function () { return _this.close(); }, class: "toast " + this.animationClass + " " + this.type }, h("slot", null))));
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return class_1;
}());
Toast.style = toastCss;
export { Toast as bal_toast };
