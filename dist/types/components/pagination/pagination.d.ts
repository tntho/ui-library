import { EventEmitter } from "../../stencil-public-runtime";
export declare class Pagination {
    _value: number;
    /**
     * Disables component
     */
    disabled: boolean;
    /**
     * Current selected page
     */
    value: number;
    valueChanged(newValue: number): void;
    /**
     * The total amount of pages
     */
    totalPages: number;
    /**
     * Specify the max visible pages before and after the selected page
     */
    pageRange: number;
    /**
     * Triggers when a page change happens
     */
    balChangeEventEmitter: EventEmitter<number>;
    componentWillLoad(): void;
    next(): Promise<void>;
    previous(): Promise<void>;
    selectPage(pageNumber: number): void;
    renderEllipsisElement(): any;
    renderPageElement(pageNumber: number): any;
    render(): any;
}
