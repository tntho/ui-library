/// <reference types="node" />
export declare class Toast {
    timer: NodeJS.Timer;
    element: HTMLBalToastElement;
    animationClass: string;
    /**
     * The theme type of the toast. Given by bulma our css framework.
     */
    type: "is-primary" | "is-info" | "is-success" | "is-warning" | "is-danger";
    /**
     * Closes the toast after the given duration in ms
     */
    closeIn(duration: number): Promise<void>;
    /**
     * Closes this toast
     */
    close(): Promise<void>;
    render(): any;
}
