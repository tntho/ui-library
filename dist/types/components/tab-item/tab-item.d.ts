import { EventEmitter } from "../../stencil-public-runtime";
export interface TabItemOptions {
    value: string;
    label: string;
    active: boolean;
    disabled: boolean;
    hasBubble: boolean;
}
export declare class TabItem {
    isContentHidden: boolean;
    /**
     * This is the key of the tab.
     */
    value: string;
    /**
     * Label for the tab.
     */
    label: string;
    /**
     * If `true` a small red bubble is added to the tab.
     */
    bubble: boolean;
    /**
     * If `true` the tab is disabled.
     */
    disabled: boolean;
    /**
     * Tell's if the tab is active and the content is visible.
     */
    active: boolean;
    activatedHandler(newActive: boolean): void;
    /**
     * Emitted when the tabs get rendered.
     */
    tabChanged: EventEmitter;
    get options(): {
        value: string;
        label: string;
        active: boolean;
        disabled: boolean;
        hasBubble: boolean;
    };
    /**
     * Options of the tab like label, value etc.
     */
    getOptions(): Promise<TabItemOptions>;
    /**
     * Sets the tab active.
     */
    setActive(active: boolean): Promise<void>;
    componentWillLoad(): void;
    render(): any;
}
