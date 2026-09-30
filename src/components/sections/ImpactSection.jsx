import React from 'react';
import { HeartHandshake, Coins, Leaf, CheckCircle2 } from 'lucide-react';

export default function ImpactSection() {
  return (
    <section id="impact" className="py-16 bg-[#0e121a] border-b border-[#242c3d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a202c] border border-[#f59e0b]/40 rounded text-xs font-mono text-[#fbbf24] mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>OPERATIONAL & SYSTEMIC VALUE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f8fafc] tracking-tight">
            Institutional & Societal Impact
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#8b99ae] font-mono leading-relaxed">
            Delivering objective evidence integrity without placing fiscal burdens on public enforcement agencies.
          </p>
        </div>

        {/* 3 Large Editorial Layouts */}
        <div className="space-y-10">
          
          {/* EDITORIAL SECTION 1: SOCIAL IMPACT */}
          <div className="bg-[#121722] border-l-4 border-[#f59e0b] border-y border-r border-[#242c3d] rounded-r-lg p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-mono">
              <div className="lg:col-span-4 space-y-2">
                <span className="text-xs text-[#f59e0b] font-bold tracking-widest uppercase">01 / SOCIAL IMPACT</span>
                <h3 className="text-2xl font-extrabold text-[#f8fafc]">Justice &amp; Evidence Integrity</h3>
                <p className="text-xs text-[#8b99ae] leading-relaxed">
                  Eliminating wrongful detainment stemming from flawed visual interpretations of ambiguous spot tests.
                </p>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-[#0b0e14] border border-[#242c3d] rounded space-y-1">
                  <div className="font-bold text-[#e2e8f0]">Reduced Bias</div>
                  <div className="text-[11px] text-[#7d8b9e]">Standardized CIELAB color math eliminates subjective human observer variation.</div>
                </div>

                <div className="p-4 bg-[#0b0e14] border border-[#242c3d] rounded space-y-1">
                  <div className="font-bold text-[#e2e8f0]">Guided Protocol</div>
                  <div className="text-[11px] text-[#7d8b9e]">Step-by-step camera alignment prevents operator acquisition mistakes.</div>
                </div>

                <div className="p-4 bg-[#0b0e14] border border-[#242c3d] rounded space-y-1">
                  <div className="font-bold text-[#e2e8f0]">Court Integrity</div>
                  <div className="text-[11px] text-[#7d8b9e]">Cryptographic hashes ensure court-admissible chain of custody under BSA 2023.</div>
                </div>
              </div>
            </div>
          </div>

          {/* EDITORIAL SECTION 2: ECONOMIC IMPACT */}
          <div className="bg-[#121722] border-l-4 border-[#10b981] border-y border-r border-[#242c3d] rounded-r-lg p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-mono">
              <div className="lg:col-span-4 space-y-2">
                <span className="text-xs text-[#10b981] font-bold tracking-widest uppercase">02 / ECONOMIC IMPACT</span>
                <h3 className="text-2xl font-extrabold text-[#f8fafc]">Zero Custom Hardware Cost</h3>
                <p className="text-xs text-[#8b99ae] leading-relaxed">
                  Deployable across existing smartphone hardware and standard chemical kit inventories.
                </p>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-[#0b0e14] border border-[#242c3d] rounded space-y-1">
                  <div className="font-bold text-[#e2e8f0]">Commodity Devices</div>
                  <div className="text-[11px] text-[#7d8b9e]">Runs on existing officer smartphones and Toughbooks with Android 9+.</div>
                </div>

                <div className="p-4 bg-[#0b0e14] border border-[#242c3d] rounded space-y-1">
                  <div className="font-bold text-[#e2e8f0]">Existing Test Kits</div>
                  <div className="text-[11px] text-[#7d8b9e]">Compatible with standard Marquis, Scott, and Duquenois-Levine reagents.</div>
                </div>

                <div className="p-4 bg-[#0b0e14] border border-[#242c3d] rounded space-y-1">
                  <div className="font-bold text-[#e2e8f0]">Open Software Stack</div>
                  <div className="text-[11px] text-[#7d8b9e]">Built on OpenCV, TFLite, and Flutter — avoiding proprietary vendor lock-in.</div>
                </div>
              </div>
            </div>
          </div>

          {/* EDITORIAL SECTION 3: ENVIRONMENTAL IMPACT */}
          <div className="bg-[#121722] border-l-4 border-[#38bdf8] border-y border-r border-[#242c3d] rounded-r-lg p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-mono">
              <div className="lg:col-span-4 space-y-2">
                <span className="text-xs text-[#38bdf8] font-bold tracking-widest uppercase">03 / ENVIRONMENTAL IMPACT</span>
                <h3 className="text-2xl font-extrabold text-[#f8fafc]">Paperless Digital Audit</h3>
                <p className="text-xs text-[#8b99ae] leading-relaxed">
                  Software-only deployment eliminating physical paper seizure logs and hardware waste.
                </p>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-[#0b0e14] border border-[#242c3d] rounded space-y-1">
                  <div className="font-bold text-[#e2e8f0]">Zero E-Waste</div>
                  <div className="text-[11px] text-[#7d8b9e]">No specialized spectrometer hardware to manufacture, ship, or discard.</div>
                </div>

                <div className="p-4 bg-[#0b0e14] border border-[#242c3d] rounded space-y-1">
                  <div className="font-bold text-[#e2e8f0]">Digital Chain</div>
                  <div className="text-[11px] text-[#7d8b9e]">Replaces millions of physical carbon-copy paper seizure forms annually.</div>
                </div>

                <div className="p-4 bg-[#0b0e14] border border-[#242c3d] rounded space-y-1">
                  <div className="font-bold text-[#e2e8f0]">Efficient Compute</div>
                  <div className="text-[11px] text-[#7d8b9e]">Lightweight C++ vision pipeline optimized for minimal device energy drain.</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
