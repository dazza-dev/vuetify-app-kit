import type { Ref } from "vue";
/**
 * Envuelve una llamada async: activa el flag de carga, lo baja en `finally`
 * y registra el error antes de relanzarlo.
 */
export declare function useApiCall(loading: Ref<boolean>): <T>(fn: () => Promise<T>, errorContext?: string) => Promise<T>;
