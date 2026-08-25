import { Fragment as e, createBlock as t, createCommentVNode as n, createElementBlock as r, createElementVNode as i, createVNode as a, defineComponent as o, mergeProps as s, normalizeClass as c, onBeforeUnmount as l, openBlock as u, ref as d, renderList as f, toDisplayString as p, unref as m, watch as h } from "vue";
import { EditorContent as g, useEditor as _ } from "@tiptap/vue-3";
import v from "@tiptap/starter-kit";
import { Table as y } from "@tiptap/extension-table";
import b from "@tiptap/extension-table-row";
import x from "@tiptap/extension-table-cell";
import S from "@tiptap/extension-table-header";
import C from "remixicon/fonts/remixicon.symbol.svg";
//#region src/editor/EditorMenu.vue?vue&type=script&setup=true&lang.ts
var w = ["title"], T = { class: "remix" }, E = ["xlink:href"], D = /* @__PURE__ */ o({
	__name: "EditorMenu",
	props: {
		icon: {},
		title: {},
		action: { type: Function },
		isActive: { type: Function }
	},
	setup(e) {
		return (t, n) => (u(), r("div", null, [i("div", {
			class: c(["menu-item", { "is-active": e.isActive ? e.isActive() : null }]),
			onClick: n[0] ||= (...t) => e.action && e.action(...t),
			title: e.title
		}, [(u(), r("svg", T, [i("use", { "xlink:href": `${m(C)}#ri-${e.icon}` }, null, 8, E)]))], 10, w)]));
	}
}), O = { class: "variable" }, k = { class: "remix" }, A = ["xlink:href"], j = { value: "" }, M = ["value"], N = /* @__PURE__ */ o({
	__name: "EditorVariable",
	props: {
		editor: {},
		title: {},
		variables: {}
	},
	setup(t) {
		let n = t;
		function a(e) {
			let t = e.target, r = t.value;
			r && n.editor && (n.editor.chain().focus().insertContent(`{{${r}}} `).run(), t.value = "");
		}
		return (n, o) => (u(), r("div", O, [(u(), r("svg", k, [i("use", { "xlink:href": `${m(C)}#ri-add-circle-line` }, null, 8, A)])), i("select", { onChange: o[0] ||= (e) => a(e) }, [i("option", j, p(t.title), 1), (u(!0), r(e, null, f(t.variables, (e) => (u(), r("option", {
			key: e.variable,
			value: e.variable
		}, p(e.title), 9, M))), 128))], 32)]));
	}
}), P = { class: "d-flex align-center cursor-pointer menu-bar menu-rounded" }, F = { class: "d-flex align-center cursor-pointer menu-bar menu-variables" }, I = /* @__PURE__ */ o({
	__name: "EditorMenubar",
	props: {
		editor: {},
		variables: {}
	},
	setup(n) {
		let a = n, o = d([
			{
				icon: "bold",
				title: "Bold",
				action: () => a.editor.chain().focus().toggleBold().run(),
				isActive: () => a.editor.isActive("bold")
			},
			{
				icon: "italic",
				title: "Italic",
				action: () => a.editor.chain().focus().toggleItalic().run(),
				isActive: () => a.editor.isActive("italic")
			},
			{
				icon: "strikethrough",
				title: "Strike",
				action: () => a.editor.chain().focus().toggleStrike().run(),
				isActive: () => a.editor.isActive("strike")
			},
			{
				icon: "code-view",
				title: "Code",
				action: () => a.editor.chain().focus().toggleCode().run(),
				isActive: () => a.editor.isActive("code")
			},
			{ type: "divider" },
			{
				icon: "h-1",
				title: "Heading 1",
				action: () => a.editor.chain().focus().toggleHeading({ level: 1 }).run(),
				isActive: () => a.editor.isActive("heading", { level: 1 })
			},
			{
				icon: "h-2",
				title: "Heading 2",
				action: () => a.editor.chain().focus().toggleHeading({ level: 2 }).run(),
				isActive: () => a.editor.isActive("heading", { level: 2 })
			},
			{
				icon: "paragraph",
				title: "Paragraph",
				action: () => a.editor.chain().focus().setParagraph().run(),
				isActive: () => a.editor.isActive("paragraph")
			},
			{
				icon: "list-unordered",
				title: "Bullet List",
				action: () => a.editor.chain().focus().toggleBulletList().run(),
				isActive: () => a.editor.isActive("bulletList")
			},
			{
				icon: "list-ordered",
				title: "Ordered List",
				action: () => a.editor.chain().focus().toggleOrderedList().run(),
				isActive: () => a.editor.isActive("orderedList")
			},
			{
				icon: "list-check-2",
				title: "Task List",
				action: () => a.editor.chain().focus().toggleTaskList().run(),
				isActive: () => a.editor.isActive("taskList")
			},
			{
				icon: "code-box-line",
				title: "Code Block",
				action: () => a.editor.chain().focus().toggleCodeBlock().run(),
				isActive: () => a.editor.isActive("codeBlock")
			},
			{ type: "divider" },
			{
				icon: "double-quotes-l",
				title: "Blockquote",
				action: () => a.editor.chain().focus().toggleBlockquote().run(),
				isActive: () => a.editor.isActive("blockquote")
			},
			{
				icon: "separator",
				title: "Horizontal Rule",
				action: () => a.editor.chain().focus().setHorizontalRule().run()
			},
			{ type: "divider" },
			{
				icon: "text-wrap",
				title: "Hard Break",
				action: () => a.editor.chain().focus().setHardBreak().run()
			},
			{
				icon: "format-clear",
				title: "Clear Format",
				action: () => a.editor.chain().focus().clearNodes().unsetAllMarks().run()
			},
			{ type: "divider" },
			{
				icon: "table-2",
				title: "Insert Table",
				action: () => a.editor.chain().focus().insertTable({
					rows: 3,
					cols: 3
				}).run()
			},
			{
				icon: "insert-column-right",
				title: "Add Column",
				action: () => a.editor.chain().focus().addColumnAfter().run()
			},
			{
				icon: "insert-row-bottom",
				title: "Add Row",
				action: () => a.editor.chain().focus().addRowAfter().run()
			},
			{
				icon: "table-line",
				title: "Remove Table",
				action: () => a.editor.chain().focus().deleteTable().run()
			},
			{ type: "divider" },
			{
				icon: "arrow-go-back-line",
				title: "Undo",
				action: () => a.editor.chain().focus().undo().run()
			},
			{
				icon: "arrow-go-forward-line",
				title: "Redo",
				action: () => a.editor.chain().focus().redo().run()
			}
		]);
		return (a, c) => (u(), r(e, null, [i("div", P, [(u(!0), r(e, null, f(o.value, (i, a) => (u(), r(e, null, [i.type === "divider" ? (u(), r("div", {
			class: "divider",
			key: `divider${a}`
		})) : i.type === "variable" ? (u(), t(N, s({
			class: "variable",
			key: `variable${a}`
		}, { ref_for: !0 }, i, { editor: n.editor }), null, 16, ["editor"])) : (u(), t(D, s({ key: a }, { ref_for: !0 }, i), null, 16))], 64))), 256))]), i("div", F, [(u(!0), r(e, null, f(n.variables, (e, r) => (u(), t(N, s({ key: r }, { ref_for: !0 }, e, { editor: n.editor }), null, 16, ["editor"]))), 128))])], 64));
	}
}), L = { key: 0 }, R = /* @__PURE__ */ o({
	__name: "RichTextEditor",
	props: {
		modelValue: {
			type: String,
			default: ""
		},
		variables: Array
	},
	emits: ["update:modelValue"],
	setup(t, { expose: i, emit: o }) {
		let s = t, c = o, d = _({
			extensions: [
				v,
				y.configure({ resizable: !0 }),
				b,
				x,
				S
			],
			content: s.modelValue,
			onUpdate: () => {
				c("update:modelValue", d.value?.getHTML() ?? "");
			}
		});
		return h(() => s.modelValue, (e) => {
			d.value?.getHTML() !== e && d.value?.commands.setContent(e);
		}), l(() => {
			d.value?.destroy();
		}), i({ focus: () => d.value?.commands.focus() }), (i, o) => (u(), r(e, null, [m(d) ? (u(), r("div", L, [a(I, {
			editor: m(d),
			variables: t.variables
		}, null, 8, ["editor", "variables"])])) : n("", !0), a(m(g), { editor: m(d) }, null, 8, ["editor"])], 64));
	}
});
//#endregion
export { D as EditorMenu, I as EditorMenubar, N as EditorVariable, R as RichTextEditor };
