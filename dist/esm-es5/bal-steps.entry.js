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
import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-ec84eadc.js';
var stepsCss = ".tabs{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tabs:not(:last-child){margin-bottom:1.5rem}*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}.tabs{-webkit-overflow-scrolling:touch;-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;font-size:0.9375rem;-ms-flex-pack:justify;justify-content:space-between;overflow:hidden;overflow-x:auto;white-space:nowrap}.tabs a{-ms-flex-align:center;align-items:center;border-bottom-color:#d3dbeb;border-bottom-style:solid;border-bottom-width:0;color:#222222;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin-bottom:-0;padding:0.5em 1em;vertical-align:top}.tabs a:hover{border-bottom-color:transparent;color:#ffffff}.tabs li{display:block}.tabs li.is-active a{border-bottom-color:transparent;color:#ffffff}.tabs ul{-ms-flex-align:center;align-items:center;border-bottom-color:#d3dbeb;border-bottom-style:solid;border-bottom-width:0;display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;-ms-flex-pack:start;justify-content:flex-start}.tabs ul.is-left{padding-right:0.75em}.tabs ul.is-center{-ms-flex:none;flex:none;-ms-flex-pack:center;justify-content:center;padding-left:0.75em;padding-right:0.75em}.tabs ul.is-right{-ms-flex-pack:end;justify-content:flex-end;padding-left:0.75em}.tabs .icon:first-child{margin-right:0.5em}.tabs .icon:last-child{margin-left:0.5em}.tabs.is-centered ul{-ms-flex-pack:center;justify-content:center}.tabs.is-right ul{-ms-flex-pack:end;justify-content:flex-end}.tabs.is-boxed a{border:1px solid transparent;border-radius:4px 4px 0 0}.tabs.is-boxed a:hover{background-color:#f5f5f6;border-bottom-color:#d3dbeb}.tabs.is-boxed li.is-active a{background-color:#ffffff;border-color:#d3dbeb;border-bottom-color:transparent !important}.tabs.is-fullwidth li{-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0}.tabs.is-toggle a{border-color:#d3dbeb;border-style:solid;border-width:1px;margin-bottom:0;position:relative}.tabs.is-toggle a:hover{background-color:#f5f5f6;border-color:#e2e3e3;z-index:2}.tabs.is-toggle li+li{margin-left:-1px}.tabs.is-toggle li:first-child a{border-top-left-radius:4px;border-bottom-left-radius:4px}.tabs.is-toggle li:last-child a{border-top-right-radius:4px;border-bottom-right-radius:4px}.tabs.is-toggle li.is-active a{background-color:#009ee7;border-color:#009ee7;color:#003399;z-index:1}.tabs.is-toggle ul{border-bottom:none}.tabs.is-toggle.is-toggle-rounded li:first-child a{border-bottom-left-radius:100%;border-top-left-radius:100%;padding-left:1.25em}.tabs.is-toggle.is-toggle-rounded li:last-child a{border-bottom-right-radius:100%;border-top-right-radius:100%;padding-right:1.25em}.tabs.is-small{font-size:0.8125rem}.tabs.is-medium{font-size:1.125rem}.tabs.is-large{font-size:1.375rem}:host{display:block;position:static}.tabs{margin:0 !important;border-bottom:1px solid #d3dbeb}.tabs>ul{margin:0;padding:0}.tabs>ul>li{position:relative;border-top:1px solid #d3dbeb;border-left:1px solid #d3dbeb;max-width:300px;height:100px}.tabs>ul>li:last-child{border-right:1px solid #d3dbeb}.tabs>ul>li>a{line-height:1.2;cursor:pointer;color:#7188b8;font-size:1.375rem;display:-ms-flexbox;display:flex;-ms-flex:1 1;flex:1 1;height:100%;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:0;padding-bottom:2px}.tabs>ul>li>a span.step-index{border-radius:50%;border:1px solid #d3dbeb;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-weight:700;font-family:MetaPro, Arial, sans-serif;color:#003399;height:30px;min-width:30px;line-height:30px;-ms-flex-pack:center;justify-content:center;font-size:0.9375rem}.tabs>ul>li>a span.step-index span{margin-top:-2px;font-weight:700;font-family:MetaPro, Arial, sans-serif;color:#003399}.tabs>ul>li>a span.step-label{display:none;font-size:1.125rem}.tabs>ul>li.is-active>a{color:#003399;border-bottom:2px solid #003399;padding-bottom:0}.tabs>ul>li>a:hover span.step-label{color:#003399}.tabs>ul>li.is-disabled>a,.tabs>ul>li.is-disabled>a:hover{cursor:not-allowed;opacity:50%}.tabs>ul>li.is-disabled>a span.step-index,.tabs>ul>li.is-disabled>a:hover span.step-index{border-color:#d3dbeb}.tabs>ul>li.is-disabled>a span.step-label,.tabs>ul>li.is-disabled>a span.step-index,.tabs>ul>li.is-disabled>a:hover span.step-label,.tabs>ul>li.is-disabled>a:hover span.step-index{color:#7188b8}@media screen and (min-width: 769px), print{.tabs>ul>li>a{-ms-flex-wrap:wrap;flex-wrap:wrap}.tabs>ul>li>a span.step-index{-ms-flex-item-align:end;align-self:end}.tabs>ul>li>a span.step-label{text-align:center;-ms-flex-preferred-size:100%;flex-basis:100%;display:inline-block}}@media screen and (min-width: 1024px){.tabs>ul{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.tabs>ul>li>a{-ms-flex-wrap:nowrap;flex-wrap:nowrap;padding-left:20px;padding-right:20px}.tabs>ul>li>a span.step-index{-ms-flex-item-align:center;align-self:center}.tabs>ul>li>a span.step-label{margin-left:20px;text-align:left}}";
var Steps = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.stepsDidChange = createEvent(this, "balStepsDidChange", 7);
        this.stepOptions = [];
    }
    /**
     * Select a step.
     */
    class_1.prototype.select = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.steps.forEach(function (t) { return t.setActive(t.value === value); });
                this.readSteps();
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.componentWillLoad = function () {
        this.readSteps();
    };
    class_1.prototype.stepChanged = function () {
        this.readSteps();
    };
    Object.defineProperty(class_1.prototype, "steps", {
        get: function () {
            return Array.from(this.element.querySelectorAll("bal-step"));
        },
        enumerable: false,
        configurable: true
    });
    class_1.prototype.readSteps = function () {
        var _this = this;
        Promise.all(this.steps.map(function (value) { return value.getOptions(); })).then(function (stepOptions) {
            _this.stepOptions = stepOptions;
        });
    };
    class_1.prototype.onSelectStep = function (step) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!step.disabled) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.select(step.value)];
                    case 1:
                        _a.sent();
                        this.stepsDidChange.emit(step);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (h(Host, null, h("div", { class: ["tabs is-fullwidth"].join(" ") }, h("ul", null, this.stepOptions.map(function (step, index) { return (h("li", { class: [
                step.active ? "is-active" : "",
                step.disabled ? "is-disabled" : "",
            ].join(" ") }, h("a", { onClick: function () { return _this.onSelectStep(step); } }, h("span", { class: "step-index" }, h("span", null, index + 1)), h("span", { class: "step-label" }, step.label)), h("span", { class: "bubble", style: !step.hasBubble && { display: "none" } }))); }))), h("slot", null)));
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return class_1;
}());
Steps.style = stepsCss;
export { Steps as bal_steps };
