import type { InjectionKey, Component, Ref, ShallowRef } from 'vue';
import type { RouteLocationRaw } from 'vue-router';
import type { MenuItem } from './types/sidebar.type';
/**
 * Injection key for the Logo component rendered in the sidebar.
 *
 *   app.provide(LogoComponentKey, Logo)
 */
export declare const LogoComponentKey: InjectionKey<Component>;
/**
 * Injection key for the components on the left side of the header, after the menu button.
 *
 *   app.provide(HeaderLeftWidgetsKey, [Navigation])
 */
export declare const HeaderLeftWidgetsKey: InjectionKey<Component[]>;
/**
 * Injection key for the components on the right side of the header, after the spacer.
 *
 *   app.provide(HeaderRightWidgetsKey, [Languages, Notifications, Profile])
 */
export declare const HeaderRightWidgetsKey: InjectionKey<Component[]>;
/**
 * Injection key for the sidebar items.
 *
 *   app.provide(SidebarItemsKey, ref(sidebarItems))
 */
export declare const SidebarItemsKey: InjectionKey<Ref<MenuItem[]> | ShallowRef<MenuItem[]>>;
/**
 * Injection key for the route the sidebar logo links to.
 *
 *   app.provide(LogoLinkKey, { name: 'app-dashboard' })
 */
export declare const LogoLinkKey: InjectionKey<RouteLocationRaw>;
