# Imagenes del mundo

Aplicacion web interactiva para buscar y explorar imagenes del mundo. Usa Vue 3, Vite y Google Custom Search para mostrar una galeria visual con busqueda en tiempo real.

## Stack

- Vue 3
- Vite
- TypeScript
- Vue Router
- Pinia
- PrimeVue
- Vuelidate
- Vitest
- ESLint, Oxlint y Prettier

## Requisitos

- Node.js `>=22.12.0`
- npm
- API key de Google Custom Search
- Search engine ID de Google Custom Search

## Variables de Entorno

Crea un archivo `.env` desde `.env.example`:

```sh
cp .env.example .env
```

Variables requeridas:

```sh
VITE_GCSE_API_KEY=your_google_custom_search_api_key
VITE_GCSE_CX=your_google_custom_search_engine_id
```

`VITE_GCSE_API_KEY` es la API key de Google Custom Search.
`VITE_GCSE_CX` es el identificador del motor de busqueda configurado para imagenes.

## Instalacion

```sh
npm install
```

## Desarrollo

```sh
npm run dev
```

## Build

```sh
npm run build
```

El build ejecuta type-check y genera la version de produccion con Vite.

## Preview

```sh
npm run preview
```

## Tests

Ejecutar pruebas unitarias:

```sh
npm run test:unit
```

Ejecutar cobertura:

```sh
npm run test:coverage
```

Las pruebas viven junto al codigo en carpetas `__tests__`.

## Calidad de Codigo

Ejecutar linters:

```sh
npm run lint
```

Formatear codigo fuente:

```sh
npm run format
```

El proyecto usa Husky y lint-staged para validar cambios antes de commit.

## Rutas

- `/`: busqueda y galeria de imagenes.
- `/login`: formulario con validacion de usuario, email y password.
- `/about`: informacion del proyecto.

## Estructura

```txt
docs/          Documentacion tecnica del repositorio
src/
  components/   Componentes reutilizables
  composable/   Composables de Vue
  constants/    Constantes, rutas y variables
  router/       Configuracion de Vue Router
  templates/    Layouts base
  types/        Tipos TypeScript
  views/        Paginas de la aplicacion
```

## Despliegue

Homepage configurada:

```txt
https://imagenes-del-mundo.jcvegab.dev
```

Para produccion, configura las variables `VITE_GCSE_API_KEY` y `VITE_GCSE_CX` en el proveedor de hosting antes de ejecutar el build.

## Documentacion

- [`docs/technical-debt.md`](docs/technical-debt.md): TODOs, seguimiento y deuda tecnica.

## Analisis Local De Codigo

Este repositorio usa una herramienta local de analisis de codigo para exploracion estructural. No documentar nombres de indice, rutas locales ni detalles especificos de maquina.

## Contribucion

1. Crea una rama desde la rama principal.
2. Instala dependencias con `npm install`.
3. Configura `.env` desde `.env.example`.
4. Ejecuta `npm run lint`.
5. Ejecuta `npm run test:unit`.
6. Ejecuta `npm run build` antes de abrir un PR.
