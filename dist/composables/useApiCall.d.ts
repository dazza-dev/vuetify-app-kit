import type { Ref } from 'vue';
/**
 * Wraps an async call: toggles the loading flag, clears it in `finally`,
 * and logs the error before rethrowing it.
 */
export declare function useApiCall(loading: Ref<boolean>): <T>(fn: () => Promise<T>, errorContext?: string) => Promise<T>;
