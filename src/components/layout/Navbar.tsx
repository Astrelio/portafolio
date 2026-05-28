import { navLinks } from '../../data/content'

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-[#2a2d33] bg-[#0a0a0b]/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#" className="font-mono text-xs font-medium tracking-[0.28em] text-[#f3f4f6]">
          Cesar (Astrelio).
        </a>

        <nav className="hidden gap-10 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[#9ca3af] md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-[#f3f4f6]">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contacto" className="nav-cta">
          Contacto
        </a>
      </div>
    </header>
  )
}
