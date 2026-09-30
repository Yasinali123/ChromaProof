import React from 'react';
import { CheckCircle2, ArrowRight, Camera, Sliders, Cpu, Hash, Key, CloudCheck } from 'lucide-react';

export default function EvidenceStatusBar() {
  const steps = [
    {
      stage: 'CAPTURE',
      status: 'Image received',
      code: 'RAW_3840x2160',
      icon: Camera,
    },
    {
      stage: 'CALIBRATION',
      status: 'Reference card detected',
      code: 'ArUco_24P_OK',
      icon: Sliders,
    },
    {
      stage: 'CLASSIFICATION',
      status: 'Confidence threshold passed',
      code: 'ΔE2000_3.42',
      icon: Cpu,
    },
    {
      stage: 'INTEGRITY',
      status: 'SHA-256 generated',
      code: 'HASH_a91f3c8e',
      icon: Hash,
    },
    {
      stage: 'SIGNATURE',
      status: 'ECDSA verified',
      code: 'KEYSTORE_P256',
      icon: Key,
    },
    {
      stage: 'SYNC',
      status: 'Record synchronized',
      code: 'TLS1.3_AUDIT_OK',
      icon: CloudCheck,
    },
  ];

  return (
    <section className="bg-[#0e121a] border-y border-[#242c3d] py-6 select-none overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chain Title & Metatag */}
        <div className="flex items-center justify-between mb-4 font-mono text-[11px] text-[#64748b]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10b981]" />
            <span className="text-[#e2e8f0] font-semibold tracking-wider">EVIDENCE CHAIN OF CUSTODY PIPELINE</span>
          </div>
          <div className="hidden sm:block text-[10px] text-[#5b687a]">
            SEQUENCE: IMAGE → MEASUREMENT → RESULT → HASH → SIGNATURE → RECORD
          </div>
        </div>

        {/* Timeline Horizontal Chain Visual */}
        <div className="flex items-center justify-between min-w-[780px] gap-2">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={step.stage}>
                
                {/* Stage Node */}
                <div className="flex-1 bg-[#141a26] border border-[#242c3d] hover:border-[#f59e0b]/50 rounded p-3 transition-colors group">
                  <div className="flex items-center justify-between font-mono text-[10px] text-[#64748b] mb-1.5">
                    <span className="font-bold text-[#f59e0b] group-hover:text-[#fbbf24]">{step.stage}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-3.5 h-3.5 text-[#94a3b8]" />
                    <span className="text-xs font-semibold text-[#f1f5f9] leading-tight">{step.status}</span>
                  </div>
                  <div className="font-mono text-[9px] text-[#475569] bg-[#0b0e14] px-1.5 py-0.5 rounded w-fit border border-[#1e2738]">
                    {step.code}
                  </div>
                </div>

                {/* Connector Arrow */}
                {idx < steps.length - 1 && (
                  <div className="flex items-center justify-center px-1 text-[#334155]">
                    <ArrowRight className="w-4 h-4 text-[#f59e0b]/70 animate-pulse" />
                  </div>
                )}

              </React.Fragment>
            );
          })}
        </div>

      </div>
    </section>
  );
}
