import React, { useState } from 'react';
import { Database, Search, Filter, ShieldCheck, Eye, X, CheckCircle2, Clock, MapPin, User, FileText } from 'lucide-react';
import { INITIAL_EVIDENCE_RECORDS } from '../../data/evidenceData';

export default function EvidenceLogSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [resultFilter, setResultFilter] = useState('ALL');
  const [selectedRecord, setSelectedRecord] = useState(null);

  const records = INITIAL_EVIDENCE_RECORDS;

  const filteredRecords = records.filter((rec) => {
    const matchesSearch = 
      rec.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rec.officer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rec.kitProfile.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesResult = resultFilter === 'ALL' || rec.result === resultFilter;

    return matchesSearch && matchesResult;
  });

  return (
    <section id="evidence-log" className="py-16 bg-[#0e121a] border-b border-[#242c3d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a202c] border border-[#f59e0b]/40 rounded text-xs font-mono text-[#fbbf24] mb-3">
              <Database className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>CENTRALIZED OPERATIONAL EVIDENCE LEDGER</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f8fafc] tracking-tight">
              Searchable Audit Trail
            </h2>
            <p className="mt-2 text-sm text-[#8b99ae] max-w-2xl font-mono">
              Inspect timestamped, cryptographically sealed field test logs across regional units.
            </p>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs text-[#64748b] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10b981]" />
            <span>DB ENGINE: POSTGRESQL + SQLCIPHER</span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#10141d] border-2 border-[#242c3d] rounded-lg p-4 mb-6 font-mono text-xs flex flex-wrap items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="flex items-center gap-2 bg-[#161c28] px-3 py-2 border border-[#242c3d] rounded w-full sm:w-72 focus-within:border-[#f59e0b]">
            <Search className="w-4 h-4 text-[#64748b]" />
            <input
              type="text"
              placeholder="Search ID, Officer, Kit..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent text-[#e2e8f0] focus:outline-none w-full placeholder-[#5b687a]"
            />
          </div>

          {/* Result Filter Buttons */}
          <div className="flex items-center gap-2">
            <span className="text-[#64748b] hidden sm:inline">RESULT:</span>
            {['ALL', 'POSITIVE', 'NEGATIVE', 'INCONCLUSIVE'].map((res) => (
              <button
                key={res}
                onClick={() => setResultFilter(res)}
                className={`px-2.5 py-1 rounded font-bold transition-colors ${
                  resultFilter === res
                    ? 'bg-[#f59e0b] text-[#0b0e14]'
                    : 'bg-[#161c28] text-[#8b99ae] border border-[#242c3d] hover:text-[#e2e8f0]'
                }`}
              >
                {res}
              </button>
            ))}
          </div>

        </div>

        {/* Operational Table */}
        <div className="bg-[#0b0e14] border-2 border-[#242c3d] rounded-lg overflow-x-auto font-mono">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#121620] border-b border-[#242c3d] text-[10px] text-[#64748b] uppercase tracking-wider">
                <th className="p-3.5">EVIDENCE ID</th>
                <th className="p-3.5">TIMESTAMP</th>
                <th className="p-3.5">OFFICER</th>
                <th className="p-3.5">RESULT</th>
                <th className="p-3.5">CONFIDENCE</th>
                <th className="p-3.5">INTEGRITY</th>
                <th className="p-3.5">SYNC</th>
                <th className="p-3.5 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e2738] text-xs">
              {filteredRecords.map((rec) => (
                <tr key={rec.id} className="hover:bg-[#141a26] transition-colors group">
                  <td className="p-3.5 font-bold text-[#f59e0b]">{rec.id}</td>
                  <td className="p-3.5 text-[#94a3b8]">{rec.timestamp.split(' ')[1]} IST</td>
                  <td className="p-3.5 text-[#cbd5e1]">{rec.officer}</td>
                  <td className="p-3.5">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                      rec.result === 'POSITIVE'
                        ? 'bg-[#ef4444]/10 text-[#ef4444] border-[#ef4444]/30'
                        : rec.result === 'NEGATIVE'
                        ? 'bg-[#10b981]/10 text-[#10b981] border-[#10b981]/30'
                        : 'bg-[#f59e0b]/10 text-[#fbbf24] border-[#f59e0b]/30'
                    }`}>
                      {rec.result}
                    </span>
                  </td>
                  <td className="p-3.5 text-[#e2e8f0] font-semibold">{rec.confidence}%</td>
                  <td className="p-3.5">
                    <span className="text-[#10b981] flex items-center gap-1 text-[11px]">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{rec.integrity}</span>
                    </span>
                  </td>
                  <td className="p-3.5 text-[#38bdf8]">{rec.syncStatus}</td>
                  <td className="p-3.5 text-right">
                    <button
                      onClick={() => setSelectedRecord(rec)}
                      className="px-2.5 py-1 bg-[#161c28] hover:bg-[#1f2838] border border-[#242c3d] text-[#e2e8f0] rounded text-[10px] flex items-center gap-1 ml-auto"
                    >
                      <Eye className="w-3 h-3 text-[#f59e0b]" />
                      <span>INSPECT</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Record Detail Modal Drawer */}
        {selectedRecord && (
          <div className="fixed inset-0 z-50 bg-[#000000]/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#0b0e14] border-2 border-[#f59e0b] rounded-lg max-w-2xl w-full p-6 font-mono text-xs space-y-4 relative shadow-2xl animate-fade-in max-h-[90vh] overflow-y-auto">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedRecord(null)}
                className="absolute top-4 right-4 text-[#7d8b9e] hover:text-[#f8fafc] p-1"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-[#f59e0b] font-bold text-sm border-b border-[#242c3d] pb-3">
                <FileText className="w-4 h-4" />
                <span>INSPECTING RECORD: {selectedRecord.id}</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-[#121620] border border-[#242c3d] rounded">
                  <div className="text-[#64748b]">RESULT:</div>
                  <div className="text-lg font-bold text-[#10b981]">{selectedRecord.result}</div>
                </div>
                <div className="p-3 bg-[#121620] border border-[#242c3d] rounded">
                  <div className="text-[#64748b]">CONFIDENCE / ΔE:</div>
                  <div className="text-lg font-bold text-[#fbbf24]">{selectedRecord.confidence}% (ΔE {selectedRecord.deltaE})</div>
                </div>
              </div>

              <div>
                <div className="text-[#8b99ae] mb-1">SHA-256 IMAGE HASH:</div>
                <div className="p-2 bg-[#141a26] border border-[#242c3d] rounded text-[#fbbf24] break-all font-mono text-[10px]">
                  {selectedRecord.imageHash}
                </div>
              </div>

              <div>
                <div className="text-[#8b99ae] mb-1">ECDSA P-256 SIGNATURE SEAL:</div>
                <div className="p-2 bg-[#141a26] border border-[#242c3d] rounded text-[#10b981] font-mono text-[10px]">
                  {selectedRecord.signature}
                </div>
              </div>

              <div className="p-3 bg-[#121620] border border-[#242c3d] rounded space-y-1 text-[11px]">
                <div className="flex justify-between">
                  <span className="text-[#7d8b9e]">Timestamp:</span>
                  <span className="text-[#e2e8f0]">{selectedRecord.timestamp}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7d8b9e]">GPS Fix:</span>
                  <span className="text-[#e2e8f0]">{selectedRecord.gps.lat} {selectedRecord.gps.lng}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7d8b9e]">Attributed Officer:</span>
                  <span className="text-[#e2e8f0]">{selectedRecord.officer}</span>
                </div>
              </div>

              <div className="pt-2 text-right">
                <button
                  onClick={() => setSelectedRecord(null)}
                  className="px-4 py-2 bg-[#f59e0b] text-[#0b0e14] font-bold rounded"
                >
                  CLOSE INSPECTOR
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
