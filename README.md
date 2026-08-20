# vuetify-app-kit

La base compartida del frontend: layouts, tema, componentes de UI y las utilidades de aplicación que
todo SaaS acaba necesitando (llamadas a la API, i18n, tenant, logger).

Vue 3.5 · Vuetify 4

A diferencia de `saas-starter-*`, este paquete **no se forkea**: se instala. Un proyecto nuevo lo
añade como dependencia y recibe las mejoras sin arrastrar un fork.

---

## Instalación

```bash
pnpm add github:dazza-dev/vuetify-app-kit
```

O directamente en el `package.json`:

```json
{
  "dependencies": {
    "vuetify-app-kit": "github:dazza-dev/vuetify-app-kit"
  }
}
```

`pnpm` fija en el lock el commit exacto con su hash de integridad, así que la instalación es
reproducible. Para actualizar al último `main`:

```bash
pnpm update vuetify-app-kit
```

Para clavarlo a un commit o a un tag concreto:

```json
{ "vuetify-app-kit": "github:dazza-dev/vuetify-app-kit#v1.0.0" }
```

### Peer dependencies

```bash
pnpm add vue vuetify pinia vue-router vue-i18n vue-tabler-icons
```

`@sentry/vue` es opcional: solo hace falta si activas el reporte de errores del logger.

## Puesta en marcha

### 1. Estilos

Se importan aparte del JS:

```ts
import "vuetify-app-kit/styles";
```

Y en `vite.config.ts`, para que Vuetify compile con las variables del kit:

```ts
vuetify({
  autoImport: true,
  styles: { configFile: require.resolve("vuetify-app-kit/variables.scss") },
});
```

### 2. Vuetify

```ts
import { createAppVuetify } from "vuetify-app-kit";

const vuetify = createAppVuetify(i18nInstance);
app.use(vuetify);
```

### 3. Defaults del customizer (opcional)

Antes de montar la app:

```ts
import { setCustomizerDefaults } from "vuetify-app-kit";

setCustomizerDefaults({
  activeTheme: "DEFAULT_THEME",
  boxed: false,
  borderCard: false,
});
```

### 4. Plugin

Registra globalmente los componentes compartidos:

```ts
import { VuetifyAppKit } from "vuetify-app-kit";

app.use(VuetifyAppKit, {
  errorPage: {
    titleKey: "common.errorPage.notFound.title",
    descriptionKey: "common.errorPage.notFound.description",
    backToHomeKey: "common.errorPage.notFound.goHome",
  },
});
```

### 5. Claves de inyección

El layout obtiene el logo, los widgets del header y los items del sidebar por inyección, de modo que
el kit no necesita conocer nada de la app que lo usa:

```ts
app.provide(LogoComponentKey, Logo);
app.provide(HeaderLeftWidgetsKey, [Navigation]);
app.provide(HeaderRightWidgetsKey, [Languages, Notifications, Profile]);
app.provide(SidebarItemsKey, sidebarItems);
```

## Qué exporta

### UI

**Layouts** — `FullLayout` (sidebar + header), `BlankLayout` (login y páginas sueltas)

**Componentes globales** (los registra el plugin, no hay que importarlos) — `ParentCard`, `FormCard`,
`PageHeader`, `Breadcrumb`, `Tag`, `ConfirmationModal`, `PillTabs`, `TextItem`

**Componentes con import** — `ErrorPage`, `Languages`, `AppModal`, `AppLink`, `LogoUploader`

`AppModal` topa la tarjeta a `90vh` y deja la cabecera y el pie fuera del scroll, de forma que las
acciones siguen a la vista en formularios largos. Además de `title`, `saveText`, `cancelText` y
`saveDisabled`, acepta `loading` (spinner en el botón de guardar) y `contentLoading` (spinner en
lugar del cuerpo mientras llegan los datos).

**Componentes de formulario** — envuelven los inputs de Vuetify con los defaults de la casa
(`variant="outlined"`, `hide-details`), pasan el resto de atributos con `v-bind="$attrs"` y aceptan
un campo de validación opcional en la prop `v$`:

`AppInput`, `AppSelect`, `AppAutocomplete`, `AppTextarea`, `AppPasswordInput`, `AppColorPicker`,
`CountrySelect`

```vue
<AppInput
  v-model="form.email"
  :label="t('users.email')"
  required
  :v$="v$.email"
/>
<AppSelect
  v-model="form.roleUuid"
  :label="t('users.role')"
  :items="roles"
  item-title="name"
  item-value="uuid"
/>
```

La prop `v$` está tipada estructuralmente (`VuelidateField`: `$errors` + `$touch`), así que el kit
muestra errores de validación sin obligar a nadie a usar Vuelidate.

**Datos de referencia** — `countries`, `flagEmoji` y el tipo `Country`, que alimentan `CountrySelect`.

**Temas** — `EMERALD_THEME` (el que viene por defecto: sidebar negro y acentos verdes),
`DEFAULT_THEME` y las variantes `BLUE`, `AQUA`, `PURPLE`, `GREEN`, `CYAN` y `ORANGE`, cada una con su
versión `DARK_*`

**Store** — `useCustomizerStore`, `setCustomizerDefaults`

### Utilidades de aplicación

