import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[100vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient lighting overlays (non-blocking for 3D interaction) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      {/* Glass headline card */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl rounded-3xl border border-white/20 bg-white/10 p-6 sm:p-8 backdrop-blur-2xl text-white shadow-[0_8px_40px_rgba(0,0,0,0.25)]">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90">
            <Sparkles size={14} className="text-cyan-200" /> Glass-morphic 3D Portfolio
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight">
            Designer & Developer crafting modern fintech experiences
          </h1>
          <p className="mt-4 text-white/80">
            I blend 3D, motion, and clean systems to build premium digital products. Explore a selection of my recent work below.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3 font-medium text-slate-900 hover:opacity-95 transition"
            >
              View Projects <ArrowRight className="transition -translate-x-0 group-hover:translate-x-1" size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white/90 hover:bg-white/15 transition"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
