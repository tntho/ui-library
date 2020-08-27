/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import Vue from 'vue';
import { createCommonRender, createCommonMethod } from './vue-component-lib/utils';
const customElementTags = [
    'bal-accordion',
    'bal-button',
    'bal-card',
    'bal-card-actions',
    'bal-card-button',
    'bal-card-content',
    'bal-card-heading',
    'bal-card-subtitle',
    'bal-card-title',
    'bal-data',
    'bal-data-item',
    'bal-data-label',
    'bal-data-value',
    'bal-datepicker',
    'bal-datetimepicker',
    'bal-dropdown',
    'bal-dropdown-option',
    'bal-field',
    'bal-file-upload',
    'bal-filter-button',
    'bal-hint',
    'bal-hint-text',
    'bal-hint-title',
    'bal-icon',
    'bal-list',
    'bal-list-item',
    'bal-list-item-content',
    'bal-list-item-icon',
    'bal-list-item-subtitle',
    'bal-list-item-title',
    'bal-modal',
    'bal-modal-actions',
    'bal-navbar',
    'bal-pagination',
    'bal-spinner',
    'bal-step',
    'bal-steps',
    'bal-tab-item',
    'bal-tabs',
    'bal-tag',
    'bal-timeinput',
    'bal-toast',
];
Vue.config.ignoredElements = [...Vue.config.ignoredElements, ...customElementTags];
export const BalAccordion = /*@__PURE__*/ Vue.extend({
    props: {
        type: {},
        collapsed: {},
        openLabel: {},
        openIcon: {},
        closeLabel: {},
        closeIcon: {},
    },
    methods: {
        open: createCommonMethod('open'),
        close: createCommonMethod('close'),
        toggle: createCommonMethod('toggle'),
    },
    render: createCommonRender('bal-accordion', []),
});
export const BalButton = /*@__PURE__*/ Vue.extend({
    props: {
        type: {},
        size: {},
        isSquare: {},
        disabled: {},
        light: {},
        isActive: {},
        expanded: {},
        outlined: {},
        inverted: {},
        dense: {},
        loading: {},
        bottemRounded: {},
    },
    render: createCommonRender('bal-button', []),
});
export const BalCard = /*@__PURE__*/ Vue.extend({
    props: {
        border: {},
        flat: {},
        square: {},
    },
    render: createCommonRender('bal-card', []),
});
export const BalCardActions = /*@__PURE__*/ Vue.extend({
    props: {
        right: {},
    },
    render: createCommonRender('bal-card-actions', []),
});
export const BalCardButton = /*@__PURE__*/ Vue.extend({
    props: {
        icon: {},
    },
    render: createCommonRender('bal-card-button', []),
});
export const BalCardContent = /*@__PURE__*/ Vue.extend({
    render: createCommonRender('bal-card-content', []),
});
export const BalCardHeading = /*@__PURE__*/ Vue.extend({
    render: createCommonRender('bal-card-heading', []),
});
export const BalCardSubtitle = /*@__PURE__*/ Vue.extend({
    render: createCommonRender('bal-card-subtitle', []),
});
export const BalCardTitle = /*@__PURE__*/ Vue.extend({
    render: createCommonRender('bal-card-title', []),
});
export const BalData = /*@__PURE__*/ Vue.extend({
    props: {
        border: {},
        horizontal: {},
    },
    render: createCommonRender('bal-data', []),
});
export const BalDataItem = /*@__PURE__*/ Vue.extend({
    props: {
        disabled: {},
    },
    render: createCommonRender('bal-data-item', []),
});
export const BalDataLabel = /*@__PURE__*/ Vue.extend({
    props: {
        required: {},
    },
    render: createCommonRender('bal-data-label', []),
});
export const BalDataValue = /*@__PURE__*/ Vue.extend({
    render: createCommonRender('bal-data-value', []),
});
export const BalDatepicker = /*@__PURE__*/ Vue.extend({
    props: {
        language: {},
        placeholder: {},
        disabled: {},
        maxDate: {},
        minDate: {},
        maxYear: {},
        closeOnSelect: {},
        minYear: {},
        value: {},
        filter: {},
        formatLabel: {},
    },
    methods: {
        open: createCommonMethod('open'),
        close: createCommonMethod('close'),
    },
    render: createCommonRender('bal-datepicker', ['balChange', 'balBlur']),
});
export const BalDatetimepicker = /*@__PURE__*/ Vue.extend({
    props: {
        placeholder: {},
        disabled: {},
        maxDatetime: {},
        minDatetime: {},
        maxYear: {},
        minYear: {},
        value: {},
        dateFilter: {},
    },
    methods: {
        open: createCommonMethod('open'),
        close: createCommonMethod('close'),
    },
    render: createCommonRender('bal-datetimepicker', ['balDatetimeChange', 'balBlur']),
});
export const BalDropdown = /*@__PURE__*/ Vue.extend({
    props: {
        value: {},
        multiSelect: {},
        placeholder: {},
        readonly: {},
        disabled: {},
        typeahead: {},
        preActivateFirst: {},
        fixed: {},
        expanded: {},
        triggerIcon: {},
    },
    methods: {
        select: createCommonMethod('select'),
        getSelected: createCommonMethod('getSelected'),
        toggle: createCommonMethod('toggle'),
        open: createCommonMethod('open'),
        close: createCommonMethod('close'),
    },
    render: createCommonRender('bal-dropdown', ['balInput', 'balChange', 'balBlur', 'balFocus']),
});
export const BalDropdownOption = /*@__PURE__*/ Vue.extend({
    props: {
        value: {},
        label: {},
        icon: {},
        checkbox: {},
        focused: {},
        selected: {},
        highlight: {},
    },
    methods: {
        isHidden: createCommonMethod('isHidden'),
    },
    render: createCommonRender('bal-dropdown-option', []),
});
export const BalField = /*@__PURE__*/ Vue.extend({
    props: {
        label: {},
        required: {},
        validationMessage: {},
        iconRight: {},
        iconLeft: {},
    },
    render: createCommonRender('bal-field', []),
});
export const BalFileUpload = /*@__PURE__*/ Vue.extend({
    props: {
        label: {},
        multiple: {},
        disabled: {},
        accept: {},
        maxFiles: {},
        maxFileSize: {},
        maxBundleSize: {},
    },
    render: createCommonRender('bal-file-upload', ['balChange', 'balFileUploadRejectedFile']),
});
export const BalFilterButton = /*@__PURE__*/ Vue.extend({
    props: {
        active: {},
    },
    render: createCommonRender('bal-filter-button', ['balChange']),
});
export const BalHint = /*@__PURE__*/ Vue.extend({
    props: {
        closeLabel: {},
        disabled: {},
    },
    methods: {
        toggle: createCommonMethod('toggle'),
        open: createCommonMethod('open'),
        close: createCommonMethod('close'),
    },
    render: createCommonRender('bal-hint', []),
});
export const BalHintText = /*@__PURE__*/ Vue.extend({
    render: createCommonRender('bal-hint-text', []),
});
export const BalHintTitle = /*@__PURE__*/ Vue.extend({
    render: createCommonRender('bal-hint-title', []),
});
export const BalIcon = /*@__PURE__*/ Vue.extend({
    props: {
        name: {},
        size: {},
        isRight: {},
        isLeft: {},
    },
    render: createCommonRender('bal-icon', []),
});
export const BalList = /*@__PURE__*/ Vue.extend({
    props: {
        disabled: {},
        inverted: {},
        border: {},
    },
    render: createCommonRender('bal-list', []),
});
export const BalListItem = /*@__PURE__*/ Vue.extend({
    props: {
        disabled: {},
        selected: {},
    },
    render: createCommonRender('bal-list-item', []),
});
export const BalListItemContent = /*@__PURE__*/ Vue.extend({
    render: createCommonRender('bal-list-item-content', []),
});
export const BalListItemIcon = /*@__PURE__*/ Vue.extend({
    props: {
        right: {},
    },
    render: createCommonRender('bal-list-item-icon', []),
});
export const BalListItemSubtitle = /*@__PURE__*/ Vue.extend({
    render: createCommonRender('bal-list-item-subtitle', []),
});
export const BalListItemTitle = /*@__PURE__*/ Vue.extend({
    render: createCommonRender('bal-list-item-title', []),
});
export const BalModal = /*@__PURE__*/ Vue.extend({
    props: {
        card: {},
    },
    methods: {
        open: createCommonMethod('open'),
        close: createCommonMethod('close'),
    },
    render: createCommonRender('bal-modal', []),
});
export const BalModalActions = /*@__PURE__*/ Vue.extend({
    render: createCommonRender('bal-modal-actions', []),
});
export const BalNavbar = /*@__PURE__*/ Vue.extend({
    props: {
        light: {},
        logoHref: {},
    },
    render: createCommonRender('bal-navbar', []),
});
export const BalPagination = /*@__PURE__*/ Vue.extend({
    props: {
        disabled: {},
        value: {},
        totalPages: {},
        pageRange: {},
    },
    methods: {
        next: createCommonMethod('next'),
        previous: createCommonMethod('previous'),
    },
    render: createCommonRender('bal-pagination', ['balChange']),
});
export const BalSpinner = /*@__PURE__*/ Vue.extend({
    render: createCommonRender('bal-spinner', []),
});
export const BalStep = /*@__PURE__*/ Vue.extend({
    props: {
        value: {},
        label: {},
        bubble: {},
        disabled: {},
        active: {},
    },
    methods: {
        getOptions: createCommonMethod('getOptions'),
        setActive: createCommonMethod('setActive'),
    },
    render: createCommonRender('bal-step', ['balStepChanged']),
});
export const BalSteps = /*@__PURE__*/ Vue.extend({
    methods: {
        select: createCommonMethod('select'),
    },
    render: createCommonRender('bal-steps', ['balStepsDidChange']),
});
export const BalTabItem = /*@__PURE__*/ Vue.extend({
    props: {
        value: {},
        label: {},
        bubble: {},
        disabled: {},
        active: {},
    },
    methods: {
        getOptions: createCommonMethod('getOptions'),
        setActive: createCommonMethod('setActive'),
    },
    render: createCommonRender('bal-tab-item', ['balTabChanged']),
});
export const BalTabs = /*@__PURE__*/ Vue.extend({
    props: {
        expanded: {},
        dense: {},
        rounded: {},
    },
    methods: {
        select: createCommonMethod('select'),
    },
    render: createCommonRender('bal-tabs', ['balTabsDidChange']),
});
export const BalTag = /*@__PURE__*/ Vue.extend({
    props: {
        type: {},
    },
    render: createCommonRender('bal-tag', []),
});
export const BalTimeinput = /*@__PURE__*/ Vue.extend({
    props: {
        disabled: {},
        value: {},
        maxTime: {},
        minTime: {},
    },
    render: createCommonRender('bal-timeinput', ['balTimeinputChange', 'balBlur']),
});
export const BalToast = /*@__PURE__*/ Vue.extend({
    props: {
        type: {},
    },
    methods: {
        closeIn: createCommonMethod('closeIn'),
        close: createCommonMethod('close'),
    },
    render: createCommonRender('bal-toast', []),
});
//# sourceMappingURL=components.js.map