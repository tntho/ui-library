import { EventEmitter } from "../../stencil-public-runtime";
import { StepOptions } from "../step/step";
export declare class Steps {
    element: HTMLElement;
    stepOptions: StepOptions[];
    /**
     * Emitted when the changes has finished.
     */
    stepsDidChange: EventEmitter<StepOptions>;
    /**
     * Select a step.
     */
    select(value: string): Promise<void>;
    componentWillLoad(): void;
    stepChanged(): void;
    private get steps();
    private readSteps;
    private onSelectStep;
    render(): any;
}
