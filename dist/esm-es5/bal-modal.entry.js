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
import { r as registerInstance, h, H as Host } from './index-ec84eadc.js';
var modalCss = ".modal-close{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.box:not(:last-child){margin-bottom:1.5rem}.modal-close{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(34, 34, 34, 0.2);border:none;border-radius:100%;cursor:pointer;pointer-events:auto;display:inline-block;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;font-size:0;height:20px;max-height:20px;max-width:20px;min-height:20px;min-width:20px;outline:none;position:relative;vertical-align:top;width:20px}.modal-close::before,.modal-close::after{background-color:#ffffff;content:\"\";display:block;left:50%;position:absolute;top:50%;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);-webkit-transform-origin:center center;transform-origin:center center}.modal-close::before{height:2px;width:50%}.modal-close::after{height:50%;width:2px}.modal-close:hover,.modal-close:focus{background-color:rgba(34, 34, 34, 0.3)}.modal-close:active{background-color:rgba(34, 34, 34, 0.4)}.is-small.modal-close{height:16px;max-height:16px;max-width:16px;min-height:16px;min-width:16px;width:16px}.is-medium.modal-close{height:24px;max-height:24px;max-width:24px;min-height:24px;min-width:24px;width:24px}.is-large.modal-close{height:32px;max-height:32px;max-width:32px;min-height:32px;min-width:32px;width:32px}.modal-background,.modal{bottom:0;left:0;position:absolute;right:0;top:0}*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}a.box{font-weight:400}.section{padding:40px}@media screen and (min-width: 1024px){.section.is-medium{padding:9rem 1.5rem}.section.is-large{padding:18rem 1.5rem}}.box{background-color:#ffffff;border-radius:0;-webkit-box-shadow:0 0 10px 0 rgba(0, 33, 98, 0.15);box-shadow:0 0 10px 0 rgba(0, 33, 98, 0.15);color:#222222;display:block;padding:0}a.box:hover,a.box:focus{-webkit-box-shadow:0 0 30px 0 rgba(0, 33, 98, 0.15);box-shadow:0 0 30px 0 rgba(0, 33, 98, 0.15)}a.box:active{-webkit-box-shadow:0 0 30px 0 rgba(0, 33, 98, 0.15);box-shadow:0 0 30px 0 rgba(0, 33, 98, 0.15)}.modal{-ms-flex-align:center;align-items:center;display:none;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;overflow:hidden;position:fixed;z-index:40}.modal.is-active{display:-ms-flexbox;display:flex}.modal-background{background-color:rgba(255, 255, 255, 0.5)}.modal-content,.modal-card{margin:0 20px;max-height:calc(100vh - 160px);overflow:auto;position:relative;width:100%}@media screen and (min-width: 769px), print{.modal-content,.modal-card{margin:0 auto;max-height:calc(100vh - 40px);width:640px}}.modal-close{background:none;height:40px;position:fixed;right:30px;top:30px;width:40px}.modal-card{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;max-height:calc(100vh - 40px);overflow:hidden;-ms-overflow-y:visible}.modal-card-head,.modal-card-foot{-ms-flex-align:center;align-items:center;background-color:#ffffff;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-pack:start;justify-content:flex-start;padding:40px;position:relative}.modal-card-head{border-bottom:1px solid #d3dbeb;border-top-left-radius:0px;border-top-right-radius:0px}.modal-card-title{color:#003399;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;font-size:2rem;line-height:1}.modal-card-foot{border-bottom-left-radius:0px;border-bottom-right-radius:0px;border-top:1px solid #d3dbeb}.modal-card-foot .button:not(:last-child){margin-right:0.5em}.modal-card-body{-webkit-overflow-scrolling:touch;background-color:#ffffff;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;overflow:auto;padding:40px}:host{display:block}.modal{-ms-flex-pack:start;justify-content:flex-start}.modal-card{width:var(--bal-width, 640px);margin-top:30px}.modal-card .modal-card-head{padding-bottom:0px}.modal-card .modal-card-head .modal-card-title{margin-top:0px;margin-bottom:10px}.modal-card .modal-card-body{padding-top:10px;padding-bottom:20px}.modal-card .modal-card-foot{padding-top:20px}.modal-card .modal-card-foot .modal-card-foot-container{width:100%}.modal-card.no-border .modal-card-head{border:none}.modal-card.no-border .modal-card-foot{border:none}";
var Modal = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.isActive = false;
        /**
         * Marks this modal as card-style modal, i.e. having visual lines separating head, body, and foot.
         */
        this.card = false;
    }
    class_1.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.isActive = true;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.isActive = false;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.handleKeyUp = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.isActive) {
                    if (event.key === "Escape" || event.key === "Esc") {
                        event.preventDefault();
                        this.close();
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.render = function () {
        return (h(Host, null, h("div", { class: [
                "modal",
                "is-clipped",
                this.isActive ? "is-active" : "",
            ].join(" ") }, h("div", { class: "modal-background" }), h("div", { class: [
                "modal-card box",
                this.card ? "" : "no-border",
            ].join(" ") }, h("header", { class: "modal-card-head" }, h("p", { class: "modal-card-title" }, h("slot", { name: "head" }))), h("section", { class: "modal-card-body" }, h("slot", null)), h("footer", { class: "modal-card-foot" }, h("div", { class: "modal-card-foot-container" }, h("slot", { name: "foot" })))))));
    };
    return class_1;
}());
Modal.style = modalCss;
export { Modal as bal_modal };
