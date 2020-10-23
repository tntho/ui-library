import { r as registerInstance, h, H as Host } from './index-ec84eadc.js';

const List = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { role: "listbox", class: [
                "bal-list",
                this.disabled ? "is-disabled" : "",
                this.inverted ? "is-inverted" : "",
                this.border ? "has-border" : "",
            ].join(" ") }, h("slot", null)));
    }
};

const ListItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { role: "listitem", class: [
                "bal-list-item",
                this.disabled ? "is-disabled" : "",
                this.selected ? "is-selected" : "",
            ].join(" ") }, h("slot", null)));
    }
};

const ListItemContent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { class: "bal-list-item-content" }, h("slot", null)));
    }
};

const ListItemIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true` the icon is on the right side of the list item. Default is the left side.
         */
        this.right = false;
    }
    render() {
        return (h(Host, { class: ["bal-list-item-icon", this.right ? "is-right" : ""].join(" ") }, h("slot", null)));
    }
};

const ListItemSubtitle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { class: "bal-list-item-subtitle" }, h("slot", null)));
    }
};

const ListItemTitle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { class: "bal-list-item-title" }, h("slot", null)));
    }
};

export { List as bal_list, ListItem as bal_list_item, ListItemContent as bal_list_item_content, ListItemIcon as bal_list_item_icon, ListItemSubtitle as bal_list_item_subtitle, ListItemTitle as bal_list_item_title };
