import { Component, Host, h } from "@stencil/core";
export class ModalActions {
    render() {
        return (h(Host, null,
            h("div", { class: "buttons is-row-reverse" },
                h("slot", null))));
    }
    static get is() { return "bal-modal-actions"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["modal-actions.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["modal-actions.css"]
    }; }
}
