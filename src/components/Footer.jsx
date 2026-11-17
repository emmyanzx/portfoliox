// ─────────────────────────────────────────────
// components/Footer.jsx
// Simple footer with copyright
// ─────────────────────────────────────────────

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          © {year} Emm Yanzo. Built with React + Tailwind CSS.
        </p>
        <p className="font-mono text-xs text-muted">
          Designed &amp; developed by{' '}
          <span className="text-orange">Emm Yanzo</span>
        </p>
      </div>
    </footer>
  )
}