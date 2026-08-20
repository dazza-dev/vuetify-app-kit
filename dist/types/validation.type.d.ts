/**
 * Forma mínima de un campo de validación. Estructural a propósito: encaja con Vuelidate
 * sin importarlo, y con cualquier librería que exponga $errors y $touch.
 */
export interface VuelidateField {
    $errors: {
        $message: unknown;
    }[];
    $touch: () => void;
}
