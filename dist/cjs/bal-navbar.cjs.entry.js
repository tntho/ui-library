'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9347317.js');

const navbarCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}:host{display:block}";

const Navbar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, null, index.h("nav", { class: 'navbar is-spaced' + (this.light ? ' is-white' : ' is-info'), role: "navigation", "aria-label": "main navigation" }, index.h("div", { class: "bal-track-line", style: {
                position: 'absolute',
                top: '0',
                left: '0',
                display: !this.light ? 'none' : '',
            } }), index.h("div", { class: "navbar-brand" }, index.h("a", { class: "navbar-item app-title", href: this.logoHref }, index.h("slot", { name: "navbar-brand" })), this.hasNavbarStartSlot || this.hasNavbarEndSlot ?
            index.h("a", { role: "button", class: 'navbar-burger' + (this.isMenuActive ? ' is-active' : ''), "aria-label": "menu", "aria-expanded": this.isMenuActive ? 'true' : 'false', onClick: () => this.toggle() }, index.h("span", { "aria-hidden": "true" }), index.h("span", { "aria-hidden": "true" }), index.h("span", { "aria-hidden": "true" }))
            : ''), index.h("div", { class: 'navbar-menu' + (this.isMenuActive ? ' is-active' : '') }, index.h("div", { class: "navbar-start" }, index.h("slot", { name: "navbar-start" })), index.h("div", { class: "navbar-end" }, index.h("slot", { name: "navbar-end" }))))));
    }
    get el() { return index.getElement(this); }
};
Navbar.style = navbarCss;

exports.bal_navbar = Navbar;
