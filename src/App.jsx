import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import TopHeader from './components/layout/TopHeader';
import HeroSection from './components/sections/HeroSection';
import EvidenceStatusBar from './components/sections/EvidenceStatusBar';
import ProblemSection from './components/sections/ProblemSection';
import CoreWorkflowSection from './components/sections/CoreWorkflowSection';
import CalibrationDemoSection from './components/sections/CalibrationDemoSection';
import EvidenceRecordSection from './components/sections/EvidenceRecordSection';
import TamperEvidenceSection from './components/sections/TamperEvidenceSection';
import OfflineSection from './components/sections/OfflineSection';
import SecurityArchitectureSection from './components/sections/SecurityArchitectureSection';
import ResultStatesSection from './components/sections/ResultStatesSection';
import KitProfileSection from './components/sections/KitProfileSection';
import EvidenceLogSection from './components/sections/EvidenceLogSection';
import BeneficiariesSection from './components/sections/BeneficiariesSection';
import ImpactSection from './components/sections/ImpactSection';
import ResearchSection from './components/sections/ResearchSection';
import { DisclaimerSection, Footer } from './components/sections/DisclaimerSection';
import LiveFieldTestModal from './components/demo/LiveFieldTestModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const handleOpenDemo = () => setDemoModalOpen(true);
  const handleCloseDemo = () => setDemoModalOpen(false);

  return (
    <div className="flex min-h-screen bg-[#0b0e14] text-[#e2e8f0]">
      
      {/* Desktop Navigation Rail */}
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        onOpenDemo={handleOpenDemo}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Header Bar */}
        <TopHeader 
          onOpenDemo={handleOpenDemo} 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
        />

        {/* Major Forensic Product Sections */}
        <main className="flex-1">
          <HeroSection onOpenDemo={handleOpenDemo} />
          <EvidenceStatusBar />
          <ProblemSection />
          <CoreWorkflowSection />
          <CalibrationDemoSection />
          <EvidenceRecordSection />
          <TamperEvidenceSection />
          <OfflineSection />
          <SecurityArchitectureSection />
          <ResultStatesSection />
          <KitProfileSection />
          <EvidenceLogSection />
          <BeneficiariesSection />
          <ImpactSection />
          <ResearchSection />
          <DisclaimerSection />
        </main>

        {/* System Footer */}
        <Footer />

      </div>

      {/* Live Interactive Field Simulator Modal */}
      <LiveFieldTestModal 
        isOpen={demoModalOpen} 
        onClose={handleCloseDemo} 
      />

    </div>
  );
}
