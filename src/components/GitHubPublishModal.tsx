import React, { useState } from 'react';
import { APP_RELEASES } from '../data/presets';
import { 
  X, 
  Github, 
  Globe, 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  Terminal, 
  Sparkles, 
  FileCode, 
  CheckCircle2, 
  ShieldCheck, 
  Layers,
  ArrowRight,
  RefreshCw,
  FolderGit2
} from 'lucide-react';

interface GitHubPublishModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubPublishModal: React.FC<GitHubPublishModalProps> = ({ isOpen, onClose }) => {
  const [githubUser, setGithubUser] = useState<string>('gianrufin');
  const [githubRepo, setGithubRepo] = useState<string>('snapframe');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'pages' | 'apk-releases' | 'cli'>('overview');

  const release = APP_RELEASES[0];
  const pagesUrl = `https://${githubUser || 'username'}.github.io/${githubRepo || 'repository'}/`;
  const githubRepoUrl = `https://github.com/${githubUser || 'username'}/${githubRepo || 'repository'}`;
  const githubReleaseApkUrl = `https://github.com/${githubUser || 'username'}/${githubRepo || 'repository'}/releases/download/${release.version}/SnapFrame-${release.version}-arm64-v8a.apk`;
  const githubRawApkUrl = `https://raw.githubusercontent.com/${githubUser || 'username'}/${githubRepo || 'repository'}/main/public/releases/SnapFrame-${release.version}-arm64-v8a.apk`;

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-2xl bg-[#0d0f15] border border-[#1e222d] rounded-2xl p-5 sm:p-6 shadow-2xl text-neutral-100 space-y-5 max-h-[90vh] overflow-y-auto"
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
        <div className="flex items-start space-x-3 pr-8">
          <div className="w-10 h-10 rounded-xl bg-[#181b26] border border-[#272b3c] flex items-center justify-center text-white shrink-0">
            <Github className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-base font-bold text-white">GitHub Pages & APK Hosting Hub</h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                CI/CD Ready
              </span>
            </div>
            <p className="text-xs text-neutral-400 mt-0.5">
              Publish this web landing page to GitHub Pages and host the Android APK via GitHub Releases & repository files.
            </p>
          </div>
        </div>

        {/* Repository Configurator Bar */}
        <div className="p-3 rounded-xl bg-[#12141c] border border-[#1e222d] space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
              <FolderGit2 className="w-3.5 h-3.5 text-neutral-300" />
              <span>Target GitHub Repository</span>
            </span>
            <span className="text-[10px] font-mono text-neutral-500">Live link generator</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <label className="text-[10px] font-mono text-neutral-400 block mb-1">GitHub Username / Org</label>
              <div className="flex items-center rounded-lg bg-[#090a0f] border border-[#222634] px-2.5 py-1.5 focus-within:border-neutral-400">
                <span className="text-xs font-mono text-neutral-500 mr-1">github.com/</span>
                <input
                  type="text"
                  value={githubUser}
                  onChange={(e) => setGithubUser(e.target.value)}
                  className="bg-transparent text-xs font-mono text-white focus:outline-hidden w-full"
                  placeholder="gianrufin"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] font-mono text-neutral-400 block mb-1">Repository Name</label>
              <div className="flex items-center rounded-lg bg-[#090a0f] border border-[#222634] px-2.5 py-1.5 focus-within:border-neutral-400">
                <span className="text-xs font-mono text-neutral-500 mr-1">/</span>
                <input
                  type="text"
                  value={githubRepo}
                  onChange={(e) => setGithubRepo(e.target.value)}
                  className="bg-transparent text-xs font-mono text-white focus:outline-hidden w-full"
                  placeholder="snapframe"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center space-x-1 p-0.5 rounded-lg bg-[#141720] border border-[#1e222d] text-xs">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
              activeTab === 'overview' ? 'bg-[#222733] text-white shadow-2xs' : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Live URLs
          </button>
          <button
            onClick={() => setActiveTab('pages')}
            className={`flex-1 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
              activeTab === 'pages' ? 'bg-[#222733] text-white shadow-2xs' : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            GitHub Pages
          </button>
          <button
            onClick={() => setActiveTab('apk-releases')}
            className={`flex-1 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
              activeTab === 'apk-releases' ? 'bg-[#222733] text-white shadow-2xs' : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            APK Hosting
          </button>
          <button
            onClick={() => setActiveTab('cli')}
            className={`flex-1 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
              activeTab === 'cli' ? 'bg-[#222733] text-white shadow-2xs' : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Git Commands
          </button>
        </div>

        {/* TAB 1: LIVE URLS OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-3.5">
            {/* GitHub Pages URL Block */}
            <div className="p-3.5 rounded-xl bg-[#090a0f] border border-[#1e222d] space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-white">Live GitHub Pages URL</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                  Landing Page
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-[#12141c] border border-[#222634] font-mono text-xs text-neutral-200">
                <span className="truncate mr-2">{pagesUrl}</span>
                <div className="flex items-center space-x-1.5 shrink-0">
                  <button
                    onClick={() => handleCopy(pagesUrl, 'pages')}
                    className="p-1 rounded hover:bg-[#1f2330] text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy URL"
                  >
                    {copiedKey === 'pages' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href={pagesUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 rounded hover:bg-[#1f2330] text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    title="Open in new tab"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* GitHub Releases APK URL Block */}
            <div className="p-3.5 rounded-xl bg-[#090a0f] border border-[#1e222d] space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Download className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-semibold text-white">GitHub Releases APK Download URL</span>
                </div>
                <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">
                  {release.version} Binary
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-[#12141c] border border-[#222634] font-mono text-xs text-neutral-200">
                <span className="truncate mr-2">{githubReleaseApkUrl}</span>
                <div className="flex items-center space-x-1.5 shrink-0">
                  <button
                    onClick={() => handleCopy(githubReleaseApkUrl, 'releaseApk')}
                    className="p-1 rounded hover:bg-[#1f2330] text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy URL"
                  >
                    {copiedKey === 'releaseApk' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href={githubReleaseApkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 rounded hover:bg-[#1f2330] text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    title="Direct Download"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct GitHub Files Raw APK URL */}
            <div className="p-3.5 rounded-xl bg-[#090a0f] border border-[#1e222d] space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <FileCode className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-semibold text-white">Direct GitHub Files Raw APK Asset</span>
                </div>
                <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-1.5 py-0.5 rounded border border-purple-500/20">
                  Raw CDN
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-[#12141c] border border-[#222634] font-mono text-xs text-neutral-200">
                <span className="truncate mr-2">{githubRawApkUrl}</span>
                <button
                  onClick={() => handleCopy(githubRawApkUrl, 'rawApk')}
                  className="p-1 rounded hover:bg-[#1f2330] text-neutral-400 hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Copy Raw URL"
                >
                  {copiedKey === 'rawApk' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: GITHUB PAGES DEPLOYMENT GUIDE */}
        {activeTab === 'pages' && (
          <div className="space-y-3.5 text-xs text-neutral-300">
            <div className="p-3.5 rounded-xl bg-[#090a0f] border border-[#1e222d] space-y-3">
              <h4 className="font-semibold text-white text-sm flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>How GitHub Pages Deployment is Configured</span>
              </h4>
              <p className="text-neutral-400 leading-relaxed">
                The repository is configured with automated GitHub Actions deployment. Whenever you push changes to your <code className="text-white bg-[#1a1d26] px-1 py-0.5 rounded font-mono">main</code> branch, GitHub will automatically build the Vite React application and publish the static bundle to GitHub Pages.
              </p>

              <div className="space-y-2 pt-1 font-mono text-[11px]">
                <div className="flex items-start space-x-2.5 p-2 rounded bg-[#12151e] border border-[#1e222d]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-sans text-xs font-semibold">1. Relative Assets Configuration</strong>
                    <span className="text-neutral-400">Vite is configured with <code className="text-neutral-200">base: './'</code> so all assets resolve regardless of subdirectory.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5 p-2 rounded bg-[#12151e] border border-[#1e222d]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-sans text-xs font-semibold">2. GitHub Actions Workflow</strong>
                    <span className="text-neutral-400">Created <code className="text-neutral-200">.github/workflows/deploy-pages.yml</code> with official Actions v4 for automatic publishing.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5 p-2 rounded bg-[#12151e] border border-[#1e222d]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-sans text-xs font-semibold">3. Enable in GitHub Settings</strong>
                    <span className="text-neutral-400">In your repo on GitHub: Go to <strong>Settings &rarr; Pages &rarr; Build and deployment &rarr; Source: GitHub Actions</strong>.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: APK HOSTING INSTRUCTIONS */}
        {activeTab === 'apk-releases' && (
          <div className="space-y-3.5 text-xs text-neutral-300">
            <div className="p-3.5 rounded-xl bg-[#090a0f] border border-[#1e222d] space-y-3">
              <h4 className="font-semibold text-white text-sm flex items-center gap-1.5">
                <Download className="w-4 h-4 text-blue-400" />
                <span>Hosting Android APK Files on GitHub</span>
              </h4>
              <p className="text-neutral-400 leading-relaxed">
                There are two premier methods to host the APK file on GitHub so users can download it directly:
              </p>

              <div className="grid grid-cols-1 gap-3 pt-1">
                {/* Method A: GitHub Releases */}
                <div className="p-3 rounded-lg bg-[#12141c] border border-[#1e222d] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">Method A: GitHub Releases (Recommended)</span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">High Speed & Unlimited CDN</span>
                  </div>
                  <p className="text-neutral-400 text-[11px] leading-relaxed">
                    1. Go to <code className="text-neutral-200">{githubRepoUrl}/releases/new</code><br />
                    2. Set Tag to <strong>{release.version}</strong><br />
                    3. Attach <code className="text-neutral-200">SnapFrame-{release.version}-arm64-v8a.apk</code><br />
                    4. Click <strong>Publish release</strong>.
                  </p>
                </div>

                {/* Method B: In-Repository Public File */}
                <div className="p-3 rounded-lg bg-[#12141c] border border-[#1e222d] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">Method B: Repository Files Asset</span>
                    <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-1.5 py-0.5 rounded">Zero-Config Static</span>
                  </div>
                  <p className="text-neutral-400 text-[11px] leading-relaxed">
                    The file is stored directly in <code className="text-neutral-200">public/releases/SnapFrame-{release.version}-arm64-v8a.apk</code> inside this codebase. When pushed, GitHub Pages and Raw GitHub will serve it directly!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: CLI GIT COMMANDS */}
        {activeTab === 'cli' && (
          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase text-neutral-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-neutral-300" />
                <span>1-Click Terminal Setup Commands</span>
              </span>
              <button
                onClick={() => handleCopy(
                  `git init\ngit add .\ngit commit -m "Deploy SnapFrame landing page and APK distribution"\ngit branch -M main\ngit remote add origin https://github.com/${githubUser}/${githubRepo}.git\ngit push -u origin main`,
                  'allGit'
                )}
                className="flex items-center space-x-1 px-2 py-1 rounded bg-[#181a24] hover:bg-[#20232e] text-neutral-300 text-[11px] font-mono transition-colors cursor-pointer"
              >
                {copiedKey === 'allGit' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedKey === 'allGit' ? 'Copied' : 'Copy All Commands'}</span>
              </button>
            </div>

            <div className="p-3.5 rounded-xl bg-[#090a0f] border border-[#1e222d] font-mono text-[11px] text-neutral-300 space-y-1.5 overflow-x-auto leading-relaxed">
              <div className="text-neutral-500"># 1. Initialize git & commit files</div>
              <div>git init</div>
              <div>git add .</div>
              <div>git commit -m "Deploy SnapFrame landing page and APK distribution"</div>
              <div className="text-neutral-500 pt-1"># 2. Link your GitHub repository</div>
              <div>git branch -M main</div>
              <div>git remote add origin https://github.com/{githubUser}/{githubRepo}.git</div>
              <div className="text-neutral-500 pt-1"># 3. Push to GitHub (Triggers GitHub Pages workflow)</div>
              <div>git push -u origin main</div>
              <div className="text-neutral-500 pt-1"># 4. Tag release for automated APK release upload</div>
              <div>git tag {release.version}</div>
              <div>git push origin {release.version}</div>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="pt-3 border-t border-[#1a1d26] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2 text-neutral-400 text-[11px] font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Workflow verified for GitHub Pages & Releases</span>
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <a
              href={githubRepoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center space-x-1.5 px-3 py-2 rounded-lg bg-[#181a24] hover:bg-[#20232e] border border-[#272b38] text-neutral-200 text-xs font-medium transition-colors cursor-pointer"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Open GitHub Repo</span>
            </a>

            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-white hover:bg-neutral-200 text-black text-xs font-semibold transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
