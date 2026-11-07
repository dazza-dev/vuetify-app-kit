import { createVuetify as e } from "vuetify";
import { createVueI18nAdapter as t } from "vuetify/locale/adapters/vue-i18n";
import { createI18n as n, useI18n as r } from "vue-i18n";
import * as i from "vuetify/components";
import * as a from "vuetify/directives";
import { Fragment as o, computed as s, createBlock as c, createCommentVNode as l, createElementBlock as u, createElementVNode as d, createSlots as f, createStaticVNode as p, createTextVNode as m, createVNode as h, defineComponent as g, inject as _, mergeProps as v, normalizeClass as y, normalizeStyle as b, openBlock as x, ref as S, renderList as C, renderSlot as w, resolveComponent as T, resolveDirective as ee, resolveDynamicComponent as E, shallowRef as te, toDisplayString as D, unref as O, watch as ne, withCtx as k, withDirectives as re, withModifiers as ie } from "vue";
import { RouterLink as ae, RouterView as oe } from "vue-router";
import { defineStore as se } from "pinia";
import { PerfectScrollbar as ce } from "vue3-perfect-scrollbar";
import { DotsIcon as le, Menu2Icon as ue, MoonIcon as de, PhotoIcon as fe, SunIcon as pe, TrashIcon as me, UploadIcon as he } from "vue-tabler-icons";
import * as A from "@sentry/vue";
//#region src/theme/LightTheme.ts
var ge = {
	info: "#539BFF",
	success: "#13DEB9",
	accent: "#FFAB91",
	warning: "#FFAE1F",
	error: "#FA896B",
	lightsuccess: "#E6FFFA",
	lighterror: "#FDEDE8",
	lightinfo: "#EBF3FE",
	lightwarning: "#FEF5E5",
	textPrimary: "#2A3547",
	textSecondary: "#2A3547",
	borderColor: "#e5eaef",
	inputBorder: "#DFE5EF",
	containerBg: "#ffffff",
	background: "#ffffff",
	hoverColor: "#f6f9fc",
	surface: "#fff",
	"on-surface-variant": "#fff",
	grey100: "#F2F6FA",
	grey200: "#EAEFF4"
}, _e = {
	"border-color": "#e5eaef",
	"border-opacity": 1
};
function j(e, t, n, r, i, a) {
	return {
		name: e,
		dark: !1,
		variables: { ..._e },
		colors: {
			...ge,
			primary: t,
			secondary: n,
			sidebarBg: t,
			lightprimary: r,
			lightsecondary: i,
			...a
		}
	};
}
var M = j("BLUE_THEME", "#5D87FF", "#49BEFF", "#ECF2FF", "#E8F7FF"), ve = j("AQUA_THEME", "#0074BA", "#47D7BC", "#EFF9FF", "#EDFBF7"), N = j("PURPLE_THEME", "#763EBD", "#95CFD5", "#F2ECF9", "#EDF8FA"), P = j("GREEN_THEME", "#0A7EA4", "#CCDA4E", "#F4F9FB", "#FAFBEF"), F = j("CYAN_THEME", "#01C0C8", "#FB9678", "#EBF9FA", "#FFF5F2", { success: "#00e676" }), I = j("ORANGE_THEME", "#FA896B", "#0074BA", "#FBF2EF", "#EFF9FF", {
	success: "#00e676",
	warning: "#ffe57f"
}), L = j("EMERALD_THEME", "#00c853", "#00e676", "#E6F9ED", "#E9FBF1", {
	sidebarBg: "#12161C",
	success: "#00e676"
}), R = j("DEFAULT_THEME", "#562ff4", "#49BEFF", "#EDE8FE", "#E8F7FF"), ye = {
	info: "#539BFF",
	success: "#13DEB9",
	accent: "#FA896B",
	warning: "#FFAE1F",
	error: "#FA896B",
	lightsuccess: "#1B3C48",
	lighterror: "#4B313D",
	lightinfo: "#223662",
	lightwarning: "#4D3A2A",
	textPrimary: "#EAEFF4",
	textSecondary: "#7C8FAC",
	borderColor: "#333F55",
	inputBorder: "#465670",
	containerBg: "#171c23",
	background: "#171c23",
	hoverColor: "#333f55",
	surface: "#171c23",
	"on-surface-variant": "#171c23",
	grey100: "#333F55",
	grey200: "#465670"
}, be = {
	"border-color": "#333F55",
	"border-opacity": 1
};
function z(e, t, n, r, i, a) {
	return {
		name: e,
		dark: !0,
		variables: { ...be },
		colors: {
			...ye,
			primary: t,
			secondary: n,
			sidebarBg: t,
			lightprimary: r,
			lightsecondary: i,
			...a
		}
	};
}
var B = z("DARK_BLUE_THEME", "#5D87FF", "#49BEFF", "#253662", "#1C455D", {
	containerBg: "#2a3447",
	background: "#2a3447",
	surface: "#2a3447",
	"on-surface-variant": "#2a3447"
}), V = z("DARK_AQUA_THEME", "#0074BA", "#47D7BC", "#103247", "#0C4339"), xe = z("DARK_PURPLE_THEME", "#763EBD", "#95CFD5", "#26153C", "#09454B"), Se = z("DARK_GREEN_THEME", "#0A7EA4", "#CCDA4E", "#05313F", "#282917"), Ce = z("DARK_CYAN_THEME", "#01C0C8", "#FB9678", "#003638", "#40241C"), we = z("DARK_ORANGE_THEME", "#FA896B", "#0074BA", "#402E32", "#082E45"), Te = z("DARK_EMERALD_THEME", "#00c853", "#00e676", "#0C4339", "#003638", {
	sidebarBg: "#0B0E12",
	success: "#00e676"
}), Ee = z("DARK_DEFAULT_THEME", "#562ff4", "#49BEFF", "#1C1060", "#1C455D");
//#endregion
//#region src/vuetify.ts
function De(n) {
	return e({
		components: i,
		directives: a,
		theme: {
			defaultTheme: "EMERALD_THEME",
			themes: {
				DEFAULT_THEME: R,
				BLUE_THEME: M,
				AQUA_THEME: ve,
				PURPLE_THEME: N,
				GREEN_THEME: P,
				CYAN_THEME: F,
				EMERALD_THEME: L,
				ORANGE_THEME: I,
				DARK_DEFAULT_THEME: Ee,
				DARK_BLUE_THEME: B,
				DARK_AQUA_THEME: V,
				DARK_ORANGE_THEME: we,
				DARK_PURPLE_THEME: xe,
				DARK_GREEN_THEME: Se,
				DARK_CYAN_THEME: Ce,
				DARK_EMERALD_THEME: Te
			}
		},
		locale: { adapter: t({
			i18n: n,
			useI18n: r
		}) },
		defaults: {
			VCard: { rounded: "md" },
			VTextField: {
				variant: "outlined",
				density: "comfortable",
				color: "primary"
			},
			VTextarea: {
				variant: "outlined",
				density: "comfortable",
				color: "primary"
			},
			VSelect: {
				variant: "outlined",
				density: "comfortable",
				color: "primary",
				menuIcon: "mdi-chevron-down",
				menuProps: { offset: 4 }
			},
			VAutocomplete: {
				variant: "outlined",
				density: "comfortable",
				color: "primary",
				menuIcon: "mdi-chevron-down",
				menuProps: { offset: 4 }
			},
			VCombobox: {
				variant: "outlined",
				density: "comfortable",
				color: "primary",
				menuIcon: "mdi-chevron-down",
				menuProps: { offset: 4 }
			},
			VListItem: { minHeight: "45px" },
			VTooltip: { location: "top" }
		}
	});
}
//#endregion
//#region src/components/cards/FormCard.vue?vue&type=script&setup=true&lang.ts
var Oe = { class: "d-sm-flex align-center justify-space-between" }, ke = /* @__PURE__ */ g({
	name: "FormCard",
	__name: "FormCard",
	props: {
		title: {},
		icon: {}
	},
	setup(e) {
		return (t, n) => {
			let r = T("v-icon"), i = T("v-card-title"), a = T("v-card-item"), o = T("v-divider"), s = T("v-card-text"), u = T("v-card");
			return x(), c(u, { elevation: "0" }, {
				default: k(() => [
					e.title ? (x(), c(a, { key: 0 }, {
						default: k(() => [d("div", Oe, [h(i, { class: "text-h5" }, {
							default: k(() => [w(t.$slots, "title", {}, () => [e.icon ? (x(), c(r, {
								key: 0,
								class: "mr-2"
							}, {
								default: k(() => [m(D(e.icon), 1)]),
								_: 1
							})) : l("", !0), m(" " + D(e.title), 1)])]),
							_: 3
						})])]),
						_: 3
					})) : l("", !0),
					h(o),
					h(s, { class: "pb-0" }, {
						default: k(() => [w(t.$slots, "default")]),
						_: 3
					})
				]),
				_: 3
			});
		};
	}
}), Ae = { class: "d-sm-flex align-center justify-space-between" }, je = /* @__PURE__ */ g({
	name: "ParentCard",
	__name: "ParentCard",
	props: { title: {} },
	setup(e) {
		return (t, n) => {
			let r = T("v-card-title"), i = T("v-card-item"), a = T("v-divider"), s = T("v-card-text"), f = T("v-card");
			return x(), c(f, { elevation: "10" }, {
				default: k(() => [
					e.title || t.$slots.header || t.$slots.action ? (x(), u(o, { key: 0 }, [h(i, { class: y([
						"px-6",
						"pb-4",
						t.$slots.header ? "pt-6" : "pt-4"
					]) }, {
						default: k(() => [d("div", Ae, [e.title ? (x(), c(r, {
							key: 0,
							class: "text-h5"
						}, {
							default: k(() => [m(D(e.title), 1)]),
							_: 1
						})) : w(t.$slots, "header", {}, void 0, void 0, 1), w(t.$slots, "action")])]),
						_: 3
					}, 8, ["class"]), h(a)], 64)) : l("", !0),
					h(s, null, {
						default: k(() => [w(t.$slots, "default")]),
						_: 3
					}),
					t.$slots.footer ? (x(), u(o, { key: 1 }, [h(a), h(s, null, {
						default: k(() => [w(t.$slots, "footer")]),
						_: 3
					})], 64)) : l("", !0)
				]),
				_: 3
			});
		};
	}
}), Me = { class: "px-8 py-8" }, Ne = { class: "d-flex justify-space-between" }, Pe = { class: "d-flex py-0 align-center" }, Fe = { class: "text-h3 mb-2" }, Ie = { class: "d-flex align-center flex-wrap ga-1 mt-1" }, Le = {
	key: 0,
	class: "text-subtitle-2 text-medium-emphasis"
}, Re = {
	key: 2,
	class: "text-subtitle-2 text-medium-emphasis"
}, ze = {
	key: 0,
	class: "d-none py-0 d-lg-block overflow-hidden"
}, Be = /*@__PURE__*/ g({
	name: "BreadcrumbBar",
	__name: "BreadcrumbBar",
	props: {
		title: {},
		breadcrumbs: {},
		image: {}
	},
	setup(e) {
		return (t, n) => {
			let r = T("v-card");
			return x(), c(r, { class: "bg-lightprimary elevation-0 rounded-md mb-8" }, {
				default: k(() => [d("div", Me, [d("div", Ne, [d("div", Pe, [d("div", null, [d("h3", Fe, D(e.title), 1), d("nav", Ie, [(x(!0), u(o, null, C(e.breadcrumbs, (e, t) => (x(), u(o, { key: t }, [t > 0 ? (x(), u("span", Le, "•")) : l("", !0), e.href && !e.disabled ? (x(), c(O(ae), {
					key: 1,
					to: e.href,
					class: "text-subtitle-2 text-decoration-none text-textPrimary"
				}, {
					default: k(() => [m(D(e.title), 1)]),
					_: 2
				}, 1032, ["to"])) : (x(), u("span", Re, D(e.title), 1))], 64))), 128))])])]), e.image ? (x(), u("div", ze, [d("div", {
					class: "breadcrumb-image",
					style: b({ backgroundImage: `url(${e.image})` })
				}, null, 4)])) : l("", !0)])])]),
				_: 1
			});
		};
	}
}), H = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Ve = /*#__PURE__*/ H(Be, [["__scopeId", "data-v-77f25f99"]]), He = { class: "d-flex align-start justify-space-between mb-6" }, Ue = {
	class: "d-flex align-start ga-2",
	style: { "min-width": "0" }
}, We = { style: { "min-width": "0" } }, Ge = { class: "text-h2 font-weight-bold text-black" }, Ke = {
	key: 0,
	class: "text-body-1 text-medium-emphasis mt-1"
}, qe = {
	key: 0,
	class: "page-header-actions d-flex ga-2 align-center flex-shrink-0 ml-4"
}, Je = /* @__PURE__ */ g({
	name: "PageHeader",
	__name: "PageHeader",
	props: {
		title: {},
		subtitle: {},
		back: {},
		backLabel: {}
	},
	setup(e) {
		return (t, n) => {
			let r = T("v-btn"), i = ee("tooltip");
			return x(), u("div", He, [d("div", Ue, [e.back ? re((x(), c(r, {
				key: 0,
				to: e.back,
				"aria-label": e.backLabel,
				icon: "mdi-arrow-left",
				variant: "flat",
				class: "mt-1 flex-shrink-0"
			}, null, 8, ["to", "aria-label"])), [[
				i,
				e.backLabel,
				"top"
			]]) : l("", !0), d("div", We, [d("h2", Ge, D(e.title), 1), e.subtitle ? (x(), u("p", Ke, D(e.subtitle), 1)) : l("", !0)])]), t.$slots.actions ? (x(), u("div", qe, [w(t.$slots, "actions")])) : l("", !0)]);
		};
	}
}), Ye = { class: "text-caption text-truncate" }, Xe = /* @__PURE__ */ g({
	name: "PillTabs",
	__name: "PillTabs",
	props: {
		modelValue: {},
		items: {},
		showNumbers: {
			type: Boolean,
			default: !0
		},
		breakpoints: { default: () => ({
			mobile: 12,
			desktop: 12
		}) }
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => {
			let i = T("v-btn"), a = T("v-col"), s = T("v-row"), l = T("v-container");
			return x(), u("div", null, [h(l, {
				fluid: "",
				class: "pa-0"
			}, {
				default: k(() => [h(s, {
					dense: "",
					class: "ma-0"
				}, {
					default: k(() => [(x(!0), u(o, null, C(e.items, (t, r) => (x(), c(a, {
						key: t.value,
						cols: e.breakpoints.mobile,
						md: e.breakpoints.desktop,
						class: "pa-1"
					}, {
						default: k(() => [h(i, {
							value: t.value,
							class: y([["w-100", e.modelValue === t.value ? "bg-primary" : "bg-lightprimary text-white"], "px-2"]),
							variant: "tonal",
							rounded: "lg",
							onClick: (e) => n("update:modelValue", t.value),
							height: "40"
						}, {
							default: k(() => [(x(), c(E(t.icon), {
								class: "mr-1",
								size: "16"
							})), d("span", Ye, D(e.showNumbers ? `${r + 1}.` : "") + " " + D(t.text), 1)]),
							_: 2
						}, 1032, [
							"value",
							"class",
							"onClick"
						])]),
						_: 2
					}, 1032, ["cols", "md"]))), 128))]),
					_: 1
				})]),
				_: 1
			}), w(t.$slots, "default")]);
		};
	}
}), Ze = /* @__PURE__ */ g({
	name: "TagChip",
	__name: "TagChip",
	props: {
		title: {},
		icon: {},
		size: { default: "small" },
		color: { default: "primary" }
	},
	setup(e) {
		return (t, n) => {
			let r = T("v-icon"), i = T("v-chip");
			return x(), c(i, {
				class: y(["text-body-2 font-weight-medium", "bg-" + e.color]),
				size: e.size
			}, {
				default: k(() => [w(t.$slots, "title", {}, () => [e.icon ? (x(), c(r, {
					key: 0,
					class: "mr-2"
				}, {
					default: k(() => [m(D(e.icon), 1)]),
					_: 1
				})) : l("", !0), m(" " + D(e.title), 1)])]),
				_: 3
			}, 8, ["class", "size"]);
		};
	}
}), Qe = { class: "d-flex gap-3 mb-5" }, $e = {
	key: 0,
	class: "text-h6"
}, et = {
	key: 1,
	class: "text-subtitle-1"
}, tt = /* @__PURE__ */ g({
	name: "TextItem",
	__name: "TextItem",
	props: {
		title: {},
		value: {},
		icon: {}
	},
	setup(e) {
		return (t, n) => {
			let r = T("v-icon");
			return x(), u("div", Qe, [
				w(t.$slots, "icon", {}, () => [e.icon ? (x(), c(r, { key: 0 }, {
					default: k(() => [m(D(e.icon), 1)]),
					_: 1
				})) : l("", !0)]),
				e.title ? (x(), u("span", $e, D(e.title), 1)) : l("", !0),
				e.value || t.$slots.value ? (x(), u("span", et, [w(t.$slots, "value", {}, () => [m(D(e.value), 1)])])) : l("", !0)
			]);
		};
	}
}), nt = /* @__PURE__ */ g({
	name: "ConfirmationModal",
	__name: "ConfirmationModal",
	props: {
		show: { type: Boolean },
		title: { default: "Are you sure?" },
		description: { default: void 0 },
		confirmButtonText: { default: "Confirm" },
		cancelButtonText: { default: "Cancel" },
		confirmColor: { default: "primary" }
	},
	emits: ["close", "confirm"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = s({
			get: () => n.show,
			set: () => r("close")
		});
		return (t, n) => {
			let a = T("v-card-title"), o = T("v-card-text"), s = T("v-btn"), u = T("v-card-actions"), d = T("v-card"), f = T("v-dialog");
			return x(), c(f, {
				modelValue: i.value,
				"onUpdate:modelValue": n[2] ||= (e) => i.value = e,
				"max-width": "500px",
				persistent: "",
				"no-click-animation": ""
			}, {
				default: k(() => [h(d, null, {
					default: k(() => [
						h(a, { class: "text-h5 text-center py-6" }, {
							default: k(() => [m(D(e.title), 1)]),
							_: 1
						}),
						e.description || t.$slots.description ? (x(), c(o, {
							key: 0,
							class: "text-center px-0 py-0"
						}, {
							default: k(() => [m(D(e.description) + " ", 1), w(t.$slots, "description")]),
							_: 3
						})) : l("", !0),
						h(u, { class: "justify-center ga-2 pb-6 pt-4" }, {
							default: k(() => [h(s, {
								variant: "outlined",
								onClick: n[0] ||= (e) => r("close")
							}, {
								default: k(() => [m(D(e.cancelButtonText), 1)]),
								_: 1
							}), h(s, {
								color: e.confirmColor,
								variant: "flat",
								onClick: n[1] ||= (e) => r("confirm")
							}, {
								default: k(() => [m(D(e.confirmButtonText), 1)]),
								_: 1
							}, 8, ["color"])]),
							_: 1
						})
					]),
					_: 3
				})]),
				_: 3
			}, 8, ["modelValue"]);
		};
	}
}), U = {};
function rt() {
	return U;
}
var it = { install(e, t = {}) {
	U = t, e.component("ParentCard", je), e.component("FormCard", ke), e.component("BreadcrumbBar", Ve), e.component("PageHeader", Je), e.component("TagChip", Ze), e.component("ConfirmationModal", nt), e.component("PillTabs", Xe), e.component("TextItem", tt);
} };
//#endregion
//#region src/utils/common.ts
function at(e) {
	return e.split(" ").map((e) => e.charAt(0)).join("").toUpperCase();
}
function ot() {
	let e = window.location.hostname.split(".");
	return e.length >= 2 ? e[0] : null;
}
function st() {
	let e = window.location.pathname.split("/").filter(Boolean);
	if (e.length === 0) return null;
	let t = e[0];
	return t.includes(".") || t.startsWith("_") ? null : t;
}
function W(e) {
	let t = st();
	return t ? `${t}:${e}` : e;
}
//#endregion
//#region src/stores/customizer.ts
var ct = () => W("darkMode"), lt = () => W("miniSidebar");
function ut(e, t) {
	let n = localStorage.getItem(e);
	return n === null ? t : n === "true";
}
var G = {
	sidebarDrawer: !0,
	customizerDrawer: !1,
	miniSidebar: !1,
	activeTheme: "EMERALD_THEME",
	darkMode: !1,
	boxed: !0,
	borderCard: !1
}, K = {};
function dt(e) {
	K = e;
}
var q = se("customizer", {
	state: () => ({
		...G,
		...K,
		miniSidebar: ut(lt(), K.miniSidebar ?? G.miniSidebar),
		darkMode: ut(ct(), K.darkMode ?? G.darkMode)
	}),
	getters: { theme(e) {
		let t = e.activeTheme.replace(/^DARK_/, "");
		return e.darkMode ? `DARK_${t}` : t;
	} },
	actions: {
		toggleSidebarDrawer() {
			this.sidebarDrawer = !this.sidebarDrawer;
		},
		setMiniSidebar(e) {
			this.miniSidebar = e, localStorage.setItem(lt(), String(e));
		},
		setCustomizerDrawer(e) {
			this.customizerDrawer = e;
		},
		setTheme(e) {
			this.activeTheme = e;
		},
		setCardBorder(e) {
			this.borderCard = e;
		},
		toggleDarkMode() {
			this.darkMode = !this.darkMode, localStorage.setItem(ct(), String(this.darkMode));
		}
	}
}), ft = Symbol("LogoComponent"), pt = Symbol("HeaderLeftWidgets"), mt = Symbol("HeaderRightWidgets"), ht = Symbol("SidebarItems"), gt = Symbol("LogoLink"), _t = { class: "mini-icon" }, vt = { class: "mini-text" }, yt = /* @__PURE__ */ g({
	name: "NavGroup",
	__name: "NavGroup",
	props: { item: {} },
	setup(e) {
		return (t, n) => {
			let r = T("v-list-subheader");
			return x(), c(r, { class: "smallCap text-uppercase text-subtitle-2 mt-5 font-weight-bold d-flex align-items-center" }, {
				default: k(() => [d("span", _t, [h(O(le), {
					size: "16",
					"stroke-width": "1.5",
					class: "iconClass"
				})]), d("span", vt, D(e.item.header), 1)]),
				_: 1
			});
		};
	}
}), bt = /* @__PURE__ */ g({
	name: "SidebarIcon",
	__name: "Icon",
	props: {
		item: {},
		level: {}
	},
	setup(e) {
		return (t, n) => (x(), c(E(e.item), {
			size: e.level && e.level > 0 ? 14 : 20,
			"stroke-width": "1.5",
			class: "iconClass"
		}, null, 8, ["size"]));
	}
}), xt = /* @__PURE__ */ g({
	name: "NavItem",
	__name: "NavItem",
	props: {
		item: {},
		level: {}
	},
	setup(e) {
		return (t, n) => {
			let r = T("v-list-item-title"), i = T("v-list-item-subtitle"), a = T("v-chip"), o = T("v-list-item");
			return x(), c(o, {
				to: e.item.type === "external" ? "" : e.item.to,
				href: e.item.type === "external" ? e.item.to : "",
				rounded: "",
				class: "mb-1",
				disabled: e.item.disabled,
				target: e.item.type === "external" ? "_blank" : ""
			}, f({
				prepend: k(() => [h(bt, {
					item: e.item.icon,
					level: e.level
				}, null, 8, ["item", "level"])]),
				default: k(() => [h(r, null, {
					default: k(() => [m(D(e.item.title), 1)]),
					_: 1
				}), e.item.subCaption ? (x(), c(i, {
					key: 0,
					class: "text-caption mt-n1 hide-menu"
				}, {
					default: k(() => [m(D(e.item.subCaption), 1)]),
					_: 1
				})) : l("", !0)]),
				_: 2
			}, [e.item.chip ? {
				name: "append",
				fn: k(() => [h(a, {
					color: e.item.chipColor,
					class: y("sidebarchip hide-menu bg-" + e.item.chipBgColor),
					size: "small",
					variant: e.item.chipVariant,
					"prepend-icon": e.item.chipIcon
				}, {
					default: k(() => [m(D(e.item.chip), 1)]),
					_: 1
				}, 8, [
					"color",
					"class",
					"variant",
					"prepend-icon"
				])]),
				key: "0"
			} : void 0]), 1032, [
				"to",
				"href",
				"disabled",
				"target"
			]);
		};
	}
}), St = /* @__PURE__ */ g({
	name: "NavCollapse",
	__name: "NavCollapse",
	props: {
		item: {},
		level: {}
	},
	setup(e) {
		return (t, n) => {
			let r = T("v-list-item-title"), i = T("v-list-item-subtitle"), a = T("v-list-item"), s = T("NavCollapse", !0), d = T("v-list-group");
			return x(), c(d, { "no-action": "" }, {
				activator: k(({ props: t }) => [h(a, v(t, {
					value: e.item.title,
					rounded: "",
					class: "mb-1"
				}), {
					prepend: k(() => [h(bt, {
						item: e.item.icon,
						level: e.level
					}, null, 8, ["item", "level"])]),
					default: k(() => [h(r, { class: "mr-auto" }, {
						default: k(() => [m(D(e.item.title), 1)]),
						_: 1
					}), e.item.subCaption ? (x(), c(i, {
						key: 0,
						class: "text-caption mt-n1 hide-menu"
					}, {
						default: k(() => [m(D(e.item.subCaption), 1)]),
						_: 1
					})) : l("", !0)]),
					_: 1
				}, 16, ["value"])]),
				default: k(() => [e.item.children ? (x(!0), u(o, { key: 0 }, C(e.item.children, (t, n) => (x(), u(o, { key: n }, [t.children ? (x(), c(s, {
					key: 0,
					item: t,
					level: e.level + 1
				}, null, 8, ["item", "level"])) : (x(), c(xt, {
					key: 1,
					item: t,
					level: e.level + 1
				}, null, 8, ["item", "level"]))], 64))), 128)) : l("", !0)]),
				_: 1
			});
		};
	}
}), Ct = /* @__PURE__ */ g({
	name: "AppSidebar",
	__name: "Sidebar",
	setup(e) {
		let t = _(ft), n = _(gt, void 0), r = _(ht, te([])), i = q();
		return (e, a) => {
			let s = T("v-list"), d = T("v-navigation-drawer");
			return x(), c(d, {
				left: "",
				modelValue: O(i).sidebarDrawer,
				"onUpdate:modelValue": a[0] ||= (e) => O(i).sidebarDrawer = e,
				elevation: "0",
				"rail-width": "75",
				app: "",
				class: "leftSidebar sidebar-dark",
				rail: O(i).miniSidebar,
				"expand-on-hover": "",
				width: "270"
			}, {
				default: k(() => [(x(), c(E(O(n) ? O(ae) : "div"), {
					to: O(n),
					class: "sidebar-logo pa-2"
				}, {
					default: k(() => [O(t) ? (x(), c(E(O(t)), { key: 0 })) : l("", !0)]),
					_: 1
				}, 8, ["to"])), h(O(ce), { class: "scrollnavbar" }, {
					default: k(() => [h(s, { class: "pa-6" }, {
						default: k(() => [(x(!0), u(o, null, C(O(r), (e) => (x(), u(o, { key: e.title }, [e.header ? (x(), c(yt, {
							key: 0,
							item: e
						}, null, 8, ["item"])) : e.children ? (x(), c(St, {
							key: 1,
							class: "leftPadding",
							item: e,
							level: 0
						}, null, 8, ["item"])) : (x(), c(xt, {
							key: 2,
							item: e,
							class: "leftPadding"
						}, null, 8, ["item"]))], 64))), 128))]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			}, 8, ["modelValue", "rail"]);
		};
	}
}), wt = /* @__PURE__ */ g({
	name: "AppHeader",
	__name: "Header",
	setup(e) {
		let t = q(), n = _(pt, []), r = _(mt, []);
		return (e, i) => {
			let a = T("v-btn"), s = T("v-spacer"), l = T("v-app-bar");
			return x(), c(l, {
				elevation: "10",
				height: "70"
			}, {
				default: k(() => [
					h(a, {
						class: "hidden-md-and-down",
						icon: "",
						color: "primary",
						variant: "text",
						onClick: i[0] ||= ie((e) => O(t).setMiniSidebar(!O(t).miniSidebar), ["stop"])
					}, {
						default: k(() => [h(O(ue), {
							size: "20",
							"stroke-width": "1.5"
						})]),
						_: 1
					}),
					h(a, {
						class: "hidden-lg-and-up",
						icon: "",
						variant: "flat",
						onClick: ie(O(t).toggleSidebarDrawer, ["stop"]),
						size: "small"
					}, {
						default: k(() => [h(O(ue), {
							size: "20",
							"stroke-width": "1.5"
						})]),
						_: 1
					}, 8, ["onClick"]),
					(x(!0), u(o, null, C(O(n), (e, t) => (x(), c(E(e), { key: "l" + t }))), 128)),
					h(s),
					(x(!0), u(o, null, C(O(r), (e, t) => (x(), c(E(e), { key: "r" + t }))), 128))
				]),
				_: 1
			});
		};
	}
}), Tt = /* @__PURE__ */ g({
	name: "FullLayout",
	__name: "FullLayout",
	setup(e) {
		let t = q();
		return (e, n) => {
			let r = T("v-container"), i = T("v-main"), a = T("v-app"), o = T("v-locale-provider");
			return x(), c(o, null, {
				default: k(() => [h(a, {
					theme: O(t).theme,
					class: y([
						O(t).theme,
						O(t).miniSidebar ? "mini-sidebar" : "",
						"verticalLayout",
						O(t).borderCard ? "cardBordered" : ""
					])
				}, {
					default: k(() => [
						h(Ct),
						h(wt),
						h(i, null, {
							default: k(() => [h(r, {
								fluid: "",
								class: "page-wrapper pb-sm-15 pb-10"
							}, {
								default: k(() => [d("div", { class: y(O(t).boxed ? "max-width" : "") }, [h(O(oe))], 2)]),
								_: 1
							})]),
							_: 1
						})
					]),
					_: 1
				}, 8, ["theme", "class"])]),
				_: 1
			});
		};
	}
}), Et = /* @__PURE__ */ g({
	name: "BlankLayout",
	__name: "BlankLayout",
	setup(e) {
		let t = q();
		return (e, n) => {
			let r = T("v-app");
			return x(), c(r, {
				theme: O(t).theme,
				class: y(O(t).theme)
			}, {
				default: k(() => [h(O(oe))]),
				_: 1
			}, 8, ["theme", "class"]);
		};
	}
}), Dt = {
	viewBox: "0 0 520 244",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	"aria-hidden": "true",
	focusable: "false"
}, Ot = /*#__PURE__*/ H(/* @__PURE__ */ g({
	name: "NotFoundArt",
	__name: "NotFoundArt",
	setup(e) {
		return (e, t) => (x(), u("svg", Dt, [...t[0] ||= [p("<g stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-ac3e2cd5><path d=\"M118 40 L30 152 H150\" data-v-ac3e2cd5></path><path d=\"M118 40 V200\" data-v-ac3e2cd5></path><path d=\"M458 40 L370 152 H490\" data-v-ac3e2cd5></path><path d=\"M458 40 V200\" data-v-ac3e2cd5></path></g><g stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-ac3e2cd5><path d=\"M260 40 A62 80 0 0 0 260 200\" transform=\"rotate(-3 260 120) translate(-9,2)\" data-v-ac3e2cd5></path><path d=\"M260 40 A62 80 0 0 1 260 200\" transform=\"rotate(3 260 120) translate(9,-2)\" data-v-ac3e2cd5></path></g><path d=\"M261 36 L246 76 L274 104 L242 134 L268 166 L252 204\" stroke=\"currentColor\" stroke-width=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\"0.5\" data-v-ac3e2cd5></path><g fill=\"currentColor\" data-v-ac3e2cd5><path d=\"M238 216 l15 -6 -3 15 z\" opacity=\"0.38\" data-v-ac3e2cd5></path><path d=\"M274 224 l12 -8 3 13 z\" opacity=\"0.24\" data-v-ac3e2cd5></path></g>", 4)]]));
	}
}), [["__scopeId", "data-v-ac3e2cd5"]]), kt = { class: "d-flex flex-column align-center justify-center text-center h-100vh px-4" }, At = { class: "not-found-art text-primary" }, jt = { class: "text-h4 font-weight-bold mt-10" }, Mt = { class: "text-body-1 text-medium-emphasis mt-3 not-found-text" }, Nt = /*#__PURE__*/ H(/* @__PURE__ */ g({
	name: "ErrorPage",
	__name: "ErrorPage",
	setup(e) {
		let { t, te: n } = r({ useScope: "global" }), i = rt().errorPage ?? {};
		function a(e, r) {
			return e && n(e) ? t(e) : r;
		}
		let o = s(() => a(i.titleKey, "Oops!")), c = s(() => a(i.descriptionKey, "The page you are looking for could not be found.")), l = s(() => a(i.backToHomeKey, "Go Back to Home")), f = s(() => i.homeRoute ?? "/");
		return (e, t) => {
			let n = T("v-btn");
			return x(), u("div", kt, [
				d("div", At, [h(Ot)]),
				d("h1", jt, D(o.value), 1),
				d("p", Mt, D(c.value), 1),
				h(n, {
					flat: "",
					color: "primary",
					class: "mt-8",
					to: f.value
				}, {
					default: k(() => [m(D(l.value), 1)]),
					_: 1
				}, 8, ["to"])
			]);
		};
	}
}), [["__scopeId", "data-v-75c71571"]]), Pt = () => W("lang"), J;
function Y(e) {
	J && (J.global.locale.value = e, document.documentElement.lang = e);
}
function Ft(e) {
	Y(e), localStorage.setItem(Pt(), e);
}
function X() {
	return localStorage.getItem(Pt());
}
function It(e) {
	!e || X() || Y(e);
}
function Lt(e) {
	if (!J) {
		let t = X() ?? e.defaultLocale ?? "en";
		J = n({
			globalInjection: !0,
			legacy: !1,
			locale: t,
			fallbackLocale: e.fallbackLocale || e.defaultLocale || "en",
			messages: e.messages
		}), Y(t);
	}
	return J;
}
//#endregion
//#region src/assets/images/flag/icon-flag-en.svg
var Rt = "data:image/svg+xml,%3csvg%20height='20'%20viewBox='0%200%2028%2020'%20width='28'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3crect%20id='a'%20height='20'%20rx='3'%20width='28'/%3e%3cmask%20id='b'%20fill='%23fff'%3e%3cuse%20fill='%23fff'%20fill-rule='evenodd'%20xlink:href='%23a'/%3e%3c/mask%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3cuse%20fill='%230a17a7'%20xlink:href='%23a'/%3e%3cpath%20d='m29.2824692-1.91644623%201.4911811%202.21076686-9.4483006%206.37223314%206.6746503.0001129v6.66666663l-6.6746503-.0007795%209.4483006%206.3731256-1.4911811%202.2107668-11.9501195-8.0608924.0009836%207.4777795h-6.6666666l-.000317-7.4777795-11.9488189%208.0608924-1.49118107-2.2107668%209.448-6.3731256-6.67434973.0007795v-6.66666663l6.67434973-.0001129-9.448-6.37223314%201.49118107-2.21076686%2011.9488189%208.06.000317-7.4768871h6.6666666l-.0009836%207.4768871z'%20fill='%23fff'%20mask='url(%23b)'/%3e%3cg%20stroke='%23db1f35'%20stroke-linecap='round'%20stroke-width='.667'%3e%3cpath%20d='m18.668%206.332%2012.665-8.332'%20mask='url(%23b)'/%3e%3cpath%20d='m20.013%2021.35%2011.354-7.652'%20mask='url(%23b)'%20transform='matrix(1%200%200%20-1%200%2035.048)'/%3e%3cpath%20d='m8.006%206.31-11.843-7.981'%20mask='url(%23b)'/%3e%3cpath%20d='m9.29%2022.31-13.127-8.705'%20mask='url(%23b)'%20transform='matrix(1%200%200%20-1%200%2035.915)'/%3e%3c/g%3e%3cpath%20d='m0%2012h12v8h4v-8h12v-4h-12v-8h-4v8h-12z'%20fill='%23e6273e'%20mask='url(%23b)'/%3e%3c/g%3e%3c/svg%3e", zt = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='512'%20height='512'%20fill='%23AA151B'/%3e%3crect%20y='128'%20width='512'%20height='256'%20fill='%23F1BF00'/%3e%3cpath%20d='M144,256%20C144,211.82%20179.82,176%20224,176%20C268.18,176%20304,211.82%20304,256%20C304,300.18%20268.18,336%20224,336%20C179.82,336%20144,300.18%20144,256%20Z'%20fill='%23AA151B'/%3e%3cpath%20d='M160,256%20C160,220.65%20188.65,192%20224,192%20C259.35,192%20288,220.65%20288,256'%20fill='%23F1BF00'/%3e%3crect%20x='176'%20y='224'%20width='96'%20height='16'%20fill='%23AA151B'/%3e%3crect%20x='176'%20y='256'%20width='96'%20height='16'%20fill='%23AA151B'/%3e%3c/svg%3e", Bt = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='512'%20height='512'%20fill='%23006600'/%3e%3crect%20width='204.8'%20height='512'%20fill='%23FF0000'/%3e%3ccircle%20cx='204.8'%20cy='256'%20r='76.8'%20fill='%23FFCC00'/%3e%3ccircle%20cx='204.8'%20cy='256'%20r='70.4'%20fill='%23FFFFFF'/%3e%3cpath%20d='M%20134.4%20256%20A%2070.4%2070.4%200%200%201%20204.8%20185.6%20A%2070.4%2070.4%200%200%201%20275.2%20256%20A%2070.4%2070.4%200%200%201%20204.8%20326.4%20A%2070.4%2070.4%200%200%201%20134.4%20256%20Z'%20fill='%23FF0000'/%3e%3cpath%20d='M%20153.6%20230.4%20L%20256%20230.4%20L%20256%20281.6%20L%20153.6%20281.6%20Z'%20fill='%230000CC'/%3e%3ccircle%20cx='204.8'%20cy='256'%20r='12.8'%20fill='%23FFCC00'/%3e%3c/svg%3e", Vt = ["src", "alt"], Ht = ["src", "alt"], Ut = ["src", "alt"], Wt = ["src", "alt"], Gt = { class: "text-disabled text-subtitle-1 pl-2" }, Kt = /* @__PURE__ */ g({
	name: "LanguagesMenu",
	__name: "LanguagesMenu",
	setup(e) {
		let t = [
			{
				title: "English",
				subtext: "US",
				value: "en",
				avatar: Rt
			},
			{
				title: "Español",
				subtext: "ES",
				value: "es",
				avatar: zt
			},
			{
				title: "Português",
				subtext: "PT",
				value: "pt",
				avatar: Bt
			}
		], { locale: n } = r({ useScope: "global" });
		function i(e) {
			n.value = e, Ft(e);
		}
		return (e, r) => {
			let a = T("v-avatar"), s = T("v-btn"), f = T("v-list-item-title"), p = T("v-list-item"), g = T("v-list"), _ = T("v-sheet"), y = T("v-menu");
			return x(), c(y, {
				"close-on-content-click": !1,
				location: "bottom"
			}, {
				activator: k(({ props: e }) => [h(s, v({
					icon: "",
					variant: "text",
					color: "primary"
				}, e), {
					default: k(() => [h(a, { size: "22" }, {
						default: k(() => [
							O(n) === "en" ? (x(), u("img", {
								key: 0,
								src: O(Rt),
								alt: O(n),
								width: "22",
								height: "22",
								class: "obj-cover"
							}, null, 8, Vt)) : l("", !0),
							O(n) === "es" ? (x(), u("img", {
								key: 1,
								src: O(zt),
								alt: O(n),
								width: "22",
								height: "22",
								class: "obj-cover"
							}, null, 8, Ht)) : l("", !0),
							O(n) === "pt" ? (x(), u("img", {
								key: 2,
								src: O(Bt),
								alt: O(n),
								width: "22",
								height: "22",
								class: "obj-cover"
							}, null, 8, Ut)) : l("", !0)
						]),
						_: 1
					})]),
					_: 1
				}, 16)]),
				default: k(() => [h(_, {
					rounded: "md",
					width: "200",
					elevation: "10"
				}, {
					default: k(() => [h(g, { class: "theme-list" }, {
						default: k(() => [(x(), u(o, null, C(t, (e, t) => h(p, {
							key: t,
							color: "primary",
							active: O(n) === e.value,
							class: "d-flex align-center",
							onClick: (t) => i(e.value)
						}, {
							prepend: k(() => [h(a, { size: "22" }, {
								default: k(() => [d("img", {
									src: e.avatar,
									alt: e.avatar,
									width: "22",
									height: "22",
									class: "obj-cover"
								}, null, 8, Wt)]),
								_: 2
							}, 1024)]),
							default: k(() => [h(f, { class: "text-subtitle-1 font-weight-regular" }, {
								default: k(() => [m(D(e.title) + " ", 1), d("span", Gt, "(" + D(e.subtext) + ")", 1)]),
								_: 2
							}, 1024)]),
							_: 2
						}, 1032, ["active", "onClick"])), 64))]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			});
		};
	}
}), qt = /* @__PURE__ */ g({
	name: "ModeToggle",
	__name: "ModeToggle",
	setup(e) {
		let { t } = r(), n = q(), i = s(() => t(n.darkMode ? "common.mode.light" : "common.mode.dark"));
		return (e, t) => {
			let r = T("v-tooltip"), a = T("v-btn");
			return x(), c(a, {
				icon: "",
				variant: "text",
				"aria-label": i.value,
				onClick: t[0] ||= (e) => O(n).toggleDarkMode()
			}, {
				default: k(() => [h(r, {
					activator: "parent",
					location: "bottom"
				}, {
					default: k(() => [m(D(i.value), 1)]),
					_: 1
				}), O(n).darkMode ? (x(), c(O(pe), {
					key: 1,
					size: "20",
					"stroke-width": "1.5"
				})) : (x(), c(O(de), {
					key: 0,
					size: "20",
					"stroke-width": "1.5"
				}))]),
				_: 1
			}, 8, ["aria-label"]);
		};
	}
}), Jt = "text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium cursor-pointer", Yt = /* @__PURE__ */ g({
	__name: "AppLink",
	props: { to: {} },
	setup(e) {
		return (t, n) => {
			let r = T("RouterLink");
			return e.to === void 0 ? (x(), u("a", {
				key: 1,
				class: y(Jt),
				role: "button",
				tabindex: "0"
			}, [w(t.$slots, "default")])) : (x(), c(r, {
				key: 0,
				to: e.to,
				class: y(Jt)
			}, {
				default: k(() => [w(t.$slots, "default")]),
				_: 3
			}, 8, ["to"]));
		};
	}
}), Xt = { class: "d-flex align-center ga-3 min-w-0" }, Zt = { class: "text-h4 font-weight-bold" }, Qt = {
	key: 0,
	class: "d-flex justify-center align-center py-12"
}, $t = /*#__PURE__*/ H(/* @__PURE__ */ g({
	__name: "AppModal",
	props: {
		modelValue: { type: Boolean },
		title: {},
		icon: { default: void 0 },
		maxWidth: { default: 500 },
		saveText: { default: void 0 },
		cancelText: { default: void 0 },
		saveDisabled: {
			type: Boolean,
			default: !1
		},
		loading: {
			type: Boolean,
			default: !1
		},
		contentLoading: {
			type: Boolean,
			default: !1
		}
	},
	emits: [
		"update:modelValue",
		"save",
		"cancel"
	],
	setup(e, { emit: t }) {
		let { t: n } = r(), i = e, a = t, o = s({
			get: () => i.modelValue,
			set: (e) => a("update:modelValue", e)
		}), f = s(() => i.cancelText ?? n("common.cancel")), p = s(() => i.saveText ?? n("common.save"));
		return (t, n) => {
			let r = T("v-icon"), i = T("v-avatar"), s = T("v-btn"), g = T("v-card-title"), _ = T("v-progress-circular"), v = T("v-card-text"), y = T("v-card-actions"), b = T("v-card"), S = T("v-dialog");
			return x(), c(S, {
				modelValue: o.value,
				"onUpdate:modelValue": n[3] ||= (e) => o.value = e,
				"max-width": e.maxWidth,
				persistent: "",
				"no-click-animation": ""
			}, {
				default: k(() => [h(b, { class: "app-modal-card d-flex flex-column" }, {
					default: k(() => [
						h(g, { class: "app-modal-header px-6 pt-5 pb-2 d-flex align-center justify-space-between flex-shrink-0" }, {
							default: k(() => [d("div", Xt, [e.icon ? (x(), c(i, {
								key: 0,
								color: "primary",
								variant: "tonal",
								rounded: "lg",
								size: "36",
								class: "flex-shrink-0"
							}, {
								default: k(() => [h(r, { size: "20" }, {
									default: k(() => [m(D(e.icon), 1)]),
									_: 1
								})]),
								_: 1
							})) : l("", !0), d("span", Zt, D(e.title), 1)]), h(s, {
								icon: "",
								variant: "text",
								size: "small",
								onClick: n[0] ||= (e) => a("cancel")
							}, {
								default: k(() => [h(r, { size: "18" }, {
									default: k(() => [...n[4] ||= [m("mdi-close", -1)]]),
									_: 1
								})]),
								_: 1
							})]),
							_: 1
						}),
						h(v, { class: "app-modal-body px-6 pb-2 flex-grow-1 overflow-y-auto" }, {
							default: k(() => [e.contentLoading ? (x(), u("div", Qt, [h(_, {
								indeterminate: "",
								color: "primary",
								size: "48"
							})])) : w(t.$slots, "default", {}, void 0, !0, 1)]),
							_: 3
						}),
						h(y, { class: "app-modal-footer px-6 pb-5 pt-3 d-flex justify-end ga-2 flex-shrink-0" }, {
							default: k(() => [h(s, {
								variant: "text",
								onClick: n[1] ||= (e) => a("cancel")
							}, {
								default: k(() => [m(D(f.value), 1)]),
								_: 1
							}), h(s, {
								color: "primary",
								variant: "flat",
								loading: e.loading,
								disabled: e.saveDisabled || e.contentLoading,
								onClick: n[2] ||= (e) => a("save")
							}, {
								default: k(() => [m(D(p.value), 1)]),
								_: 1
							}, 8, ["loading", "disabled"])]),
							_: 1
						})
					]),
					_: 3
				})]),
				_: 3
			}, 8, ["modelValue", "max-width"]);
		};
	}
}), [["__scopeId", "data-v-c40b0ea1"]]), en = { class: "image-uploader" }, tn = { class: "image-uploader-card" }, nn = ["src", "alt"], rn = {
	key: 2,
	class: "image-uploader-loading-overlay"
}, an = { class: "image-uploader-actions" }, on = ["disabled"], sn = ["disabled"], cn = {
	key: 0,
	class: "text-caption text-medium-emphasis mt-1"
}, ln = {
	key: 1,
	class: "text-caption text-error mt-1"
}, un = ["accept"], dn = /*#__PURE__*/ H(/* @__PURE__ */ g({
	__name: "ImageUploader",
	props: {
		modelValue: {},
		uploadFn: {},
		accept: { default: "image/png,image/jpeg" },
		dark: {
			type: Boolean,
			default: !1
		},
		helpText: { default: void 0 },
		altText: { default: "image" },
		maxSizeMb: { default: 1 }
	},
	emits: ["update:modelValue", "error"],
	setup(e, { emit: t }) {
		let n = {
			"image/png": "PNG",
			"image/jpeg": "JPG",
			"image/webp": "WebP",
			"image/gif": "GIF",
			"image/svg+xml": "SVG"
		}, i = e, a = t, { t: o } = r(), s = S(null), f = S(!1), p = S(null), m = () => {
			p.value = null, s.value?.click();
		}, g = () => {
			s.value && (s.value.value = "");
		}, _ = () => {
			let e = i.accept.split(",").map((e) => e.trim()).filter(Boolean);
			return e.some((e) => e.endsWith("/*")) ? [] : e;
		}, v = async (e) => {
			let t = e.target.files?.[0];
			if (!t) return;
			let r = _();
			if (r.length > 0 && !r.includes(t.type)) {
				let e = r.map((e) => n[e] ?? e).join(", "), t = o("common.invalidFormat", { formats: e });
				p.value = t, a("error", t), g();
				return;
			}
			if (t.size > i.maxSizeMb * 1024 * 1024) {
				let e = o("common.fileTooLarge", { max: i.maxSizeMb });
				p.value = e, a("error", e), g();
				return;
			}
			f.value = !0, p.value = null;
			try {
				let e = await i.uploadFn(t);
				a("update:modelValue", e);
			} catch {
				let e = o("common.uploadFailed");
				p.value = e, a("error", e);
			} finally {
				f.value = !1, g();
			}
		}, b = () => {
			a("update:modelValue", ""), g();
		};
		return (t, n) => {
			let r = T("v-progress-circular");
			return x(), u("div", en, [
				d("div", tn, [d("div", { class: y(["image-uploader-preview", { "image-uploader-preview--dark": e.dark }]) }, [e.modelValue ? (x(), u("img", {
					key: 0,
					src: e.modelValue,
					alt: e.altText
				}, null, 8, nn)) : (x(), c(O(fe), {
					key: 1,
					size: 40,
					"stroke-width": "1.5",
					class: "image-uploader-placeholder-icon"
				})), f.value ? (x(), u("div", rn, [h(r, {
					indeterminate: "",
					color: "primary",
					size: "32"
				})])) : l("", !0)], 2), d("div", an, [d("button", {
					type: "button",
					class: "image-uploader-btn",
					disabled: f.value,
					onClick: m
				}, [h(O(he), {
					size: 18,
					"stroke-width": "2"
				}), d("span", null, D(t.$t("common.change")), 1)], 8, on), d("button", {
					type: "button",
					class: "image-uploader-btn image-uploader-btn--danger",
					disabled: f.value || !e.modelValue,
					onClick: b
				}, [h(O(me), {
					size: 18,
					"stroke-width": "2"
				}), d("span", null, D(t.$t("common.remove")), 1)], 8, sn)])]),
				e.helpText ? (x(), u("div", cn, D(e.helpText), 1)) : l("", !0),
				p.value ? (x(), u("div", ln, D(p.value), 1)) : l("", !0),
				d("input", {
					ref_key: "fileInput",
					ref: s,
					type: "file",
					accept: e.accept,
					class: "d-none",
					onChange: v
				}, null, 40, un)
			]);
		};
	}
}), [["__scopeId", "data-v-8d1a368c"]]), fn = /* @__PURE__ */ g({
	inheritAttrs: !1,
	__name: "AppInput",
	props: {
		modelValue: {},
		label: {},
		type: {},
		density: {},
		disabled: { type: Boolean },
		prefix: {},
		required: { type: Boolean },
		v$: {}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = s({
			get: () => n.modelValue,
			set: (e) => r("update:modelValue", e)
		}), a = s(() => n.v$ ? { "error-messages": n.v$.$errors.map((e) => String(e.$message)) } : {});
		return (t, n) => {
			let r = T("v-text-field");
			return x(), c(r, v({
				variant: "outlined",
				"hide-details": "",
				modelValue: i.value,
				"onUpdate:modelValue": n[0] ||= (e) => i.value = e,
				label: e.label,
				type: e.type,
				density: e.density,
				disabled: e.disabled,
				prefix: e.prefix,
				required: e.required
			}, {
				...t.$attrs,
				...a.value
			}, {
				onBlur: n[1] ||= (t) => e.v$?.$touch(),
				onInput: n[2] ||= (t) => e.v$?.$touch()
			}), null, 16, [
				"modelValue",
				"label",
				"type",
				"density",
				"disabled",
				"prefix",
				"required"
			]);
		};
	}
}), pn = /* @__PURE__ */ g({
	inheritAttrs: !1,
	__name: "AppSelect",
	props: {
		modelValue: {},
		label: {},
		items: {},
		density: {},
		clearable: { type: Boolean },
		multiple: { type: Boolean },
		disabled: { type: Boolean },
		v$: {}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = s({
			get: () => n.modelValue,
			set: (e) => r("update:modelValue", e)
		}), a = s(() => n.v$ ? { "error-messages": n.v$.$errors.map((e) => String(e.$message)) } : {});
		return (t, n) => {
			let r = T("v-select");
			return x(), c(r, v({
				variant: "outlined",
				"hide-details": "",
				modelValue: i.value,
				"onUpdate:modelValue": n[0] ||= (e) => i.value = e,
				label: e.label,
				items: e.items,
				density: e.density,
				clearable: e.clearable,
				multiple: e.multiple,
				disabled: e.disabled
			}, {
				...t.$attrs,
				...a.value
			}, {
				onBlur: n[1] ||= (t) => e.v$?.$touch(),
				onInput: n[2] ||= (t) => e.v$?.$touch()
			}), null, 16, [
				"modelValue",
				"label",
				"items",
				"density",
				"clearable",
				"multiple",
				"disabled"
			]);
		};
	}
}), mn = /* @__PURE__ */ g({
	inheritAttrs: !1,
	__name: "AppAutocomplete",
	props: {
		modelValue: {},
		label: {},
		items: {},
		density: {},
		clearable: { type: Boolean },
		multiple: { type: Boolean },
		disabled: { type: Boolean },
		v$: {}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = s({
			get: () => n.modelValue,
			set: (e) => r("update:modelValue", e)
		}), a = s(() => n.v$ ? { "error-messages": n.v$.$errors.map((e) => String(e.$message)) } : {});
		return (t, n) => {
			let r = T("v-autocomplete");
			return x(), c(r, v({
				variant: "outlined",
				"hide-details": "",
				modelValue: i.value,
				"onUpdate:modelValue": n[0] ||= (e) => i.value = e,
				label: e.label,
				items: e.items,
				density: e.density,
				clearable: e.clearable,
				multiple: e.multiple,
				disabled: e.disabled
			}, {
				...t.$attrs,
				...a.value
			}, {
				onBlur: n[1] ||= (t) => e.v$?.$touch(),
				onInput: n[2] ||= (t) => e.v$?.$touch()
			}), null, 16, [
				"modelValue",
				"label",
				"items",
				"density",
				"clearable",
				"multiple",
				"disabled"
			]);
		};
	}
}), hn = /* @__PURE__ */ g({
	inheritAttrs: !1,
	__name: "AppTextarea",
	props: {
		modelValue: {},
		label: {},
		disabled: { type: Boolean },
		v$: {}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = s({
			get: () => n.modelValue,
			set: (e) => r("update:modelValue", e)
		}), a = s(() => n.v$ ? { "error-messages": n.v$.$errors.map((e) => String(e.$message)) } : {});
		return (t, n) => {
			let r = T("v-textarea");
			return x(), c(r, v({
				variant: "outlined",
				"hide-details": "",
				modelValue: i.value,
				"onUpdate:modelValue": n[0] ||= (e) => i.value = e,
				label: e.label,
				disabled: e.disabled
			}, {
				...t.$attrs,
				...a.value
			}, {
				onBlur: n[1] ||= (t) => e.v$?.$touch(),
				onInput: n[2] ||= (t) => e.v$?.$touch()
			}), null, 16, [
				"modelValue",
				"label",
				"disabled"
			]);
		};
	}
}), gn = /* @__PURE__ */ g({
	inheritAttrs: !1,
	__name: "AppPasswordInput",
	props: {
		modelValue: {},
		label: {},
		density: {},
		disabled: { type: Boolean },
		required: { type: Boolean },
		autofill: { type: Boolean },
		v$: {}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = S(!1), a = s(() => n.autofill ? "current-password" : "new-password"), o = s({
			get: () => n.modelValue,
			set: (e) => r("update:modelValue", e)
		}), l = s(() => n.v$ ? { "error-messages": n.v$.$errors.map((e) => String(e.$message)) } : {});
		return (t, n) => {
			let r = T("v-text-field");
			return x(), c(r, v({
				variant: "outlined",
				"hide-details": "",
				modelValue: o.value,
				"onUpdate:modelValue": n[0] ||= (e) => o.value = e,
				label: e.label,
				type: i.value ? "text" : "password",
				density: e.density,
				disabled: e.disabled,
				required: e.required,
				"append-inner-icon": i.value ? "mdi-eye" : "mdi-eye-off",
				autocomplete: a.value
			}, {
				...t.$attrs,
				...l.value
			}, {
				"onClick:appendInner": n[1] ||= (e) => i.value = !i.value,
				onBlur: n[2] ||= (t) => e.v$?.$touch(),
				onInput: n[3] ||= (t) => e.v$?.$touch()
			}), null, 16, [
				"modelValue",
				"label",
				"type",
				"density",
				"disabled",
				"required",
				"append-inner-icon",
				"autocomplete"
			]);
		};
	}
}), _n = {
	key: 0,
	class: "text-body-2 mb-1 text-medium-emphasis"
}, vn = ["title"], yn = {
	key: 1,
	class: "text-caption text-error mt-1"
}, bn = /*#__PURE__*/ H(/* @__PURE__ */ g({
	__name: "AppColorPicker",
	props: {
		modelValue: {},
		label: {},
		placeholder: {},
		v$: {}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = S(!1), a = s({
			get: () => n.modelValue ?? null,
			set: (e) => r("update:modelValue", e)
		}), o = s(() => n.v$?.$errors.map((e) => String(e.$message)) ?? []), f = s(() => o.value.length > 0);
		return (t, n) => {
			let r = T("v-icon"), s = T("v-color-picker"), p = T("v-text-field"), g = T("v-btn"), _ = T("v-card-actions"), y = T("v-card"), b = T("v-menu");
			return x(), u("div", null, [
				e.label ? (x(), u("div", _n, D(e.label), 1)) : l("", !0),
				h(b, {
					modelValue: i.value,
					"onUpdate:modelValue": n[4] ||= (e) => i.value = e,
					"close-on-content-click": !1,
					location: "bottom start"
				}, {
					activator: k(({ props: t }) => [d("div", v(t, {
						class: ["app-color-picker__swatch", { "app-color-picker__swatch--error": f.value }],
						style: { backgroundColor: a.value ?? "#E0E0E0" },
						title: a.value ?? e.placeholder
					}), [a.value ? l("", !0) : (x(), c(r, {
						key: 0,
						size: "18",
						color: "grey-darken-1"
					}, {
						default: k(() => [...n[5] ||= [m("mdi-eyedropper", -1)]]),
						_: 1
					}))], 16, vn)]),
					default: k(() => [h(y, {
						elevation: "4",
						rounded: "lg"
					}, {
						default: k(() => [h(s, {
							modelValue: a.value,
							"onUpdate:modelValue": n[0] ||= (e) => a.value = e,
							mode: "hex",
							"hide-inputs": ""
						}, null, 8, ["modelValue"]), h(_, { class: "pt-0 px-4 pb-3" }, {
							default: k(() => [h(p, {
								modelValue: a.value,
								"onUpdate:modelValue": n[1] ||= (e) => a.value = e,
								density: "compact",
								variant: "outlined",
								"hide-details": "",
								placeholder: e.placeholder,
								clearable: "",
								"onClick:clear": n[2] ||= (e) => a.value = null
							}, null, 8, ["modelValue", "placeholder"]), h(g, {
								variant: "text",
								class: "ml-2",
								onClick: n[3] ||= (e) => i.value = !1
							}, {
								default: k(() => [...n[6] ||= [m("OK", -1)]]),
								_: 1
							})]),
							_: 1
						})]),
						_: 1
					})]),
					_: 1
				}, 8, ["modelValue"]),
				f.value ? (x(), u("div", yn, D(o.value[0]), 1)) : l("", !0)
			]);
		};
	}
}), [["__scopeId", "data-v-392bbcee"]]);
//#endregion
//#region src/utils/error.ts
function xn(e, t) {
	return e instanceof Error ? e.message : e && typeof e == "object" && "message" in e ? String(e.message) : t;
}
//#endregion
//#region src/utils/logger.ts
var Z = !1, Q = !1;
function Sn(e) {
	Z = e.isDev, Q = e.sentryEnabled;
}
var $ = {
	error(e, ...t) {
		if (Z && console.error(e, ...t), Q) {
			let n = t.find((e) => e instanceof Error);
			A.captureException(n ?? Error(e), { extra: {
				message: e,
				context: t
			} });
		}
	},
	warn(e, ...t) {
		Z && console.warn(e, ...t), Q && A.captureMessage(e, {
			level: "warning",
			extra: { context: t }
		});
	},
	info(e, ...t) {
		Z && console.info(e, ...t);
	},
	debug(e, ...t) {
		Z && console.debug(e, ...t);
	}
};
//#endregion
//#region src/composables/useApiCall.ts
function Cn(e) {
	return async function(t, n = "API request failed:") {
		e.value = !0;
		try {
			return await t();
		} catch (e) {
			throw $.error(n, xn(e, "Unknown error")), e;
		} finally {
			e.value = !1;
		}
	};
}
//#endregion
//#region src/constants/datatable.ts
var wn = 10, Tn = (e) => {
	let { locale: t } = r({ useScope: "global" });
	ne(() => t.value, () => {
		e();
	}), e();
};
//#endregion
export { ve as AQUA_THEME, mn as AppAutocomplete, bn as AppColorPicker, fn as AppInput, Yt as AppLink, $t as AppModal, gn as AppPasswordInput, pn as AppSelect, hn as AppTextarea, M as BLUE_THEME, Et as BlankLayout, Ve as BreadcrumbBar, F as CYAN_THEME, nt as ConfirmationModal, V as DARK_AQUA_THEME, B as DARK_BLUE_THEME, Ce as DARK_CYAN_THEME, Ee as DARK_DEFAULT_THEME, Te as DARK_EMERALD_THEME, Se as DARK_GREEN_THEME, we as DARK_ORANGE_THEME, xe as DARK_PURPLE_THEME, wn as DEFAULT_ITEMS_PER_PAGE, R as DEFAULT_THEME, L as EMERALD_THEME, Nt as ErrorPage, ke as FormCard, Tt as FullLayout, P as GREEN_THEME, pt as HeaderLeftWidgetsKey, mt as HeaderRightWidgetsKey, dn as ImageUploader, Kt as LanguagesMenu, ft as LogoComponentKey, gt as LogoLinkKey, qt as ModeToggle, Ot as NotFoundArt, I as ORANGE_THEME, N as PURPLE_THEME, Je as PageHeader, je as ParentCard, Xe as PillTabs, ht as SidebarItemsKey, Ze as TagChip, tt as TextItem, it as VuetifyAppKit, Sn as configureLogger, De as createAppVuetify, xn as getErrorMessage, at as getInitials, ot as getSubdomain, st as getTenantFromPath, W as getTenantStorageKey, X as getUserLanguage, $ as logger, dt as setCustomizerDefaults, It as setDefaultLanguage, Ft as setI18nLanguage, Lt as setupI18n, Cn as useApiCall, q as useCustomizerStore, Tn as useI18nTranslation };
