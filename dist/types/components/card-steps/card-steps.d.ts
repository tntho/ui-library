import { EventEmitter } from '../../stencil-public-runtime';
import { CardStepOptions } from '../card-step/card-step';
export declare class CardSteps {
    element: HTMLElement;
    stepOptions: CardStepOptions[];
    /**
     * If `true` a the style is ready for a dark background.
     */
    inverted: boolean;
    /**
     * If `true` the steps navigation is hidden.
     */
    hidden: boolean;
    /**
     * If `true` the steps navigation is on.
     */
    navigation: boolean;
    /**
     * Emitted when the changes has finished.
     */
    stepsDidChange: EventEmitter<CardStepOptions>;
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
