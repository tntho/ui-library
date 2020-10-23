import { r as registerInstance, h, H as Host } from './index-ec84eadc.js';

const CardTitle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true` the card text color becomes white.
         */
        this.inverted = false;
    }
    render() {
        return (h(Host, { class: [
                "bal-card-title",
                this.inverted ? "inverted" : ""
            ].join(' '), role: "heading" }, h("slot", null)));
    }
};

export { CardTitle as bal_card_title };
