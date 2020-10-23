import { Component, Host, h, State, Prop, Watch, Event, Method } from "@stencil/core";
import moment from "moment";
import { i18n } from "./i18n";
moment.updateLocale("en", i18n.en);
moment.defineLocale("it", i18n.it);
moment.defineLocale("fr", i18n.fr);
moment.defineLocale("de", i18n.de);
export class Datepicker {
    constructor() {
        this.now = moment().startOf("day");
        this.isPristine = true;
        this.selectedDate = moment().startOf("day");
        this.pointerDate = moment().startOf("day");
        /**
         * Language of the datepicker. Possible values are `de`, `fr`,`it` or `en`.
         */
        this.language = "de";
        /**
         * Placeholder text to render if no date has been selected.
         */
        this.placeholder = "Click to select...";
        /**
         * Disable the input
         */
        this.disabled = false;
        /**
         * If `true` the datepicker can be used on blue background.
         */
        this.inverted = false;
        /**
         * Latest date available for selection
         */
        this.maxDate = "";
        /**
         * Earliest date available for selection
         */
        this.minDate = "";
        /**
         * Latest year available for selection
         */
        this.maxYear = "";
        /**
         * Closes the datepicker dropdown after selection
         */
        this.closeOnSelect = true;
        /**
         * Earliest year available for selection
         */
        this.minYear = "";
        /**
         * The value of the datepicker with the format `dd.MM.yyyy`.
         */
        this.value = "";
        /**
         * Callback to determine which date in the datepicker should be selectable.
         */
        this.filter = (_) => true;
        /**
         * Callback to format or modify a changed value pefore display.
         */
        this.formatLabel = (_) => _;
    }
    valueWatcher(newValue) {
        if (newValue === undefined) {
            this.value = "";
            this.isPristine = true;
            this.selectedDate = moment().startOf("day");
            this.pointerDate = moment().startOf("day");
            return;
        }
        this.isPristine = false;
        this.selectedDate = moment(newValue, Datepicker.FORMAT);
        this.pointerDate = moment(newValue, Datepicker.FORMAT);
    }
    componentWillLoad() {
        moment.locale(this.language);
        if (this.value) {
            this.isPristine = false;
            this.selectedDate = moment(this.value, Datepicker.FORMAT);
            this.pointerDate = moment(this.value, Datepicker.FORMAT);
        }
        if (!this.minYear) {
            this.minYear = moment(this.now).subtract(100, "years").year().toString();
        }
        if (!this.maxYear) {
            this.maxYear = moment(this.now).add(100, "years").year().toString();
        }
    }
    /**
     * Open the datepicker dropdown
     */
    async open() {
        await this.dropDownElement.open();
    }
    /**
     * Close the datepicker dropdown
     */
    async close() {
        await this.dropDownElement.close();
    }
    get weekdays() {
        const arr = moment.weekdaysMin();
        arr.push(arr.shift());
        return arr;
    }
    get years() {
        const years = [];
        for (let year = parseInt(this.minYear, 10); year <= parseInt(this.maxYear, 10); year++) {
            years.push(year);
        }
        return years;
    }
    get parsedMaxDate() {
        return moment(this.maxDate, Datepicker.FORMAT).startOf("day");
    }
    get parsedMinDate() {
        return moment(this.minDate, Datepicker.FORMAT).startOf("day");
    }
    get firstDateOfBox() {
        return moment(this.pointerDate).startOf("month").startOf("isoWeek");
    }
    get calendarGrid() {
        let weekDatePointer = this.firstDateOfBox;
        let dayDatePointer = this.firstDateOfBox;
        let calendar = [];
        do {
            let row = [];
            do {
                row = [...row, {
                        date: moment(dayDatePointer),
                        dateString: dayDatePointer.format(Datepicker.FORMAT),
                        label: dayDatePointer.date().toString(),
                        isToday: this.now.isSame(dayDatePointer),
                        isSelected: !this.isPristine && this.selectedDate.isSame(dayDatePointer),
                        isDisabled: !this.filter(dayDatePointer.format(Datepicker.FORMAT)),
                        isOutdated: !this.pointerDate.isSame(dayDatePointer, "month")
                            || (this.minDate && dayDatePointer < this.parsedMinDate)
                            || (this.maxDate && dayDatePointer > this.parsedMaxDate),
                    }];
                dayDatePointer = moment(dayDatePointer.add(1, "days"));
            } while (weekDatePointer.isSame(dayDatePointer, "week"));
            calendar = [...calendar, row];
            weekDatePointer = moment(weekDatePointer.add(1, "weeks"));
        } while (this.pointerDate.isSame(dayDatePointer, "month"));
        return calendar;
    }
    previousMonth() {
        this.pointerDate = moment(this.pointerDate.subtract(1, "months"));
    }
    nextMonth() {
        this.pointerDate = moment(this.pointerDate.add(1, "months"));
    }
    handleYearSelect(event) {
        this.pointerDate = moment(this.pointerDate.year(event.target.value));
    }
    handleMonthSelect(event) {
        this.pointerDate = moment(this.pointerDate.month(parseInt(event.target.value, 10)));
    }
    async selectDate(cell) {
        if (!cell.isDisabled && !cell.isOutdated) {
            this.isPristine = false;
            this.selectedDate = moment(cell.date);
            this.pointerDate = moment(cell.date);
            this.balChangeEventEmitter.emit(this.selectedDate.format(Datepicker.FORMAT));
            this.value = this.selectedDate.format(Datepicker.FORMAT);
            if (this.closeOnSelect) {
                await this.close();
            }
        }
    }
    render() {
        return (h(Host, null,
            h("div", { class: "datepicker control" },
                h("bal-dropdown", { expanded: true, fixed: false, inverted: this.inverted, value: { value: this.value, label: this.formatLabel(this.value) }, readonly: true, disabled: this.disabled, placeholder: this.placeholder, onBalBlur: this.balBlur.emit.bind(this), triggerIcon: "date", ref: el => this.dropDownElement = el },
                    h("div", { class: "datepicker-popup" },
                        h("header", { class: "datepicker-header" },
                            h("div", { class: "pagination field is-centered" },
                                h("a", { role: "button", onClick: () => this.previousMonth(), class: "pagination-previous" },
                                    h("bal-icon", { name: "nav-go-left", size: "large" })),
                                h("a", { role: "button", onClick: () => this.nextMonth(), class: "pagination-next" },
                                    h("bal-icon", { name: "nav-go-right", size: "large" })),
                                h("div", { class: "pagination-list" },
                                    h("div", { class: "field has-addons" },
                                        h("div", { class: "control month-select" },
                                            h("span", { class: "select" },
                                                h("select", { onInput: (event) => this.handleMonthSelect(event) }, moment.months().map((month, index) => h("option", { value: index, selected: this.pointerDate.month() === index }, month))))),
                                        h("div", { class: "control year-select" },
                                            h("span", { class: "select" },
                                                h("select", { onInput: (event) => this.handleYearSelect(event) }, this.years.map((year) => h("option", { value: year, selected: this.pointerDate.year() === year }, year))))))))),
                        h("div", { class: "datepicker-content" },
                            h("section", { class: "datepicker-table" },
                                h("header", { class: "datepicker-header" }, this.weekdays.map((weekday) => h("div", { class: "datepicker-cell" }, weekday))),
                                h("div", { class: "datepicker-body" }, this.calendarGrid.map(row => h("div", { class: "datepicker-row" }, row.map(cell => h("div", { onClick: () => this.selectDate(cell), "data-date": cell.dateString, class: [
                                        "datepicker-cell",
                                        cell.isToday ? "is-today" : "",
                                        cell.isSelected ? "is-selected" : "",
                                        cell.isOutdated ? "is-outdated" : "",
                                        cell.isDisabled ? "is-disabled" : "",
                                        !cell.isOutdated && !cell.isDisabled ? "is-selectable" : "",
                                    ].join(" ") }, cell.label)))))),
                            h("slot", null)))))));
    }
    static get is() { return "bal-datepicker"; }
    static get originalStyleUrls() { return {
        "$": ["datepicker.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["datepicker.css"]
    }; }
    static get properties() { return {
        "language": {
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
                "text": "Language of the datepicker. Possible values are `de`, `fr`,`it` or `en`."
            },
            "attribute": "language",
            "reflect": false,
            "defaultValue": "\"de\""
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
                "text": "Placeholder text to render if no date has been selected."
            },
            "attribute": "placeholder",
            "reflect": false,
            "defaultValue": "\"Click to select...\""
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
                "text": "Disable the input"
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
                "text": "If `true` the datepicker can be used on blue background."
            },
            "attribute": "inverted",
            "reflect": false,
            "defaultValue": "false"
        },
        "maxDate": {
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
                "text": "Latest date available for selection"
            },
            "attribute": "max-date",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "minDate": {
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
                "text": "Earliest date available for selection"
            },
            "attribute": "min-date",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "maxYear": {
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
                "text": "Latest year available for selection"
            },
            "attribute": "max-year",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "closeOnSelect": {
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
                "text": "Closes the datepicker dropdown after selection"
            },
            "attribute": "close-on-select",
            "reflect": false,
            "defaultValue": "true"
        },
        "minYear": {
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
                "text": "Earliest year available for selection"
            },
            "attribute": "min-year",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "value": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The value of the datepicker with the format `dd.MM.yyyy`."
            },
            "attribute": "value",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "filter": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "DateCallback",
                "resolved": "(date: string) => boolean",
                "references": {
                    "DateCallback": {
                        "location": "local"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Callback to determine which date in the datepicker should be selectable."
            },
            "defaultValue": "(_) => true"
        },
        "formatLabel": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "FormatLabelCallback",
                "resolved": "(date: string) => string",
                "references": {
                    "FormatLabelCallback": {
                        "location": "local"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Callback to format or modify a changed value pefore display."
            },
            "defaultValue": "(_) => _"
        }
    }; }
    static get states() { return {
        "isPristine": {},
        "selectedDate": {},
        "pointerDate": {}
    }; }
    static get events() { return [{
            "method": "balChangeEventEmitter",
            "name": "balChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Triggers when the value of the datepicker is changed"
            },
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
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
        }]; }
    static get methods() { return {
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
                "text": "Open the datepicker dropdown",
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
                "text": "Close the datepicker dropdown",
                "tags": []
            }
        }
    }; }
    static get watchers() { return [{
            "propName": "value",
            "methodName": "valueWatcher"
        }]; }
}
Datepicker.FORMAT = "DD.MM.YYYY";
