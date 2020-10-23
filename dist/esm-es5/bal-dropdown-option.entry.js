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
var dropdownOptionCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}div.bal-checkbox{position:relative;padding-right:25px;padding-bottom:15px}div.bal-checkbox input[type=checkbox]{position:absolute;left:0;top:0;margin:0;padding:0;opacity:0;outline:0}div.bal-checkbox input[type=checkbox]+label{cursor:pointer;padding-left:34px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}div.bal-checkbox label{padding-left:34px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#003399}div.bal-checkbox label::before,div.bal-checkbox label::after{display:inline-block;position:absolute;background-color:transparent;background-position:center;background-repeat:no-repeat;background-size:24px 24px}div.bal-checkbox label::before{content:\"\";left:0;top:0;height:24px;width:24px;border:1px solid #99add6}div.bal-checkbox label::after{content:none;left:9px;top:6px;width:6px;height:10px;border-bottom:2px solid #003399;border-right:2px solid #003399;border-top:0;border-left:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}div.bal-checkbox input[type=checkbox]:disabled+label{cursor:not-allowed;opacity:0.5}div.bal-checkbox input[type=checkbox]:checked+label::after{content:\"\"}div.bal-checkbox input[type=checkbox]:focus+label::before{outline:1px dashed #009ee7 !important}div.bal-checkbox.is-inverted label{color:#ffffff}div.bal-checkbox.is-inverted label::before{border:1px solid #99add6}div.bal-checkbox.is-inverted label::after{border-bottom:2px solid #ffffff;border-right:2px solid #ffffff}div.bal-checkbox.is-inverted input[type=checkbox]:hover:not([disabled])+label:before{border-color:#ffffff}.dropdown{display:-ms-inline-flexbox;display:inline-flex;position:relative;vertical-align:top}.dropdown.is-active .dropdown-menu,.dropdown.is-hoverable:hover .dropdown-menu{display:block}.dropdown.is-right .dropdown-menu{left:auto;right:0}.dropdown.is-up .dropdown-menu{bottom:100%;padding-bottom:4px;padding-top:initial;top:auto}.dropdown-menu{display:none;left:0;min-width:18.75rem;padding-top:4px;position:absolute;top:100%;z-index:20}.dropdown-content{background-color:#ffffff;border-radius:0px;-webkit-box-shadow:0 0 16px 0 rgba(0, 33, 98, 0.15);box-shadow:0 0 16px 0 rgba(0, 33, 98, 0.15);padding-bottom:14px;padding-top:14px}.dropdown-item{color:#003399;display:block;font-size:0.875rem;line-height:1.5;padding:0.375rem 1rem;position:relative}a.dropdown-item,button.dropdown-item{padding-right:3rem;text-align:inherit;white-space:nowrap;width:100%}a.dropdown-item:hover,button.dropdown-item:hover{background-color:#f0fbff;color:#003399}a.dropdown-item.is-active,button.dropdown-item.is-active{background-color:#f0fbff;color:#003399}.dropdown-divider{background-color:#99add6;border:none;display:block;height:1px;margin:0.5rem 0}:host{display:block}.highlight{font-weight:700}a.dropdown-item,button.dropdown-item{padding:10px 20px 13px 20px;-webkit-transition:padding-left 0.3s ease;transition:padding-left 0.3s ease;border:0;background:transparent;cursor:pointer;outline:none}a.dropdown-item::-moz-focus-inner,button.dropdown-item::-moz-focus-inner{border:0}a.dropdown-item.has-icon span.label,button.dropdown-item.has-icon span.label{margin-left:32px}a.dropdown-item.has-checkbox span.label,button.dropdown-item.has-checkbox span.label{margin-left:35px}a.dropdown-item.has-icon.has-checkbox span.icon,button.dropdown-item.has-icon.has-checkbox span.icon{margin-left:25px}a.dropdown-item.has-icon.has-checkbox span.label,button.dropdown-item.has-icon.has-checkbox span.label{margin-left:75px}a.dropdown-item.has-checkbox div.bal-checkbox,button.dropdown-item.has-checkbox div.bal-checkbox{position:absolute;top:8px;padding:0}a.dropdown-item .icon,button.dropdown-item .icon{-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;position:relative;max-width:32px;-ms-flex:1 1;flex:1 1}a.dropdown-item .icon bal-icon,button.dropdown-item .icon bal-icon{position:absolute;top:-4px}a.dropdown-item.is-hidden,button.dropdown-item.is-hidden{display:none}a.dropdown-item span,button.dropdown-item span{font-family:MetaPro, Arial, sans-serif}a.dropdown-item:hover,a.dropdown-item:focus,button.dropdown-item:hover,button.dropdown-item:focus{background:#f0fbff}a.dropdown-item.is-selected,button.dropdown-item.is-selected{font-weight:700;background:#f0fbff}a.dropdown-item.is-focused,button.dropdown-item.is-focused{background:#f0fbff}a.dropdown-item.is-focused:not(.is-selected):not(.has-checkbox),a.dropdown-item:focus:not(.is-selected):not(.has-checkbox),a.dropdown-item:hover:not(.is-selected):not(.has-checkbox),button.dropdown-item.is-focused:not(.is-selected):not(.has-checkbox),button.dropdown-item:focus:not(.is-selected):not(.has-checkbox),button.dropdown-item:hover:not(.is-selected):not(.has-checkbox){padding-left:30px !important}";
var DropdownOption = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.isSlotEmpty = true;
        this.hidden = false;
        /**
         * The value of the dropdown item. This value will be returned by the parent <bal-dropdown> element.
         */
        this.value = false;
        /**
         * The value of the dropdown item. This value will be returned by the parent <bal-dropdown> element.
         */
        this.label = '';
        /**
         * If a slot is used instead of label attribute use this value to hide and display the dropdown option.
         */
        this.searchTerm = '';
        /**
         * Baloise icon as a prefix
         */
        this.icon = '';
        /**
         * Use checkbox for multi-select
         */
        this.checkbox = false;
        /**
         * If `true` the option is focused
         */
        this.focused = false;
        /**
         * If `true` the option is selected
         */
        this.selected = false;
        /**
         * Tells witch part of the label should be highlighted
         */
        this.highlight = '';
    }
    class_1.prototype.highlightChanged = function () {
        this.updateLabel();
    };
    class_1.prototype.isHidden = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.hidden];
            });
        });
    };
    class_1.prototype.componentDidLoad = function () {
        this.isSlotEmpty = this.labelElement.querySelector('slot').assignedElements().length === 0;
        this.updateLabel();
    };
    Object.defineProperty(class_1.prototype, "parent", {
        get: function () {
            if (this.element.parentNode.tagName === 'DIV') {
                // IE11 doesn't allow shadowing so we have tho navigate the dom up to the parent element.
                try {
                    return this.element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                }
                catch (e) {
                    // Do nothing
                }
            }
            return this.element.parentNode;
        },
        enumerable: false,
        configurable: true
    });
    class_1.prototype.updateLabel = function () {
        var label = this.label;
        if (!this.isSlotEmpty) {
            label = this.searchTerm || '';
        }
        if (this.highlight && this.highlight.length > 0) {
            var index = label
                .toLowerCase()
                .indexOf(this.highlight.toLowerCase());
            this.hidden = index < 0;
            if (index >= 0 && this.isSlotEmpty) {
                this.setLabelHtml(label.substring(0, index) +
                    '<span class=\'highlight\'>' +
                    label.substring(index, index + this.highlight.length) +
                    '</span>' +
                    label.substring(index + this.highlight.length, label.length));
            }
        }
        else {
            this.hidden = false;
            if (this.isSlotEmpty) {
                this.setLabelHtml(label);
            }
        }
    };
    class_1.prototype.setLabelHtml = function (content) {
        if (this.labelElement && this.labelElement.innerHTML !== undefined) {
            this.labelElement.innerHTML = content;
        }
    };
    class_1.prototype.select = function () {
        return __awaiter(this, void 0, void 0, function () {
            var option;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        option = {
                            label: this.label,
                            value: this.value,
                        };
                        return [4 /*yield*/, this.parent.select(option)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (h(Host, null, h("button", { class: [
                'dropdown-item',
                this.selected ? 'is-selected' : '',
                this.focused ? 'is-focused' : '',
                this.hidden ? 'is-hidden' : '',
                this.icon ? 'has-icon' : '',
                this.checkbox ? 'has-checkbox' : '',
            ].join(' '), tabIndex: -1, onClick: this.select.bind(this) }, h("span", { class: "checkbox", style: { display: this.checkbox ? 'flex' : 'none' } }, h("div", { class: "bal-checkbox" }, h("input", { type: "checkbox", checked: this.selected, tabIndex: -1 }), h("label", null))), h("span", { class: "icon", style: { display: this.icon.length === 0 ? 'none' : 'flex' } }, h("bal-icon", { name: this.icon, size: "medium" })), h("span", { class: "label", ref: function (el) { return (_this.labelElement = el); } }, h("slot", null)))));
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "highlight": ["highlightChanged"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return class_1;
}());
DropdownOption.style = dropdownOptionCss;
export { DropdownOption as bal_dropdown_option };
