'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9347317.js');

const CardActions = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * If `true` the buttons start form right to left.
         */
        this.right = false;
    }
    render() {
        return (index.h(index.Host, { class: ["bal-card-actions", this.right ? "is-right" : ""].join(" ") }, index.h("slot", null)));
    }
};

exports.bal_card_actions = CardActions;
