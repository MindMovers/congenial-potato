import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Download, Building2 } from 'lucide-react';

export const ResumeBuilderView: React.FC = () => {
  const { activeProfile, navigateTo } = useApp();
  const [resumeType, setResumeType] = useState<'Engineering' | 'Healthcare' | 'Commerce'>('Engineering');

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white p-6 rounded-3xl border border-[#E2E8F0] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold uppercase tracking-wider mb-1">
            STAGE 5 • FEATURE 5
          </div>
          <h2 className="text-2xl font-extrabold text-[#0F172A]">
            AI Stream-Tailored Resume Builder
          </h2>
          <p className="text-xs text-[#64748B] mt-0.5">
            Auto-compiled professional resume from your verified quiz badges, test scores, and AP coursework.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => window.print()}
            className="px-4 py-2.5 rounded-xl bg-[#F8FAFC] text-[#0F172A] border border-[#E2E8F0] hover:bg-[#EEF2FF]/60 font-bold text-xs transition flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Print / Export PDF
          </button>
          <button
            onClick={() => navigateTo('reverse-job-market', 'Reverse Market')}
            className="px-4 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#4F46E5] text-white font-bold text-xs shadow-md transition flex items-center gap-1.5 cursor-pointer"
          >
            <Building2 className="w-4 h-4 text-[#EEF2FF]" />
            Reverse Job Market
          </button>
        </div>
      </div>

      {/* Stream Selector */}
      <div className="flex gap-2">
        {(['Engineering', 'Healthcare', 'Commerce'] as const).map(type => (
          <button
            key={type}
            onClick={() => setResumeType(type)}
            className={`px-4 py-2 rounded-2xl text-xs font-bold transition border cursor-pointer ${
              resumeType === type ? 'bg-[#0F172A] text-white border-[#0F172A]' : 'bg-white text-[#64748B] border-[#E2E8F0]'
            }`}
          >
            {type} Tailored Layout
          </button>
        ))}
      </div>

      {/* Printable Resume Document Card */}
      <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-lg max-w-3xl mx-auto space-y-6 text-xs">
        <div className="border-b border-gray-200 pb-4 flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-extrabold text-[#0F172A]">{activeProfile.name}</h1>
            <p className="text-xs font-bold text-[#4F46E5] mt-0.5">{activeProfile.targetRole} Candidate ({resumeType})</p>
            <p className="text-[11px] text-gray-500 mt-0.5">{activeProfile.district}, Andhra Pradesh • verified@udhbhava.ap.gov.in</p>
          </div>
          <div className="text-right">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-extrabold rounded-full">
              ✓ UDHBHAVA Verified Progress
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-xs font-extrabold text-[#0F172A] uppercase tracking-wider border-b pb-1">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            Motivated student specializing in {activeProfile.currentStream} with strong foundations in {resumeType === 'Engineering' ? 'AI algorithms, data structures, and physics mechanics' : resumeType === 'Healthcare' ? 'human physiology, clinical pharmacology, and trial safety' : 'accounting standards, GST audit, and corporate finance'}.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xs font-extrabold text-[#0F172A] uppercase tracking-wider border-b pb-1">Verified Badges & Competencies</h2>
          <div className="flex flex-wrap gap-2">
            {activeProfile.verifiedBadges.map((badge, idx) => (
              <span key={idx} className="px-3 py-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl font-bold text-[#0F172A]">
                🏆 {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-xs font-extrabold text-[#0F172A] uppercase tracking-wider border-b pb-1">Verified Test Performance</h2>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(activeProfile.testScores).map(([test, score]) => (
              <div key={test} className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] flex justify-between">
                <span className="font-semibold text-[#0F172A]">{test}</span>
                <span className="font-extrabold text-[#4F46E5]">{score}% Score</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
