import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { CrossCursor } from './components/ui/CrossCursor'
import { MouseSpotlight } from './components/ui/MouseSpotlight'
import { LavaBackground } from './components/ui/LavaBackground'
import { ContactSection } from './components/sections/ContactSection'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { SkillsSection } from './components/sections/SkillsSection'

function App() {
  return (
    <>
      <CrossCursor />
      <MouseSpotlight />
      <LavaBackground />
      <main className="min-h-screen relative z-0">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      </main>
    </>
  )
}

export default App
