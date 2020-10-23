export declare class Modal {
    isActive: boolean;
    /**
     * Marks this modal as card-style modal, i.e. having visual lines separating head, body, and foot.
     */
    card: boolean;
    open(): Promise<void>;
    close(): Promise<void>;
    handleKeyUp(event: KeyboardEvent): Promise<void>;
    render(): any;
}
