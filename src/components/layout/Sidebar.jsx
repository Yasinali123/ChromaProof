import React from 'react';
import { 
  Shield, 
  Workflow, 
  Sliders, 
  FileText, 
  Lock, 
  Database, 
  Cpu, 
  BookOpen, 
  Award,
  Layers,
  HelpCircle,
  Play
} from 'lucide-react';

export default function Sidebar({ activeSection, setActiveSection, onOpenDemo }) {
  const navItems = [
    { id: 'hero', label: 'OVERVIEW', icon: Shield, code: '01' },
    { id: 'workflow', label: 'WORKFLOW', icon: Workflow, code: '02' },
    { id: 'calibration', label: 'CALIBRATION DEMO', icon: Sliders, code: '03' },
    { id: 'evidence-record', label: 'EVIDENCE RECORD', icon: FileText, code: '04' },
    { id: 'tamper-integrity', label: 'TAMPER VERIFICATION', icon: Lock, code: '05' },
    { id: 'evidence-log', label: 'EVIDENCE LOG', icon: Database, code: '06' },
    { id: 'result-states', label: 'RESULT STATES', icon: Layers, code: '07' },
    { id: 'security', label: 'SECURITY ARCH', icon: Cpu, code: '08' },
    { id: 'research', label: 'RESEARCH & STANDARDS', icon: BookOpen, code: '09' },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-[#0e121a] border-r border-[#242c3d] h-screen sticky top-0 z-40 select-none">
      {/* Brand Header */}
      <div className="p-4 border-b border-[#242c3d] bg-[#0b0e14]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded bg-[#1a2333] border border-[#f59e0b]/40 flex items-center justify-center text-[#f59e0b]">
            <Shield className="w-4 h-4" />
          </div>
          <div>
            <div className="font-mono text-xs tracking-wider text-[#f59e0b] font-semibold flex items-center gap-1.5">
              <span>CHROMAPROOF</span>
              <span className="text-[10px] px-1 py-0.2 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded text-[#fbbf24]">v2.4</span>
            </div>
            <div className="text-[10px] text-[#7d8b9e] font-mono tracking-tight uppercase">
              Field Evidence System
            </div>
          </div>
        </div>

        {/* System Status Micro-pill */}
        <div className="mt-3 px-2.5 py-1 bg-[#141923] border border-[#242c3d] rounded flex items-center justify-between text-[11px] font-mono text-[#8b99ae]">
          <span className="flex items-center gap-1.5 text-[#10b981]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"></span>
            SYS_READY
          </span>
          <span className="text-[10px] text-[#5b687a]">ECDSA_OK</span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        <div className="text-[10px] font-mono text-[#5b687a] px-3 py-1 uppercase tracking-wider">
          System Modules
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded text-xs font-mono transition-all group ${
                isActive
                  ? 'bg-[#1b2230] text-[#fbbf24] border-l-2 border-[#f59e0b] font-medium shadow-sm'
                  : 'text-[#94a3b8] hover:bg-[#151b26] hover:text-[#e2e8f0]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Icon className={`w-3.5 h-3.5 transition-colors ${isActive ? 'text-[#f59e0b]' : 'text-[#5b687a] group-hover:text-[#94a3b8]'}`} />
                <span>{item.label}</span>
              </div>
              <span className="text-[10px] text-[#475569] group-hover:text-[#64748b]">{item.code}</span>
            </button>
          );
        })}
      </nav>

      {/* Quick Interactive CTA */}
      <div className="p-3 border-t border-[#242c3d] bg-[#0b0e14]">
        <button
          onClick={onOpenDemo}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-3 bg-[#f59e0b] hover:bg-[#d97706] text-[#0b0e14] font-mono font-semibold text-xs rounded transition-colors shadow-lg shadow-[#f59e0b]/10"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>OPEN DEMO SIMULATOR</span>
        </button>

        <div className="mt-2 text-[10px] text-center font-mono text-[#5b687a] flex items-center justify-center gap-1">
          <HelpCircle className="w-3 h-3 text-[#5b687a]" />
          <span>Presumptive Test Protocol</span>
        </div>
      </div>
    </aside>
  );
}
