# 🚀 Publicar Epikas en GitHub Pages

Este proyecto incluye un flujo de GitHub Actions (`.github/workflows/deploy.yml`)
que compila el sitio y lo publica automáticamente en GitHub Pages cada vez que
haces push a la rama `main`.

## Paso 1 — Crear el repositorio

1. Entra a <https://github.com/new>
2. Nómbralo como quieras (por ejemplo: `epikas`)
3. **No** marques "Add a README" (el proyecto ya tiene sus archivos)

## Paso 2 — Subir el código

En la carpeta del proyecto ejecuta:

```bash
git init
git add .
git commit -m "Catálogo Epikas"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/epikas.git
git push -u origin main
```

## Paso 3 — Activar GitHub Pages

1. En tu repositorio ve a **Settings → Pages**
2. En **Build and deployment → Source** elige **GitHub Actions**
3. Listo: cada `git push` compila y publica solo

## Tu sitio estará en

```
https://TU-USUARIO.github.io/epikas/
```

Puedes ver la URL exacta en **Settings → Pages**, arriba dice
"Your site is live at ...". La primera publicación tarda ~1 minuto;
sigue el progreso en la pestaña **Actions** de tu repositorio.

## Si la página no carga (fondo pastel sin contenido)

Revisa en este orden:

1. **Pestaña Actions**: el flujo «Publicar en GitHub Pages» debe estar en
   verde ✓. Si está amarillo, espera; si está rojo o no aparece, vuelve a
   hacer `git push` (o lanza "Run workflow" manualmente desde la pestaña
   Actions → «Publicar en GitHub Pages» → Run workflow).
2. **Settings → Pages → Source = GitHub Actions**. Si está en
   "Deploy from a branch", GitHub ignora la compilación y sirve el código
   crudo: ese es el error más común.
3. **URL completa**: debe incluir el nombre del repo
   (`https://TU-USUARIO.github.io/epikas/`).
4. **Recarga forzada**: `Ctrl + Shift + R` (o `Cmd + Shift + R`) para
   descartar una copia vieja en caché.
5. **Repo público**: con la cuenta gratuita de GitHub, Pages solo publica
   repositorios públicos (Settings → General → Danger zone).
6. **Si compilaste dist/ tú y lo subiste manualmente**: compila siempre con
   rutas relativas: `npx vite build --base=./`. Sin esa bandera las rutas
   quedan absolutas y Pages no encuentra los archivos.
