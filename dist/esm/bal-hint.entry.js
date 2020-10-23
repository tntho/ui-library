import { r as registerInstance, h, H as Host, g as getElement } from './index-ec84eadc.js';

const hintCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}bal-button.is-fullwidth{width:100%}.buttons{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:start;justify-content:flex-start}.buttons bal-button{margin-right:5px}.buttons bal-button:last-child{margin-right:0}span.trigger-label{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}span.trigger-label span.label{margin-bottom:2px}.is-padded-small{padding:10px !important}.is-padded{padding:20px !important}.is-padded-medium{padding:30px !important}.is-padded-large{padding:40px !important}.is-row-reverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.has-background-light{background:#fafafa}:host{display:inline-block}.bal-hint-icon{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;background:#003399;width:20px;height:20px;border-radius:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.bal-hint-icon span{color:#ffffff;font-weight:700}.bal-hint-icon:hover{background:#002b82}.bal-hint-content{position:fixed;top:0;bottom:0;left:0;right:0;z-index:100;background:#003399;color:#ffffff;padding:15px}.bal-hint-content .title{color:#ffffff}.bal-hint-content .buttons{margin-top:30px}@media screen and (min-width: 769px), print{.bal-hint-content{position:absolute;margin-left:40px;top:-20px;bottom:initial;left:initial;right:initial;-webkit-box-shadow:0 0 10px 0 rgba(0, 33, 98, 0.15);box-shadow:0 0 10px 0 rgba(0, 33, 98, 0.15);border-radius:4px}}";

const Hint = class {
    constructor(hostRef) {
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
    handleKeyUp(event) {
        if (event.key === "Escape" || event.key === "Esc") {
            event.preventDefault();
            this.close();
        }
    }
    clickOnOutside(event) {
        if (!this.element.contains(event.target) && this.isActive) {
            this.toggle();
        }
    }
    /**
     * Toggles the hint box.
     */
    async toggle() {
        this.isActive = !this.isActive;
    }
    /**
     * Opens the hint box.
     */
    async open() {
        this.isActive = true;
    }
    /**
     * Closes the hint box.
     */
    async close() {
        this.isActive = false;
    }
    render() {
        return (h(Host, null, h("div", { role: "button", class: "bal-hint-icon", onClick: () => this.toggle() }, h("span", null, "i")), this.isActive ? (h("div", { class: "bal-hint-content" }, h("slot", null), h("div", { class: "buttons is-row-reverse" }, h("bal-button", { type: "is-info", outlined: true, inverted: true, onClick: () => this.close() }, this.closeLabel)))) : ("")));
    }
    get element() { return getElement(this); }
};
Hint.style = hintCss;

export { Hint as bal_hint };
