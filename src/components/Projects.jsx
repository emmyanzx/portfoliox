// ─────────────────────────────────────────────
// components/Projects.jsx
// Project cards grid — update links when ready
// ─────────────────────────────────────────────

const projects = [
  {
    title: 'Archive94',
    description: 'A vintage menswear store with product filters, Google sign-in, Paystack checkout, order confirmation emails and an admin page.',
    tags: ['Supabase', 'Paystack', 'Mailgun', 'Google Auth'],
    link: 'https://archive94.vercel.app/', // TODO: add the live Vercel URL
    emoji: '🧥',
  },
  {
    title: 'Archive94 Mobile',
    description: 'An Android app for the Archive94 store with the same Google login and a cart that syncs live with the website.',
    tags: ['Expo', 'React Native', 'Google Auth', 'EAS'],
    link: '#', // TODO: add the GitHub repo or APK link
    emoji: '📱',
  },
  {
    title: 'WriteRight',
    description: 'A Grammarly-style writing assistant that checks your text and suggests improvements using the Claude API.',
    tags: ['Claude API', 'JavaScript'],
    link: '#', // TODO: add the live URL
    emoji: '✍️',
  },
  {
    title: 'Authentication System',
    description: 'Sign-in with JWT and role-based access control, so different users see different parts of the app.',
    tags: ['React', 'Node.js', 'Express', 'JWT'],
    link: 'https://github.com/emmyanzx', // TODO: point to the repo
    emoji: '🔐',
  },
  {
    title: 'MoodPicker App',
    description: 'A personal daily mood tracker built with React. Log your mood, add notes, and visualise your emotional patterns over time.',
    tags: ['React', 'Tailwind CSS', 'useState'],
    link: '#',
    emoji: '🌿',
  },
  {
    title: 'Expense Tracker',
    description: 'Track income and expenses with category filters, localStorage persistence, and Chart.js visualisations.',
    tags: ['JavaScript', 'Chart.js', 'localStorage'],
    link: 'https://ex-tracker-ten.vercel.app/',
    emoji: '💸',
  },
  {
    title: 'SwiftHaul',
    description: 'A landing page for a logistics company, built in React and deployed on Vercel.',
    tags: ['React', 'Tailwind CSS', 'Vercel'],
    link: '#', // TODO: add the live Vercel URL
    emoji: '🚚',
  },
  {
    title: 'TechTrivia Quiz App',
    description: 'A timed multiple-choice quiz on web development topics with animated score reveal and answer review.',
    tags: ['JavaScript', 'DOM', 'CSS'],
    link: 'https://quiz-app-steel-beta.vercel.app/',
    emoji: '🧠',
  },
  {
    title: 'Task Manager App',
    description: 'A Kanban-style task manager to organise work by status — drag, create, complete, and delete tasks.',
    tags: ['React', 'State Management'],
    link: 'https://flo-site-lemon.vercel.app/',
    emoji: '✅',
  },
]

// Reusable ProjectCard component
function ProjectCard({ project, index }) {
  return (
    <div
      className="group bg-surface border border-border rounded-2xl p-6 hover:border-orange/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange/5 flex flex-col"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Emoji icon */}
      <div className="text-3xl mb-4">{project.emoji}</div>

      {/* Title */}
      <h3 className="font-display font-bold text-lg mb-2 group-hover:text-orange transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-muted text-sm leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs bg-bg border border-border px-3 py-1 rounded-full text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Link */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-orange hover:gap-3 transition-all duration-200"
      >
        View project <span>→</span>
      </a>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-xs tracking-widest uppercase text-orange mb-3">
            Things I've built
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight">
            Projects
          </h2>
        </div>

        {/* Grid — reusing ProjectCard for each project */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}