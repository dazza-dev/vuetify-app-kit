import type { Ref } from "vue";
import { getErrorMessage } from "../utils/error";
import { logger } from "../utils/logger";

/**
 * Envuelve una llamada async: activa el flag de carga, lo baja en `finally`
 * y registra el error antes de relanzarlo.
 */
export function useApiCall(loading: Ref<boolean>) {
  return async function apiCall<T>(
    fn: () => Promise<T>,
    errorContext = "API request failed:",
  ): Promise<T> {
    loading.value = true;
    try {
      return await fn();
    } catch (error) {
      logger.error(errorContext, getErrorMessage(error, "Unknown error"));
      throw error;
    } finally {
      loading.value = false;
    }
  };
}
