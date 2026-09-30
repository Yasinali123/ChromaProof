import React, { useState } from 'react';
import { 
  Shield, 
  ArrowRight, 
  FileCheck2, 
  Crosshair, 
  CheckCircle2, 
  Maximize2, 
  Sliders, 
  Lock, 
  MapPin, 
  Clock, 
  Cpu, 
  Activity,
  Play
} from 'lucide-react';

export default function HeroSection({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState('raw'); // 'raw', 'calibrated', 'isolated'

  const scrollToWorkflow = () => {
    document.getElementById('workflow')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToEvidence = () => {
    document.getElementById('evidence-record')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[calc(100vh-3.5rem)] py-8 lg:py-16 bg-[#0b0e14] bg-grid-pattern border-b border-[#242c3d] overflow-hidden">
      
      {/* Decorative Technical Ambient Grid Ticks */}
      <div className="absolute top-4 left-4 font-mono text-[10px] text-[#3a465d] tracking-widest pointer-events-none select-none">
        [SYS_LATITUDE_22.8046 / HASH_ENGINE_ACTIVE]
      </div>
      <div className="absolute top-4 right-4 font-mono text-[10px] text-[#3a465d] tracking-widest pointer-events-none select-none">
        [PRECISION_INSTRUMENT_MODE_V2.4]
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Technical Hero Copy & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Small Technical Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#161d2a] border border-[#f59e0b]/30 rounded text-xs font-mono text-[#fbbf24]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-ping" />
              <span>FIELD EVIDENCE SYSTEM / CHROMAPROOF 01</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f8fafc] tracking-tight leading-[1.15]">
              Turn a colour change <br className="hidden sm:inline" />
              into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#f59e0b]">verifiable evidence.</span>
            </h1>

            {/* Short Explanation */}
            <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed max-w-xl">
              ChromaProof transforms subjective field-test colour readings into calibrated, timestamped and cryptographically signed digital records.
            </p>

            {/* Key Technical Highlights Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
              <div className="p-2.5 bg-[#121722] border border-[#242c3d] rounded text-[#cbd5e1] flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#f59e0b]" />
                <span>ΔE2000 Vision</span>
              </div>
              <div className="p-2.5 bg-[#121722] border border-[#242c3d] rounded text-[#cbd5e1] flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#10b981]" />
                <span>ECDSA Signed</span>
              </div>
              <div className="p-2.5 bg-[#121722] border border-[#242c3d] rounded text-[#cbd5e1] flex items-center gap-2 col-span-2 sm:col-span-1">
                <Cpu className="w-4 h-4 text-[#38bdf8]" />
                <span>TFLite CNN</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={scrollToWorkflow}
                className="px-5 py-3 bg-[#f59e0b] hover:bg-[#d97706] text-[#0b0e14] font-mono font-bold text-xs uppercase tracking-wider rounded transition-all shadow-lg shadow-[#f59e0b]/20 flex items-center gap-2 group"
              >
                <span>Explore the workflow</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToEvidence}
                className="px-5 py-3 bg-[#161c28] hover:bg-[#1f2738] text-[#e2e8f0] border border-[#3a465d] font-mono font-medium text-xs uppercase tracking-wider rounded transition-colors flex items-center gap-2"
              >
                <FileCheck2 className="w-4 h-4 text-[#10b981]" />
                <span>View evidence record</span>
              </button>

              <button
                onClick={onOpenDemo}
                className="px-4 py-3 bg-[#1e293b]/60 hover:bg-[#1e293b] text-[#fbbf24] border border-[#f59e0b]/40 font-mono text-xs rounded transition-colors flex items-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>LAUNCH SIMULATOR</span>
              </button>
            </div>

            {/* Forensic Disclaimer Notice */}
            <div className="p-3 bg-[#141923] border-l-2 border-[#f59e0b] rounded-r text-[11px] text-[#7d8b9e] font-mono leading-normal">
              <strong className="text-[#e2e8f0]">COURT-READY PROTOCOL:</strong> Presumptive field testing system. Complements laboratory GC-MS confirmation with verifiable chain-of-custody metadata.
            </div>

          </div>

          {/* RIGHT: Custom Forensic Camera & Measurement Instrument UI */}
          <div className="lg:col-span-6 relative">
            
            {/* Main Instrument Container */}
            <div className="relative bg-[#0e131d] border-2 border-[#242c3d] rounded-lg shadow-2xl p-4 sm:p-5 overflow-hidden">
              
              {/* Instrument Top Bar */}
              <div className="flex items-center justify-between border-b border-[#242c3d] pb-3 mb-3 font-mono text-[11px]">
                <div className="flex items-center gap-2 text-[#f59e0b]">
                  <Crosshair className="w-4 h-4 animate-spin-slow" />
                  <span className="font-semibold tracking-wider">OPTICAL SENSOR ACTIVE</span>
                </div>
                <div className="flex items-center gap-3 text-[#7d8b9e]">
                  <span>REC_ID: CP-2026-000184</span>
                  <span className="px-1.5 py-0.5 bg-[#10b981]/10 border border-[#10b981]/40 text-[#10b981] rounded text-[10px]">
                    ARUCO DETECTED
                  </span>
                </div>
              </div>

              {/* Simulated Camera Frame with Target Overlay */}
              <div className="relative aspect-[4/3] bg-[#07090e] rounded border border-[#242c3d] overflow-hidden group">
                
                {/* Simulated Reticle Corners */}
                <div className="reticle-corner-tl" />
                <div className="reticle-corner-tr" />
                <div className="reticle-corner-bl" />
                <div className="reticle-corner-br" />

                {/* Scanning Beam Animation */}
                <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#f59e0b] to-transparent shadow-[0_0_12px_#f59e0b] animate-scan-beam z-20 pointer-events-none" />

                {/* Camera View Content (Synthetic Test Target) */}
                <div className="w-full h-full relative flex items-center justify-center p-6 bg-[#0a0d14]">
                  
                  {/* Grid Lines Overlay */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-40" />

                  {/* Test Scene: Reference Palette Card + Reagent Vial */}
                  <div className="relative z-10 w-full h-full flex flex-col sm:flex-row items-center justify-around gap-4 p-4 border border-[#242c3d]/60 rounded bg-[#10141d]/80">
                    
                    {/* Reference Colour Card 24-patch grid representation */}
                    <div className="relative p-2 bg-[#0b0e14] border border-[#f59e0b]/50 rounded shadow-md">
                      <div className="text-[9px] font-mono text-[#f59e0b] mb-1 flex items-center justify-between">
                        <span>REF_CARD_24P</span>
                        <span className="text-[#10b981]">OK</span>
                      </div>
                      <div className="grid grid-cols-6 gap-1 w-32 h-20 bg-[#161c28] p-1 border border-[#242c3d]">
                        {[
                          '#ffffff', '#e5e5e5', '#a3a3a3', '#525252', '#262626', '#0a0a0a',
                          '#ef4444', '#f97316', '#eab308', '#22c55e', '#06b6d4', '#3b82f6',
                          '#a855f7', '#ec4899', '#84cc16', '#14b8a6', '#6366f1', '#d97706',
                          '#f4f1ea', '#a8531e', '#2a1b38', '#161324', '#1e5aa8', '#0f3870'
                        ].map((hex, i) => (
                          <div key={i} style={{ backgroundColor: hex }} className="w-full h-full rounded-[1px] border border-black/40" />
                        ))}
                      </div>
                      <div className="mt-1 text-[8px] font-mono text-[#64748b] text-center">
                        ArUco ID #42 Detected
                      </div>
                    </div>

                    {/* Reagent Spot Isolation Area */}
                    <div className="relative flex flex-col items-center">
                      <div className="relative w-24 h-24 rounded-full border-2 border-dashed border-[#10b981] flex items-center justify-center bg-[#18202d] shadow-lg">
                        {/* Simulated Reagent Reaction Spot */}
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2a1b38] via-[#1a1426] to-[#0f0b18] border border-[#3b2a4e] flex items-center justify-center shadow-inner">
                          <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-ping" />
                        </div>

                        {/* Measurement Annotation Lines */}
                        <div className="absolute -top-2 px-1.5 py-0.5 bg-[#10b981] text-[#0b0e14] font-mono text-[9px] font-bold rounded">
                          REAGENT ROI
                        </div>
                      </div>
                      <div className="mt-2 text-[9px] font-mono text-[#cbd5e1] text-center">
                        CIELAB: L:14.5 a:12.1 b:-18.3
                      </div>
                    </div>

                  </div>

                </div>

                {/* Floating Realtime Measurement Hud Overlay */}
                <div className="absolute bottom-2 left-2 right-2 bg-[#0b0e14]/90 backdrop-blur border border-[#242c3d] rounded p-2 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#8b99ae]">ΔE2000:</span>
                    <span className="text-[#f59e0b] font-bold">3.42 (Baseline Matches)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#8b99ae]">CONFIDENCE:</span>
                    <span className="text-[#10b981] font-bold">96.8%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#8b99ae]">PREDICT:</span>
                    <span className="text-[#ef4444] font-bold">NEGATIVE</span>
                  </div>
                </div>

              </div>

              {/* Instrument Bottom Control Metrics */}
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[10px]">
                <div className="p-2 bg-[#141924] border border-[#242c3d] rounded">
                  <div className="text-[#64748b] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#f59e0b]" />
                    <span>TIMESTAMP</span>
                  </div>
                  <div className="text-[#e2e8f0] font-medium mt-0.5 truncate">18:42:11 IST</div>
                </div>

                <div className="p-2 bg-[#141924] border border-[#242c3d] rounded">
                  <div className="text-[#64748b] flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#10b981]" />
                    <span>GPS FIX</span>
                  </div>
                  <div className="text-[#e2e8f0] font-medium mt-0.5 truncate">22.8046°N 86.2029°E</div>
                </div>

                <div className="p-2 bg-[#141924] border border-[#242c3d] rounded">
                  <div className="text-[#64748b] flex items-center gap-1">
                    <Lock className="w-3 h-3 text-[#38bdf8]" />
                    <span>SHA-256</span>
                  </div>
                  <div className="text-[#e2e8f0] font-medium mt-0.5 truncate">a91f3c8e...7c42</div>
                </div>

                <div className="p-2 bg-[#141924] border border-[#242c3d] rounded">
                  <div className="text-[#64748b] flex items-center gap-1">
                    <Activity className="w-3 h-3 text-[#10b981]" />
                    <span>INTEGRITY</span>
                  </div>
                  <div className="text-[#10b981] font-bold mt-0.5 truncate">ECDSA VERIFIED</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
