import React, { useState } from 'react';
import { 
  Camera, 
  Sliders, 
  Cpu, 
  Key, 
  Database, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  Lock, 
  CloudCheck,
  Zap,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function CoreWorkflowSection() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      code: '01',
      title: 'CAPTURE',
      subtitle: 'Guided Field Acquisition',
      icon: Camera,
      badge: 'OFFLINE FIRST',
      points: [
        'Real-time ArUco 24-patch card bounding detection',
        'Automatic blur & motion vector check (< 0.05 px blur)',
        'Specular glare threshold detection algorithm',
        'Exposure lock with sensor lux verification',
        'Zero-network operational capability'
      ],
      visualDetail: {
        header: 'GUIDED CAMERA FEED',
        status: 'EXPOSURE_OK / NO_GLARE',
        metric: 'TARGET_FOUND_ARUCO_42',
        content: 'Camera view aligns test tube and reference palette under strict focus bounds.'
      }
    },
    {
      code: '02',
      title: 'CALIBRATE',
      subtitle: 'OpenCV Chromatic Pipeline',
      icon: Sliders,
      badge: 'OPENCV C++',
      points: [
        'Reference card patch location extraction',
        'Multi-patch White Balance & illuminant normalization',
        'sRGB to CIELAB perceptual space transformation',
        'Reagent region-of-interest (ROI) isolation',
        'Ambient lighting temperature compensation'
      ],
      visualDetail: {
        header: 'CIELAB COLOR SPACE',
        status: 'ILLUMINANT_D65_NORM',
        metric: 'LAB: L:14.5 a:12.1 b:-18.3',
        content: 'Transforms raw sensor RGB into illumination-independent CIELAB color vectors.'
      }
    },
    {
      code: '03',
      title: 'CLASSIFY',
      subtitle: 'Dual Engine Safety Decision',
      icon: Cpu,
      badge: 'ΔE2000 + TFLITE',
      points: [
        'Primary: CIEDE2000 mathematical color difference (ΔE2000)',
        'Secondary: TensorFlow Lite MobileNet CNN second opinion',
        'Three-Way State Output: POSITIVE / NEGATIVE / INCONCLUSIVE',
        'Low confidence (< 85%) automatically triggers INCONCLUSIVE',
        'Prevents dangerous binary false positives under ambiguous conditions'
      ],
      visualDetail: {
        header: 'SAFETY ENGINE THRESHOLD',
        status: 'CONFIDENCE: 96.8%',
        metric: 'ΔE2000 = 3.42 (< 12.0 CUTOFF)',
        content: 'If confidence drops or glare is detected, system forces INCONCLUSIVE.'
      }
    },
    {
      code: '04',
      title: 'SIGN',
      subtitle: 'Cryptographic Attestation',
      icon: Key,
      badge: 'ECDSA P-256',
      points: [
        'SHA-256 cryptographic digest of raw photo + metadata',
        'UTC high-precision millisecond timestamp',
        'GPS spatial coordinates with satellite dilution of precision',
        'Officer ID & device hardware serial attestation',
        'Hardware-backed Android Keystore ECDSA signature'
      ],
      visualDetail: {
        header: 'DIGITAL RECORD SEAL',
        status: 'HASH: SHA-256 OK',
        metric: 'ECDSA_VERIFIED',
        content: 'Generates unforgeable digital signature inside hardware secure enclave.'
      }
    },
    {
      code: '05',
      title: 'LOG + SYNC',
      subtitle: 'Encrypted Chain & Audit',
      icon: Database,
      badge: 'SQLCIPHER + TLS 1.3',
      points: [
        'Local encrypted database storage (SQLCipher AES-256)',
        'Tamper-evident hash chaining between sequential records',
        'Automated background sync when network becomes available',
        'Immutable server audit log for court record verification'
      ],
      visualDetail: {
        header: 'CENTRAL AUDIT SYNC',
        status: 'SYNCED_TO_AUDIT_DB',
        metric: 'RECORD_CP-2026-000184',
        content: 'Provides court-ready evidentiary trail accessible by prosecutors and labs.'
      }
    }
  ];

  return (
    <section id="workflow" className="py-16 bg-[#0e121a] border-b border-[#242c3d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a202c] border border-[#f59e0b]/40 rounded text-xs font-mono text-[#fbbf24] mb-3">
              <Layers className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>CORE ARCHITECTURAL PIPELINE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f8fafc] tracking-tight">
              Five-Stage Evidence Construction
            </h2>
            <p className="mt-2 text-sm text-[#8b99ae] max-w-2xl font-mono">
              From raw optical acquisition to cryptographically signed court records.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2 font-mono text-xs text-[#64748b]">
            <span className="w-2 h-2 rounded-full bg-[#10b981]" />
            <span>INTERACTIVE STAGE SELECTOR</span>
          </div>
        </div>

        {/* 5 Stage Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8 font-mono">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isActive = activeStage === idx;
            return (
              <button
                key={stage.code}
                onClick={() => setActiveStage(idx)}
                className={`p-3 rounded border text-left transition-all relative ${
                  isActive
                    ? 'bg-[#182130] border-[#f59e0b] text-[#f8fafc] shadow-lg shadow-[#f59e0b]/5'
                    : 'bg-[#121620] border-[#242c3d] text-[#64748b] hover:border-[#3a465d] hover:text-[#94a3b8]'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] mb-1">
                  <span className="font-bold text-[#f59e0b]">{stage.code}</span>
                  <span className="text-[9px] px-1 py-0.2 bg-[#0b0e14] border border-[#242c3d] rounded text-[#8b99ae]">
                    {stage.badge}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold truncate">
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#f59e0b]' : 'text-[#5b687a]'}`} />
                  <span>{stage.title}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Showcase */}
        {(() => {
          const stage = stages[activeStage];
          const StageIcon = stage.icon;
          return (
            <div className="bg-[#121722] border-2 border-[#242c3d] rounded-lg p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Stage Specs & Points */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#1a2333] border border-[#f59e0b]/50 flex items-center justify-center text-[#f59e0b]">
                    <StageIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-[#f59e0b] font-bold">
                      STAGE {stage.code} — {stage.title}
                    </div>
                    <h3 className="text-xl font-bold text-[#f8fafc]">{stage.subtitle}</h3>
                  </div>
                </div>

                <ul className="space-y-2.5 pt-2">
                  {stage.points.map((pt, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#cbd5e1]">
                      <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Inconclusive Warning Callout for Stage 03 */}
                {stage.code === '03' && (
                  <div className="mt-4 p-3 bg-[#1c1811] border border-[#f59e0b]/40 rounded text-xs font-mono text-[#fbbf24] flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#f8fafc]">SAFETY GUARANTEE:</strong> Low confidence or poor illumination automatically forces <strong>INCONCLUSIVE</strong>. The system will never force an officer into an ambiguous binary choice.
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Visual Technical Representation */}
              <div className="lg:col-span-5 bg-[#0b0e14] border border-[#242c3d] rounded-lg p-5 font-mono">
                <div className="flex items-center justify-between border-b border-[#242c3d] pb-2 mb-3 text-[10px]">
                  <span className="text-[#f59e0b] font-bold">{stage.visualDetail.header}</span>
                  <span className="text-[#10b981]">{stage.visualDetail.status}</span>
                </div>

                {/* Simulated Process Graphic */}
                <div className="p-4 bg-[#141a26] border border-[#1e2738] rounded text-center space-y-3">
                  <div className="text-xs font-bold text-[#38bdf8] bg-[#0b0e14] py-1 px-2 rounded border border-[#242c3d] inline-block">
                    {stage.visualDetail.metric}
                  </div>
                  <p className="text-[11px] text-[#94a3b8] leading-relaxed">
                    {stage.visualDetail.content}
                  </p>
                </div>

                {/* Workflow Sequence Construction Graphic */}
                <div className="mt-4 pt-3 border-t border-[#242c3d] text-[10px] text-[#64748b] flex items-center justify-between">
                  <span>CHAIN ID: CP-SEQ-{stage.code}</span>
                  <span className="text-[#10b981]">STATUS: VERIFIED</span>
                </div>
              </div>

            </div>
          );
        })()}

      </div>
    </section>
  );
}
