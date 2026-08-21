import React, { useState, useRef, useEffect } from 'react';
import { FrameConfig, ImageDimensions, AspectRatio } from '../types';
import { SAMPLE_SCREENSHOTS } from '../data/presets';
import { FrameCanvas } from './FrameCanvas';
import { StudioControls } from './StudioControls';
import { downloadFrameImage, copyFrameToClipboard } from '../utils/exportImage';
import { 
  Download, 
  Copy, 
  Check, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Smartphone,
  Laptop,
  Tv,
  Film
} from 'lucide-react';

interface FramerStudioProps {
  initialConfig?: Partial<FrameConfig>;
  onOpenDownloadModal?: () => void;
}

export const FramerStudio: React.FC<FramerStudioProps> = ({
  initialConfig,
}) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState<string>(SAMPLE_SCREENSHOTS[0].url);
  const [detectedDimensions, setDetectedDimensions] = useState<ImageDimensions>({
    width: 900,
    height: 540,
    aspectRatio: 900 / 540,
    orientation: 'landscape',
  });
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [exportDpr, setExportDpr] = useState<number>(2); // 2x HD Retina
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [isDraggingOver, setIsDraggingOver] = useState<boolean>(false);

  const [config, setConfig] = useState<FrameConfig>({
    frameType: 'mac-window',
    macTitle: 'SnapFrame • Jetpack Compose',
    macSubtitle: 'Clean Architecture',
    macTitleBarStyle: 'dark',
    macShowControls: true,
    macShowUrlBar: false,
    macUrlText: 'https://github.com/snapframe/snapframe-android',
    phoneColor: 'titanium-black',
    phoneShowStatusBar: true,
    phoneTime: '09:41',
    phoneBattery: 98,
    bgType: 'gradient',
    selectedGradientId: 'studio-graphite',
    customGradient: {
      color1: '#27272a',
      color2: '#18181b',
      color3: '#09090b',
      angle: 180,
      type: 'linear',
    },
    solidColor: '#0f1117',
    padding: 36,
    aspectRatio: 'auto',
    cornerRadius: 16,
    frameFitMode: 'natural',
    frameScale: 100,
    shadowPreset: 'floating',
    shadowBlur: 32,
    shadowOpacity: 50,
    shadowY: 18,
    glassBlur: true,
    glassBlurAmount: 16,
    specularGlare: true,
    grainOverlay: false,
    showWatermark: true,
    watermarkText: 'SnapFrame Studio',
    watermarkIcon: 'sparkles',
    zoom: 1,
    ...initialConfig,
  });

  // Global paste handler to paste screenshots directly from clipboard
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;

      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          const blob = items[i].getAsFile();
          if (blob) {
            const reader = new FileReader();
            reader.onload = (event) => {
              if (event.target?.result) {
                setCurrentImage(event.target.result as string);
              }
            };
            reader.readAsDataURL(blob);
          }
        }
      }
    };

    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, []);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = () => {
    setIsDraggingOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCurrentImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleExport = async () => {
    if (!canvasRef.current || isExporting) return;
    setIsExporting(true);
    try {
      await downloadFrameImage(canvasRef.current, `snapframe_${config.aspectRatio}_${config.frameType}_${Date.now()}.png`, exportDpr);
    } catch (err) {
      console.error('Export failed:', err);
    } finally {
      setIsExporting(false);
    }
  };

  const handleCopy = async () => {
    if (!canvasRef.current || isCopied) return;
    setIsCopied(true);
    try {
      const success = await copyFrameToClipboard(canvasRef.current, exportDpr);
      if (!success) {
        await handleExport();
      }
    } catch {
      await handleExport();
    } finally {
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handleAspectSelect = (ratio: AspectRatio) => {
    setConfig(prev => ({ ...prev, aspectRatio: ratio }));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-5 space-y-4">
      {/* Studio Top Control Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-2.5 rounded-xl bg-[#0f1117] border border-[#1e222d] shadow-sm">
        {/* Left: Quick Shell & Aspect Ratio Selectors */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Hardware Shell */}
          <div className="flex items-center space-x-1 p-0.5 rounded-lg bg-[#141720] border border-[#1e222d]">
            <button
              onClick={() => setConfig(prev => ({ ...prev, frameType: 'mac-window' }))}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                config.frameType === 'mac-window'
                  ? 'bg-[#222733] text-white'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
              <span>macOS</span>
            </button>

            <button
              onClick={() => setConfig(prev => ({ ...prev, frameType: 'samsung-s27' }))}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                config.frameType === 'samsung-s27'
                  ? 'bg-[#222733] text-white'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Galaxy S27 Ultra</span>
            </button>
          </div>

          {/* Quick Aspect Ratio Presets (Story 16:9, Story 9:16, Auto, 1:1) */}
          <div className="flex items-center space-x-1 p-0.5 rounded-lg bg-[#141720] border border-[#1e222d]">
            <button
              onClick={() => handleAspectSelect('auto')}
              className={`px-2.5 py-1.5 rounded-md text-xs font-mono font-medium transition-colors cursor-pointer ${
                config.aspectRatio === 'auto'
                  ? 'bg-[#222733] text-white shadow-2xs'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
              title="Automatically adjusts frame & canvas to screenshot dimension"
            >
              Auto Fit
            </button>

            <button
              onClick={() => handleAspectSelect('16:9')}
              className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-md text-xs font-mono font-medium transition-colors cursor-pointer ${
                config.aspectRatio === '16:9'
                  ? 'bg-[#222733] text-white shadow-2xs'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
              title="16:9 Landscape Story / Keynote Slide"
            >
              <Tv className="w-3 h-3 text-neutral-300" />
              <span>16:9 Story</span>
            </button>

            <button
              onClick={() => handleAspectSelect('9:16')}
              className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-md text-xs font-mono font-medium transition-colors cursor-pointer ${
                config.aspectRatio === '9:16'
                  ? 'bg-[#222733] text-white shadow-2xs'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
              title="9:16 Vertical Story / Reels / TikTok"
            >
              <Film className="w-3 h-3 text-neutral-300" />
              <span>9:16 Story</span>
            </button>

            <button
              onClick={() => handleAspectSelect('1:1')}
              className={`px-2.5 py-1.5 rounded-md text-xs font-mono font-medium transition-colors cursor-pointer ${
                config.aspectRatio === '1:1'
                  ? 'bg-[#222733] text-white shadow-2xs'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
              title="1:1 Square Post"
            >
              1:1
            </button>
          </div>
        </div>

        {/* Center: Stage Zoom & Quality Scaling */}
        <div className="flex items-center space-x-2">
          {/* Zoom controls */}
          <div className="flex items-center space-x-0.5 bg-[#141720] px-1.5 py-1 rounded-lg border border-[#1e222d]">
            <button
              onClick={() => setZoomLevel(z => Math.max(50, z - 10))}
              className="p-1 rounded text-neutral-400 hover:text-neutral-200 transition-colors cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] font-mono text-neutral-300 px-1 min-w-[38px] text-center">
              {zoomLevel}%
            </span>
            <button
              onClick={() => setZoomLevel(z => Math.min(150, z + 10))}
              className="p-1 rounded text-neutral-400 hover:text-neutral-200 transition-colors cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoomLevel(100)}
              className="p-1 rounded text-neutral-500 hover:text-neutral-300 transition-colors cursor-pointer"
              title="Reset Zoom"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>

          {/* Export Resolution DPR Selector */}
          <div className="flex items-center space-x-0.5 bg-[#141720] p-0.5 rounded-lg border border-[#1e222d] text-xs">
            {[
              { label: '1x SD', value: 1 },
              { label: '2x HD', value: 2 },
              { label: '3x 4K', value: 3 },
            ].map(item => (
              <button
                key={item.value}
                onClick={() => setExportDpr(item.value)}
                className={`px-2 py-1 rounded text-[10px] font-mono font-medium transition-colors cursor-pointer ${
                  exportDpr === item.value
                    ? 'bg-[#222733] text-white'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Copy & Export Actions */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handleCopy}
            disabled={isExporting}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#181a22] hover:bg-[#20232e] text-neutral-200 border border-[#2a2f3d] transition-all active:scale-[0.98] cursor-pointer"
          >
            {isCopied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-neutral-400" />
                <span>Copy</span>
              </>
            )}
          </button>

          <button
            onClick={handleExport}
            disabled={isExporting}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white hover:bg-neutral-200 text-black transition-all active:scale-[0.98] cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isExporting ? 'Exporting...' : 'Export PNG'}</span>
          </button>
        </div>
      </div>

      {/* Main Studio Workbench Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Canvas Display Viewport (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div 
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`w-full rounded-xl bg-[#090a0f] border ${
              isDraggingOver ? 'border-indigo-400 bg-[#0e1017]' : 'border-[#1e222d]'
            } p-4 sm:p-6 shadow-sm flex items-center justify-center min-h-[460px] overflow-hidden relative transition-colors`}
          >
            {/* Background CAD Canvas Grid Lines */}
            <div className="absolute inset-0 canvas-grid-pattern pointer-events-none opacity-60" />

            {/* Inner scaled container */}
            <div 
              className="w-full flex items-center justify-center transition-transform duration-200"
              style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'center center' }}
            >
              <FrameCanvas
                forwardedRef={canvasRef}
                config={config}
                imageUrl={currentImage}
                onDimensionsDetected={setDetectedDimensions}
              />
            </div>

            {/* Floating helper hint */}
            <div className="absolute bottom-3 left-3 text-[10px] font-mono text-neutral-400 bg-[#0f1117]/90 px-2 py-1 rounded-md border border-[#1e222d] pointer-events-none">
              Auto-adapting to {detectedDimensions.width}×{detectedDimensions.height}px ({detectedDimensions.orientation})
            </div>

            {/* Resolution indicator */}
            <div className="absolute bottom-3 right-3 text-[10px] font-mono text-neutral-500 bg-[#0f1117]/90 px-2 py-1 rounded-md border border-[#1e222d] pointer-events-none">
              Ratio: {config.aspectRatio.toUpperCase()} • {exportDpr}x Scale
            </div>
          </div>
        </div>

        {/* Studio Controls Inspector (5 cols) */}
        <div className="lg:col-span-5 w-full">
          <StudioControls
            config={config}
            onChange={setConfig}
            onImageChange={setCurrentImage}
            detectedDimensions={detectedDimensions}
          />
        </div>
      </div>
    </div>
  );
};
