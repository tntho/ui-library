export declare class Navbar {
    hasNavbarStartSlot: boolean;
    hasNavbarEndSlot: boolean;
    isMenuActive: boolean;
    light: boolean;
    logoHref: string;
    el: HTMLElement;
    componentWillLoad(): void;
    toggle(): Promise<void>;
    render(): any;
}
