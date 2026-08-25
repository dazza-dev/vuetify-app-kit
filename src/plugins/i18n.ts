import { type I18n, type I18nOptions, createI18n } from 'vue-i18n';
import { getTenantStorageKey } from '../utils/common';

/** Key where the user's chosen language is stored; scoped per tenant. */
const storageKey = (): string => getTenantStorageKey('lang');

let i18n: I18n | undefined;

function apply(locale: string): void {
    if (!i18n) return;

    (i18n.global.locale as unknown as { value: string }).value = locale;
    // Screen readers and the browser's spell checker go by this attribute.
    document.documentElement.lang = locale;
}

/**
 * Sets the language the user picked, and remembers it.
 */
export function setI18nLanguage(locale: string): void {
    apply(locale);
    localStorage.setItem(storageKey(), locale);
}

/**
 * Language the user picked, or null if they never chose one.
 */
export function getUserLanguage(): string | null {
    return localStorage.getItem(storageKey());
}

/**
 * Applies the backend-configured language, unless the user already picked one.
 */
export function setDefaultLanguage(locale?: string | null): void {
    if (!locale || getUserLanguage()) return;

    apply(locale);
}

export function setupI18n(config: { messages: NonNullable<I18nOptions['messages']>; defaultLocale?: string; fallbackLocale?: string }) {
    if (!i18n) {
        // Without a user choice, start with the default locale until settings load.
        const locale = getUserLanguage() ?? config.defaultLocale ?? 'en';

        i18n = createI18n({
            globalInjection: true,
            legacy: false,
            locale,
            fallbackLocale: config.fallbackLocale || config.defaultLocale || 'en',
            messages: config.messages
        });

        apply(locale);
    }

    return i18n;
}
