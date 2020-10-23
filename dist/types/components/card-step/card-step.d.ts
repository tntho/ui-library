import { EventEmitter } from '../../stencil-public-runtime';
export interface CardStepOptions {
    value: string;
    label: string;
    active: boolean;
    done: boolean;
    disabled: boolean;
    hidden: boolean;
}
export declare class CardStep {
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
     * If `true` the step is hidden in the steps navigation.
     */
    hidden: boolean;
    /**
     * If `true` the step is disabled.
     */
    disabled: boolean;
    /**
     * If `true` the step is done.
     */
    done: boolean;
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
        done: boolean;
        disabled: boolean;
        hidden: boolean;
    };
    /**
     * Options of the step like label, value etc.
     */
    getOptions(): Promise<CardStepOptions>;
    /**
     * Sets the step active.
     */
    setActive(active: boolean): Promise<void>;
    componentWillLoad(): void;
    render(): any;
}
