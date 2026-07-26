import type { LucideIcon } from 'lucide-react'
import { AppWindow, Database, Cloud, Bot } from 'lucide-react'
import type { IconType } from 'react-icons'
import { SiPython, SiOpencv, SiDotnet, SiSupabase, SiPhp, SiHtml5, SiCss } from 'react-icons/si'

import pneuma1 from '../assets/pneuma/demo1.png'
import pneuma2 from '../assets/pneuma/demo2.png'
import pneuma3 from '../assets/pneuma/demo3.png'

import lumen1 from '../assets/lumen/lumen home.png'
import lumen2 from '../assets/lumen/lumen side bar.png'
import lumen3 from '../assets/lumen/lounge.png'
import lumen4 from '../assets/lumen/mascota.png'

import boteo1 from '../assets/boteo/boteo1.png'
import boteo2 from '../assets/boteo/boteo2.png'

export type Metric = {
  label: string
  value: string
}

export type Skill = {
  title: string
  description: string
  icon: LucideIcon
}

export type Project = {
  title: string
  tag: string
  description: string
  technologies: string
  technicalAchievement: string
  images?: string[]
  techIcons?: IconType[]
  repoUrl?: string
}

export const navLinks = [
  { label: 'Acerca', href: '#acerca' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
]

export const metrics: Metric[] = [
  { label: 'Enfoque de Desarrollo', value: 'Full Stack' },
  { label: 'Integración de Modelos', value: 'IA Generativa' },
  { label: 'Flujos Autónomos y n8n', value: 'Automatización' },
]

export const skills: Skill[] = [
  {
    title: 'Frontend y Desarrollo Móvil',
    description: 'Lenguajes: JavaScript, HTML5, CSS3. Frameworks y Herramientas: React DOM, React Native, Vite.',
    icon: AppWindow,
  },
  {
    title: 'Backend y Arquitectura de Datos',
    description: 'C#, Java, PHP. Motores: PostgreSQL, SQL Server, SQLite. BaaS: Supabase. Diseño estructurado y administración ética.',
    icon: Database,
  },
  {
    title: 'Cloud, Despliegue y Control',
    description: 'Infraestructura y Hosting: Google Cloud, Vercel. Control de Versiones: Git, GitHub.',
    icon: Cloud,
  },
  {
    title: 'Automatización e IA',
    description: 'Orquestación con n8n y Google Sheets. Integración de IA, Prompt Engineering, Claude Code, Antigravity y Gemini 3 Pro-Coder.',
    icon: Bot,
  },
]

export const projects: Project[] = [
  {
    title: 'Pneuma Reach',
    tag: 'Accesibilidad Tecnológica',
    description: 'Sistema de control gestual interactivo mediante visión computacional, diseñado para facilitar el uso del SO a personas con movilidad reducida.',
    technologies: 'Python, OpenCV, MediaPipe.',
    technicalAchievement: 'El mayor desafío fue adaptar la lógica a la anatomía natural. Desarrollé un sistema que calcula dinámicamente el punto medio entre los dedos, apliqué interpolación para suavizar la sensibilidad y logré una herramienta intuitiva sin hardware costoso.',
    images: [pneuma1, pneuma2, pneuma3],
    techIcons: [SiPython, SiOpencv],
    repoUrl: 'https://github.com/Astrelio/Pneuma/tree/main',
  },
  {
    title: 'Editorial Lumen',
    tag: 'MVP y Diseño UI/UX',
    description: 'Conceptualización, diseño UI/UX y desarrollo del MVP para la gestión de una plataforma editorial.',
    technologies: 'ASP.NET Framework, Patrón MVC, Supabase.',
    technicalAchievement: 'Implementación de una arquitectura de N-capas sólida bajo el modelo MVC. Logré estructurar y separar de forma eficiente la lógica de negocio, acceso a datos y la UI, garantizando un código ordenado y escalable.',
    images: [lumen1, lumen2, lumen3, lumen4],
    techIcons: [SiDotnet, SiSupabase],
    repoUrl: 'https://github.com/Marelin2007/EditorialLibroLumen',
  },
  {
    title: 'Mister PC Boteo',
    tag: 'Gestión Operativa',
    description: 'Aplicación web a medida para digitalizar y optimizar las operaciones diarias de un negocio local de mantenimiento.',
    technologies: 'PHP nativo, HTML/CSS.',
    technicalAchievement: 'Desarrollo robusto sin depender de frameworks externos, diseñando una arquitectura de directorios desde cero. Eliminé la fricción del papeleo físico, permitiendo consultar historiales de forma rápida y centralizada.',
    images: [boteo1, boteo2],
    techIcons: [SiPhp, SiHtml5, SiCss],
    repoUrl: 'https://github.com/dx-alas/mister-pc-boteo-platform',
  },
]
