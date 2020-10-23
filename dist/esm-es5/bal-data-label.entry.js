import { r as registerInstance, h, H as Host } from './index-ec84eadc.js';
var DataLabel = /** @class */ (function () {
    function DataLabel(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true` an asterix is added after the label.
         */
        this.required = false;
    }
    DataLabel.prototype.render = function () {
        return (h(Host, { class: "bal-data-label" }, h("slot", null), this.required ? "*" : ""));
    };
    return DataLabel;
}());
export { DataLabel as bal_data_label };
