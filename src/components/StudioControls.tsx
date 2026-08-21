import React, { useState } from 'react';
import { 
  FrameConfig, 
  FrameType, 
  BackgroundType, 
  MacTitleBarStyle, 
  PhoneColor, 
  ShadowPreset, 
  AspectRatio,
  ImageDimensions
} from '../types';
import { GRADIENT_PRESETS, SAMPLE_SCREENSHOTS } from '../data/presets';
import { 
  Monitor, 
  Smartphone, 
  Globe, 
  Layers, 
  Sliders, 
  Palette, 
  Layout, 
  Upload, 
  Check, 
  Square, 
  Maximize2,
  Tv,
  Film
} from 'lucide-react';

interface StudioControlsProps {
  config: FrameConfig;
  onChange: (newConfig: FrameConfig) => void;
  onImageChange: (url: string) => void;
  currentImageId?: string;
  detectedDimensions?: ImageDimensions;
}

type TabType = 'frame' | 'backdrop' | 'lighting' | 'canvas' | 'media';

export const StudioControls: React.FC<StudioControlsProps> = ({
  config,
  onChange,
  onImageChange,
  currentImageId,
  detectedDimensions,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('canvas');

  const updateConfig = (partial: Partial<FrameConfig>) => {
    onChange({ ...config, ...partial });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onImageChange(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full bg-[#0f1117] border border-[#1e222d] rounded-xl p-4 flex flex-col space-y-4 text-neutral-200 shadow-sm">
      {/* Studio Tool Tabs */}
      <div className="flex items-center space-x-1 p-0.5 rounded-lg bg-[#141720] border border-[#1e222d]">
        <button
          onClick={() => setActiveTab('canvas')}
          className={`flex-1 flex items-center justify-center space-x-1.5 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
            activeTab === 'canvas'
              ? 'bg-[#222733] text-white'
              : 'text-neutral-400 hover:text-neutral-200'
          }`}
        >
          <Layout className="w-3.5 h-3.5" />
          <span>Canvas & Story</span>
        </button>

        <button
          onClick={() => setActiveTab('frame')}
          className={`flex-1 flex items-center justify-center space-x-1.5 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
            activeTab === 'frame'
              ? 'bg-[#222733] text-white'
              : 'text-neutral-400 hover:text-neutral-200'
          }`}
        >
          <Monitor className="w-3.5 h-3.5" />
          <span>Frame</span>
        </button>

        <button
          onClick={() => setActiveTab('backdrop')}
          className={`flex-1 flex items-center justify-center space-x-1.5 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
            activeTab === 'backdrop'
              ? 'bg-[#222733] text-white'
              : 'text-neutral-400 hover:text-neutral-200'
          }`}
        >
          <Palette className="w-3.5 h-3.5" />
          <span>Backdrop</span>
        </button>

        <button
          onClick={() => setActiveTab('lighting')}
          className={`flex-1 flex items-center justify-center space-x-1.5 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
            activeTab === 'lighting'
              ? 'bg-[#222733] text-white'
              : 'text-neutral-400 hover:text-neutral-200'
          }`}
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>Shadows</span>
        </button>

        <button
          onClick={() => setActiveTab('media')}
          className={`flex-1 flex items-center justify-center space-x-1.5 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
            activeTab === 'media'
              ? 'bg-[#222733] text-white'
              : 'text-neutral-400 hover:text-neutral-200'
          }`}
        >
          <Upload className="w-3.5 h-3.5" />
          <span>Source</span>
        </button>
      </div>

      {/* TAB 1: CANVAS & STORY RATIO */}
      {activeTab === 'canvas' && (
        <div className="space-y-4">
          {/* Quick Story & Auto Presets Banner */}
          <div className="p-3 rounded-lg bg-[#141720] border border-[#222634] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5 text-neutral-300" />
                <span>Story & Social Presets</span>
              </span>
              {detectedDimensions && (
                <span className="text-[10px] font-mono text-neutral-400">
                  Detected: {detectedDimensions.width}×{detectedDimensions.height} ({detectedDimensions.orientation})
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              {/* 16:9 Story Option */}
              <button
                onClick={() => updateConfig({ aspectRatio: '16:9' })}
                className={`p-2 rounded-lg border text-left flex items-center space-x-2.5 transition-all cursor-pointer ${
                  config.aspectRatio === '16:9'
                    ? 'border-neutral-300 bg-[#1e232e] text-white shadow-xs'
                    : 'border-[#222634] bg-[#0f1117] hover:border-[#2f3547] text-neutral-300'
                }`}
              >
                <div className="w-7 h-4 rounded-xs border border-white/20 flex items-center justify-center bg-white/5 shrink-0">
                  <Tv className="w-3 h-3 text-neutral-300" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs font-semibold block leading-tight">16:9 Story</span>
                  <span className="text-[10px] font-mono text-neutral-400 block truncate">Slide / Landscape</span>
                </div>
              </button>

              {/* 9:16 Vertical Story Option */}
              <button
                onClick={() => updateConfig({ aspectRatio: '9:16' })}
                className={`p-2 rounded-lg border text-left flex items-center space-x-2.5 transition-all cursor-pointer ${
                  config.aspectRatio === '9:16'
                    ? 'border-neutral-300 bg-[#1e232e] text-white shadow-xs'
                    : 'border-[#222634] bg-[#0f1117] hover:border-[#2f3547] text-neutral-300'
                }`}
              >
                <div className="w-4 h-6 rounded-xs border border-white/20 flex items-center justify-center bg-white/5 shrink-0">
                  <Smartphone className="w-3 h-3 text-neutral-300" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs font-semibold block leading-tight">9:16 Story</span>
                  <span className="text-[10px] font-mono text-neutral-400 block truncate">Reels / Shorts</span>
                </div>
              </button>
            </div>
          </div>

          {/* All Aspect Ratio Options */}
          <div>
            <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
              All Aspect Ratios & Dimensions
            </label>
            <div className="grid grid-cols-4 gap-1.5">
              {[
                { id: 'auto', label: 'Auto Fit', sub: 'Adaptive' },
                { id: '16:9', label: '16:9', sub: 'Story / Deck' },
                { id: '9:16', label: '9:16', sub: 'Mobile Story' },
                { id: '1:1', label: '1:1', sub: 'Square' },
                { id: '4:5', label: '4:5', sub: 'Social' },
                { id: '4:3', label: '4:3', sub: 'Dribbble' },
                { id: '3:2', label: '3:2', sub: 'Standard' },
                { id: '2:1', label: '2:1', sub: 'Banner' },
              ].map(r => (
                <button
                  key={r.id}
                  onClick={() => updateConfig({ aspectRatio: r.id as AspectRatio })}
                  className={`py-1.5 px-1.5 rounded-lg text-xs font-mono border text-center transition-all cursor-pointer ${
                    config.aspectRatio === r.id
                      ? 'border-neutral-300 bg-[#1e232e] text-white'
                      : 'border-[#222634] text-neutral-400 hover:text-neutral-200 bg-[#12141a]'
                  }`}
                >
                  <span className="block font-semibold">{r.label}</span>
                  <span className="block text-[9px] text-neutral-500 truncate">{r.sub}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Screenshot Dimension Auto-Adjustment Fit Mode */}
          <div className="p-3 rounded-lg bg-[#12141a] border border-[#1e222d] space-y-2.5">
            <span className="text-[11px] font-mono uppercase text-neutral-400 block">
              Frame Dimension Scaling Mode
            </span>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { id: 'natural', label: 'Natural Size', desc: 'Zero crop / 1:1' },
                { id: 'contain', label: 'Fit Inside', desc: 'Preserve bounds' },
                { id: 'cover', label: 'Fill Shell', desc: 'Edge bleed' },
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => updateConfig({ frameFitMode: f.id as any })}
                  className={`py-1.5 px-1.5 rounded text-xs font-mono border text-center transition-all cursor-pointer ${
                    config.frameFitMode === f.id
                      ? 'border-neutral-300 bg-[#1e232e] text-white'
                      : 'border-[#222634] text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  <span className="block font-medium">{f.label}</span>
                  <span className="block text-[9px] text-neutral-500">{f.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Frame Scale Slider */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[11px] font-mono text-neutral-400">Frame Scale inside Canvas</span>
              <span className="text-xs font-mono text-neutral-200">{config.frameScale || 100}%</span>
            </div>
            <input
              type="range"
              min="50"
              max="100"
              value={config.frameScale || 100}
              onChange={(e) => updateConfig({ frameScale: Number(e.target.value) })}
              className="w-full accent-neutral-200 bg-[#1e222d] h-1.5 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Padding Slider */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[11px] font-mono text-neutral-400">Canvas Margin Padding</span>
              <span className="text-xs font-mono text-neutral-200">{config.padding}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={config.padding}
              onChange={(e) => updateConfig({ padding: Number(e.target.value) })}
              className="w-full accent-neutral-200 bg-[#1e222d] h-1.5 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Watermark branding */}
          <div className="pt-2 border-t border-[#1e222d] space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-neutral-300 font-mono text-[11px]">Studio Watermark Badge</span>
              <input
                type="checkbox"
                checked={config.showWatermark}
                onChange={(e) => updateConfig({ showWatermark: e.target.checked })}
                className="rounded border-neutral-700 bg-neutral-900 text-neutral-100"
              />
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: FRAME HARDWARE */}
      {activeTab === 'frame' && (
        <div className="space-y-4">
          <div>
            <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Hardware Shell (Auto-Conforms to Screenshot)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {/* macOS Window */}
              <button
                onClick={() => updateConfig({ frameType: 'mac-window' })}
                className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                  config.frameType === 'mac-window'
                    ? 'border-neutral-300 bg-[#1c202a] text-white'
                    : 'border-[#1e222d] bg-[#12141a] hover:border-[#2b303e] text-neutral-400'
                }`}
              >
                <div className="flex items-center space-x-1 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <span className="font-semibold text-xs text-white block">macOS Window</span>
                <span className="text-[10px] font-mono text-neutral-500 block">Traffic lights</span>
              </button>

              {/* Samsung Galaxy S27 Ultra */}
              <button
                onClick={() => updateConfig({ frameType: 'samsung-s27' })}
                className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                  config.frameType === 'samsung-s27'
                    ? 'border-neutral-300 bg-[#1c202a] text-white'
                    : 'border-[#1e222d] bg-[#12141a] hover:border-[#2b303e] text-neutral-400'
                }`}
              >
                <div className="w-3.5 h-4.5 rounded-[3px] border border-neutral-400 mb-1.5 flex justify-center pt-0.5">
                  <div className="w-0.5 h-0.5 rounded-full bg-neutral-400" />
                </div>
                <span className="font-semibold text-xs text-white block">Samsung S27 Ultra</span>
                <span className="text-[10px] font-mono text-neutral-500 block">1.1mm Bezel</span>
              </button>

              {/* iPhone 16 Pro */}
              <button
                onClick={() => updateConfig({ frameType: 'iphone-16' })}
                className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                  config.frameType === 'iphone-16'
                    ? 'border-neutral-300 bg-[#1c202a] text-white'
                    : 'border-[#1e222d] bg-[#12141a] hover:border-[#2b303e] text-neutral-400'
                }`}
              >
                <div className="w-3.5 h-4.5 rounded-[4px] border border-neutral-400 mb-1.5 flex justify-center pt-0.5">
                  <div className="w-1.5 h-0.5 rounded-full bg-neutral-400" />
                </div>
                <span className="font-semibold text-xs text-white block">iPhone 16 Pro</span>
                <span className="text-[10px] font-mono text-neutral-500 block">Dynamic Island</span>
              </button>

              {/* Safari Browser */}
              <button
                onClick={() => updateConfig({ frameType: 'browser-safari' })}
                className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                  config.frameType === 'browser-safari'
                    ? 'border-neutral-300 bg-[#1c202a] text-white'
                    : 'border-[#1e222d] bg-[#12141a] hover:border-[#2b303e] text-neutral-400'
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-neutral-400 mb-1.5" />
                <span className="font-semibold text-xs text-white block">Safari Browser</span>
                <span className="text-[10px] font-mono text-neutral-500 block">URL Omnibar</span>
              </button>

              {/* Glass Minimal */}
              <button
                onClick={() => updateConfig({ frameType: 'glass-minimal' })}
                className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                  config.frameType === 'glass-minimal'
                    ? 'border-neutral-300 bg-[#1c202a] text-white'
                    : 'border-[#1e222d] bg-[#12141a] hover:border-[#2b303e] text-neutral-400'
                }`}
              >
                <Square className="w-3.5 h-3.5 text-neutral-400 mb-1.5" />
                <span className="font-semibold text-xs text-white block">Glass Minimal</span>
                <span className="text-[10px] font-mono text-neutral-500 block">Rim glare</span>
              </button>

              {/* Borderless Raw */}
              <button
                onClick={() => updateConfig({ frameType: 'clean-shadow' })}
                className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                  config.frameType === 'clean-shadow'
                    ? 'border-neutral-300 bg-[#1c202a] text-white'
                    : 'border-[#1e222d] bg-[#12141a] hover:border-[#2b303e] text-neutral-400'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-neutral-400 mb-1.5" />
                <span className="font-semibold text-xs text-white block">Clean Borderless</span>
                <span className="text-[10px] font-mono text-neutral-500 block">Shadow only</span>
              </button>
            </div>
          </div>

          {/* Conditional Specs for macOS Frame */}
          {config.frameType === 'mac-window' && (
            <div className="p-3 rounded-lg bg-[#12141a] border border-[#1e222d] space-y-3">
              <span className="text-[11px] font-mono uppercase text-neutral-400 block">
                macOS Window Parameters
              </span>

              {/* Style selector */}
              <div className="grid grid-cols-4 gap-1.5">
                {[
                  { id: 'dark', label: 'Dark' },
                  { id: 'light', label: 'Light' },
                  { id: 'graphite', label: 'Graphite' },
                  { id: 'frosted', label: 'Frosted' },
                ].map(s => (
                  <button
                    key={s.id}
                    onClick={() => updateConfig({ macTitleBarStyle: s.id as any })}
                    className={`py-1 rounded text-xs font-mono border transition-all cursor-pointer ${
                      config.macTitleBarStyle === s.id
                        ? 'border-neutral-300 bg-[#1e232e] text-white'
                        : 'border-[#222634] text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              {/* Window Title Input */}
              <div className="space-y-1">
                <label className="text-[10px] font-mono text-neutral-400">Window Title</label>
                <input
                  type="text"
                  value={config.macTitle}
                  onChange={(e) => updateConfig({ macTitle: e.target.value })}
                  className="w-full px-2.5 py-1.5 rounded bg-[#090a0f] border border-[#222634] text-xs font-mono text-neutral-200 focus:outline-hidden focus:border-neutral-400"
                  placeholder="AppPreview.kt"
                />
              </div>

              {/* Toggle Controls */}
              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-neutral-400 font-mono text-[11px]">Show Traffic Lights</span>
                <input
                  type="checkbox"
                  checked={config.macShowControls}
                  onChange={(e) => updateConfig({ macShowControls: e.target.checked })}
                  className="rounded border-neutral-700 bg-neutral-900 text-neutral-100"
                />
              </div>
            </div>
          )}

          {/* Conditional Specs for S27 Ultra */}
          {config.frameType === 'samsung-s27' && (
            <div className="p-3 rounded-lg bg-[#12141a] border border-[#1e222d] space-y-3">
              <span className="text-[11px] font-mono uppercase text-neutral-400 block">
                Galaxy S27 Ultra Finish
              </span>
              <div className="grid grid-cols-4 gap-1.5">
                {[
                  { id: 'titanium-black', label: 'Black' },
                  { id: 'titanium-silver', label: 'Silver' },
                  { id: 'titanium-violet', label: 'Violet' },
                  { id: 'titanium-gold', label: 'Gold' },
                ].map(c => (
                  <button
                    key={c.id}
                    onClick={() => updateConfig({ phoneColor: c.id as any })}
                    className={`py-1 rounded text-xs font-mono border transition-all cursor-pointer ${
                      config.phoneColor === c.id
                        ? 'border-neutral-300 bg-[#1e232e] text-white'
                        : 'border-[#222634] text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-neutral-400 font-mono text-[11px]">Dynamic Status Bar (Clock & Battery)</span>
                <input
                  type="checkbox"
                  checked={config.phoneShowStatusBar}
                  onChange={(e) => updateConfig({ phoneShowStatusBar: e.target.checked })}
                  className="rounded border-neutral-700 bg-neutral-900 text-neutral-100"
                />
              </div>
            </div>
          )}

          {/* Corner Radius Slider */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[11px] font-mono text-neutral-400">Frame Corner Radius</span>
              <span className="text-xs font-mono text-neutral-200">{config.cornerRadius}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="40"
              value={config.cornerRadius}
              onChange={(e) => updateConfig({ cornerRadius: Number(e.target.value) })}
              className="w-full accent-neutral-200 bg-[#1e222d] h-1.5 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      )}

      {/* TAB 3: BACKDROP */}
      {activeTab === 'backdrop' && (
        <div className="space-y-4">
          <div className="flex items-center space-x-1 p-0.5 rounded bg-[#141720] border border-[#1e222d]">
            {[
              { id: 'gradient', label: 'Preset' },
              { id: 'solid', label: 'Solid' },
              { id: 'transparent', label: 'Alpha' },
            ].map(b => (
              <button
                key={b.id}
                onClick={() => updateConfig({ bgType: b.id as any })}
                className={`flex-1 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                  config.bgType === b.id ? 'bg-[#222733] text-white' : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>

          {/* Preset Swatches */}
          {config.bgType === 'gradient' && (
            <div className="grid grid-cols-3 gap-2">
              {GRADIENT_PRESETS.map((p) => {
                const isSelected = config.selectedGradientId === p.id;
                const bg = p.type === 'radial' 
                  ? `radial-gradient(circle, ${p.colors.join(', ')})`
                  : `linear-gradient(${p.angle ?? 135}deg, ${p.colors.join(', ')})`;
                return (
                  <button
                    key={p.id}
                    onClick={() => updateConfig({ selectedGradientId: p.id })}
                    className={`p-2 rounded-lg border text-left flex flex-col items-start transition-all cursor-pointer ${
                      isSelected
                        ? 'border-neutral-300 bg-[#1c202a]'
                        : 'border-[#1e222d] bg-[#12141a] hover:border-[#292f3e]'
                    }`}
                  >
                    <div className="w-full h-8 rounded mb-1.5 border border-white/10" style={{ background: bg }} />
                    <span className="text-[11px] font-medium text-neutral-200 truncate w-full">{p.name}</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Solid Color Picker */}
          {config.bgType === 'solid' && (
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  value={config.solidColor}
                  onChange={(e) => updateConfig({ solidColor: e.target.value })}
                  className="w-9 h-9 rounded border border-[#272b38] bg-transparent cursor-pointer"
                />
                <input
                  type="text"
                  value={config.solidColor}
                  onChange={(e) => updateConfig({ solidColor: e.target.value })}
                  className="px-2.5 py-1.5 rounded bg-[#090a0f] border border-[#222634] text-xs font-mono text-neutral-200 focus:outline-hidden"
                />
              </div>
              <div className="grid grid-cols-6 gap-1.5">
                {['#090a0f', '#12141a', '#1e293b', '#27272a', '#3f3f46', '#f8fafc'].map(c => (
                  <button
                    key={c}
                    onClick={() => updateConfig({ solidColor: c })}
                    className="w-full h-7 rounded border border-white/10 transition-transform active:scale-95 cursor-pointer"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 4: LIGHTING & SHADOWS */}
      {activeTab === 'lighting' && (
        <div className="space-y-4">
          <div>
            <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Elevation & Shadow Physics
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { id: 'soft', label: 'Soft Floor' },
                { id: 'floating', label: 'Floating 3D' },
                { id: 'diffuse', label: 'Diffuse Sky' },
                { id: 'elevated-3d', label: 'Multi-layer' },
                { id: 'none', label: 'Flat' },
              ].map(s => (
                <button
                  key={s.id}
                  onClick={() => updateConfig({ shadowPreset: s.id as any })}
                  className={`py-1.5 px-2 rounded text-xs font-mono border text-center transition-all cursor-pointer ${
                    config.shadowPreset === s.id
                      ? 'border-neutral-300 bg-[#1e232e] text-white'
                      : 'border-[#222634] text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Shadow Blur Slider */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[11px] font-mono text-neutral-400">Shadow Blur</span>
              <span className="text-xs font-mono text-neutral-200">{config.shadowBlur}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="80"
              value={config.shadowBlur}
              onChange={(e) => updateConfig({ shadowBlur: Number(e.target.value) })}
              className="w-full accent-neutral-200 bg-[#1e222d] h-1.5 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Shadow Opacity Slider */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[11px] font-mono text-neutral-400">Shadow Density</span>
              <span className="text-xs font-mono text-neutral-200">{config.shadowOpacity}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={config.shadowOpacity}
              onChange={(e) => updateConfig({ shadowOpacity: Number(e.target.value) })}
              className="w-full accent-neutral-200 bg-[#1e222d] h-1.5 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Frosted Acrylic GPU Blur */}
          <div className="pt-2 border-t border-[#1e222d] space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-neutral-300 font-mono text-[11px]">Specular Rim Glare</span>
              <input
                type="checkbox"
                checked={config.specularGlare}
                onChange={(e) => updateConfig({ specularGlare: e.target.checked })}
                className="rounded border-neutral-700 bg-neutral-900 text-neutral-100"
              />
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: SOURCE & UPLOAD */}
      {activeTab === 'media' && (
        <div className="space-y-4">
          <div>
            <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Import Screenshot
            </label>
            <label className="flex flex-col items-center justify-center p-4 border border-dashed border-[#292e3c] hover:border-neutral-400 rounded-lg bg-[#090a0f] cursor-pointer transition-colors text-center">
              <Upload className="w-5 h-5 text-neutral-400 mb-1" />
              <span className="text-xs font-medium text-neutral-200">Upload PNG, JPG, WebP</span>
              <span className="text-[10px] font-mono text-neutral-500 mt-0.5">Or paste directly with Ctrl+V / ⌘V</span>
              <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
            </label>
          </div>

          <div>
            <span className="text-[11px] font-mono uppercase text-neutral-400 block mb-2">
              Sample Dimension Library
            </span>
            <div className="grid grid-cols-1 gap-2">
              {SAMPLE_SCREENSHOTS.map((sample) => (
                <button
                  key={sample.id}
                  onClick={() => onImageChange(sample.url)}
                  className="p-2.5 rounded-lg border border-[#1e222d] bg-[#12141a] hover:border-neutral-500 text-left flex items-center justify-between text-xs transition-colors cursor-pointer"
                >
                  <div>
                    <span className="font-semibold text-white block">{sample.name}</span>
                    <span className="text-[10px] font-mono text-neutral-500">{sample.category} • {sample.aspectRatio}</span>
                  </div>
                  <Check className="w-3.5 h-3.5 text-neutral-500" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
