// ─────────────────────────────────────────────
// components/Contact.jsx
// Contact section with social links + CTA
// ─────────────────────────────────────────────
import { useState } from 'react'

const socials = [
  {
    name: 'GitHub',
    label: 'github.com/emmyanzx',
    href: 'https://github.com/emmyanzx', // Replace with your real GitHub URL
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'Twitter / X',
    label: '@emmyanzx',
    href: 'https://x.com/emmyanzx', // Replace with your real Twitter URL
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    label: 'Emm Yanzo',
    href: 'www.linkedin.com/in/uyanwanne-emmanuel-b25865347', // Replace with your real LinkedIn URL
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText('emmyanzo@email.com') // Replace with your real email
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-xs tracking-widest uppercase text-orange mb-3">
            Let's talk
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight">
            Get in Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left — CTA text */}
          <div>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-8">
              Whether you have a project in mind, want to collaborate,
              or just want to say hello — my inbox is always open.
              I'm currently <span className="text-orange font-medium">available for freelance work</span> and
              open to full-time opportunities.
            </p>

            {/* Email copy button */}
            <button
              onClick={copyEmail}
              className="group flex items-center gap-3 bg-surface border border-border hover:border-orange rounded-xl px-6 py-4 transition-all duration-200 mb-10"
            >
              <span className="font-mono text-sm text-muted group-hover:text-cream transition-colors">
                emmyanzo@email.com
              </span>
              <span className={`font-mono text-xs ml-auto transition-colors ${copied ? 'text-orange' : 'text-muted'}`}>
                {copied ? 'Copied! ✓' : 'Copy'}
              </span>
            </button>

            {/* Social links */}
            <div className="flex flex-col gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-muted hover:text-cream transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center group-hover:border-orange group-hover:text-orange transition-all duration-200">
                    {social.icon}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-cream">{social.name}</p>
                    <p className="font-mono text-xs text-muted">{social.label}</p>
                  </div>
                  <span className="ml-auto opacity-0 group-hover:opacity-100 text-orange transition-opacity">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Big CTA card */}
          <div className="bg-surface border border-border rounded-2xl p-8 md:p-10">
            <div className="text-4xl mb-6">👋</div>
            <h3 className="font-display font-extrabold text-2xl md:text-3xl mb-4">
              Ready to build<br />
              <span className="text-orange">something great?</span>
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-8">
              I bring clean code, sharp design sensibility, and genuine
              passion to every project. Let's create something your users
              will love.
            </p>
            <a
              href="mailto:emmyanzo@email.com"
              className="block text-center bg-orange text-bg font-display font-bold text-sm px-6 py-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              Send me an email →
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}