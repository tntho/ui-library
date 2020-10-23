import { r as registerInstance, h, H as Host } from './index-ec84eadc.js';
var Data = /** @class */ (function () {
    function Data(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true` a bottom border is added to the data-item.
         */
        this.border = false;
        /**
         * If `true` the data list is horizontal instead of vertical.
         */
        this.horizontal = false;
    }
    Data.prototype.render = function () {
        return (h(Host, { class: [
                "bal-data",
                this.border ? "has-border" : "",
                this.horizontal ? "is-horizontal" : "",
            ].join(" ") }, h("slot", null)));
    };
    return Data;
}());
export { Data as bal_data };
