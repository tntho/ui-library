import { Component, Host, h } from "@stencil/core";
export class ListItemTitle {
    render() {
        return (h(Host, { class: "bal-list-item-title" },
            h("slot", null)));
    }
    static get is() { return "bal-list-item-title"; }
}
