import React from 'react';
import { AlertCircle, CheckCircle2, HelpCircle, ShieldAlert, ShieldCheck, SunMedium } from 'lucide-react';

export default function ResultStatesSection() {
  return (
    <section id="result-states" className="py-16 bg-[#0e121a] border-b border-[#242c3d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a202c] border border-[#f59e0b]/40 rounded text-xs font-mono text-[#fbbf24] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>SAFETY-FIRST DECISION TAXONOMY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f8fafc] tracking-tight">
            Three Valid Result States
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#8b99ae] font-mono leading-relaxed">
            ChromaProof treats <strong>Inconclusive</strong> as a vital safety outcome rather than a system failure. When field conditions degrade, the software refuses to guess.
          </p>
        </div>

        {/* 3 Result Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
          
          {/* POSITIVE RESULT CARD */}
          <div className="bg-[#140e10] border-2 border-[#ef4444]/60 rounded-lg p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#2a1417] pb-3 mb-4">
                <span className="text-xs text-[#ef4444] font-bold">STATE 01 — ALERT</span>
                <span className="px-2 py-0.5 bg-[#ef4444]/20 text-[#ef4444] rounded text-[10px] border border-[#ef4444]/40 font-bold">
                  MATCH DETECTED
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-[#2a1417] border border-[#ef4444] flex items-center justify-center text-[#ef4444]">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#fca5a5]">POSITIVE</h3>
                  <div className="text-[11px] text-[#94a3b8]">Presumptive Target Match</div>
                </div>
              </div>

              <p className="text-xs text-[#cbd5e1] leading-relaxed mb-4">
                CIEDE2000 color distance exceeds target threshold (ΔE2000 &gt; 12.0) with high TFLite CNN model confidence (&gt; 85%).
              </p>
            </div>

            <div className="p-3 bg-[#1e1113] border border-[#2a1417] rounded text-[11px] text-[#fca5a5]">
              <strong>PROTOCOL:</strong> Secure sample immediately for GC-MS confirmatory laboratory transmission.
            </div>
          </div>

          {/* NEGATIVE RESULT CARD */}
          <div className="bg-[#0e1612] border-2 border-[#10b981]/60 rounded-lg p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#14291f] pb-3 mb-4">
                <span className="text-xs text-[#10b981] font-bold">STATE 02 — VERIFIED</span>
                <span className="px-2 py-0.5 bg-[#10b981]/20 text-[#10b981] rounded text-[10px] border border-[#10b981]/40 font-bold">
                  NO MATCH
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-[#14291f] border border-[#10b981] flex items-center justify-center text-[#10b981]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#6ee7b7]">NEGATIVE</h3>
                  <div className="text-[11px] text-[#94a3b8]">No Target Reaction Observed</div>
                </div>
              </div>

              <p className="text-xs text-[#cbd5e1] leading-relaxed mb-4">
                Reagent color remains within baseline parameters (ΔE2000 &lt; 4.0) under normalized illuminant calibration.
              </p>
            </div>

            <div className="p-3 bg-[#12221b] border border-[#14291f] rounded text-[11px] text-[#6ee7b7]">
              <strong>PROTOCOL:</strong> Generate signed record confirming negative presumptive field test.
            </div>
          </div>

          {/* INCONCLUSIVE SAFETY RESULT CARD */}
          <div className="bg-[#14151a] border-2 border-[#f59e0b]/60 rounded-lg p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#2a2416] pb-3 mb-4">
                <span className="text-xs text-[#f59e0b] font-bold">STATE 03 — SAFETY SHIELD</span>
                <span className="px-2 py-0.5 bg-[#f59e0b]/20 text-[#f59e0b] rounded text-[10px] border border-[#f59e0b]/40 font-bold">
                  FORCED INCONCLUSIVE
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-[#2a2416] border border-[#f59e0b] flex items-center justify-center text-[#f59e0b]">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#fbbf24]">INCONCLUSIVE</h3>
                  <div className="text-[11px] text-[#94a3b8]">Safety Threshold Fallback</div>
                </div>
              </div>

              <p className="text-xs text-[#cbd5e1] leading-relaxed mb-3">
                Triggered automatically when image environmental parameters prevent 100% objective measurement:
              </p>

              <ul className="space-y-1.5 text-[11px] text-[#94a3b8] mb-4">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                  <span>Low confidence score (&lt; 85%)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                  <span>ArUco reference card obscured/missing</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                  <span>Excessive specular glare or lens blur</span>
                </li>
              </ul>
            </div>

            <div className="p-3 bg-[#221c12] border border-[#2a2416] rounded text-[11px] text-[#fbbf24]">
              <strong>PROTECTION:</strong> Eliminates human bias &amp; false accusation risks during field seizures.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
