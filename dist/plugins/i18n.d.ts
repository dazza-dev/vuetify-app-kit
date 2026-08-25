import { type I18n, type I18nOptions } from 'vue-i18n';
/**
 * Sets the language the user picked, and remembers it.
 */
export declare function setI18nLanguage(locale: string): void;
/**
 * Language the user picked, or null if they never chose one.
 */
export declare function getUserLanguage(): string | null;
/**
 * Applies the backend-configured language, unless the user already picked one.
 */
export declare function setDefaultLanguage(locale?: string | null): void;
export declare function setupI18n(config: {
    messages: NonNullable<I18nOptions['messages']>;
    defaultLocale?: string;
    fallbackLocale?: string;
}): I18n<{}, {}, {}, string, boolean>;
