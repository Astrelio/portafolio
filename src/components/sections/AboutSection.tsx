export function AboutSection() {
  return (
    <section id="acerca" className="section-shell border-b border-[#2a2d33]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid gap-8 border-b border-[#2a2d33] pb-12 md:grid-cols-[0.35fr_1fr] md:gap-16 md:pb-16">
          <p className="section-label">04 / Acerca de mi</p>
          <h2 className="max-w-3xl text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] font-medium tracking-[-0.02em] text-[#f3f4f6]">
            Sobre mi
          </h2>
        </div>

        <div className="border border-[#2a2d33] px-6 py-12 md:px-10 md:py-16">
          <p className="max-w-4xl text-base leading-[1.8] text-[#9ca3af] md:text-lg">
            Soy un desarrollador de software a un paso de graduarme como Tecnico en Ingenieria, con un enfoque Full Stack. Mi mayor fortaleza es la versatilidad: disfruto enormemente el desafio de disenar bases de datos eficientes, construir un backend solido y darle vida a todo a traves de un frontend intuitivo. Me encanta involucrarme en el ciclo completo de desarrollo utilizando tecnologias como C#, ASP.NET, React Native y motores SQL como Supabase o Firebase, asegurando que cada pieza de codigo conecte perfectamente para crear una gran experiencia de usuario.
          </p>
        </div>
      </div>
    </section>
  )
}
