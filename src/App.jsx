import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Subtle background texture and lighting */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(56,189,248,0.15),transparent_60%),radial-gradient(800px_400px_at_80%_10%,rgba(139,92,246,0.15),transparent_60%),radial-gradient(600px_300px_at_20%_20%,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      </div>

      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
