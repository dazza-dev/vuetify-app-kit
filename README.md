# vuetify-app-kit

The shared frontend foundation: layouts, theme, UI components and the application utilities every
SaaS ends up needing (API calls, i18n, tenant, logger).

Vue 3.5 · Vuetify 4

Unlike `saas-starter-*`, this package **isn't forked**: it's installed. A new project adds it as a
dependency and gets improvements without dragging along a fork.

---

## Installation

```bash
pnpm add github:dazza-dev/vuetify-app-kit
```

Or directly in `package.json`:

```json
{
    "dependencies": {
        "vuetify-app-kit": "github:dazza-dev/vuetify-app-kit"
    }
}
```

`pnpm` pins the exact commit with its integrity hash in the lockfile, so the install is
reproducible. To update to the latest `main`:

```bash
pnpm update vuetify-app-kit
```

To pin it to a specific commit or tag:

```json
{ "vuetify-app-kit": "github:dazza-dev/vuetify-app-kit#v1.0.0" }
```

### Peer dependencies

```bash
pnpm add vue vuetify pinia vue-router vue-i18n vue-tabler-icons
```

`@sentry/vue` is optional: only needed if you enable the logger's error reporting.

## Getting started

### 1. Styles

Imported separately from the JS:

```ts
import 'vuetify-app-kit/styles';
```

And in `vite.config.ts`, so Vuetify compiles with the kit's variables:

```ts
vuetify({
    autoImport: true,
    styles: { configFile: require.resolve('vuetify-app-kit/variables.scss') }
});
```

### 2. Vuetify

```ts
import { createAppVuetify } from 'vuetify-app-kit';

const vuetify = createAppVuetify(i18nInstance);
app.use(vuetify);
```

### 3. Customizer defaults (optional)

Before mounting the app:

```ts
import { setCustomizerDefaults } from 'vuetify-app-kit';

setCustomizerDefaults({
    activeTheme: 'DEFAULT_THEME',
    boxed: false,
    borderCard: false
});
```

### 4. Plugin

Globally registers the shared components:

```ts
import { VuetifyAppKit } from 'vuetify-app-kit';

app.use(VuetifyAppKit, {
    errorPage: {
        titleKey: 'common.errorPage.notFound.title',
        descriptionKey: 'common.errorPage.notFound.description',
        backToHomeKey: 'common.errorPage.notFound.goHome'
    }
});
```

### 5. Injection keys

The layout receives the logo, header widgets and sidebar items through injection, so the kit
doesn't need to know anything about the app using it:

```ts
app.provide(LogoComponentKey, Logo);
app.provide(LogoLinkKey, { name: 'app-dashboard' });
app.provide(HeaderLeftWidgetsKey, [Navigation]);
app.provide(HeaderRightWidgetsKey, [ModeToggle, Notifications, LanguagesMenu, Profile]);
app.provide(SidebarItemsKey, sidebarItems);
```

`LogoLinkKey` is optional and accepts any vue-router destination: without it, the sidebar logo
renders as a plain `div` that doesn't link anywhere.

## What it exports

### UI

**Layouts** — `FullLayout` (sidebar + header), `BlankLayout` (login and standalone pages)

**Global components** (registered by the plugin, no need to import them) — `ParentCard`, `FormCard`,
`PageHeader`, `BreadcrumbBar`, `TagChip`, `ConfirmationModal`, `PillTabs`, `TextItem`

**Components requiring import** — `ErrorPage`, `LanguagesMenu`, `ModeToggle`, `AppModal`, `AppLink`,
`ImageUploader`

`ModeToggle` switches between a theme and its dark variant. The store keeps the choice in
`localStorage` per tenant, and `customizer.theme` resolves it, so the layouts follow it on their own.
It needs `common.mode.light` and `common.mode.dark` in the app's translations.

`AppModal` caps the card at `90vh` and keeps the header and footer out of the scroll area, so
actions stay visible on long forms. Besides `title`, `saveText`, `cancelText` and `saveDisabled`,
it accepts `loading` (spinner on the save button) and `contentLoading` (spinner in place of the
body while data loads).

`ConfirmationModal` accepts `show`, `title`, `description`, `confirmButtonText`, `cancelButtonText`
and `confirmColor` (defaults to `primary`; use `error` when the action is destructive). It emits
`close` and `confirm`.

**Form components** — wrap Vuetify inputs with house defaults (`variant="outlined"`,
`hide-details`), pass through the rest of the attributes with `v-bind="$attrs"`, and accept an
optional validation field through the `v$` prop:

`AppInput`, `AppSelect`, `AppAutocomplete`, `AppTextarea`, `AppPasswordInput`, `AppColorPicker`

```vue
<AppInput v-model="form.email" :label="t('users.email')" required :v$="v$.email" />
<AppSelect v-model="form.roleUuid" :label="t('users.role')" :items="roles" item-title="name" item-value="uuid" />
```

The `v$` prop is typed structurally (`VuelidateField`: `$errors` + `$touch`), so the kit shows
validation errors without forcing anyone to use Vuelidate.

**Themes** — `EMERALD_THEME` (the default: black sidebar with green accents), `DEFAULT_THEME` and
the `BLUE`, `AQUA`, `PURPLE`, `GREEN`, `CYAN` and `ORANGE` variants, each with its `DARK_*` version

