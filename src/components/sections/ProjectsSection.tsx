import { projects } from '../../data/content'
import { ImageCarousel } from '../ui/ImageCarousel'
import { SiGithub } from 'react-icons/si'

export function ProjectsSection() {
  return (
    <section id="proyectos" className="section-shell border-b border-[#2a2d33]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid gap-8 border-b border-[#2a2d33] pb-12 md:grid-cols-[0.35fr_1fr] md:gap-16 md:pb-16">
          <p className="section-label">03 / Proyectos</p>
          <h2 className="max-w-3xl text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] font-medium tracking-[-0.02em] text-[#f3f4f6]">
            Desarrollo de soluciones reales.
          </h2>
        </div>

        <div className="divide-y-sharp border border-[#2a2d33]">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="grid gap-8 px-6 py-14 md:grid-cols-[3rem_1fr] md:items-start md:gap-12 md:px-10 md:py-16"
            >
              <p className="font-mono text-xs text-[#6b7280]">0{index + 1}</p>
              <div className="space-y-6 border-l border-[#2a2d33] pl-6 md:pl-8">
                <div>
                  <p className="section-label text-[#6b7280]">{project.tag}</p>
                  <h3 className="mt-2 text-2xl font-medium tracking-[-0.02em] text-[#f3f4f6] md:text-3xl">{project.title}</h3>
                  <p className="mt-4 max-w-3xl text-sm leading-[1.8] text-[#9ca3af] md:text-base">{project.description}</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="font-mono text-xs uppercase tracking-widest text-[#f3f4f6]">Tecnologías</p>
                    {project.techIcons && (
                      <div className="flex items-center gap-2 text-[#a78bfa]">
                        {project.techIcons.map((Icon, i) => (
                          <Icon key={i} size={16} title={Icon.name.replace('Si', '')} />
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="max-w-3xl text-sm leading-[1.8] text-[#9ca3af]">{project.technologies}</p>
                </div>

                <div className="space-y-2">
                  <p className="font-mono text-xs uppercase tracking-widest text-[#f3f4f6]">Logro Técnico</p>
                  <p className="max-w-3xl text-sm leading-[1.8] text-[#9ca3af]">{project.technicalAchievement}</p>
                </div>

                {project.repoUrl && (
                  <div className="pt-2">
                    <a 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-sm font-mono tracking-wide text-[#f3f4f6] transition-colors hover:text-[#a78bfa]"
                    >
                      <SiGithub size={16} />
                      <span className="border-b border-[#2a2d33] pb-0.5 hover:border-[#a78bfa]">Ver código fuente</span>
                    </a>
                  </div>
                )}

                {project.images && project.images.length > 0 && (
                  <div className="mt-10 pt-8 border-t border-[#2a2d33]">
                    <ImageCarousel images={project.images} title={project.title} />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
