// ─────────────────────────────────────────────
// components/Hero.jsx
// Full-screen landing section with photo + intro
// ─────────────────────────────────────────────

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left — Text */}
          <div className="animate-fade-up">
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 bg-orange-dim border border-orange/30 text-orange font-mono text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
              Available for work
            </div>

            <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-none tracking-tight mb-6">
              Emm<br />
              <span className="text-orange">Yanzo</span><span className="text-muted">.</span>
            </h1>

            <p className="font-mono text-sm tracking-widest uppercase text-muted mb-6">
              Frontend Developer
            </p>

            <p className="font-body text-base md:text-lg text-muted leading-relaxed max-w-md mb-10">
              A creative frontend developer who believes great interfaces
              are more than code — they're experiences. Driven by a love
              for fitness, psychology, cinema, and the arts, I bring a
              multidisciplinary eye to every pixel I craft. I build things
              that <span className="text-cream font-medium">feel alive</span>.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-orange text-bg font-display font-bold text-sm px-6 py-3.5 rounded-lg hover:opacity-90 transition-opacity"
              >
                See my work →
              </a>
              <a
                href="#contact"
                className="border border-border text-cream font-display font-bold text-sm px-6 py-3.5 rounded-lg hover:border-orange hover:text-orange transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Right — Photo */}
          <div className="animate-fade-in flex justify-center md:justify-end" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-2xl border border-orange/20" />
              <div className="absolute -inset-6 rounded-3xl border border-orange/10" />

              {/* Photo */}
              {/* Photo */}
              <div className="relative w-72 md:w-80 aspect-[4/5] rounded-2xl overflow-hidden border border-border">
                <img
                  src="/profile.jpg"
                  alt="Emm Yanzo"
                  className="w-full h-full object-cover object-[50%_25%] grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Orange overlay tint on bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange/20 via-transparent to-transparent" />
              </div>

              {/* Floating tag */}
              <div className="absolute -bottom-4 -left-6 bg-surface border border-border rounded-xl px-4 py-3 shadow-xl">
                <p className="font-mono text-xs text-muted mb-0.5">Based in</p>
                <p className="font-display font-bold text-sm">Nigeria 🇳🇬</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}