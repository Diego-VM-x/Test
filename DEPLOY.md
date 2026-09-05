# Publicar Luz Divina en GitHub Pages

## Pasos rápidos

1. **Crea un repositorio** en [github.com/new](https://github.com/new) (ej. `luz-divina`), sin README.

2. **Sube el código** desde la carpeta del proyecto:

   ```bash
   git init
   git add .
   git commit -m "Catálogo Luz Divina"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/luz-divina.git
   git push -u origin main
   ```

3. **Activa Pages**: en el repositorio ve a **Settings → Pages → Build and deployment**
   y en **Source** elige **GitHub Actions**.

4. Espera ~1 minuto. El flujo compila con rutas relativas (`--base=./`) y publica en:

   ```
   https://TU-USUARIO.github.io/luz-divina/
   ```

Cada `git push` a `main` republica el sitio automáticamente (pestaña **Actions**).

---

## ⚠️ Si la página se ve en blanco

La causa #1 (90% de los casos): **Pages sigue en «Deploy from a branch»**.
El flujo de Actions compila el sitio, pero Pages lo ignora y sirve los archivos
fuente crudos → el navegador no puede ejecutarlos → fondo pastel sin contenido.

Revisa en este orden:

1. **Pestaña Actions del repo** — el flujo *«Publicar en GitHub Pages»* debe estar
   ✅ en verde. En amarillo: sigue corriendo, espera. En rojo: haz clic para ver el
   error. Si no aparece: el push no llegó, repite `git push -u origin main`.

2. **Settings → Pages → Source** — debe decir **GitHub Actions**, no
   «Deploy from a branch». Cámbialo y guarda.

3. **La URL correcta** — incluye el nombre del repositorio:
   `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`
   (sin el nombre del repo solo verás tu perfil o un 404).

4. **Recarga forzada** — `Ctrl + Shift + R` (Windows) o `Cmd + Shift + R` (Mac)
   para descartar una copia vieja en caché.

5. **Visibilidad del repo** — con la cuenta gratuita de GitHub, Pages solo
   publica repositorios **públicos**. Si el repo es privado, hazlo público en
   Settings → General → Danger zone.

> Nota: el sitio ya detecta este problema por sí solo — si lo abres y la app no
> carga, muestra en pantalla estos mismos pasos.

---

## Alternativa sin Actions (subir la carpeta compilada)

Si prefieres no usar el flujo automático:

```bash
npx vite build --base=./   # ← el --base=./ es obligatorio
```

y sube el contenido de la carpeta `dist/` a la rama `gh-pages` (o a `main` con
Source «Deploy from a branch»). **Importante:** si compilas sin `--base=./`,
el sitio quedará en blanco porque buscará los archivos en la raíz del dominio.
