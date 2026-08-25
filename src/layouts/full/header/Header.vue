<template>
    <v-app-bar elevation="10" height="70">
        <v-btn
            class="hidden-md-and-down"
            icon
            color="primary"
            variant="text"
            @click.stop="customizer.setMiniSidebar(!customizer.miniSidebar)"
        >
            <Menu2Icon size="20" stroke-width="1.5" />
        </v-btn>
        <v-btn class="hidden-lg-and-up" icon variant="flat" @click.stop="customizer.toggleSidebarDrawer" size="small">
            <Menu2Icon size="20" stroke-width="1.5" />
        </v-btn>

        <component v-for="(widget, i) in leftWidgets" :key="'l' + i" :is="widget" />

        <v-spacer />

        <component v-for="(widget, i) in rightWidgets" :key="'r' + i" :is="widget" />
    </v-app-bar>
</template>

<script setup lang="ts">
defineOptions({ name: 'AppHeader' });

import { inject } from 'vue';
import { useCustomizerStore } from '../../../stores/customizer';
import { HeaderLeftWidgetsKey, HeaderRightWidgetsKey } from '../../../injection-keys';
import { Menu2Icon } from 'vue-tabler-icons';

const customizer = useCustomizerStore();
const leftWidgets = inject(HeaderLeftWidgetsKey, []);
const rightWidgets = inject(HeaderRightWidgetsKey, []);
</script>
