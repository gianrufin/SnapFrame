/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header, ActiveView } from './components/Header';
import { LandingShowcase } from './components/LandingShowcase';
import { FramerStudio } from './components/FramerStudio';
import { CodeViewer } from './components/CodeViewer';
import { DownloadModal } from './components/DownloadModal';
import { GitHubPublishModal } from './components/GitHubPublishModal';
import { APP_RELEASES } from './data/presets';
import { Layers, Github } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('showcase');
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState<boolean>(false);
  const [isGitHubModalOpen, setIsGitHubModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#090a0f] text-neutral-100 flex flex-col selection:bg-[#272d3d] selection:text-white font-sans">
      {/* Top Navigation */}
      <Header
        activeView={activeView}
        onNavigate={setActiveView}
        onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
        onOpenGitHubModal={() => setIsGitHubModalOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {activeView === 'showcase' && (
          <LandingShowcase
            onOpenStudio={() => setActiveView('studio')}
            onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
            onOpenCodeViewer={() => setActiveView('code')}
            onOpenGitHubModal={() => setIsGitHubModalOpen(true)}
          />
        )}

        {activeView === 'studio' && (
          <FramerStudio
            onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
          />
        )}

        {activeView === 'code' && (
          <CodeViewer />
        )}
      </main>

      {/* Engineering Footer */}
      <footer className="border-t border-[#1c1f26] bg-[#07080c] py-8 px-4 sm:px-6 mt-12 text-xs text-neutral-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2.5">
            <div className="w-5 h-5 rounded bg-[#181a24] border border-[#272b38] flex items-center justify-center text-neutral-300">
              <Layers className="w-3 h-3" />
            </div>
            <span className="font-semibold text-neutral-300">
              SnapFrame • Android & macOS Screenshot Engine
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-neutral-400">
            <button 
              onClick={() => setActiveView('studio')} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Framer Studio
            </button>
            <button 
              onClick={() => setActiveView('showcase')} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Samsung S27 Spec
            </button>
            <button 
              onClick={() => setActiveView('code')} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Compose Architecture
            </button>
            <button 
              onClick={() => setIsGitHubModalOpen(true)} 
              className="hover:text-white flex items-center gap-1 transition-colors cursor-pointer text-emerald-400"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Deploy</span>
            </button>
            <button 
              onClick={() => setIsDownloadModalOpen(true)} 
              className="text-neutral-200 hover:text-white font-mono transition-colors cursor-pointer"
            >
              APK {APP_RELEASES[0].version}
            </button>
          </div>

          <div className="flex items-center space-x-1.5 font-mono text-[11px] text-neutral-500">
            <span>Kotlin 2.0.20 • Compose 1.7 • API 35</span>
          </div>
        </div>
      </footer>

      {/* Global APK Download Modal */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />

      {/* GitHub Pages & APK Hosting Hub Modal */}
      <GitHubPublishModal
        isOpen={isGitHubModalOpen}
        onClose={() => setIsGitHubModalOpen(false)}
      />
    </div>
  );
}
