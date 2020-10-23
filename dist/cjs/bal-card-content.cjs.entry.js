'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9347317.js');

const CardContent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { class: [
                "bal-card-content",
                this.inverted ? "inverted" : ""
            ].join(" ") }, index.h("slot", null)));
    }
};

exports.bal_card_content = CardContent;
