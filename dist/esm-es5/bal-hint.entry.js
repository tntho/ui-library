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
var hintCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}bal-button.is-fullwidth{width:100%}.buttons{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:start;justify-content:flex-start}.buttons bal-button{margin-right:5px}.buttons bal-button:last-child{margin-right:0}span.trigger-label{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}span.trigger-label span.label{margin-bottom:2px}.is-padded-small{padding:10px !important}.is-padded{padding:20px !important}.is-padded-medium{padding:30px !important}.is-padded-large{padding:40px !important}.is-row-reverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.has-background-light{background:#fafafa}:host{display:inline-block}.bal-hint-icon{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;background:#003399;width:20px;height:20px;border-radius:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.bal-hint-icon span{color:#ffffff;font-weight:700}.bal-hint-icon:hover{background:#002b82}.bal-hint-content{position:fixed;top:0;bottom:0;left:0;right:0;z-index:100;background:#003399;color:#ffffff;padding:15px}.bal-hint-content .title{color:#ffffff}.bal-hint-content .buttons{margin-top:30px}@media screen and (min-width: 769px), print{.bal-hint-content{position:absolute;margin-left:40px;top:-20px;bottom:initial;left:initial;right:initial;-webkit-box-shadow:0 0 10px 0 rgba(0, 33, 98, 0.15);box-shadow:0 0 10px 0 rgba(0, 33, 98, 0.15);border-radius:4px}}";
var Hint = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.isActive = false;
        /**
         * Text for the close button.
         */
        this.closeLabel = "Close";
        /**
         * If `true`, the user cannot interact with the input.
         */
        this.disabled = false;
    }
    class_1.prototype.handleKeyUp = function (event) {
        if (event.key === "Escape" || event.key === "Esc") {
            event.preventDefault();
            this.close();
        }
    };
    class_1.prototype.clickOnOutside = function (event) {
        if (!this.element.contains(event.target) && this.isActive) {
            this.toggle();
        }
    };
    /**
     * Toggles the hint box.
     */
    class_1.prototype.toggle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.isActive = !this.isActive;
                return [2 /*return*/];
            });
        });
    };
    /**
     * Opens the hint box.
     */
    class_1.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.isActive = true;
                return [2 /*return*/];
            });
        });
    };
    /**
     * Closes the hint box.
     */
    class_1.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.isActive = false;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (h(Host, null, h("div", { role: "button", class: "bal-hint-icon", onClick: function () { return _this.toggle(); } }, h("span", null, "i")), this.isActive ? (h("div", { class: "bal-hint-content" }, h("slot", null), h("div", { class: "buttons is-row-reverse" }, h("bal-button", { type: "is-info", outlined: true, inverted: true, onClick: function () { return _this.close(); } }, this.closeLabel)))) : ("")));
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return class_1;
}());
Hint.style = hintCss;
export { Hint as bal_hint };
