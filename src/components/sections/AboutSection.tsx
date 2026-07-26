import me1 from '../../assets/me/me1.png'

export function AboutSection() {
  return (
    <section id="acerca" className="section-shell border-b border-[#2a2d33]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid gap-8 border-b border-[#2a2d33] pb-12 md:grid-cols-[0.35fr_1fr] md:gap-16 md:pb-16">
          <p className="section-label">04 / Acerca de mí</p>
          <h2 className="max-w-3xl text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] font-medium tracking-[-0.02em] text-[#f3f4f6]">
            Sobre mí
          </h2>
        </div>

        <div className="grid gap-12 border border-[#2a2d33] px-6 py-12 md:grid-cols-[1.2fr_1fr] md:items-center md:px-10 md:py-16">
          <p className="text-base leading-[1.8] text-[#9ca3af] md:text-lg">
            Soy un desarrollador de software a un paso de graduarme como Técnico en Ingeniería, con un enfoque Full Stack. Mi mayor fortaleza es la versatilidad: disfruto enormemente el desafío de diseñar bases de datos eficientes, construir un backend sólido y darle vida a todo a través de un frontend intuitivo. Me encanta involucrarme en el ciclo completo de desarrollo utilizando tecnologías como C#, ASP.NET, React Native y motores SQL como Supabase o Firebase, asegurando que cada pieza de código conecte perfectamente para crear una gran experiencia de usuario.
          </p>
          <div className="relative overflow-hidden border border-[#2a2d33]">
            <img 
              src={me1} 
              alt="César Francisco en un stream programando" 
              className="w-full h-auto object-cover grayscale opacity-75 transition-all duration-700 hover:grayscale-0 hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
