import type { Editor } from '@tiptap/vue-3';
interface VariableOption {
    variable: string;
    title: string;
}
type __VLS_Props = {
    editor: Editor;
    title?: string;
    variables?: VariableOption[];
};
declare const __VLS_export: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
