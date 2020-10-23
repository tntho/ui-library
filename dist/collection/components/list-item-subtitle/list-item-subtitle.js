import { Component, Host, h } from '@stencil/core';
export class ListItemSubtitle {
    render() {
        return (h(Host, { class: "bal-list-item-subtitle" },
            h("slot", null)));
    }
    static get is() { return "bal-list-item-subtitle"; }
}
