import { r as registerInstance, h, H as Host } from './index-ec84eadc.js';

const CardButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Name of the icon like `edit`.
         */
        this.icon = "";
    }
    render() {
        return (h(Host, { class: "bal-card-button" }, h("bal-button", { expanded: true, light: true, "bottem-rounded": true }, this.icon ? h("bal-icon", { class: "icon", name: this.icon }) : "", h("span", { class: "label" }, h("slot", null)))));
    }
};

export { CardButton as bal_card_button };
