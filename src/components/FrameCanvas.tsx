import React, { useState, useEffect } from 'react';
import { FrameConfig, ImageDimensions } from '../types';
import { GRADIENT_PRESETS } from '../data/presets';
import { MacWindowFrame } from './MacWindowFrame';
import { DeviceS27Ultra } from './DeviceS27Ultra';
import { BrowserFrame, IPhoneFrame } from './OtherFrames';
import { Camera, Sparkles, Github, Layers } from 'lucide-react';

interface FrameCanvasProps {
  config: FrameConfig;
  imageUrl: string;
  forwardedRef?: React.RefObject<HTMLDivElement | null>;
  onDimensionsDetected?: (dimensions: ImageDimensions) => void;
}

export const FrameCanvas: React.FC<FrameCanvasProps> = ({
  config,
  imageUrl,
  forwardedRef,
  onDimensionsDetected,
}) => {
  const [dimensions, setDimensions] = useState<ImageDimensions>({
    width: 900,
    height: 540,
    aspectRatio: 900 / 540,
    orientation: 'landscape',
  });

  // Detect image dimensions when imageUrl changes
  useEffect(() => {
    if (!imageUrl) return;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.referrerPolicy = 'no-referrer';
    img.src = imageUrl;
    img.onload = () => {
      const w = img.naturalWidth || 800;
      const h = img.naturalHeight || 500;
      const ratio = w / h;
      let orientation: 'portrait' | 'landscape' | 'square' | 'ultrawide' = 'landscape';
      if (ratio > 2.0) orientation = 'ultrawide';
      else if (ratio > 1.15) orientation = 'landscape';
      else if (ratio < 0.85) orientation = 'portrait';
      else orientation = 'square';

      const detected: ImageDimensions = {
        width: w,
        height: h,
        aspectRatio: ratio,
        orientation,
      };
      setDimensions(detected);
      if (onDimensionsDetected) {
        onDimensionsDetected(detected);
      }
    };
  }, [imageUrl, onDimensionsDetected]);

  // Generate background CSS style
  const getBackgroundStyle = (): React.CSSProperties => {
    if (config.bgType === 'transparent') {
      return {
        backgroundImage: `
          linear-gradient(45deg, #1f2937 25%, transparent 25%), 
          linear-gradient(-45deg, #1f2937 25%, transparent 25%), 
          linear-gradient(45deg, transparent 75%, #1f2937 75%), 
          linear-gradient(-45deg, transparent 75%, #1f2937 75%)
        `,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
        backgroundColor: '#111827',
      };
    }

    if (config.bgType === 'solid') {
      return { backgroundColor: config.solidColor };
    }

    if (config.bgType === 'image-blur') {
      return {
        backgroundColor: '#090a0f',
      };
    }

    // Gradient Presets or Custom
    const activePreset = GRADIENT_PRESETS.find(p => p.id === config.selectedGradientId);

    if (config.bgType === 'mesh' || activePreset?.type === 'mesh') {
      const colors = activePreset?.colors || ['#334155', '#475569', '#1e293b', '#0f172a'];
      return {
        background: `
          radial-gradient(at 0% 0%, ${colors[0]} 0px, transparent 50%),
          radial-gradient(at 100% 0%, ${colors[1] || colors[0]} 0px, transparent 50%),
          radial-gradient(at 100% 100%, ${colors[2] || colors[0]} 0px, transparent 50%),
          radial-gradient(at 0% 100%, ${colors[3] || colors[1] || colors[0]} 0px, transparent 50%),
          radial-gradient(at 50% 50%, ${colors[0]} 0px, transparent 50%),
          #090a0f
        `,
      };
    }

    if (config.bgType === 'gradient') {
      if (activePreset) {
        if (activePreset.type === 'radial') {
          return {
            background: `radial-gradient(circle at 50% 50%, ${activePreset.colors.join(', ')})`,
          };
        }
        const angle = activePreset.angle ?? 135;
        return {
          background: `linear-gradient(${angle}deg, ${activePreset.colors.join(', ')})`,
        };
      }

      // Custom Gradient
      const { color1, color2, color3, angle, type } = config.customGradient;
      const colorList = color3 ? `${color1}, ${color2}, ${color3}` : `${color1}, ${color2}`;
      if (type === 'radial') {
        return { background: `radial-gradient(circle at center, ${colorList})` };
      }
      return { background: `linear-gradient(${angle}deg, ${colorList})` };
    }

    return { background: 'linear-gradient(180deg, #27272a, #18181b, #09090b)' };
  };

  // Generate drop shadow style for the inner framed window
  const getShadowStyle = (): React.CSSProperties => {
    const { shadowPreset, shadowBlur, shadowOpacity, shadowY } = config;
    const opacity = shadowOpacity / 100;

    switch (shadowPreset) {
      case 'none':
        return { boxShadow: 'none' };
      case 'soft':
        return {
          boxShadow: `0 ${shadowY}px ${shadowBlur}px rgba(0, 0, 0, ${opacity * 0.7}), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
        };
      case 'elevated-3d':
        return {
          boxShadow: `
            0 1px 2px rgba(0, 0, 0, ${opacity * 0.2}), 
            0 2px 4px rgba(0, 0, 0, ${opacity * 0.2}), 
            0 6px 12px rgba(0, 0, 0, ${opacity * 0.3}), 
            0 ${shadowY}px ${shadowBlur}px rgba(0, 0, 0, ${opacity})
          `,
        };
      case 'colored-glow':
        return {
          boxShadow: `
            0 ${shadowY}px ${shadowBlur}px rgba(99, 102, 241, ${opacity * 0.6}),
            0 0 35px rgba(168, 85, 247, ${opacity * 0.35})
          `,
        };
      case 'diffuse':
        return {
          boxShadow: `
            0 ${shadowY * 1.4}px ${shadowBlur * 1.6}px rgba(0, 0, 0, ${opacity * 0.85}),
            0 ${shadowY * 0.3}px ${shadowBlur * 0.4}px rgba(0, 0, 0, ${opacity * 0.4})
          `,
        };
      case 'floating':
      default:
        return {
          boxShadow: `0 ${shadowY}px ${shadowBlur}px rgba(0, 0, 0, ${opacity})`,
        };
    }
  };

  // Get Aspect Ratio class/style
  const getAspectRatioClass = () => {
    switch (config.aspectRatio) {
      case '16:9': return 'aspect-[16/9] w-full';
      case '9:16': return 'aspect-[9/16] max-h-[85vh] mx-auto';
      case '1:1': return 'aspect-square max-h-[85vh] mx-auto';
      case '4:5': return 'aspect-[4/5] max-h-[85vh] mx-auto';
      case '4:3': return 'aspect-[4/3] w-full';
      case '3:2': return 'aspect-[3/2] w-full';
      case '2:1': return 'aspect-[2/1] w-full';
      case 'auto':
      default:
        // Automatically adjusts container based on image dimensions
        return 'w-full h-auto min-h-[360px]';
    }
  };

  // Watermark Icon Helper
  const renderWatermarkIcon = () => {
    switch (config.watermarkIcon) {
      case 'camera': return <Camera className="w-3.5 h-3.5 text-neutral-300" />;
      case 'github': return <Github className="w-3.5 h-3.5 text-neutral-300" />;
      case 'brand': return <Layers className="w-3.5 h-3.5 text-neutral-300" />;
      case 'sparkles':
      default:
        return <Sparkles className="w-3.5 h-3.5 text-neutral-300" />;
    }
  };

  // Calculate inner image style based on frame and fit mode
  const getImageStyle = (): React.CSSProperties => {
    return {
      maxWidth: '100%',
      height: 'auto',
      display: 'block',
      userSelect: 'none',
      objectFit: config.frameFitMode === 'cover' ? 'cover' : 'contain',
    };
  };

  // Determine dynamic frame scaling & width limits
  const isPhoneFrame = config.frameType === 'samsung-s27' || config.frameType === 'iphone-16';
  const isPortraitScreenshot = dimensions.orientation === 'portrait';

  return (
    <div
      ref={forwardedRef}
      id="snapframe-export-canvas"
      className={`relative overflow-hidden flex items-center justify-center transition-all duration-150 ${getAspectRatioClass()}`}
      style={{
        ...getBackgroundStyle(),
        padding: `${config.padding}px`,
      }}
    >
      {/* Optional blurred screenshot backdrop */}
      {config.bgType === 'image-blur' && (
        <div
          className="absolute inset-0 scale-125 pointer-events-none filter blur-2xl opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      )}

      {/* Grain / Noise Texture Overlay */}
      {config.grainOverlay && (
        <div
          className="absolute inset-0 pointer-events-none opacity-15 mix-blend-overlay z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      )}

      {/* Frame Container — Scales and adjusts automatically */}
      <div
        className="relative z-20 flex items-center justify-center transition-all duration-200"
        style={{
          ...getShadowStyle(),
          width: isPhoneFrame && !isPortraitScreenshot 
            ? 'min(100%, 640px)' 
            : isPhoneFrame 
            ? 'min(100%, 380px)' 
            : '100%',
          maxWidth: isPhoneFrame && isPortraitScreenshot ? '380px' : '100%',
          transform: config.frameScale && config.frameScale < 100 
            ? `scale(${config.frameScale / 100})` 
            : undefined,
          transformOrigin: 'center center',
        }}
      >
        {/* 1. macOS Window Frame */}
        {config.frameType === 'mac-window' && (
          <MacWindowFrame
            title={config.macTitle}
            subtitle={config.macSubtitle}
            titleBarStyle={config.macTitleBarStyle}
            showControls={config.macShowControls}
            showUrlBar={config.macShowUrlBar}
            urlText={config.macUrlText}
            cornerRadius={config.cornerRadius}
            specularGlare={config.specularGlare}
            glassBlur={config.glassBlur}
            glassBlurAmount={config.glassBlurAmount}
            aspectRatio={dimensions.aspectRatio}
          >
            <img
              src={imageUrl}
              alt="Framed Screenshot"
              className="w-full h-auto block select-none max-h-[75vh]"
              style={getImageStyle()}
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
            />
          </MacWindowFrame>
        )}

        {/* 2. Samsung Galaxy S27 Ultra Titanium */}
        {config.frameType === 'samsung-s27' && (
          <DeviceS27Ultra
            color={config.phoneColor}
            showStatusBar={config.phoneShowStatusBar}
            time={config.phoneTime}
            battery={config.phoneBattery}
            aspectRatio={dimensions.aspectRatio}
            className="w-full"
          >
            <img
              src={imageUrl}
              alt="Framed Samsung S27 Screenshot"
              className="w-full h-auto block select-none max-h-[75vh]"
              style={getImageStyle()}
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
            />
          </DeviceS27Ultra>
        )}

        {/* 3. iPhone 16 Pro Dynamic Island */}
        {config.frameType === 'iphone-16' && (
          <IPhoneFrame aspectRatio={dimensions.aspectRatio}>
            <img
              src={imageUrl}
              alt="Framed iPhone Screenshot"
              className="w-full h-auto block select-none max-h-[75vh]"
              style={getImageStyle()}
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
            />
          </IPhoneFrame>
        )}

        {/* 4. Safari Browser */}
        {config.frameType === 'browser-safari' && (
          <BrowserFrame
            title={config.macTitle}
            urlText={config.macUrlText}
            isArc={false}
            cornerRadius={config.cornerRadius}
            specularGlare={config.specularGlare}
            aspectRatio={dimensions.aspectRatio}
          >
            <img
              src={imageUrl}
              alt="Framed Safari Browser Screenshot"
              className="w-full h-auto block select-none max-h-[75vh]"
              style={getImageStyle()}
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
            />
          </BrowserFrame>
        )}

        {/* 5. Arc Browser */}
        {config.frameType === 'browser-arc' && (
          <BrowserFrame
            title={config.macTitle}
            urlText={config.macUrlText}
            isArc={true}
            cornerRadius={config.cornerRadius}
            specularGlare={config.specularGlare}
            aspectRatio={dimensions.aspectRatio}
          >
            <img
              src={imageUrl}
              alt="Framed Arc Browser Screenshot"
              className="w-full h-auto block select-none max-h-[75vh]"
              style={getImageStyle()}
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
            />
          </BrowserFrame>
        )}

        {/* 6. Glass Minimal */}
        {config.frameType === 'glass-minimal' && (
          <div
            className="relative overflow-hidden p-1.5 transition-all w-full flex items-center justify-center"
            style={{
              borderRadius: `${config.cornerRadius}px`,
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: config.glassBlur ? `blur(${config.glassBlurAmount}px)` : undefined,
              WebkitBackdropFilter: config.glassBlur ? `blur(${config.glassBlurAmount}px)` : undefined,
              border: '1px solid rgba(255, 255, 255, 0.15)',
            }}
          >
            <img
              src={imageUrl}
              alt="Framed Glass Screenshot"
              className="w-full h-auto block select-none max-h-[75vh]"
              style={{
                ...getImageStyle(),
                borderRadius: `${Math.max(0, config.cornerRadius - 4)}px`,
              }}
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
            />
          </div>
        )}

        {/* 7. Clean Shadow */}
        {config.frameType === 'clean-shadow' && (
          <div
            className="overflow-hidden w-full flex items-center justify-center"
            style={{
              borderRadius: `${config.cornerRadius}px`,
            }}
          >
            <img
              src={imageUrl}
              alt="Framed Clean Screenshot"
              className="w-full h-auto block select-none max-h-[75vh]"
              style={getImageStyle()}
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
            />
          </div>
        )}
      </div>

      {/* Watermark Badge */}
      {config.showWatermark && (
        <div
          id="snapframe-watermark-pill"
          className="absolute bottom-3.5 right-4 z-30 flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#090a0f]/80 backdrop-blur-md border border-neutral-800 text-neutral-300 text-[11px] font-mono shadow-md pointer-events-none select-none"
        >
          {renderWatermarkIcon()}
          <span>{config.watermarkText}</span>
        </div>
      )}
    </div>
  );
};
