import { Github, Mail, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 border-t border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-white">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Let’s build something great</h3>
            <p className="mt-2 text-white/70 max-w-md">
              Have a project in mind or want to collaborate? I’m open to freelance, full-time, and product partnerships.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white/90 hover:bg-white/15 transition"
              >
                <Mail size={18} /> hello@example.com
              </a>
            </div>
          </div>
          <div className="md:justify-self-end">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 p-3 text-white/90 hover:bg-white/15 transition"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 p-3 text-white/90 hover:bg-white/15 transition"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between text-sm text-white/60">
          <p>© {new Date().getFullYear()} Flames • All rights reserved.</p>
          <p className="text-white/40">Designed in a glass-morphic aesthetic</p>
        </div>
      </div>
    </footer>
  );
}
