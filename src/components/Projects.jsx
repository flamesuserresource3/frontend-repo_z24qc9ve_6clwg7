import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Fintech Dashboard',
    desc: 'A glassy, data-rich interface for real-time payments analytics.',
    tags: ['React', 'Tailwind', 'Charts'],
    link: '#',
    image:
      'https://images.unsplash.com/photo-1551281044-8d8d6aa0d318?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: '3D Card Experience',
    desc: 'Interactive credit card visualization with 3D depth and motion.',
    tags: ['Spline', 'Three.js', 'UX'],
    link: '#',
    image:
      'https://images.unsplash.com/photo-1642790106117-5dcc2c53c30d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Neo Bank Website',
    desc: 'A modern marketing site with glass morphism and subtle motion.',
    tags: ['Marketing', 'SEO', 'Design'],
    link: '#',
    image:
      'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1200&auto=format&fit=crop',
  },
];

function ProjectCard({ title, desc, tags, link, image }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.25)]"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-slate-900/0" />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-2 py-1 text-xs text-white/80">
            <ExternalLink size={14} />
          </span>
        </div>
        <p className="mt-2 text-sm text-white/70">{desc}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-white/70">
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">Featured Projects</h2>
        <p className="mt-3 text-white/70">
          A curated set of recent builds across fintech, 3D web, and product design.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
