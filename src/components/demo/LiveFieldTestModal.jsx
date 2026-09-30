import React, { useState } from 'react';
import { 
  X, 
  Camera, 
  Sliders, 
  Cpu, 
  Key, 
  CheckCircle2, 
  AlertTriangle, 
  RefreshCw, 
  Crosshair, 
  ShieldCheck, 
  Sun,
  Lock,
  Download,
  HelpCircle
} from 'lucide-react';
import { KIT_PROFILES } from '../../data/evidenceData';

export default function LiveFieldTestModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1); // 1: Select Kit, 2: Camera Capture, 3: Processing, 4: Result Certificate
  const [selectedKit, setSelectedKit] = useState(KIT_PROFILES[0]);
  const [glareSimulated, setGlareSimulated] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [simulatedResult, setSimulatedResult] = useState(null);

  if (!isOpen) return null;

  const handleStartCapture = () => {
    setStep(3);
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);

      if (glareSimulated) {
        setSimulatedResult({
          outcome: 'INCONCLUSIVE',
          confidence: 62.4,
          deltaE: 8.91,
          reason: 'SPECULAR_GLARE_PATCH_04_EXCEEDS_15%',
          hash: '7b4c9a8e1f2d3c4b5a6f7e8d9c0b1a2f3e4d5c6b7a8f9e0d1c2b3a4f5e6d7c8b',
          signature: '3045022100a1...9f8e02203b2c...ecdsa_p256'
        });
      } else {
        setSimulatedResult({
          outcome: 'NEGATIVE',
          confidence: 97.4,
          deltaE: 3.12,
          reason: 'NOMINAL_BASELINE_MATCH',
          hash: 'a91f3c8e7b2d5a1f4e90c8b7a6f5e4d3c2b1a099887766554433221100fce7c42',
          signature: '304402207b1a...8e2f02204c3d...ecdsa_p256'
        });
      }

      setStep(4);
    }, 2200);
  };

  const handleReset = () => {
    setStep(1);
    setSimulatedResult(null);
    setGlareSimulated(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#000000]/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#0b0e14] border-2 border-[#f59e0b] rounded-lg max-w-3xl w-full p-6 font-mono text-xs space-y-6 relative shadow-2xl animate-fade-in max-h-[95vh] overflow-y-auto">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-[#242c3d] pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-[#1a2333] border border-[#f59e0b] flex items-center justify-center text-[#f59e0b]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-sm text-[#f8fafc] tracking-wider">CHROMAPROOF FIELD TEST SIMULATOR</div>
              <div className="text-[10px] text-[#8b99ae]">Interactive Presumptive Reagent Analysis Protocol</div>
            </div>
          </div>

          <button onClick={onClose} className="text-[#7d8b9e] hover:text-[#f8fafc] p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* STEP 1: KIT SELECTOR */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="text-xs text-[#f59e0b] font-bold">STEP 1: SELECT REAGENT KIT PROFILE</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {KIT_PROFILES.map((kit) => (
                <button
                  key={kit.id}
                  onClick={() => setSelectedKit(kit)}
                  className={`p-4 rounded border text-left transition-all ${
                    selectedKit.id === kit.id
                      ? 'bg-[#182130] border-[#f59e0b] text-[#f8fafc]'
                      : 'bg-[#121620] border-[#242c3d] text-[#8b99ae] hover:border-[#3a465d]'
                  }`}
                >
                  <div className="font-bold text-sm text-[#e2e8f0]">{kit.id}</div>
                  <div className="text-[10px] text-[#f59e0b]">{kit.version}</div>
                  <div className="text-[11px] text-[#7d8b9e] mt-2 leading-tight">{kit.targetSubstances}</div>
                </button>
              ))}
            </div>

            <div className="p-3 bg-[#121722] border border-[#242c3d] rounded text-[11px] text-[#8b99ae]">
              Selected profile threshold: <strong className="text-[#fbbf24]">{selectedKit.thresholdConfig}</strong>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setStep(2)}
                className="px-5 py-2.5 bg-[#f59e0b] text-[#0b0e14] font-bold rounded uppercase tracking-wider text-xs shadow-lg shadow-[#f59e0b]/20"
              >
                Proceed to Guided Camera &rarr;
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: CAMERA VIEW SIMULATOR */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-xs text-[#f59e0b] font-bold">STEP 2: OPTICAL ACQUISITION &amp; LIGHTING CHECK</div>
              <label className="flex items-center gap-2 cursor-pointer text-[11px] text-[#fbbf24]">
                <input
                  type="checkbox"
                  checked={glareSimulated}
                  onChange={(e) => setGlareSimulated(e.target.checked)}
                  className="accent-[#f59e0b]"
                />
                <span>Simulate Specular Glare (Forces Inconclusive)</span>
              </label>
            </div>

            {/* Simulated Camera Viewfinder */}
            <div className="relative aspect-video bg-[#07090e] border-2 border-[#242c3d] rounded-lg overflow-hidden flex items-center justify-center p-4">
              <div className="reticle-corner-tl" />
              <div className="reticle-corner-tr" />
              <div className="reticle-corner-bl" />
              <div className="reticle-corner-br" />

              <div className="w-full max-w-xs bg-[#121620] border border-[#f59e0b] rounded p-3 text-center space-y-2">
                <div className="text-[10px] text-[#f59e0b] font-bold flex justify-between">
                  <span>TARGET: ARUCO #42</span>
                  <span>{glareSimulated ? 'GLARE WARNING' : 'ALIGNMENT OK'}</span>
                </div>
                <div className="w-20 h-20 rounded-full bg-[#2a1b38] mx-auto border-2 border-dashed border-[#10b981] flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-ping" />
                </div>
                <div className="text-[10px] text-[#64748b]">
                  {selectedKit.id} REAGENT ROI BOUNDING BOX
                </div>
              </div>

              {/* Status HUD */}
              <div className="absolute top-2 left-2 px-2 py-1 bg-[#0b0e14]/90 border border-[#242c3d] rounded text-[10px] text-[#10b981]">
                EXPOSURE: LOCKED (-0.2 EV)
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <button onClick={() => setStep(1)} className="text-[#8b99ae] hover:underline">
                &larr; Back to Kit
              </button>
              <button
                onClick={handleStartCapture}
                className="px-6 py-2.5 bg-[#f59e0b] text-[#0b0e14] font-bold rounded uppercase tracking-wider text-xs shadow-lg shadow-[#f59e0b]/20 flex items-center gap-2"
              >
                <Camera className="w-4 h-4" />
                <span>CAPTURE &amp; ANALYZE</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: PROCESSING ANIMATION */}
        {step === 3 && (
          <div className="py-12 text-center space-y-4 font-mono">
            <RefreshCw className="w-10 h-10 text-[#f59e0b] animate-spin mx-auto" />
            <div className="text-sm font-bold text-[#f8fafc]">EXECUTING COMPUTATIONAL VISION PIPELINE</div>
            <div className="text-xs text-[#8b99ae] space-y-1">
              <div>1. OpenCV ArUco 24-Patch White Balance Normalization...</div>
              <div>2. Converting RGB to CIELAB Perceptual Color Space...</div>
              <div>3. Calculating CIEDE2000 (ΔE2000) Distance Vector...</div>
              <div>4. TFLite MobileNet CNN Second Opinion Model...</div>
              <div>5. Generating SHA-256 Digest &amp; Hardware ECDSA Seal...</div>
            </div>
          </div>
        )}

        {/* STEP 4: FINAL CERTIFICATE RECORD */}
        {step === 4 && simulatedResult && (
          <div className="space-y-4">
            <div className="p-4 bg-[#10141d] border-2 border-[#242c3d] rounded-lg space-y-3">
              <div className="flex items-center justify-between border-b border-[#242c3d] pb-2">
                <span className="text-xs font-bold text-[#f59e0b]">SIMULATED RECORD OUTPUT</span>
                <span className="text-[10px] text-[#64748b]">CP-2026-SIM-001</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-[#0b0e14] border border-[#242c3d] rounded">
                  <div className="text-[10px] text-[#64748b]">OUTCOME:</div>
                  <div className={`text-xl font-black ${
                    simulatedResult.outcome === 'NEGATIVE' ? 'text-[#10b981]' : 'text-[#fbbf24]'
                  }`}>
                    {simulatedResult.outcome}
                  </div>
                </div>

                <div className="p-3 bg-[#0b0e14] border border-[#242c3d] rounded">
                  <div className="text-[10px] text-[#64748b]">CONFIDENCE / ΔE:</div>
                  <div className="text-base font-bold text-[#e2e8f0]">
                    {simulatedResult.confidence}% (ΔE {simulatedResult.deltaE})
                  </div>
                </div>
              </div>

              <div className="p-2 bg-[#0b0e14] border border-[#242c3d] rounded text-[10px] text-[#8b99ae] break-all">
                SHA-256: <span className="text-[#fbbf24]">{simulatedResult.hash}</span>
              </div>

              <div className="p-2 bg-[#0b0e14] border border-[#242c3d] rounded text-[10px] text-[#10b981] truncate">
                ECDSA: {simulatedResult.signature}
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <button onClick={handleReset} className="text-[#f59e0b] hover:underline">
                Run Another Simulation
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2 bg-[#10b981] text-[#0b0e14] font-bold rounded"
              >
                CLOSE SIMULATOR
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
