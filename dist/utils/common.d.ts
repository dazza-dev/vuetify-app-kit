export declare function getInitials(name: string): string;
export declare function getSubdomain(): string | null;
export declare function getTenantFromPath(): string | null;
/**
 * Prefixes a localStorage key with the tenant, left as-is if there's none in the path.
 */
export declare function getTenantStorageKey(key: string): string;
