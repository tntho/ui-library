'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9347317.js');

const BalCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * If `true` a light blue border is added to the card.
         */
        this.border = false;
        /**
         * If `true` the card loses its shadow.
         */
        this.flat = false;
        /**
         * If `true` the card loses its border radius.
         */
        this.square = false;
        /**
         * If `true` the card background color becomes blue.
         */
        this.inverted = false;
    }
    render() {
        return (index.h(index.Host, { class: [
                "bal-card",
                this.square ? "is-square" : "",
                this.border ? "has-border" : "",
                this.flat ? "is-flat" : "",
                this.inverted ? "is-inverted" : ""
            ].join(" ") }, index.h("slot", null)));
    }
};

exports.bal_card = BalCard;
