import { type I18n, type I18nOptions, createI18n } from "vue-i18n";
import { getTenantStorageKey } from "../utils/common";

/** Clave donde se guarda el idioma que el usuario eligió; va por tenant. */
const storageKey = (): string => getTenantStorageKey("lang");

let i18n: I18n | undefined;

function apply(locale: string): void {
    if (!i18n) return;

    (i18n.global.locale as unknown as { value: string }).value = locale;
}

/**
 * Cambia el idioma porque lo eligió el usuario, y lo recuerda.
 */
export function setI18nLanguage(locale: string): void {
    apply(locale);
    localStorage.setItem(storageKey(), locale);
}

/**
 * Idioma que el usuario eligió, o null si nunca escogió ninguno.
 */
export function getUserLanguage(): string | null {
    return localStorage.getItem(storageKey());
}

/**
 * Aplica el idioma configurado en el backend, salvo que el usuario ya eligiera uno.
 */
export function setDefaultLanguage(locale?: string | null): void {
    if (!locale || getUserLanguage()) return;

    apply(locale);
}

export function setupI18n(config: { messages: NonNullable<I18nOptions['messages']>; defaultLocale?: string; fallbackLocale?: string }) {
    if (!i18n) {
        // Sin elección del usuario se arranca con el idioma por defecto, hasta que carguen los ajustes.
        const locale = getUserLanguage() ?? config.defaultLocale ?? 'es';

        i18n = createI18n({
            globalInjection: true,
            legacy: false,
            locale,
            fallbackLocale: config.fallbackLocale || config.defaultLocale || 'es',
            messages: config.messages
        });
    }

    return i18n;
}
