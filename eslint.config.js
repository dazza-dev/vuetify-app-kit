import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

export default [
    {
        name: 'kit/files-to-lint',
        files: ['src/**/*.{ts,mts,tsx,vue}']
    },
    {
        // dist is versioned but it's build output, not source.
        name: 'kit/files-to-ignore',
        ignores: ['dist/**', 'node_modules/**']
    },
    ...pluginVue.configs['flat/essential'],
    ...vueTsEslintConfig(),
    // Prettier owns formatting on its own; this just disables the rules that clash.
    skipFormatting,
    {
        linterOptions: {
            reportUnusedDisableDirectives: 'error'
        },
        rules: {
            // Vuetify exposes table slots as `v-slot:item.<column>`, which the parser reads as a modifier.
            'vue/valid-v-slot': ['error', { allowModifiers: true }]
        }
    }
];
