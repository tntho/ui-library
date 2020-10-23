import { Component, Event, h, Host, Prop, State, Watch } from "@stencil/core";
export class Timeinput {
    constructor() {
        this.timeoutHandler = undefined;
        this.isPristine = true;
        this.minHour = Timeinput.ZERO;
        this.minMinute = Timeinput.ZERO;
        this.currentMinMinute = Timeinput.ZERO;
        this.maxHour = Timeinput.MAX_HOUR;
        this.maxMinute = Timeinput.MAX_MINUTE;
        this.currentMaxMinute = Timeinput.MAX_MINUTE;
        /**
         * The value of the datepicker with the format `hh:mm`.
         */
        this.value = "";
        /**
         * Latest date available for selection
         */
        this.maxTime = "";
        /**
         * Earliest date available for selection
         */
        this.minTime = "";
        /**
         * If `true` the timeinput can be used on blue background.
         */
        this.inverted = false;
    }
    valueWatcher(newValue) {
        this.parseValue(newValue);
    }
    maxTimeWatcher(newValue) {
        this.parseMaxTime(newValue);
    }
    minTimeWatcher(newValue) {
        this.parseMinTime(newValue);
    }
    componentWillLoad() {
        if (this.maxTime) {
            this.parseMaxTime(this.maxTime);
        }
        if (this.minTime) {
            this.parseMinTime(this.minTime);
        }
        if (this.value) {
            this.parseValue(this.value);
        }
    }
    parseMaxTime(value) {
        const maxMatch = Timeinput.CLOCK_PATTERN.exec(value);
        if (maxMatch !== null) {
            this.maxHour = Math.min(Timeinput.MAX_HOUR, parseInt(maxMatch[1], 10));
            this.maxMinute = Math.min(Timeinput.MAX_MINUTE, parseInt(maxMatch[2], 10));
            this.minHour = Math.min(this.maxHour, this.minHour);
            this.updateCurrentMinuteBound();
            return;
        }
        this.maxHour = Timeinput.MAX_HOUR;
        this.maxMinute = Timeinput.MAX_MINUTE;
        this.currentMaxMinute = Timeinput.MAX_MINUTE;
    }
    parseMinTime(value) {
        const minMatch = Timeinput.CLOCK_PATTERN.exec(value);
        if (minMatch !== null) {
            this.minHour = Math.min(this.maxHour, parseInt(minMatch[1], 10));
            this.minMinute = Math.min(Timeinput.MAX_MINUTE, parseInt(minMatch[2], 10));
            this.maxHour = Math.max(this.maxHour, this.minHour);
            this.updateCurrentMinuteBound();
            return;
        }
        this.minHour = Timeinput.ZERO;
        this.minMinute = Timeinput.ZERO;
        this.currentMinMinute = Timeinput.ZERO;
    }
    parseValue(value) {
        this.isPristine = false;
        const valueMatch = Timeinput.CLOCK_PATTERN.exec(value);
        if (valueMatch !== null) {
            this.hour = Math.min(this.maxHour, Math.max(this.minHour, parseInt(valueMatch[1], 10)));
            this.updateCurrentMinuteBound();
            this.minute = Math.min(this.currentMaxMinute, Math.max(this.currentMinMinute, parseInt(valueMatch[2], 10)));
            return;
        }
        this.hour = undefined;
        this.minute = undefined;
    }
    updateCurrentMinuteBound() {
        this.currentMinMinute = Timeinput.ZERO;
        this.currentMaxMinute = Timeinput.MAX_MINUTE;
        if (this.hour === this.maxHour) {
            this.currentMaxMinute = this.maxMinute;
        }
        if (this.hour === this.minHour) {
            this.currentMinMinute = this.minMinute;
        }
    }
    incHour() {
        var _a;
        if (this.hour >= this.maxHour) {
            return false;
        }
        this.hour = ((_a = this.hour) !== null && _a !== void 0 ? _a : this.minHour) + 1;
        this.updateCurrentMinuteBound();
        this.onValueChange();
        return true;
    }
    decHour() {
        var _a;
        if (this.hour <= this.minHour) {
            return false;
        }
        this.hour = ((_a = this.hour) !== null && _a !== void 0 ? _a : this.minHour) - 1;
        this.updateCurrentMinuteBound();
        this.onValueChange();
        return true;
    }
    incMinute() {
        var _a;
        if (this.minute >= this.currentMaxMinute) {
            return false;
        }
        this.minute = ((_a = this.minute) !== null && _a !== void 0 ? _a : this.currentMinMinute) + 1;
        this.onValueChange();
        return true;
    }
    decMinute() {
        var _a;
        if (this.minute <= this.currentMinMinute) {
            return false;
        }
        this.minute = ((_a = this.minute) !== null && _a !== void 0 ? _a : this.currentMinMinute) - 1;
        this.onValueChange();
        return true;
    }
    async onHourChange(event) {
        const inputValue = event.target.value;
        const val = parseInt(inputValue, 10);
        this.hour = isNaN(val) ? undefined : val;
        this.updateCurrentMinuteBound();
        this.onValueChange();
    }
    async onMinuteChange(event) {
        const inputValue = event.target.value;
        const val = parseInt(inputValue, 10);
        this.minute = isNaN(val) ? undefined : val;
        this.onValueChange();
    }
    repeatOnHold(action, start = 500, speedup = 1.5) {
        const canContinue = action();
        if (!canContinue) {
            this.onMouseLeafOrUp();
            return;
        }
        this.timeoutHandler = setTimeout(() => this.repeatOnHold(action, start / speedup, speedup), start);
    }
    onMouseLeafOrUp() {
        if (this.timeoutHandler !== undefined) {
            clearTimeout(this.timeoutHandler);
            this.timeoutHandler = undefined;
            this.balBlur.emit();
        }
    }
    onValueChange() {
        if (this.hour !== undefined && this.minute !== undefined) {
            this.minute = Math.min(this.currentMaxMinute, Math.max(this.currentMinMinute, this.minute));
            this.value = Timeinput.formatTimeBoxValue(this.hour) + ":" + Timeinput.formatTimeBoxValue(this.minute);
            this.balTimeinputChange.emit(this.value);
        }
    }
    get hourOptions() {
        const options = [];
        for (const i of Array.from(Array(Timeinput.MAX_HOUR + 1).keys())) {
            options.push({
                value: Timeinput.formatTimeBoxValue(i),
                disabled: i < this.minHour || i > this.maxHour
            });
        }
        return options;
    }
    get minuteOptions() {
        const options = [];
        for (const i of Array.from(Array(Timeinput.MAX_MINUTE + 1).keys())) {
            options.push({
                value: Timeinput.formatTimeBoxValue(i),
                disabled: (this.hour !== undefined && ((this.hour === this.minHour && i < this.minMinute) ||
                    (this.hour === this.maxHour && i > this.maxMinute)))
            });
        }
        return options;
    }
    static formatTimeBoxValue(val) {
        var _a;
        return (_a = val === null || val === void 0 ? void 0 : val.toString()) === null || _a === void 0 ? void 0 : _a.padStart(2, "0");
    }
    render() {
        return (h(Host, null,
            h("div", { class: [
                    "stepper",
                    this.inverted ? "is-inverted" : ""
                ].join(" ") },
                h("button", { class: "stepper-btn", onMouseDown: () => this.repeatOnHold(() => this.incHour()), onMouseUp: () => this.onMouseLeafOrUp(), onMouseLeave: () => this.onMouseLeafOrUp(), disabled: this.disabled || this.hour >= this.maxHour, tabindex: "-1" },
                    h("svg", { width: "15px", height: "10px", version: "1.1" },
                        h("g", { "stroke-width": "3.25", fill: "none", stroke: this.inverted ? "#ffffff" : "#003399" },
                            h("polyline", { points: "2,8 7.5,2 13,8" })))),
                h("select", { class: "input time-box", onBlur: this.balBlur.emit.bind(this), onChange: this.onHourChange.bind(this), disabled: this.disabled },
                    h("option", { value: "", disabled: true, selected: this.hour === undefined }, "--"),
                    this.hourOptions.map(hourOption => h("option", { selected: hourOption.value === Timeinput.formatTimeBoxValue(this.hour), disabled: hourOption.disabled, value: hourOption.value }, hourOption.value))),
                h("button", { class: "stepper-btn", onMouseDown: () => this.repeatOnHold(() => this.decHour()), onMouseUp: () => this.onMouseLeafOrUp(), onMouseLeave: () => this.onMouseLeafOrUp(), disabled: this.disabled || this.hour <= this.minHour || this.hour === undefined, tabindex: "-1" },
                    h("svg", { width: "15px", height: "10px", version: "1.1" },
                        h("g", { "stroke-width": "3.25", fill: "none", stroke: this.inverted ? "#ffffff" : "#003399" },
                            h("polyline", { points: "2,2 7.5,8 13,2" }))))),
            h("div", { class: [
                    "time-divider",
                    this.inverted ? "is-inverted" : ""
                ].join(" ") }),
            h("div", { class: "stepper" },
                h("button", { class: "stepper-btn", onMouseDown: () => this.repeatOnHold(() => this.incMinute()), onMouseUp: () => this.onMouseLeafOrUp(), onMouseLeave: () => this.onMouseLeafOrUp(), disabled: this.disabled || this.minute >= this.currentMaxMinute, tabindex: "-1" },
                    h("svg", { width: "15px", height: "10px", version: "1.1" },
                        h("g", { "stroke-width": "3.25", fill: "none", stroke: this.inverted ? "#ffffff" : "#003399" },
                            h("polyline", { points: "2,8 7.5,2 13,8" })))),
                h("select", { class: "time-box", onBlur: this.balBlur.emit.bind(this), onChange: this.onMinuteChange.bind(this), disabled: this.disabled },
                    h("option", { value: "", disabled: true, selected: this.minute === undefined }, "--"),
                    this.minuteOptions.map(minuteOption => h("option", { selected: minuteOption.value === Timeinput.formatTimeBoxValue(this.minute), disabled: minuteOption.disabled, value: minuteOption.value }, minuteOption.value))),
                h("button", { class: "stepper-btn", onMouseDown: () => this.repeatOnHold(() => this.decMinute()), onMouseUp: () => this.onMouseLeafOrUp(), onMouseLeave: () => this.onMouseLeafOrUp(), disabled: this.disabled || this.minute <= this.currentMinMinute || this.minute === undefined, tabindex: "-1" },
                    h("svg", { width: "15px", height: "10px", version: "1.1" },
                        h("g", { "stroke-width": "3.25", fill: "none", stroke: this.inverted ? "#ffffff" : "#003399" },
                            h("polyline", { points: "2,2 7.5,8 13,2" })))))));
    }
    static get is() { return "bal-timeinput"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["timeinput.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["timeinput.css"]
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
                "text": "If `true` the button is disabled"
            },
            "attribute": "disabled",
            "reflect": false
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
                "text": "The value of the datepicker with the format `hh:mm`."
            },
            "attribute": "value",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "maxTime": {
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
            "attribute": "max-time",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "minTime": {
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
            "attribute": "min-time",
            "reflect": false,
            "defaultValue": "\"\""
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
                "text": "If `true` the timeinput can be used on blue background."
            },
            "attribute": "inverted",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "isPristine": {},
        "hour": {},
        "minute": {},
        "minHour": {},
        "minMinute": {},
        "maxHour": {},
        "maxMinute": {}
    }; }
    static get events() { return [{
            "method": "balTimeinputChange",
            "name": "balTimeinputChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when either the hour or the minute input has changed.\r\nIt will not be triggert if either hour or time input has never been set (i.e. \"--\" is selected)."
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
                "text": "Emitted when either the hour or minute input field loses focus."
            },
            "complexType": {
                "original": "void",
                "resolved": "void",
                "references": {}
            }
        }]; }
    static get watchers() { return [{
            "propName": "value",
            "methodName": "valueWatcher"
        }, {
            "propName": "maxTime",
            "methodName": "maxTimeWatcher"
        }, {
            "propName": "minTime",
            "methodName": "minTimeWatcher"
        }]; }
}
Timeinput.CLOCK_PATTERN = /^([0-9]{1,2}):([0-9]{1,2})$/;
Timeinput.POS_NUM_PATTERN = /^([0-9]{0,2})$/;
Timeinput.ZERO = 0;
Timeinput.MAX_HOUR = 23;
Timeinput.MAX_MINUTE = 59;
