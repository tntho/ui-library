import { Component, Host, h } from "@stencil/core";
export class HintText {
    render() {
        return (h(Host, null,
            h("p", { class: "has-text-white" },
                h("slot", null))));
    }
    static get is() { return "bal-hint-text"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["hint-text.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["hint-text.css"]
    }; }
}
