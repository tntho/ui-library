/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import Vue, { PropOptions } from 'vue';
import { createCommonRender, createCommonMethod } from './vue-component-lib/utils';

import type { Components } from '@baloise/ui-library';




const customElementTags: string[] = [
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
    type: {} as PropOptions<Components.BalAccordion['type']>,
    collapsed: {} as PropOptions<Components.BalAccordion['collapsed']>,
    openLabel: {} as PropOptions<Components.BalAccordion['openLabel']>,
    openIcon: {} as PropOptions<Components.BalAccordion['openIcon']>,
    closeLabel: {} as PropOptions<Components.BalAccordion['closeLabel']>,
    closeIcon: {} as PropOptions<Components.BalAccordion['closeIcon']>,
  },


  methods: {
    open: createCommonMethod('open') as Components.BalAccordion['open'],
    close: createCommonMethod('close') as Components.BalAccordion['close'],
    toggle: createCommonMethod('toggle') as Components.BalAccordion['toggle'],
  },
  render: createCommonRender('bal-accordion', []),
});


export const BalButton = /*@__PURE__*/ Vue.extend({

  props: {
    type: {} as PropOptions<Components.BalButton['type']>,
    size: {} as PropOptions<Components.BalButton['size']>,
    isSquare: {} as PropOptions<Components.BalButton['isSquare']>,
    disabled: {} as PropOptions<Components.BalButton['disabled']>,
    light: {} as PropOptions<Components.BalButton['light']>,
    isActive: {} as PropOptions<Components.BalButton['isActive']>,
    expanded: {} as PropOptions<Components.BalButton['expanded']>,
    outlined: {} as PropOptions<Components.BalButton['outlined']>,
    inverted: {} as PropOptions<Components.BalButton['inverted']>,
    dense: {} as PropOptions<Components.BalButton['dense']>,
    loading: {} as PropOptions<Components.BalButton['loading']>,
    bottemRounded: {} as PropOptions<Components.BalButton['bottemRounded']>,
  },


  render: createCommonRender('bal-button', []),
});


export const BalCard = /*@__PURE__*/ Vue.extend({

  props: {
    border: {} as PropOptions<Components.BalCard['border']>,
    flat: {} as PropOptions<Components.BalCard['flat']>,
    square: {} as PropOptions<Components.BalCard['square']>,
  },


  render: createCommonRender('bal-card', []),
});


export const BalCardActions = /*@__PURE__*/ Vue.extend({

  props: {
    right: {} as PropOptions<Components.BalCardActions['right']>,
  },


  render: createCommonRender('bal-card-actions', []),
});


export const BalCardButton = /*@__PURE__*/ Vue.extend({

  props: {
    icon: {} as PropOptions<Components.BalCardButton['icon']>,
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
    border: {} as PropOptions<Components.BalData['border']>,
    horizontal: {} as PropOptions<Components.BalData['horizontal']>,
  },


  render: createCommonRender('bal-data', []),
});


export const BalDataItem = /*@__PURE__*/ Vue.extend({

  props: {
    disabled: {} as PropOptions<Components.BalDataItem['disabled']>,
  },


  render: createCommonRender('bal-data-item', []),
});


export const BalDataLabel = /*@__PURE__*/ Vue.extend({

  props: {
    required: {} as PropOptions<Components.BalDataLabel['required']>,
  },


  render: createCommonRender('bal-data-label', []),
});


export const BalDataValue = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('bal-data-value', []),
});


