import React from 'react';
import { BookOpen, ExternalLink, ShieldCheck, Scale, Award } from 'lucide-react';
import { RESEARCH_REFERENCES } from '../../data/evidenceData';

export default function ResearchSection() {
  return (
    <section id="research" className="py-16 bg-[#0b0e14] border-b border-[#242c3d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a202c] border border-[#f59e0b]/40 rounded text-xs font-mono text-[#fbbf24] mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>FORENSIC STANDARDS &amp; LEGAL BENCHMARKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f8fafc] tracking-tight">
              Research &amp; Standards Bibliography
            </h2>
            <p className="mt-3 text-sm text-[#8b99ae] max-w-2xl font-mono">
              ChromaProof algorithms align directly with published international forensic protocols and national legal evidentiary mandates.
            </p>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs text-[#10b981] flex items-center gap-2">
            <Scale className="w-4 h-4 text-[#10b981]" />
            <span>STATUTORY COMPLIANT</span>
          </div>
        </div>

        {/* References List in Citation Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono">
          {RESEARCH_REFERENCES.map((ref) => (
            <div
              key={ref.id}
              className="p-5 bg-[#121620] border border-[#242c3d] hover:border-[#f59e0b]/50 rounded-lg space-y-3 transition-colors group"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#f59e0b] group-hover:text-[#fbbf24]">{ref.id}</span>
                <span className="text-[10px] px-2 py-0.5 bg-[#0b0e14] border border-[#242c3d] rounded text-[#7d8b9e]">
                  {ref.citation}
                </span>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#f8fafc] leading-snug">{ref.title}</h3>
                <div className="text-[11px] text-[#8b99ae] mt-0.5">{ref.authors} — <em>{ref.source}</em></div>
              </div>

              <p className="text-xs text-[#cbd5e1] bg-[#0b0e14] p-3 border border-[#1e2738] rounded leading-relaxed">
                <strong>Algorithmic Relevance:</strong> {ref.keyInsight}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
