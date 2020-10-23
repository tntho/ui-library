import { r as registerInstance, h, H as Host } from './index-ec84eadc.js';

const CardActions = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true` the buttons start form right to left.
         */
        this.right = false;
    }
    render() {
        return (h(Host, { class: ["bal-card-actions", this.right ? "is-right" : ""].join(" ") }, h("slot", null)));
    }
};

export { CardActions as bal_card_actions };
