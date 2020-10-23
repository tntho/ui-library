import { r as registerInstance, c as createEvent, h, H as Host } from './index-ec84eadc.js';

const timeinputCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}input.input,textarea.textarea{border-top:none;border-left:none;border-right:none;border-width:1px;border-radius:0;-webkit-box-shadow:none;box-shadow:none;padding:1px 0 2px 0;font-size:1.125rem;outline:none;color:#222222}input.input:focus,input.input.is-focused,textarea.textarea:focus,textarea.textarea.is-focused{border-width:2px;border-color:#003399;padding:1px 0 1px 0;-webkit-box-shadow:none;box-shadow:none}input.input:disabled,textarea.textarea:disabled{padding-left:5px;padding-right:5px}input.input.is-inverted,textarea.textarea.is-inverted{color:#ffffff;border-bottom-color:#99add6}input.input.is-inverted:focus,input.input.is-inverted.is-focused,textarea.textarea.is-inverted:focus,textarea.textarea.is-inverted.is-focused{border-width:2px;border-bottom-color:#ffffff}input.input.is-inverted:disabled,textarea.textarea.is-inverted:disabled{background-color:#002b82}input.input.is-inverted::-webkit-input-placeholder,textarea.textarea.is-inverted::-webkit-input-placeholder{color:#7188b8}.control.has-icons-right .input,.control.has-icons-right .select select{padding-right:31px !important}.control.has-icons-right .icon{top:5px !important;height:31px !important;width:31px !important}label.label bal-hint{margin-left:8px}:host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host .stepper{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}:host .stepper .stepper-btn{border:none;outline:0;padding:5px 0 5px 0;background-color:transparent;cursor:pointer}:host .stepper .stepper-btn:disabled{cursor:not-allowed}:host .stepper .stepper-btn:disabled *{color:#99add6;stroke:#99add6}:host .stepper .time-box{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-top:none;border-left:none;border-right:none;border-width:1px;border-radius:0;-webkit-box-shadow:none;box-shadow:none;padding-left:5px;padding-right:5px;font-size:1.125rem;outline:none;color:#222222;min-height:45px}:host .stepper .time-box:focus,:host .stepper .time-box.is-focused{border-width:2px;border-color:#003399;-webkit-box-shadow:none;box-shadow:none}:host .stepper .time-box:disabled{background-color:#f0fbff;cursor:not-allowed}:host .time-divider{-ms-flex-align:stretch;align-items:stretch;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;height:100%}:host .time-divider:after,:host .time-divider:before{content:\"\";width:0.3em;height:0.3em;margin-top:0.15em;margin-bottom:0.15em;margin-left:0.35em;margin-right:0.35em;border-radius:50%;background-color:#003399}:host .is-inverted:after,:host .is-inverted:before{background-color:#ffffff}";

const Timeinput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.balTimeinputChange = createEvent(this, "balTimeinputChange", 7);
        this.balBlur = createEvent(this, "balBlur", 2);
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
        return (h(Host, null, h("div", { class: [
                "stepper",
                this.inverted ? "is-inverted" : ""
            ].join(" ") }, h("button", { class: "stepper-btn", onMouseDown: () => this.repeatOnHold(() => this.incHour()), onMouseUp: () => this.onMouseLeafOrUp(), onMouseLeave: () => this.onMouseLeafOrUp(), disabled: this.disabled || this.hour >= this.maxHour, tabindex: "-1" }, h("svg", { width: "15px", height: "10px", version: "1.1" }, h("g", { "stroke-width": "3.25", fill: "none", stroke: this.inverted ? "#ffffff" : "#003399" }, h("polyline", { points: "2,8 7.5,2 13,8" })))), h("select", { class: "input time-box", onBlur: this.balBlur.emit.bind(this), onChange: this.onHourChange.bind(this), disabled: this.disabled }, h("option", { value: "", disabled: true, selected: this.hour === undefined }, "--"), this.hourOptions.map(hourOption => h("option", { selected: hourOption.value === Timeinput.formatTimeBoxValue(this.hour), disabled: hourOption.disabled, value: hourOption.value }, hourOption.value))), h("button", { class: "stepper-btn", onMouseDown: () => this.repeatOnHold(() => this.decHour()), onMouseUp: () => this.onMouseLeafOrUp(), onMouseLeave: () => this.onMouseLeafOrUp(), disabled: this.disabled || this.hour <= this.minHour || this.hour === undefined, tabindex: "-1" }, h("svg", { width: "15px", height: "10px", version: "1.1" }, h("g", { "stroke-width": "3.25", fill: "none", stroke: this.inverted ? "#ffffff" : "#003399" }, h("polyline", { points: "2,2 7.5,8 13,2" }))))), h("div", { class: [
                "time-divider",
                this.inverted ? "is-inverted" : ""
            ].join(" ") }), h("div", { class: "stepper" }, h("button", { class: "stepper-btn", onMouseDown: () => this.repeatOnHold(() => this.incMinute()), onMouseUp: () => this.onMouseLeafOrUp(), onMouseLeave: () => this.onMouseLeafOrUp(), disabled: this.disabled || this.minute >= this.currentMaxMinute, tabindex: "-1" }, h("svg", { width: "15px", height: "10px", version: "1.1" }, h("g", { "stroke-width": "3.25", fill: "none", stroke: this.inverted ? "#ffffff" : "#003399" }, h("polyline", { points: "2,8 7.5,2 13,8" })))), h("select", { class: "time-box", onBlur: this.balBlur.emit.bind(this), onChange: this.onMinuteChange.bind(this), disabled: this.disabled }, h("option", { value: "", disabled: true, selected: this.minute === undefined }, "--"), this.minuteOptions.map(minuteOption => h("option", { selected: minuteOption.value === Timeinput.formatTimeBoxValue(this.minute), disabled: minuteOption.disabled, value: minuteOption.value }, minuteOption.value))), h("button", { class: "stepper-btn", onMouseDown: () => this.repeatOnHold(() => this.decMinute()), onMouseUp: () => this.onMouseLeafOrUp(), onMouseLeave: () => this.onMouseLeafOrUp(), disabled: this.disabled || this.minute <= this.currentMinMinute || this.minute === undefined, tabindex: "-1" }, h("svg", { width: "15px", height: "10px", version: "1.1" }, h("g", { "stroke-width": "3.25", fill: "none", stroke: this.inverted ? "#ffffff" : "#003399" }, h("polyline", { points: "2,2 7.5,8 13,2" })))))));
    }
    static get watchers() { return {
        "value": ["valueWatcher"],
        "maxTime": ["maxTimeWatcher"],
        "minTime": ["minTimeWatcher"]
    }; }
};
Timeinput.CLOCK_PATTERN = /^([0-9]{1,2}):([0-9]{1,2})$/;
Timeinput.POS_NUM_PATTERN = /^([0-9]{0,2})$/;
Timeinput.ZERO = 0;
Timeinput.MAX_HOUR = 23;
Timeinput.MAX_MINUTE = 59;
Timeinput.style = timeinputCss;

export { Timeinput as T };
