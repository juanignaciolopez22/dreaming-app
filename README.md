# Dreaming App

Dreaming App is a web application where users can share, view, and save their dreams. The goal is to create a creative and visually attractive space to record dreams, get inspired, and explore the dream experiences of other users.

> **Note:** This app is under construction and currently at Delivery 1 (Entrega 1).

## Concept

The app is designed as a collaborative and visual dream diary. Each user can create their "Dreamer" profile, add dreams, and view a generated dream gallery. The design uses dark colors and animated backgrounds to convey a nocturnal and creative atmosphere, with a modern and minimalist interface.

## Main Features

- **Dreamers:** Create and manage dreamer profiles.
- **Dreams:** Add and save dreams associated with each dreamer.
- **Dreams Gallery:** View dreams in an attractive gallery.
- **Animations:** Animated background for an immersive experience.
- **Responsive Design:** Interface adaptable to any device.
- **Easy Navigation:** Navigation bar and footer present on all pages.

## Technologies & Dependencies

- **React** (with Vite)
- **Material UI** (MUI) for UI components
- **@tsparticles** for animated backgrounds
- **Axios** for HTTP requests
- **Pollinations AI Image API** for generating dream images with artificial intelligence
- **React Router** (planned for future deliveries)

## Project Structure

```
src/
  components/
    Navbar.jsx
    Footer.jsx
    Layout.jsx
    Dreamer.jsx
    DreamersPanel.jsx
    DreamerGallery.jsx
    Background.jsx
  pages/
    Home.jsx
    Dreamers.jsx
    DreamsGallery.jsx
  services/
    api.js         // Functions to interact with external APIs (e.g., Pollinations AI)
  App.jsx
  App.css
```

- **components/**: Reusable and layout components.
- **pages/**: Main views of the application.
- **services/**: API and external service utilities.
- **App.jsx**: Entry point, manages layout and routes.

## Installation and Usage

1. Clone the repository:
   ```sh
   git clone https://github.com/juanignaciolopez22/dreaming-app.git
   cd dreaming-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the app in development mode:
   ```sh
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Deploy

The project can be easily deployed to GitHub Pages using Vite and the script `npm run deploy`.

**Live demo:**  
[https://juanignaciolopez22.github.io/dreaming-app/](https://juanignaciolopez22.github.io/dreaming-app/)

---

**Made with a bit of sleepiness and coffee ☕️**  
**For Alkemy 🚀**