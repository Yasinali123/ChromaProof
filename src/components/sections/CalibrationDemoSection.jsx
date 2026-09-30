import React, { useState } from 'react';
import { Sliders, Sun, CheckCircle2, RefreshCw, AlertCircle, Eye, Crosshair } from 'lucide-react';

export default function CalibrationDemoSection() {
  const [viewMode, setViewMode] = useState('calibrated'); // 'raw', 'calibrated', 'measurement', 'classification'
  const [lightingShift, setLightingShift] = useState(65); // 0 (warm tungsten) to 100 (D65 normalized)

  // Dynamic values computed from lighting slider
  const rawTemp = Math.round(2700 + (lightingShift * 38)); // 2700K to 6500K
  const uncalibratedDeltaE = (18.4 - (lightingShift * 0.15)).toFixed(2);
  const calibratedDeltaE = (3.42).toFixed(2);
  const confidenceScore = (92.0 + (lightingShift * 0.048)).toFixed(1);

  return (
    <section id="calibration" className="py-16 bg-[#0b0e14] border-b border-[#242c3d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a202c] border border-[#f59e0b]/40 rounded text-xs font-mono text-[#fbbf24] mb-3">
              <Sliders className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>INTERACTIVE OPENCV COLOUR BENCH</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f8fafc] tracking-tight">
              CIELAB Colour Calibration Engine
            </h2>
            <p className="mt-2 text-sm text-[#8b99ae] max-w-2xl font-mono">
              Simulate how raw field lighting variations (warm street lamps, shadows) are mathematically normalized against a 24-patch ArUco reference card.
            </p>
          </div>

          {/* Mandatory Disclaimer Label */}
          <div className="mt-4 md:mt-0 px-3 py-1.5 bg-[#1b1510] border border-[#f59e0b]/50 rounded text-xs font-mono text-[#fbbf24] flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-[#f59e0b]" />
            <span>Simulation — not a diagnostic result.</span>
          </div>
        </div>

        {/* Interactive Control Panel & Workbench */}
        <div className="bg-[#10141d] border-2 border-[#242c3d] rounded-lg p-6 sm:p-8">
          
          {/* Top Mode Selector Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#242c3d] pb-6 mb-6">
            
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="text-[#64748b] hidden sm:inline">VIEW MODE:</span>
              {[
                { id: 'raw', label: 'RAW IMAGE' },
                { id: 'calibrated', label: 'CALIBRATED IMAGE' },
                { id: 'measurement', label: 'MEASUREMENT' },
                { id: 'classification', label: 'CLASSIFICATION' }
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setViewMode(m.id)}
                  className={`px-3 py-1.5 rounded font-bold transition-all ${
                    viewMode === m.id
                      ? 'bg-[#f59e0b] text-[#0b0e14] shadow'
                      : 'bg-[#18202d] text-[#8b99ae] border border-[#242c3d] hover:text-[#e2e8f0]'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>

            {/* Lighting Temperature Adjustment Slider */}
            <div className="flex items-center gap-3 font-mono text-xs bg-[#141a26] px-4 py-2 rounded border border-[#242c3d]">
              <Sun className="w-4 h-4 text-[#f59e0b]" />
              <span className="text-[#94a3b8]">Lighting Temp:</span>
              <input
                type="range"
                min="0"
                max="100"
                value={lightingShift}
                onChange={(e) => setLightingShift(Number(e.target.value))}
                className="w-28 sm:w-36 accent-[#f59e0b] cursor-pointer"
              />
              <span className="text-[#fbbf24] font-bold min-w-[55px] text-right">{rawTemp}K</span>
            </div>

          </div>

          {/* Workbench Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* LEFT: Simulated Image Frame */}
            <div className="lg:col-span-7 relative bg-[#090b10] border border-[#242c3d] rounded-lg p-5 overflow-hidden">
              
              {/* Reticle Corner Markers */}
              <div className="reticle-corner-tl" />
              <div className="reticle-corner-tr" />
              <div className="reticle-corner-bl" />
              <div className="reticle-corner-br" />

              <div className="text-xs font-mono text-[#64748b] mb-3 flex items-center justify-between">
                <span>SENSOR_ACQUISITION_FRAME</span>
                <span className="text-[#10b981]">24-PATCH CARD: DETECTED</span>
              </div>

              {/* Dynamic Simulated Image Display */}
              <div 
                className="relative aspect-video rounded border border-[#242c3d] flex items-center justify-center p-6 transition-colors duration-300"
                style={{
                  backgroundColor: viewMode === 'raw' 
                    ? `rgba(${255 - lightingShift * 0.8}, ${220 - lightingShift * 0.4}, ${160 + lightingShift * 0.7}, 0.15)` 
                    : '#0c0f17'
                }}
              >
                {/* Simulated Reference Palette Grid */}
                <div className="w-full max-w-sm bg-[#121622] border-2 border-[#f59e0b]/60 rounded p-3 shadow-xl">
                  
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#f59e0b] mb-2">
                    <span>ArUco TARGET #42</span>
                    <span>WB CALIBRATED</span>
                  </div>

                  {/* 24 Patch Color Palette */}
                  <div className="grid grid-cols-6 gap-1 bg-[#0b0e14] p-1.5 border border-[#242c3d]">
                    {[
                      '#FFFFFF', '#C0C0C0', '#808080', '#404040', '#202020', '#000000',
                      '#E63946', '#F4A261', '#E76F51', '#2A9D8F', '#264653', '#457B9D',
                      '#9D4EDD', '#F72585', '#4CC9F0', '#70E000', '#FFB703', '#FB8500',
                      '#F4F1EA', '#A8531E', '#2A1B38', '#161324', '#1E5AA8', '#0F3870'
                    ].map((color, i) => (
                      <div 
                        key={i} 
                        style={{ 
                          backgroundColor: color,
                          filter: viewMode === 'raw' ? `sepia(${(100 - lightingShift) * 0.8}%)` : 'none'
                        }} 
                        className="w-full aspect-square rounded-[1px] border border-black/50 relative group/patch"
                      >
                        {viewMode === 'measurement' && (
                          <div className="absolute inset-0 border border-[#f59e0b] opacity-60" />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Test Reagent Spot Highlight */}
                  <div className="mt-4 p-2 bg-[#18202e] border border-[#242c3d] rounded flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#2a1b38] border border-[#f59e0b] flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full animate-ping" />
                      </div>
                      <span className="text-[11px] font-mono text-[#e2e8f0]">REAGENT ROI SPOT</span>
                    </div>

                    <span className="text-[10px] font-mono text-[#10b981]">
                      {viewMode === 'raw' ? 'UNNORMALIZED' : 'CIELAB CONVERTED'}
                    </span>
                  </div>

                </div>

                {/* Overlaid Measurement Crosshairs for Measurement mode */}
                {viewMode === 'measurement' && (
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    <Crosshair className="w-24 h-24 text-[#f59e0b]/50 animate-pulse" />
                  </div>
                )}
              </div>

            </div>

            {/* RIGHT: Live Calculated Parameters */}
            <div className="lg:col-span-5 space-y-4 font-mono">
              
              <div className="p-4 bg-[#141a26] border border-[#242c3d] rounded-lg space-y-3">
                <div className="text-xs font-bold text-[#f59e0b] flex items-center justify-between border-b border-[#242c3d] pb-2">
                  <span>METRIC BREAKDOWN</span>
                  <span>MODE: {viewMode.toUpperCase()}</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-[#8b99ae]">
                    <span>Raw Sensor Illuminant:</span>
                    <span className="text-[#e2e8f0] font-semibold">{rawTemp} K</span>
                  </div>

                  <div className="flex justify-between text-[#8b99ae]">
                    <span>Detected ArUco Card:</span>
                    <span className="text-[#10b981] font-semibold">24 / 24 Patches Valid</span>
                  </div>

                  <div className="flex justify-between text-[#8b99ae]">
                    <span>CIELAB Reagent Vector:</span>
                    <span className="text-[#38bdf8] font-semibold">L:14.5 a:12.1 b:-18.3</span>
                  </div>

                  <div className="flex justify-between text-[#8b99ae]">
                    <span>CIEDE2000 Distance (ΔE2000):</span>
                    <span className="text-[#f59e0b] font-bold text-sm">
                      {viewMode === 'raw' ? uncalibratedDeltaE : calibratedDeltaE}
                    </span>
                  </div>

                  <div className="flex justify-between text-[#8b99ae]">
                    <span>TFLite Model Confidence:</span>
                    <span className="text-[#10b981] font-bold text-sm">{confidenceScore}%</span>
                  </div>
                </div>
              </div>

              {/* Classification Result Display Box */}
              <div className="p-4 bg-[#111c16] border-2 border-[#10b981]/60 rounded-lg">
                <div className="text-[10px] text-[#10b981] font-bold tracking-wider mb-1">
                  CLASSIFICATION OUTPUT
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-[#6ee7b7]">NEGATIVE</span>
                  <span className="px-2 py-1 bg-[#10b981]/20 text-[#10b981] rounded text-xs border border-[#10b981]/40 font-bold">
                    THRESHOLD PASSED
                  </span>
                </div>
                <p className="mt-2 text-[11px] text-[#8b99ae]">
                  ΔE2000 distance remains below the 12.0 reaction threshold for Marquis illegal compound matches.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
