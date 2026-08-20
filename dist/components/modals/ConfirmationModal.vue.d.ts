type __VLS_Props = {
    show: boolean;
    title?: string;
    description?: string;
    confirmButtonText?: string;
    cancelButtonText?: string;
};
declare var __VLS_26: {};
type __VLS_Slots = {} & {
    description?: (props: typeof __VLS_26) => any;
};
declare const __VLS_base: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    close: () => any;
    confirm: () => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClose?: (() => any) | undefined;
    onConfirm?: (() => any) | undefined;
}>, {
    title: string;
    confirmButtonText: string;
    cancelButtonText: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
