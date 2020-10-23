import { r as registerInstance, h, H as Host } from './index-ec84eadc.js';

const BalCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true` a light blue border is added to the card.
         */
        this.border = false;
        /**
         * If `true` the card loses its shadow.
         */
        this.flat = false;
        /**
         * If `true` the card loses its border radius.
         */
        this.square = false;
        /**
         * If `true` the card background color becomes blue.
         */
        this.inverted = false;
    }
    render() {
        return (h(Host, { class: [
                "bal-card",
                this.square ? "is-square" : "",
                this.border ? "has-border" : "",
                this.flat ? "is-flat" : "",
                this.inverted ? "is-inverted" : ""
            ].join(" ") }, h("slot", null)));
    }
};

export { BalCard as bal_card };
