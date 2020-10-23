'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9347317.js');

const List = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * If `true` the list item can be hovered
         */
        this.disabled = false;
        /**
         * If `true` the list can be used on a dark backround
         */
        this.inverted = false;
        /**
         * If `true` each list item has a bottom border
         */
        this.border = false;
    }
    render() {
        return (index.h(index.Host, { role: "listbox", class: [
                "bal-list",
                this.disabled ? "is-disabled" : "",
                this.inverted ? "is-inverted" : "",
                this.border ? "has-border" : "",
            ].join(" ") }, index.h("slot", null)));
    }
};

const ListItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * If `true` the list item can be hovered
         */
        this.disabled = false;
        /**
         * If `true` the list item has a selected theme
         */
        this.selected = false;
    }
    render() {
        return (index.h(index.Host, { role: "listitem", class: [
                "bal-list-item",
                this.disabled ? "is-disabled" : "",
                this.selected ? "is-selected" : "",
            ].join(" ") }, index.h("slot", null)));
    }
};

const ListItemContent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { class: "bal-list-item-content" }, index.h("slot", null)));
    }
};

const ListItemIcon = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * If `true` the icon is on the right side of the list item. Default is the left side.
         */
        this.right = false;
    }
    render() {
        return (index.h(index.Host, { class: ["bal-list-item-icon", this.right ? "is-right" : ""].join(" ") }, index.h("slot", null)));
    }
};

const ListItemSubtitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { class: "bal-list-item-subtitle" }, index.h("slot", null)));
    }
};

const ListItemTitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { class: "bal-list-item-title" }, index.h("slot", null)));
    }
};

exports.bal_list = List;
exports.bal_list_item = ListItem;
exports.bal_list_item_content = ListItemContent;
exports.bal_list_item_icon = ListItemIcon;
exports.bal_list_item_subtitle = ListItemSubtitle;
exports.bal_list_item_title = ListItemTitle;
