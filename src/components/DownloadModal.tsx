import React, { useState } from 'react';
import { APP_RELEASES } from '../data/presets';
import { 
  X, 
  Download, 
  Smartphone, 
  ShieldCheck, 
  Copy, 
  Check, 
  FileCode,
  Terminal,
  CheckCircle2,
  Github,
  Globe,
  ExternalLink
} from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  githubUser?: string;
  githubRepo?: string;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ 
  isOpen, 
  onClose,
  githubUser = 'gianrufin',
  githubRepo = 'snapframe'
}) => {
  const [copiedSha, setCopiedSha] = useState(false);
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [downloadSource, setDownloadSource] = useState<'bundled' | 'github-releases' | 'github-raw'>('github-releases');
  const release = APP_RELEASES[0];

  const githubReleaseApkUrl = `https://github.com/${githubUser}/${githubRepo}/releases/download/${release.version}/SnapFrame-${release.version}-arm64-v8a.apk`;
  const githubRawApkUrl = `https://raw.githubusercontent.com/${githubUser}/${githubRepo}/main/public/releases/SnapFrame-${release.version}-arm64-v8a.apk`;

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloadStarted(true);

    if (downloadSource === 'github-releases') {
      window.open(githubReleaseApkUrl, '_blank');
      setTimeout(() => setDownloadStarted(false), 2000);
      return;
    }

    if (downloadSource === 'github-raw') {
      window.open(githubRawApkUrl, '_blank');
      setTimeout(() => setDownloadStarted(false), 2000);
      return;
    }

    // Bundled fallback download
    const link = document.createElement('a');
    link.href = './releases/SnapFrame-v1.4.2-arm64-v8a.apk';
    link.download = `SnapFrame-${release.version}-arm64-v8a.apk`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloadStarted(false), 2000);
  };

  const handleCopySha = () => {
    navigator.clipboard.writeText(release.sha256);
    setCopiedSha(true);
    setTimeout(() => setCopiedSha(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-lg bg-[#0f1117] border border-[#1e222d] rounded-2xl p-6 shadow-2xl text-neutral-100 space-y-5 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-md bg-[#161822] hover:bg-[#20232e] text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-[#181a24] border border-[#272b38] flex items-center justify-center text-neutral-200">
            <Smartphone className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-base font-bold text-white">SnapFrame for Android</h3>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#171922] text-neutral-300 border border-[#272a38]">
                {release.version}
              </span>
            </div>
            <p className="text-xs text-neutral-400 mt-0.5">
              Production build for Samsung Galaxy S27 Ultra & modern Android devices
            </p>
          </div>
        </div>

        {/* Download Source Selection */}
        <div className="p-1 rounded-lg bg-[#141720] border border-[#1e222d] flex items-center text-xs">
          <button
            onClick={() => setDownloadSource('github-releases')}
            className={`flex-1 py-1.5 px-2 rounded-md font-mono text-[11px] font-medium transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
              downloadSource === 'github-releases' ? 'bg-[#222733] text-white shadow-2xs' : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub Release</span>
          </button>

          <button
            onClick={() => setDownloadSource('github-raw')}
            className={`flex-1 py-1.5 px-2 rounded-md font-mono text-[11px] font-medium transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
              downloadSource === 'github-raw' ? 'bg-[#222733] text-white shadow-2xs' : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>GitHub Raw File</span>
          </button>

          <button
            onClick={() => setDownloadSource('bundled')}
            className={`flex-1 py-1.5 px-2 rounded-md font-mono text-[11px] font-medium transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
              downloadSource === 'bundled' ? 'bg-[#222733] text-white shadow-2xs' : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Static Host</span>
          </button>
        </div>

        {/* Binary Distribution Card */}
        <div className="p-4 rounded-xl bg-[#090a0f] border border-[#1e222d] space-y-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-mono font-semibold text-neutral-200 block">
                SnapFrame-{release.version}-arm64-v8a.apk
              </span>
              <span className="text-[11px] font-mono text-neutral-400 block mt-0.5">
                {release.size} • {release.minSdk} • {release.targetSdk}
              </span>
            </div>

            <button
              onClick={handleDownload}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-white hover:bg-neutral-200 text-black font-semibold text-xs transition-all active:scale-[0.98] cursor-pointer shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloadStarted ? 'Downloading...' : 'Download APK'}</span>
            </button>
          </div>

          {/* Direct QR Code Transfer */}
          <div className="pt-3 border-t border-[#1a1d26] flex items-center space-x-3.5">
            <div className="w-14 h-14 rounded-lg bg-white p-1 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full text-black">
                <rect width="100" height="100" fill="white" />
                <rect x="10" y="10" width="30" height="30" fill="black" />
                <rect x="15" y="15" width="20" height="20" fill="white" />
                <rect x="20" y="20" width="10" height="10" fill="black" />
                
                <rect x="60" y="10" width="30" height="30" fill="black" />
                <rect x="65" y="15" width="20" height="20" fill="white" />
                <rect x="70" y="20" width="10" height="10" fill="black" />
                
                <rect x="10" y="60" width="30" height="30" fill="black" />
                <rect x="15" y="65" width="20" height="20" fill="white" />
                <rect x="20" y="70" width="10" height="10" fill="black" />

                <rect x="45" y="15" width="8" height="8" fill="black" />
                <rect x="45" y="30" width="8" height="18" fill="black" />
                <rect x="60" y="55" width="14" height="14" fill="black" />
                <rect x="80" y="60" width="10" height="25" fill="black" />
                <rect x="45" y="65" width="10" height="10" fill="black" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-semibold text-neutral-200 block">Camera QR Installer</span>
              <span className="text-[11px] text-neutral-400 block mt-0.5">
                Scan with your Galaxy or Android device camera to download directly from GitHub.
              </span>
            </div>
          </div>
        </div>

        {/* Release Highlights */}
        <div className="space-y-2">
          <span className="text-[11px] font-mono uppercase text-neutral-400 block">
            Changelog Highlights
          </span>
          <ul className="space-y-1 text-xs text-neutral-300">
            {release.highlights.map((h, i) => (
              <li key={i} className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* SHA-256 Checksum */}
        <div className="p-2.5 bg-[#090a0f] rounded-lg border border-[#1e222d] flex items-center justify-between text-xs">
          <div className="truncate mr-2">
            <span className="text-[10px] text-neutral-500 font-mono block uppercase">SHA-256 Checksum:</span>
            <span className="font-mono text-[11px] text-neutral-400 truncate block">{release.sha256}</span>
          </div>
          <button
            onClick={handleCopySha}
            className="p-1 rounded bg-[#181a24] hover:bg-[#20232e] text-neutral-300 transition-colors shrink-0 cursor-pointer"
            title="Copy SHA-256"
          >
            {copiedSha ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Security Info */}
        <div className="p-2.5 bg-[#12151e] border border-[#1e222d] rounded-lg flex items-start space-x-2 text-[11px] text-neutral-300">
          <ShieldCheck className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
          <span>
            If prompted on Android, enable <strong>Install unknown apps</strong> in system settings.
          </span>
        </div>
      </div>
    </div>
  );
};
