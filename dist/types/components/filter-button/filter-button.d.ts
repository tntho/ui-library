import { EventEmitter } from "../../stencil-public-runtime";
export declare class FilterButton {
    isActive: boolean;
    /**
     * If `true` then the button is active/selected
     */
    active: boolean;
    validateCollapsed(newValue: boolean): void;
    /**
     * Triggers when the value of the filter-button is changed
     */
    balChangeEventEmitter: EventEmitter<boolean>;
    componentWillLoad(): void;
    toggle(): Promise<void>;
    render(): any;
}
