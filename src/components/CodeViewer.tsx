import React, { useState } from 'react';
import { KOTLIN_CODE_SNIPPETS } from '../data/presets';
import { Copy, Check, FileCode, Smartphone, Terminal } from 'lucide-react';

export const CodeViewer: React.FC = () => {
  const [selectedSnippetId, setSelectedSnippetId] = useState<string>(KOTLIN_CODE_SNIPPETS[0].id);
  const [copied, setCopied] = useState<boolean>(false);

  const currentSnippet = KOTLIN_CODE_SNIPPETS.find(s => s.id === selectedSnippetId) || KOTLIN_CODE_SNIPPETS[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = currentSnippet.code.split('\n');

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-xl bg-[#0f1117] border border-[#1e222d]">
        <div>
          <div className="flex items-center space-x-2 text-[11px] font-mono text-neutral-400 mb-1">
            <Terminal className="w-3.5 h-3.5" />
            <span>Jetpack Compose • Clean Architecture Source</span>
          </div>
          <h2 className="text-xl font-bold text-white">
            Native Android Source Code
          </h2>
          <p className="text-xs text-neutral-400 mt-0.5 max-w-xl">
            Composable implementations with hardware RenderEffect GPU shaders, Material 3 theming, and Direct Quick Share intent handling.
          </p>
        </div>

        <button
          onClick={handleCopyCode}
          className="flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-[#181a22] hover:bg-[#20232e] text-neutral-200 border border-[#2a2f3d] text-xs font-medium transition-all active:scale-[0.98] shrink-0 cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Copied Source</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-neutral-400" />
              <span>Copy {currentSnippet.title}</span>
            </>
          )}
        </button>
      </div>

      {/* Code Browser Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* File List Navigation (4 cols) */}
        <div className="lg:col-span-4 space-y-2">
          <span className="text-[11px] font-mono uppercase text-neutral-500 block px-1">
            Composables & Modules
          </span>

          {KOTLIN_CODE_SNIPPETS.map((snippet) => {
            const isSelected = snippet.id === selectedSnippetId;
            return (
              <button
                key={snippet.id}
                onClick={() => setSelectedSnippetId(snippet.id)}
                className={`w-full p-3 rounded-lg border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'border-neutral-300 bg-[#191d26] text-white'
                    : 'border-[#1e222d] bg-[#101218] hover:border-[#2b303e] text-neutral-400'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <FileCode className={`w-3.5 h-3.5 ${isSelected ? 'text-neutral-200' : 'text-neutral-500'}`} />
                  <span className="text-xs font-semibold font-mono text-neutral-200">{snippet.title}</span>
                </div>
                <p className="text-[11px] text-neutral-400 mt-1 line-clamp-2 leading-relaxed">
                  {snippet.description}
                </p>
                <span className="text-[10px] font-mono text-neutral-500 mt-2 block truncate">
                  {snippet.filename}
                </span>
              </button>
            );
          })}
        </div>

        {/* Code Viewport (8 cols) */}
        <div className="lg:col-span-8 rounded-xl bg-[#08090d] border border-[#1e222d] overflow-hidden shadow-sm">
          {/* Top IDE Tab Bar */}
          <div className="px-4 py-2.5 bg-[#0f1117] border-b border-[#1e222d] flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3a3f4d] inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#3a3f4d] inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#3a3f4d] inline-block" />
              <span className="text-xs font-mono text-neutral-300 font-medium ml-2">
                {currentSnippet.filename}
              </span>
            </div>

            <span className="text-[10px] font-mono text-neutral-400 px-2 py-0.5 rounded bg-[#171922] border border-[#262a36]">
              Kotlin 2.0.20
            </span>
          </div>

          {/* Code block with line numbers */}
          <div className="p-4 sm:p-5 overflow-x-auto max-h-[580px] font-mono text-xs text-neutral-200 leading-relaxed bg-[#08090d] custom-scrollbar flex">
            {/* Line numbers column */}
            <div className="select-none pr-4 text-right text-neutral-600 border-r border-[#1a1d26] mr-4 shrink-0 font-mono text-[11px]">
              {lines.map((_, i) => (
                <div key={i} className="leading-6">{i + 1}</div>
              ))}
            </div>

            {/* Code content */}
            <pre className="font-mono text-[11px] leading-6 flex-1 text-neutral-300 selection:bg-[#272d3d] selection:text-white">
              <code>{currentSnippet.code}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
