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
var paginationCss = ".pagination-previous,.pagination-next,.pagination-link,.pagination-ellipsis{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.pagination:not(:last-child){margin-bottom:1.5rem}.pagination-previous,.pagination-next,.pagination-link,.pagination-ellipsis{-moz-appearance:none;-webkit-appearance:none;-ms-flex-align:center;align-items:center;border:1px solid transparent;border-radius:4px;-webkit-box-shadow:none;box-shadow:none;display:-ms-inline-flexbox;display:inline-flex;font-size:0.9375rem;height:2.5em;-ms-flex-pack:start;justify-content:flex-start;line-height:1.5;padding-bottom:calc(0.5em - 1px);padding-left:calc(0.75em - 1px);padding-right:calc(0.75em - 1px);padding-top:calc(0.5em - 1px);position:relative;vertical-align:top}.pagination-previous:focus,.pagination-next:focus,.pagination-link:focus,.pagination-ellipsis:focus,.is-focused.pagination-previous,.is-focused.pagination-next,.is-focused.pagination-link,.is-focused.pagination-ellipsis,.pagination-previous:active,.pagination-next:active,.pagination-link:active,.pagination-ellipsis:active,.is-active.pagination-previous,.is-active.pagination-next,.is-active.pagination-link,.is-active.pagination-ellipsis{outline:none}[disabled].pagination-previous,[disabled].pagination-next,[disabled].pagination-link,[disabled].pagination-ellipsis,fieldset[disabled] .pagination-previous,fieldset[disabled] .pagination-next,fieldset[disabled] .pagination-link,fieldset[disabled] .pagination-ellipsis{cursor:not-allowed}*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}.pagination{font-size:0.9375rem;margin:-0.25rem}.pagination.is-small{font-size:0.8125rem}.pagination.is-medium{font-size:1.125rem}.pagination.is-large{font-size:1.375rem}.pagination.is-rounded .pagination-previous,.pagination.is-rounded .pagination-next{padding-left:1em;padding-right:1em;border-radius:100%}.pagination.is-rounded .pagination-link{border-radius:100%}.pagination,.pagination-list{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;text-align:center}.pagination-previous,.pagination-next,.pagination-link,.pagination-ellipsis{font-size:1em;-ms-flex-pack:center;justify-content:center;margin:0.25rem;padding-left:0.5em;padding-right:0.5em;text-align:center}.pagination-previous,.pagination-next,.pagination-link{border-color:#d3dbeb;color:#003399;min-width:2.5em}.pagination-previous:hover,.pagination-next:hover,.pagination-link:hover{border-color:#003399;color:#003399}.pagination-previous:focus,.pagination-next:focus,.pagination-link:focus{border-color:#003399}.pagination-previous:active,.pagination-next:active,.pagination-link:active{-webkit-box-shadow:inset 0 1px 2px rgba(34, 34, 34, 0.2);box-shadow:inset 0 1px 2px rgba(34, 34, 34, 0.2)}.pagination-previous[disabled],.pagination-next[disabled],.pagination-link[disabled]{background-color:#d3dbeb;border-color:#d3dbeb;-webkit-box-shadow:none;box-shadow:none;color:#d8d9d9;opacity:0.5}.pagination-previous,.pagination-next{padding-left:0.75em;padding-right:0.75em;white-space:nowrap}.pagination-link.is-current{background-color:#003399;border-color:#003399;color:#fff}.pagination-ellipsis{color:#e2e3e3;pointer-events:none}.pagination-list{-ms-flex-wrap:wrap;flex-wrap:wrap}@media screen and (max-width: 768px){.pagination{-ms-flex-wrap:wrap;flex-wrap:wrap}.pagination-previous,.pagination-next{-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.pagination-list li{-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}}@media screen and (min-width: 769px), print{.pagination-list{-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-order:1;order:1}.pagination-previous{-ms-flex-order:2;order:2}.pagination-next{-ms-flex-order:3;order:3}.pagination{-ms-flex-pack:justify;justify-content:space-between}.pagination.is-centered .pagination-previous{-ms-flex-order:1;order:1}.pagination.is-centered .pagination-list{-ms-flex-pack:center;justify-content:center;-ms-flex-order:2;order:2}.pagination.is-centered .pagination-next{-ms-flex-order:3;order:3}.pagination.is-right .pagination-previous{-ms-flex-order:1;order:1}.pagination.is-right .pagination-next{-ms-flex-order:2;order:2}.pagination.is-right .pagination-list{-ms-flex-pack:end;justify-content:flex-end;-ms-flex-order:3;order:3}}:host{display:block}nav.pagination>button{-webkit-box-shadow:none !important;box-shadow:none !important;-ms-flex-align:center;align-items:center;background:#ffffff}nav.pagination>button:disabled{background:#f0fbff;border-color:#d3dbeb;color:#7188b8}nav.pagination bal-icon{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}nav.pagination ul{padding:0;margin:0;list-style:none}nav.pagination button,nav.pagination a{cursor:pointer}";
var Pagination = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.balChangeEventEmitter = createEvent(this, "balChange", 7);
        this._value = 1;
        /**
         * Disables component
         */
        this.disabled = false;
        /**
         * Current selected page
         */
        this.value = 1;
        /**
         * The total amount of pages
         */
        this.totalPages = 1;
        /**
         * Specify the max visible pages before and after the selected page
         */
        this.pageRange = 2;
    }
    class_1.prototype.valueChanged = function (newValue) {
        this._value = newValue;
    };
    class_1.prototype.componentWillLoad = function () {
        this._value = this.value;
    };
    class_1.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this._value < this.totalPages) {
                    this._value = this._value + 1;
                    this.balChangeEventEmitter.emit(this._value);
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.previous = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this._value !== 1) {
                    this._value = this._value - 1;
                    this.balChangeEventEmitter.emit(this._value);
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.selectPage = function (pageNumber) {
        this._value = pageNumber;
        this.balChangeEventEmitter.emit(this._value);
    };
    class_1.prototype.renderEllipsisElement = function () {
        return h("li", null, h("span", { class: "pagination-ellipsis" }, "\u2026"));
    };
    class_1.prototype.renderPageElement = function (pageNumber) {
        var _this = this;
        return h("li", null, h("a", { class: [
                "pagination-link",
                this._value === pageNumber ? "is-current" : "",
            ].join(" "), onClick: function () { return _this.selectPage(pageNumber); } }, pageNumber));
    };
    class_1.prototype.render = function () {
        var _this = this;
        var items = [];
        var rangeStart = this._value - this.pageRange;
        var rangeEnd = this._value + this.pageRange;
        if (rangeEnd > this.totalPages) {
            rangeEnd = this.totalPages;
            rangeStart = this.totalPages - this.pageRange * 2;
            rangeStart = rangeStart < 1 ? 1 : rangeStart;
        }
        if (rangeStart <= 1) {
            rangeStart = 1;
            rangeEnd = Math.min(this.pageRange * 2 + 1, this.totalPages);
        }
        if (rangeStart > 1) {
            items.push(this.renderPageElement(1));
            items.push(this.renderEllipsisElement());
        }
        for (var i = rangeStart; i <= rangeEnd; i++) {
            items.push(this.renderPageElement(i));
        }
        if (rangeEnd < this.totalPages) {
            items.push(this.renderEllipsisElement());
            items.push(this.renderPageElement(this.totalPages));
        }
        return (h(Host, null, h("nav", { class: "pagination is-centered", role: "navigation", "aria-label": "pagination" }, h("button", { class: "pagination-previous", disabled: this._value < 2, onClick: function () { return _this.previous(); } }, h("bal-icon", { name: "nav-go-left-no-padding", size: "small" })), h("button", { class: "pagination-next", disabled: this._value === this.totalPages, onClick: function () { return _this.next(); } }, h("bal-icon", { name: "nav-go-right-no-padding", size: "small" })), h("ul", { class: "pagination-list" }, items))));
    };
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "value": ["valueChanged"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return class_1;
}());
Pagination.style = paginationCss;
export { Pagination as bal_pagination };
