import type { ConfigProps, ThemeName } from "../types/config.type";
export declare function setCustomizerDefaults(defaults: Partial<ConfigProps>): void;
export declare const useCustomizerStore: import("pinia").StoreDefinition<"customizer", ConfigProps, {}, {
    toggleSidebarDrawer(): void;
    setMiniSidebar(value: boolean): void;
    setCustomizerDrawer(value: boolean): void;
    /** El tema es el de los ajustes: aplica a toda la aplicación. */
    setTheme(theme: ThemeName): void;
    setCardBorder(value: boolean): void;
}>;
