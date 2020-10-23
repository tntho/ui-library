var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, c as createEvent, h, H as Host } from './index-ec84eadc.js';
import { T as Timeinput } from './timeinput-3539f6c5.js';
var datetimepickerCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}:host{display:block;position:relative}.bal-datetimepicker-panel{padding-top:12px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.bal-datetimepicker-panel .bal-datetimepicker-timeinput{-ms-flex-positive:1;flex-grow:1}";
var Datetimepicker = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.balDatetimeChange = createEvent(this, "balDatetimeChange", 7);
        this.balBlur = createEvent(this, "balBlur", 2);
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
        this.dateFilter = function (_) { return true; };
    }
    class_1.prototype.minDatetimeWatcher = function (newValue) {
        this.parseMinDatetime(newValue);
    };
    class_1.prototype.maxDatetimeWatcher = function (newValue) {
        this.parseMaxDatetime(newValue);
    };
    class_1.prototype.valueWatcher = function (newValue) {
        this.parseValue(newValue);
    };
    class_1.prototype.componentWillLoad = function () {
        if (this.minDatetime) {
            this.parseMinDatetime(this.minDatetime);
        }
        if (this.maxDatetime) {
            this.parseMaxDatetime(this.maxDatetime);
        }
        if (this.value) {
            this.parseValue(this.value);
        }
    };
    /**
     * Open the timepicke dropdown
     */
    class_1.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.datepickerElement.open()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Close the timepicke dropdown
     */
    class_1.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.datepickerElement.close()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.parseMinDatetime = function (value) {
        var minMatch = Datetimepicker.FORMAT.exec(value);
        if (minMatch !== null) {
            this.minDate = minMatch[1];
            this.minTime = minMatch[2];
            this.updateCurrenTimeBound();
            return;
        }
        this.minDate = "";
        this.minTime = "";
    };
    class_1.prototype.parseMaxDatetime = function (value) {
        var maxMatch = Datetimepicker.FORMAT.exec(value);
        if (maxMatch !== null) {
            this.maxDate = maxMatch[1];
            this.maxTime = maxMatch[2];
            this.updateCurrenTimeBound();
            return;
        }
        this.maxDate = "";
        this.maxTime = "";
    };
    class_1.prototype.parseValue = function (value) {
        this.isPristine = false;
        var matches = Datetimepicker.FORMAT.exec(value);
        if (matches !== null) {
            this.date = matches[1];
            this.time = matches[2];
            this.updateCurrenTimeBound();
            return;
        }
        this.date = undefined;
        this.time = undefined;
    };
    class_1.prototype.selectDate = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.date = event.detail;
                this.updateCurrenTimeBound();
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.changeTime = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.time = event.detail;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.save = function () {
        this.value = Datetimepicker.formatValue(this.date, this.time);
        this.balDatetimeChange.emit(this.value);
        this.datepickerElement.close();
    };
    class_1.prototype.abort = function () {
        this.parseValue(this.value);
        this.datepickerElement.close();
    };
    class_1.prototype.onBlur = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.parseValue(this.value);
                this.balBlur.emit();
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.updateCurrenTimeBound = function () {
        this.currentMinTime = "00:00";
        this.currentMaxTime = "23:59";
        if (this.date === this.minDate) {
            this.currentMinTime = this.minTime;
        }
        if (this.date === this.maxDate) {
            this.currentMaxTime = this.maxTime;
        }
        if (this.time !== undefined) {
            var time = this.toSecondCount(this.time);
            var currentMinTime = this.toSecondCount(this.currentMinTime);
            var currentMaxTime = this.toSecondCount(this.currentMaxTime);
            this.time = this.toClockString(Math.min(currentMaxTime, Math.max(currentMinTime, time)));
        }
    };
    class_1.prototype.toSecondCount = function (val) {
        var timeMatch = Timeinput.CLOCK_PATTERN.exec(val);
        if (timeMatch === null) {
            return 0;
        }
        var hour = parseInt(timeMatch[1], 10);
        var minute = parseInt(timeMatch[2], 10);
        return hour * 60 + minute;
    };
    class_1.prototype.toClockString = function (val) {
        return Timeinput.formatTimeBoxValue(Math.floor(val / 60)) + ":" + Timeinput.formatTimeBoxValue(val % 60);
    };
    class_1.prototype.formatDatepickerLabel = function (date) {
        if (date !== undefined && date !== "" && this.time !== undefined) {
            return Datetimepicker.formatValue(date, this.time);
        }
        if (date !== undefined) {
            return date;
        }
        return this.time;
    };
    class_1.formatValue = function (date, time) {
        return date + " " + time;
    };
    class_1.prototype.canSave = function () {
        return this.date !== undefined && this.time !== undefined;
    };
    class_1.prototype.onKeyDown = function (event) {
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
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (h(Host, null, h("bal-datepicker", { value: this.date, disabled: this.disabled, inverted: this.inverted, placeholder: this.placeholder, maxDate: this.maxDate, minDate: this.minDate, maxYear: this.maxYear, minYear: this.minYear, closeOnSelect: false, filter: this.dateFilter, formatLabel: this.formatDatepickerLabel.bind(this), onBalChange: this.selectDate.bind(this), onBalBlur: this.onBlur.bind(this), ref: function (el) { return _this.datepickerElement = el; } }, h("div", { class: "bal-datetimepicker-panel" }, h("bal-button", { disabled: this.disabled, onClick: function () { return _this.abort(); }, type: "is-info", size: "is-small", "is-square": true, outlined: true }, h("bal-icon", { name: "close-big", size: "medium" })), h("bal-timeinput", { class: "bal-datetimepicker-timeinput", value: this.time, minTime: this.currentMinTime, maxTime: this.currentMaxTime, disabled: this.disabled, onBalTimeinputChange: this.changeTime.bind(this), ref: function (el) { return _this.timeinputElement = el; } }), h("bal-button", { disabled: this.disabled || !this.canSave(), onClick: function () { return _this.save(); }, type: "is-info", size: "is-small", "is-square": true, outlined: true, ref: function (el) { return _this.saveButtonElement = el; } }, h("bal-icon", { name: "check", size: "medium" }))))));
    };
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "minDatetime": ["minDatetimeWatcher"],
                "maxDatetime": ["maxDatetimeWatcher"],
                "value": ["valueWatcher"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return class_1;
}());
Datetimepicker.FORMAT = /^([0-9]{2}.[0-9]{2}.[0-9]{4}) ([0-9]{1,2}:[0-9]{1,2})$/;
Datetimepicker.style = datetimepickerCss;
export { Datetimepicker as bal_datetimepicker };
