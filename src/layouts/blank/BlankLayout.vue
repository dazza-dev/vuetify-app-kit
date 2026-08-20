<template>
  <v-app :theme="customizer.activeTheme" :class="customizer.activeTheme">
    <RouterView />
  </v-app>
</template>

<script setup lang="ts">
defineOptions({ name: "BlankLayout" });

import { RouterView } from "vue-router";
import { useCustomizerStore } from "../../stores/customizer";

// Sin esto las pantallas de auth se quedan con el tema por defecto de Vuetify.
const customizer = useCustomizerStore();
</script>
