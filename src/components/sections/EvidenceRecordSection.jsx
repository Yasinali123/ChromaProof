import React, { useState } from 'react';
import { 
  FileCheck2, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  User, 
  Lock, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink,
  QrCode,
  Printer
} from 'lucide-react';
import { INITIAL_EVIDENCE_RECORDS } from '../../data/evidenceData';

export default function EvidenceRecordSection() {
  const [copiedHash, setCopiedHash] = useState(false);
  const record = INITIAL_EVIDENCE_RECORDS[0]; // CP-2026-000184

  const handleCopyHash = () => {
    navigator.clipboard.writeText(record.imageHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  return (
    <section id="evidence-record" className="py-16 bg-[#0e121a] border-b border-[#242c3d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#16201b] border border-[#10b981]/40 rounded text-xs font-mono text-[#6ee7b7] mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" />
              <span>DIGITAL EVIDENCE ATTESTATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f8fafc] tracking-tight">
              Cryptographically Sealed Evidence Record
            </h2>
            <p className="mt-2 text-sm text-[#8b99ae] max-w-2xl font-mono">
              Complete verifiable audit document generated on-device at the moment of capture.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3 font-mono text-xs">
            <button 
              onClick={() => window.print()} 
              className="px-3 py-1.5 bg-[#161c28] border border-[#242c3d] hover:border-[#3a465d] text-[#e2e8f0] rounded flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>EXPORT REPORT</span>
            </button>
          </div>
        </div>

        {/* Forensic Evidence Record Container (Card UI) */}
        <div className="bg-[#0b0e14] border-2 border-[#242c3d] rounded-lg p-6 sm:p-8 shadow-2xl relative">
          
          {/* Top Stamp / Header Bar */}
          <div className="flex flex-wrap items-center justify-between border-b-2 border-[#242c3d] pb-4 mb-6 gap-4 font-mono">
            <div>
              <div className="text-[10px] text-[#f59e0b] font-bold tracking-widest uppercase">
                FORM 63-A / BHARATIYA SAKSHYA ADHINIYAM COMPLIANT
              </div>
              <h3 className="text-xl font-extrabold text-[#f8fafc] tracking-wide mt-0.5">
                FIELD TEST RECORD
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-3 py-1 bg-[#10b981]/10 border border-[#10b981]/50 rounded text-xs text-[#10b981] font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>INTEGRITY VERIFIED</span>
              </div>
              <div className="text-right text-[11px] text-[#64748b]">
                EVIDENCE ID: <strong className="text-[#f8fafc]">{record.id}</strong>
              </div>
            </div>
          </div>

          {/* Main Attributes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 font-mono">
            
            {/* Column 1: Test Output */}
            <div className="p-4 bg-[#121722] border border-[#242c3d] rounded-lg space-y-3">
              <div className="text-[10px] text-[#64748b] tracking-wider uppercase">TEST OUTCOME</div>
              <div>
                <span className="text-xs text-[#8b99ae]">CLASSIFICATION:</span>
                <div className="text-2xl font-black text-[#10b981] tracking-wide">{record.result}</div>
              </div>

              <div className="pt-2 border-t border-[#1e2738] flex justify-between text-xs">
                <span className="text-[#8b99ae]">Confidence Score:</span>
                <span className="text-[#fbbf24] font-bold">{record.confidence}%</span>
              </div>

              <div className="flex justify-between text-xs">
                <span className="text-[#8b99ae]">CIEDE2000 (ΔE):</span>
                <span className="text-[#e2e8f0] font-semibold">{record.deltaE}</span>
              </div>

              <div className="flex justify-between text-xs">
                <span className="text-[#8b99ae]">Kit Profile:</span>
                <span className="text-[#38bdf8]">{record.kitProfile}</span>
              </div>
            </div>

            {/* Column 2: Context Metadata */}
            <div className="p-4 bg-[#121722] border border-[#242c3d] rounded-lg space-y-3">
              <div className="text-[10px] text-[#64748b] tracking-wider uppercase">FIELD METADATA</div>
              
              <div className="flex items-center gap-2 text-xs">
                <Clock className="w-4 h-4 text-[#f59e0b]" />
                <div>
                  <div className="text-[10px] text-[#64748b]">TIMESTAMP (UTC+5:30)</div>
                  <div className="text-[#e2e8f0] font-semibold">{record.timestamp}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs pt-1">
                <MapPin className="w-4 h-4 text-[#10b981]" />
                <div>
                  <div className="text-[10px] text-[#64748b]">GPS FIX (PRECISION ±2.4M)</div>
                  <div className="text-[#e2e8f0] font-semibold">{record.gps.lat} {record.gps.lng}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs pt-1">
                <User className="w-4 h-4 text-[#38bdf8]" />
                <div>
                  <div className="text-[10px] text-[#64748b]">OPERATOR ATTRIBUTION</div>
                  <div className="text-[#e2e8f0] font-semibold">{record.officer} ({record.unit})</div>
                </div>
              </div>
            </div>

            {/* Column 3: Cryptographic Proof */}
            <div className="p-4 bg-[#121722] border border-[#242c3d] rounded-lg space-y-3">
              <div className="text-[10px] text-[#64748b] tracking-wider uppercase">CRYPTOGRAPHIC SEAL</div>
              
              <div>
                <div className="flex items-center justify-between text-[10px] text-[#8b99ae]">
                  <span>SHA-256 IMAGE DIGEST</span>
                  <button onClick={handleCopyHash} className="text-[#f59e0b] hover:underline flex items-center gap-1">
                    {copiedHash ? <Check className="w-3 h-3 text-[#10b981]" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedHash ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>
                <div className="p-2 bg-[#0b0e14] border border-[#242c3d] rounded text-[10px] text-[#fbbf24] break-all font-mono mt-1">
                  {record.imageHash}
                </div>
              </div>

              <div>
                <div className="text-[10px] text-[#8b99ae]">ECDSA P-256 SIGNATURE</div>
                <div className="p-1.5 bg-[#0b0e14] border border-[#242c3d] rounded text-[10px] text-[#10b981] font-mono mt-0.5 truncate">
                  {record.signature}
                </div>
              </div>
            </div>

          </div>

          {/* Visual "Chain of Custody" Timeline */}
          <div className="border-t-2 border-[#242c3d] pt-6 font-mono">
            <div className="text-xs font-bold text-[#f59e0b] tracking-wider mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#f59e0b]" />
              <span>CHAIN OF CUSTODY TIMELINE</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
              {record.timeline.map((item, idx) => (
                <div key={idx} className="p-3 bg-[#131824] border border-[#242c3d] rounded relative">
                  <div className="text-[10px] font-bold text-[#f59e0b]">{item.time.split(' ')[0]}</div>
                  <div className="text-xs font-bold text-[#e2e8f0] my-0.5">{item.event}</div>
                  <div className="text-[10px] text-[#7d8b9e] leading-tight">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
