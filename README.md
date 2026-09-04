Reemplaza `README.md` por:

````markdown
# FancyHost

Aplicación web de alojamientos desarrollada con React, TypeScript y Vite. Permite explorar propiedades, consultar sus detalles, guardarlas como favoritas y gestionar una sesión de usuario para fines demostrativos.

## Características

- Página principal con alojamientos destacados.
- Búsqueda por destino y tipo de alojamiento.
- Filtros sincronizados con los parámetros de la URL.
- Detalle de cada propiedad mediante rutas dinámicas.
- Carga de propiedades usando loaders de React Router.
- Sistema de favoritos persistido en `localStorage`.
- Registro e inicio de sesión simulados.
- Perfil de usuario.
- Diseño responsive con estilo Apple Glassmorphism.
- Rutas protegidas para contenido privado.
- Páginas de error y ruta no encontrada.

## Tecnologías

- React
- TypeScript
- Vite
- React Router
- CSS
- ESLint
- `localStorage`

## Requisitos

- Node.js 18 o superior
- npm, pnpm o yarn

## Instalación

Clona el repositorio y accede a la carpeta del proyecto:

````bash
git clone <URL_DEL_REPOSITORIO>
cd AirbnbFancy
````

Instala las dependencias:

````bash
npm install
````

Inicia el servidor de desarrollo:

````bash
npm run dev
````

La aplicación estará disponible en:

```text
http://localhost:5173
```

## Scripts disponibles

````bash
npm run dev       # Inicia el servidor de desarrollo
npm run build     # Genera la versión de producción
npm run preview   # Previsualiza la build
npm run lint      # Ejecuta ESLint
````

## Estructura del proyecto

```text
src/
├── components/
│   ├── layout/
│   │   └── Header.tsx
│   ├── properties/
│   │   ├── PropertyCard.tsx
│   │   └── PropertiesSection.tsx
│   └── search/
│       └── SearchFilter.tsx
├── data/
│   └── propertiesData.ts
├── loaders/
│   └── propertyDetailLoader.ts
├── pages/
│   ├── HomePages.tsx
│   ├── SearchPage.tsx
│   ├── PropertyDetailPage.tsx
│   ├── FavoritesPage.tsx
│   ├── ProfilePage.tsx
│   ├── LoginPage.tsx
│   ├── RegisterPage.tsx
│   └── NotFoundPage.tsx
├── router/
│   └── router.tsx
├── style/
│   ├── index.css
│   ├── SearchPage.css
│   ├── SearchFilter.css
│   ├── PropertyDetailsPage.css
│   ├── FavoritesPage.css
│   ├── ProfilePage.css
│   └── LoginPage.css
└── utils/
    ├── auth.ts
    └── favorites.ts
```

## Rutas principales

| Ruta | Descripción |
|---|---|
| `/` | Página principal |
| `/search` | Resultados y filtros |
| `/properties/:id` | Detalle de una propiedad |
| `/favorites` | Propiedades guardadas |
| `/profile` | Perfil del usuario |
| `/login` | Inicio de sesión |
| `/register` | Registro de usuario |

## Búsqueda

La búsqueda utiliza parámetros en la URL:

```text
/search?destination=Barcelona&type=Apartamento
```

Los filtros disponibles son:

- Destino
- Apartamento
- Casa
- Loft
- Cabaña
- Estudio
- Villa

## Autenticación

La autenticación está simulada utilizando `localStorage`.

Claves utilizadas:

```text
airbnb_host_users
airbnb_host_user
airbnb_host_favorites
```

Flujo de usuario:

```text
/register → crear cuenta → /login → iniciar sesión → /profile
```

> Este sistema es únicamente para demostración. En una aplicación real, las contraseñas deben gestionarse mediante un backend seguro y nunca almacenarse directamente en `localStorage`.

## Loader de propiedades

Las propiedades se cargan mediante un loader de React Router:

```text
/properties/:id
```

El loader valida el identificador, busca la propiedad correspondiente y devuelve errores HTTP cuando el ID no es válido o la propiedad no existe.

## Favoritos

Los favoritos almacenan únicamente los identificadores de las propiedades:

```json
[1, 3, 5]
```

Esto permite reconstruir la lista desde `PROPERTIES_DATA` sin duplicar toda la información de cada propiedad.

## Diseño

El proyecto utiliza una interfaz oscura con:

- Transparencias.
- Desenfoque de fondo.
- Gradientes cyan y violeta.
- Bordes suaves.
- Sombras profundas.
- Componentes adaptables a dispositivos móviles.

## Estado del proyecto

Proyecto educativo y demostrativo para practicar:

- Componentes reutilizables.
- Props en TypeScript.
- Rutas dinámicas.
- Loaders de React Router.
- Formularios.
- Persistencia local.
- Diseño responsive.
````