'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9347317.js');

const DataLabel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * If `true` an asterix is added after the label.
         */
        this.required = false;
    }
    render() {
        return (index.h(index.Host, { class: "bal-data-label" }, index.h("slot", null), this.required ? "*" : ""));
    }
};

exports.bal_data_label = DataLabel;
