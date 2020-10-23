import { r as registerInstance, h, H as Host } from './index-ec84eadc.js';
var List = /** @class */ (function () {
    function List(hostRef) {
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
    List.prototype.render = function () {
        return (h(Host, { role: "listbox", class: [
                "bal-list",
                this.disabled ? "is-disabled" : "",
                this.inverted ? "is-inverted" : "",
                this.border ? "has-border" : "",
            ].join(" ") }, h("slot", null)));
    };
    return List;
}());
var ListItem = /** @class */ (function () {
    function ListItem(hostRef) {
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
    ListItem.prototype.render = function () {
        return (h(Host, { role: "listitem", class: [
                "bal-list-item",
                this.disabled ? "is-disabled" : "",
                this.selected ? "is-selected" : "",
            ].join(" ") }, h("slot", null)));
    };
    return ListItem;
}());
var ListItemContent = /** @class */ (function () {
    function ListItemContent(hostRef) {
        registerInstance(this, hostRef);
    }
    ListItemContent.prototype.render = function () {
        return (h(Host, { class: "bal-list-item-content" }, h("slot", null)));
    };
    return ListItemContent;
}());
var ListItemIcon = /** @class */ (function () {
    function ListItemIcon(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true` the icon is on the right side of the list item. Default is the left side.
         */
        this.right = false;
    }
    ListItemIcon.prototype.render = function () {
        return (h(Host, { class: ["bal-list-item-icon", this.right ? "is-right" : ""].join(" ") }, h("slot", null)));
    };
    return ListItemIcon;
}());
var ListItemSubtitle = /** @class */ (function () {
    function ListItemSubtitle(hostRef) {
        registerInstance(this, hostRef);
    }
    ListItemSubtitle.prototype.render = function () {
        return (h(Host, { class: "bal-list-item-subtitle" }, h("slot", null)));
    };
    return ListItemSubtitle;
}());
var ListItemTitle = /** @class */ (function () {
    function ListItemTitle(hostRef) {
        registerInstance(this, hostRef);
    }
    ListItemTitle.prototype.render = function () {
        return (h(Host, { class: "bal-list-item-title" }, h("slot", null)));
    };
    return ListItemTitle;
}());
export { List as bal_list, ListItem as bal_list_item, ListItemContent as bal_list_item_content, ListItemIcon as bal_list_item_icon, ListItemSubtitle as bal_list_item_subtitle, ListItemTitle as bal_list_item_title };
