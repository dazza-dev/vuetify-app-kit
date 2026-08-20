import { createVuetify as e } from "vuetify";
import { createVueI18nAdapter as t } from "vuetify/locale/adapters/vue-i18n";
import { createI18n as n, useI18n as r } from "vue-i18n";
import * as i from "vuetify/components";
import * as a from "vuetify/directives";
import { Fragment as o, computed as s, createBlock as c, createCommentVNode as l, createElementBlock as u, createElementVNode as d, createSlots as f, createTextVNode as p, createVNode as m, defineComponent as h, inject as g, mergeProps as _, normalizeClass as v, normalizeStyle as y, openBlock as b, ref as x, renderList as S, renderSlot as C, resolveComponent as w, resolveDynamicComponent as T, shallowRef as ee, toDisplayString as E, unref as D, watch as te, withCtx as O, withModifiers as ne } from "vue";
import { RouterLink as re, RouterView as k } from "vue-router";
import { defineStore as ie } from "pinia";
import { PerfectScrollbar as ae } from "vue3-perfect-scrollbar";
import { DotsIcon as oe, Menu2Icon as A, PhotoIcon as se, TrashIcon as ce, UploadIcon as le } from "vue-tabler-icons";
import * as ue from "@sentry/vue";
//#region src/theme/LightTheme.ts
var de = {
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
}, fe = {
	"border-color": "#e5eaef",
	"border-opacity": 1
};
function j(e, t, n, r, i, a) {
	return {
		name: e,
		dark: !1,
		variables: { ...fe },
		colors: {
			...de,
			primary: t,
			secondary: n,
			sidebarBg: t,
			lightprimary: r,
			lightsecondary: i,
			...a
		}
	};
}
var pe = j("BLUE_THEME", "#5D87FF", "#49BEFF", "#ECF2FF", "#E8F7FF"), me = j("AQUA_THEME", "#0074BA", "#47D7BC", "#EFF9FF", "#EDFBF7"), he = j("PURPLE_THEME", "#763EBD", "#95CFD5", "#F2ECF9", "#EDF8FA"), ge = j("GREEN_THEME", "#0A7EA4", "#CCDA4E", "#F4F9FB", "#FAFBEF"), _e = j("CYAN_THEME", "#01C0C8", "#FB9678", "#EBF9FA", "#FFF5F2", { success: "#00e676" }), ve = j("ORANGE_THEME", "#FA896B", "#0074BA", "#FBF2EF", "#EFF9FF", {
	success: "#00e676",
	warning: "#ffe57f"
}), ye = j("EMERALD_THEME", "#00c853", "#00e676", "#E6F9ED", "#E9FBF1", {
	sidebarBg: "#12161C",
	success: "#00e676"
}), M = j("DEFAULT_THEME", "#562ff4", "#49BEFF", "#EDE8FE", "#E8F7FF"), be = {
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
}, xe = {
	"border-color": "#333F55",
	"border-opacity": 1
};
function N(e, t, n, r, i, a) {
	return {
		name: e,
		dark: !0,
		variables: { ...xe },
		colors: {
			...be,
			primary: t,
			secondary: n,
			sidebarBg: t,
			lightprimary: r,
			lightsecondary: i,
			...a
		}
	};
}
var P = N("DARK_BLUE_THEME", "#5D87FF", "#49BEFF", "#253662", "#1C455D", {
	containerBg: "#2a3447",
	background: "#2a3447",
	surface: "#2a3447",
	"on-surface-variant": "#2a3447"
}), F = N("DARK_AQUA_THEME", "#0074BA", "#47D7BC", "#103247", "#0C4339"), I = N("DARK_PURPLE_THEME", "#763EBD", "#95CFD5", "#26153C", "#09454B"), L = N("DARK_GREEN_THEME", "#0A7EA4", "#CCDA4E", "#05313F", "#282917"), R = N("DARK_CYAN_THEME", "#01C0C8", "#FB9678", "#003638", "#40241C"), z = N("DARK_ORANGE_THEME", "#FA896B", "#0074BA", "#402E32", "#082E45"), B = N("DARK_EMERALD_THEME", "#00c853", "#00e676", "#0C4339", "#003638", {
	sidebarBg: "#0B0E12",
	success: "#00e676"
}), V = N("DARK_DEFAULT_THEME", "#562ff4", "#49BEFF", "#1C1060", "#1C455D");
//#endregion
//#region src/vuetify.ts
function Se(n) {
	return e({
		components: i,
		directives: a,
		theme: {
			defaultTheme: "EMERALD_THEME",
			themes: {
				DEFAULT_THEME: M,
				BLUE_THEME: pe,
				AQUA_THEME: me,
				PURPLE_THEME: he,
				GREEN_THEME: ge,
				CYAN_THEME: _e,
				EMERALD_THEME: ye,
				ORANGE_THEME: ve,
				DARK_DEFAULT_THEME: V,
				DARK_BLUE_THEME: P,
				DARK_AQUA_THEME: F,
				DARK_ORANGE_THEME: z,
				DARK_PURPLE_THEME: I,
				DARK_GREEN_THEME: L,
				DARK_CYAN_THEME: R,
				DARK_EMERALD_THEME: B
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
				color: "primary"
			},
			VListItem: { minHeight: "45px" },
			VTooltip: { location: "top" }
		}
	});
}
//#endregion
//#region src/components/cards/FormCard.vue?vue&type=script&setup=true&lang.ts
var Ce = { class: "d-sm-flex align-center justify-space-between" }, H = /* @__PURE__ */ h({
	name: "FormCard",
	__name: "FormCard",
	props: {
		title: {},
		icon: {}
	},
	setup(e) {
		return (t, n) => {
			let r = w("v-icon"), i = w("v-card-title"), a = w("v-card-item"), o = w("v-divider"), s = w("v-card-text"), u = w("v-card");
			return b(), c(u, { elevation: "0" }, {
				default: O(() => [
					e.title ? (b(), c(a, { key: 0 }, {
						default: O(() => [d("div", Ce, [m(i, { class: "text-h5" }, {
							default: O(() => [C(t.$slots, "title", {}, () => [e.icon ? (b(), c(r, {
								key: 0,
								class: "mr-2"
							}, {
								default: O(() => [p(E(e.icon), 1)]),
								_: 1
							})) : l("", !0), p(" " + E(e.title), 1)])]),
							_: 3
						})])]),
						_: 3
					})) : l("", !0),
					m(o),
					m(s, { class: "pb-0" }, {
						default: O(() => [C(t.$slots, "default")]),
						_: 3
					})
				]),
				_: 3
			});
		};
	}
}), we = { class: "d-sm-flex align-center justify-space-between" }, U = /* @__PURE__ */ h({
	name: "ParentCard",
	__name: "ParentCard",
	props: { title: {} },
	setup(e) {
		return (t, n) => {
			let r = w("v-card-title"), i = w("v-card-item"), a = w("v-divider"), s = w("v-card-text"), f = w("v-card");
			return b(), c(f, { elevation: "10" }, {
				default: O(() => [
					e.title || t.$slots.header || t.$slots.action ? (b(), u(o, { key: 0 }, [m(i, { class: v([
						"px-6",
						"pb-4",
						t.$slots.header ? "pt-6" : "pt-4"
					]) }, {
						default: O(() => [d("div", we, [e.title ? (b(), c(r, {
							key: 0,
							class: "text-h5"
						}, {
							default: O(() => [p(E(e.title), 1)]),
							_: 1
						})) : C(t.$slots, "header", {}, void 0, void 0, 1), C(t.$slots, "action")])]),
						_: 3
					}, 8, ["class"]), m(a)], 64)) : l("", !0),
					m(s, null, {
						default: O(() => [C(t.$slots, "default")]),
						_: 3
					}),
					t.$slots.footer ? (b(), u(o, { key: 1 }, [m(a), m(s, null, {
						default: O(() => [C(t.$slots, "footer")]),
						_: 3
					})], 64)) : l("", !0)
				]),
				_: 3
			});
		};
	}
}), Te = { class: "px-8 py-8" }, Ee = { class: "d-flex justify-space-between" }, De = { class: "d-flex py-0 align-center" }, Oe = { class: "text-h3 mb-2" }, ke = { class: "d-flex align-center flex-wrap ga-1 mt-1" }, Ae = {
	key: 0,
	class: "text-subtitle-2 text-medium-emphasis"
}, je = {
	key: 2,
	class: "text-subtitle-2 text-medium-emphasis"
}, Me = {
	key: 0,
	class: "d-none py-0 d-lg-block overflow-hidden"
}, Ne = /*@__PURE__*/ h({
	name: "BreadcrumbBar",
	__name: "Breadcrumb",
	props: {
		title: {},
		breadcrumbs: {},
		image: {}
	},
	setup(e) {
		return (t, n) => {
			let r = w("v-card");
			return b(), c(r, { class: "bg-lightprimary elevation-0 rounded-md mb-8" }, {
				default: O(() => [d("div", Te, [d("div", Ee, [d("div", De, [d("div", null, [d("h3", Oe, E(e.title), 1), d("nav", ke, [(b(!0), u(o, null, S(e.breadcrumbs, (e, t) => (b(), u(o, { key: t }, [t > 0 ? (b(), u("span", Ae, "•")) : l("", !0), e.href && !e.disabled ? (b(), c(D(re), {
					key: 1,
					to: e.href,
					class: "text-subtitle-2 text-decoration-none text-textPrimary"
				}, {
					default: O(() => [p(E(e.title), 1)]),
					_: 2
				}, 1032, ["to"])) : (b(), u("span", je, E(e.title), 1))], 64))), 128))])])]), e.image ? (b(), u("div", Me, [d("div", {
					class: "breadcrumb-image",
					style: y({ backgroundImage: `url(${e.image})` })
				}, null, 4)])) : l("", !0)])])]),
				_: 1
			});
		};
	}
}), W = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, G = /*#__PURE__*/ W(Ne, [["__scopeId", "data-v-aa35cfca"]]), Pe = { class: "d-flex align-start justify-space-between mb-6" }, Fe = { class: "text-h2 font-weight-bold text-black" }, Ie = {
	key: 0,
	class: "text-body-1 text-medium-emphasis mt-1"
}, Le = {
	key: 0,
	class: "page-header-actions d-flex ga-2 align-center flex-shrink-0 ml-4"
}, K = /* @__PURE__ */ h({
	name: "PageHeader",
	__name: "PageHeader",
	props: {
		title: {},
		subtitle: {}
	},
	setup(e) {
		return (t, n) => (b(), u("div", Pe, [d("div", null, [d("h2", Fe, E(e.title), 1), e.subtitle ? (b(), u("p", Ie, E(e.subtitle), 1)) : l("", !0)]), t.$slots.actions ? (b(), u("div", Le, [C(t.$slots, "actions")])) : l("", !0)]));
	}
}), Re = { class: "text-caption text-truncate" }, ze = /* @__PURE__ */ h({
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
			let i = w("v-btn"), a = w("v-col"), s = w("v-row"), l = w("v-container");
			return b(), u("div", null, [m(l, {
				fluid: "",
				class: "pa-0"
			}, {
				default: O(() => [m(s, {
					dense: "",
					class: "ma-0"
				}, {
					default: O(() => [(b(!0), u(o, null, S(e.items, (t, r) => (b(), c(a, {
						key: t.value,
						cols: e.breakpoints.mobile,
						md: e.breakpoints.desktop,
						class: "pa-1"
					}, {
						default: O(() => [m(i, {
							value: t.value,
							class: v([["w-100", e.modelValue === t.value ? "bg-primary" : "bg-lightprimary text-white"], "px-2"]),
							variant: "tonal",
							rounded: "lg",
							onClick: (e) => n("update:modelValue", t.value),
							height: "40"
						}, {
							default: O(() => [(b(), c(T(t.icon), {
								class: "mr-1",
								size: "16"
							})), d("span", Re, E(e.showNumbers ? `${r + 1}.` : "") + " " + E(t.text), 1)]),
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
			}), C(t.$slots, "default")]);
		};
	}
}), Be = /* @__PURE__ */ h({
	name: "TagChip",
	__name: "Tag",
	props: {
		title: {},
		icon: {},
		size: { default: "small" },
		color: { default: "primary" }
	},
	setup(e) {
		return (t, n) => {
			let r = w("v-icon"), i = w("v-chip");
			return b(), c(i, {
				class: v(["text-body-2 font-weight-medium", "bg-" + e.color]),
				size: e.size
			}, {
				default: O(() => [C(t.$slots, "title", {}, () => [e.icon ? (b(), c(r, {
					key: 0,
					class: "mr-2"
				}, {
					default: O(() => [p(E(e.icon), 1)]),
					_: 1
				})) : l("", !0), p(" " + E(e.title), 1)])]),
				_: 3
			}, 8, ["class", "size"]);
		};
	}
}), Ve = { class: "d-flex gap-3 mb-5" }, He = {
	key: 0,
	class: "text-h6"
}, Ue = {
	key: 1,
	class: "text-subtitle-1"
}, We = /* @__PURE__ */ h({
	name: "TextItem",
	__name: "TextItem",
	props: {
		title: {},
		value: {},
		icon: {}
	},
	setup(e) {
		return (t, n) => {
			let r = w("v-icon");
			return b(), u("div", Ve, [
				C(t.$slots, "icon", {}, () => [e.icon ? (b(), c(r, { key: 0 }, {
					default: O(() => [p(E(e.icon), 1)]),
					_: 1
				})) : l("", !0)]),
				e.title ? (b(), u("span", He, E(e.title), 1)) : l("", !0),
				e.value || t.$slots.value ? (b(), u("span", Ue, [C(t.$slots, "value", {}, () => [p(E(e.value), 1)])])) : l("", !0)
			]);
		};
	}
}), Ge = /* @__PURE__ */ h({
	name: "ConfirmationModal",
	__name: "ConfirmationModal",
	props: {
		show: { type: Boolean },
		title: { default: "Are you sure?" },
		description: {},
		confirmButtonText: { default: "Confirm" },
		cancelButtonText: { default: "Cancel" }
	},
	emits: ["close", "confirm"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = s({
			get: () => n.show,
			set: () => r("close")
		});
		return (t, n) => {
			let a = w("v-card-title"), o = w("v-card-text"), s = w("v-spacer"), u = w("v-btn"), d = w("v-card-actions"), f = w("v-card"), h = w("v-dialog");
			return b(), c(h, {
				modelValue: i.value,
				"onUpdate:modelValue": n[2] ||= (e) => i.value = e,
				"max-width": "500px",
				persistent: "",
				"no-click-animation": ""
			}, {
				default: O(() => [m(f, null, {
					default: O(() => [
						m(a, { class: "text-h5 text-center py-6" }, {
							default: O(() => [p(E(e.title), 1)]),
							_: 1
						}),
						e.description || t.$slots.description ? (b(), c(o, {
							key: 0,
							class: "text-center px-0 py-0"
						}, {
							default: O(() => [p(E(e.description) + " ", 1), C(t.$slots, "description")]),
							_: 3
						})) : l("", !0),
						m(d, null, {
							default: O(() => [
								m(s),
								m(u, {
									color: "error",
									variant: "flat",
									onClick: n[0] ||= (e) => r("close")
								}, {
									default: O(() => [p(E(e.cancelButtonText), 1)]),
									_: 1
								}),
								m(u, {
									color: "success",
									variant: "flat",
									onClick: n[1] ||= (e) => r("confirm")
								}, {
									default: O(() => [p(E(e.confirmButtonText), 1)]),
									_: 1
								}),
								m(s)
							]),
							_: 1
						})
					]),
					_: 3
				})]),
				_: 3
			}, 8, ["modelValue"]);
		};
	}
}), Ke = {};
function qe() {
	return Ke;
}
var Je = { install(e, t = {}) {
	Ke = t, e.component("ParentCard", U), e.component("FormCard", H), e.component("Breadcrumb", G), e.component("PageHeader", K), e.component("Tag", Be), e.component("ConfirmationModal", Ge), e.component("PillTabs", ze), e.component("TextItem", We);
} }, Ye = {
	sidebarDrawer: !0,
	customizerDrawer: !1,
	miniSidebar: !1,
	activeTheme: "EMERALD_THEME",
	boxed: !0,
	borderCard: !1
}, Xe = {};
function Ze(e) {
	Xe = e;
}
var q = ie("customizer", {
	state: () => ({
		...Ye,
		...Xe
	}),
	actions: {
		toggleSidebarDrawer() {
			this.sidebarDrawer = !this.sidebarDrawer;
		},
		setMiniSidebar(e) {
			this.miniSidebar = e;
		},
		setCustomizerDrawer(e) {
			this.customizerDrawer = e;
		},
		setTheme(e) {
			this.activeTheme = e;
		},
		setCardBorder(e) {
			this.borderCard = e;
		}
	}
}), Qe = Symbol("LogoComponent"), $e = Symbol("HeaderLeftWidgets"), et = Symbol("HeaderRightWidgets"), tt = Symbol("SidebarItems"), nt = { class: "mini-icon" }, rt = { class: "mini-text" }, it = /* @__PURE__ */ h({
	name: "NavGroup",
	__name: "NavGroup",
	props: { item: {} },
	setup(e) {
		return (t, n) => {
			let r = w("v-list-subheader");
			return b(), c(r, { class: "smallCap text-uppercase text-subtitle-2 mt-5 font-weight-bold d-flex align-items-center" }, {
				default: O(() => [d("span", nt, [m(D(oe), {
					size: "16",
					"stroke-width": "1.5",
					class: "iconClass"
				})]), d("span", rt, E(e.item.header), 1)]),
				_: 1
			});
		};
	}
}), at = /* @__PURE__ */ h({
	name: "SidebarIcon",
	__name: "Icon",
	props: {
		item: {},
		level: {}
	},
	setup(e) {
		return (t, n) => (b(), c(T(e.item), {
			size: e.level && e.level > 0 ? 14 : 20,
			"stroke-width": "1.5",
			class: "iconClass"
		}, null, 8, ["size"]));
	}
}), ot = /* @__PURE__ */ h({
	name: "NavItem",
	__name: "NavItem",
	props: {
		item: {},
		level: {}
	},
	setup(e) {
		return (t, n) => {
			let r = w("v-list-item-title"), i = w("v-list-item-subtitle"), a = w("v-chip"), o = w("v-list-item");
			return b(), c(o, {
				to: e.item.type === "external" ? "" : e.item.to,
				href: e.item.type === "external" ? e.item.to : "",
				rounded: "",
				class: "mb-1",
				disabled: e.item.disabled,
				target: e.item.type === "external" ? "_blank" : ""
			}, f({
				prepend: O(() => [m(at, {
					item: e.item.icon,
					level: e.level
				}, null, 8, ["item", "level"])]),
				default: O(() => [m(r, null, {
					default: O(() => [p(E(e.item.title), 1)]),
					_: 1
				}), e.item.subCaption ? (b(), c(i, {
					key: 0,
					class: "text-caption mt-n1 hide-menu"
				}, {
					default: O(() => [p(E(e.item.subCaption), 1)]),
					_: 1
				})) : l("", !0)]),
				_: 2
			}, [e.item.chip ? {
				name: "append",
				fn: O(() => [m(a, {
					color: e.item.chipColor,
					class: v("sidebarchip hide-menu bg-" + e.item.chipBgColor),
					size: "small",
					variant: e.item.chipVariant,
					"prepend-icon": e.item.chipIcon
				}, {
					default: O(() => [p(E(e.item.chip), 1)]),
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
}), st = /* @__PURE__ */ h({
	name: "NavCollapse",
	__name: "NavCollapse",
	props: {
		item: {},
		level: {}
	},
	setup(e) {
		return (t, n) => {
			let r = w("v-list-item-title"), i = w("v-list-item-subtitle"), a = w("v-list-item"), s = w("NavCollapse", !0), d = w("v-list-group");
			return b(), c(d, { "no-action": "" }, {
				activator: O(({ props: t }) => [m(a, _(t, {
					value: e.item.title,
					rounded: "",
					class: "mb-1"
				}), {
					prepend: O(() => [m(at, {
						item: e.item.icon,
						level: e.level
					}, null, 8, ["item", "level"])]),
					default: O(() => [m(r, { class: "mr-auto" }, {
						default: O(() => [p(E(e.item.title), 1)]),
						_: 1
					}), e.item.subCaption ? (b(), c(i, {
						key: 0,
						class: "text-caption mt-n1 hide-menu"
					}, {
						default: O(() => [p(E(e.item.subCaption), 1)]),
						_: 1
					})) : l("", !0)]),
					_: 1
				}, 16, ["value"])]),
				default: O(() => [e.item.children ? (b(!0), u(o, { key: 0 }, S(e.item.children, (t, n) => (b(), u(o, { key: n }, [t.children ? (b(), c(s, {
					key: 0,
					item: t,
					level: e.level + 1
				}, null, 8, ["item", "level"])) : (b(), c(ot, {
					key: 1,
					item: t,
					level: e.level + 1
				}, null, 8, ["item", "level"]))], 64))), 128)) : l("", !0)]),
				_: 1
			});
		};
	}
}), ct = { class: "sidebar-logo pa-2" }, lt = /* @__PURE__ */ h({
	name: "AppSidebar",
	__name: "Sidebar",
	setup(e) {
		let t = g(Qe), n = g(tt, ee([])), r = q();
		return (e, i) => {
			let a = w("v-list"), s = w("v-navigation-drawer");
			return b(), c(s, {
				left: "",
				modelValue: D(r).sidebarDrawer,
				"onUpdate:modelValue": i[0] ||= (e) => D(r).sidebarDrawer = e,
				elevation: "0",
				"rail-width": "75",
				app: "",
				class: "leftSidebar sidebar-dark",
				rail: D(r).miniSidebar,
				"expand-on-hover": "",
				width: "270"
			}, {
				default: O(() => [d("div", ct, [D(t) ? (b(), c(T(D(t)), { key: 0 })) : l("", !0)]), m(D(ae), { class: "scrollnavbar" }, {
					default: O(() => [m(a, { class: "pa-6" }, {
						default: O(() => [(b(!0), u(o, null, S(D(n), (e) => (b(), u(o, null, [e.header ? (b(), c(it, {
							item: e,
							key: e.title
						}, null, 8, ["item"])) : e.children ? (b(), c(st, {
							key: 1,
							class: "leftPadding",
							item: e,
							level: 0
						}, null, 8, ["item"])) : (b(), c(ot, {
							key: 2,
							item: e,
							class: "leftPadding"
						}, null, 8, ["item"]))], 64))), 256))]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			}, 8, ["modelValue", "rail"]);
		};
	}
}), ut = /* @__PURE__ */ h({
	name: "AppHeader",
	__name: "Header",
	setup(e) {
		let t = q(), n = g($e, []), r = g(et, []);
		return (e, i) => {
			let a = w("v-btn"), s = w("v-spacer"), l = w("v-app-bar");
			return b(), c(l, {
				elevation: "10",
				height: "70"
			}, {
				default: O(() => [
					m(a, {
						class: "hidden-md-and-down",
						icon: "",
						color: "primary",
						variant: "text",
						onClick: i[0] ||= ne((e) => D(t).setMiniSidebar(!D(t).miniSidebar), ["stop"])
					}, {
						default: O(() => [m(D(A), {
							size: "20",
							"stroke-width": "1.5"
						})]),
						_: 1
					}),
					m(a, {
						class: "hidden-lg-and-up",
						icon: "",
						variant: "flat",
						onClick: ne(D(t).toggleSidebarDrawer, ["stop"]),
						size: "small"
					}, {
						default: O(() => [m(D(A), {
							size: "20",
							"stroke-width": "1.5"
						})]),
						_: 1
					}, 8, ["onClick"]),
					(b(!0), u(o, null, S(D(n), (e, t) => (b(), c(T(e), { key: "l" + t }))), 128)),
					m(s),
					(b(!0), u(o, null, S(D(r), (e, t) => (b(), c(T(e), { key: "r" + t }))), 128))
				]),
				_: 1
			});
		};
	}
}), dt = /* @__PURE__ */ h({
	name: "FullLayout",
	__name: "FullLayout",
	setup(e) {
		let t = q();
		return (e, n) => {
			let r = w("v-container"), i = w("v-main"), a = w("v-app"), o = w("v-locale-provider");
			return b(), c(o, null, {
				default: O(() => [m(a, {
					theme: D(t).activeTheme,
					class: v([
						D(t).activeTheme,
						D(t).miniSidebar ? "mini-sidebar" : "",
						"verticalLayout",
						D(t).borderCard ? "cardBordered" : ""
					])
				}, {
					default: O(() => [
						m(lt),
						m(ut),
						m(i, null, {
							default: O(() => [m(r, {
								fluid: "",
								class: "page-wrapper pb-sm-15 pb-10"
							}, {
								default: O(() => [d("div", { class: v(D(t).boxed ? "max-width" : "") }, [m(D(k))], 2)]),
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
}), ft = /* @__PURE__ */ h({
	name: "BlankLayout",
	__name: "BlankLayout",
	setup(e) {
		let t = q();
		return (e, n) => {
			let r = w("v-app");
			return b(), c(r, {
				theme: D(t).activeTheme,
				class: v(D(t).activeTheme)
			}, {
				default: O(() => [m(D(k))]),
				_: 1
			}, 8, ["theme", "class"]);
		};
	}
}), pt = "data:image/svg+xml,%3csvg%20width='360'%20height='360'%20viewBox='0%200%20360%20360'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1928_12651)'%3e%3cpath%20d='M46.6595%20263.061H132.417V302.279H46.6595V263.061Z'%20fill='white'%20stroke='%232E186A'%20stroke-width='1.80839'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M68.098%20262.016L68.1161%20286.854L74.3762%20276.658L80.6362%20286.854L86.2362%20277.737L91.351%20286.07V262.082L68.098%20262.016Z'%20fill='%23FEBA91'/%3e%3cpath%20d='M78.3365%20135.682L76.1996%20127.746'%20stroke='%232E186A'%20stroke-width='1.80839'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M119.924%20200.748C120.451%20195.082%20122.094%20184.575%20108.492%20178.053C94.8894%20171.531%2086.5919%20165.048%2082.9661%20150.535'%20stroke='%232E186A'%20stroke-width='1.80839'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M85.479%20148.43L82.0888%20135.831C81.7372%20134.524%2080.3928%20133.75%2079.0859%20134.102L77.3426%20134.571C76.0357%20134.922%2075.2614%20136.267%2075.613%20137.574L79.0032%20150.173C79.3548%20151.48%2080.6993%20152.254%2082.0061%20151.902L83.7495%20151.433C85.0563%20151.082%2085.8306%20149.737%2085.479%20148.43Z'%20fill='%2349BEFF'/%3e%3cpath%20d='M54.4356%20174.313L46.2195%20174.307'%20stroke='%232E186A'%20stroke-width='1.80839'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M68.6013%20170.738H55.5538C54.2005%20170.738%2053.1034%20171.835%2053.1034%20173.189V174.994C53.1034%20176.347%2054.2005%20177.444%2055.5538%20177.444H68.6013C69.9546%20177.444%2071.0517%20176.347%2071.0517%20174.994V173.189C71.0517%20171.835%2069.9546%20170.738%2068.6013%20170.738Z'%20fill='%2349BEFF'/%3e%3cpath%20d='M69.1439%20173.776C69.1439%20173.776%2099.3411%20172.076%20113.45%20197.439'%20stroke='%232E186A'%20stroke-width='1.80839'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M247.717%20230.643C255.821%20230.643%20261.581%20232.535%20261.967%20250.773C262.353%20269.011%20261.545%20285.497%20277.459%20285.286C292.164%20285.09%20288.897%20279.141%20295.693%20279.403'%20stroke='%232E186A'%20stroke-width='1.80839'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M311.252%20272.082H294.259C293.175%20272.082%20292.297%20272.96%20292.297%20274.044V284.629C292.297%20285.713%20293.175%20286.591%20294.259%20286.591H311.252C312.335%20286.591%20313.214%20285.713%20313.214%20284.629V274.044C313.214%20272.96%20312.335%20272.082%20311.252%20272.082Z'%20fill='%2349BEFF'/%3e%3cpath%20d='M306.022%20272.061L306.001%20286.615'%20stroke='%232E186A'%20stroke-width='1.80839'%20stroke-linejoin='round'/%3e%3cpath%20d='M309.769%20275.961H320.969M309.769%20281.386H320.969'%20stroke='%232E186A'%20stroke-width='1.80839'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M254.122%2066.3633V73.7898M257.835%2070.0765H250.411'%20stroke='%232E186A'%20stroke-width='1.80839'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M201.31%2093.5551V100.979M205.021%2097.2683H197.597M158.693%2057.4746V64.8981M162.403%2061.1878H154.979M113.983%20117.872V125.295M117.696%20121.582H110.27M62.7392%2089.1094V96.5359M66.4495%2092.8227H59.026M54.6346%20199.183V206.607M58.3448%20202.897H50.9214M39.7304%20137.74V145.167M43.4437%20141.453H36.0172M287.719%20159.049V166.476M291.432%20162.762H284.008M301.447%2097.4763V104.903M305.157%20101.19H297.734M328.899%20206.504V213.928M332.612%20210.215H325.185'%20stroke='%232E186A'%20stroke-width='1.80839'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M290.784%20206.212L257.244%20175.49H205.03L205.542%20176.129H114.245L80.7749%20206.851V214.781H114.23V303.283H257.784V214.127H290.784V206.212Z'%20fill='%235D87FF'/%3e%3cpath%20d='M245.128%20256.461H237.807V287.05H229.44V255.937H222.643L234.148%20223.777L245.128%20256.461Z'%20fill='white'/%3e%3cpath%20d='M205.623%20183.318V300.451M205.361%20183.282L174.727%20214.353M201.964%20179.529L174.468%20207.418M114.55%20214.694H174.513V207.556H81.6188M257.569%20214.067H225.401V206.929H288.071M205.711%20183.107L225.003%20213.973M213.176%20187.754L225.449%20207.068'%20stroke='%232E186A'%20stroke-width='1.80839'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M187.069%20233.648H130.578C128.081%20233.648%20126.057%20235.673%20126.057%20238.169V264.424C126.057%20266.921%20128.081%20268.945%20130.578%20268.945H187.069C189.566%20268.945%20191.59%20266.921%20191.59%20264.424V238.169C191.59%20235.673%20189.566%20233.648%20187.069%20233.648Z'%20fill='%232E186A'/%3e%3cpath%20d='M132.637%20257.178C132.511%20257.18%20132.387%20257.157%20132.271%20257.109C132.155%20257.062%20132.05%20256.992%20131.962%20256.903C131.871%20256.816%20131.801%20256.711%20131.753%20256.595C131.706%20256.479%20131.684%20256.354%20131.687%20256.228C131.684%20256.031%20131.743%20255.838%20131.856%20255.677L143.288%20239.148C143.374%20239.022%20143.491%20238.921%20143.628%20238.854C143.765%20238.786%20143.917%20238.756%20144.069%20238.765C144.194%20238.764%20144.318%20238.787%20144.434%20238.834C144.55%20238.881%20144.655%20238.951%20144.744%20239.04C144.832%20239.128%20144.902%20239.234%20144.949%20239.349C144.996%20239.465%20145.02%20239.59%20145.018%20239.715V255.279H147.881C148.006%20255.279%20148.13%20255.304%20148.245%20255.351C148.36%20255.399%20148.465%20255.469%20148.553%20255.557C148.641%20255.645%20148.711%20255.75%20148.759%20255.865C148.806%20255.98%20148.831%20256.104%20148.831%20256.228C148.831%20256.353%20148.806%20256.476%20148.759%20256.592C148.711%20256.707%20148.641%20256.812%20148.553%20256.9C148.465%20256.988%20148.36%20257.058%20148.245%20257.105C148.13%20257.153%20148.006%20257.178%20147.881%20257.178H145.018V262.32C145.018%20262.571%20144.918%20262.813%20144.74%20262.991C144.562%20263.169%20144.321%20263.269%20144.069%20263.269C143.817%20263.269%20143.575%20263.169%20143.397%20262.991C143.219%20262.813%20143.119%20262.571%20143.119%20262.32V257.178H132.637ZM143.119%20255.279V242.789L134.472%20255.279H143.119Z'%20fill='white'/%3e%3cpath%20d='M151.278%20250.972C151.239%20248.843%20151.507%20246.719%20152.074%20244.667C152.604%20242.893%20153.35%20241.486%20154.31%20240.447C154.885%20239.911%20155.547%20239.479%20156.269%20239.169C157.003%20238.863%20157.789%20238.705%20158.584%20238.705C159.379%20238.705%20160.166%20238.863%20160.899%20239.169C161.616%20239.482%20162.276%20239.914%20162.849%20240.447C163.819%20241.49%20164.567%20242.897%20165.091%20244.667C166.144%20248.81%20166.144%20253.152%20165.091%20257.295C164.567%20259.072%20163.819%20260.478%20162.849%20261.515C162.277%20262.05%20161.618%20262.482%20160.899%20262.793C160.166%20263.101%20159.379%20263.26%20158.584%20263.26C157.789%20263.26%20157.002%20263.101%20156.269%20262.793C155.549%20262.487%20154.888%20262.056%20154.316%20261.521C153.356%20260.48%20152.61%20259.074%20152.08%20257.301C151.51%20255.241%20151.24%20253.109%20151.278%20250.972ZM158.578%20240.595C158.033%20240.587%20157.492%20240.692%20156.989%20240.902C156.486%20241.113%20156.032%20241.425%20155.654%20241.819C154.011%20243.657%20153.19%20246.708%20153.192%20250.972C153.194%20255.236%20154.015%20258.302%20155.654%20260.171C156.033%20260.562%20156.487%20260.871%20156.99%20261.078C157.494%20261.286%20158.034%20261.387%20158.578%20261.376C159.122%20261.384%20159.661%20261.281%20160.164%20261.074C160.666%20260.867%20161.121%20260.559%20161.502%20260.171C163.157%20258.314%20163.984%20255.248%20163.982%20250.972C163.98%20246.696%20163.153%20243.645%20161.502%20241.819C161.122%20241.429%20160.667%20241.12%20160.164%20240.91C159.662%20240.701%20159.122%20240.596%20158.578%20240.601V240.595Z'%20fill='white'/%3e%3cpath%20d='M169.368%20257.178C169.243%20257.179%20169.119%20257.155%20169.004%20257.108C168.888%20257.061%20168.783%20256.991%20168.695%20256.902C168.607%20256.814%20168.537%20256.709%20168.49%20256.593C168.443%20256.477%20168.42%20256.353%20168.422%20256.228C168.419%20256.032%20168.477%20255.839%20168.588%20255.677L180.023%20239.148C180.108%20239.022%20180.225%20238.92%20180.362%20238.853C180.499%20238.786%20180.651%20238.756%20180.803%20238.765C180.928%20238.762%20181.052%20238.785%20181.168%20238.832C181.284%20238.879%20181.388%20238.95%20181.475%20239.04C181.565%20239.127%20181.636%20239.233%20181.684%20239.349C181.731%20239.465%20181.755%20239.589%20181.753%20239.715V255.279H184.613C184.738%20255.277%20184.863%20255.3%20184.979%20255.348C185.095%20255.396%20185.2%20255.467%20185.288%20255.556C185.464%20255.736%20185.562%20255.978%20185.562%20256.23C185.562%20256.482%20185.464%20256.723%20185.288%20256.904C185.2%20256.992%20185.094%20257.062%20184.978%20257.109C184.862%20257.157%20184.738%20257.18%20184.613%20257.178H181.744V262.32C181.746%20262.445%20181.722%20262.57%20181.675%20262.686C181.627%20262.802%20181.556%20262.907%20181.466%20262.995C181.287%20263.17%20181.045%20263.269%20180.794%20263.269C180.543%20263.269%20180.302%20263.17%20180.122%20262.995C180.032%20262.907%20179.961%20262.802%20179.914%20262.686C179.866%20262.57%20179.843%20262.445%20179.845%20262.32V257.178H169.368ZM179.854%20255.279V242.789L171.195%20255.279H179.854Z'%20fill='white'/%3e%3cpath%20d='M240.396%20123.902C234.368%20122.248%20230.025%20123.269%20230.025%20123.269C226.191%20114.731%20214.051%20106.798%20214.051%20106.798C205.512%20111.244%20209.433%20129.373%20209.433%20129.373L204.553%20131.202C198.453%20123.794%20189.911%20115.689%20187.449%20115.514C181.762%20115.111%20181.566%20140.615%20181.566%20140.615C167.728%20148.846%20153.575%20157.448%20142.562%20164.859C142.969%20159.564%20145.491%20152.722%20151.64%20144.364C162.882%20129.068%20165.366%20108.838%20154.994%2096.6047C140.44%2079.4249%20127.106%2085.2721%20119.176%2092.8583C111.156%20100.526%20109.935%20114.035%20122.492%20105.059C135.123%2096.0169%20141.317%20100.701%20147.242%20111.858C153.168%20123.016%20134.867%20140.19%20126.328%20154.127C121.539%20161.945%20119.179%20169.67%20119.282%20176.129H177.211C177.093%20176.261%20176.978%20176.391%20176.876%20176.521L179.748%20176.129H198.191C205.554%20183.215%20222.815%20196.419%20226.67%20188.809C228.614%20184.978%20229.464%20180.776%20228.656%20176.789C230.365%20180.053%20235.712%20189.276%20240.36%20186.693C244.386%20184.456%20247.593%20178.193%20246.813%20171.623C249.808%20168.859%20252.114%20165.917%20253.558%20162.831C265.322%20141.661%20245.746%20125.376%20240.396%20123.902Z'%20fill='%2349BEFF'/%3e%3cpath%20d='M246.409%20136.519C253.6%20125.536%20270.596%20123.969%20270.596%20123.969M249.417%20145.407C251.117%20142.007%20263.667%20134.949%20273.079%20137.694'%20stroke='%232E186A'%20stroke-width='1.80839'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M208.243%20154.688C203.098%20153.006%20192.811%20151.852%20184.938%20159.411M207.803%20150.158C202.835%20145.845%20189.631%20144.666%20180.481%20151.595'%20stroke='%232E186A'%20stroke-width='1.80839'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M190.198%20117.693C190.198%20117.693%20183.66%20133.249%20190.852%20138.49'%20stroke='%232E186A'%20stroke-width='1.80839'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M215.428%20108.936C215.428%20108.936%20212.028%20120.69%20215.166%20128.674'%20stroke='%232E186A'%20stroke-width='1.80839'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M216.733%20147.931C217.961%20147.509%20218.416%20145.596%20217.75%20143.658C217.084%20141.72%20215.549%20140.491%20214.321%20140.914C213.093%20141.336%20212.638%20143.249%20213.304%20145.186C213.97%20147.124%20215.505%20148.353%20216.733%20147.931Z'%20fill='%232E186A'/%3e%3cpath%20d='M234.379%20142.31C235.607%20141.888%20236.062%20139.975%20235.396%20138.037C234.73%20136.099%20233.195%20134.87%20231.967%20135.292C230.739%20135.714%20230.284%20137.628%20230.95%20139.565C231.616%20141.503%20233.151%20142.732%20234.379%20142.31Z'%20fill='%232E186A'/%3e%3cpath%20d='M232.795%20145.946L230.624%20149.521C230.465%20149.769%20230.215%20149.946%20229.927%20150.013C229.64%20150.08%20229.337%20150.032%20229.084%20149.879L225.724%20147.875C225.544%20147.774%20225.4%20147.621%20225.308%20147.437C225.217%20147.252%20225.183%20147.045%20225.211%20146.841C225.239%20146.637%20225.327%20146.446%20225.465%20146.293C225.603%20146.14%20225.783%20146.032%20225.983%20145.982L231.514%20144.412C232.469%20144.138%20233.283%20145.123%20232.795%20145.946Z'%20fill='%232E186A'/%3e%3cpath%20d='M227.002%20153.281C230.465%20157.672%20230.353%20152.202%20229.805%20149.32C230.92%20151.825%20233.87%20155.457%20234.326%20151.43'%20stroke='%232E186A'%20stroke-width='1.80839'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M222.683%20190.966C222.333%20190.008%20216.866%20179.133%20211.461%20175.037M219.219%20171.812C219.479%20171.9%20225.85%20182.361%20226.103%20189.505'%20stroke='%232E186A'%20stroke-width='1.80839'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M176.864%20176.526C181.831%20170.381%20204.593%20158.485%20217.251%20164.238C229.91%20169.992%20230.977%20180.318%20226.664%20188.814'%20stroke='%232E186A'%20stroke-width='1.80839'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M232.487%20170.498C232.487%20170.498%20238.37%20181.674%20238.5%20187.099M239.808%20168.023C239.808%20168.023%20244.121%20181.029%20241.574%20186.062'%20stroke='%232E186A'%20stroke-width='1.80839'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M222.086%20166.15C223.674%20163.597%20237.635%20155.254%20243.82%20163.934C244.944%20165.511%20246.171%20168.582%20246.671%20170.246'%20stroke='%232E186A'%20stroke-width='1.80839'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M0.904175%20302.523H359.096'%20stroke='%232E186A'%20stroke-width='1.80839'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1928_12651'%3e%3crect%20width='360'%20height='360'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", mt = { class: "d-flex justify-center align-center text-center h-100vh" }, ht = ["src"], gt = { class: "text-h1 pt-3" }, _t = { class: "text-h4 my-8" }, vt = /* @__PURE__ */ h({
	__name: "Error",
	setup(e) {
		let { t, te: n } = r({ useScope: "global" }), i = qe().errorPage ?? {};
		function a(e, r) {
			return e && n(e) ? t(e) : r;
		}
		let o = s(() => a(i.titleKey, "Opps!!!")), c = s(() => a(i.descriptionKey, "This page you are looking for could not be found.")), l = s(() => a(i.backToHomeKey, "Go Back to Home")), f = s(() => i.homeRoute ?? "/");
		return (e, t) => {
			let n = w("v-btn");
			return b(), u("div", mt, [d("div", null, [
				d("img", {
					src: D(pt),
					width: "500",
					alt: "404"
				}, null, 8, ht),
				d("h1", gt, E(o.value), 1),
				d("h4", _t, E(c.value), 1),
				m(n, {
					flat: "",
					color: "primary",
					class: "mb-4",
					to: f.value
				}, {
					default: O(() => [p(E(l.value), 1)]),
					_: 1
				}, 8, ["to"])
			])]);
		};
	}
});
//#endregion
//#region src/utils/common.ts
function yt(e) {
	return e.split(" ").map((e) => e.charAt(0)).join("").toUpperCase();
}
function bt() {
	let e = window.location.hostname.split(".");
	return e.length >= 2 ? e[0] : null;
}
function xt() {
	let e = window.location.pathname.split("/").filter(Boolean);
	if (e.length === 0) return null;
	let t = e[0];
	return t.includes(".") || t.startsWith("_") ? null : t;
}
function St(e) {
	let t = xt();
	return t ? `${t}:${e}` : e;
}
//#endregion
//#region src/plugins/i18n.ts
var Ct = () => St("lang"), J;
function wt(e) {
	J && (J.global.locale.value = e);
}
function Tt(e) {
	wt(e), localStorage.setItem(Ct(), e);
}
function Y() {
	return localStorage.getItem(Ct());
}
function Et(e) {
	!e || Y() || wt(e);
}
function Dt(e) {
	if (!J) {
		let t = Y() ?? e.defaultLocale ?? "es";
		J = n({
			globalInjection: !0,
			legacy: !1,
			locale: t,
			fallbackLocale: e.fallbackLocale || e.defaultLocale || "es",
			messages: e.messages
		});
	}
	return J;
}
//#endregion
//#region src/assets/images/flag/icon-flag-en.svg
var Ot = "data:image/svg+xml,%3csvg%20height='20'%20viewBox='0%200%2028%2020'%20width='28'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3crect%20id='a'%20height='20'%20rx='3'%20width='28'/%3e%3cmask%20id='b'%20fill='%23fff'%3e%3cuse%20fill='%23fff'%20fill-rule='evenodd'%20xlink:href='%23a'/%3e%3c/mask%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3cuse%20fill='%230a17a7'%20xlink:href='%23a'/%3e%3cpath%20d='m29.2824692-1.91644623%201.4911811%202.21076686-9.4483006%206.37223314%206.6746503.0001129v6.66666663l-6.6746503-.0007795%209.4483006%206.3731256-1.4911811%202.2107668-11.9501195-8.0608924.0009836%207.4777795h-6.6666666l-.000317-7.4777795-11.9488189%208.0608924-1.49118107-2.2107668%209.448-6.3731256-6.67434973.0007795v-6.66666663l6.67434973-.0001129-9.448-6.37223314%201.49118107-2.21076686%2011.9488189%208.06.000317-7.4768871h6.6666666l-.0009836%207.4768871z'%20fill='%23fff'%20mask='url(%23b)'/%3e%3cg%20stroke='%23db1f35'%20stroke-linecap='round'%20stroke-width='.667'%3e%3cpath%20d='m18.668%206.332%2012.665-8.332'%20mask='url(%23b)'/%3e%3cpath%20d='m20.013%2021.35%2011.354-7.652'%20mask='url(%23b)'%20transform='matrix(1%200%200%20-1%200%2035.048)'/%3e%3cpath%20d='m8.006%206.31-11.843-7.981'%20mask='url(%23b)'/%3e%3cpath%20d='m9.29%2022.31-13.127-8.705'%20mask='url(%23b)'%20transform='matrix(1%200%200%20-1%200%2035.915)'/%3e%3c/g%3e%3cpath%20d='m0%2012h12v8h4v-8h12v-4h-12v-8h-4v8h-12z'%20fill='%23e6273e'%20mask='url(%23b)'/%3e%3c/g%3e%3c/svg%3e", kt = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='512'%20height='512'%20fill='%23AA151B'/%3e%3crect%20y='128'%20width='512'%20height='256'%20fill='%23F1BF00'/%3e%3cpath%20d='M144,256%20C144,211.82%20179.82,176%20224,176%20C268.18,176%20304,211.82%20304,256%20C304,300.18%20268.18,336%20224,336%20C179.82,336%20144,300.18%20144,256%20Z'%20fill='%23AA151B'/%3e%3cpath%20d='M160,256%20C160,220.65%20188.65,192%20224,192%20C259.35,192%20288,220.65%20288,256'%20fill='%23F1BF00'/%3e%3crect%20x='176'%20y='224'%20width='96'%20height='16'%20fill='%23AA151B'/%3e%3crect%20x='176'%20y='256'%20width='96'%20height='16'%20fill='%23AA151B'/%3e%3c/svg%3e", X = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='512'%20height='512'%20fill='%23006600'/%3e%3crect%20width='204.8'%20height='512'%20fill='%23FF0000'/%3e%3ccircle%20cx='204.8'%20cy='256'%20r='76.8'%20fill='%23FFCC00'/%3e%3ccircle%20cx='204.8'%20cy='256'%20r='70.4'%20fill='%23FFFFFF'/%3e%3cpath%20d='M%20134.4%20256%20A%2070.4%2070.4%200%200%201%20204.8%20185.6%20A%2070.4%2070.4%200%200%201%20275.2%20256%20A%2070.4%2070.4%200%200%201%20204.8%20326.4%20A%2070.4%2070.4%200%200%201%20134.4%20256%20Z'%20fill='%23FF0000'/%3e%3cpath%20d='M%20153.6%20230.4%20L%20256%20230.4%20L%20256%20281.6%20L%20153.6%20281.6%20Z'%20fill='%230000CC'/%3e%3ccircle%20cx='204.8'%20cy='256'%20r='12.8'%20fill='%23FFCC00'/%3e%3c/svg%3e", At = ["src", "alt"], jt = ["src", "alt"], Mt = ["src", "alt"], Nt = ["src", "alt"], Pt = { class: "text-disabled text-subtitle-1 pl-2" }, Ft = /* @__PURE__ */ h({
	__name: "Languages",
	setup(e) {
		let t = [
			{
				title: "English",
				subtext: "US",
				value: "en",
				avatar: Ot
			},
			{
				title: "Español",
				subtext: "ES",
				value: "es",
				avatar: kt
			},
			{
				title: "Português",
				subtext: "PT",
				value: "pt",
				avatar: X
			}
		], { locale: n } = r({ useScope: "global" });
		function i(e) {
			n.value = e, Tt(e);
		}
		return (e, r) => {
			let a = w("v-avatar"), s = w("v-btn"), f = w("v-list-item-title"), h = w("v-list-item"), g = w("v-list"), v = w("v-sheet"), y = w("v-menu");
			return b(), c(y, {
				"close-on-content-click": !1,
				location: "bottom"
			}, {
				activator: O(({ props: e }) => [m(s, _({
					icon: "",
					variant: "text",
					color: "primary"
				}, e), {
					default: O(() => [m(a, { size: "22" }, {
						default: O(() => [
							D(n) === "en" ? (b(), u("img", {
								key: 0,
								src: D(Ot),
								alt: D(n),
								width: "22",
								height: "22",
								class: "obj-cover"
							}, null, 8, At)) : l("", !0),
							D(n) === "es" ? (b(), u("img", {
								key: 1,
								src: D(kt),
								alt: D(n),
								width: "22",
								height: "22",
								class: "obj-cover"
							}, null, 8, jt)) : l("", !0),
							D(n) === "pt" ? (b(), u("img", {
								key: 2,
								src: D(X),
								alt: D(n),
								width: "22",
								height: "22",
								class: "obj-cover"
							}, null, 8, Mt)) : l("", !0)
						]),
						_: 1
					})]),
					_: 1
				}, 16)]),
				default: O(() => [m(v, {
					rounded: "md",
					width: "200",
					elevation: "10"
				}, {
					default: O(() => [m(g, { class: "theme-list" }, {
						default: O(() => [(b(), u(o, null, S(t, (e, t) => m(h, {
							key: t,
							color: "primary",
							active: D(n) === e.value,
							class: "d-flex align-center",
							onClick: (t) => i(e.value)
						}, {
							prepend: O(() => [m(a, { size: "22" }, {
								default: O(() => [d("img", {
									src: e.avatar,
									alt: e.avatar,
									width: "22",
									height: "22",
									class: "obj-cover"
								}, null, 8, Nt)]),
								_: 2
							}, 1024)]),
							default: O(() => [m(f, { class: "text-subtitle-1 font-weight-regular" }, {
								default: O(() => [p(E(e.title) + " ", 1), d("span", Pt, "(" + E(e.subtext) + ")", 1)]),
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
}), It = "text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium cursor-pointer", Lt = /* @__PURE__ */ h({
	__name: "AppLink",
	props: { to: {} },
	setup(e) {
		return (t, n) => {
			let r = w("RouterLink");
			return e.to === void 0 ? (b(), u("a", {
				key: 1,
				class: v(It),
				role: "button",
				tabindex: "0"
			}, [C(t.$slots, "default")])) : (b(), c(r, {
				key: 0,
				to: e.to,
				class: v(It)
			}, {
				default: O(() => [C(t.$slots, "default")]),
				_: 3
			}, 8, ["to"]));
		};
	}
}), Rt = { class: "text-h4 font-weight-bold" }, zt = {
	key: 0,
	class: "d-flex justify-center align-center py-12"
}, Bt = /*#__PURE__*/ W(/* @__PURE__ */ h({
	__name: "AppModal",
	props: {
		modelValue: { type: Boolean },
		title: {},
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
		}), l = s(() => i.cancelText ?? n("common.cancel")), f = s(() => i.saveText ?? n("common.save"));
		return (t, n) => {
			let r = w("v-icon"), i = w("v-btn"), s = w("v-card-title"), h = w("v-progress-circular"), g = w("v-card-text"), _ = w("v-card-actions"), v = w("v-card"), y = w("v-dialog");
			return b(), c(y, {
				modelValue: o.value,
				"onUpdate:modelValue": n[3] ||= (e) => o.value = e,
				"max-width": e.maxWidth,
				persistent: "",
				"no-click-animation": ""
			}, {
				default: O(() => [m(v, {
					rounded: "lg",
					class: "app-modal-card d-flex flex-column"
				}, {
					default: O(() => [
						m(s, { class: "app-modal-header px-6 pt-5 pb-2 d-flex align-center justify-space-between flex-shrink-0" }, {
							default: O(() => [d("span", Rt, E(e.title), 1), m(i, {
								icon: "",
								variant: "text",
								size: "small",
								onClick: n[0] ||= (e) => a("cancel")
							}, {
								default: O(() => [m(r, { size: "18" }, {
									default: O(() => [...n[4] ||= [p("mdi-close", -1)]]),
									_: 1
								})]),
								_: 1
							})]),
							_: 1
						}),
						m(g, { class: "app-modal-body px-6 pb-2 flex-grow-1 overflow-y-auto" }, {
							default: O(() => [e.contentLoading ? (b(), u("div", zt, [m(h, {
								indeterminate: "",
								color: "primary",
								size: "48"
							})])) : C(t.$slots, "default", {}, void 0, !0, 1)]),
							_: 3
						}),
						m(_, { class: "app-modal-footer px-6 pb-5 pt-3 d-flex justify-end ga-2 flex-shrink-0" }, {
							default: O(() => [m(i, {
								variant: "text",
								onClick: n[1] ||= (e) => a("cancel")
							}, {
								default: O(() => [p(E(l.value), 1)]),
								_: 1
							}), m(i, {
								color: "primary",
								variant: "flat",
								loading: e.loading,
								disabled: e.saveDisabled || e.contentLoading,
								onClick: n[2] ||= (e) => a("save")
							}, {
								default: O(() => [p(E(f.value), 1)]),
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
}), [["__scopeId", "data-v-ca470192"]]), Vt = { class: "logo-uploader" }, Ht = { class: "logo-uploader-card" }, Ut = ["src", "alt"], Wt = {
	key: 2,
	class: "logo-uploader-loading-overlay"
}, Gt = { class: "logo-uploader-actions" }, Kt = ["disabled"], qt = ["disabled"], Jt = {
	key: 0,
	class: "text-caption text-medium-emphasis mt-1"
}, Yt = {
	key: 1,
	class: "text-caption text-error mt-1"
}, Xt = ["accept"], Zt = /*#__PURE__*/ W(/* @__PURE__ */ h({
	__name: "LogoUploader",
	props: {
		modelValue: {},
		uploadFn: {},
		accept: { default: "image/png,image/jpeg" },
		dark: {
			type: Boolean,
			default: !1
		},
		helpText: { default: void 0 },
		altText: { default: "logo" },
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
		}, i = e, a = t, { t: o } = r(), s = x(null), f = x(!1), p = x(null), h = () => {
			p.value = null, s.value?.click();
		}, g = () => {
			s.value && (s.value.value = "");
		}, _ = () => {
			let e = i.accept.split(",").map((e) => e.trim()).filter(Boolean);
			return e.some((e) => e.endsWith("/*")) ? [] : e;
		}, y = async (e) => {
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
		}, S = () => {
			a("update:modelValue", ""), g();
		};
		return (t, n) => {
			let r = w("v-progress-circular");
			return b(), u("div", Vt, [
				d("div", Ht, [d("div", { class: v(["logo-uploader-preview", { "logo-uploader-preview--dark": e.dark }]) }, [e.modelValue ? (b(), u("img", {
					key: 0,
					src: e.modelValue,
					alt: e.altText
				}, null, 8, Ut)) : (b(), c(D(se), {
					key: 1,
					size: 40,
					stroke: "1.5",
					class: "logo-uploader-placeholder-icon"
				})), f.value ? (b(), u("div", Wt, [m(r, {
					indeterminate: "",
					color: "primary",
					size: "32"
				})])) : l("", !0)], 2), d("div", Gt, [d("button", {
					type: "button",
					class: "logo-uploader-btn",
					disabled: f.value,
					onClick: h
				}, [m(D(le), {
					size: 18,
					"stroke-width": "2"
				}), d("span", null, E(t.$t("common.change")), 1)], 8, Kt), d("button", {
					type: "button",
					class: "logo-uploader-btn logo-uploader-btn--danger",
					disabled: f.value || !e.modelValue,
					onClick: S
				}, [m(D(ce), {
					size: 18,
					"stroke-width": "2"
				}), d("span", null, E(t.$t("common.remove")), 1)], 8, qt)])]),
				e.helpText ? (b(), u("div", Jt, E(e.helpText), 1)) : l("", !0),
				p.value ? (b(), u("div", Yt, E(p.value), 1)) : l("", !0),
				d("input", {
					ref_key: "fileInput",
					ref: s,
					type: "file",
					accept: e.accept,
					class: "d-none",
					onChange: y
				}, null, 40, Xt)
			]);
		};
	}
}), [["__scopeId", "data-v-e6ca9fd5"]]), Qt = /* @__PURE__ */ h({
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
			let r = w("v-text-field");
			return b(), c(r, _({
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
}), $t = /* @__PURE__ */ h({
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
			let r = w("v-select");
			return b(), c(r, _({
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
}), en = /* @__PURE__ */ h({
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
			let r = w("v-autocomplete");
			return b(), c(r, _({
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
}), tn = /* @__PURE__ */ h({
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
			let r = w("v-textarea");
			return b(), c(r, _({
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
}), nn = /* @__PURE__ */ h({
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
		let n = e, r = t, i = x(!1), a = s(() => n.autofill ? "current-password" : "new-password"), o = s({
			get: () => n.modelValue,
			set: (e) => r("update:modelValue", e)
		}), l = s(() => n.v$ ? { "error-messages": n.v$.$errors.map((e) => String(e.$message)) } : {});
		return (t, n) => {
			let r = w("v-text-field");
			return b(), c(r, _({
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
}), rn = {
	key: 0,
	class: "text-body-2 mb-1 text-medium-emphasis"
}, an = ["title"], on = {
	key: 1,
	class: "text-caption text-error mt-1"
}, sn = /*#__PURE__*/ W(/* @__PURE__ */ h({
	__name: "AppColorPicker",
	props: {
		modelValue: {},
		label: {},
		placeholder: {},
		v$: {}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = x(!1), a = s({
			get: () => n.modelValue ?? null,
			set: (e) => r("update:modelValue", e)
		}), o = s(() => n.v$?.$errors.map((e) => String(e.$message)) ?? []), f = s(() => o.value.length > 0);
		return (t, n) => {
			let r = w("v-icon"), s = w("v-color-picker"), h = w("v-text-field"), g = w("v-btn"), v = w("v-card-actions"), y = w("v-card"), x = w("v-menu");
			return b(), u("div", null, [
				e.label ? (b(), u("div", rn, E(e.label), 1)) : l("", !0),
				m(x, {
					modelValue: i.value,
					"onUpdate:modelValue": n[4] ||= (e) => i.value = e,
					"close-on-content-click": !1,
					location: "bottom start"
				}, {
					activator: O(({ props: t }) => [d("div", _(t, {
						class: ["app-color-picker__swatch", { "app-color-picker__swatch--error": f.value }],
						style: { backgroundColor: a.value ?? "#E0E0E0" },
						title: a.value ?? e.placeholder
					}), [a.value ? l("", !0) : (b(), c(r, {
						key: 0,
						size: "18",
						color: "grey-darken-1"
					}, {
						default: O(() => [...n[5] ||= [p("mdi-eyedropper", -1)]]),
						_: 1
					}))], 16, an)]),
					default: O(() => [m(y, {
						elevation: "4",
						rounded: "lg"
					}, {
						default: O(() => [m(s, {
							modelValue: a.value,
							"onUpdate:modelValue": n[0] ||= (e) => a.value = e,
							mode: "hex",
							"hide-inputs": ""
						}, null, 8, ["modelValue"]), m(v, { class: "pt-0 px-4 pb-3" }, {
							default: O(() => [m(h, {
								modelValue: a.value,
								"onUpdate:modelValue": n[1] ||= (e) => a.value = e,
								density: "compact",
								variant: "outlined",
								"hide-details": "",
								placeholder: e.placeholder,
								clearable: "",
								"onClick:clear": n[2] ||= (e) => a.value = null
							}, null, 8, ["modelValue", "placeholder"]), m(g, {
								variant: "text",
								class: "ml-2",
								onClick: n[3] ||= (e) => i.value = !1
							}, {
								default: O(() => [...n[6] ||= [p("OK", -1)]]),
								_: 1
							})]),
							_: 1
						})]),
						_: 1
					})]),
					_: 1
				}, 8, ["modelValue"]),
				f.value ? (b(), u("div", on, E(o.value[0]), 1)) : l("", !0)
			]);
		};
	}
}), [["__scopeId", "data-v-392bbcee"]]), cn = [
	{
		title: "Afganistán",
		code: "af"
	},
	{
		title: "Albania",
		code: "al"
	},
	{
		title: "Alemania",
		code: "de"
	},
	{
		title: "Andorra",
		code: "ad"
	},
	{
		title: "Angola",
		code: "ao"
	},
	{
		title: "Antigua y Barbuda",
		code: "ag"
	},
	{
		title: "Arabia Saudita",
		code: "sa"
	},
	{
		title: "Argelia",
		code: "dz"
	},
	{
		title: "Argentina",
		code: "ar"
	},
	{
		title: "Armenia",
		code: "am"
	},
	{
		title: "Australia",
		code: "au"
	},
	{
		title: "Austria",
		code: "at"
	},
	{
		title: "Azerbaiyán",
		code: "az"
	},
	{
		title: "Bahamas",
		code: "bs"
	},
	{
		title: "Bangladés",
		code: "bd"
	},
	{
		title: "Barbados",
		code: "bb"
	},
	{
		title: "Baréin",
		code: "bh"
	},
	{
		title: "Bélgica",
		code: "be"
	},
	{
		title: "Belice",
		code: "bz"
	},
	{
		title: "Benín",
		code: "bj"
	},
	{
		title: "Bielorrusia",
		code: "by"
	},
	{
		title: "Birmania (Myanmar)",
		code: "mm"
	},
	{
		title: "Bolivia",
		code: "bo"
	},
	{
		title: "Bosnia y Herzegovina",
		code: "ba"
	},
	{
		title: "Botsuana",
		code: "bw"
	},
	{
		title: "Brasil",
		code: "br"
	},
	{
		title: "Brunéi",
		code: "bn"
	},
	{
		title: "Bulgaria",
		code: "bg"
	},
	{
		title: "Burkina Faso",
		code: "bf"
	},
	{
		title: "Burundi",
		code: "bi"
	},
	{
		title: "Bután",
		code: "bt"
	},
	{
		title: "Cabo Verde",
		code: "cv"
	},
	{
		title: "Camboya",
		code: "kh"
	},
	{
		title: "Camerún",
		code: "cm"
	},
	{
		title: "Canadá",
		code: "ca"
	},
	{
		title: "Catar",
		code: "qa"
	},
	{
		title: "Chad",
		code: "td"
	},
	{
		title: "Chile",
		code: "cl"
	},
	{
		title: "China",
		code: "cn"
	},
	{
		title: "Chipre",
		code: "cy"
	},
	{
		title: "Ciudad del Vaticano",
		code: "va"
	},
	{
		title: "Colombia",
		code: "co"
	},
	{
		title: "Comoras",
		code: "km"
	},
	{
		title: "Corea del Norte",
		code: "kp"
	},
	{
		title: "Corea del Sur",
		code: "kr"
	},
	{
		title: "Costa de Marfil",
		code: "ci"
	},
	{
		title: "Costa Rica",
		code: "cr"
	},
	{
		title: "Croacia",
		code: "hr"
	},
	{
		title: "Cuba",
		code: "cu"
	},
	{
		title: "Dinamarca",
		code: "dk"
	},
	{
		title: "Dominica",
		code: "dm"
	},
	{
		title: "Ecuador",
		code: "ec"
	},
	{
		title: "Egipto",
		code: "eg"
	},
	{
		title: "El Salvador",
		code: "sv"
	},
	{
		title: "Emiratos Árabes Unidos",
		code: "ae"
	},
	{
		title: "Eritrea",
		code: "er"
	},
	{
		title: "Eslovaquia",
		code: "sk"
	},
	{
		title: "Eslovenia",
		code: "si"
	},
	{
		title: "España",
		code: "es"
	},
	{
		title: "Estados Unidos",
		code: "us"
	},
	{
		title: "Estonia",
		code: "ee"
	},
	{
		title: "Esuatini",
		code: "sz"
	},
	{
		title: "Etiopía",
		code: "et"
	},
	{
		title: "Filipinas",
		code: "ph"
	},
	{
		title: "Finlandia",
		code: "fi"
	},
	{
		title: "Fiyi",
		code: "fj"
	},
	{
		title: "Francia",
		code: "fr"
	},
	{
		title: "Gabón",
		code: "ga"
	},
	{
		title: "Gambia",
		code: "gm"
	},
	{
		title: "Georgia",
		code: "ge"
	},
	{
		title: "Ghana",
		code: "gh"
	},
	{
		title: "Granada",
		code: "gd"
	},
	{
		title: "Grecia",
		code: "gr"
	},
	{
		title: "Guatemala",
		code: "gt"
	},
	{
		title: "Guinea",
		code: "gn"
	},
	{
		title: "Guinea-Bisáu",
		code: "gw"
	},
	{
		title: "Guinea Ecuatorial",
		code: "gq"
	},
	{
		title: "Guyana",
		code: "gy"
	},
	{
		title: "Haití",
		code: "ht"
	},
	{
		title: "Honduras",
		code: "hn"
	},
	{
		title: "Hungría",
		code: "hu"
	},
	{
		title: "India",
		code: "in"
	},
	{
		title: "Indonesia",
		code: "id"
	},
	{
		title: "Irak",
		code: "iq"
	},
	{
		title: "Irán",
		code: "ir"
	},
	{
		title: "Irlanda",
		code: "ie"
	},
	{
		title: "Islandia",
		code: "is"
	},
	{
		title: "Islas Marshall",
		code: "mh"
	},
	{
		title: "Islas Salomón",
		code: "sb"
	},
	{
		title: "Israel",
		code: "il"
	},
	{
		title: "Italia",
		code: "it"
	},
	{
		title: "Jamaica",
		code: "jm"
	},
	{
		title: "Japón",
		code: "jp"
	},
	{
		title: "Jordania",
		code: "jo"
	},
	{
		title: "Kazajistán",
		code: "kz"
	},
	{
		title: "Kenia",
		code: "ke"
	},
	{
		title: "Kirguistán",
		code: "kg"
	},
	{
		title: "Kiribati",
		code: "ki"
	},
	{
		title: "Kuwait",
		code: "kw"
	},
	{
		title: "Laos",
		code: "la"
	},
	{
		title: "Lesoto",
		code: "ls"
	},
	{
		title: "Letonia",
		code: "lv"
	},
	{
		title: "Líbano",
		code: "lb"
	},
	{
		title: "Liberia",
		code: "lr"
	},
	{
		title: "Libia",
		code: "ly"
	},
	{
		title: "Liechtenstein",
		code: "li"
	},
	{
		title: "Lituania",
		code: "lt"
	},
	{
		title: "Luxemburgo",
		code: "lu"
	},
	{
		title: "Macedonia del Norte",
		code: "mk"
	},
	{
		title: "Madagascar",
		code: "mg"
	},
	{
		title: "Malasia",
		code: "my"
	},
	{
		title: "Malaui",
		code: "mw"
	},
	{
		title: "Maldivas",
		code: "mv"
	},
	{
		title: "Malí",
		code: "ml"
	},
	{
		title: "Malta",
		code: "mt"
	},
	{
		title: "Marruecos",
		code: "ma"
	},
	{
		title: "Mauricio",
		code: "mu"
	},
	{
		title: "Mauritania",
		code: "mr"
	},
	{
		title: "México",
		code: "mx"
	},
	{
		title: "Micronesia",
		code: "fm"
	},
	{
		title: "Moldavia",
		code: "md"
	},
	{
		title: "Mónaco",
		code: "mc"
	},
	{
		title: "Mongolia",
		code: "mn"
	},
	{
		title: "Montenegro",
		code: "me"
	},
	{
		title: "Mozambique",
		code: "mz"
	},
	{
		title: "Namibia",
		code: "na"
	},
	{
		title: "Nauru",
		code: "nr"
	},
	{
		title: "Nepal",
		code: "np"
	},
	{
		title: "Nicaragua",
		code: "ni"
	},
	{
		title: "Níger",
		code: "ne"
	},
	{
		title: "Nigeria",
		code: "ng"
	},
	{
		title: "Noruega",
		code: "no"
	},
	{
		title: "Nueva Zelanda",
		code: "nz"
	},
	{
		title: "Omán",
		code: "om"
	},
	{
		title: "Países Bajos",
		code: "nl"
	},
	{
		title: "Pakistán",
		code: "pk"
	},
	{
		title: "Palaos",
		code: "pw"
	},
	{
		title: "Palestina",
		code: "ps"
	},
	{
		title: "Panamá",
		code: "pa"
	},
	{
		title: "Papúa Nueva Guinea",
		code: "pg"
	},
	{
		title: "Paraguay",
		code: "py"
	},
	{
		title: "Perú",
		code: "pe"
	},
	{
		title: "Polonia",
		code: "pl"
	},
	{
		title: "Portugal",
		code: "pt"
	},
	{
		title: "Reino Unido",
		code: "gb"
	},
	{
		title: "República Centroafricana",
		code: "cf"
	},
	{
		title: "República Checa",
		code: "cz"
	},
	{
		title: "República del Congo",
		code: "cg"
	},
	{
		title: "República Democrática del Congo",
		code: "cd"
	},
	{
		title: "República Dominicana",
		code: "do"
	},
	{
		title: "Ruanda",
		code: "rw"
	},
	{
		title: "Rumanía",
		code: "ro"
	},
	{
		title: "Rusia",
		code: "ru"
	},
	{
		title: "Samoa",
		code: "ws"
	},
	{
		title: "San Cristóbal y Nieves",
		code: "kn"
	},
	{
		title: "San Marino",
		code: "sm"
	},
	{
		title: "San Vicente y las Granadinas",
		code: "vc"
	},
	{
		title: "Santa Lucía",
		code: "lc"
	},
	{
		title: "Santo Tomé y Príncipe",
		code: "st"
	},
	{
		title: "Senegal",
		code: "sn"
	},
	{
		title: "Serbia",
		code: "rs"
	},
	{
		title: "Seychelles",
		code: "sc"
	},
	{
		title: "Sierra Leona",
		code: "sl"
	},
	{
		title: "Singapur",
		code: "sg"
	},
	{
		title: "Siria",
		code: "sy"
	},
	{
		title: "Somalia",
		code: "so"
	},
	{
		title: "Sri Lanka",
		code: "lk"
	},
	{
		title: "Sudáfrica",
		code: "za"
	},
	{
		title: "Sudán",
		code: "sd"
	},
	{
		title: "Sudán del Sur",
		code: "ss"
	},
	{
		title: "Suecia",
		code: "se"
	},
	{
		title: "Suiza",
		code: "ch"
	},
	{
		title: "Surinam",
		code: "sr"
	},
	{
		title: "Tailandia",
		code: "th"
	},
	{
		title: "Taiwán",
		code: "tw"
	},
	{
		title: "Tanzania",
		code: "tz"
	},
	{
		title: "Tayikistán",
		code: "tj"
	},
	{
		title: "Timor Oriental",
		code: "tl"
	},
	{
		title: "Togo",
		code: "tg"
	},
	{
		title: "Tonga",
		code: "to"
	},
	{
		title: "Trinidad y Tobago",
		code: "tt"
	},
	{
		title: "Túnez",
		code: "tn"
	},
	{
		title: "Turkmenistán",
		code: "tm"
	},
	{
		title: "Turquía",
		code: "tr"
	},
	{
		title: "Tuvalu",
		code: "tv"
	},
	{
		title: "Ucrania",
		code: "ua"
	},
	{
		title: "Uganda",
		code: "ug"
	},
	{
		title: "Uruguay",
		code: "uy"
	},
	{
		title: "Uzbekistán",
		code: "uz"
	},
	{
		title: "Vanuatu",
		code: "vu"
	},
	{
		title: "Venezuela",
		code: "ve"
	},
	{
		title: "Vietnam",
		code: "vn"
	},
	{
		title: "Yemen",
		code: "ye"
	},
	{
		title: "Yibuti",
		code: "dj"
	},
	{
		title: "Zambia",
		code: "zm"
	},
	{
		title: "Zimbabue",
		code: "zw"
	}
].sort((e, t) => e.title.localeCompare(t.title, "es")), Z = (e) => {
	if (!e || e.length !== 2) return "";
	let t = 127365;
	return String.fromCodePoint(t + e.charCodeAt(0), t + e.charCodeAt(1));
}, ln = { class: "country-select-flag me-2" }, un = { class: "country-select-flag me-2" }, dn = /*#__PURE__*/ W(/* @__PURE__ */ h({
	__name: "CountrySelect",
	props: { modelValue: {} },
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = t, r = (e) => n("update:modelValue", e ?? "");
		return (t, n) => {
			let i = w("v-list-item"), a = w("v-autocomplete");
			return b(), c(a, {
				"model-value": e.modelValue,
				items: D(cn),
				"item-title": "title",
				"item-value": "title",
				autocomplete: "off",
				"onUpdate:modelValue": r
			}, {
				item: O(({ item: e, props: t }) => [m(i, _(t, { title: e.raw.title }), {
					prepend: O(() => [d("span", ln, E(D(Z)(e.raw.code)), 1)]),
					_: 2
				}, 1040, ["title"])]),
				selection: O(({ item: e }) => [d("span", un, E(D(Z)(e.raw.code)), 1), p(" " + E(e.raw.title), 1)]),
				_: 1
			}, 8, ["model-value", "items"]);
		};
	}
}), [["__scopeId", "data-v-f04948a9"]]);
//#endregion
//#region src/utils/error.ts
function fn(e, t) {
	return e instanceof Error ? e.message : e && typeof e == "object" && "message" in e ? String(e.message) : t;
}
//#endregion
//#region src/utils/logger.ts
var Q = !1, $ = !1;
function pn(e) {
	Q = e.isDev, $ = e.sentryEnabled;
}
var mn = {
	error(e, ...t) {
		if (Q && console.error(e, ...t), $) {
			let n = t.find((e) => e instanceof Error);
			ue.captureException(n ?? Error(e), { extra: {
				message: e,
				context: t
			} });
		}
	},
	warn(e, ...t) {
		Q && console.warn(e, ...t), $ && ue.captureMessage(e, {
			level: "warning",
			extra: { context: t }
		});
	},
	info(e, ...t) {
		Q && console.info(e, ...t);
	},
	debug(e, ...t) {
		Q && console.debug(e, ...t);
	}
};
//#endregion
//#region src/composables/useApiCall.ts
function hn(e) {
	return async function(t, n = "API request failed:") {
		e.value = !0;
		try {
			return await t();
		} catch (e) {
			throw mn.error(n, fn(e, "Unknown error")), e;
		} finally {
			e.value = !1;
		}
	};
}
//#endregion
//#region src/constants/datatable.ts
var gn = 10, _n = (e) => {
	let { locale: t } = r({ useScope: "global" });
	te(() => t.value, () => {
		e();
	}), e();
};
//#endregion
export { me as AQUA_THEME, en as AppAutocomplete, sn as AppColorPicker, Qt as AppInput, Lt as AppLink, Bt as AppModal, nn as AppPasswordInput, $t as AppSelect, tn as AppTextarea, pe as BLUE_THEME, ft as BlankLayout, G as Breadcrumb, _e as CYAN_THEME, Ge as ConfirmationModal, dn as CountrySelect, F as DARK_AQUA_THEME, P as DARK_BLUE_THEME, R as DARK_CYAN_THEME, V as DARK_DEFAULT_THEME, B as DARK_EMERALD_THEME, L as DARK_GREEN_THEME, z as DARK_ORANGE_THEME, I as DARK_PURPLE_THEME, gn as DEFAULT_ITEMS_PER_PAGE, M as DEFAULT_THEME, ye as EMERALD_THEME, vt as ErrorPage, H as FormCard, dt as FullLayout, ge as GREEN_THEME, $e as HeaderLeftWidgetsKey, et as HeaderRightWidgetsKey, Ft as Languages, Qe as LogoComponentKey, Zt as LogoUploader, ve as ORANGE_THEME, he as PURPLE_THEME, K as PageHeader, U as ParentCard, ze as PillTabs, tt as SidebarItemsKey, Be as Tag, We as TextItem, Je as VuetifyAppKit, pn as configureLogger, cn as countries, Se as createAppVuetify, Z as flagEmoji, fn as getErrorMessage, yt as getInitials, bt as getSubdomain, xt as getTenantFromPath, St as getTenantStorageKey, Y as getUserLanguage, mn as logger, Ze as setCustomizerDefaults, Et as setDefaultLanguage, Tt as setI18nLanguage, Dt as setupI18n, hn as useApiCall, q as useCustomizerStore, _n as useI18nTranslation };
