import { Component, Host, h } from "@stencil/core";
export class DataValue {
    render() {
        return (h(Host, { class: "bal-data-value" },
            h("slot", null)));
    }
    static get is() { return "bal-data-value"; }
}
