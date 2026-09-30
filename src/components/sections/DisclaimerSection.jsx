import React from 'react';
import { AlertTriangle, ShieldCheck, Scale, FileText } from 'lucide-react';

export function DisclaimerSection() {
  return (
    <section className="bg-[#18130e] border-y-2 border-[#f59e0b] py-8 font-mono select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-[#0b0e14] border border-[#f59e0b]/40 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#2a1e12] border border-[#f59e0b] flex items-center justify-center text-[#f59e0b] shrink-0">
              <AlertTriangle className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#f59e0b] tracking-wider uppercase">
                IMPORTANT FORENSIC NOTICE &amp; STATUTORY LIMITATION
              </div>
              <p className="text-sm font-semibold text-[#f8fafc] mt-0.5 leading-snug">
                "ChromaProof produces a presumptive field-test result with a supporting digital record. It does not replace laboratory confirmatory testing."
              </p>
            </div>
          </div>

          <div className="shrink-0 text-right text-[10px] text-[#8b99ae] bg-[#141924] px-3 py-2 border border-[#242c3d] rounded">
            <span>PRESUMPTIVE TEST PROTOCOL</span> <br />
            <span className="text-[#10b981] font-bold">GC-MS MANDATORY FOR COURT CONFIRMATION</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#07090e] border-t border-[#242c3d] py-12 font-mono text-xs text-[#64748b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-[#1e2738]">
          <div>
            <div className="flex items-center gap-2 text-[#f8fafc] font-bold text-sm mb-2">
              <ShieldCheck className="w-4 h-4 text-[#f59e0b]" />
              <span>CHROMAPROOF</span>
            </div>
            <p className="text-[11px] text-[#7d8b9e] leading-relaxed">
              Objective, Tamper-Evident Field Drug-Test Recording System for Law Enforcement &amp; Forensic Agencies.
            </p>
          </div>

          <div>
            <div className="text-[#e2e8f0] font-bold text-xs mb-2 uppercase tracking-wider">Legal Framework</div>
            <ul className="space-y-1 text-[11px] text-[#7d8b9e]">
              <li>NDPS Act 1985 (Section 52A)</li>
              <li>Bharatiya Sakshya Adhiniyam 2023</li>
              <li>NIST FIPS 186-5 ECDSA</li>
              <li>NIST FIPS 180-4 SHA-256</li>
            </ul>
          </div>

          <div>
            <div className="text-[#e2e8f0] font-bold text-xs mb-2 uppercase tracking-wider">Vision Engine</div>
            <ul className="space-y-1 text-[11px] text-[#7d8b9e]">
              <li>CIEDE2000 (ΔE2000 Distance)</li>
              <li>ArUco 24-Patch Card Calibration</li>
              <li>TensorFlow Lite MobileNet CNN</li>
              <li>OpenCV C++ Pipeline</li>
            </ul>
          </div>

          <div>
            <div className="text-[#e2e8f0] font-bold text-xs mb-2 uppercase tracking-wider">System Info</div>
            <div className="p-3 bg-[#0b0e14] border border-[#1e2738] rounded space-y-1 text-[10px]">
              <div className="flex justify-between">
                <span>Version:</span>
                <span className="text-[#f59e0b]">v2.4.0-RELEASE</span>
              </div>
              <div className="flex justify-between">
                <span>Digest Engine:</span>
                <span className="text-[#10b981]">SHA-256</span>
              </div>
              <div className="flex justify-between">
                <span>Sign Engine:</span>
                <span className="text-[#38bdf8]">ECDSA P-256</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] text-[#475569] gap-2">
          <div>
            © 2026 CHROMAPROOF FORENSIC SYSTEMS. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <span>OFFICIAL FIELD PROTOTYPE</span>
            <span>FOR EVALUATION &amp; DEMONSTRATION</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
