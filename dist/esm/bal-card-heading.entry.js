import { r as registerInstance, h, H as Host } from './index-ec84eadc.js';

const CardHeading = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { class: "bal-card-heading" }, h("slot", null)));
    }
};

export { CardHeading as bal_card_heading };
