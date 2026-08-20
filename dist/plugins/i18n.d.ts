import { type I18n, type I18nOptions } from "vue-i18n";
/**
 * Cambia el idioma porque lo eligió el usuario, y lo recuerda.
 */
export declare function setI18nLanguage(locale: string): void;
/**
 * Idioma que el usuario eligió, o null si nunca escogió ninguno.
 */
export declare function getUserLanguage(): string | null;
/**
 * Aplica el idioma configurado en el backend, salvo que el usuario ya eligiera uno.
 */
export declare function setDefaultLanguage(locale?: string | null): void;
export declare function setupI18n(config: {
    messages: NonNullable<I18nOptions['messages']>;
    defaultLocale?: string;
    fallbackLocale?: string;
}): I18n<{}, {}, {}, string, boolean>;
