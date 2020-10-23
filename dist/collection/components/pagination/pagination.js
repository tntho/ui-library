import { Component, Host, h, Prop, State, Watch, Method, Event } from "@stencil/core";
export class Pagination {
    constructor() {
        this._value = 1;
        /**
         * Disables component
         */
        this.disabled = false;
        /**
         * Current selected page
         */
        this.value = 1;
        /**
         * The total amount of pages
         */
        this.totalPages = 1;
        /**
         * Specify the max visible pages before and after the selected page
         */
        this.pageRange = 2;
    }
    valueChanged(newValue) {
        this._value = newValue;
    }
    componentWillLoad() {
        this._value = this.value;
    }
    async next() {
        if (this._value < this.totalPages) {
            this._value = this._value + 1;
            this.balChangeEventEmitter.emit(this._value);
        }
    }
    async previous() {
        if (this._value !== 1) {
            this._value = this._value - 1;
            this.balChangeEventEmitter.emit(this._value);
        }
    }
    selectPage(pageNumber) {
        this._value = pageNumber;
        this.balChangeEventEmitter.emit(this._value);
    }
    renderEllipsisElement() {
        return h("li", null,
            h("span", { class: "pagination-ellipsis" }, "\u2026"));
    }
    renderPageElement(pageNumber) {
        return h("li", null,
            h("a", { class: [
                    "pagination-link",
                    this._value === pageNumber ? "is-current" : "",
                ].join(" "), onClick: () => this.selectPage(pageNumber) }, pageNumber));
    }
    render() {
        const items = [];
        let rangeStart = this._value - this.pageRange;
        let rangeEnd = this._value + this.pageRange;
        if (rangeEnd > this.totalPages) {
            rangeEnd = this.totalPages;
            rangeStart = this.totalPages - this.pageRange * 2;
            rangeStart = rangeStart < 1 ? 1 : rangeStart;
        }
        if (rangeStart <= 1) {
            rangeStart = 1;
            rangeEnd = Math.min(this.pageRange * 2 + 1, this.totalPages);
        }
        if (rangeStart > 1) {
            items.push(this.renderPageElement(1));
            items.push(this.renderEllipsisElement());
        }
        for (let i = rangeStart; i <= rangeEnd; i++) {
            items.push(this.renderPageElement(i));
        }
        if (rangeEnd < this.totalPages) {
            items.push(this.renderEllipsisElement());
            items.push(this.renderPageElement(this.totalPages));
        }
        return (h(Host, null,
            h("nav", { class: "pagination is-centered", role: "navigation", "aria-label": "pagination" },
                h("button", { class: "pagination-previous", disabled: this._value < 2, onClick: () => this.previous() },
                    h("bal-icon", { name: "nav-go-left-no-padding", size: "small" })),
                h("button", { class: "pagination-next", disabled: this._value === this.totalPages, onClick: () => this.next() },
                    h("bal-icon", { name: "nav-go-right-no-padding", size: "small" })),
                h("ul", { class: "pagination-list" }, items))));
    }
    static get is() { return "bal-pagination"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["pagination.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["pagination.css"]
    }; }
    static get properties() { return {
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
                "text": "Disables component"
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        },
        "value": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Current selected page"
            },
            "attribute": "value",
            "reflect": false,
            "defaultValue": "1"
        },
        "totalPages": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The total amount of pages"
            },
            "attribute": "total-pages",
            "reflect": false,
            "defaultValue": "1"
        },
        "pageRange": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Specify the max visible pages before and after the selected page"
            },
            "attribute": "page-range",
            "reflect": false,
            "defaultValue": "2"
        }
    }; }
    static get states() { return {
        "_value": {}
    }; }
    static get events() { return [{
            "method": "balChangeEventEmitter",
            "name": "balChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Triggers when a page change happens"
            },
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "next": {
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
                "text": "",
                "tags": []
            }
        },
        "previous": {
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
                "text": "",
                "tags": []
            }
        }
    }; }
    static get watchers() { return [{
            "propName": "value",
            "methodName": "valueChanged"
        }]; }
}
