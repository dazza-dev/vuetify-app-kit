type __VLS_Props = {
    title?: string;
};
declare var __VLS_20: {}, __VLS_22: {}, __VLS_35: {}, __VLS_48: {};
type __VLS_Slots = {} & {
    header?: (props: typeof __VLS_20) => any;
} & {
    action?: (props: typeof __VLS_22) => any;
} & {
    default?: (props: typeof __VLS_35) => any;
} & {
    footer?: (props: typeof __VLS_48) => any;
};
declare const __VLS_base: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
