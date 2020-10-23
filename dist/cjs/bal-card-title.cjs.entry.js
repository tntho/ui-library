'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9347317.js');

const CardTitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * If `true` the card text color becomes white.
         */
        this.inverted = false;
    }
    render() {
        return (index.h(index.Host, { class: [
                "bal-card-title",
                this.inverted ? "inverted" : ""
            ].join(' '), role: "heading" }, index.h("slot", null)));
    }
};

exports.bal_card_title = CardTitle;
