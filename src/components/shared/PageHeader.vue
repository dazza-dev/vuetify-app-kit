<template>
    <div class="d-flex align-start justify-space-between mb-6">
        <div class="d-flex align-start ga-2" style="min-width: 0">
            <v-btn
                v-if="back"
                v-tooltip:top="backLabel"
                :to="back"
                :aria-label="backLabel"
                icon="mdi-arrow-left"
                variant="flat"
                class="mt-1 flex-shrink-0"
            />
            <div style="min-width: 0">
                <h2 class="text-h2 font-weight-bold text-black">{{ title }}</h2>
                <p v-if="subtitle" class="text-body-1 text-medium-emphasis mt-1">{{ subtitle }}</p>
            </div>
        </div>
        <div v-if="$slots.actions" class="page-header-actions d-flex ga-2 align-center flex-shrink-0 ml-4">
            <slot name="actions" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';

defineOptions({ name: 'PageHeader' });

/** Page title with an optional subtitle, a back button before the title when `back` is set, and an actions slot. */
defineProps<{
    title: string;
    subtitle?: string;
    back?: RouteLocationRaw;
    backLabel?: string;
}>();
</script>
