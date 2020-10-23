'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9347317.js');

const CardSubtitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { class: [
                "bal-card-subtitle",
                this.inverted ? "inverted" : ""
            ].join(" "), role: "heading" }, index.h("slot", null)));
    }
};

exports.bal_card_subtitle = CardSubtitle;
