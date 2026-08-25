import type { App } from 'vue';
import FormCard from './components/cards/FormCard.vue';
import ParentCard from './components/cards/ParentCard.vue';
import BreadcrumbBar from './components/shared/BreadcrumbBar.vue';
import PageHeader from './components/shared/PageHeader.vue';
import PillTabs from './components/shared/PillTabs.vue';
import TagChip from './components/shared/TagChip.vue';
import TextItem from './components/shared/TextItem.vue';
import ConfirmationModal from './components/modals/ConfirmationModal.vue';
/**
 * Plugin options; the `errorPage` i18n keys fall back to default text when missing.
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
declare module 'vue' {
    interface GlobalComponents {
        ParentCard: typeof ParentCard;
        FormCard: typeof FormCard;
        BreadcrumbBar: typeof BreadcrumbBar;
        PageHeader: typeof PageHeader;
        TagChip: typeof TagChip;
        ConfirmationModal: typeof ConfirmationModal;
        PillTabs: typeof PillTabs;
        TextItem: typeof TextItem;
    }
}