export const BalDatepicker = /*@__PURE__*/ Vue.extend({

  props: {
    language: {} as PropOptions<Components.BalDatepicker['language']>,
    placeholder: {} as PropOptions<Components.BalDatepicker['placeholder']>,
    disabled: {} as PropOptions<Components.BalDatepicker['disabled']>,
    maxDate: {} as PropOptions<Components.BalDatepicker['maxDate']>,
    minDate: {} as PropOptions<Components.BalDatepicker['minDate']>,
    maxYear: {} as PropOptions<Components.BalDatepicker['maxYear']>,
    closeOnSelect: {} as PropOptions<Components.BalDatepicker['closeOnSelect']>,
    minYear: {} as PropOptions<Components.BalDatepicker['minYear']>,
    value: {} as PropOptions<Components.BalDatepicker['value']>,
    filter: {} as PropOptions<Components.BalDatepicker['filter']>,
    formatLabel: {} as PropOptions<Components.BalDatepicker['formatLabel']>,
  },


  methods: {
    open: createCommonMethod('open') as Components.BalDatepicker['open'],
    close: createCommonMethod('close') as Components.BalDatepicker['close'],
  },
  render: createCommonRender('bal-datepicker', ['balChange', 'balBlur']),
});


export const BalDatetimepicker = /*@__PURE__*/ Vue.extend({

  props: {
    placeholder: {} as PropOptions<Components.BalDatetimepicker['placeholder']>,
    disabled: {} as PropOptions<Components.BalDatetimepicker['disabled']>,
    maxDatetime: {} as PropOptions<Components.BalDatetimepicker['maxDatetime']>,
    minDatetime: {} as PropOptions<Components.BalDatetimepicker['minDatetime']>,
    maxYear: {} as PropOptions<Components.BalDatetimepicker['maxYear']>,
    minYear: {} as PropOptions<Components.BalDatetimepicker['minYear']>,
    value: {} as PropOptions<Components.BalDatetimepicker['value']>,
    dateFilter: {} as PropOptions<Components.BalDatetimepicker['dateFilter']>,
  },


  methods: {
    open: createCommonMethod('open') as Components.BalDatetimepicker['open'],
    close: createCommonMethod('close') as Components.BalDatetimepicker['close'],
  },
  render: createCommonRender('bal-datetimepicker', ['balDatetimeChange', 'balBlur']),
});


export const BalDropdown = /*@__PURE__*/ Vue.extend({

  props: {
    value: {} as PropOptions<Components.BalDropdown['value']>,
    multiSelect: {} as PropOptions<Components.BalDropdown['multiSelect']>,
    placeholder: {} as PropOptions<Components.BalDropdown['placeholder']>,
    readonly: {} as PropOptions<Components.BalDropdown['readonly']>,
    disabled: {} as PropOptions<Components.BalDropdown['disabled']>,
    typeahead: {} as PropOptions<Components.BalDropdown['typeahead']>,
    preActivateFirst: {} as PropOptions<Components.BalDropdown['preActivateFirst']>,
    fixed: {} as PropOptions<Components.BalDropdown['fixed']>,
    expanded: {} as PropOptions<Components.BalDropdown['expanded']>,
    triggerIcon: {} as PropOptions<Components.BalDropdown['triggerIcon']>,
  },


  methods: {
    select: createCommonMethod('select') as Components.BalDropdown['select'],
    getSelected: createCommonMethod('getSelected') as Components.BalDropdown['getSelected'],
    toggle: createCommonMethod('toggle') as Components.BalDropdown['toggle'],
    open: createCommonMethod('open') as Components.BalDropdown['open'],
    close: createCommonMethod('close') as Components.BalDropdown['close'],
  },
  render: createCommonRender('bal-dropdown', ['balInput', 'balChange', 'balBlur', 'balFocus']),
});


export const BalDropdownOption = /*@__PURE__*/ Vue.extend({

  props: {
    value: {} as PropOptions<Components.BalDropdownOption['value']>,
    label: {} as PropOptions<Components.BalDropdownOption['label']>,
    icon: {} as PropOptions<Components.BalDropdownOption['icon']>,
    checkbox: {} as PropOptions<Components.BalDropdownOption['checkbox']>,
    focused: {} as PropOptions<Components.BalDropdownOption['focused']>,
    selected: {} as PropOptions<Components.BalDropdownOption['selected']>,
    highlight: {} as PropOptions<Components.BalDropdownOption['highlight']>,
  },


  methods: {
    isHidden: createCommonMethod('isHidden') as Components.BalDropdownOption['isHidden'],
  },
  render: createCommonRender('bal-dropdown-option', []),
});


