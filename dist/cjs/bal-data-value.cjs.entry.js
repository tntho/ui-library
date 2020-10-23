'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9347317.js');

const DataValue = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { class: "bal-data-value" }, index.h("slot", null)));
    }
};

exports.bal_data_value = DataValue;
