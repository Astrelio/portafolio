# Portafolio Startup - Base

Portafolio estilo startup tecnológica con diseño moderno, colores sobrios y animaciones mínimas.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Lucide React (iconos)

## Estructura de carpetas

```txt
src/
  components/
    layout/
      Navbar.tsx
      Footer.tsx
    sections/
      HeroSection.tsx
      SkillsSection.tsx
      ProjectsSection.tsx
      AboutSection.tsx
      ContactSection.tsx
    ui/
      CrossCursor.tsx
      MouseSpotlight.tsx
      LavaBackground.tsx
      ImageCarousel.tsx
  data/
    content.ts
  sprites/
    personal/      # fotos personales
    logos/         # logos propios y de clientes
    projects/      # imágenes de proyectos
    icons/         # iconos e imágenes pequeñas
    backgrounds/   # fondos y texturas
    misc/          # otros assets
  App.tsx
  main.tsx
  index.css
```

## Scripts

- `npm run dev`: levanta entorno local
- `npm run build`: build de producción
- `npm run preview`: previsualiza build
- `npm run lint`: ejecuta eslint

## Notas de diseño

- Scroll vertical por bloques tipo landing startup.
- Paleta de tonos fríos y poco saturados.
- Animaciones ligeras (`fade-up` y micro-hover), evitando sobrecargar la interfaz.
