import { r as registerInstance, h, H as Host, g as getElement } from './index-ec84eadc.js';

const navbarCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}:host{display:block}";

const Navbar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, null, h("nav", { class: 'navbar is-spaced' + (this.light ? ' is-white' : ' is-info'), role: "navigation", "aria-label": "main navigation" }, h("div", { class: "bal-track-line", style: {
                position: 'absolute',
                top: '0',
                left: '0',
                display: !this.light ? 'none' : '',
            } }), h("div", { class: "navbar-brand" }, h("a", { class: "navbar-item app-title", href: this.logoHref }, h("slot", { name: "navbar-brand" })), this.hasNavbarStartSlot || this.hasNavbarEndSlot ?
            h("a", { role: "button", class: 'navbar-burger' + (this.isMenuActive ? ' is-active' : ''), "aria-label": "menu", "aria-expanded": this.isMenuActive ? 'true' : 'false', onClick: () => this.toggle() }, h("span", { "aria-hidden": "true" }), h("span", { "aria-hidden": "true" }), h("span", { "aria-hidden": "true" }))
            : ''), h("div", { class: 'navbar-menu' + (this.isMenuActive ? ' is-active' : '') }, h("div", { class: "navbar-start" }, h("slot", { name: "navbar-start" })), h("div", { class: "navbar-end" }, h("slot", { name: "navbar-end" }))))));
    }
    get el() { return getElement(this); }
};
Navbar.style = navbarCss;

export { Navbar as bal_navbar };
