export declare class Icon {
    /**
     * The name of the icon without the bal-icon prefix.
     */
    name: string;
    /**
     * Defines the size of the icon.
     */
    size: "small" | "medium" | "large" | "";
    isRight: boolean;
    isLeft: boolean;
    get sizeCssClass(): string;
    get iconCssClass(): string;
    render(): any;
}
