# React Hooks App

Aplicación web basada en el proyecto HooksApp del curso de "React: De cero a experto" de DevTalles en Udemy.

Se trata de un proyecto React creado utilizando Vite con TypeScript + SWC.

Utiliza la API de [PokeApi](https://pokeapi.co/) para obtener pokemons.

Usa [Tailwind CSS](https://tailwindcss.com/) como framework CSS.

El diseño de los componentes se realizó con [shadcn/ui](https://ui.shadcn.com/).

También se emplea [Zod](https://zod.dev/) como validador de esquemas.

## Aspectos analizados

En este proyecto se abordan hooks tradicionales de React y hooks personalizados:
- Hooks de React: useState, useRef y useEffect
- Hooks personalizados y conectar múltiples hooks personalizados entre sí
- Patrón reducer y hook useReducer
- Validadores de esquemas
- LocalStorage y SessionStorage
- Memorización y hooks de memorización: useMemo, useCallback
- useOptimistic para hacer actualizaciones en pantalla rápidas
- useTransaction para evitar bloqueos de UI
- API de React use
- Componente Suspense
- Hook useContext
- Persistencia de sesiones de usuario
- Rutas privadas y públicas
- Diseño condicional

## Instalación y ejecución del proyecto

Descargar las dependencias con `npm install`.

Iniciar la aplicación con `npm run dev`.

Las aplicaciones están agrupadas por hooks en carpetas. Para alternar entre ellas, quitar el comentario correspondiente en `main.tsx`.

## Instalaciones de paquetes necesarios

Tailwind CSS se instala con:
```bash
npm install tailwindcss @tailwindcss/vite
```

Los avisos sobre las reglas en Visual Studio Code se pueden eliminar con la extensión [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss).

Para añadir nuevos componentes Shadcn-ui al proyecto
```bash
npx shadcn@latest add
```

Zod se instala con el comando:
```bash
npm install zod
```

Las animaciones de confetti son de [Canvas-Confetti](https://www.npmjs.com/package/canvas-confetti).
Al instalarlo aparece un error de tipado TypeScript que requiere agregar una nueva dependencia:
```bash
npm install canvas-confetti
npm i --save-dev @types/canvas-confetti
```

Los toast están creados con [Sonner](https://sonner.emilkowal.ski/).
```bash
npm install sonner
```