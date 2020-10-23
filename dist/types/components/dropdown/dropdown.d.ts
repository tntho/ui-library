import { EventEmitter } from '../../stencil-public-runtime';
import { Option } from '../dropdown-option/dropdown-option.types';
export declare class Dropdown {
    static MIN_DISTANCE_TO_BROWSER_BORDER: number;
    element: HTMLElement;
    inputElement: HTMLInputElement;
    searchInputElement: HTMLInputElement;
    dropdownContentElement: HTMLDivElement;
    dropdownMenuElement: HTMLDivElement;
    isPristine: boolean;
    selectedOption: Option<any> | Option<any>[];
    hasFocus: boolean;
    maxDropdownWidth: number;
    isActive: boolean;
    /**
     * The value of the selected dropdown item.
     */
    value: Option<any> | Option<any>[];
    valueWatcher(newValue: Option<any> | Option<any>[]): void;
    /**
     * Instructional text that shows before the input has a value.
     */
    placeholder: string;
    /**
     * If `true`, the user cannot interact with the input.
     */
    readonly: boolean;
    /**
     * If `true`, the user cannot interact with the input.
     */
    disabled: boolean;
    /**
     * If `true` the dropdown can be used on blue background.
     */
    inverted: boolean;
    disabledWatcher(newValue: boolean): void;
    /**
     * If `true`, the height of the dropdown content is fixed.
     */
    fixed: boolean;
    /**
     * If `true`, the component uses the whole width.
     */
    expanded: boolean;
    /**
     * Defines the trigger icon on the right site.
     */
    triggerIcon: string;
    /**
     * If `true` the dropdown shows the empty message
     */
    empty: boolean;
    /**
     * If `true` the dropdown allows multiple selection
     */
    multiSelect: boolean;
    /**
     * If `true`, the use can search for the option.
     */
    typeahead: boolean;
    /**
     * Emitted when containing input field raises an input event.
     */
    balInput: EventEmitter<string>;
    /**
     * Emitted when the checked property has changed.
     */
    balChange: EventEmitter<Option<any>>;
    /**
     * Emitted when the toggle loses focus.
     */
    balBlur: EventEmitter<void>;
    /**
     * Emitted when the toggle has focus..
     */
    balFocus: EventEmitter<void>;
    tabOutside(event: KeyboardEvent): Promise<void>;
    clickOnOutside(event: UIEvent): Promise<void>;
    componentWillLoad(): void;
    componentDidLoad(): void;
    /**
     * Selects an option.
     */
    select(option: Option<any>): Promise<void>;
    /**
     * Returns the value of the dropdown.
     */
    getSelected(): Promise<Option<any> | Option<any>[]>;
    /**
     * Open & closes the dropdown.
     */
    toggle(): Promise<void>;
    /**
     * Open the dropdown menu.
     */
    open(): Promise<void>;
    /**
     * Closes the dropdown menu.
     */
    close(): Promise<void>;
    get children(): HTMLBalDropdownOptionElement[];
    get childrenWithHiddenState(): Promise<boolean[]>;
    get childrenWithActivatedState(): Promise<boolean[]>;
    get childrenWithValue(): Promise<any[]>;
    get isUp(): boolean;
    onInputClick(): Promise<void>;
    onInputFocus(): void;
    onInputBlur(): void;
    onInput(event: InputEvent): Promise<void>;
    onKeyUp(event: KeyboardEvent): Promise<void>;
    handleKeyUp(event: KeyboardEvent): void;
    render(): any;
    private updateLabel;
    private prepareValues;
    private fireBlurIfPossible;
    private adjustMaxDropdownWidth;
    private updateActivatedOptions;
}
