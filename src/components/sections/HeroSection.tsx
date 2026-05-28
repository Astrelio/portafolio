import { ArrowRight } from 'lucide-react'
import { metrics } from '../../data/content'

export function HeroSection() {
  return (
    <section className="section-shell fade-up border-b border-[#2a2d33]">
      <div className="mx-auto grid w-full max-w-7xl flex-1 gap-16 px-6 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-20 md:px-10">
        <div className="max-w-4xl flex flex-col">
          <p className="section-label mb-8">01 / Inicio</p>
          <h1 className="text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] font-medium tracking-[-0.03em] text-[#f3f4f6] mb-6">
            Hola, soy Cesar (Aka Astrelio).
          </h1>
          <p className="max-w-xl text-base leading-[1.75] text-[#9ca3af] md:text-lg mb-8">
            Me apasiona construir soluciones integrales: desde el diseno estructurado de bases de datos y la arquitectura del backend, hasta la creacion de interfaces de usuario dinamicas en el frontend.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#proyectos" className="btn-primary">
              Ver proyectos
              <ArrowRight size={15} strokeWidth={2} />
            </a>
            <a href="#contacto" className="btn-ghost">
              Solicitar propuesta
            </a>
          </div>
        </div>

        <div className="divide-y-sharp panel w-full self-stretch">
          {metrics.map((metric) => (
            <article key={metric.label} className="flex flex-col justify-center px-6 py-10 md:px-8 md:py-12">
              <p className="font-mono text-[clamp(2rem,4vw,3rem)] font-medium leading-none text-[#f3f4f6]">
                {metric.value}
              </p>
              <p className="mt-4 max-w-[16ch] text-sm leading-relaxed text-[#9ca3af]">{metric.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
