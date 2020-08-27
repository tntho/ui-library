import Vue from 'vue';
export declare const BalAccordion: import("vue/types/vue").ExtendedVue<Vue, unknown, {
    open: () => Promise<void>;
    close: () => Promise<void>;
    toggle: () => Promise<void>;
}, unknown, {
    type: "is-primary" | "is-info";
    collapsed: boolean;
    openLabel: string;
    openIcon: string;
    closeLabel: string;
    closeIcon: string;
}>;
export declare const BalButton: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, {
    type: "is-primary" | "is-info" | "is-success" | "is-warning" | "is-danger" | "is-link";
    size: "" | "is-small";
    isSquare: boolean;
    disabled: boolean;
    light: boolean;
    isActive: boolean;
    expanded: boolean;
    outlined: boolean;
    inverted: boolean;
    dense: boolean;
    loading: boolean;
    bottemRounded: boolean;
}>;
export declare const BalCard: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, {
    border: boolean;
    flat: boolean;
    square: boolean;
}>;
export declare const BalCardActions: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, {
    right: boolean;
}>;
export declare const BalCardButton: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, {
    icon: string;
}>;
export declare const BalCardContent: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, Record<never, any>>;
export declare const BalCardHeading: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, Record<never, any>>;
export declare const BalCardSubtitle: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, Record<never, any>>;
export declare const BalCardTitle: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, Record<never, any>>;
export declare const BalData: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, {
    border: boolean;
    horizontal: boolean;
}>;
export declare const BalDataItem: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, {
    disabled: boolean;
}>;
export declare const BalDataLabel: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, {
    required: boolean;
}>;
export declare const BalDataValue: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, Record<never, any>>;
export declare const BalDatepicker: import("vue/types/vue").ExtendedVue<Vue, unknown, {
    open: () => Promise<void>;
    close: () => Promise<void>;
}, unknown, {
    language: string;
    placeholder: string;
    disabled: boolean;
    maxDate: string;
    minDate: string;
    maxYear: string;
    closeOnSelect: boolean;
    minYear: string;
    value: string;
    filter: import("@baloise/ui-library/dist/types/components/datepicker/datepicker").DateCallback;
    formatLabel: import("@baloise/ui-library/dist/types/components/datepicker/datepicker").FormatLabelCallback;
}>;
export declare const BalDatetimepicker: import("vue/types/vue").ExtendedVue<Vue, unknown, {
    open: () => Promise<void>;
    close: () => Promise<void>;
}, unknown, {
    placeholder: string;
    disabled: boolean;
    maxDatetime: string;
    minDatetime: string;
    maxYear: string;
    minYear: string;
    value: string;
    dateFilter: import("@baloise/ui-library/dist/types/components/datepicker/datepicker").DateCallback;
}>;
export declare const BalDropdown: import("vue/types/vue").ExtendedVue<Vue, unknown, {
    select: (option: import("@baloise/ui-library/dist/types/components/dropdown-option/dropdown-option.types").Option<any>) => Promise<void>;
    getSelected: () => Promise<import("@baloise/ui-library/dist/types/components/dropdown-option/dropdown-option.types").Option<any> | import("@baloise/ui-library/dist/types/components/dropdown-option/dropdown-option.types").Option<any>[]>;
    toggle: () => Promise<void>;
    open: () => Promise<void>;
    close: () => Promise<void>;
}, unknown, {
    value: import("@baloise/ui-library/dist/types/components/dropdown-option/dropdown-option.types").Option<any> | import("@baloise/ui-library/dist/types/components/dropdown-option/dropdown-option.types").Option<any>[];
    multiSelect: boolean;
    placeholder: string;
    readonly: boolean;
    disabled: boolean;
    typeahead: boolean;
    preActivateFirst: boolean;
    fixed: boolean;
    expanded: boolean;
    triggerIcon: string;
}>;
export declare const BalDropdownOption: import("vue/types/vue").ExtendedVue<Vue, unknown, {
    isHidden: () => Promise<boolean>;
}, unknown, {
    value: any;
    label: string;
    icon: string;
    checkbox: boolean;
    focused: boolean;
    selected: boolean;
    highlight: string;
}>;
export declare const BalField: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, {
    label: string;
    required: boolean;
    validationMessage: string;
    iconRight: string;
    iconLeft: string;
}>;
export declare const BalFileUpload: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, {
    label: string;
    multiple: boolean;
    disabled: boolean;
    accept: string;
    maxFiles: number;
    maxFileSize: number;
    maxBundleSize: number;
}>;
export declare const BalFilterButton: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, {
    active: boolean;
}>;
export declare const BalHint: import("vue/types/vue").ExtendedVue<Vue, unknown, {
    toggle: () => Promise<void>;
    open: () => Promise<void>;
    close: () => Promise<void>;
}, unknown, {
    closeLabel: string;
    disabled: boolean;
}>;
export declare const BalHintText: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, Record<never, any>>;
export declare const BalHintTitle: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, Record<never, any>>;
export declare const BalIcon: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, {
    name: string;
    size: "" | "small" | "medium" | "large";
    isRight: boolean;
    isLeft: boolean;
}>;
export declare const BalList: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, {
    disabled: boolean;
    inverted: boolean;
    border: boolean;
}>;
export declare const BalListItem: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, {
    disabled: boolean;
    selected: boolean;
}>;
export declare const BalListItemContent: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, Record<never, any>>;
export declare const BalListItemIcon: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, {
    right: boolean;
}>;
export declare const BalListItemSubtitle: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, Record<never, any>>;
export declare const BalListItemTitle: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, Record<never, any>>;
export declare const BalModal: import("vue/types/vue").ExtendedVue<Vue, unknown, {
    open: () => Promise<void>;
    close: () => Promise<void>;
}, unknown, {
    card: boolean;
}>;
export declare const BalModalActions: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, Record<never, any>>;
export declare const BalNavbar: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, {
    light: boolean;
    logoHref: string;
}>;
export declare const BalPagination: import("vue/types/vue").ExtendedVue<Vue, unknown, {
    next: () => Promise<void>;
    previous: () => Promise<void>;
}, unknown, {
    disabled: boolean;
    value: number;
    totalPages: number;
    pageRange: number;
}>;
export declare const BalSpinner: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, Record<never, any>>;
export declare const BalStep: import("vue/types/vue").ExtendedVue<Vue, unknown, {
    getOptions: () => Promise<import("@baloise/ui-library/dist/types/components/step/step").StepOptions>;
    setActive: (active: boolean) => Promise<void>;
}, unknown, {
    value: string;
    label: string;
    bubble: boolean;
    disabled: boolean;
    active: boolean;
}>;
export declare const BalSteps: import("vue/types/vue").ExtendedVue<Vue, unknown, {
    select: (value: string) => Promise<void>;
}, unknown, Record<never, any>>;
export declare const BalTabItem: import("vue/types/vue").ExtendedVue<Vue, unknown, {
    getOptions: () => Promise<import("@baloise/ui-library/dist/types/components/tab-item/tab-item").TabItemOptions>;
    setActive: (active: boolean) => Promise<void>;
}, unknown, {
    value: string;
    label: string;
    bubble: boolean;
    disabled: boolean;
    active: boolean;
}>;
export declare const BalTabs: import("vue/types/vue").ExtendedVue<Vue, unknown, {
    select: (value: string) => Promise<void>;
}, unknown, {
    expanded: boolean;
    dense: boolean;
    rounded: boolean;
}>;
export declare const BalTag: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, {
    type: "" | "is-primary" | "is-info" | "is-success" | "is-warning" | "is-danger";
}>;
export declare const BalTimeinput: import("vue/types/vue").ExtendedVue<Vue, unknown, unknown, unknown, {
    disabled: boolean;
    value: string;
    maxTime: string;
    minTime: string;
}>;
export declare const BalToast: import("vue/types/vue").ExtendedVue<Vue, unknown, {
    closeIn: (duration: number) => Promise<void>;
    close: () => Promise<void>;
}, unknown, {
    type: "is-primary" | "is-info" | "is-success" | "is-warning" | "is-danger";
}>;
