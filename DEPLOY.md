# Publicar Luz Divina en GitHub Pages

El repositorio ya incluye el flujo de publicación automática en
`.github/workflows/deploy.yml`. Solo sigue estos pasos:

## 1. Crear el repositorio

En [github.com](https://github.com/new) crea un repositorio nuevo, por ejemplo
`luz-divina` (público o privado; Pages funciona con ambos en cuentas con el
plan que incluya Pages).

## 2. Subir el código

Desde la carpeta del proyecto, en tu terminal:

```bash
git init
git add .
git commit -m "Catálogo Luz Divina"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/luz-divina.git
git push -u origin main
```

## 3. Activar Pages

En el repositorio ve a **Settings → Pages → Build and deployment** y en
**Source** elige **GitHub Actions**.

## 4. Listo

El flujo compila el sitio con rutas relativas (`--base=./`) y lo publica en:

```
https://TU-USUARIO.github.io/luz-divina/
```

Cada vez que hagas `git push` a `main`, el sitio se actualiza solo
(puedes verlo en la pestaña **Actions**).

## Nota

- Contraseña del panel de administración (demo): `admin123`
- Los cambios del catálogo se guardan en el navegador de cada visitante
  (localStorage); no se comparten entre dispositivos.