export const BalField = /*@__PURE__*/ Vue.extend({

  props: {
    label: {} as PropOptions<Components.BalField['label']>,
    required: {} as PropOptions<Components.BalField['required']>,
    validationMessage: {} as PropOptions<Components.BalField['validationMessage']>,
    iconRight: {} as PropOptions<Components.BalField['iconRight']>,
    iconLeft: {} as PropOptions<Components.BalField['iconLeft']>,
  },


  render: createCommonRender('bal-field', []),
});


export const BalFileUpload = /*@__PURE__*/ Vue.extend({

  props: {
    label: {} as PropOptions<Components.BalFileUpload['label']>,
    multiple: {} as PropOptions<Components.BalFileUpload['multiple']>,
    disabled: {} as PropOptions<Components.BalFileUpload['disabled']>,
    accept: {} as PropOptions<Components.BalFileUpload['accept']>,
    maxFiles: {} as PropOptions<Components.BalFileUpload['maxFiles']>,
    maxFileSize: {} as PropOptions<Components.BalFileUpload['maxFileSize']>,
    maxBundleSize: {} as PropOptions<Components.BalFileUpload['maxBundleSize']>,
  },


  render: createCommonRender('bal-file-upload', ['balChange', 'balFileUploadRejectedFile']),
});


export const BalFilterButton = /*@__PURE__*/ Vue.extend({

  props: {
    active: {} as PropOptions<Components.BalFilterButton['active']>,
  },


  render: createCommonRender('bal-filter-button', ['balChange']),
});


export const BalHint = /*@__PURE__*/ Vue.extend({

  props: {
    closeLabel: {} as PropOptions<Components.BalHint['closeLabel']>,
    disabled: {} as PropOptions<Components.BalHint['disabled']>,
  },


  methods: {
    toggle: createCommonMethod('toggle') as Components.BalHint['toggle'],
    open: createCommonMethod('open') as Components.BalHint['open'],
    close: createCommonMethod('close') as Components.BalHint['close'],
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
    name: {} as PropOptions<Components.BalIcon['name']>,
    size: {} as PropOptions<Components.BalIcon['size']>,
    isRight: {} as PropOptions<Components.BalIcon['isRight']>,
    isLeft: {} as PropOptions<Components.BalIcon['isLeft']>,
  },


  render: createCommonRender('bal-icon', []),
});


export const BalList = /*@__PURE__*/ Vue.extend({

  props: {
    disabled: {} as PropOptions<Components.BalList['disabled']>,
    inverted: {} as PropOptions<Components.BalList['inverted']>,
    border: {} as PropOptions<Components.BalList['border']>,
  },


  render: createCommonRender('bal-list', []),
});


export const BalListItem = /*@__PURE__*/ Vue.extend({

  props: {
    disabled: {} as PropOptions<Components.BalListItem['disabled']>,
    selected: {} as PropOptions<Components.BalListItem['selected']>,
  },


  render: createCommonRender('bal-list-item', []),
});


export const BalListItemContent = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('bal-list-item-content', []),
});


export const BalListItemIcon = /*@__PURE__*/ Vue.extend({

  props: {
    right: {} as PropOptions<Components.BalListItemIcon['right']>,
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
    card: {} as PropOptions<Components.BalModal['card']>,
  },


  methods: {
    open: createCommonMethod('open') as Components.BalModal['open'],
    close: createCommonMethod('close') as Components.BalModal['close'],
  },
  render: createCommonRender('bal-modal', []),
});


export const BalModalActions = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('bal-modal-actions', []),
});


export const BalNavbar = /*@__PURE__*/ Vue.extend({

  props: {
    light: {} as PropOptions<Components.BalNavbar['light']>,
    logoHref: {} as PropOptions<Components.BalNavbar['logoHref']>,
  },


  render: createCommonRender('bal-navbar', []),
});


