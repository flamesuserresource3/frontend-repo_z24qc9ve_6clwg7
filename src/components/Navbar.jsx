import { useState, useEffect } from 'react';
import { Menu, X, Github, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-xl bg-white/10 border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-white text-lg">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300">Flames</span>
            <span className="text-white/80">.Portfolio</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <a key={item.href} href={item.href} className="text-white/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <div className="h-6 w-px bg-white/10" />
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10 transition"
            >
              <Mail size={18} /> Contact
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 p-2 text-white/90 hover:bg-white/10 transition"
            >
              <Github size={18} />
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 p-2 text-white"
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
              {navItems.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white transition"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="mailto:hello@example.com"
                className="rounded-xl px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white transition inline-flex items-center gap-2"
              >
                <Mail size={18} /> Contact
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white transition inline-flex items-center gap-2"
              >
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
