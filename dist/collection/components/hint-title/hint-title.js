import { Component, Host, h } from '@stencil/core';
export class HintTitle {
    render() {
        return (h(Host, null,
            h("h2", { class: "title is-size-2 has-text-white" },
                h("slot", null))));
    }
    static get is() { return "bal-hint-title"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["hint-title.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["hint-title.css"]
    }; }
}
