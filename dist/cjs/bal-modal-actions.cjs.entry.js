'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9347317.js');

const modalActionsCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}bal-button.is-fullwidth{width:100%}.buttons{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:start;justify-content:flex-start}.buttons bal-button{margin-right:5px}.buttons bal-button:last-child{margin-right:0}span.trigger-label{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}span.trigger-label span.label{margin-bottom:2px}.is-padded-small{padding:10px !important}.is-padded{padding:20px !important}.is-padded-medium{padding:30px !important}.is-padded-large{padding:40px !important}.is-row-reverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.has-background-light{background:#fafafa}:host{display:block}::slotted(bal-button){margin-right:5px}::slotted(bal-button:first-child){margin-right:0}";

const ModalActions = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("div", { class: "buttons is-row-reverse" }, index.h("slot", null))));
    }
};
ModalActions.style = modalActionsCss;

exports.bal_modal_actions = ModalActions;
