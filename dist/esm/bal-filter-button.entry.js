import { r as registerInstance, c as createEvent, h, H as Host } from './index-ec84eadc.js';

const filterButtonCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}div.bal-checkbox{position:relative;padding-right:25px;padding-bottom:15px}div.bal-checkbox input[type=checkbox]{position:absolute;left:0;top:0;margin:0;padding:0;opacity:0;outline:0}div.bal-checkbox input[type=checkbox]+label{cursor:pointer;padding-left:34px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}div.bal-checkbox label{padding-left:34px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#003399}div.bal-checkbox label::before,div.bal-checkbox label::after{display:inline-block;position:absolute;background-color:transparent;background-position:center;background-repeat:no-repeat;background-size:24px 24px}div.bal-checkbox label::before{content:\"\";left:0;top:0;height:24px;width:24px;border:1px solid #99add6}div.bal-checkbox label::after{content:none;left:9px;top:6px;width:6px;height:10px;border-bottom:2px solid #003399;border-right:2px solid #003399;border-top:0;border-left:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}div.bal-checkbox input[type=checkbox]:disabled+label{cursor:not-allowed;opacity:0.5}div.bal-checkbox input[type=checkbox]:checked+label::after{content:\"\"}div.bal-checkbox input[type=checkbox]:focus+label::before{outline:1px dashed #009ee7 !important}div.bal-checkbox.is-inverted label{color:#ffffff}div.bal-checkbox.is-inverted label::before{border:1px solid #99add6}div.bal-checkbox.is-inverted label::after{border-bottom:2px solid #ffffff;border-right:2px solid #ffffff}div.bal-checkbox.is-inverted input[type=checkbox]:hover:not([disabled])+label:before{border-color:#ffffff}:host{display:-ms-inline-flexbox;display:inline-flex}.filter-button-inner{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center}div.bal-checkbox{padding:0}div.bal-checkbox label{padding-left:30px !important;line-height:1.25rem !important;font-weight:600 !important}div.bal-checkbox label::before{top:1px;width:18px;height:18px}div.bal-checkbox label::after{left:7px;top:5px;width:4px;height:8px}";

const FilterButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.balChangeEventEmitter = createEvent(this, "balChange", 7);
        this.isActive = false;
        /**
         * If `true` then the button is active/selected
         */
        this.active = false;
    }
    validateCollapsed(newValue) {
        this.isActive = newValue;
    }
    componentWillLoad() {
        this.isActive = this.active;
    }
    async toggle() {
        this.isActive = !this.isActive;
        this.balChangeEventEmitter.emit(this.isActive);
    }
    render() {
        return (h(Host, null, h("bal-button", { type: "is-info", dense: true, outlined: true, "is-active": this.isActive, onClick: () => this.toggle() }, h("div", { class: "filter-button-inner" }, h("div", { class: "bal-checkbox" }, h("input", { type: "checkbox", checked: this.isActive }), h("label", null, h("slot", null)))))));
    }
    static get watchers() { return {
        "active": ["validateCollapsed"]
    }; }
};
FilterButton.style = filterButtonCss;

export { FilterButton as bal_filter_button };
