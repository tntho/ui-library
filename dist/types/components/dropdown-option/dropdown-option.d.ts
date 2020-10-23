import { Components } from '../../components';
export declare class DropdownOption {
    element: HTMLElement;
    labelElement: HTMLSpanElement;
    isSlotEmpty: boolean;
    hidden: boolean;
    /**
     * The value of the dropdown item. This value will be returned by the parent <bal-dropdown> element.
     */
    value: string | boolean | number | any;
    /**
     * The value of the dropdown item. This value will be returned by the parent <bal-dropdown> element.
     */
    label: string;
    /**
     * If a slot is used instead of label attribute use this value to hide and display the dropdown option.
     */
    searchTerm: string;
    /**
     * Baloise icon as a prefix
     */
    icon: string;
    /**
     * Use checkbox for multi-select
     */
    checkbox: boolean;
    /**
     * If `true` the option is focused
     */
    focused: boolean;
    /**
     * If `true` the option is selected
     */
    selected: boolean;
    /**
     * Tells witch part of the label should be highlighted
     */
    highlight: string;
    highlightChanged(): void;
    isHidden(): Promise<boolean>;
    componentDidLoad(): void;
    get parent(): Components.BalDropdown;
    updateLabel(): void;
    private setLabelHtml;
    select(): Promise<void>;
    render(): any;
}