| Export                   | Qué hace                                                                |
| ------------------------ | ----------------------------------------------------------------------- |
| `useApiCall(loading)`    | Envuelve una llamada a la API gestionando el flag de carga y el logging |
| `getErrorMessage(e, d)`  | Extrae el mensaje legible de un error de axios, con texto por defecto   |
| `setupI18n(options)`     | Crea la instancia de vue-i18n con los mensajes de la app                |
| `setI18nLanguage(lang)`  | Cambia el idioma activo y lo persiste                                   |
| `useI18nTranslation(fn)` | Ejecuta `fn` al montar y en cada cambio de idioma (títulos, cabeceras…) |
| `getTenantFromPath()`    | Lee el identificador del tenant del primer segmento de la URL           |
| `getSubdomain()`         | Lee el subdominio del host                                              |
| `getInitials(name)`      | Iniciales de un nombre, para avatares                                   |
| `getTenantStorageKey(k)` | Antepone el tenant actual a una clave de `localStorage`                 |
| `configureLogger(opts)`  | Conecta el logger con el entorno (dev / Sentry)                         |
| `logger`                 | Logger compartido                                                       |
| `DEFAULT_ITEMS_PER_PAGE` | Tamaño de página por defecto de las tablas                              |

### Editor de texto enriquecido

Vive en el subpath `vuetify-app-kit/editor` porque arrastra tiptap y remixicon, que son peer
dependencies **opcionales**: quien no use el editor no los instala ni carga su código.

```bash
pnpm add @tiptap/vue-3 @tiptap/pm @tiptap/starter-kit \
  @tiptap/extension-table @tiptap/extension-table-row \
  @tiptap/extension-table-cell @tiptap/extension-table-header remixicon
```

```ts
import { RichTextEditor } from "vuetify-app-kit/editor";
```

Exporta `RichTextEditor` y sus piezas (`EditorMenubar`, `EditorMenu`, `EditorVariable`).

### Tipos

`MenuItem`, `ThemeName`, `ConfigProps`, `BreadcrumbItem`, `PillTabItem`, `LanguageType`,
`ThemeTypes`, `VuelidateField`, `Country`

## Personalizar la marca

`DEFAULT_THEME` es el hueco reservado para el color de tu marca. Cámbialo en
`src/theme/LightTheme.ts` y `src/theme/DarkTheme.ts`, y las variables SCSS globales en
`src/assets/scss/_variables.scss`.

El sidebar toma su color del token `sidebarBg`, que por defecto sigue al primario. Un tema que quiera
separarlos —como `EMERALD_THEME`, con sidebar negro y botones verdes— solo tiene que sobreescribirlo:

```ts
const EMERALD_THEME = createLightTheme("EMERALD_THEME", "#00c853", "#00e676", "#E6F9ED", "#E9FBF1", {
  sidebarBg: "#12161C",
});
```

Un tema nuevo hay que declararlo además en `ThemeName` (`src/types/config.type.ts`), registrarlo en
`src/vuetify.ts` y exportarlo desde `src/index.ts`.

## Estructura

```
src/
├── assets/scss/     Variables, overrides y estilos por componente/página
├── components/
│   ├── form/        Inputs envueltos (AppInput, AppSelect, CountrySelect…)
│   ├── cards/       FormCard, ParentCard
│   ├── modals/      AppModal (cabecera y pie fijos), ConfirmationModal
│   ├── shared/      PageHeader, Breadcrumb, Tag, AppLink…
│   └── widgets/     Languages, LogoUploader
├── editor/          Editor tiptap (entrada aparte: vuetify-app-kit/editor)
├── data/            Listas de referencia (países)
├── layouts/         FullLayout (sidebar + header) y BlankLayout
├── theme/           Paletas claras y oscuras
├── stores/          Store del customizer
├── types/           Tipos públicos
├── composables/     useApiCall
├── constants/       Constantes compartidas
├── plugins/         Configuración de vue-i18n
├── utils/           tenant, errores, logger, helpers de i18n
├── plugin.ts        Registro de componentes globales
├── vuetify.ts       createAppVuetify
└── index.ts         Superficie pública del paquete
```

## Desarrollo

```bash
git clone https://github.com/dazza-dev/vuetify-app-kit.git
cd vuetify-app-kit
pnpm install
pnpm dev          # build en watch
pnpm build        # build de producción + tipos
pnpm type-check
```

### `dist/` va versionado — reconstruye antes de hacer push

Este paquete se consume por URL de git, y `pnpm` no ejecuta los scripts de build de una dependencia
git-hosted salvo que cada proyecto consumidor la añada a una allowlist indexada por hash de commit.
Como ese hash cambia en cada push, esa vía es inviable: por eso `dist/` se commitea.

La consecuencia práctica es que **el build es parte del commit**:

```bash
pnpm build
git add -A && git commit -m "..." && git push
```

Si olvidas reconstruir, los proyectos que instalen el kit recibirán código antiguo aunque el
`src/` del repo esté al día. Es el único punto frágil de este montaje.

### Probar un cambio sin publicarlo

Mientras desarrollas el kit, apunta el proyecto consumidor a tu copia local en lugar de a GitHub:

```bash
cd ../saas-starter-app
pnpm add file:../vuetify-app-kit    # deja `pnpm dev` corriendo en el kit
```

Y devuélvelo a `github:dazza-dev/vuetify-app-kit` antes de commitear.

## Proyectos relacionados

| Repo                 | Qué es                               |
| -------------------- | ------------------------------------ |
| `saas-starter-app`   | La SPA que consume este kit          |
| `saas-starter-api`   | API Laravel multi-tenant             |
| `saas-starter-admin` | Panel de tenants y dueño del esquema |

Las reglas de desarrollo y las convenciones están en [`CLAUDE.md`](./CLAUDE.md).
