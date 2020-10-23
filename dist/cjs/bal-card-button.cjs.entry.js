'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9347317.js');

const CardButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Name of the icon like `edit`.
         */
        this.icon = "";
    }
    render() {
        return (index.h(index.Host, { class: "bal-card-button" }, index.h("bal-button", { expanded: true, light: true, "bottem-rounded": true }, this.icon ? index.h("bal-icon", { class: "icon", name: this.icon }) : "", index.h("span", { class: "label" }, index.h("slot", null)))));
    }
};

exports.bal_card_button = CardButton;
