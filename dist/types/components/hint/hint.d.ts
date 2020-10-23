export declare class Hint {
    element: HTMLElement;
    isActive: boolean;
    /**
     * Text for the close button.
     */
    closeLabel: string;
    /**
     * If `true`, the user cannot interact with the input.
     */
    disabled: boolean;
    handleKeyUp(event: KeyboardEvent): void;
    clickOnOutside(event: UIEvent): void;
    /**
     * Toggles the hint box.
     */
    toggle(): Promise<void>;
    /**
     * Opens the hint box.
     */
    open(): Promise<void>;
    /**
     * Closes the hint box.
     */
    close(): Promise<void>;
    render(): any;
}
