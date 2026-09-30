import React from 'react';
import { Users, Shield, Microscope, Gavel, BarChart3, ArrowRight } from 'lucide-react';

export default function BeneficiariesSection() {
  const nodes = [
    {
      title: 'FIELD OFFICERS',
      subtitle: 'Objective, repeatable field workflow',
      icon: Shield,
      points: [
        'Eliminates visual ambiguity under harsh lighting',
        'Standardized 24-patch card calibration',
        'Guided workflow reduces protocol errors',
        'Offline resilience for remote operations'
      ]
    },
    {
      title: 'FORENSIC LABS',
      subtitle: 'Better-triaged samples',
      icon: Microscope,
      points: [
        'Pre-screened presumptive test metrics (ΔE2000)',
        'Reduces backlog by triaging clear negative/inconclusive samples',
        'Standardized photo records attached to physical evidence',
        'Raw CIELAB color vector data import'
      ]
    },
    {
      title: 'PROSECUTORS & COURTS',
      subtitle: 'Verifiable digital evidence',
      icon: Gavel,
      points: [
        'BSA 2023 / Section 63 electronic admissibility',
        'Tamper-evident SHA-256 image digest seal',
        'Hardware Keystore ECDSA signature attribution',
        'Immutable chain-of-custody timeline'
      ]
    },
    {
      title: 'POLICY MAKERS',
      subtitle: 'Searchable, auditable data',
      icon: BarChart3,
      points: [
        'Regional illicit drug prevalence heatmaps',
        'Real-time seizure telemetry across jurisdictions',
        'Auditable evidence metrics for government oversight',
        'Zero paper log loss or record tampering'
      ]
    }
  ];

  return (
    <section id="beneficiaries" className="py-16 bg-[#0b0e14] border-b border-[#242c3d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a202c] border border-[#f59e0b]/40 rounded text-xs font-mono text-[#fbbf24] mb-3">
            <Users className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>STAKEHOLDER INTEGRATION NETWORK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f8fafc] tracking-tight">
            Interconnected Ecosystem Beneficiaries
          </h2>
          <p className="mt-3 text-sm text-[#8b99ae] font-mono leading-relaxed">
            Connecting frontline seizure operations with forensic laboratory analysis, court proceedings, and legislative policy.
          </p>
        </div>

        {/* Central Interconnection Flow Ribbon */}
        <div className="mb-10 p-4 bg-[#141a26] border border-[#242c3d] rounded-lg font-mono text-xs text-[#8b99ae] flex flex-wrap items-center justify-between gap-3">
          <span className="text-[#f59e0b] font-bold">SYSTEM FLOW PROTOCOL:</span>
          <div className="flex items-center gap-2 font-bold text-[#e2e8f0]">
            <span>FIELD TEST</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>DIGITAL RECORD</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#10b981]" />
            <span>VERIFICATION</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>AUDITABILITY</span>
          </div>
        </div>

        {/* 4 Connected Nodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono">
          {nodes.map((node) => {
            const Icon = node.icon;
            return (
              <div key={node.title} className="bg-[#121620] border-2 border-[#242c3d] hover:border-[#f59e0b]/50 rounded-lg p-6 flex flex-col justify-between transition-colors">
                <div>
                  <div className="w-10 h-10 rounded bg-[#1a2333] border border-[#f59e0b]/50 flex items-center justify-center text-[#f59e0b] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#f8fafc] tracking-wide mb-1">{node.title}</h3>
                  <div className="text-xs text-[#f59e0b] font-semibold mb-4">{node.subtitle}</div>

                  <ul className="space-y-2 text-xs text-[#94a3b8]">
                    {node.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] mt-1 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
