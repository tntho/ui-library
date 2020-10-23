import { r as registerInstance, h, H as Host } from './index-ec84eadc.js';

const DataItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true` the item gets a lighter font color.
         */
        this.disabled = false;
    }
    render() {
        return (h(Host, { class: ["bal-data-item", this.disabled ? "is-disabled" : ""].join(" ") }, h("slot", null)));
    }
};

export { DataItem as bal_data_item };
