import { r as registerInstance, h, H as Host } from './index-ec84eadc.js';

const DataLabel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true` an asterix is added after the label.
         */
        this.required = false;
    }
    render() {
        return (h(Host, { class: "bal-data-label" }, h("slot", null), this.required ? "*" : ""));
    }
};

export { DataLabel as bal_data_label };
