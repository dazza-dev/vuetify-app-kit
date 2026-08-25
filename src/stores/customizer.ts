import { defineStore } from 'pinia';
import { getTenantStorageKey } from '../utils/common';
import type { ConfigProps, ThemeName } from '../types/config.type';

/** Keys where the user's own display preferences are stored; scoped per tenant. */
const darkModeKey = (): string => getTenantStorageKey('darkMode');
const miniSidebarKey = (): string => getTenantStorageKey('miniSidebar');

function storedFlag(key: string, fallback: boolean): boolean {
    const value = localStorage.getItem(key);

    return value === null ? fallback : value === 'true';
}

const DEFAULT_CONFIG: ConfigProps = {
    sidebarDrawer: true,
    customizerDrawer: false,
    miniSidebar: false,
    activeTheme: 'EMERALD_THEME',
    darkMode: false,
    boxed: true,
    borderCard: false
};

let customDefaults: Partial<ConfigProps> = {};

export function setCustomizerDefaults(defaults: Partial<ConfigProps>) {
    customDefaults = defaults;
}

export const useCustomizerStore = defineStore('customizer', {
    state: (): ConfigProps => ({
        ...DEFAULT_CONFIG,
        ...customDefaults,
        // A stored choice wins over the app default; without one, the default stands.
        miniSidebar: storedFlag(miniSidebarKey(), customDefaults.miniSidebar ?? DEFAULT_CONFIG.miniSidebar),
        darkMode: storedFlag(darkModeKey(), customDefaults.darkMode ?? DEFAULT_CONFIG.darkMode)
    }),
    getters: {
        /** Theme actually applied, with the dark variant of whatever theme is selected. */
        theme(state): ThemeName {
            const base = state.activeTheme.replace(/^DARK_/, '');

            return (state.darkMode ? `DARK_${base}` : base) as ThemeName;
        }
    },
    actions: {
        toggleSidebarDrawer() {
            this.sidebarDrawer = !this.sidebarDrawer;
        },
        setMiniSidebar(value: boolean) {
            this.miniSidebar = value;
            localStorage.setItem(miniSidebarKey(), String(value));
        },
        setCustomizerDrawer(value: boolean) {
            this.customizerDrawer = value;
        },
        /** Sets the app-wide theme. */
        setTheme(theme: ThemeName) {
            this.activeTheme = theme;
        },
        setCardBorder(value: boolean) {
            this.borderCard = value;
        },
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            localStorage.setItem(darkModeKey(), String(this.darkMode));
        }
    }
});
