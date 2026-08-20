<template>
    <RouterLink v-if="to !== undefined" :to="to" :class="linkClass">
        <slot />
    </RouterLink>
    <a v-else :class="linkClass" role="button" tabindex="0">
        <slot />
    </a>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';

defineProps<{
    /**
     * Destino del router; si se omite, renderiza un `<a>` clicable con `@click` en su lugar.
     */
    to?: RouteLocationRaw;
}>();

// Fuente única para el estilo de enlaces de tabla/inline usado en toda la app.
const linkClass = 'text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium cursor-pointer';
</script>
