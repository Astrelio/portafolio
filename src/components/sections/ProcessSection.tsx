import { processSteps } from '../../data/content'

export function ProcessSection() {
  return (
    <section id="proceso" className="section-shell border-b border-[#2a2d33]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid gap-8 border-b border-[#2a2d33] pb-12 md:grid-cols-[0.35fr_1fr] md:gap-16 md:pb-16">
          <p className="section-label">04 / Metodologia</p>
          <h2 className="max-w-3xl text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] font-medium tracking-[-0.02em] text-[#f3f4f6]">
            Un proceso simple para moverte rapido y con enfoque.
          </h2>
        </div>

        <div className="grid border border-[#2a2d33] md:grid-cols-3">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <article
                key={step.title}
                className={`flex min-h-[22rem] flex-col px-6 py-12 md:min-h-[26rem] md:px-8 md:py-14 ${
                  index < processSteps.length - 1 ? 'md:border-r md:border-[#2a2d33]' : ''
                } ${index > 0 ? 'border-t border-[#2a2d33] md:border-t-0' : ''}`}
              >
                <p className="font-mono text-xs text-[#6b7280]">Paso 0{index + 1}</p>
                <span className="mt-8 inline-flex w-fit border border-[#2a2d33] p-2 text-[#d1d5db]">
                  <Icon size={18} strokeWidth={1.5} />
                </span>
                <h3 className="mt-10 text-xl font-medium text-[#f3f4f6] md:text-2xl">{step.title}</h3>
                <p className="mt-5 flex-1 text-sm leading-[1.8] text-[#9ca3af] md:text-base">{step.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
