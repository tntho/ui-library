'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9347317.js');

const Data = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * If `true` a bottom border is added to the data-item.
         */
        this.border = false;
        /**
         * If `true` the data list is horizontal instead of vertical.
         */
        this.horizontal = false;
    }
    render() {
        return (index.h(index.Host, { class: [
                "bal-data",
                this.border ? "has-border" : "",
                this.horizontal ? "is-horizontal" : "",
            ].join(" ") }, index.h("slot", null)));
    }
};

exports.bal_data = Data;
