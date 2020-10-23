import { EventEmitter } from "../../stencil-public-runtime";
export interface StepOptions {
    value: string;
    label: string;
    active: boolean;
    disabled: boolean;
    hasBubble: boolean;
}
export declare class Step {
    isContentHidden: boolean;
    /**
     * This is the key of the step.
     */
    value: string;
    /**
     * Label for the step.
     */
    label: string;
    /**
     * If `true` a small red bubble is added to the step.
     */
    bubble: boolean;
    /**
     * If `true` the step is disabled.
     */
    disabled: boolean;
    /**
     * Tell's if the step is active and the content is visible.
     */
    active: boolean;
    activatedHandler(newActive: boolean): void;
    /**
     * Emitted when the steps get rendered.
     */
    stepChanged: EventEmitter;
    get options(): {
        value: string;
        label: string;
        active: boolean;
        disabled: boolean;
        hasBubble: boolean;
    };
    /**
     * Options of the step like label, value etc.
     */
    getOptions(): Promise<StepOptions>;
    /**
     * Sets the step active.
     */
    setActive(active: boolean): Promise<void>;
    componentWillLoad(): void;
    render(): any;
}
