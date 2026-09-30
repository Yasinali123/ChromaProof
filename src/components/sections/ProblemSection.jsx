import React from 'react';
import { AlertTriangle, CheckCircle2, Eye, Cpu, FileX2, FileCheck2, LightbulbOff, SlidersHorizontal } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section id="problem" className="py-16 bg-[#0b0e14] border-b border-[#242c3d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2a1717] border border-[#ef4444]/30 rounded text-xs font-mono text-[#fca5a5] mb-3">
            <AlertTriangle className="w-3.5 h-3.5 text-[#ef4444]" />
            <span>OPERATIONAL VULNERABILITY IN FIELD EVIDENCE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f8fafc] tracking-tight leading-tight">
            "When the reading depends on the eye, <br className="hidden sm:inline" />
            the evidence depends on the observer."
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#8b99ae] leading-relaxed">
            Conventional field drug tests rely on human visual interpretation of rapid color reactions. Under low light, street conditions, or cross-examination in court, subjective visual observations face severe evidential challenges.
          </p>
        </div>

        {/* Visual Side-by-Side Diagram Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* LEFT: Traditional Field Process */}
          <div className="bg-[#12151e] border-2 border-[#ef4444]/30 rounded-lg p-6 relative">
            <div className="flex items-center justify-between border-b border-[#2a1a1a] pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-[#2a1414] border border-[#ef4444]/40 flex items-center justify-center text-[#ef4444]">
                  <FileX2 className="w-3.5 h-3.5" />
                </div>
                <span className="font-mono text-sm font-bold text-[#fca5a5]">TRADITIONAL FIELD PROCESS</span>
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 bg-[#ef4444]/10 text-[#ef4444] rounded border border-[#ef4444]/20">
                HIGH EVIDENCE RISK
              </span>
            </div>

            {/* Step Sequence Diagram */}
            <div className="space-y-4 font-mono">
              <div className="p-3 bg-[#181114] border border-[#2a1a1a] rounded flex items-center gap-3">
                <span className="text-xs font-bold text-[#ef4444]">01</span>
                <div>
                  <div className="text-xs font-semibold text-[#e2e8f0]">TEST KIT REACTION</div>
                  <div className="text-[11px] text-[#7d8b9e]">Chemical spot test produces subtle hue shift</div>
                </div>
              </div>

              <div className="flex justify-center text-[#ef4444]/60">↓</div>

              <div className="p-3 bg-[#181114] border border-[#ef4444]/40 rounded flex items-center gap-3 shadow-inner">
                <Eye className="w-5 h-5 text-[#ef4444] shrink-0" />
                <div>
                  <div className="text-xs font-bold text-[#fca5a5]">UNASSISTED OFFICER OBSERVATION</div>
                  <div className="text-[11px] text-[#7d8b9e]">Subject to human eye perception limits</div>
                </div>
              </div>

              <div className="flex justify-center text-[#ef4444]/60">↓</div>

              <div className="p-3 bg-[#181114] border border-[#2a1a1a] rounded flex items-center gap-3">
                <LightbulbOff className="w-5 h-5 text-[#f97316] shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-[#e2e8f0]">SUBJECTIVE COLOUR JUDGEMENT</div>
                  <div className="text-[11px] text-[#7d8b9e]">Ambient sodium lighting distorts yellow/brown hues</div>
                </div>
              </div>

              <div className="flex justify-center text-[#ef4444]/60">↓</div>

              <div className="p-3 bg-[#181114] border border-[#2a1a1a] rounded flex items-center gap-3">
                <span className="text-xs font-bold text-[#ef4444]">04</span>
                <div>
                  <div className="text-xs font-semibold text-[#e2e8f0]">MANUAL PAPER / MEMORY LOG</div>
                  <div className="text-[11px] text-[#7d8b9e]">No cryptographic hash; susceptible to chain-of-custody gaps</div>
                </div>
              </div>
            </div>

            {/* Risk Callout Box */}
            <div className="mt-6 p-3 bg-[#1a1213] border-t border-[#ef4444]/30 rounded text-[11px] font-mono text-[#fca5a5]">
              <strong>COURT CONTESTABILITY:</strong> Lacks objective baseline, raw spectral measurement data, or tamper-evident cryptographic proof.
            </div>
          </div>

          {/* RIGHT: ChromaProof Automated Calibrated Process */}
          <div className="bg-[#111722] border-2 border-[#10b981]/40 rounded-lg p-6 relative">
            <div className="flex items-center justify-between border-b border-[#1b2b25] pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-[#132821] border border-[#10b981]/50 flex items-center justify-center text-[#10b981]">
                  <FileCheck2 className="w-3.5 h-3.5" />
                </div>
                <span className="font-mono text-sm font-bold text-[#6ee7b7]">CHROMAPROOF PIPELINE</span>
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 bg-[#10b981]/10 text-[#10b981] rounded border border-[#10b981]/30">
                COURT ADMISSIBLE INTEGRITY
              </span>
            </div>

            {/* Step Sequence Diagram */}
            <div className="space-y-4 font-mono">
              <div className="p-3 bg-[#131d27] border border-[#1e2e38] rounded flex items-center gap-3">
                <span className="text-xs font-bold text-[#10b981]">01</span>
                <div>
                  <div className="text-xs font-semibold text-[#e2e8f0]">TEST KIT + REFERENCE CARD</div>
                  <div className="text-[11px] text-[#8b99ae]">24-patch ArUco card placed alongside reagent sample</div>
                </div>
              </div>

              <div className="flex justify-center text-[#10b981]/60">↓</div>

              <div className="p-3 bg-[#131d27] border border-[#10b981]/40 rounded flex items-center gap-3 shadow-inner">
                <SlidersHorizontal className="w-5 h-5 text-[#f59e0b] shrink-0" />
                <div>
                  <div className="text-xs font-bold text-[#fbbf24]">CALIBRATED COLOUR CORRECTION (CIELAB)</div>
                  <div className="text-[11px] text-[#8b99ae]">White-balance & illuminant normalization removes glare</div>
                </div>
              </div>

              <div className="flex justify-center text-[#10b981]/60">↓</div>

              <div className="p-3 bg-[#131d27] border border-[#1e2e38] rounded flex items-center gap-3">
                <Cpu className="w-5 h-5 text-[#38bdf8] shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-[#e2e8f0]">ΔE2000 METRIC + TFLite CNN</div>
                  <div className="text-[11px] text-[#8b99ae]">Mathematical delta E distance against lab profiles</div>
                </div>
              </div>

              <div className="flex justify-center text-[#10b981]/60">↓</div>

              <div className="p-3 bg-[#131d27] border border-[#10b981]/50 rounded flex items-center gap-3 bg-[#10221c]">
                <CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0" />
                <div>
                  <div className="text-xs font-bold text-[#6ee7b7]">SHA-256 HASH + ECDSA P-256 SIGNATURE</div>
                  <div className="text-[11px] text-[#8b99ae]">Hardware-backed timestamped digital record</div>
                </div>
              </div>
            </div>

            {/* Success Callout Box */}
            <div className="mt-6 p-3 bg-[#12221b] border-t border-[#10b981]/40 rounded text-[11px] font-mono text-[#6ee7b7]">
              <strong>EVIDENTIAL VERIFIABILITY:</strong> Objective ΔE2000 math, cryptographic integrity, GPS fix, and mandatory "Inconclusive" safety thresholding.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
