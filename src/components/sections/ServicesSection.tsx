import { services } from '../../data/content'

export function ServicesSection() {
  return (
    <section id="servicios" className="section-shell border-b border-[#2a2d33]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid gap-8 border-b border-[#2a2d33] pb-12 md:grid-cols-[0.35fr_1fr] md:gap-16 md:pb-16">
          <p className="section-label">02 / Servicios</p>
          <h2 className="max-w-3xl text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] font-medium tracking-[-0.02em] text-[#f3f4f6]">
            Soluciones digitales para etapas tempranas y crecimiento.
          </h2>
        </div>

        <div className="divide-y-sharp mt-0 border border-[#2a2d33]">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="grid gap-6 px-6 py-12 md:grid-cols-[4rem_1fr_1.2fr] md:items-start md:gap-10 md:px-10 md:py-14"
              >
                <p className="font-mono text-xs text-[#6b7280]">0{index + 1}</p>
                <div className="flex items-start gap-4">
                  <span className="inline-flex border border-[#2a2d33] p-2 text-[#d1d5db]">
                    <Icon size={18} strokeWidth={1.5} />
                  </span>
                  <h3 className="text-lg font-medium text-[#f3f4f6] md:text-xl">{service.title}</h3>
                </div>
                <p className="text-sm leading-[1.8] text-[#9ca3af] md:text-base">{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
