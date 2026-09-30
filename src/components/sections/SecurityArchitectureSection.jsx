import React from 'react';
import { Cpu, Lock, Database, Server, Key, ArrowRight, ShieldCheck, HardDrive, Smartphone } from 'lucide-react';

export default function SecurityArchitectureSection() {
  const flowNodes = [
    { label: 'FIELD DEVICE', tech: 'Panasonic / Toughbook', icon: Smartphone },
    { label: 'CAPTURE', tech: 'Guided Camera API', icon: ShieldCheck },
    { label: 'VISION PIPELINE', tech: 'OpenCV C++ (CIELAB)', icon: Cpu },
    { label: 'CLASSIFICATION', tech: 'ΔE2000 + TFLite', icon: Cpu },
    { label: 'CRYPTOGRAPHIC RECORD', tech: 'SHA-256 + ECDSA P-256', icon: Key },
    { label: 'ENCRYPTED LOCAL LOG', tech: 'SQLCipher AES-256', icon: HardDrive },
    { label: 'SECURE API', tech: 'FastAPI (Python 3.11)', icon: Server },
    { label: 'POSTGRESQL', tech: 'PostgreSQL Audit DB', icon: Database },
  ];

  return (
    <section id="security" className="py-16 bg-[#0b0e14] border-b border-[#242c3d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a202c] border border-[#f59e0b]/40 rounded text-xs font-mono text-[#fbbf24] mb-3">
            <Lock className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>ENTERPRISE & FORENSIC SECURITY SPECIFICATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f8fafc] tracking-tight">
            Security & System Architecture
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#8b99ae] font-mono leading-relaxed">
            Designed to meet national forensic standards and court digital evidence admissibility frameworks.
          </p>
        </div>

        {/* Technical Flow Diagram */}
        <div className="bg-[#10141d] border-2 border-[#242c3d] rounded-lg p-6 sm:p-8 mb-8 font-mono">
          <div className="text-xs text-[#f59e0b] font-bold tracking-wider mb-6 flex items-center justify-between">
            <span>END-TO-END DATA ARCHITECTURE FLOW</span>
            <span className="text-[#10b981]">FIPS 186-5 & FIPS 180-4 CERTIFIED</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {flowNodes.map((node, idx) => {
              const Icon = node.icon;
              return (
                <div key={node.label} className="flex flex-col items-center">
                  <div className="w-full p-3 bg-[#151c28] border border-[#242c3d] rounded text-center hover:border-[#f59e0b]/50 transition-colors h-full flex flex-col justify-between">
                    <div className="flex justify-center mb-2">
                      <div className="w-7 h-7 rounded bg-[#0b0e14] border border-[#f59e0b]/40 flex items-center justify-center text-[#f59e0b]">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div className="text-[10px] font-bold text-[#e2e8f0] leading-tight mb-1">{node.label}</div>
                    <div className="text-[9px] text-[#7d8b9e] bg-[#0b0e14] px-1 py-0.5 rounded border border-[#1e2738]">
                      {node.tech}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Security Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          
          {/* Mobile Client Enclave */}
          <div className="p-5 bg-[#121622] border border-[#242c3d] rounded-lg space-y-3">
            <div className="text-xs text-[#f59e0b] font-bold flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-[#f59e0b]" />
              <span>CLIENT ENVIRONMENT</span>
            </div>
            <ul className="space-y-2 text-[#94a3b8]">
              <li className="flex justify-between border-b border-[#1e2738] pb-1">
                <span>Framework:</span>
                <span className="text-[#e2e8f0]">Flutter (Dart C-bindings)</span>
              </li>
              <li className="flex justify-between border-b border-[#1e2738] pb-1">
                <span>Computer Vision:</span>
                <span className="text-[#e2e8f0]">OpenCV C++ Native</span>
              </li>
              <li className="flex justify-between border-b border-[#1e2738] pb-1">
                <span>CNN Inference:</span>
                <span className="text-[#e2e8f0]">TensorFlow Lite (NPU)</span>
              </li>
              <li className="flex justify-between border-b border-[#1e2738] pb-1">
                <span>Local DB:</span>
                <span className="text-[#e2e8f0]">SQLCipher AES-256</span>
              </li>
              <li className="flex justify-between">
                <span>Key Storage:</span>
                <span className="text-[#10b981]">Android Keystore TEE</span>
              </li>
            </ul>
          </div>

          {/* Backend API Stack */}
          <div className="p-5 bg-[#121622] border border-[#242c3d] rounded-lg space-y-3">
            <div className="text-xs text-[#38bdf8] font-bold flex items-center gap-2">
              <Server className="w-4 h-4 text-[#38bdf8]" />
              <span>BACKEND API & SYNC</span>
            </div>
            <ul className="space-y-2 text-[#94a3b8]">
              <li className="flex justify-between border-b border-[#1e2738] pb-1">
                <span>API Framework:</span>
                <span className="text-[#e2e8f0]">FastAPI Async (Python)</span>
              </li>
              <li className="flex justify-between border-b border-[#1e2738] pb-1">
                <span>Database:</span>
                <span className="text-[#e2e8f0]">PostgreSQL 16 (JSONB)</span>
              </li>
              <li className="flex justify-between border-b border-[#1e2738] pb-1">
                <span>Transport:</span>
                <span className="text-[#e2e8f0]">TLS 1.3 mTLS</span>
              </li>
              <li className="flex justify-between">
                <span>Audit Log:</span>
                <span className="text-[#10b981]">Append-Only Ledger</span>
              </li>
            </ul>
          </div>

          {/* Cryptographic Primitives */}
          <div className="p-5 bg-[#121622] border border-[#242c3d] rounded-lg space-y-3">
            <div className="text-xs text-[#10b981] font-bold flex items-center gap-2">
              <Key className="w-4 h-4 text-[#10b981]" />
              <span>CRYPTOGRAPHIC PRIMITIVES</span>
            </div>
            <ul className="space-y-2 text-[#94a3b8]">
              <li className="flex justify-between border-b border-[#1e2738] pb-1">
                <span>Image Hash:</span>
                <span className="text-[#e2e8f0]">NIST SHA-256</span>
              </li>
              <li className="flex justify-between border-b border-[#1e2738] pb-1">
                <span>Signature:</span>
                <span className="text-[#e2e8f0]">ECDSA secp256r1</span>
              </li>
              <li className="flex justify-between border-b border-[#1e2738] pb-1">
                <span>Timestamp:</span>
                <span className="text-[#e2e8f0]">RFC 3161 TSP Protocol</span>
              </li>
              <li className="flex justify-between">
                <span>Attestation:</span>
                <span className="text-[#10b981]">Hardware TEE Key</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
