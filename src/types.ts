export type FrameType = 
  | 'mac-window' 
  | 'samsung-s27' 
  | 'iphone-16' 
  | 'browser-safari' 
  | 'browser-arc' 
  | 'glass-minimal' 
  | 'clean-shadow';

export type BackgroundType = 'gradient' | 'mesh' | 'solid' | 'image-blur' | 'transparent';

export type AspectRatio = 'auto' | '16:9' | '9:16' | '1:1' | '4:5' | '4:3' | '3:2' | '2:1';

export type ShadowPreset = 'none' | 'soft' | 'floating' | 'elevated-3d' | 'colored-glow' | 'diffuse';

export type MacTitleBarStyle = 'dark' | 'light' | 'graphite' | 'frosted' | 'acrylic-glass';

export type PhoneColor = 'titanium-black' | 'titanium-violet' | 'titanium-silver' | 'titanium-gold';

export interface ImageDimensions {
  width: number;
  height: number;
  aspectRatio: number;
  orientation: 'portrait' | 'landscape' | 'square' | 'ultrawide';
}

export interface GradientPreset {
  id: string;
  name: string;
  category: 'vibrant' | 'minimal' | 'dark' | 'mesh' | 'sunset' | 'cyber';
  colors: string[];
  angle?: number;
  type: 'linear' | 'radial' | 'mesh';
}

export interface FrameConfig {
  frameType: FrameType;
  // macOS window options
  macTitle: string;
  macSubtitle?: string;
  macTitleBarStyle: MacTitleBarStyle;
  macShowControls: boolean;
  macShowUrlBar: boolean;
  macUrlText: string;
  
  // Phone frame options
  phoneColor: PhoneColor;
  phoneShowStatusBar: boolean;
  phoneTime: string;
  phoneBattery: number;
  
  // Background options
  bgType: BackgroundType;
  selectedGradientId: string;
  customGradient: {
    color1: string;
    color2: string;
    color3?: string;
    angle: number;
    type: 'linear' | 'radial';
  };
  solidColor: string;
  
  // Canvas layout
  padding: number;
  aspectRatio: AspectRatio;
  cornerRadius: number;
  frameFitMode: 'natural' | 'contain' | 'cover';
  frameScale: number; // Scale inside canvas (50% to 100%)
  
  // Effects
  shadowPreset: ShadowPreset;
  shadowBlur: number;
  shadowOpacity: number;
  shadowY: number;
  glassBlur: boolean;
  glassBlurAmount: number;
  specularGlare: boolean;
  grainOverlay: boolean;
  
  // Watermark / Branding
  showWatermark: boolean;
  watermarkText: string;
  watermarkIcon: 'camera' | 'sparkles' | 'github' | 'brand';
  
  // Scale
  zoom: number;
}

export interface SampleScreenshot {
  id: string;
  name: string;
  category: string;
  url: string;
  aspectRatio: string;
}

export interface KotlinCodeSnippet {
  id: string;
  title: string;
  filename: string;
  description: string;
  language: string;
  code: string;
}

export interface AppRelease {
  version: string;
  tag: string;
  date: string;
  size: string;
  downloadUrl: string;
  sha256: string;
  isLatest: boolean;
  highlights: string[];
  minSdk: string;
  targetSdk: string;
}
