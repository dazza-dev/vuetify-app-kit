export declare function getInitials(name: string): string;
export declare function getSubdomain(): string | null;
export declare function getTenantFromPath(): string | null;
/**
 * Prefija una clave de localStorage con el tenant. Sin tenant en la ruta, va tal cual.
 */
export declare function getTenantStorageKey(key: string): string;
