import { projects } from '../../data/content'

export function ProjectsSection() {
  return (
    <section id="proyectos" className="section-shell border-b border-[#2a2d33]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid gap-8 border-b border-[#2a2d33] pb-12 md:grid-cols-[0.35fr_1fr] md:gap-16 md:pb-16">
          <p className="section-label">03 / Proyectos</p>
          <h2 className="max-w-3xl text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] font-medium tracking-[-0.02em] text-[#f3f4f6]">
            Resultados medibles, no solo diseno.
          </h2>
        </div>

        <div className="divide-y-sharp border border-[#2a2d33]">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="grid gap-8 px-6 py-14 md:grid-cols-[3rem_1fr_auto] md:items-start md:gap-12 md:px-10 md:py-16"
            >
              <p className="font-mono text-xs text-[#6b7280]">0{index + 1}</p>
              <div className="space-y-4 border-l border-[#2a2d33] pl-6 md:pl-8">
                <p className="section-label text-[#6b7280]">{project.tag}</p>
                <h3 className="text-2xl font-medium tracking-[-0.02em] text-[#f3f4f6] md:text-3xl">{project.title}</h3>
                <p className="max-w-2xl text-sm leading-[1.8] text-[#9ca3af] md:text-base">{project.description}</p>
              </div>
              <p className="self-start border border-[#2a2d33] bg-[#0f1012] px-4 py-3 font-mono text-xs uppercase tracking-[0.12em] text-[#a7f3d0]">
                {project.impact}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
