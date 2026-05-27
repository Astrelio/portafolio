import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { CrossCursor } from './components/ui/CrossCursor'
import { MouseSpotlight } from './components/ui/MouseSpotlight'
import { LavaBackground } from './components/ui/LavaBackground'
import { ContactSection } from './components/sections/ContactSection'
import { HeroSection } from './components/sections/HeroSection'
import { ProcessSection } from './components/sections/ProcessSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { ServicesSection } from './components/sections/ServicesSection'

function App() {
  return (
    <>
      <CrossCursor />
      <MouseSpotlight />
      <LavaBackground />
      <main className="min-h-screen relative z-0">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
      </main>
    </>
  )
}

export default App
