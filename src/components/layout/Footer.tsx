export function Footer() {
  return (
    <footer className="border-t border-[#2a2d33]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-10 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-[#6b7280] md:flex-row md:items-center md:justify-between md:px-10">
        <p>(c) {new Date().getFullYear()} César (Astrelio)</p>
        <p>React / TypeScript / Performance-first</p>
      </div>
    </footer>
  )
}
