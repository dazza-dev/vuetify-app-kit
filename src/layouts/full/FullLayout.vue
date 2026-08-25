<template>
    <v-locale-provider>
        <v-app
            :theme="customizer.theme"
            :class="[
                customizer.theme,
                customizer.miniSidebar ? 'mini-sidebar' : '',
                'verticalLayout',
                customizer.borderCard ? 'cardBordered' : ''
            ]"
        >
            <Sidebar />
            <Header />

            <v-main>
                <v-container fluid class="page-wrapper pb-sm-15 pb-10">
                    <div :class="customizer.boxed ? 'max-width' : ''">
                        <RouterView />
                    </div>
                </v-container>
            </v-main>
        </v-app>
    </v-locale-provider>
</template>

<script setup lang="ts">
defineOptions({ name: 'FullLayout' });

import { RouterView } from 'vue-router';
import Sidebar from './sidebar/Sidebar.vue';
import Header from './header/Header.vue';
import { useCustomizerStore } from '../../stores/customizer';

const customizer = useCustomizerStore();
</script>
