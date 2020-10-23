import { Component, Element, h, Host, Method, Prop, State, Watch } from '@stencil/core';
export class DropdownOption {
    constructor() {
        this.isSlotEmpty = true;
        this.hidden = false;
        /**
         * The value of the dropdown item. This value will be returned by the parent <bal-dropdown> element.
         */
        this.value = false;
        /**
         * The value of the dropdown item. This value will be returned by the parent <bal-dropdown> element.
         */
        this.label = '';
        /**
         * If a slot is used instead of label attribute use this value to hide and display the dropdown option.
         */
        this.searchTerm = '';
        /**
         * Baloise icon as a prefix
         */
        this.icon = '';
        /**
         * Use checkbox for multi-select
         */
        this.checkbox = false;
        /**
         * If `true` the option is focused
         */
        this.focused = false;
        /**
         * If `true` the option is selected
         */
        this.selected = false;
        /**
         * Tells witch part of the label should be highlighted
         */
        this.highlight = '';
    }
    highlightChanged() {
        this.updateLabel();
    }
    async isHidden() {
        return this.hidden;
    }
    componentDidLoad() {
        this.isSlotEmpty = this.labelElement.querySelector('slot').assignedElements().length === 0;
        this.updateLabel();
    }
    get parent() {
        if (this.element.parentNode.tagName === 'DIV') {
            // IE11 doesn't allow shadowing so we have tho navigate the dom up to the parent element.
            try {
                return this.element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            }
            catch (e) {
                // Do nothing
            }
        }
        return this.element.parentNode;
    }
    updateLabel() {
        let label = this.label;
        if (!this.isSlotEmpty) {
            label = this.searchTerm || '';
        }
        if (this.highlight && this.highlight.length > 0) {
            const index = label
                .toLowerCase()
                .indexOf(this.highlight.toLowerCase());
            this.hidden = index < 0;
            if (index >= 0 && this.isSlotEmpty) {
                this.setLabelHtml(label.substring(0, index) +
                    '<span class=\'highlight\'>' +
                    label.substring(index, index + this.highlight.length) +
                    '</span>' +
                    label.substring(index + this.highlight.length, label.length));
            }
        }
        else {
            this.hidden = false;
            if (this.isSlotEmpty) {
                this.setLabelHtml(label);
            }
        }
    }
    setLabelHtml(content) {
        if (this.labelElement && this.labelElement.innerHTML !== undefined) {
            this.labelElement.innerHTML = content;
        }
    }
    async select() {
        const option = {
            label: this.label,
            value: this.value,
        };
        await this.parent.select(option);
    }
    render() {
        return (h(Host, null,
            h("button", { class: [
                    'dropdown-item',
                    this.selected ? 'is-selected' : '',
                    this.focused ? 'is-focused' : '',
                    this.hidden ? 'is-hidden' : '',
                    this.icon ? 'has-icon' : '',
                    this.checkbox ? 'has-checkbox' : '',
                ].join(' '), tabIndex: -1, onClick: this.select.bind(this) },
                h("span", { class: "checkbox", style: { display: this.checkbox ? 'flex' : 'none' } },
                    h("div", { class: "bal-checkbox" },
                        h("input", { type: "checkbox", checked: this.selected, tabIndex: -1 }),
                        h("label", null))),
                h("span", { class: "icon", style: { display: this.icon.length === 0 ? 'none' : 'flex' } },
                    h("bal-icon", { name: this.icon, size: "medium" })),
                h("span", { class: "label", ref: (el) => (this.labelElement = el) },
                    h("slot", null)))));
    }
    static get is() { return "bal-dropdown-option"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["dropdown-option.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["dropdown-option.css"]
    }; }
    static get properties() { return {
        "value": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "string | boolean | number | any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The value of the dropdown item. This value will be returned by the parent <bal-dropdown> element."
            },
            "attribute": "value",
            "reflect": false,
            "defaultValue": "false"
        },
        "label": {
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
                "text": "The value of the dropdown item. This value will be returned by the parent <bal-dropdown> element."
            },
            "attribute": "label",
            "reflect": false,
            "defaultValue": "''"
        },
        "searchTerm": {
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
                "text": "If a slot is used instead of label attribute use this value to hide and display the dropdown option."
            },
            "attribute": "search-term",
            "reflect": false,
            "defaultValue": "''"
        },
        "icon": {
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
                "text": "Baloise icon as a prefix"
            },
            "attribute": "icon",
            "reflect": false,
            "defaultValue": "''"
        },
        "checkbox": {
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
                "text": "Use checkbox for multi-select"
            },
            "attribute": "checkbox",
            "reflect": false,
            "defaultValue": "false"
        },
        "focused": {
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
                "text": "If `true` the option is focused"
            },
            "attribute": "focused",
            "reflect": false,
            "defaultValue": "false"
        },
        "selected": {
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
                "text": "If `true` the option is selected"
            },
            "attribute": "selected",
            "reflect": false,
            "defaultValue": "false"
        },
        "highlight": {
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
                "text": "Tells witch part of the label should be highlighted"
            },
            "attribute": "highlight",
            "reflect": false,
            "defaultValue": "''"
        }
    }; }
    static get states() { return {
        "hidden": {}
    }; }
    static get methods() { return {
        "isHidden": {
            "complexType": {
                "signature": "() => Promise<boolean>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<boolean>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "highlight",
            "methodName": "highlightChanged"
        }]; }
}
