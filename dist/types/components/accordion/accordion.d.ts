export declare class Accordion {
    isCollapsed: boolean;
    /**
     * Type defines the theme of the accordion toggle
     */
    type: "is-primary" | "is-info";
    /**
     * Controls if the accordion is collapsed or not
     */
    collapsed: boolean;
    validateCollapsed(newValue: boolean): void;
    /**
     * Label of the open trigger button
     */
    openLabel: string;
    /**
     * Bal-Icon of the open trigger button
     */
    openIcon: string;
    /**
     * Label of the close trigger button
     */
    closeLabel: string;
    /**
     * Bal-Icon of the close trigger button
     */
    closeIcon: string;
    /**
     * Open the accordion
     */
    open(): Promise<void>;
    /**
     * Close the accordion
     */
    close(): Promise<void>;
    /**
     * Triggers the accordion
     */
    toggle(): Promise<void>;
    componentWillLoad(): void;
    render(): any;
}
