<template>
  <div class="d-flex justify-center align-center text-center h-100vh">
    <div>
      <img :src="errorImg" width="500" alt="404" />
      <h1 class="text-h1 pt-3">{{ title }}</h1>
      <h4 class="text-h4 my-8">{{ description }}</h4>
      <v-btn flat color="primary" class="mb-4" :to="homeRoute">{{
        backToHome
      }}</v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import errorImg from "@/assets/images/backgrounds/errorimg.svg";
import { getThemeOptions } from "@/plugin";

const { t, te } = useI18n({ useScope: "global" });
const errorPage = getThemeOptions().errorPage ?? {};

function translateOr(key: string | undefined, fallback: string) {
  return key && te(key) ? t(key) : fallback;
}

const title = computed(() => translateOr(errorPage.titleKey, "Opps!!!"));
const description = computed(() =>
  translateOr(
    errorPage.descriptionKey,
    "This page you are looking for could not be found.",
  ),
);
const backToHome = computed(() =>
  translateOr(errorPage.backToHomeKey, "Go Back to Home"),
);
const homeRoute = computed(() => errorPage.homeRoute ?? "/");
</script>