**Store** — `useCustomizerStore`, `setCustomizerDefaults`

### Application utilities

| Export                   | What it does                                                       |
| ------------------------ | ------------------------------------------------------------------ |
| `useApiCall(loading)`    | Wraps an API call, managing the loading flag and logging           |
| `getErrorMessage(e, d)`  | Extracts a readable message from an axios error, with a fallback   |
| `setupI18n(options)`     | Creates the vue-i18n instance with the app's messages              |
| `setI18nLanguage(lang)`  | Sets the active language and persists it                           |
| `useI18nTranslation(fn)` | Runs `fn` on mount and on every language change (titles, headers…) |
| `getTenantFromPath()`    | Reads the tenant identifier from the URL's first segment           |
| `getSubdomain()`         | Reads the host's subdomain                                         |
| `getInitials(name)`      | Initials from a name, for avatars                                  |
| `getTenantStorageKey(k)` | Prefixes the current tenant to a `localStorage` key                |
| `configureLogger(opts)`  | Wires the logger to the environment (dev / Sentry)                 |
| `logger`                 | Shared logger                                                      |
| `DEFAULT_ITEMS_PER_PAGE` | Default table page size                                            |

### Rich text editor

Lives in the `vuetify-app-kit/editor` subpath because it pulls in tiptap and remixicon, which are
**optional** peer dependencies: anyone not using the editor doesn't install or load their code.

```bash
pnpm add @tiptap/vue-3 @tiptap/pm @tiptap/starter-kit \
  @tiptap/extension-table @tiptap/extension-table-row \
  @tiptap/extension-table-cell @tiptap/extension-table-header remixicon
```

```ts
import { RichTextEditor } from 'vuetify-app-kit/editor';
```

Exports `RichTextEditor` and its pieces (`EditorMenubar`, `EditorMenu`, `EditorVariable`).

### Types

`MenuItem`, `ThemeName`, `ConfigProps`, `BreadcrumbItem`, `PillTabItem`, `LanguageType`,
`ThemeTypes`, `VuelidateField`

## Customizing the brand

`DEFAULT_THEME` is the reserved slot for your brand color. Change it in `src/theme/LightTheme.ts`
and `src/theme/DarkTheme.ts`, and the global SCSS variables in `src/assets/scss/_variables.scss`.

The sidebar takes its color from the `sidebarBg` token, which follows the primary color by
default. A theme that wants to separate them — like `EMERALD_THEME`, with a black sidebar and
green buttons — just needs to override it:

```ts
const EMERALD_THEME = createLightTheme('EMERALD_THEME', '#00c853', '#00e676', '#E6F9ED', '#E9FBF1', {
    sidebarBg: '#12161C'
});
```

A new theme also needs to be declared in `ThemeName` (`src/types/config.type.ts`), registered in
`src/vuetify.ts`, and exported from `src/index.ts`.

## Structure

```
src/
├── assets/scss/     Variables, overrides and per-component/page styles
├── components/
│   ├── form/        Wrapped inputs (AppInput, AppSelect, AppAutocomplete…)
│   ├── cards/       FormCard, ParentCard
│   ├── modals/      AppModal (fixed header and footer), ConfirmationModal
│   ├── shared/      PageHeader, BreadcrumbBar, TagChip, AppLink…
│   └── widgets/     LanguagesMenu, ModeToggle, ImageUploader
├── editor/          Tiptap editor (separate entry: vuetify-app-kit/editor)
├── layouts/         FullLayout (sidebar + header) and BlankLayout
├── theme/           Light and dark palettes
├── stores/          Customizer store
├── types/           Public types
├── composables/     useApiCall
├── constants/       Shared constants
├── plugins/         vue-i18n configuration
├── utils/           tenant, errors, logger, i18n helpers
├── plugin.ts        Global component registration
├── vuetify.ts       createAppVuetify
└── index.ts         Package's public surface
```

## Development

```bash
git clone https://github.com/dazza-dev/vuetify-app-kit.git
cd vuetify-app-kit
pnpm install
pnpm dev          # watch build
pnpm build        # production build + types
pnpm type-check
```

### `dist/` is versioned — rebuild before pushing

This package is consumed by git URL, and `pnpm` doesn't run build scripts for a git-hosted
dependency unless each consuming project adds it to an allowlist indexed by commit hash. Since
that hash changes on every push, that route isn't viable: that's why `dist/` is committed.

The practical consequence is that **the build is part of the commit**:

```bash
pnpm build
git add -A && git commit -m "..." && git push
```

If you forget to rebuild, projects installing the kit will get stale code even though `src/` in
the repo is up to date. It's the one fragile point of this setup.

### Testing a change without publishing it

While developing the kit, point the consuming project at your local copy instead of GitHub:

```bash
cd ../saas-starter-app
pnpm add file:../vuetify-app-kit    # keep `pnpm dev` running in the kit
```

And revert it to `github:dazza-dev/vuetify-app-kit` before committing.

## Related projects

| Repo                 | What it is                     |
| -------------------- | ------------------------------ |
| `saas-starter-app`   | The SPA that consumes this kit |
| `saas-starter-api`   | Multi-tenant Laravel API       |
| `saas-starter-admin` | Tenant panel, owns the schema  |

Development rules and conventions live in [`CLAUDE.md`](./CLAUDE.md).
