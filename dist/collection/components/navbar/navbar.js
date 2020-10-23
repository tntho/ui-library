import { Component, Element, h, Host, Prop, State } from '@stencil/core';
export class Navbar {
    constructor() {
        this.isMenuActive = false;
        this.light = false;
        this.logoHref = '';
    }
    componentWillLoad() {
        this.hasNavbarStartSlot = !!this.el.querySelector('[slot="navbar-start"]');
        this.hasNavbarEndSlot = !!this.el.querySelector('[slot="navbar-end"]');
    }
    async toggle() {
        this.isMenuActive = !this.isMenuActive;
    }
    render() {
        return (h(Host, null,
            h("nav", { class: 'navbar is-spaced' + (this.light ? ' is-white' : ' is-info'), role: "navigation", "aria-label": "main navigation" },
                h("div", { class: "bal-track-line", style: {
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        display: !this.light ? 'none' : '',
                    } }),
                h("div", { class: "navbar-brand" },
                    h("a", { class: "navbar-item app-title", href: this.logoHref },
                        h("slot", { name: "navbar-brand" })),
                    this.hasNavbarStartSlot || this.hasNavbarEndSlot ?
                        h("a", { role: "button", class: 'navbar-burger' + (this.isMenuActive ? ' is-active' : ''), "aria-label": "menu", "aria-expanded": this.isMenuActive ? 'true' : 'false', onClick: () => this.toggle() },
                            h("span", { "aria-hidden": "true" }),
                            h("span", { "aria-hidden": "true" }),
                            h("span", { "aria-hidden": "true" }))
                        : ''),
                h("div", { class: 'navbar-menu' + (this.isMenuActive ? ' is-active' : '') },
                    h("div", { class: "navbar-start" },
                        h("slot", { name: "navbar-start" })),
                    h("div", { class: "navbar-end" },
                        h("slot", { name: "navbar-end" }))))));
    }
    static get is() { return "bal-navbar"; }
    static get originalStyleUrls() { return {
        "$": ["navbar.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["navbar.css"]
    }; }
    static get properties() { return {
        "light": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "light",
            "reflect": false,
            "defaultValue": "false"
        },
        "logoHref": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "logo-href",
            "reflect": false,
            "defaultValue": "''"
        }
    }; }
    static get states() { return {
        "isMenuActive": {}
    }; }
    static get elementRef() { return "el"; }
}
