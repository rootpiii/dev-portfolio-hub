import { skillCategories } from '../data/portfolioData';
import { Atom, Code, Palette, Layers, Server, Cpu, Terminal as TerminalIcon, Globe, Database, HardDrive, Box, Cloud, GitBranch } from 'lucide-react';

export function Skills() {
  // Map icon strings to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'atom': return <Atom className="w-5 h-5 text-indigo-400" />;
      case 'code': return <Code className="w-5 h-5 text-indigo-400" />;
      case 'palette': return <Palette className="w-5 h-5 text-indigo-400" />;
      case 'layers': return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'server': return <Server className="w-5 h-5 text-violet-400" />;
      case 'cpu': return <Cpu className="w-5 h-5 text-violet-400" />;
      case 'terminal': return <TerminalIcon className="w-5 h-5 text-violet-400" />;
      case 'globe': return <Globe className="w-5 h-5 text-violet-400" />;
      case 'database': return <Database className="w-5 h-5 text-pink-400" />;
      case 'hard-drive': return <HardDrive className="w-5 h-5 text-pink-400" />;
      case 'box': return <Box className="w-5 h-5 text-emerald-400" />;
      case 'cloud': return <Cloud className="w-5 h-5 text-emerald-400" />;
      case 'git-branch': return <GitBranch className="w-5 h-5 text-emerald-400" />;
      default: return <Code className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-xs font-mono uppercase tracking-wider">
            Expertise & Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4">
            Technical Proficiencies
          </h2>
          <p className="text-slate-400 text-base">
            Comprehensive overview of languages, frameworks, databases, and cloud tools I use daily to build robust products.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 shadow-xl backdrop-blur-sm"
            >
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3 border-b border-slate-800 pb-4">
                <span className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse"></span>
                {category.name}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2.5 font-medium text-slate-200">
                        {getIcon(skill.icon)}
                        <span>{skill.name}</span>
                      </div>
                      <span className="text-xs font-mono text-indigo-400">{skill.level}%</span>
                    </div>
                    {/* Skill Bar */}
                    <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800/80">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}