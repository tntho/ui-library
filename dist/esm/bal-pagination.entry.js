import { r as registerInstance, c as createEvent, h, H as Host } from './index-ec84eadc.js';

const paginationCss = ".pagination-previous,.pagination-next,.pagination-link,.pagination-ellipsis{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.pagination:not(:last-child){margin-bottom:1.5rem}.pagination-previous,.pagination-next,.pagination-link,.pagination-ellipsis{-moz-appearance:none;-webkit-appearance:none;-ms-flex-align:center;align-items:center;border:1px solid transparent;border-radius:4px;-webkit-box-shadow:none;box-shadow:none;display:-ms-inline-flexbox;display:inline-flex;font-size:0.9375rem;height:2.5em;-ms-flex-pack:start;justify-content:flex-start;line-height:1.5;padding-bottom:calc(0.5em - 1px);padding-left:calc(0.75em - 1px);padding-right:calc(0.75em - 1px);padding-top:calc(0.5em - 1px);position:relative;vertical-align:top}.pagination-previous:focus,.pagination-next:focus,.pagination-link:focus,.pagination-ellipsis:focus,.is-focused.pagination-previous,.is-focused.pagination-next,.is-focused.pagination-link,.is-focused.pagination-ellipsis,.pagination-previous:active,.pagination-next:active,.pagination-link:active,.pagination-ellipsis:active,.is-active.pagination-previous,.is-active.pagination-next,.is-active.pagination-link,.is-active.pagination-ellipsis{outline:none}[disabled].pagination-previous,[disabled].pagination-next,[disabled].pagination-link,[disabled].pagination-ellipsis,fieldset[disabled] .pagination-previous,fieldset[disabled] .pagination-next,fieldset[disabled] .pagination-link,fieldset[disabled] .pagination-ellipsis{cursor:not-allowed}*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}.pagination{font-size:0.9375rem;margin:-0.25rem}.pagination.is-small{font-size:0.8125rem}.pagination.is-medium{font-size:1.125rem}.pagination.is-large{font-size:1.375rem}.pagination.is-rounded .pagination-previous,.pagination.is-rounded .pagination-next{padding-left:1em;padding-right:1em;border-radius:100%}.pagination.is-rounded .pagination-link{border-radius:100%}.pagination,.pagination-list{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;text-align:center}.pagination-previous,.pagination-next,.pagination-link,.pagination-ellipsis{font-size:1em;-ms-flex-pack:center;justify-content:center;margin:0.25rem;padding-left:0.5em;padding-right:0.5em;text-align:center}.pagination-previous,.pagination-next,.pagination-link{border-color:#d3dbeb;color:#003399;min-width:2.5em}.pagination-previous:hover,.pagination-next:hover,.pagination-link:hover{border-color:#003399;color:#003399}.pagination-previous:focus,.pagination-next:focus,.pagination-link:focus{border-color:#003399}.pagination-previous:active,.pagination-next:active,.pagination-link:active{-webkit-box-shadow:inset 0 1px 2px rgba(34, 34, 34, 0.2);box-shadow:inset 0 1px 2px rgba(34, 34, 34, 0.2)}.pagination-previous[disabled],.pagination-next[disabled],.pagination-link[disabled]{background-color:#d3dbeb;border-color:#d3dbeb;-webkit-box-shadow:none;box-shadow:none;color:#d8d9d9;opacity:0.5}.pagination-previous,.pagination-next{padding-left:0.75em;padding-right:0.75em;white-space:nowrap}.pagination-link.is-current{background-color:#003399;border-color:#003399;color:#fff}.pagination-ellipsis{color:#e2e3e3;pointer-events:none}.pagination-list{-ms-flex-wrap:wrap;flex-wrap:wrap}@media screen and (max-width: 768px){.pagination{-ms-flex-wrap:wrap;flex-wrap:wrap}.pagination-previous,.pagination-next{-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.pagination-list li{-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}}@media screen and (min-width: 769px), print{.pagination-list{-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-order:1;order:1}.pagination-previous{-ms-flex-order:2;order:2}.pagination-next{-ms-flex-order:3;order:3}.pagination{-ms-flex-pack:justify;justify-content:space-between}.pagination.is-centered .pagination-previous{-ms-flex-order:1;order:1}.pagination.is-centered .pagination-list{-ms-flex-pack:center;justify-content:center;-ms-flex-order:2;order:2}.pagination.is-centered .pagination-next{-ms-flex-order:3;order:3}.pagination.is-right .pagination-previous{-ms-flex-order:1;order:1}.pagination.is-right .pagination-next{-ms-flex-order:2;order:2}.pagination.is-right .pagination-list{-ms-flex-pack:end;justify-content:flex-end;-ms-flex-order:3;order:3}}:host{display:block}nav.pagination>button{-webkit-box-shadow:none !important;box-shadow:none !important;-ms-flex-align:center;align-items:center;background:#ffffff}nav.pagination>button:disabled{background:#f0fbff;border-color:#d3dbeb;color:#7188b8}nav.pagination bal-icon{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}nav.pagination ul{padding:0;margin:0;list-style:none}nav.pagination button,nav.pagination a{cursor:pointer}";

const Pagination = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.balChangeEventEmitter = createEvent(this, "balChange", 7);
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
        return h("li", null, h("span", { class: "pagination-ellipsis" }, "\u2026"));
    }
    renderPageElement(pageNumber) {
        return h("li", null, h("a", { class: [
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
        return (h(Host, null, h("nav", { class: "pagination is-centered", role: "navigation", "aria-label": "pagination" }, h("button", { class: "pagination-previous", disabled: this._value < 2, onClick: () => this.previous() }, h("bal-icon", { name: "nav-go-left-no-padding", size: "small" })), h("button", { class: "pagination-next", disabled: this._value === this.totalPages, onClick: () => this.next() }, h("bal-icon", { name: "nav-go-right-no-padding", size: "small" })), h("ul", { class: "pagination-list" }, items))));
    }
    static get watchers() { return {
        "value": ["valueChanged"]
    }; }
};
Pagination.style = paginationCss;

export { Pagination as bal_pagination };
