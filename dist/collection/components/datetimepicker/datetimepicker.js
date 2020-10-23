import { Component, Host, h, Listen, State, Prop, Watch, Event, Method } from "@stencil/core";
import { Timeinput } from "../timeinput/timeinput";
export class Datetimepicker {
    constructor() {
        this.isPristine = true;
        /**
         * Placeholder text to render if no date has been selected.
         */
        this.placeholder = "Click to select...";
        /**
         * Disable the input
         */
        this.disabled = false;
        /**
         * If `true` the datetimepicker can be used on blue background.
         */
        this.inverted = false;
        /**
         * Latest date available for selection
         */
        this.maxDatetime = "";
        this.maxDate = "";
        this.maxTime = "";
        this.currentMaxTime = "";
        /**
         * Earliest datetime available for selection
         */
        this.minDatetime = "";
        this.minDate = "";
        this.minTime = "";
        this.currentMinTime = "";
        /**
         * Latest year available for selection
         */
        this.maxYear = "";
        /**
         * Earliest year available for selection
         */
        this.minYear = "";
        /**
         * The value of the timepicke with the format `dd.MM.yyyy`.
         */
        this.value = "";
        /**
         * Callback to determine which date in the datetimepicker should be selectable.
         */
        this.dateFilter = (_) => true;
    }
    minDatetimeWatcher(newValue) {
        this.parseMinDatetime(newValue);
    }
    maxDatetimeWatcher(newValue) {
        this.parseMaxDatetime(newValue);
    }
    valueWatcher(newValue) {
        this.parseValue(newValue);
    }
    componentWillLoad() {
        if (this.minDatetime) {
            this.parseMinDatetime(this.minDatetime);
        }
        if (this.maxDatetime) {
            this.parseMaxDatetime(this.maxDatetime);
        }
        if (this.value) {
            this.parseValue(this.value);
        }
    }
    /**
     * Open the timepicke dropdown
     */
    async open() {
        await this.datepickerElement.open();
    }
    /**
     * Close the timepicke dropdown
     */
    async close() {
        await this.datepickerElement.close();
    }
    parseMinDatetime(value) {
        const minMatch = Datetimepicker.FORMAT.exec(value);
        if (minMatch !== null) {
            this.minDate = minMatch[1];
            this.minTime = minMatch[2];
            this.updateCurrenTimeBound();
            return;
        }
        this.minDate = "";
        this.minTime = "";
    }
    parseMaxDatetime(value) {
        const maxMatch = Datetimepicker.FORMAT.exec(value);
        if (maxMatch !== null) {
            this.maxDate = maxMatch[1];
            this.maxTime = maxMatch[2];
            this.updateCurrenTimeBound();
            return;
        }
        this.maxDate = "";
        this.maxTime = "";
    }
    parseValue(value) {
        this.isPristine = false;
        const matches = Datetimepicker.FORMAT.exec(value);
        if (matches !== null) {
            this.date = matches[1];
            this.time = matches[2];
            this.updateCurrenTimeBound();
            return;
        }
        this.date = undefined;
        this.time = undefined;
    }
    async selectDate(event) {
        this.date = event.detail;
        this.updateCurrenTimeBound();
    }
    async changeTime(event) {
        this.time = event.detail;
    }
    save() {
        this.value = Datetimepicker.formatValue(this.date, this.time);
        this.balDatetimeChange.emit(this.value);
        this.datepickerElement.close();
    }
    abort() {
        this.parseValue(this.value);
        this.datepickerElement.close();
    }
    async onBlur() {
        this.parseValue(this.value);
        this.balBlur.emit();
    }
    updateCurrenTimeBound() {
        this.currentMinTime = "00:00";
        this.currentMaxTime = "23:59";
        if (this.date === this.minDate) {
            this.currentMinTime = this.minTime;
        }
        if (this.date === this.maxDate) {
            this.currentMaxTime = this.maxTime;
        }
        if (this.time !== undefined) {
            const time = this.toSecondCount(this.time);
            const currentMinTime = this.toSecondCount(this.currentMinTime);
            const currentMaxTime = this.toSecondCount(this.currentMaxTime);
            this.time = this.toClockString(Math.min(currentMaxTime, Math.max(currentMinTime, time)));
        }
    }
    toSecondCount(val) {
        const timeMatch = Timeinput.CLOCK_PATTERN.exec(val);
        if (timeMatch === null) {
            return 0;
        }
        const hour = parseInt(timeMatch[1], 10);
        const minute = parseInt(timeMatch[2], 10);
        return hour * 60 + minute;
    }
    toClockString(val) {
        return Timeinput.formatTimeBoxValue(Math.floor(val / 60)) + ":" + Timeinput.formatTimeBoxValue(val % 60);
    }
    formatDatepickerLabel(date) {
        if (date !== undefined && date !== "" && this.time !== undefined) {
            return Datetimepicker.formatValue(date, this.time);
        }
        if (date !== undefined) {
            return date;
        }
        return this.time;
    }
    static formatValue(date, time) {
        return date + " " + time;
    }
    canSave() {
        return this.date !== undefined && this.time !== undefined;
    }
    onKeyDown(event) {
        if (event.key === "Enter") {
            if (this.canSave()) {
                this.save();
                return;
            }
            this.abort();
        }
        if (event.key === "ESC") {
            this.abort();
        }
    }
    render() {
        return (h(Host, null,
            h("bal-datepicker", { value: this.date, disabled: this.disabled, inverted: this.inverted, placeholder: this.placeholder, maxDate: this.maxDate, minDate: this.minDate, maxYear: this.maxYear, minYear: this.minYear, closeOnSelect: false, filter: this.dateFilter, formatLabel: this.formatDatepickerLabel.bind(this), onBalChange: this.selectDate.bind(this), onBalBlur: this.onBlur.bind(this), ref: el => this.datepickerElement = el },
                h("div", { class: "bal-datetimepicker-panel" },
                    h("bal-button", { disabled: this.disabled, onClick: () => this.abort(), type: "is-info", size: "is-small", "is-square": true, outlined: true },
                        h("bal-icon", { name: "close-big", size: "medium" })),
                    h("bal-timeinput", { class: "bal-datetimepicker-timeinput", value: this.time, minTime: this.currentMinTime, maxTime: this.currentMaxTime, disabled: this.disabled, onBalTimeinputChange: this.changeTime.bind(this), ref: el => this.timeinputElement = el }),
                    h("bal-button", { disabled: this.disabled || !this.canSave(), onClick: () => this.save(), type: "is-info", size: "is-small", "is-square": true, outlined: true, ref: el => this.saveButtonElement = el },
                        h("bal-icon", { name: "check", size: "medium" }))))));
    }
    static get is() { return "bal-datetimepicker"; }
    static get originalStyleUrls() { return {
        "$": ["datetimepicker.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["datetimepicker.css"]
    }; }
    static get properties() { return {
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
                "text": "If `true` the datetimepicker can be used on blue background."
            },
            "attribute": "inverted",
            "reflect": false,
            "defaultValue": "false"
        },
        "maxDatetime": {
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
            "attribute": "max-datetime",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "minDatetime": {
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
                "text": "Earliest datetime available for selection"
            },
            "attribute": "min-datetime",
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
                "text": "The value of the timepicke with the format `dd.MM.yyyy`."
            },
            "attribute": "value",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "dateFilter": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "DateCallback",
                "resolved": "(date: string) => boolean",
                "references": {
                    "DateCallback": {
                        "location": "import",
                        "path": "../datepicker/datepicker"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Callback to determine which date in the datetimepicker should be selectable."
            },
            "defaultValue": "(_) => true"
        }
    }; }
    static get states() { return {
        "isPristine": {},
        "date": {},
        "time": {}
    }; }
    static get events() { return [{
            "method": "balDatetimeChange",
            "name": "balDatetimeChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Triggers when the value of the timepicke is changed"
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
                "text": "Open the timepicke dropdown",
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
                "text": "Close the timepicke dropdown",
                "tags": []
            }
        }
    }; }
    static get watchers() { return [{
            "propName": "minDatetime",
            "methodName": "minDatetimeWatcher"
        }, {
            "propName": "maxDatetime",
            "methodName": "maxDatetimeWatcher"
        }, {
            "propName": "value",
            "methodName": "valueWatcher"
        }]; }
    static get listeners() { return [{
            "name": "keydown",
            "method": "onKeyDown",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
Datetimepicker.FORMAT = /^([0-9]{2}.[0-9]{2}.[0-9]{4}) ([0-9]{1,2}:[0-9]{1,2})$/;
