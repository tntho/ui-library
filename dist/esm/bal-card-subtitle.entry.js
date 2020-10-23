import { r as registerInstance, h, H as Host } from './index-ec84eadc.js';

const CardSubtitle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { class: [
                "bal-card-subtitle",
                this.inverted ? "inverted" : ""
            ].join(" "), role: "heading" }, h("slot", null)));
    }
};

export { CardSubtitle as bal_card_subtitle };
