import React from 'react';
import { PhoneColor } from '../types';
import { Wifi, Signal, Battery } from 'lucide-react';

interface DeviceS27UltraProps {
  color?: PhoneColor;
  showStatusBar?: boolean;
  time?: string;
  battery?: number;
  interactive?: boolean;
  onScreenClick?: () => void;
  aspectRatio?: number; // Natural screenshot aspect ratio (width / height)
  children: React.ReactNode;
  className?: string;
}

export const DeviceS27Ultra: React.FC<DeviceS27UltraProps> = ({
  color = 'titanium-black',
  showStatusBar = true,
  time = '09:41',
  battery = 98,
  interactive = false,
  onScreenClick,
  aspectRatio,
  children,
  className = '',
}) => {
  // Titanium finish gradients
  const getFrameFinish = () => {
    switch (color) {
      case 'titanium-violet':
        return {
          rim: 'linear-gradient(135deg, #7c3aed 0%, #4c1d95 30%, #2e1065 70%, #6d28d9 100%)',
          innerBezel: '#0f0a1c',
          accent: '#a78bfa'
        };
      case 'titanium-silver':
        return {
          rim: 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 30%, #64748b 70%, #e2e8f0 100%)',
          innerBezel: '#0f172a',
          accent: '#94a3b8'
        };
      case 'titanium-gold':
        return {
          rim: 'linear-gradient(135deg, #fef08a 0%, #eab308 30%, #854d0e 70%, #facc15 100%)',
          innerBezel: '#1c1917',
          accent: '#fde047'
        };
      case 'titanium-black':
      default:
        return {
          rim: 'linear-gradient(135deg, #3f3f46 0%, #18181b 30%, #09090b 70%, #27272a 100%)',
          innerBezel: '#050505',
          accent: '#71717a'
        };
    }
  };

  const finish = getFrameFinish();

  // If screenshot aspect ratio is provided and is portrait, we calculate optimal container styling
  const isPortrait = aspectRatio ? aspectRatio < 1 : true;

  return (
    <div
      id="samsung-s27-ultra-mockup"
      className={`relative inline-flex flex-col select-none transition-all duration-200 ${className}`}
      style={{
        padding: '7px',
        background: finish.rim,
        borderRadius: '42px',
        boxShadow: `
          0 0 0 1px rgba(255, 255, 255, 0.15) inset,
          0 25px 50px -12px rgba(0, 0, 0, 0.7),
          0 10px 20px -5px rgba(0, 0, 0, 0.4)
        `,
        maxWidth: isPortrait ? '360px' : '620px',
        width: '100%',
      }}
    >
      {/* Side Titanium Hardware Buttons */}
      {/* Volume Up / Down */}
      <div 
        className="absolute -left-[3px] top-[130px] w-[3px] h-[65px] rounded-l-xs bg-neutral-600 shadow-xs" 
        title="Volume Rocker"
      />
      {/* Power / Bixby */}
      <div 
        className="absolute -right-[3px] top-[150px] w-[3px] h-[40px] rounded-r-xs bg-neutral-600 shadow-xs" 
        title="Power / Lock Key"
      />

      {/* Screen Inner Bezel (1.1mm uniform) */}
      <div
        className="relative overflow-hidden flex flex-col bg-black w-full"
        style={{
          borderRadius: '36px',
          border: `2px solid ${finish.innerBezel}`,
        }}
      >
        {/* Dynamic Status Bar with S27 Ultra Centered Infinity-O Camera */}
        {showStatusBar && (
          <div
            id="s27-status-bar"
            className="w-full h-7 px-5 flex items-center justify-between z-30 bg-neutral-950 text-white select-none shrink-0"
          >
            {/* Left: Clock */}
            <div className="flex items-center space-x-1 text-[11px] font-semibold tracking-tight text-white/90 min-w-[40px]">
              <span>{time}</span>
            </div>

            {/* Center: Samsung S27 Ultra Infinity-O Punch-Hole Camera (3.5mm aperture) */}
            <div className="relative flex items-center justify-center">
              <div 
                className="w-3.5 h-3.5 rounded-full bg-neutral-950 ring-1 ring-neutral-800 flex items-center justify-center shadow-inner"
              >
                {/* Camera lens specular reflection */}
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-950/90 border border-indigo-400/40 relative">
                  <div className="absolute top-0.5 right-0.5 w-0.5 h-0.5 rounded-full bg-white/80" />
                </div>
              </div>
            </div>

            {/* Right: Connectivity Icons */}
            <div className="flex items-center space-x-1.5 text-white/90 text-[11px] font-medium min-w-[40px] justify-end">
              <span className="text-[9px] font-mono font-bold text-neutral-300">5G</span>
              <Signal className="w-3 h-3 text-white/80" />
              <Wifi className="w-3 h-3 text-white/80" />
              <div className="flex items-center space-x-0.5">
                <span className="text-[10px]">{battery}%</span>
                <Battery className="w-3.5 h-3.5 text-white fill-white/80" />
              </div>
            </div>
          </div>
        )}

        {/* Screen Viewport Content — automatically adapts to image height */}
        <div 
          className={`relative w-full overflow-hidden flex flex-col items-center justify-center bg-black ${interactive ? 'cursor-pointer' : ''}`}
          onClick={interactive ? onScreenClick : undefined}
        >
          {children}
        </div>

        {/* S27 Ultra Gesture Navigation Bar indicator */}
        <div className="w-full flex justify-center py-1.5 bg-neutral-950 pointer-events-none shrink-0">
          <div className="w-24 h-1 rounded-full bg-neutral-400/70" />
        </div>
      </div>
    </div>
  );
};
