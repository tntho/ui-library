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
var tabItemCss = ":host{display:block;position:static}";
var TabItem = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.tabChanged = createEvent(this, "balTabChanged", 7);
        this.isContentHidden = true;
        /**
         * This is the key of the tab.
         */
        this.value = "";
        /**
         * Label for the tab.
         */
        this.label = "";
        /**
         * If `true` a small red bubble is added to the tab.
         */
        this.bubble = false;
        /**
         * If `true` the tab is disabled.
         */
        this.disabled = false;
        /**
         * Tell's if the tab is active and the content is visible.
         */
        this.active = false;
    }
    class_1.prototype.activatedHandler = function (newActive) {
        this.isContentHidden = !newActive;
    };
    Object.defineProperty(class_1.prototype, "options", {
        get: function () {
            return {
                value: this.value,
                label: this.label,
                active: this.active,
                disabled: this.disabled,
                hasBubble: this.bubble,
            };
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Options of the tab like label, value etc.
     */
    class_1.prototype.getOptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.options];
            });
        });
    };
    /**
     * Sets the tab active.
     */
    class_1.prototype.setActive = function (active) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.active = active;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.componentWillLoad = function () {
        this.isContentHidden = !this.active;
    };
    class_1.prototype.render = function () {
        this.tabChanged.emit(this.options);
        return (h(Host, null, h("div", { style: this.isContentHidden && { display: "none" } }, h("slot", null))));
    };
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "active": ["activatedHandler"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return class_1;
}());
TabItem.style = tabItemCss;
export { TabItem as bal_tab_item };
