import { EventEmitter } from "../../stencil-public-runtime";
import { TabItemOptions } from "../tab-item/tab-item";
export declare class Tabs {
    element: HTMLElement;
    tabsOptions: TabItemOptions[];
    /**
     * If `true` the field expands over the whole width.
     */
    expanded: boolean;
    /**
     * If `true` the the padding gets reduced.
     */
    dense: boolean;
    /**
     * If you want the rounded tab style.
     */
    rounded: boolean;
    /**
     * Emitted when the changes has finished.
     */
    tabsDidChange: EventEmitter<TabItemOptions>;
    /**
     * Dropdown a tab by the value of the tab item.
     */
    select(value: string): Promise<void>;
    componentWillLoad(): void;
    tabChanged(): void;
    private readTabItems;
    private get tabs();
    private onSelectTab;
    render(): any;
}
