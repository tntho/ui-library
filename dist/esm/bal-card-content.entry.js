import { r as registerInstance, h, H as Host } from './index-ec84eadc.js';

const CardContent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { class: [
                "bal-card-content",
                this.inverted ? "inverted" : ""
            ].join(" ") }, h("slot", null)));
    }
};

export { CardContent as bal_card_content };
