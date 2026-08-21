import React from 'react';
import { MacTitleBarStyle } from '../types';
import { Lock, Shield, Minus, Square, X } from 'lucide-react';

interface MacWindowFrameProps {
  title?: string;
  subtitle?: string;
  titleBarStyle?: MacTitleBarStyle;
  showControls?: boolean;
  showUrlBar?: boolean;
  urlText?: string;
  cornerRadius?: number;
  specularGlare?: boolean;
  glassBlur?: boolean;
  glassBlurAmount?: number;
  aspectRatio?: number;
  children: React.ReactNode;
}

export const MacWindowFrame: React.FC<MacWindowFrameProps> = ({
  title = 'SnapFrame_Preview.kt',
  subtitle,
  titleBarStyle = 'dark',
  showControls = true,
  showUrlBar = false,
  urlText = 'https://snapframe.app/studio',
  cornerRadius = 16,
  specularGlare = true,
  glassBlur = true,
  glassBlurAmount = 16,
  children,
}) => {
  const getTitleBarConfig = () => {
    switch (titleBarStyle) {
      case 'light':
        return {
          bg: 'bg-neutral-100/95 text-neutral-800 border-b border-neutral-200',
          titleColor: 'text-neutral-800 font-medium',
          urlBg: 'bg-white text-neutral-700 border-neutral-200 shadow-2xs',
          containerBg: 'bg-white',
        };
      case 'graphite':
        return {
          bg: 'bg-[#181a20] text-neutral-200 border-b border-[#262a34]',
          titleColor: 'text-neutral-200 font-medium',
          urlBg: 'bg-[#101217] text-neutral-300 border-[#262a34]',
          containerBg: 'bg-[#0f1116]',
        };
      case 'frosted':
        return {
          bg: 'bg-white/80 backdrop-blur-xl text-neutral-900 border-b border-white/40',
          titleColor: 'text-neutral-900 font-semibold',
          urlBg: 'bg-white/85 text-neutral-800 border-white/60 shadow-2xs',
          containerBg: 'bg-white/40 backdrop-blur-md',
        };
      case 'acrylic-glass':
        return {
          bg: 'bg-neutral-950/70 backdrop-blur-2xl text-neutral-100 border-b border-white/10',
          titleColor: 'text-white font-medium',
          urlBg: 'bg-white/10 text-neutral-200 border-white/15',
          containerBg: 'bg-neutral-950/40 backdrop-blur-xl',
        };
      case 'dark':
      default:
        return {
          bg: 'bg-[#12141a] backdrop-blur-lg text-neutral-100 border-b border-[#1f232d]',
          titleColor: 'text-neutral-200 font-medium',
          urlBg: 'bg-[#090a0f] text-neutral-300 border-[#222634]',
          containerBg: 'bg-[#090a0f]',
        };
    }
  };

  const config = getTitleBarConfig();

  return (
    <div
      id="mac-window-container"
      className="relative overflow-hidden flex flex-col transition-all duration-200 w-full"
      style={{
        borderRadius: `${cornerRadius}px`,
        backdropFilter: glassBlur ? `blur(${glassBlurAmount}px)` : undefined,
        WebkitBackdropFilter: glassBlur ? `blur(${glassBlurAmount}px)` : undefined,
      }}
    >
      {/* Specular Rim Light & Glare Reflection Overlay */}
      {specularGlare && (
        <div 
          className="absolute inset-0 pointer-events-none z-30 rounded-[inherit]"
          style={{
            boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.25), inset 1px 0 0 0 rgba(255, 255, 255, 0.1)',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 40%)'
          }}
        />
      )}

      {/* macOS Title Bar */}
      <div
        id="mac-title-bar"
        className={`w-full px-4 py-2.5 flex items-center justify-between select-none relative z-20 ${config.bg}`}
      >
        {/* Left: Traffic Lights Window Controls */}
        <div className="flex items-center space-x-2 shrink-0">
          {showControls ? (
            <>
              <div 
                className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/40 shadow-xs flex items-center justify-center group cursor-default"
                title="Close"
              >
                <X className="w-2 h-2 text-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div 
                className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/40 shadow-xs flex items-center justify-center group cursor-default"
                title="Minimize"
              >
                <Minus className="w-2 h-2 text-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div 
                className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/40 shadow-xs flex items-center justify-center group cursor-default"
                title="Expand"
              >
                <Square className="w-1.5 h-1.5 text-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </>
          ) : (
            <div className="w-14" />
          )}
        </div>

        {/* Center: Window Title or URL bar */}
        {showUrlBar ? (
          <div className="flex-1 max-w-md mx-3">
            <div className={`flex items-center space-x-2 px-3 py-1 rounded-md text-xs border ${config.urlBg}`}>
              <Lock className="w-3 h-3 text-emerald-500 shrink-0" />
              <span className="truncate font-mono">{urlText}</span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center px-4 overflow-hidden">
            <span className={`text-xs truncate max-w-[280px] sm:max-w-md font-mono ${config.titleColor}`}>
              {title}
            </span>
            {subtitle && (
              <span className="text-[10px] text-neutral-400 truncate max-w-[240px]">
                {subtitle}
              </span>
            )}
          </div>
        )}

        {/* Right side spacer to keep title optically centered */}
        <div className="w-14 shrink-0 flex justify-end">
          {showUrlBar && (
            <Shield className="w-3.5 h-3.5 text-neutral-400" />
          )}
        </div>
      </div>

      {/* Window Body & Screenshot Content */}
      <div className={`relative w-full overflow-hidden flex items-center justify-center ${config.containerBg}`}>
        {children}
      </div>
    </div>
  );
};
