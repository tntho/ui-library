import { EventEmitter } from "../../stencil-public-runtime";
import moment from "moment";
interface CalendarCell {
    date: moment.Moment;
    label: string;
    dateString: string;
    isToday: boolean;
    isSelected: boolean;
    isDisabled: boolean;
    isOutdated: boolean;
}
export declare type DateCallback = (date: string) => boolean;
export declare type FormatLabelCallback = (date: string) => string;
export declare class Datepicker {
    static FORMAT: string;
    dropDownElement: HTMLBalDropdownElement;
    now: moment.Moment;
    isPristine: boolean;
    selectedDate: moment.Moment;
    pointerDate: moment.Moment;
    /**
     * Language of the datepicker. Possible values are `de`, `fr`,`it` or `en`.
     */
    language: string;
    /**
     * Placeholder text to render if no date has been selected.
     */
    placeholder: string;
    /**
     * Disable the input
     */
    disabled: boolean;
    /**
     * If `true` the datepicker can be used on blue background.
     */
    inverted: boolean;
    /**
     * Latest date available for selection
     */
    maxDate: string;
    /**
     * Earliest date available for selection
     */
    minDate: string;
    /**
     * Latest year available for selection
     */
    maxYear: string;
    /**
     * Closes the datepicker dropdown after selection
     */
    closeOnSelect: boolean;
    /**
     * Earliest year available for selection
     */
    minYear: string;
    /**
     * The value of the datepicker with the format `dd.MM.yyyy`.
     */
    value: string;
    valueWatcher(newValue: string): void;
    /**
     * Callback to determine which date in the datepicker should be selectable.
     */
    filter: DateCallback;
    /**
     * Callback to format or modify a changed value pefore display.
     */
    formatLabel: FormatLabelCallback;
    /**
     * Triggers when the value of the datepicker is changed
     */
    balChangeEventEmitter: EventEmitter<string>;
    /**
     * Emitted when the toggle loses focus.
     */
    balBlur: EventEmitter<void>;
    componentWillLoad(): void;
    /**
     * Open the datepicker dropdown
     */
    open(): Promise<void>;
    /**
     * Close the datepicker dropdown
     */
    close(): Promise<void>;
    get weekdays(): string[];
    get years(): number[];
    get parsedMaxDate(): moment.Moment;
    get parsedMinDate(): moment.Moment;
    get firstDateOfBox(): moment.Moment;
    get calendarGrid(): CalendarCell[][];
    private previousMonth;
    private nextMonth;
    private handleYearSelect;
    private handleMonthSelect;
    private selectDate;
    render(): any;
}
export {};
