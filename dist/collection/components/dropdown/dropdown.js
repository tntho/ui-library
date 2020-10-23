import { Component, Element, Event, h, Host, Listen, Method, Prop, State, Watch } from '@stencil/core';
export class Dropdown {
    constructor() {
        this.isPristine = true;
        this.selectedOption = null;
        this.hasFocus = false;
        this.maxDropdownWidth = 100;
        this.isActive = false;
        /**
         * The value of the selected dropdown item.
         */
        this.value = null;
        /**
         * Instructional text that shows before the input has a value.
         */
        this.placeholder = '';
        /**
         * If `true`, the user cannot interact with the input.
         */
        this.readonly = false;
        /**
         * If `true`, the user cannot interact with the input.
         */
        this.disabled = false;
        /**
         * If `true` the dropdown can be used on blue background.
         */
        this.inverted = false;
        /**
         * If `true`, the height of the dropdown content is fixed.
         */
        this.fixed = true;
        /**
         * If `true`, the component uses the whole width.
         */
        this.expanded = false;
        /**
         * Defines the trigger icon on the right site.
         */
        this.triggerIcon = 'caret-down';
        /**
         * If `true` the dropdown shows the empty message
         */
        this.empty = false;
        /**
         * If `true` the dropdown allows multiple selection
         */
        this.multiSelect = false;
        /**
         * If `true`, the use can search for the option.
         */
        this.typeahead = false;
    }
    valueWatcher(newValue) {
        if (newValue) {
            this.selectedOption = this.value;
            this.updateLabel();
            this.updateActivatedOptions();
        }
    }
    disabledWatcher(newValue) {
        if (newValue === true) {
            this.isActive = false;
            this.fireBlurIfPossible();
        }
    }
    async tabOutside(event) {
        if (event.key === 'Tab' &&
            !this.element.contains(document.activeElement) &&
            this.isActive) {
            await this.toggle();
        }
    }
    async clickOnOutside(event) {
        if (!this.element.contains(event.target) && this.isActive) {
            await this.toggle();
        }
    }
    componentWillLoad() {
        if (this.value) {
            this.selectedOption = this.value;
        }
    }
    componentDidLoad() {
        if (this.value) {
            this.updateLabel();
            this.updateActivatedOptions();
        }
    }
    /**
     * Selects an option.
     */
    async select(option) {
        if (this.multiSelect) {
            this.value = this.prepareValues(this.value, option);
            this.selectedOption = this.prepareValues(this.selectedOption, option);
            this.value = this.value.filter((v) => v);
            this.selectedOption = this.selectedOption.filter((v) => v);
        }
        else {
            this.selectedOption = option;
            this.value = option;
        }
        this.balChange.emit(option);
        this.updateLabel();
        if (!this.multiSelect) {
            await this.close();
        }
        this.updateActivatedOptions();
    }
    /**
     * Returns the value of the dropdown.
     */
    async getSelected() {
        return this.selectedOption;
    }
    /**
     * Open & closes the dropdown.
     */
    async toggle() {
        this.adjustMaxDropdownWidth();
        this.isActive = !this.isActive;
        this.fireBlurIfPossible();
    }
    /**
     * Open the dropdown menu.
     */
    async open() {
        this.adjustMaxDropdownWidth();
        this.isActive = true;
    }
    /**
     * Closes the dropdown menu.
     */
    async close() {
        this.isActive = false;
        this.fireBlurIfPossible();
    }
    get children() {
        return Array.from(this.element.querySelectorAll('bal-dropdown-option'));
    }
    get childrenWithHiddenState() {
        return Promise.all(this.children.map((child) => child.isHidden()));
    }
    get childrenWithActivatedState() {
        return Promise.all(this.children.map((child) => child.selected));
    }
    get childrenWithValue() {
        return Promise.all(this.children.map((child) => child.value));
    }
    get isUp() {
        const box = this.element.getBoundingClientRect();
        return window.innerHeight - box.top < window.innerHeight / 2;
    }
    async onInputClick() {
        if (!this.typeahead || (this.typeahead && this.multiSelect)) {
            await this.toggle();
        }
        if (this.typeahead && this.multiSelect) {
            setTimeout(() => this.searchInputElement.focus(), 100);
        }
    }
    onInputFocus() {
        this.hasFocus = true;
        this.balFocus.emit();
    }
    onInputBlur() {
        this.hasFocus = false;
        this.balFocus.emit();
    }
    async onInput(event) {
        const inputValue = event.target.value;
        this.balInput.emit(inputValue);
    }
    async onKeyUp(event) {
        if (!this.disabled &&
            ['Enter', 'ArrowUp', 'ArrowDown', 'Up', 'Down'].indexOf(event.key) < 0) {
            const inputValue = event.target.value;
            if (this.typeahead && !this.multiSelect) {
                this.isActive = !!inputValue;
                this.adjustMaxDropdownWidth();
            }
            const children = this.children;
            if (this.typeahead && children && children.length > 0) {
                children.forEach((child) => (child.highlight = inputValue));
            }
            this.fireBlurIfPossible();
        }
    }
    handleKeyUp(event) {
        if (event.key === 'Escape' || event.key === 'Esc') {
            event.preventDefault();
            this.isActive = false;
            this.fireBlurIfPossible();
        }
    }
    render() {
        return (h(Host, null,
            h("div", { class: [
                    'dropdown',
                    this.expanded ? 'is-fullwidth' : '',
                    this.isActive ? 'is-active' : '',
                    this.fixed ? 'is-fixed' : '',
                    this.isUp ? 'is-up' : '',
                    this.typeahead ? 'is-typeahead' : '',
                    this.multiSelect ? 'is-multi-select' : '',
                    this.inverted ? 'is-inverted' : '',
                ].join(' ') },
                h("div", { class: "dropdown-trigger" },
                    h("div", { class: [
                            'control',
                            this.triggerIcon && !this.typeahead ? 'has-icons-right' : '',
                        ].join(' ') },
                        h("input", { part: "input", class: ['input', this.isActive ? 'is-focused' : ''].join(' '), autocomplete: "off", disabled: this.disabled, readOnly: this.readonly ||
                                !this.typeahead ||
                                (this.typeahead && this.multiSelect), placeholder: this.placeholder, onKeyUp: this.onKeyUp.bind(this), onInput: this.onInput.bind(this), onClick: this.onInputClick.bind(this), onBlur: this.onInputBlur.bind(this), onFocus: this.onInputFocus.bind(this), ref: (el) => (this.inputElement = el) }),
                        h("bal-icon", { size: "medium", name: this.triggerIcon, isRight: true, style: {
                                display: this.triggerIcon && !this.typeahead ? 'flex' : 'none',
                            }, class: [this.inverted ? 'is-inverted' : ''].join(' ') }))),
                h("div", { class: "dropdown-menu", style: { maxWidth: this.maxDropdownWidth + 'px' }, role: "menu", ref: (el) => (this.dropdownMenuElement = el) },
                    h("div", { class: "dropdown-content" },
                        this.multiSelect && this.typeahead ? (h("div", { class: "dropdown-content-search" },
                            h("bal-field", { "icon-left": "search" },
                                h("input", { part: "input", class: ['input'].join(' '), autocomplete: "off", placeholder: this.placeholder, onKeyUp: this.onKeyUp.bind(this), ref: (el) => (this.searchInputElement = el) })))) : (''),
                        h("div", { part: "content-options", class: "dropdown-content-options", ref: (el) => (this.dropdownContentElement = el) },
                            h("div", { style: (this.empty) && { display: 'none' } },
                                h("slot", null))),
                        h("span", { class: "is-empty", style: (!this.empty) && { display: 'none' } },
                            h("slot", { name: "is-empty" }, "No item available")))))));
    }
    updateLabel() {
        let label = '';
        if (Array.isArray(this.value)) {
            label = this.value
                .filter((v) => v)
                .map((v) => v.label)
                .join(', ');
        }
        else {
            label = this.value.label;
        }
        this.inputElement.value = label;
    }
    prepareValues(value, option) {
        let values = Array.isArray(value) ? value : [value];
        values = values.filter((v) => v);
        if (values.map((v) => v.value).indexOf(option.value) >= 0) {
            return values.filter((v) => v.value !== option.value);
        }
        return [...values, option];
    }
    fireBlurIfPossible() {
        if (!this.hasFocus && !this.isActive) {
            this.balBlur.emit();
        }
    }
    adjustMaxDropdownWidth() {
        const rect = this.inputElement.getBoundingClientRect();
        this.maxDropdownWidth = window.innerWidth - rect.x - Dropdown.MIN_DISTANCE_TO_BROWSER_BORDER;
    }
    updateActivatedOptions() {
        this.children.forEach((child) => {
            if (Array.isArray(this.selectedOption)) {
                child.selected =
                    this.selectedOption
                        .filter((o) => o)
                        .map((o) => o.value)
                        .indexOf(child.value) >= 0;
            }
            else {
                child.selected = child.value === this.selectedOption.value;
            }
        });
    }
    static get is() { return "bal-dropdown"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["dropdown.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["dropdown.css"]
    }; }
    static get properties() { return {
        "value": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Option<any> | Option<any>[]",
                "resolved": "Option<any> | Option<any>[]",
                "references": {
                    "Option": {
                        "location": "import",
                        "path": "../dropdown-option/dropdown-option.types"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The value of the selected dropdown item."
            },
            "defaultValue": "null"
        },
        "placeholder": {
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
                "text": "Instructional text that shows before the input has a value."
            },
            "attribute": "placeholder",
            "reflect": false,
            "defaultValue": "''"
        },
        "readonly": {
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
                "text": "If `true`, the user cannot interact with the input."
            },
            "attribute": "readonly",
            "reflect": false,
            "defaultValue": "false"
        },
        "disabled": {
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
                "text": "If `true`, the user cannot interact with the input."
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        },
        "inverted": {
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
                "text": "If `true` the dropdown can be used on blue background."
            },
            "attribute": "inverted",
            "reflect": false,
            "defaultValue": "false"
        },
        "fixed": {
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
                "text": "If `true`, the height of the dropdown content is fixed."
            },
            "attribute": "fixed",
            "reflect": false,
            "defaultValue": "true"
        },
        "expanded": {
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
                "text": "If `true`, the component uses the whole width."
            },
            "attribute": "expanded",
            "reflect": false,
            "defaultValue": "false"
        },
        "triggerIcon": {
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
                "text": "Defines the trigger icon on the right site."
            },
            "attribute": "trigger-icon",
            "reflect": false,
            "defaultValue": "'caret-down'"
        },
        "empty": {
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
                "text": "If `true` the dropdown shows the empty message"
            },
            "attribute": "empty",
            "reflect": false,
            "defaultValue": "false"
        },
        "multiSelect": {
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
                "text": "If `true` the dropdown allows multiple selection"
            },
            "attribute": "multi-select",
            "reflect": false,
            "defaultValue": "false"
        },
        "typeahead": {
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
                "text": "If `true`, the use can search for the option."
            },
            "attribute": "typeahead",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "selectedOption": {},
        "hasFocus": {},
        "maxDropdownWidth": {},
        "isActive": {}
    }; }
    static get events() { return [{
            "method": "balInput",
            "name": "balInput",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when containing input field raises an input event."
            },
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            }
        }, {
            "method": "balChange",
            "name": "balChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the checked property has changed."
            },
            "complexType": {
                "original": "Option<any>",
                "resolved": "Option<any>",
                "references": {
                    "Option": {
                        "location": "import",
                        "path": "../dropdown-option/dropdown-option.types"
                    }
                }
            }
        }, {
            "method": "balBlur",
            "name": "balBlur",
            "bubbles": false,
            "cancelable": false,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the toggle loses focus."
            },
            "complexType": {
                "original": "void",
                "resolved": "void",
                "references": {}
            }
        }, {
            "method": "balFocus",
            "name": "balFocus",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the toggle has focus.."
            },
            "complexType": {
                "original": "void",
                "resolved": "void",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "select": {
            "complexType": {
                "signature": "(option: Option<any>) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "Option": {
                        "location": "import",
                        "path": "../dropdown-option/dropdown-option.types"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Selects an option.",
                "tags": []
            }
        },
        "getSelected": {
            "complexType": {
                "signature": "() => Promise<Option<any> | Option<any>[]>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "Option": {
                        "location": "import",
                        "path": "../dropdown-option/dropdown-option.types"
                    }
                },
                "return": "Promise<Option<any> | Option<any>[]>"
            },
            "docs": {
                "text": "Returns the value of the dropdown.",
                "tags": []
            }
        },
        "toggle": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Open & closes the dropdown.",
                "tags": []
            }
        },
        "open": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Open the dropdown menu.",
                "tags": []
            }
        },
        "close": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Closes the dropdown menu.",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "value",
            "methodName": "valueWatcher"
        }, {
            "propName": "disabled",
            "methodName": "disabledWatcher"
        }]; }
    static get listeners() { return [{
            "name": "keyup",
            "method": "tabOutside",
            "target": "document",
            "capture": false,
            "passive": false
        }, {
            "name": "click",
            "method": "clickOnOutside",
            "target": "document",
            "capture": false,
            "passive": false
        }, {
            "name": "keyup",
            "method": "handleKeyUp",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
Dropdown.MIN_DISTANCE_TO_BROWSER_BORDER = 30;
