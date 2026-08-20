<template>
  <v-navigation-drawer
    left
    v-model="customizer.sidebarDrawer"
    elevation="0"
    rail-width="75"
    app
    class="leftSidebar sidebar-dark"
    :rail="customizer.miniSidebar"
    expand-on-hover
    width="270"
  >
    <div class="sidebar-logo pa-2">
      <component v-if="Logo" :is="Logo" />
    </div>

    <PerfectScrollbar class="scrollnavbar">
      <v-list class="pa-6">
        <template v-for="item in sidebarItems">
          <NavGroup :item="item" v-if="item.header" :key="item.title" />
          <NavCollapse
            class="leftPadding"
            :item="item"
            :level="0"
            v-else-if="item.children"
          />
          <NavItem :item="item" v-else class="leftPadding" />
        </template>
      </v-list>
    </PerfectScrollbar>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
defineOptions({ name: "AppSidebar" });

import { inject, shallowRef } from "vue";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { useCustomizerStore } from "../../../stores/customizer";
import { LogoComponentKey, SidebarItemsKey } from "../../../injection-keys";
import NavGroup from "./NavGroup.vue";
import NavItem from "./NavItem.vue";
import NavCollapse from "./NavCollapse.vue";

const Logo = inject(LogoComponentKey);
const sidebarItems = inject(SidebarItemsKey, shallowRef([]));
const customizer = useCustomizerStore();
</script>
