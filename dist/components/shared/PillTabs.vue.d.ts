import type { PillTabItem, PillTabBreakpoints } from '../../types/pill-tabs.type';
type __VLS_Props = {
    modelValue: string;
    items: PillTabItem[];
    showNumbers?: boolean;
    breakpoints?: PillTabBreakpoints;
};
declare var __VLS_32: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_32) => any;
};
declare const __VLS_base: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    showNumbers: boolean;
    breakpoints: PillTabBreakpoints;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
