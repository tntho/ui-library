/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface BalAccordion {
    /**
    * Controls if the accordion is collapsed or not
    */
    'collapsed': boolean;
    'type': | "is-primary"
    | "is-info";
  }
  interface BalButton {
    /**
    * If `true` the button is disabled
    */
    'disabled': boolean;
    'fullwidth': boolean;
    'inverted': boolean;
    'light': boolean;
    /**
    * If `true` the label is hidden and a loading spinner is shown instead.
    */
    'loading': boolean;
    'outlined': boolean;
    /**
    * The theme type of the button. Given by bulma our css framework.
    */
    'type': | "is-primary"
    | "is-info"
    | "is-success"
    | "is-warning"
    | "is-danger"
    | "is-info is-outlined is-fullwidth"
    | "is-link";
  }
  interface BalField {
    /**
    * Baloise icon for the left side of the input
    */
    'iconLeft': string;
    /**
    * Baloise icon for the right side of the input
    */
    'iconRight': string;
    /**
    * Label text
    */
    'label': string;
    /**
    * If `true` a asterix (*) is added to the label text
    */
    'required': boolean;
    /**
    * Validation message text
    */
    'validationMessage': string;
  }
  interface BalSpinner {}
  interface BalTag {
    /**
    * The theme type of the tag. Given by bulma our css framework.
    */
    'type': | "is-primary"
    | "is-info"
    | "is-success"
    | "is-warning"
    | "is-danger"
    | "is-light";
  }
  interface BalToast {
    /**
    * Closes this toast
    */
    'close': () => Promise<void>;
    /**
    * Closes the toast after the given duration in ms
    */
    'closeIn': (duration: number) => Promise<void>;
    /**
    * Message text
    */
    'message': string;
    /**
    * The theme type of the toast. Given by bulma our css framework.
    */
    'type': | "is-primary"
    | "is-info"
    | "is-success"
    | "is-warning"
    | "is-danger";
  }
}

declare global {


  interface HTMLBalAccordionElement extends Components.BalAccordion, HTMLStencilElement {}
  var HTMLBalAccordionElement: {
    prototype: HTMLBalAccordionElement;
    new (): HTMLBalAccordionElement;
  };

  interface HTMLBalButtonElement extends Components.BalButton, HTMLStencilElement {}
  var HTMLBalButtonElement: {
    prototype: HTMLBalButtonElement;
    new (): HTMLBalButtonElement;
  };

  interface HTMLBalFieldElement extends Components.BalField, HTMLStencilElement {}
  var HTMLBalFieldElement: {
    prototype: HTMLBalFieldElement;
    new (): HTMLBalFieldElement;
  };

  interface HTMLBalSpinnerElement extends Components.BalSpinner, HTMLStencilElement {}
  var HTMLBalSpinnerElement: {
    prototype: HTMLBalSpinnerElement;
    new (): HTMLBalSpinnerElement;
  };

  interface HTMLBalTagElement extends Components.BalTag, HTMLStencilElement {}
  var HTMLBalTagElement: {
    prototype: HTMLBalTagElement;
    new (): HTMLBalTagElement;
  };

  interface HTMLBalToastElement extends Components.BalToast, HTMLStencilElement {}
  var HTMLBalToastElement: {
    prototype: HTMLBalToastElement;
    new (): HTMLBalToastElement;
  };
  interface HTMLElementTagNameMap {
    'bal-accordion': HTMLBalAccordionElement;
    'bal-button': HTMLBalButtonElement;
    'bal-field': HTMLBalFieldElement;
    'bal-spinner': HTMLBalSpinnerElement;
    'bal-tag': HTMLBalTagElement;
    'bal-toast': HTMLBalToastElement;
  }
}

declare namespace LocalJSX {
  interface BalAccordion {
    /**
    * Controls if the accordion is collapsed or not
    */
    'collapsed'?: boolean;
    'type'?: | "is-primary"
    | "is-info";
  }
  interface BalButton {
    /**
    * If `true` the button is disabled
    */
    'disabled'?: boolean;
    'fullwidth'?: boolean;
    'inverted'?: boolean;
    'light'?: boolean;
    /**
    * If `true` the label is hidden and a loading spinner is shown instead.
    */
    'loading'?: boolean;
    'outlined'?: boolean;
    /**
    * The theme type of the button. Given by bulma our css framework.
    */
    'type'?: | "is-primary"
    | "is-info"
    | "is-success"
    | "is-warning"
    | "is-danger"
    | "is-info is-outlined is-fullwidth"
    | "is-link";
  }
  interface BalField {
    /**
    * Baloise icon for the left side of the input
    */
    'iconLeft'?: string;
    /**
    * Baloise icon for the right side of the input
    */
    'iconRight'?: string;
    /**
    * Label text
    */
    'label'?: string;
    /**
    * If `true` a asterix (*) is added to the label text
    */
    'required'?: boolean;
    /**
    * Validation message text
    */
    'validationMessage'?: string;
  }
  interface BalSpinner {}
  interface BalTag {
    /**
    * The theme type of the tag. Given by bulma our css framework.
    */
    'type'?: | "is-primary"
    | "is-info"
    | "is-success"
    | "is-warning"
    | "is-danger"
    | "is-light";
  }
  interface BalToast {
    /**
    * Message text
    */
    'message'?: string;
    /**
    * The theme type of the toast. Given by bulma our css framework.
    */
    'type'?: | "is-primary"
    | "is-info"
    | "is-success"
    | "is-warning"
    | "is-danger";
  }

  interface IntrinsicElements {
    'bal-accordion': BalAccordion;
    'bal-button': BalButton;
    'bal-field': BalField;
    'bal-spinner': BalSpinner;
    'bal-tag': BalTag;
    'bal-toast': BalToast;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'bal-accordion': LocalJSX.BalAccordion & JSXBase.HTMLAttributes<HTMLBalAccordionElement>;
      'bal-button': LocalJSX.BalButton & JSXBase.HTMLAttributes<HTMLBalButtonElement>;
      'bal-field': LocalJSX.BalField & JSXBase.HTMLAttributes<HTMLBalFieldElement>;
      'bal-spinner': LocalJSX.BalSpinner & JSXBase.HTMLAttributes<HTMLBalSpinnerElement>;
      'bal-tag': LocalJSX.BalTag & JSXBase.HTMLAttributes<HTMLBalTagElement>;
      'bal-toast': LocalJSX.BalToast & JSXBase.HTMLAttributes<HTMLBalToastElement>;
    }
  }
}


