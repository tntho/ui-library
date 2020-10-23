import { Component, Host, h } from "@stencil/core";
export class CardHeading {
    render() {
        return (h(Host, { class: "bal-card-heading" },
            h("slot", null)));
    }
    static get is() { return "bal-card-heading"; }
}
