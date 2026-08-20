import type { App } from "vue";
import FormCard from "./components/cards/FormCard.vue";
import ParentCard from "./components/cards/ParentCard.vue";
import Breadcrumb from "./components/shared/Breadcrumb.vue";
import PageHeader from "./components/shared/PageHeader.vue";
import PillTabs from "./components/shared/PillTabs.vue";
import Tag from "./components/shared/Tag.vue";
import TextItem from "./components/shared/TextItem.vue";
import ConfirmationModal from "./components/modals/ConfirmationModal.vue";
/**
 * Opciones del plugin. Las claves de `errorPage` son claves i18n resueltas al renderizar;
 * si faltan, la pagina 404 cae a sus textos por defecto.
 */
export interface VuetifyAppKitOptions {
    errorPage?: {
        titleKey?: string;
        descriptionKey?: string;
        backToHomeKey?: string;
        homeRoute?: string;
    };
}
export declare function getThemeOptions(): VuetifyAppKitOptions;
export declare const VuetifyAppKit: {
    install(app: App, options?: VuetifyAppKitOptions): void;
};
declare module "vue" {
    interface GlobalComponents {
        ParentCard: typeof ParentCard;
        FormCard: typeof FormCard;
        Breadcrumb: typeof Breadcrumb;
        PageHeader: typeof PageHeader;
        Tag: typeof Tag;
        ConfirmationModal: typeof ConfirmationModal;
        PillTabs: typeof PillTabs;
        TextItem: typeof TextItem;
    }
}