export const BalPagination = /*@__PURE__*/ Vue.extend({

  props: {
    disabled: {} as PropOptions<Components.BalPagination['disabled']>,
    value: {} as PropOptions<Components.BalPagination['value']>,
    totalPages: {} as PropOptions<Components.BalPagination['totalPages']>,
    pageRange: {} as PropOptions<Components.BalPagination['pageRange']>,
  },


  methods: {
    next: createCommonMethod('next') as Components.BalPagination['next'],
    previous: createCommonMethod('previous') as Components.BalPagination['previous'],
  },
  render: createCommonRender('bal-pagination', ['balChange']),
});


export const BalSpinner = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('bal-spinner', []),
});


export const BalStep = /*@__PURE__*/ Vue.extend({

  props: {
    value: {} as PropOptions<Components.BalStep['value']>,
    label: {} as PropOptions<Components.BalStep['label']>,
    bubble: {} as PropOptions<Components.BalStep['bubble']>,
    disabled: {} as PropOptions<Components.BalStep['disabled']>,
    active: {} as PropOptions<Components.BalStep['active']>,
  },


  methods: {
    getOptions: createCommonMethod('getOptions') as Components.BalStep['getOptions'],
    setActive: createCommonMethod('setActive') as Components.BalStep['setActive'],
  },
  render: createCommonRender('bal-step', ['balStepChanged']),
});


export const BalSteps = /*@__PURE__*/ Vue.extend({



  methods: {
    select: createCommonMethod('select') as Components.BalSteps['select'],
  },
  render: createCommonRender('bal-steps', ['balStepsDidChange']),
});


export const BalTabItem = /*@__PURE__*/ Vue.extend({

  props: {
    value: {} as PropOptions<Components.BalTabItem['value']>,
    label: {} as PropOptions<Components.BalTabItem['label']>,
    bubble: {} as PropOptions<Components.BalTabItem['bubble']>,
    disabled: {} as PropOptions<Components.BalTabItem['disabled']>,
    active: {} as PropOptions<Components.BalTabItem['active']>,
  },


  methods: {
    getOptions: createCommonMethod('getOptions') as Components.BalTabItem['getOptions'],
    setActive: createCommonMethod('setActive') as Components.BalTabItem['setActive'],
  },
  render: createCommonRender('bal-tab-item', ['balTabChanged']),
});


export const BalTabs = /*@__PURE__*/ Vue.extend({

  props: {
    expanded: {} as PropOptions<Components.BalTabs['expanded']>,
    dense: {} as PropOptions<Components.BalTabs['dense']>,
    rounded: {} as PropOptions<Components.BalTabs['rounded']>,
  },


  methods: {
    select: createCommonMethod('select') as Components.BalTabs['select'],
  },
  render: createCommonRender('bal-tabs', ['balTabsDidChange']),
});


export const BalTag = /*@__PURE__*/ Vue.extend({

  props: {
    type: {} as PropOptions<Components.BalTag['type']>,
  },


  render: createCommonRender('bal-tag', []),
});


export const BalTimeinput = /*@__PURE__*/ Vue.extend({

  props: {
    disabled: {} as PropOptions<Components.BalTimeinput['disabled']>,
    value: {} as PropOptions<Components.BalTimeinput['value']>,
    maxTime: {} as PropOptions<Components.BalTimeinput['maxTime']>,
    minTime: {} as PropOptions<Components.BalTimeinput['minTime']>,
  },


  render: createCommonRender('bal-timeinput', ['balTimeinputChange', 'balBlur']),
});


export const BalToast = /*@__PURE__*/ Vue.extend({

  props: {
    type: {} as PropOptions<Components.BalToast['type']>,
  },


  methods: {
    closeIn: createCommonMethod('closeIn') as Components.BalToast['closeIn'],
    close: createCommonMethod('close') as Components.BalToast['close'],
  },
  render: createCommonRender('bal-toast', []),
});

