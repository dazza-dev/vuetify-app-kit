/**
 * Minimal, structural shape of a validation field, so it matches Vuelidate without importing it.
 */
export interface VuelidateField {
    $errors: {
        $message: unknown;
    }[];
    $touch: () => void;
}
