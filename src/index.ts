// ─── Vuetify ──────────────────────────────────────────────────────────────────
export { createAppVuetify } from "./vuetify";

// ─── Plugin (registra los componentes globales) ───────────────────────────────
export { VuetifyAppKit } from "./plugin";
export type { VuetifyAppKitOptions } from "./plugin";

// ─── Store ────────────────────────────────────────────────────────────────────
export { useCustomizerStore, setCustomizerDefaults } from "./stores/customizer";

// ─── Temas ────────────────────────────────────────────────────────────────────
// DEFAULT_THEME es el hueco para el color de marca de cada proyecto.
export {
  DEFAULT_THEME,
  BLUE_THEME,
  AQUA_THEME,
  ORANGE_THEME,
  PURPLE_THEME,
  GREEN_THEME,
  CYAN_THEME,
  EMERALD_THEME,
} from "./theme/LightTheme";
export {
  DARK_DEFAULT_THEME,
  DARK_BLUE_THEME,
  DARK_AQUA_THEME,
  DARK_ORANGE_THEME,
  DARK_PURPLE_THEME,
  DARK_GREEN_THEME,
  DARK_CYAN_THEME,
  DARK_EMERALD_THEME,
} from "./theme/DarkTheme";

// ─── Layouts ──────────────────────────────────────────────────────────────────
export { default as FullLayout } from "./layouts/full/FullLayout.vue";
export { default as BlankLayout } from "./layouts/blank/BlankLayout.vue";

// ─── Componentes ──────────────────────────────────────────────────────────────
// Los que registra el plugin no hace falta importarlos; se exportan por si acaso.
export { default as FormCard } from "./components/cards/FormCard.vue";
export { default as ParentCard } from "./components/cards/ParentCard.vue";
export { default as Breadcrumb } from "./components/shared/Breadcrumb.vue";
export { default as PageHeader } from "./components/shared/PageHeader.vue";
export { default as PillTabs } from "./components/shared/PillTabs.vue";
export { default as Tag } from "./components/shared/Tag.vue";
export { default as TextItem } from "./components/shared/TextItem.vue";
export { default as ConfirmationModal } from "./components/modals/ConfirmationModal.vue";
export { default as ErrorPage } from "./components/shared/Error.vue";
export { default as Languages } from "./components/widgets/Languages.vue";
export { default as AppLink } from "./components/shared/AppLink.vue";
export { default as AppModal } from "./components/modals/AppModal.vue";
export { default as LogoUploader } from "./components/widgets/LogoUploader.vue";

// ─── Componentes de formulario ────────────────────────────────────────────────
// Inputs de Vuetify con los defaults de la casa y validacion opcional en `v$`.
export { default as AppInput } from "./components/form/AppInput.vue";
export { default as AppSelect } from "./components/form/AppSelect.vue";
export { default as AppAutocomplete } from "./components/form/AppAutocomplete.vue";
export { default as AppTextarea } from "./components/form/AppTextarea.vue";
export { default as AppPasswordInput } from "./components/form/AppPasswordInput.vue";
export { default as AppColorPicker } from "./components/form/AppColorPicker.vue";
export { default as CountrySelect } from "./components/form/CountrySelect.vue";

// ─── Datos de referencia ──────────────────────────────────────────────────────
export { countries, flagEmoji } from "./data/countries";
export type { Country } from "./data/countries";

// ─── Claves de inyección ──────────────────────────────────────────────────────
// El layout recibe por inyección el logo, los widgets y el sidebar de la app.
export {
  LogoComponentKey,
  HeaderLeftWidgetsKey,
  HeaderRightWidgetsKey,
  SidebarItemsKey,
} from "./injection-keys";

// ─── Composables ──────────────────────────────────────────────────────────────
export { useApiCall } from "./composables/useApiCall";

// ─── Constantes ───────────────────────────────────────────────────────────────
export { DEFAULT_ITEMS_PER_PAGE } from "./constants/datatable";

// ─── i18n ─────────────────────────────────────────────────────────────────────
export {
  setupI18n,
  setI18nLanguage,
  setDefaultLanguage,
  getUserLanguage,
} from "./plugins/i18n";
export { useI18nTranslation } from "./utils/i18nUtils";

// ─── Utilidades ───────────────────────────────────────────────────────────────
export {
  getInitials,
  getSubdomain,
  getTenantFromPath,
  getTenantStorageKey,
} from "./utils/common";
export { getErrorMessage } from "./utils/error";
export { configureLogger, logger } from "./utils/logger";

// ─── Tipos ────────────────────────────────────────────────────────────────────
export type { ConfigProps, ThemeName } from "./types/config.type";
export type { MenuItem } from "./types/sidebar.type";
export type { ThemeTypes } from "./types/theme.type";
export type { BreadcrumbItem } from "./types/breadcrumb.type";
export type { PillTabItem, PillTabBreakpoints } from "./types/pill-tabs.type";
export type { LanguageType } from "./types/language.type";
export type { VuelidateField } from "./types/validation.type";
