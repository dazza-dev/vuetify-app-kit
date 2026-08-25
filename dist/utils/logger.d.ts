export declare function configureLogger(config: {
    isDev: boolean;
    sentryEnabled: boolean;
}): void;
export declare const logger: {
    error(message: string, ...context: unknown[]): void;
    warn(message: string, ...context: unknown[]): void;
    info(message: string, ...context: unknown[]): void;
    debug(message: string, ...context: unknown[]): void;
};
