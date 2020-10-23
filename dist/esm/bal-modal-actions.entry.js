import { r as registerInstance, h, H as Host } from './index-ec84eadc.js';

const modalActionsCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}bal-button.is-fullwidth{width:100%}.buttons{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:start;justify-content:flex-start}.buttons bal-button{margin-right:5px}.buttons bal-button:last-child{margin-right:0}span.trigger-label{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}span.trigger-label span.label{margin-bottom:2px}.is-padded-small{padding:10px !important}.is-padded{padding:20px !important}.is-padded-medium{padding:30px !important}.is-padded-large{padding:40px !important}.is-row-reverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.has-background-light{background:#fafafa}:host{display:block}::slotted(bal-button){margin-right:5px}::slotted(bal-button:first-child){margin-right:0}";

const ModalActions = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("div", { class: "buttons is-row-reverse" }, h("slot", null))));
    }
};
ModalActions.style = modalActionsCss;

export { ModalActions as bal_modal_actions };
