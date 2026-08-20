import type { InjectionKey, Component, Ref, ShallowRef } from "vue";
import type { MenuItem } from "./types/sidebar.type";

/**
 * Clave de inyección del componente Logo que se pinta en el sidebar.
 *
 *   app.provide(LogoComponentKey, Logo)
 */
export const LogoComponentKey: InjectionKey<Component> =
  Symbol("LogoComponent");

/**
 * Clave de inyección de los componentes del lado izquierdo del header, tras el botón del menú.
 *
 *   app.provide(HeaderLeftWidgetsKey, [Navigation])
 */
export const HeaderLeftWidgetsKey: InjectionKey<Component[]> =
  Symbol("HeaderLeftWidgets");

/**
 * Clave de inyección de los componentes del lado derecho del header, tras el espaciador.
 *
 *   app.provide(HeaderRightWidgetsKey, [Languages, Notifications, Profile])
 */
export const HeaderRightWidgetsKey: InjectionKey<Component[]> =
  Symbol("HeaderRightWidgets");

/**
 * Clave de inyección de los items del sidebar.
 *
 *   app.provide(SidebarItemsKey, ref(sidebarItems))
 */
export const SidebarItemsKey: InjectionKey<
  Ref<MenuItem[]> | ShallowRef<MenuItem[]>
> = Symbol("SidebarItems");
