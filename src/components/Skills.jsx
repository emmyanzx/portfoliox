// ─────────────────────────────────────────────
// components/Skills.jsx
// Icon-based skills, grouped by what they do
// Install icons first:  npm install react-icons
// ─────────────────────────────────────────────
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiVite,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
  SiNetlify,

} from 'react-icons/si'
import {
  LuSparkles,
  LuBot,
  LuMessageSquareText,
  LuSmartphone,
  LuGauge,
  LuAccessibility,
  LuPalette,
  LuPlug,
} from 'react-icons/lu'

// `color` is the brand color shown on hover. Tiles stay muted until then.
const groups = [
  {
    title: 'Build',
    note: 'What I write the interface in',
    skills: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
      { name: 'Framer Motion', icon: SiFramer, color: '#FFFFFF' },
      { name: 'Vite', icon: SiVite, color: '#A855F7' },
    ],
  },
  {
    title: 'Craft',
    note: 'What makes it good to use',
    skills: [
      { name: 'Responsive Design', icon: LuSmartphone, color: '#FF6B35' },
      { name: 'UI Design', icon: LuPalette, color: '#FF6B35' },
      { name: 'Accessibility', icon: LuAccessibility, color: '#FF6B35' },
      { name: 'Performance', icon: LuGauge, color: '#FF6B35' },
      { name: 'REST APIs', icon: LuPlug, color: '#FF6B35' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    ],
  },
  {
    title: 'AI-assisted workflow',
    note: 'How I ship faster without cutting corners',
    skills: [
      { name: 'AI pair programming', icon: LuBot, color: '#FF6B35' },
      { name: 'Prompt engineering', icon: LuMessageSquareText, color: '#FF6B35' },
      { name: 'AI-powered features', icon: LuSparkles, color: '#FF6B35' },
    ],
  },
  {
    title: 'Ship',
    note: 'Tools I use day to day',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
      { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
      { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
    ],
  },
]

function SkillTile({ name, icon: Icon, color }) {
  return (
    <li
      className="group flex flex-col items-center justify-center gap-3 w-28 h-28 md:w-32 md:h-32 rounded-2xl bg-surface border border-border hover:border-orange/60 hover:-translate-y-1 transition-all duration-300"
      style={{ '--brand': color }}
    >
      <Icon className="w-9 h-9 md:w-10 md:h-10 text-muted transition-colors duration-300 group-hover:text-[var(--brand)]" />
      <span className="font-display font-semibold text-xs text-muted text-center px-2 leading-tight group-hover:text-cream transition-colors">
        {name}
      </span>
    </li>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 max-w-xl">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-4">
            Skills &amp; Tools
          </h2>
          <p className="text-muted text-base md:text-lg leading-relaxed">
            I design and build interfaces with modern frontend tools, and use AI
            to move faster while I stay in charge of the quality.
          </p>
        </div>

        {/* Groups */}
        <div className="flex flex-col gap-14">
          {groups.map((group) => (
            <div key={group.title}>
              <div className="flex items-baseline gap-3 mb-6">
                <h3 className="font-display font-bold text-xl">{group.title}</h3>
                <p className="text-muted text-sm">{group.note}</p>
              </div>
              <ul className="flex flex-wrap gap-4">
                {group.skills.map((skill) => (
                  <SkillTile key={skill.name} {...skill} />
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}