export declare class Button {
    /**
     * The theme type of the button. Given by bulma our css framework.
     */
    type: "is-primary" | "is-info" | "is-success" | "is-warning" | "is-danger" | "is-link";
    /**
     * Size of the button
     */
    size: "is-small" | "";
    /**
     * If `true` the width of the buttons is limited
     */
    isSquare: boolean;
    /**
     * If `true` the button is disabled
     */
    disabled: boolean;
    /**
     * If `true` the button has a light color
     */
    light: boolean;
    /**
     * If `true` the button has a active theme
     */
    isActive: boolean;
    /**
     * If `true` the button has a full width
     */
    expanded: boolean;
    /**
     * If `true` the button is outlined
     */
    outlined: boolean;
    /**
     * If `true` the button is inverted
     */
    inverted: boolean;
    /**
     * If `true` the button is dense
     */
    dense: boolean;
    /**
     * If `true` the label is hidden and a loading spinner is shown instead.
     */
    loading: boolean;
    /**
     * If `true` the bottom corners get rounded
     */
    bottemRounded: boolean;
    render(): any;
}
