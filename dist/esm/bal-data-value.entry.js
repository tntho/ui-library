import { r as registerInstance, h, H as Host } from './index-ec84eadc.js';

const DataValue = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { class: "bal-data-value" }, h("slot", null)));
    }
};

export { DataValue as bal_data_value };
