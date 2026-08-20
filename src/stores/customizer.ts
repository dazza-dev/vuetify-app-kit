import { defineStore } from "pinia";
import type { ConfigProps, ThemeName } from "../types/config.type";

const DEFAULT_CONFIG: ConfigProps = {
  sidebarDrawer: true,
  customizerDrawer: false,
  miniSidebar: false,
  activeTheme: "EMERALD_THEME",
  boxed: true,
  borderCard: false,
};

let customDefaults: Partial<ConfigProps> = {};

export function setCustomizerDefaults(defaults: Partial<ConfigProps>) {
  customDefaults = defaults;
}

export const useCustomizerStore = defineStore("customizer", {
  state: (): ConfigProps => ({
    ...DEFAULT_CONFIG,
    ...customDefaults,
  }),
  actions: {
    toggleSidebarDrawer() {
      this.sidebarDrawer = !this.sidebarDrawer;
    },
    setMiniSidebar(value: boolean) {
      this.miniSidebar = value;
    },
    setCustomizerDrawer(value: boolean) {
      this.customizerDrawer = value;
    },
    /** El tema es el de los ajustes: aplica a toda la aplicación. */
    setTheme(theme: ThemeName) {
      this.activeTheme = theme;
    },
    setCardBorder(value: boolean) {
      this.borderCard = value;
    },
  },
});
