import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        vue(),
        dts({
            tsconfigPath: './tsconfig.json'
        })
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    build: {
        lib: {
            // The entry name must match the package name: the CSS bundle derives from it.
            entry: {
                'vuetify-app-kit': resolve(__dirname, 'src/index.ts'),
                styles: resolve(__dirname, 'src/styles.ts'),
                // Separate entry: the editor pulls in tiptap, which non-users shouldn't load.
                editor: resolve(__dirname, 'src/editor.ts')
            },
            formats: ['es']
        },
        rollupOptions: {
            // Anything the consuming app already provides is kept out of the bundle.
            external: [
                'vue',
                'vuetify',
                'vuetify/components',
                'vuetify/directives',
                'vuetify/locale/adapters/vue-i18n',
                'vuetify/styles.scss',
                'pinia',
                'vue-router',
                'vue-i18n',
                'vue-tabler-icons',
                'vue3-perfect-scrollbar',
                '@sentry/vue',
                // Only needed by the `editor` entry, and they're optional peers.
                /^@tiptap\//,
                'remixicon/fonts/remixicon.symbol.svg'
            ]
        },
        cssCodeSplit: false
    }
});
