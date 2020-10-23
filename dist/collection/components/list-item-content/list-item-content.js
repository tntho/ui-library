import { Component, Host, h } from "@stencil/core";
export class ListItemContent {
    render() {
        return (h(Host, { class: "bal-list-item-content" },
            h("slot", null)));
    }
    static get is() { return "bal-list-item-content"; }
}
