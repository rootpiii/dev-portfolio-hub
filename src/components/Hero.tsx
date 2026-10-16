import { ArrowRight, Github, Sparkles, Terminal, CheckCircle2 } from "lucide-react";
import { developerInfo } from '../data/portfolioData';
import SafeImage from './common/SafeImage';


function BrandIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}
const Linkedin = BrandIcon;
const Twitter = BrandIcon;

export function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-xs sm:text-sm shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-emerald-400">Available for hire</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400 truncate max-w-[200px] sm:max-w-none">{developerInfo.location}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">{developerInfo.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-indigo-300 font-mono">
                {developerInfo.role}
              </p>
            </div>

            {/* Bio paragraph */}
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              {developerInfo.bio}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#terminal"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold transition-all hover:border-slate-700"
              >
                <Terminal className="w-4 h-4 text-indigo-400" />
                <span>Open Terminal</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center gap-4 text-slate-400">
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider font-mono">Connect:</span>
              <a href={developerInfo.github} target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:text-white transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href={developerInfo.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={developerInfo.twitter} target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Profile Picture & Stats Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              
              {/* Decorative card border glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-500 to-violet-600 opacity-30 blur-xl pointer-events-none" />

              <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800 p-6 backdrop-blur-xl shadow-2xl space-y-6">
                
                {/* Avatar & Header */}
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-indigo-500/50 shadow-lg">
                    <SafeImage
                      src={developerInfo.avatar}
                      alt={developerInfo.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">{developerInfo.name}</h3>
                    <p className="text-xs text-indigo-400 font-mono">Full-Stack Architect</p>
                    <div className="flex items-center gap-1.5 mt-2 text-xs text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Contributor</span>
                    </div>
                  </div>
                </div>

                {/* Quick stats grid */}
                <div className="grid grid-cols-2 gap-3">
                  {developerInfo.stats.map((stat, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                      <span className="block text-2xl font-extrabold text-white font-mono">
                        {stat.value}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Mini code snippet display */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 space-y-1">
                  <div className="text-slate-500 flex items-center justify-between">
                    <span>// core_stack.ts</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  </div>
                  <p><span className="text-indigo-400">const</span> stack = [<span className="text-emerald-300">'React'</span>, <span className="text-emerald-300">'Go'</span>, <span className="text-emerald-300">'TS'</span>];</p>
                  <p><span className="text-indigo-400">const</span> focus = <span className="text-emerald-300">'Scalability'</span>;</p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}