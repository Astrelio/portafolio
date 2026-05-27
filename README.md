# Portfolio Startup - Base

Portafolio estilo startup tecnologica con diseno moderno, colores sobrios y animaciones minimas.

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
      ServicesSection.tsx
      ProjectsSection.tsx
      ProcessSection.tsx
      ContactSection.tsx
    ui/
      CrossCursor.tsx
      MouseSpotlight.tsx
  data/
    content.ts
  sprites/
    personal/      # fotos personales
    logos/         # logos propios y de clientes
    projects/      # imagenes de proyectos
    icons/         # iconos e imagenes pequenas
    backgrounds/   # fondos y texturas
    misc/          # otros assets
  App.tsx
  main.tsx
  index.css
```

## Scripts

- `npm run dev`: levanta entorno local
- `npm run build`: build de produccion
- `npm run preview`: previsualiza build
- `npm run lint`: ejecuta eslint

## Notas de diseno

- Scroll vertical por bloques tipo landing startup.
- Paleta de tonos frios y poco saturados.
- Animaciones ligeras (`fade-up` y micro-hover), evitando sobrecargar la interfaz.
