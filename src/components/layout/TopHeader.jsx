import React, { useState, useEffect } from 'react';
import { Shield, Play, Menu, X, Terminal, Radio, Lock } from 'lucide-react';

export default function TopHeader({ onOpenDemo, activeSection, setActiveSection }) {
  const [timeStr, setTimeStr] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Overview' },
    { id: 'workflow', label: 'Workflow' },
    { id: 'calibration', label: 'Calibration' },
    { id: 'evidence-record', label: 'Evidence' },
    { id: 'security', label: 'Security' },
    { id: 'research', label: 'Research' },
  ];

  const handleMobileNav = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-[#0b0e14]/90 backdrop-blur-md border-b border-[#242c3d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        
        {/* Left Mobile Brand / Desktop Header */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-[#1a202c] border border-[#f59e0b]/50 flex items-center justify-center text-[#f59e0b]">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <span className="font-mono text-xs font-bold text-[#f8fafc] tracking-wider">CHROMAPROOF</span>
              <span className="hidden sm:inline-block ml-2 text-[10px] font-mono text-[#64748b]">/ FIELD EVIDENCE SYSTEM</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 px-2 py-0.5 bg-[#161c28] border border-[#242c3d] rounded text-[10px] font-mono text-[#8b99ae]">
            <Radio className="w-3 h-3 text-[#10b981] animate-pulse" />
            <span>MODE: HYBRID-OFFLINE</span>
          </div>
        </div>

        {/* Center Technical Clock & System Info */}
        <div className="hidden xl:flex items-center gap-4 text-[11px] font-mono text-[#64748b]">
          <div className="flex items-center gap-1.5 bg-[#121620] px-2.5 py-1 rounded border border-[#1e2738]">
            <Terminal className="w-3 h-3 text-[#f59e0b]" />
            <span className="text-[#94a3b8]">{timeStr || '2026-09-30 23:51:56 UTC'}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#121620] px-2.5 py-1 rounded border border-[#1e2738]">
            <Lock className="w-3 h-3 text-[#10b981]" />
            <span className="text-[#10b981]">ECDSA P-256</span>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenDemo}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f59e0b] hover:bg-[#d97706] text-[#0b0e14] font-mono text-xs font-semibold rounded transition-all shadow-md shadow-[#f59e0b]/10"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>OPEN DEMO</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#94a3b8] hover:text-[#f8fafc] focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e121a] border-b border-[#242c3d] px-4 py-3 space-y-2">
          <div className="text-[10px] font-mono text-[#64748b] uppercase tracking-wider mb-2">
            Navigation Rail
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMobileNav(item.id)}
              className="w-full text-left px-3 py-2 text-xs font-mono text-[#94a3b8] hover:bg-[#1a202c] hover:text-[#fbbf24] rounded flex items-center justify-between"
            >
              <span>{item.label}</span>
              <span className="text-[10px] text-[#475569]">SEC</span>
            </button>
          ))}
          <div className="pt-2 border-t border-[#242c3d] flex items-center justify-between text-[10px] font-mono text-[#64748b]">
            <span>STATUS: OFFLINE READY</span>
            <span>SHA-256 INTEGRITY</span>
          </div>
        </div>
      )}
    </header>
  );
}
