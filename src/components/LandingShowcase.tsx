import React, { useState } from 'react';
import { DeviceS27Ultra } from './DeviceS27Ultra';
import { SAMPLE_SCREENSHOTS } from '../data/presets';
import { APP_RELEASES } from '../data/presets';
import { 
  Download, 
  Smartphone, 
  Laptop, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Code2, 
  Sliders,
  Cpu,
  Monitor,
  CheckCircle2,
  Terminal,
  Share2,
  Maximize2,
  Github,
  Globe,
  ExternalLink
} from 'lucide-react';

interface LandingShowcaseProps {
  onOpenStudio: () => void;
  onOpenDownloadModal: () => void;
  onOpenCodeViewer: () => void;
  onOpenGitHubModal: () => void;
}

export const LandingShowcase: React.FC<LandingShowcaseProps> = ({
  onOpenStudio,
  onOpenDownloadModal,
  onOpenCodeViewer,
  onOpenGitHubModal,
}) => {
  const latestRelease = APP_RELEASES[0];
  const [heroColorIndex, setHeroColorIndex] = useState<number>(0);
  const [phoneColor, setPhoneColor] = useState<'titanium-black' | 'titanium-violet' | 'titanium-silver' | 'titanium-gold'>('titanium-black');

  const heroGradients = [
    { name: 'Studio Graphite', bg: 'linear-gradient(180deg, #27272a, #18181b, #09090b)' },
    { name: 'Neutral Slate', bg: 'linear-gradient(145deg, #334155, #1e293b, #0f172a)' },
    { name: 'Linear Indigo', bg: 'linear-gradient(135deg, #4338ca, #312e81, #1e1b4b)' },
    { name: 'Architect Chalk', bg: 'linear-gradient(180deg, #f8fafc, #e2e8f0, #cbd5e1)' },
  ];

  return (
    <div className="w-full text-neutral-100 space-y-16 pb-20">
      {/* HERO SECTION — Clean CAD / Engineering Teardown */}
      <section className="pt-8 sm:pt-12 pb-8 px-4 sm:px-6 max-w-7xl mx-auto border-b border-[#1c1f26]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Technical Overview */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-md bg-[#141720] border border-[#232734] text-[11px] font-mono text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
              <span>Android 15 (API 35) Native Composables</span>
              <span className="text-neutral-500">•</span>
              <span className="text-neutral-400">{latestRelease.version}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Hardware-accurate screenshot framing for Android and macOS.
            </h1>

            <p className="text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
              SnapFrame wraps raw application captures with millimeter-accurate Samsung Galaxy S27 Ultra titanium bezels, authentic macOS traffic light window chrome, and hardware-accelerated <code className="text-neutral-200 bg-[#171922] px-1 py-0.5 rounded text-xs">RenderEffect</code> GPU blurs.
            </p>

            {/* Tactical CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenStudio}
                className="flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-white hover:bg-neutral-200 text-black font-semibold text-xs transition-all active:scale-[0.98] cursor-pointer"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Launch Web Framer Studio</span>
              </button>

              <button
                onClick={onOpenDownloadModal}
                className="flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-[#181a22] hover:bg-[#20232e] text-neutral-200 border border-[#2a2f3d] text-xs font-medium transition-all active:scale-[0.98] cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-neutral-400" />
                <span>Download APK ({latestRelease.size})</span>
              </button>

              <button
                onClick={onOpenGitHubModal}
                className="flex items-center space-x-2 px-3.5 py-2.5 rounded-lg bg-[#12141c] hover:bg-[#1a1d28] text-neutral-300 hover:text-white border border-[#242838] text-xs font-medium transition-colors cursor-pointer"
              >
                <Github className="w-3.5 h-3.5 text-emerald-400" />
                <span>GitHub Pages & APK Hub</span>
              </button>

              <button
                onClick={onOpenCodeViewer}
                className="flex items-center space-x-2 px-3.5 py-2.5 rounded-lg bg-transparent hover:bg-[#151720] text-neutral-400 hover:text-neutral-200 border border-[#212430] text-xs font-mono transition-colors cursor-pointer"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Kotlin Source</span>
              </button>
            </div>

            {/* Hardware Specification Grid */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-[#11131a] border border-[#1d212b]">
                <span className="text-[10px] font-mono uppercase text-neutral-500 block">Bezel Width</span>
                <span className="text-sm font-semibold text-neutral-200 font-mono mt-0.5 block">1.1 mm uniform</span>
              </div>
              <div className="p-3 rounded-lg bg-[#11131a] border border-[#1d212b]">
                <span className="text-[10px] font-mono uppercase text-neutral-500 block">Display Geometry</span>
                <span className="text-sm font-semibold text-neutral-200 font-mono mt-0.5 block">6.9" QHD+ OLED</span>
              </div>
              <div className="p-3 rounded-lg bg-[#11131a] border border-[#1d212b]">
                <span className="text-[10px] font-mono uppercase text-neutral-500 block">Blur Pipeline</span>
                <span className="text-sm font-semibold text-neutral-200 font-mono mt-0.5 block">RenderEffect GPU</span>
              </div>
              <div className="p-3 rounded-lg bg-[#11131a] border border-[#1d212b]">
                <span className="text-[10px] font-mono uppercase text-neutral-500 block">Export Standard</span>
                <span className="text-sm font-semibold text-neutral-200 font-mono mt-0.5 block">4K UHD ARGB8888</span>
              </div>
            </div>
          </div>

          {/* Right Column: CAD Device Frame Stage */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            {/* Canvas Color / Stage Selector */}
            <div className="w-full flex items-center justify-between px-3 py-2 bg-[#12141c] border border-[#1f232f] rounded-t-xl text-xs">
              <span className="text-[11px] font-mono text-neutral-400">Backdrop Stage</span>
              <div className="flex items-center space-x-1.5">
                {heroGradients.map((g, idx) => (
                  <button
                    key={g.name}
                    onClick={() => setHeroColorIndex(idx)}
                    className={`w-4 h-4 rounded-full border transition-all ${
                      heroColorIndex === idx
                        ? 'border-white scale-110 ring-1 ring-white/40'
                        : 'border-neutral-700 opacity-60 hover:opacity-100'
                    }`}
                    style={{ background: g.bg }}
                    title={g.name}
                  />
                ))}
              </div>
            </div>

            {/* Staging Canvas */}
            <div 
              className="w-full p-6 sm:p-8 rounded-b-xl border-x border-b border-[#1f232f] flex items-center justify-center transition-all duration-300 relative overflow-hidden"
              style={{ background: heroGradients[heroColorIndex].bg }}
            >
              <div className="absolute inset-0 canvas-grid-pattern pointer-events-none opacity-40" />

              {/* Samsung Galaxy S27 Ultra Mockup */}
              <DeviceS27Ultra
                color={phoneColor}
                showStatusBar={true}
                time="09:41"
                battery={98}
                interactive={true}
                onScreenClick={onOpenStudio}
                className="w-full max-w-[280px] shadow-2xl transition-transform hover:scale-[1.01]"
              >
                <img
                  src={SAMPLE_SCREENSHOTS[1].url}
                  alt="SnapFrame on Samsung Galaxy S27 Ultra"
                  className="w-full h-auto block select-none object-cover"
                />
              </DeviceS27Ultra>
            </div>

            {/* Titanium Finish Selector */}
            <div className="w-full flex items-center justify-between px-3 py-2.5 bg-[#0f1118] border-x border-b border-[#1f232f] rounded-b-xl text-xs text-neutral-400">
              <span className="text-[11px] font-mono">Chassis Finish:</span>
              <div className="flex items-center space-x-2">
                {[
                  { id: 'titanium-black', color: 'bg-zinc-800', label: 'Black' },
                  { id: 'titanium-silver', color: 'bg-slate-300', label: 'Silver' },
                  { id: 'titanium-violet', color: 'bg-purple-900', label: 'Violet' },
                  { id: 'titanium-gold', color: 'bg-amber-600', label: 'Gold' },
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setPhoneColor(item.id as any)}
                    className={`flex items-center space-x-1.5 px-2 py-0.5 rounded text-[10px] font-mono border transition-all cursor-pointer ${
                      phoneColor === item.id 
                        ? 'border-neutral-400 bg-[#1c202b] text-neutral-200' 
                        : 'border-[#212532] text-neutral-500 hover:text-neutral-300'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${item.color}`} />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE ARCHITECTURAL MODULES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <span className="text-xs font-mono uppercase text-neutral-500 tracking-wider block">
            System Architecture
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Engineered for Android 15 and macOS workflows
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Architecture Card 1 */}
          <div className="p-5 rounded-xl bg-[#11131a] border border-[#1e222d] space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#181b24] border border-[#272b38] flex items-center justify-center text-neutral-300">
              <Laptop className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white font-mono">MacWindowDecorator.kt</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Composes authentic macOS traffic light buttons (close, minimize, expand), dark/light frosted title bars, and specular rim glare on any code snippet or screenshot.
            </p>
            <div className="pt-2 border-t border-[#1a1d26] text-[11px] font-mono text-neutral-500">
              Target: Desktop / Web screenshots
            </div>
          </div>

          {/* Architecture Card 2 */}
          <div className="p-5 rounded-xl bg-[#11131a] border border-[#1e222d] space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#181b24] border border-[#272b38] flex items-center justify-center text-neutral-300">
              <Smartphone className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white font-mono">DeviceMockupS27.kt</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Wraps mobile captures inside a 1.1mm uniform titanium bezel with centered Infinity-O punch hole camera (3.5mm aperture) and customizable status bar items.
            </p>
            <div className="pt-2 border-t border-[#1a1d26] text-[11px] font-mono text-neutral-500">
              Target: Samsung S27 Ultra & Android
            </div>
          </div>

          {/* Architecture Card 3 */}
          <div className="p-5 rounded-xl bg-[#11131a] border border-[#1e222d] space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#181b24] border border-[#272b38] flex items-center justify-center text-neutral-300">
              <Cpu className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white font-mono">RenderEffect GPU Pipeline</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Leverages Android 12+ hardware shader acceleration. Frosted backdrop blurs, multi-layer diffuse drop shadows, and high-frequency noise textures without frame drops.
            </p>
            <div className="pt-2 border-t border-[#1a1d26] text-[11px] font-mono text-neutral-500">
              Hardware: Skia / Vulkan backend
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SHARE WORKFLOW SPEC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0e1017] border border-[#1c202b] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 px-2 py-0.5 rounded bg-[#171a24] border border-[#252a3a] text-[10px] font-mono text-neutral-300">
              <Share2 className="w-3 h-3 text-neutral-400" />
              <span>ACTION_SEND Intent Receiver</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Two-tap Android system integration
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              SnapFrame registers as a system Quick Share receiver and Quick Settings tile on Android. Intercept screenshots straight from the native share sheet without opening a full gallery app.
            </p>

            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-start space-x-3">
                <span className="w-5 h-5 rounded bg-[#1c202a] border border-[#292f3e] text-neutral-300 flex items-center justify-center text-[10px] font-mono shrink-0 mt-0.5">
                  1
                </span>
                <span className="text-neutral-300">Take a screenshot on your device (Power + Vol Down or Palm Swipe).</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-5 h-5 rounded bg-[#1c202a] border border-[#292f3e] text-neutral-300 flex items-center justify-center text-[10px] font-mono shrink-0 mt-0.5">
                  2
                </span>
                <span className="text-neutral-300">Tap <strong>Share &rarr; SnapFrame</strong> from the floating screenshot preview chip.</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-5 h-5 rounded bg-[#1c202a] border border-[#292f3e] text-neutral-300 flex items-center justify-center text-[10px] font-mono shrink-0 mt-0.5">
                  3
                </span>
                <span className="text-neutral-300">Auto-applies preset frame and exports a 4K PNG back to clipboard or storage.</span>
              </div>
            </div>
          </div>

          {/* Code snippet showing Intent Manifest */}
          <div className="rounded-xl bg-[#07080c] border border-[#1a1d26] p-4 font-mono text-xs text-neutral-300 overflow-x-auto">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#191b24] text-[11px] text-neutral-500">
              <span>AndroidManifest.xml</span>
              <span>Intent Filter</span>
            </div>
            <pre className="leading-relaxed text-[11px] text-neutral-300">
              <code>{`<activity
    android:name=".receiver.QuickShareReceiverActivity"
    android:exported="true"
    android:theme="@style/Theme.SnapFrame.Transparent">
    <intent-filter>
        <action android:name="android.intent.action.SEND" />
        <category android:name="android.intent.category.DEFAULT" />
        <data android:mimeType="image/*" />
    </intent-filter>
</activity>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* GITHUB PAGES & APK DISTRIBUTION HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#090b10] border border-[#1e222d] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
              <Github className="w-3 h-3" />
              <span>GitHub Pages & Releases Automated</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Host the landing page & APK directly on GitHub
            </h3>
            <p className="text-xs text-neutral-400 max-w-xl leading-relaxed">
              Equipped with ready-to-deploy <code className="text-neutral-200">.github/workflows/deploy-pages.yml</code>, static relative asset paths, and GitHub Releases APK distribution pipelines.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenGitHubModal}
              className="flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-[#181a24] hover:bg-[#20232e] border border-[#2c3040] text-white text-xs font-semibold transition-all cursor-pointer"
            >
              <Github className="w-4 h-4 text-white" />
              <span>View GitHub Publish Guide</span>
            </button>

            <button
              onClick={onOpenDownloadModal}
              className="flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-white hover:bg-neutral-200 text-black text-xs font-semibold transition-all active:scale-[0.98] cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Get APK ({latestRelease.version})</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
