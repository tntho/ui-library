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
var cardStepsCss = ".tabs{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tabs:not(:last-child){margin-bottom:1.5rem}*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}.tabs{-webkit-overflow-scrolling:touch;-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;font-size:0.9375rem;-ms-flex-pack:justify;justify-content:space-between;overflow:hidden;overflow-x:auto;white-space:nowrap}.tabs a{-ms-flex-align:center;align-items:center;border-bottom-color:#d3dbeb;border-bottom-style:solid;border-bottom-width:0;color:#222222;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin-bottom:-0;padding:0.5em 1em;vertical-align:top}.tabs a:hover{border-bottom-color:transparent;color:#ffffff}.tabs li{display:block}.tabs li.is-active a{border-bottom-color:transparent;color:#ffffff}.tabs ul{-ms-flex-align:center;align-items:center;border-bottom-color:#d3dbeb;border-bottom-style:solid;border-bottom-width:0;display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;-ms-flex-pack:start;justify-content:flex-start}.tabs ul.is-left{padding-right:0.75em}.tabs ul.is-center{-ms-flex:none;flex:none;-ms-flex-pack:center;justify-content:center;padding-left:0.75em;padding-right:0.75em}.tabs ul.is-right{-ms-flex-pack:end;justify-content:flex-end;padding-left:0.75em}.tabs .icon:first-child{margin-right:0.5em}.tabs .icon:last-child{margin-left:0.5em}.tabs.is-centered ul{-ms-flex-pack:center;justify-content:center}.tabs.is-right ul{-ms-flex-pack:end;justify-content:flex-end}.tabs.is-boxed a{border:1px solid transparent;border-radius:4px 4px 0 0}.tabs.is-boxed a:hover{background-color:#f5f5f6;border-bottom-color:#d3dbeb}.tabs.is-boxed li.is-active a{background-color:#ffffff;border-color:#d3dbeb;border-bottom-color:transparent !important}.tabs.is-fullwidth li{-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0}.tabs.is-toggle a{border-color:#d3dbeb;border-style:solid;border-width:1px;margin-bottom:0;position:relative}.tabs.is-toggle a:hover{background-color:#f5f5f6;border-color:#e2e3e3;z-index:2}.tabs.is-toggle li+li{margin-left:-1px}.tabs.is-toggle li:first-child a{border-top-left-radius:4px;border-bottom-left-radius:4px}.tabs.is-toggle li:last-child a{border-top-right-radius:4px;border-bottom-right-radius:4px}.tabs.is-toggle li.is-active a{background-color:#009ee7;border-color:#009ee7;color:#003399;z-index:1}.tabs.is-toggle ul{border-bottom:none}.tabs.is-toggle.is-toggle-rounded li:first-child a{border-bottom-left-radius:100%;border-top-left-radius:100%;padding-left:1.25em}.tabs.is-toggle.is-toggle-rounded li:last-child a{border-bottom-right-radius:100%;border-top-right-radius:100%;padding-right:1.25em}.tabs.is-small{font-size:0.8125rem}.tabs.is-medium{font-size:1.125rem}.tabs.is-large{font-size:1.375rem}:host{display:block;position:static;padding-top:20px}.tabs{margin:0 !important;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;width:100%;max-height:30px;min-height:30px}.tabs>ul{margin:0;padding:0;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.tabs>ul>li{position:relative;height:30px}.tabs>ul>li>a{line-height:1.2;cursor:pointer;display:-ms-flexbox;display:flex;height:100%;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:0;width:30px}.tabs>ul>li>a span.step-index{background:#003399;border:1px solid #003399;border-radius:50%;display:-ms-flexbox;display:flex;height:8px;width:8px;opacity:50%}.tabs>ul>li>a span.step-label,.tabs>ul>li>a span.step-index span{display:none}.tabs>ul>li.is-done>a span.step-index{background:#003399;opacity:100%}.tabs>ul>li.is-active>a span.step-index{background:transparent;opacity:100%}.tabs>ul>li.is-disabled>a,.tabs>ul>li.is-disabled>a:hover{cursor:not-allowed}.tabs.is-inverted>ul>li>a span.step-index{background:#ffffff;border:1px solid #ffffff}.tabs.is-inverted>ul>li.is-done>a span.step-index{background:#ffffff;opacity:100%}.tabs.is-inverted>ul>li.is-active>a span.step-index{background:transparent;opacity:100%}.tabs.is-inverted>ul>li.is-done>a span.step-index{background:#ffffff}.tabs.is-hidden{opacity:0}@media screen and (min-width: 1024px){.tabs>ul>li>a{width:50px;color:#7188b8;font-size:1.375rem}.tabs>ul>li>a span.step-index{height:26px;width:26px;line-height:26px;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;background:transparent;border:1px solid #003399;color:#003399}.tabs>ul>li>a span.step-index span{display:-ms-flexbox;display:flex;font-size:0.9375rem}.tabs>ul>li.is-done>a span.step-index span{display:none}.tabs>ul>li.is-done>a span.step-index::after{display:inline-block;position:absolute;background-color:transparent;background-position:center;background-repeat:no-repeat;background-size:24px 24px;content:\"\";top:8px;width:4px;height:10px;border-bottom:2px solid #ffffff;border-right:2px solid #ffffff;border-top:0;border-left:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.tabs>ul>li.is-active>a span.step-index{background:transparent;opacity:100%}.tabs>ul>li.is-active>a span.step-index span{display:-ms-flexbox;display:flex;color:#003399}.tabs>ul>li.is-active>a span.step-index::after{content:none}.tabs>ul>li.is-disabled>a,.tabs>ul>li.is-disabled>a:hover{cursor:not-allowed}.tabs>ul>li.is-disabled>a span.step-index,.tabs>ul>li.is-disabled>a:hover span.step-index{background:transparent;color:#003399}.tabs.is-inverted>ul>li>a{color:#7188b8}.tabs.is-inverted>ul>li>a span.step-index{background:transparent;border:1px solid #ffffff;color:#ffffff}.tabs.is-inverted>ul>li.is-done>a span.step-index{background:#ffffff}.tabs.is-inverted>ul>li.is-done>a span.step-index::after{border-bottom:2px solid #003399;border-right:2px solid #003399}.tabs.is-inverted>ul>li.is-active>a span.step-index{background:transparent}.tabs.is-inverted>ul>li.is-active>a span.step-index span{color:#ffffff}.tabs.is-inverted>ul>li.is-disabled>a span.step-index,.tabs.is-inverted>ul>li.is-disabled>a:hover span.step-index{background:transparent;color:#ffffff}}";
var CardSteps = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.stepsDidChange = createEvent(this, "balCardStepsDidChange", 7);
        this.stepOptions = [];
        /**
         * If `true` a the style is ready for a dark background.
         */
        this.inverted = false;
        /**
         * If `true` the steps navigation is hidden.
         */
        this.hidden = false;
        /**
         * If `true` the steps navigation is on.
         */
        this.navigation = false;
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
            return Array.from(this.element.querySelectorAll('bal-card-step'));
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
                        if (!(!step.disabled && this.navigation)) return [3 /*break*/, 2];
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
        return (h(Host, null, h("div", { class: ['tabs', this.inverted ? 'is-inverted' : '', this.hidden ? 'is-hidden' : ''].join(' ') }, h("ul", null, this.stepOptions.filter(function (step) { return !step.hidden && !_this.hidden; }).map(function (step, index) { return (h("li", { class: [
                step.active ? 'is-active' : '',
                step.disabled ? 'is-disabled' : '',
                step.done ? 'is-done' : '',
            ].join(' ') }, h("a", { onClick: function () { return _this.onSelectStep(step); }, title: step.label }, h("span", { class: "step-index" }, h("span", null, index + 1))))); }))), h("slot", null)));
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return class_1;
}());
CardSteps.style = cardStepsCss;
export { CardSteps as bal_card_steps };
