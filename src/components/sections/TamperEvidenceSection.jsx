import React, { useState } from 'react';
import { ShieldCheck, Play, CheckCircle2, RefreshCw, Hash, Key, UserCheck, Clock, FileCheck } from 'lucide-react';

export default function TamperEvidenceSection() {
  const [verifying, setVerifying] = useState(false);
  const [stepIndex, setStepIndex] = useState(-1);
  const [completed, setCompleted] = useState(false);

  const verificationSteps = [
    { label: 'IMAGE HASH MATCH', detail: 'Recalculated SHA-256 matches stored photo bytes', icon: Hash },
    { label: 'SIGNATURE VALID', detail: 'ECDSA P-256 public key verifies payload integrity', icon: Key },
    { label: 'TIMESTAMP PRESENT', detail: 'RFC 3161 non-repudiable timestamp confirmed', icon: Clock },
    { label: 'OPERATOR IDENTIFIED', detail: 'Keystore attestation validates OP-0148 identity', icon: UserCheck },
    { label: 'RECORD INTEGRITY VERIFIED', detail: 'Zero hash mismatch detected in audit chain', icon: FileCheck }
  ];

  const handleRunVerification = () => {
    if (verifying) return;
    setVerifying(true);
    setCompleted(false);
    setStepIndex(0);

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current < verificationSteps.length) {
        setStepIndex(current);
      } else {
        clearInterval(interval);
        setVerifying(false);
        setCompleted(true);
      }
    }, 600);
  };

  return (
    <section id="tamper-integrity" className="py-16 bg-[#0b0e14] border-b border-[#242c3d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a202c] border border-[#f59e0b]/40 rounded text-xs font-mono text-[#fbbf24] mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>CRYPTOGRAPHIC TAMPER-EVIDENCE ENGINE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f8fafc] tracking-tight">
            Interactive Integrity Verification
          </h2>
          <p className="mt-2 text-sm text-[#8b99ae] font-mono">
            Test how ChromaProof proves that a field evidence record has not been altered, retouched, or forged.
          </p>
        </div>

        {/* Interactive Verification Stage */}
        <div className="bg-[#10141d] border-2 border-[#242c3d] rounded-lg p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-mono">
          
          {/* Left Diagram: Integrity Architecture */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs text-[#f59e0b] font-bold tracking-wider">
              CRYPTOGRAPHIC DATA FLOW
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-[#151c28] border border-[#242c3d] rounded flex items-center justify-between text-xs">
                <span className="text-[#e2e8f0]">RAW IMAGE PHOTOGRAPH</span>
                <span className="text-[#f59e0b]">3,840 × 2,160 PX</span>
              </div>
              <div className="text-center text-[#5b687a] text-xs">↓ SHA-256 Digest Engine</div>
              
              <div className="p-3 bg-[#151c28] border border-[#242c3d] rounded flex items-center justify-between text-xs">
                <span className="text-[#e2e8f0]">256-BIT HASH DIGEST</span>
                <span className="text-[#38bdf8]">a91f3c8e...7c42</span>
              </div>
              <div className="text-center text-[#5b687a] text-xs">↓ Hardware Keystore Private Key</div>

              <div className="p-3 bg-[#151c28] border border-[#242c3d] rounded flex items-center justify-between text-xs">
                <span className="text-[#e2e8f0]">ECDSA P-256 SIGNED SEAL</span>
                <span className="text-[#10b981]">ECDSA_OK</span>
              </div>
            </div>

            {/* Action Trigger Button */}
            <div className="pt-4">
              <button
                onClick={handleRunVerification}
                disabled={verifying}
                className={`w-full py-3 px-4 rounded font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg ${
                  verifying
                    ? 'bg-[#1e293b] text-[#94a3b8] border border-[#334155] cursor-not-allowed'
                    : 'bg-[#f59e0b] hover:bg-[#d97706] text-[#0b0e14] shadow-[#f59e0b]/10'
                }`}
              >
                {verifying ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-[#f59e0b]" />
                    <span>Executing Cryptographic Verification...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>VERIFY RECORD INTEGRITY</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Monitor: Live Verification Sequence Output */}
          <div className="lg:col-span-6 bg-[#090b10] border border-[#242c3d] rounded-lg p-5">
            <div className="flex items-center justify-between border-b border-[#242c3d] pb-3 mb-4 text-xs">
              <span className="text-[#f59e0b] font-bold">VERIFICATION CONSOLE</span>
              <span className="text-[#64748b]">CP-2026-000184</span>
            </div>

            {/* Step Checkmarks */}
            <div className="space-y-3 min-h-[220px]">
              {verificationSteps.map((step, idx) => {
                const Icon = step.icon;
                const isPassed = stepIndex >= idx || completed;
                const isCurrent = verifying && stepIndex === idx;

                return (
                  <div
                    key={step.label}
                    className={`p-2.5 rounded border text-xs flex items-center justify-between transition-all ${
                      isPassed
                        ? 'bg-[#102018] border-[#10b981]/50 text-[#6ee7b7]'
                        : isCurrent
                        ? 'bg-[#1e1b12] border-[#f59e0b] text-[#fbbf24] animate-pulse'
                        : 'bg-[#121620] border-[#1e2738] text-[#475569]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isPassed ? 'text-[#10b981]' : isCurrent ? 'text-[#f59e0b]' : 'text-[#475569]'}`} />
                      <div>
                        <div className="font-bold">{step.label}</div>
                        <div className="text-[10px] text-[#64748b]">{step.detail}</div>
                      </div>
                    </div>

                    <div>
                      {isPassed ? (
                        <span className="flex items-center gap-1 text-[11px] font-bold text-[#10b981]">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>PASSED</span>
                        </span>
                      ) : isCurrent ? (
                        <span className="text-[10px] text-[#f59e0b]">CHECKING...</span>
                      ) : (
                        <span className="text-[10px] text-[#475569]">PENDING</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Overall Verdict Banner */}
            {completed && (
              <div className="mt-4 p-3 bg-[#10b981]/15 border border-[#10b981] rounded text-center text-xs font-bold text-[#10b981] animate-fade-in">
                ✓ RECORD INTEGRITY CONFIRMED: ZERO TAMPERING DETECTED
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
