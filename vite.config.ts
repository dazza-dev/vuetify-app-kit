import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: "./tsconfig.json",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      // El nombre de la entrada debe coincidir con el del paquete: el bundle CSS lo toma de ahi.
      entry: {
        "vuetify-app-kit": resolve(__dirname, "src/index.ts"),
        styles: resolve(__dirname, "src/styles.ts"),
        // Entrada aparte: el editor arrastra tiptap, y quien no lo use no debe cargarlo.
        editor: resolve(__dirname, "src/editor.ts"),
      },
      formats: ["es"],
    },
    rollupOptions: {
      // Todo lo que la app consumidora ya trae se deja fuera del bundle.
      external: [
        "vue",
        "vuetify",
        "vuetify/components",
        "vuetify/directives",
        "vuetify/locale/adapters/vue-i18n",
        "vuetify/styles.scss",
        "pinia",
        "vue-router",
        "vue-i18n",
        "vue-tabler-icons",
        "vue3-perfect-scrollbar",
        "@sentry/vue",
        // Solo los necesita la entrada `editor`, y son peers opcionales.
        /^@tiptap\//,
        "remixicon/fonts/remixicon.symbol.svg",
      ],
    },
    cssCodeSplit: false,
  },
});
