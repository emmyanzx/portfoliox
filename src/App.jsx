// ─────────────────────────────────────────────
// App.jsx — Emm Yanzo Portfolio
// Root component — assembles all sections
// ─────────────────────────────────────────────

import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Skills   from './components/Skills'
import Projects from './components/Projects'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-cream">
      {/* Sticky navigation */}
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}