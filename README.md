# MONOBLOCK BLOQUERA

Landing page de MONOBLOCK BLOQUERA, fábrica de productos de concreto en Oaxaca.

## Stack

- Astro
- Tailwind CSS
- TypeScript
- Vercel

## Desarrollo

Requiere Node.js 22 o superior.

```sh
nvm use
npm install
npm run dev
```

## Producción

```sh
npm run build
npm run preview
```

## Deploy en Vercel

1. Sube el repositorio a GitHub.
2. Importa el proyecto en [Vercel](https://vercel.com/new).
3. El framework se detecta como Astro. El comando de build es `npm run build` y la salida es `dist`.
4. Define Node 22 en el proyecto si Vercel no lo toma del `engines` de `package.json`.
