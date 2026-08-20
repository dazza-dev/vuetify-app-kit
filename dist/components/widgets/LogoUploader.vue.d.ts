interface Props {
    modelValue: string;
    uploadFn: (file: File) => Promise<string>;
    accept?: string;
    dark?: boolean;
    helpText?: string;
    altText?: string;
    maxSizeMb?: number;
}
declare const __VLS_export: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string) => any;
    error: (message: string) => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onError?: ((message: string) => any) | undefined;
}>, {
    dark: boolean;
    accept: string;
    helpText: string;
    altText: string;
    maxSizeMb: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
