export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();
}

export function getSubdomain() {
  const hostname = window.location.hostname;
  const parts = hostname.split(".");

  if (parts.length >= 2) {
    return parts[0];
  }
  return null;
}

export function getTenantFromPath() {
  const segments = window.location.pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    return null;
  }

  const tenant = segments[0];
  if (tenant.includes(".") || tenant.startsWith("_")) {
    return null;
  }

  return tenant;
}

/**
 * Prefija una clave de localStorage con el tenant. Sin tenant en la ruta, va tal cual.
 */
export function getTenantStorageKey(key: string): string {
  const tenant = getTenantFromPath();

  return tenant ? `${tenant}:${key}` : key;
}
