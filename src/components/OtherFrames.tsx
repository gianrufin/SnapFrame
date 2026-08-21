import React from 'react';
import { ArrowLeft, ArrowRight, RotateCw, Lock, Sparkles, LayoutGrid } from 'lucide-react';

interface BrowserFrameProps {
  title?: string;
  urlText?: string;
  isArc?: boolean;
  cornerRadius?: number;
  specularGlare?: boolean;
  aspectRatio?: number;
  children: React.ReactNode;
}

export const BrowserFrame: React.FC<BrowserFrameProps> = ({
  urlText = 'https://snapframe.app/studio',
  isArc = false,
  cornerRadius = 16,
  specularGlare = true,
  children,
}) => {
  return (
    <div
      className="relative overflow-hidden flex flex-col w-full bg-[#12141a] text-neutral-200 transition-all duration-200"
      style={{
        borderRadius: `${cornerRadius}px`,
        boxShadow: '0 0 0 1px rgba(255,255,255,0.08)',
      }}
    >
      {specularGlare && (
        <div
          className="absolute inset-0 pointer-events-none z-30 rounded-[inherit]"
          style={{
            boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.2)',
          }}
        />
      )}

      {/* Browser Bar */}
      <div className="w-full px-4 py-2.5 bg-[#12141a] border-b border-[#1e222d] flex items-center justify-between gap-3 text-xs">
        {/* Window controls */}
        <div className="flex items-center space-x-1.5 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center space-x-1 text-neutral-400 shrink-0">
          <ArrowLeft className="w-3.5 h-3.5" />
          <ArrowRight className="w-3.5 h-3.5 opacity-40" />
          <RotateCw className="w-3 h-3 ml-1" />
        </div>

        {/* URL Pill */}
        <div className="flex-1 max-w-md bg-[#090a0f] px-3 py-1 rounded-md border border-[#1e222d] flex items-center space-x-2">
          <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
          <span className="font-mono text-[11px] truncate text-neutral-300">{urlText}</span>
        </div>

        {/* Right side Arc/Safari controls */}
        <div className="flex items-center space-x-2 text-neutral-400 shrink-0">
          {isArc ? (
            <LayoutGrid className="w-3.5 h-3.5 text-indigo-400" />
          ) : (
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          )}
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-[#090a0f] flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

interface IPhoneFrameProps {
  aspectRatio?: number;
  children: React.ReactNode;
}

export const IPhoneFrame: React.FC<IPhoneFrameProps> = ({ aspectRatio, children }) => {
  const isPortrait = aspectRatio ? aspectRatio < 1 : true;

  return (
    <div
      className="relative inline-flex flex-col select-none transition-all duration-200"
      style={{
        padding: '6px',
        background: 'linear-gradient(135deg, #3f3f46 0%, #18181b 40%, #09090b 100%)',
        borderRadius: '44px',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.15)',
        maxWidth: isPortrait ? '340px' : '580px',
        width: '100%',
      }}
    >
      <div
        className="relative overflow-hidden flex flex-col bg-black w-full"
        style={{
          borderRadius: '38px',
          border: '2px solid #000',
        }}
      >
        {/* Dynamic Island */}
        <div className="w-full h-8 px-6 flex items-center justify-between z-30 bg-black text-white select-none shrink-0">
          <span className="text-[11px] font-semibold tracking-tight">09:41</span>
          
          {/* Dynamic Island pill */}
          <div className="w-24 h-5 rounded-full bg-neutral-950 ring-1 ring-neutral-800 flex items-center justify-between px-2">
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 ring-1 ring-neutral-700" />
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/80 animate-pulse" />
          </div>

          <div className="flex items-center space-x-1 text-[11px]">
            <span className="text-[9px] font-mono font-bold">5G</span>
            <span>100%</span>
          </div>
        </div>

        <div className="relative w-full overflow-hidden bg-black flex items-center justify-center">
          {children}
        </div>

        {/* Bottom bar */}
        <div className="w-full flex justify-center py-1.5 bg-black shrink-0">
          <div className="w-28 h-1 rounded-full bg-white/70" />
        </div>
      </div>
    </div>
  );
};
