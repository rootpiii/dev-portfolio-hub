import { Code2, Heart, Github } from "lucide-react";
import { developerInfo } from '../data/portfolioData';


function BrandIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}
const Twitter = BrandIcon;
const Linkedin = BrandIcon;

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
              <Code2 className="w-4 h-4" />
            </div>
            <span className="font-bold text-white tracking-tight">
              {developerInfo.name}
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-500 text-center">
            &copy; {new Date().getFullYear()} {developerInfo.name}. Built with React, TypeScript & Tailwind CSS.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4 text-slate-400">
            <a href={developerInfo.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href={developerInfo.twitter} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href={developerInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}