import type { ConfigProps, ThemeName } from '../types/config.type';
export declare function setCustomizerDefaults(defaults: Partial<ConfigProps>): void;
export declare const useCustomizerStore: import("pinia").StoreDefinition<"customizer", ConfigProps, {
    /** Theme actually applied, with the dark variant of whatever theme is selected. */
    theme(state: {
        sidebarDrawer: boolean;
        customizerDrawer: boolean;
        miniSidebar: boolean;
        activeTheme: ThemeName;
        darkMode: boolean;
        boxed: boolean;
        borderCard: boolean;
    } & import("pinia").PiniaCustomStateProperties<ConfigProps>): ThemeName;
}, {
    toggleSidebarDrawer(): void;
    setMiniSidebar(value: boolean): void;
    setCustomizerDrawer(value: boolean): void;
    /** Sets the app-wide theme. */
    setTheme(theme: ThemeName): void;
    setCardBorder(value: boolean): void;
    toggleDarkMode(): void;
}>;
