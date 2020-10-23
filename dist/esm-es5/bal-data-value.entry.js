import { r as registerInstance, h, H as Host } from './index-ec84eadc.js';
var DataValue = /** @class */ (function () {
    function DataValue(hostRef) {
        registerInstance(this, hostRef);
    }
    DataValue.prototype.render = function () {
        return (h(Host, { class: "bal-data-value" }, h("slot", null)));
    };
    return DataValue;
}());
export { DataValue as bal_data_value };
