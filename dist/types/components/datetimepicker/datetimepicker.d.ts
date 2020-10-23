import { EventEmitter } from "../../stencil-public-runtime";
import { DateCallback } from "../datepicker/datepicker";
export declare class Datetimepicker {
    static FORMAT: RegExp;
    datepickerElement: HTMLBalDatepickerElement;
    timeinputElement: HTMLBalTimeinputElement;
    saveButtonElement: HTMLBalButtonElement;
    isPristine: boolean;
    date: string;
    time: string;
    /**
     * Placeholder text to render if no date has been selected.
     */
    placeholder: string;
    /**
     * Disable the input
     */
    disabled: boolean;
    /**
     * If `true` the datetimepicker can be used on blue background.
     */
    inverted: boolean;
    /**
     * Latest date available for selection
     */
    maxDatetime: string;
    maxDate: string;
    maxTime: string;
    currentMaxTime: string;
    /**
     * Earliest datetime available for selection
     */
    minDatetime: string;
    minDate: string;
    minTime: string;
    currentMinTime: string;
    /**
     * Latest year available for selection
     */
    maxYear: string;
    /**
     * Earliest year available for selection
     */
    minYear: string;
    /**
     * The value of the timepicke with the format `dd.MM.yyyy`.
     */
    value: string;
    /**
     * Callback to determine which date in the datetimepicker should be selectable.
     */
    dateFilter: DateCallback;
    /**
     * Triggers when the value of the timepicke is changed
     */
    balDatetimeChange: EventEmitter<string>;
    /**
     * Emitted when the toggle loses focus.
     */
    balBlur: EventEmitter<void>;
    minDatetimeWatcher(newValue: string): void;
    maxDatetimeWatcher(newValue: string): void;
    valueWatcher(newValue: string): void;
    componentWillLoad(): void;
    /**
     * Open the timepicke dropdown
     */
    open(): Promise<void>;
    /**
     * Close the timepicke dropdown
     */
    close(): Promise<void>;
    private parseMinDatetime;
    private parseMaxDatetime;
    private parseValue;
    private selectDate;
    private changeTime;
    private save;
    private abort;
    private onBlur;
    private updateCurrenTimeBound;
    private toSecondCount;
    private toClockString;
    private formatDatepickerLabel;
    private static formatValue;
    private canSave;
    onKeyDown(event: KeyboardEvent): void;
    render(): any;
}
