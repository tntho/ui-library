export declare class Field {
    /**
     * Label text
     */
    label: string;
    /**
     * If `true` a asterix (*) is added to the label text
     */
    required: boolean;
    /**
     * Validation message text
     */
    validationMessage: string;
    /**
     * Baloise icon for the right side of the input
     */
    iconRight: string;
    /**
     * Baloise icon for the left side of the input
     */
    iconLeft: string;
    /**
     * If `true` the field can be used on blue background.
     */
    inverted: boolean;
    get buildIconLeftTemplate(): any;
    get buildIconRightTemplate(): any;
    render(): any;
}
