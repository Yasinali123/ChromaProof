import React, { useState } from 'react';
import { WifiOff, Wifi, RefreshCw, CheckCircle2, Lock, HardDrive, Database, CloudCheck } from 'lucide-react';

export default function OfflineSection() {
  const [networkState, setNetworkState] = useState('offline'); // 'offline', 'connecting', 'synced'

  const toggleNetwork = () => {
    if (networkState === 'offline') {
      setNetworkState('connecting');
      setTimeout(() => setNetworkState('synced'), 1800);
    } else {
      setNetworkState('offline');
    }
  };

  return (
    <section id="offline-first" className="py-16 bg-[#0e121a] border-b border-[#242c3d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a202c] border border-[#f59e0b]/40 rounded text-xs font-mono text-[#fbbf24] mb-3">
            <WifiOff className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>FIELD RELIABILITY ARCHITECTURE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f8fafc] tracking-tight">
            "Built for the field, not the perfect network."
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#8b99ae] font-mono leading-relaxed">
            Field operations happen in cell deadzones, remote checkpoints, and underground facilities. ChromaProof operates 100% offline using encrypted SQLCipher local logs, hardware signing, and automatic transactional sync when back in range.
          </p>
        </div>

        {/* Interactive Device Offline Simulator */}
        <div className="bg-[#0b0e14] border-2 border-[#242c3d] rounded-lg p-6 sm:p-8 font-mono">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#242c3d] pb-4 mb-6 gap-4">
            <div>
              <div className="text-xs text-[#f59e0b] font-bold">FIELD HANDHELD DEVICE MONITOR</div>
              <div className="text-[11px] text-[#64748b]">HARDWARE: PANASONIC TOUGHBOOK / ANDROID FORENSIC KIT</div>
            </div>

            {/* Interactive Toggle Connection Button */}
            <button
              onClick={toggleNetwork}
              className={`px-4 py-2 rounded text-xs font-bold transition-all flex items-center gap-2 border ${
                networkState === 'offline'
                  ? 'bg-[#1e1414] text-[#fca5a5] border-[#ef4444]/40 hover:bg-[#2a1a1a]'
                  : networkState === 'connecting'
                  ? 'bg-[#1e1b12] text-[#fbbf24] border-[#f59e0b] animate-pulse'
                  : 'bg-[#102018] text-[#6ee7b7] border-[#10b981]/50'
              }`}
            >
              {networkState === 'offline' ? (
                <>
                  <WifiOff className="w-4 h-4 text-[#ef4444]" />
                  <span>SIMULATE NETWORK RECOVERY</span>
                </>
              ) : networkState === 'connecting' ? (
                <>
                  <RefreshCw className="w-4 h-4 text-[#f59e0b] animate-spin" />
                  <span>ESTABLISHING TLS 1.3...</span>
                </>
              ) : (
                <>
                  <Wifi className="w-4 h-4 text-[#10b981]" />
                  <span>SIMULATE NETWORK LOSS</span>
                </>
              )}
            </button>
          </div>

          {/* Status Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            
            {/* Cell 1: Network Status */}
            <div className={`p-4 rounded border ${
              networkState === 'offline' ? 'bg-[#1a1213] border-[#ef4444]/40' : 'bg-[#102018] border-[#10b981]/40'
            }`}>
              <div className="text-[10px] text-[#8b99ae] mb-1">NETWORK STATUS</div>
              <div className="flex items-center gap-2">
                {networkState === 'offline' ? (
                  <WifiOff className="w-4 h-4 text-[#ef4444]" />
                ) : (
                  <Wifi className="w-4 h-4 text-[#10b981]" />
                )}
                <span className={`text-xs font-bold ${networkState === 'offline' ? 'text-[#ef4444]' : 'text-[#10b981]'}`}>
                  {networkState === 'offline' ? 'OFFLINE' : 'ONLINE (4G/LTE)'}
                </span>
              </div>
            </div>

            {/* Cell 2: Local Database */}
            <div className="p-4 bg-[#141a26] border border-[#242c3d] rounded">
              <div className="text-[10px] text-[#8b99ae] mb-1">LOCAL DATABASE</div>
              <div className="flex items-center gap-2 text-[#10b981] font-bold text-xs">
                <Lock className="w-4 h-4 text-[#10b981]" />
                <span>SQLCIPHER AES-256</span>
              </div>
            </div>

            {/* Cell 3: Image Storage */}
            <div className="p-4 bg-[#141a26] border border-[#242c3d] rounded">
              <div className="text-[10px] text-[#8b99ae] mb-1">IMAGE PHOTOGRAPH</div>
              <div className="flex items-center gap-2 text-[#6ee7b7] font-bold text-xs">
                <HardDrive className="w-4 h-4 text-[#38bdf8]" />
                <span>✓ STORED LOCAL</span>
              </div>
            </div>

            {/* Cell 4: Signature Status */}
            <div className="p-4 bg-[#141a26] border border-[#242c3d] rounded">
              <div className="text-[10px] text-[#8b99ae] mb-1">EVIDENCE RECORD</div>
              <div className="flex items-center gap-2 text-[#fbbf24] font-bold text-xs">
                <CheckCircle2 className="w-4 h-4 text-[#f59e0b]" />
                <span>✓ ECDSA SIGNED</span>
              </div>
            </div>

            {/* Cell 5: Synchronization Queue */}
            <div className={`p-4 rounded border ${
              networkState === 'synced' ? 'bg-[#102018] border-[#10b981]/50' : 'bg-[#181a24] border-[#f59e0b]/40'
            }`}>
              <div className="text-[10px] text-[#8b99ae] mb-1">SERVER SYNC QUEUE</div>
              <div className="flex items-center gap-2 font-bold text-xs">
                {networkState === 'offline' ? (
                  <span className="text-[#f59e0b]">WAITING FOR CONN</span>
                ) : networkState === 'connecting' ? (
                  <span className="text-[#fbbf24] animate-pulse">TRANSMITTING...</span>
                ) : (
                  <span className="text-[#10b981]">✓ SERVER VERIFIED</span>
                )}
              </div>
            </div>

          </div>

          {/* Sync Lifecycle Animation Bar */}
          <div className="p-4 bg-[#141924] border border-[#242c3d] rounded text-xs text-[#8b99ae] flex items-center justify-between">
            <span className="text-[#e2e8f0]">SYNC PIPELINE PROTOCOL:</span>
            <div className="flex items-center gap-2 font-bold">
              <span className={networkState === 'offline' ? 'text-[#ef4444]' : 'text-[#10b981]'}>OFFLINE CAPTURE</span>
              <span>→</span>
              <span className={networkState === 'connecting' ? 'text-[#f59e0b]' : networkState === 'synced' ? 'text-[#10b981]' : 'text-[#475569]'}>
                MUTUAL TLS HANDSHAKE
              </span>
              <span>→</span>
              <span className={networkState === 'synced' ? 'text-[#10b981]' : 'text-[#475569]'}>
                AUDIT LOG CONFIRMED
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
