import { Component, Host, h, State, Prop, Watch, Event } from "@stencil/core";
export class FilterButton {
    constructor() {
        this.isActive = false;
        /**
         * If `true` then the button is active/selected
         */
        this.active = false;
    }
    validateCollapsed(newValue) {
        this.isActive = newValue;
    }
    componentWillLoad() {
        this.isActive = this.active;
    }
    async toggle() {
        this.isActive = !this.isActive;
        this.balChangeEventEmitter.emit(this.isActive);
    }
    render() {
        return (h(Host, null,
            h("bal-button", { type: "is-info", dense: true, outlined: true, "is-active": this.isActive, onClick: () => this.toggle() },
                h("div", { class: "filter-button-inner" },
                    h("div", { class: "bal-checkbox" },
                        h("input", { type: "checkbox", checked: this.isActive }),
                        h("label", null,
                            h("slot", null)))))));
    }
    static get is() { return "bal-filter-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["filter-button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["filter-button.css"]
    }; }
    static get properties() { return {
        "active": {
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
                "text": "If `true` then the button is active/selected"
            },
            "attribute": "active",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "isActive": {}
    }; }
    static get events() { return [{
            "method": "balChangeEventEmitter",
            "name": "balChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Triggers when the value of the filter-button is changed"
            },
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            }
        }]; }
    static get watchers() { return [{
            "propName": "active",
            "methodName": "validateCollapsed"
        }]; }
}
