import * as Sentry from "@sentry/vue";

/**
 * Logger con dos interruptores independientes: consola si `isDev`, Sentry si `sentryEnabled`.
 * Llamar a `configureLogger()` en el arranque, antes del primer log. `Sentry.init()` va aparte.
 */
let isDev = false;
let sentryEnabled = false;

export function configureLogger(config: {
  isDev: boolean;
  sentryEnabled: boolean;
}): void {
  isDev = config.isDev;
  sentryEnabled = config.sentryEnabled;
}

export const logger = {
  error(message: string, ...context: unknown[]): void {
    if (isDev) console.error(message, ...context);
    if (sentryEnabled) {
      const cause = context.find((c) => c instanceof Error);
      Sentry.captureException(cause ?? new Error(message), {
        extra: { message, context },
      });
    }
  },

  warn(message: string, ...context: unknown[]): void {
    if (isDev) console.warn(message, ...context);
    if (sentryEnabled) {
      Sentry.captureMessage(message, { level: "warning", extra: { context } });
    }
  },

  info(message: string, ...context: unknown[]): void {
    if (isDev) console.info(message, ...context);
  },

  debug(message: string, ...context: unknown[]): void {
    if (isDev) console.debug(message, ...context);
  },
};
