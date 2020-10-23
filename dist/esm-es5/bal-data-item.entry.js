import { r as registerInstance, h, H as Host } from './index-ec84eadc.js';
var DataItem = /** @class */ (function () {
    function DataItem(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true` the item gets a lighter font color.
         */
        this.disabled = false;
    }
    DataItem.prototype.render = function () {
        return (h(Host, { class: ["bal-data-item", this.disabled ? "is-disabled" : ""].join(" ") }, h("slot", null)));
    };
    return DataItem;
}());
export { DataItem as bal_data_item };
