import type { LucideIcon } from 'lucide-react'
import { Blocks, Bot, ChartNoAxesCombined, ShieldCheck, Sparkles, Workflow } from 'lucide-react'

export type Metric = {
  label: string
  value: string
}

export type Service = {
  title: string
  description: string
  icon: LucideIcon
}

export type Project = {
  title: string
  tag: string
  description: string
  impact: string
}

export const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
]

export const metrics: Metric[] = [
  { label: 'Proyectos entregados', value: '24+' },
  { label: 'Aumento promedio de conversion', value: '38%' },
  { label: 'Tiempo de lanzamiento', value: '4-6 semanas' },
]

export const services: Service[] = [
  {
    title: 'Landing pages de alto impacto',
    description: 'Diseno y desarrollo orientado a metricas de negocio con enfoque mobile-first.',
    icon: Sparkles,
  },
  {
    title: 'Automatizacion de procesos',
    description: 'Flujos que eliminan tareas repetitivas y conectan herramientas clave de tu operacion.',
    icon: Workflow,
  },
  {
    title: 'Paneles y analitica',
    description: 'Visualizacion clara de KPIs para decisiones rapidas y seguimiento de crecimiento.',
    icon: ChartNoAxesCombined,
  },
  {
    title: 'Arquitectura escalable',
    description: 'Base tecnica preparada para crecimiento sin sacrificar rendimiento ni mantenibilidad.',
    icon: Blocks,
  },
]

export const projects: Project[] = [
  {
    title: 'Nova Hiring',
    tag: 'SaaS / HR Tech',
    description: 'Rediseno completo de sitio y funnel de demo para una startup de reclutamiento.',
    impact: '+52% en leads calificados',
  },
  {
    title: 'Orbit Commerce',
    tag: 'E-commerce Ops',
    description: 'Plataforma interna para centralizar inventario, pedidos y alertas operativas.',
    impact: '-31% de tiempo operativo',
  },
  {
    title: 'Pulse Health',
    tag: 'HealthTech',
    description: 'Portal institucional con arquitectura modular y SEO tecnico para mercado B2B.',
    impact: '+44% trafico organico',
  },
]

export const processSteps = [
  {
    title: 'Diagnostico estrategico',
    description: 'Entiendo objetivos, contexto del negocio y necesidades reales de usuario.',
    icon: Bot,
  },
  {
    title: 'Diseno y validacion',
    description: 'Propuesta visual con foco en claridad, jerarquia y conversion.',
    icon: Sparkles,
  },
  {
    title: 'Construccion y calidad',
    description: 'Desarrollo con buenas practicas, rendimiento y accesibilidad desde el inicio.',
    icon: ShieldCheck,
  },
]
