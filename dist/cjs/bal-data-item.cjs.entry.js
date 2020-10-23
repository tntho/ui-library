'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9347317.js');

const DataItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * If `true` the item gets a lighter font color.
         */
        this.disabled = false;
    }
    render() {
        return (index.h(index.Host, { class: ["bal-data-item", this.disabled ? "is-disabled" : ""].join(" ") }, index.h("slot", null)));
    }
};

exports.bal_data_item = DataItem;
