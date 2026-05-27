# Sprites (imagenes del proyecto)

Carpeta central para assets visuales del portafolio.

## Estructura

| Carpeta        | Uso                                      |
| -------------- | ---------------------------------------- |
| `personal/`    | Fotos personales, retrato, about         |
| `logos/`       | Logo propio, marcas, clientes, partners  |
| `projects/`    | Capturas y assets de proyectos           |
| `icons/`       | Iconos o imagenes pequenas en PNG/SVG    |
| `backgrounds/` | Texturas, fondos, elementos decorativos  |
| `misc/`        | Otros assets que no encajan arriba       |

## Uso en React (Vite)

```tsx
import profilePhoto from '../sprites/personal/profile.jpg'

<img src={profilePhoto} alt="Retrato" />
```

## Convenciones

- Nombres en minusculas y guiones: `nova-hiring-cover.webp`
- Preferir `.webp` o `.avif` para fotos; `.svg` para logos
- Evitar archivos muy pesados (idealmente < 300 KB por imagen web)
