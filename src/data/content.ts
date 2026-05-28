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
}

export const navLinks = [
  { label: 'Acerca', href: '#acerca' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
]

export const metrics: Metric[] = [
  { label: 'Proyectos entregados', value: '24+' },
  { label: 'Aumento promedio de conversion', value: '38%' },
  { label: 'Tiempo de lanzamiento', value: '4-6 semanas' },
]

export const skills: Skill[] = [
  {
    title: 'Frontend y Desarrollo Movil',
    description: 'Lenguajes: JavaScript, HTML5, CSS3. Frameworks y Herramientas: React DOM, React Native, Vite.',
    icon: AppWindow,
  },
  {
    title: 'Backend y Arquitectura de Datos',
    description: 'C#, Java, PHP. Motores: PostgreSQL, SQL Server, SQLite. BaaS: Supabase. Diseño estructurado y administracion etica.',
    icon: Database,
  },
  {
    title: 'Cloud, Despliegue y Control',
    description: 'Infraestructura y Hosting: Google Cloud, Vercel. Control de Versiones: Git, GitHub.',
    icon: Cloud,
  },
  {
    title: 'Automatizacion e IA',
    description: 'Orquestacion con n8n y Google Sheets. Integracion de IA, Prompt Engineering, Claude Code, Antigravity y Gemini 3 Pro-Coder.',
    icon: Bot,
  },
]

export const projects: Project[] = [
  {
    title: 'Pneuma Reach',
    tag: 'Accesibilidad Tecnologica',
    description: 'Sistema de control gestual interactivo mediante vision computacional, disenado para facilitar el uso del SO a personas con movilidad reducida.',
    technologies: 'Python, OpenCV, MediaPipe.',
    technicalAchievement: 'El mayor desafio fue adaptar la logica a la anatomia natural. Desarrolle un sistema que calcula dinamicamente el punto medio entre los dedos, aplique interpolacion para suavizar la sensibilidad y logre una herramienta intuitiva sin hardware costoso.',
    images: [pneuma1, pneuma2, pneuma3],
    techIcons: [SiPython, SiOpencv],
  },
  {
    title: 'Editorial Lumen',
    tag: 'MVP y Diseno UI/UX',
    description: 'Conceptualizacion, diseno UI/UX y desarrollo del MVP para la gestion de una plataforma editorial.',
    technologies: 'ASP.NET Framework, Patron MVC, Supabase.',
    technicalAchievement: 'Implementacion de una arquitectura de N-capas solida bajo el modelo MVC. Logre estructurar y separar de forma eficiente la logica de negocio, acceso a datos y la UI, garantizando un codigo ordenado y escalable.',
    images: [lumen1, lumen2, lumen3, lumen4],
    techIcons: [SiDotnet, SiSupabase],
  },
  {
    title: 'Mister PC Boteo',
    tag: 'Gestion Operativa',
    description: 'Aplicacion web a medida para digitalizar y optimizar las operaciones diarias de un negocio local de mantenimiento.',
    technologies: 'PHP nativo, HTML/CSS.',
    technicalAchievement: 'Desarrollo robusto sin depender de frameworks externos, disenando una arquitectura de directorios desde cero. Elimine la friccion del papeleo fisico, permitiendo consultar historiales de forma rapida y centralizada.',
    images: [boteo1, boteo2],
    techIcons: [SiPhp, SiHtml5, SiCss],
  },
]
