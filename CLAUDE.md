# Vuetify App Kit — Development Rules

## What this repo is

A **library**, not an application. It ships the shared frontend base — layouts, theme, UI components
and app utilities — and `saas-starter-app` installs it from GitHub as a dependency.

That single fact drives every rule below: a change here reaches the apps only after a rebuild and a
push, and anything exported becomes public API.

## Stack

- Vue 3.5, TypeScript, Vite (library mode)
- **Vuetify 4.1** as a peer dependency — never bundle it
- Pinia, Vue Router and Vue i18n are peer dependencies too

---

## Publishing

`dist/` is **committed to the repo** and there is no `prepare` script, so consumers install exactly
what is in git. Run `pnpm build` before committing, or the source will be right and the apps will
still get the old code — with no error to warn you.

```bash
pnpm build        # vite build + los .d.ts
git add -A && git commit
git push
```

Consumers pin the dependency as `github:dazza-dev/vuetify-app-kit` and update with
`pnpm update vuetify-app-kit`, which rewrites the commit hash in their lockfile.

---

## Formatting

**This repo has no Prettier config.** Running Prettier here reformats the whole project (it defaults
to 2 spaces where some files use other widths) and buries the real change in noise.

- Indentation is **2 spaces**
- Strings use **double quotes**
- Match the surrounding file; never run a formatter across the repo

---

## Comments (Comentarios)

- **Language:** every comment is written in **Spanish**. The code itself — names of variables,
  functions, components, props, types — stays in **English**.
- **Docblocks:** one sentence, in JSDoc `/** ... */` form.
- **Inline comments:** a single `//` line. If it needs two, half of it is redundant.
- Never explain why an alternative was discarded. That belongs in the commit message.

Mentions of tenants are legitimate here — this kit backs a multi-tenant product.

---

## Structure

```
src/
├── components/      Componentes de UI (form, cards, modals, shared, widgets)
├── composables/     useApiCall
├── constants/       DEFAULT_ITEMS_PER_PAGE
├── data/            countries
├── editor/          Editor de texto enriquecido (tiptap), en su propio entry point
├── layouts/         FullLayout (sidebar + header) y BlankLayout
├── plugins/         i18n
├── stores/          Store del customizer
├── theme/           LightTheme y DarkTheme
├── types/           Tipos compartidos
├── utils/           common, error, logger, i18nUtils
├── injection-keys.ts
├── plugin.ts        Registra los componentes globales
├── vuetify.ts       createAppVuetify
└── index.ts         La API pública
```

---

## The public API

`src/index.ts` is the contract. Anything exported there is public: renaming or removing it breaks
`saas-starter-app` on its next install.

- Add the export **and** rebuild, or consumers get a type that does not exist at runtime
- The kit ships no `AppLogo`: each app provides its own through `LogoComponentKey`
- Components registered globally by `plugin.ts` (`ParentCard`, `FormCard`, `Breadcrumb`,
  `PageHeader`, `Tag`, `ConfirmationModal`, `PillTabs`, `TextItem`) are also exported, so an app can
  import them explicitly if it prefers

---

## Layouts

Both layouts bind the theme on their `<v-app>`:

```vue
<v-app :theme="customizer.activeTheme" :class="customizer.activeTheme">
```

A layout that omits it falls back to Vuetify's `defaultTheme` and silently ignores the app's theme —
which is exactly what used to happen on the auth screens.

`FullLayout` takes the logo, the header widgets and the sidebar items by injection, so the kit never
imports anything from an app.

---

## Theme

- Eight light themes plus their dark counterparts. `DEFAULT_THEME` is the slot for each project's
  brand color
- The sidebar reads the `sidebarBg` token, which follows `primary` unless a theme overrides it
- A new theme has to be declared in `ThemeName` (`src/types/config.type.ts`), registered in
  `vuetify.ts` and exported from `index.ts`
- The theme comes from the backend settings. `useCustomizerStore().setTheme()` is the only setter and
  it does not persist: there is no per-user theme override

---

## Form components

`AppInput`, `AppSelect`, `AppAutocomplete`, `AppTextarea`, `AppPasswordInput`, `AppColorPicker` and
`CountrySelect` wrap the Vuetify inputs with the shared defaults (`variant="outlined"`,
`hide-details`), forward the rest with `v-bind="$attrs"` and take an optional `:v$` for Vuelidate
errors. Apps must use these wrappers, never the raw `v-*` inputs.

---

## Local storage

`localStorage` is isolated per origin, never per path. The SaaS app serves every tenant from one
origin with the tenant in the path, so an unprefixed key is shared by all of them. Use
`getTenantStorageKey(key)` — the language switcher already does.

---

## Before committing

```bash
pnpm build        # obligatorio: dist va versionado
npx vue-tsc --noEmit
pnpm lint
```

Do **not** run `pnpm format` unless you intend to reformat the whole repo.

---

## Related projects

- `saas-starter-app` — the multi-tenant SPA that installs this kit as a dependency
- `vue-starter-kit` — the single-tenant starter; it carries its own copy of this base under
  `src/core/` instead of depending on the kit, so a change here has to be ported by hand
