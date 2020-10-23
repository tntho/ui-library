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
var accordionCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}:host{display:block}span.trigger-label{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}span.trigger-label span.label{margin-bottom:2px}bal-icon{height:24px;margin-right:2px}.accordion-content.is-info{border-top:1px solid #d3dbeb}.is-fullwidth{width:100%}";
var Accordion = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.isCollapsed = true;
        /**
         * Type defines the theme of the accordion toggle
         */
        this.type = "is-primary";
        /**
         * Controls if the accordion is collapsed or not
         */
        this.collapsed = true;
        /**
         * Label of the open trigger button
         */
        this.openLabel = "";
        /**
         * Bal-Icon of the open trigger button
         */
        this.openIcon = "plus";
        /**
         * Label of the close trigger button
         */
        this.closeLabel = "";
        /**
         * Bal-Icon of the close trigger button
         */
        this.closeIcon = "minus";
    }
    class_1.prototype.validateCollapsed = function (newValue) {
        this.isCollapsed = newValue;
    };
    /**
     * Open the accordion
     */
    class_1.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.isCollapsed = false;
                return [2 /*return*/];
            });
        });
    };
    /**
     * Close the accordion
     */
    class_1.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.isCollapsed = true;
                return [2 /*return*/];
            });
        });
    };
    /**
     * Triggers the accordion
     */
    class_1.prototype.toggle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.isCollapsed = !this.isCollapsed;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.componentWillLoad = function () {
        this.isCollapsed = this.collapsed;
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (h(Host, { class: "accordion" }, h("bal-button", { expanded: true, light: true, inverted: true, type: this.type, onClick: function () { return _this.toggle(); } }, h("span", { class: "trigger-label", style: !this.isCollapsed && { display: "none" } }, h("bal-icon", { name: this.openIcon }), h("span", { class: "label" }, this.openLabel)), h("span", { class: "trigger-label", style: this.isCollapsed && { display: "none" } }, h("bal-icon", { name: this.closeIcon }), h("span", { class: "label" }, this.closeLabel))), h("div", { class: [
                "accordion-content",
                this.type,
            ].join(" "), style: this.isCollapsed && { display: "none" } }, h("slot", null))));
    };
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "collapsed": ["validateCollapsed"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return class_1;
}());
Accordion.style = accordionCss;
export { Accordion as bal_accordion };
