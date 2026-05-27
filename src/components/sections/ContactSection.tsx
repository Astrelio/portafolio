export function ContactSection() {
  return (
    <section id="contacto" className="section-shell">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 border border-[#2a2d33] md:grid-cols-2">
          <div className="border-b border-[#2a2d33] px-6 py-14 md:border-r md:border-b-0 md:px-10 md:py-20">
            <p className="section-label">05 / Contacto</p>
            <h2 className="mt-8 text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] font-medium tracking-[-0.02em] text-[#f3f4f6]">
              Armemos una version a tu medida.
            </h2>
          </div>

          <div className="flex flex-col justify-between px-6 py-14 md:px-10 md:py-20">
            <p className="max-w-md text-sm leading-[1.85] text-[#9ca3af] md:text-base">
              Podemos comenzar con una llamada corta para revisar objetivos, tiempos y alcance. Entrega profesional,
              estetica cuidada y estructura tecnica limpia desde el dia uno.
            </p>

            <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="mailto:hola@jnstudio.dev" className="btn-primary">
                hola@jnstudio.dev
              </a>
              <a href="#" className="btn-ghost">
                CV / Media Kit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
