/// <reference types="node" />
import { EventEmitter } from "../../stencil-public-runtime";
interface TimeSelectionOption {
    value: string;
    disabled: boolean;
}
export declare class Timeinput {
    static readonly CLOCK_PATTERN: RegExp;
    static readonly POS_NUM_PATTERN: RegExp;
    static readonly ZERO = 0;
    static readonly MAX_HOUR = 23;
    static readonly MAX_MINUTE = 59;
    timeoutHandler: NodeJS.Timeout;
    isPristine: boolean;
    hour: number;
    minute: number;
    minHour: number;
    minMinute: number;
    currentMinMinute: number;
    maxHour: number;
    maxMinute: number;
    currentMaxMinute: number;
    /**
     * If `true` the button is disabled
     */
    disabled: boolean;
    /**
     * The value of the datepicker with the format `hh:mm`.
     */
    value: string;
    /**
     * Latest date available for selection
     */
    maxTime: string;
    /**
     * Earliest date available for selection
     */
    minTime: string;
    /**
     * If `true` the timeinput can be used on blue background.
     */
    inverted: boolean;
    /**
     * Emitted when either the hour or the minute input has changed.
     * It will not be triggert if either hour or time input has never been set (i.e. "--" is selected).
     */
    balTimeinputChange: EventEmitter<string>;
    /**
     * Emitted when either the hour or minute input field loses focus.
     */
    balBlur: EventEmitter<void>;
    valueWatcher(newValue: string): void;
    maxTimeWatcher(newValue: string): void;
    minTimeWatcher(newValue: string): void;
    componentWillLoad(): void;
    private parseMaxTime;
    private parseMinTime;
    private parseValue;
    private updateCurrentMinuteBound;
    private incHour;
    private decHour;
    private incMinute;
    private decMinute;
    private onHourChange;
    private onMinuteChange;
    private repeatOnHold;
    private onMouseLeafOrUp;
    private onValueChange;
    get hourOptions(): TimeSelectionOption[];
    get minuteOptions(): TimeSelectionOption[];
    static formatTimeBoxValue(val: number): string;
    render(): any;
}
export {};
