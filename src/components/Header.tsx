import React from 'react';
import { 
  Smartphone, 
  Code2, 
  Download, 
  Layers,
  Wrench,
  Sparkles,
  Github,
  Globe
} from 'lucide-react';
import { APP_RELEASES } from '../data/presets';

export type ActiveView = 'showcase' | 'studio' | 'code';

interface HeaderProps {
  activeView: ActiveView;
  onNavigate: (view: ActiveView) => void;
  onOpenDownloadModal: () => void;
  onOpenGitHubModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  onNavigate,
  onOpenDownloadModal,
  onOpenGitHubModal,
}) => {
  const latestRelease = APP_RELEASES[0];

  return (
    <header className="w-full bg-[#090a0f]/95 backdrop-blur-md border-b border-[#1c1f26] sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-3">
        {/* Left: Brand Identity */}
        <div 
          onClick={() => onNavigate('studio')}
          className="flex items-center space-x-3 cursor-pointer select-none"
        >
          <div className="w-8 h-8 rounded-lg bg-[#181a22] border border-[#272b36] flex items-center justify-center text-neutral-200">
            <Layers className="w-4 h-4 text-neutral-200" />
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-bold text-sm tracking-tight text-white">
              SnapFrame
            </span>
            <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-[#181a22] text-neutral-400 border border-[#272b36]">
              v1.4.2
            </span>
          </div>
        </div>

        {/* Center: Tactile Navigation Segmented Control */}
        <nav className="hidden md:flex items-center p-0.5 rounded-lg bg-[#12141a] border border-[#1e222d]">
          <button
            onClick={() => onNavigate('studio')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
              activeView === 'studio'
                ? 'bg-[#222733] text-white shadow-xs'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>Framer Studio</span>
          </button>

          <button
            onClick={() => onNavigate('showcase')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
              activeView === 'showcase'
                ? 'bg-[#222733] text-white shadow-xs'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Samsung S27 Ultra Spec</span>
          </button>

          <button
            onClick={() => onNavigate('code')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
              activeView === 'code'
                ? 'bg-[#222733] text-white shadow-xs'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Compose Architecture</span>
          </button>
        </nav>

        {/* Right: Technical Actions & Download */}
        <div className="flex items-center space-x-2">
          {/* GitHub Pages & APK Hosting Hub button */}
          <button
            onClick={onOpenGitHubModal}
            className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-md bg-[#13161f] hover:bg-[#1c202c] border border-[#242938] text-neutral-300 hover:text-white text-xs font-medium transition-all cursor-pointer"
            title="GitHub Pages & APK Hosting Hub"
          >
            <Github className="w-3.5 h-3.5 text-neutral-300" />
            <span className="hidden sm:inline">GitHub Pages & APK</span>
          </button>

          <button
            onClick={onOpenDownloadModal}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-md bg-white hover:bg-neutral-200 text-black text-xs font-semibold transition-all active:scale-[0.98] cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Get APK</span>
            <span className="text-[10px] font-mono opacity-75">{latestRelease.version}</span>
          </button>
        </div>
      </div>

      {/* Mobile Sub-Nav */}
      <div className="md:hidden flex items-center justify-around px-2 py-1.5 border-t border-[#1c1f26] bg-[#0c0e14] text-xs">
        <button
          onClick={() => onNavigate('studio')}
          className={`flex items-center space-x-1 px-2.5 py-1 rounded-md ${
            activeView === 'studio' ? 'text-white font-medium bg-[#1c202a]' : 'text-neutral-400'
          }`}
        >
          <Wrench className="w-3.5 h-3.5" />
          <span>Studio</span>
        </button>

        <button
          onClick={() => onNavigate('showcase')}
          className={`flex items-center space-x-1 px-2.5 py-1 rounded-md ${
            activeView === 'showcase' ? 'text-white font-medium bg-[#1c202a]' : 'text-neutral-400'
          }`}
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>S27 Spec</span>
        </button>

        <button
          onClick={() => onNavigate('code')}
          className={`flex items-center space-x-1 px-2.5 py-1 rounded-md ${
            activeView === 'code' ? 'text-white font-medium bg-[#1c202a]' : 'text-neutral-400'
          }`}
        >
          <Code2 className="w-3.5 h-3.5" />
          <span>Code</span>
        </button>

        <button
          onClick={onOpenGitHubModal}
          className="flex items-center space-x-1 px-2.5 py-1 rounded-md text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
        >
          <Github className="w-3.5 h-3.5" />
          <span>Deploy</span>
        </button>
      </div>
    </header>
  );
};
