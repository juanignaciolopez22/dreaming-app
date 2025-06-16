# Dreaming App

Dreaming App es una aplicación web donde los usuarios pueden crear perfiles soñadores; registar, visualizar y compartir sus sueños, así como interactuar con los sueños de otros en la comunidad. El objetivo es ofrecer un espacio creativo y visualmente atractivo para inspirarse y explorar experiencias oníricas (?. 

---

## Concepto

La app funciona como un diario de sueños colaborativo y visual. Cada usuario puede crear su perfil de "Soñador", agregar sueños, generar imágenes con IA para ilustrarlos y compartirlos en una galería pública. El diseño utiliza una estética nocturna, moderna y minimalista, con animaciones y colores oscuros para transmitir creatividad y misterio.

---

## Features principales

- **Perfil y sesión del Soñador:**  
  Crea tu soñador. Cada perfil tiene nombre, imagen (opcional) y contraseña (PIN) de acceso. Una vez creado, podes logearte y deslogearte las veces que desees, simplemente haciendo click sobre el Dreamer.

- **Agregar Sueños:**  
  Cada soñador puede registrar sus sueños, escribiendo su descripción y generando una imagen ilustrativa usando inteligencia artificial (Pollinations AI). Para ello, primero debes logearte en un Dreamer, y nuevamente haciendo click sobre este ya puedes comenzar a soñar.

- **Publicar Sueños:**  
  Los sueños pueden guardarse de forma privada o publicarse en la galería general.

- **Galería de Sueños:**  
  Visualiza los sueños publicados por todos los soñadores en una galería atractiva.

- **Likes y Reacciones:**  
  Los soñadores pueden dar "like" a los sueños de otros soñadores (no a los propios!).

- **Ranking de Soñadores:**  
  Un ranking en la Home muestra a los soñadores más activos y con más likes en sus sueños publicados. Solo podrás visualizarlo si estás logeado.
  **🟣 BONUS**

- **Animaciones:**  
  Fondo animado para una experiencia inmersiva.

- **Notificaciones:**  
  Sistema que alerta la generación de nuevos sueños.
  **🟣 BONUS**

- **Autenticación Simple:**  
  Acceso a cada Dreamer mediante PIN de 4 dígitos.

- **Buscador de Soñadores:**  
  Filtra y busca soñadores por nombre.
  **🟣 BONUS**

---

## Tecnologías y dependencias

- **React** (con Vite)
- **Material UI (MUI)** 
- **@tsparticles** — Fondos animados y partículas interactivas.
- **Axios**
- **Pollinations AI Image API** — Generación de imágenes mediante inteligencia artificial (gratuita).
- **Zustand** — Manejo de estado global simple. **🟣 BONUS**
- **React Router** — (Planeado para futuras entregas) Navegación entre vistas.

---

## Estructura del Proyecto

```
components
  Layout
    Background
    Footer
    Navbar
      NotificationsMenu
  Home
    HomeWelcome
    HomeRanking
      RankedDreamer
    utils
  DreamersPanel
    CreateDreamerDialog
    Dreamer
      Dream
        DreamErrorDialog
      DreamerCard
      DreamerGallery
        DreamGalleryLike
        DreamGalleryPublish
      DreamerLoginDialog
    DreamerSearch
  DreamsGallery
    DreamPublishedCard
services
  images.api
store
  dreamersStore
App
App.css
main
```

- **components/**: Componentes reutilizables, de layout y funcionalidad, agrupados por dominio.
- **services/**: Funciones para interactuar con APIs externas (por ejemplo, generación de imágenes).
- **store/**: Estado global de la app (Zustand).
- **App.jsx**: Punto de entrada de la app, gestiona layout y rutas.
- **main.jsx**: Renderizado principal de React.
- **App.css**: Estilos globales.

---

## Rutas navegables

- `/dreaming-app/`  
  Página principal (Home): muestra bienvenida, ranking y acceso a funcionalidad principal.

- `/dreaming-app/dreamers`  
  Panel de soñadores: crea, busca, loguea y gestiona perfiles de soñadores, y obviamente, sueña. Publica, likea, y vive los sueños.

- `/dreaming-app/gallery`  
  Galería de sueños: visualiza todos los sueños publicados por la comunidad.

---

## Instalación y Uso

1. Clona el repositorio:
   ```sh
   git clone https://github.com/juanignaciolopez22/dreaming-app.git
   cd dreaming-app
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

3. Inicia la app en modo desarrollo:
   ```sh
   npm run dev
   ```

4. Abre [http://localhost:5173/dreaming-app/](http://localhost:5173/dreaming-app/) en tu navegador.

---

## Deploy

El proyecto puede desplegarse fácilmente en GitHub Pages usando Vite y el script:

```sh
npm run deploy
```

**Demo en vivo:**  
[https://juanignaciolopez22.github.io/dreaming-app/](https://juanignaciolopez22.github.io/dreaming-app/)

---

**Hecho con un poco de sueño y mucho café ☕️**  
**Para Alkemy 🚀**







*Readme redactado con ayuda de mi Bro **GitHub Copilot** 🤖*