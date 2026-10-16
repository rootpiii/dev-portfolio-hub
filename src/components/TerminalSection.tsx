import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles } from 'lucide-react';
import { developerInfo, projectsData, terminalCommandsHelp } from '../data/portfolioData';

interface OutputItem {
  type: 'input' | 'output' | 'error' | 'success';
  text: string | React.ReactNode;
}

export function TerminalSection() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<OutputItem[]>([
    { type: 'output', text: 'Welcome to AlexOS v2.4.0 (x86_64-apple-darwin)' },
    { type: 'output', text: 'Type "help" to see available commands or click quick suggestions below.' }
  ]);

  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdText: string) => {
    const cleanCmd = cmdText.trim().toLowerCase();
    if (!cleanCmd) return;

    const newHistory: OutputItem[] = [
      ...history,
      { type: 'input', text: `alex@portfolio:~$ ${cleanCmd}` }
    ];

    if (cleanCmd === 'help') {
      newHistory.push({
        type: 'output',
        text: (
          <div className="space-y-1 my-1">
            <div className="text-indigo-300 font-semibold">Available Commands:</div>
            {terminalCommandsHelp.map(h => (
              <div key={h.cmd} className="grid grid-cols-12 gap-2 text-xs">
                <span className="col-span-3 text-emerald-400 font-bold">{h.cmd}</span>
                <span className="col-span-9 text-slate-300">{h.desc}</span>
              </div>
            ))}
          </div>
        )
      });
    } else if (cleanCmd === 'bio') {
      newHistory.push({
        type: 'output',
        text: developerInfo.bio
      });
    } else if (cleanCmd === 'skills') {
      newHistory.push({
        type: 'output',
        text: 'Core Stack: React, TypeScript, Node.js, Go, PostgreSQL, Docker, AWS, TailwindCSS'
      });
    } else if (cleanCmd === 'projects') {
      newHistory.push({
        type: 'output',
        text: (
          <div className="space-y-1 my-1">
            <div className="text-indigo-300 font-semibold">Featured Projects:</div>
            {projectsData.map(p => (
              <div key={p.id} className="text-xs text-slate-300">
                - <span className="text-white font-bold">{p.title}</span>: {p.tagline}
              </div>
            ))}
          </div>
        )
      });
    } else if (cleanCmd === 'contact') {
      newHistory.push({
        type: 'success',
        text: `Email: ${developerInfo.email} | GitHub: ${developerInfo.github}`
      });
    } else if (cleanCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else {
      newHistory.push({
        type: 'error',
        text: `Command not found: "${cleanCmd}". Type "help" for valid commands.`
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  return (
    <section id="terminal" className="py-24 bg-slate-900/50 border-t border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-3">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Interactive Shell</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white">Developer Terminal</h2>
          <p className="text-slate-400 text-sm mt-1">Interact with portfolio metadata via command line.</p>
        </div>

        {/* Terminal Window */}
        <div className="rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden font-mono text-sm">
          
          {/* Top Titlebar */}
          <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs text-slate-400 font-medium">alex@portfolio-macbook:~</span>
            </div>
            <span className="text-xs text-slate-500 hidden sm:inline">zsh</span>
          </div>

          {/* Terminal Body */}
          <div className="p-6 min-h-[320px] max-h-[450px] overflow-y-auto space-y-3 text-slate-200">
            {history.map((item, idx) => (
              <div key={idx} className={`leading-relaxed ${
                item.type === 'error' ? 'text-red-400' :
                item.type === 'success' ? 'text-emerald-400 font-medium' :
                item.type === 'input' ? 'text-indigo-300 font-semibold' : 'text-slate-300'
              }`}>
                {item.text}
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Command Prompt Input Bar */}
          <form onSubmit={onSubmit} className="bg-slate-900/90 border-t border-slate-800 px-4 py-3 flex items-center gap-3">
            <span className="text-emerald-400 font-bold select-none">alex@portfolio:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'help', 'projects', 'skills'..."
              className="flex-1 bg-transparent border-none outline-none text-white font-mono text-sm placeholder-slate-600"
            />
          </form>

        </div>

        {/* Quick Suggestion Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
          {['help', 'projects', 'skills', 'bio', 'contact', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:border-indigo-500/50 transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}