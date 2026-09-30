import React, { useState } from 'react';
import { Sliders, ChevronDown, ChevronUp, Layers, CheckCircle2, FileCode2 } from 'lucide-react';
import { KIT_PROFILES } from '../../data/evidenceData';

export default function KitProfileSection() {
  const [expandedKit, setExpandedKit] = useState('MARQUIS');

  return (
    <section id="kit-profiles" className="py-16 bg-[#0b0e14] border-b border-[#242c3d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a202c] border border-[#f59e0b]/40 rounded text-xs font-mono text-[#fbbf24] mb-3">
              <Sliders className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>MODULAR REAGENT CONFIGURATION ENGINE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f8fafc] tracking-tight">
              Kit Profile System
            </h2>
            <p className="mt-2 text-sm text-[#8b99ae] max-w-2xl font-mono">
              "New field-test kits can be added through JSON configuration without modifying core binary code."
            </p>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs text-[#10b981] flex items-center gap-2">
            <FileCode2 className="w-4 h-4 text-[#10b981]" />
            <span>JSON CONFIG DRIVEN</span>
          </div>
        </div>

        {/* Kit Profile Expandable Cards */}
        <div className="space-y-4 font-mono">
          {KIT_PROFILES.map((kit) => {
            const isExpanded = expandedKit === kit.id;
            return (
              <div
                key={kit.id}
                className={`border-2 rounded-lg transition-all ${
                  isExpanded
                    ? 'bg-[#10141e] border-[#f59e0b]/60 shadow-lg'
                    : 'bg-[#121620] border-[#242c3d] hover:border-[#3a465d]'
                }`}
              >
                {/* Accordion Bar */}
                <button
                  onClick={() => setExpandedKit(isExpanded ? null : kit.id)}
                  className="w-full p-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded bg-[#1a2230] border border-[#f59e0b]/40 flex items-center justify-center text-[#f59e0b] font-bold text-xs">
                      {kit.id.substring(0, 3)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-base font-bold text-[#f8fafc]">{kit.name}</span>
                        <span className="text-[10px] px-2 py-0.2 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded text-[#fbbf24]">
                          {kit.version}
                        </span>
                      </div>
                      <div className="text-xs text-[#7d8b9e]">{kit.targetSubstances}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline text-xs text-[#64748b]">
                      {isExpanded ? 'Hide Parameters' : 'Expand Parameters'}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-[#f59e0b]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#5b687a]" />
                    )}
                  </div>
                </button>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="p-5 border-t border-[#242c3d] bg-[#0b0e14] space-y-5 animate-fade-in">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                      <div>
                        <div className="text-[#8b99ae] mb-1">REAGENT FORMULATION:</div>
                        <div className="p-2.5 bg-[#141a26] border border-[#242c3d] rounded text-[#e2e8f0]">
                          {kit.reagentFormula}
                        </div>
                      </div>

                      <div>
                        <div className="text-[#8b99ae] mb-1">THRESHOLD CONFIGURATION:</div>
                        <div className="p-2.5 bg-[#141a26] border border-[#242c3d] rounded text-[#fbbf24]">
                          {kit.thresholdConfig}
                        </div>
                      </div>
                    </div>

                    {/* Reference Palette Color Swatches */}
                    <div>
                      <div className="text-xs text-[#8b99ae] mb-2">EXPECTED REACTION PALETTE &amp; CIELAB COORDINATES:</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {kit.expectedColors.map((color, idx) => (
                          <div key={idx} className="p-3 bg-[#141a26] border border-[#242c3d] rounded flex items-center gap-3">
                            <div
                              style={{ backgroundColor: color.hex }}
                              className="w-8 h-8 rounded border border-black/40 shrink-0"
                            />
                            <div className="overflow-hidden">
                              <div className="text-xs font-bold text-[#e2e8f0] truncate">{color.label}</div>
                              <div className="text-[10px] text-[#7d8b9e]">{color.lab}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Calibration Parameters Note */}
                    <div className="p-3 bg-[#131b26] border border-[#1e2838] rounded text-[11px] text-[#94a3b8] flex items-center justify-between">
                      <span>CALIBRATION PROTOCOL: {kit.parameters}</span>
                      <span className="text-[#10b981] font-bold">READY</span>
                    </div>

                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
