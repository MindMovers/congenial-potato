import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MOCK_NOTES } from '../../data/mockData';
import type { NoteModule } from '../../types';
import {
  ShieldCheck,
  Download,
  BookOpen,
  Zap
} from 'lucide-react';

export const ExamNotesView: React.FC = () => {
  const { toggleOfflineCache, activeProfile } = useApp();
  const [activeModule, setActiveModule] = useState<NoteModule>(MOCK_NOTES[0]);
  const [isPassGuaranteeMode, setIsPassGuaranteeMode] = useState<boolean>(true);
  const [language, setLanguage] = useState<'EN' | 'TE'>('EN');

  const isCached = activeProfile.cachedDownloads?.includes(activeModule.id);

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white p-6 rounded-3xl border border-[#E2E8F0] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold uppercase tracking-wider mb-1">
            STAGE 3 • FEATURE 3
          </div>
          <h2 className="text-2xl font-extrabold text-[#0F172A]">
            AI-Refined Notes & Slow-Learner Pass Guarantee Mode
          </h2>
          <p className="text-xs text-[#64748B] mt-0.5">
            Switch between comprehensive syllabus notes and AI Pass Guarantee high-weightage formulas in English or Telugu.
          </p>
        </div>

        {/* Toggles */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Language Toggle */}
          <div className="flex items-center bg-[#F8FAFC] p-1 rounded-2xl border border-[#E2E8F0]">
            <button
              onClick={() => setLanguage('EN')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                language === 'EN' ? 'bg-[#0F172A] text-white shadow-xs' : 'text-[#64748B]'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('TE')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                language === 'TE' ? 'bg-[#0F172A] text-white shadow-xs' : 'text-[#64748B]'
              }`}
            >
              తెలుగు (Telugu)
            </button>
          </div>

          {/* Mode Switcher */}
          <button
            onClick={() => setIsPassGuaranteeMode(!isPassGuaranteeMode)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold shadow-md transition flex items-center gap-2 border ${
              isPassGuaranteeMode
                ? 'bg-[#4F46E5] text-white border-[#4F46E5]'
                : 'bg-white text-[#0F172A] border-[#E2E8F0] hover:bg-[#EEF2FF]'
            }`}
          >
            <Zap className="w-4 h-4 text-[#EEF2FF]" />
            {isPassGuaranteeMode ? 'Mode: Slow-Learner Pass Guarantee' : 'Mode: Comprehensive Syllabus'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Column: Note Module Selector */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider px-1">
            Subject Modules
          </h3>
          {MOCK_NOTES.map((m) => (
            <div
              key={m.id}
              onClick={() => setActiveModule(m)}
              className={`p-4 rounded-2xl border transition cursor-pointer space-y-1 ${
                activeModule.id === m.id
                  ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-md'
                  : 'bg-white text-[#0F172A] border-[#E2E8F0] hover:border-[#4F46E5]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${activeModule.id === m.id ? 'bg-[#4F46E5] text-white' : 'bg-[#EEF2FF] text-[#4F46E5]'}`}>
                  {m.subject}
                </span>
                <span className="text-[10px] text-slate-400">{m.downloadSizeMb} MB</span>
              </div>
              <h4 className="text-xs font-bold truncate mt-1">{m.topic}</h4>
            </div>
          ))}
        </div>

        {/* Right 3 Columns: Active Notes Reader */}
        <div className="lg:col-span-3 bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <div className="text-xs font-bold text-[#4F46E5]">{activeModule.subject} • {activeModule.stream}</div>
              <h3 className="text-xl font-extrabold text-[#0F172A]">{activeModule.topic}</h3>
            </div>

            <button
              onClick={() => toggleOfflineCache(activeModule.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition flex items-center gap-1.5 ${
                isCached
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                  : 'bg-[#F8FAFC] text-[#0F172A] border-[#E2E8F0] hover:bg-[#EEF2FF]'
              }`}
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isCached ? 'Downloaded Offline' : 'Download Notes (IndexedDB)'}</span>
            </button>
          </div>

          {/* Pass Guarantee Mode View */}
          {isPassGuaranteeMode ? (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs space-y-1">
                <div className="font-extrabold text-amber-800 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  Pass Guarantee Mode Active
                </div>
                <p>
                  {language === 'EN'
                    ? activeModule.passGuaranteeNotesEnglish.quickSummary
                    : activeModule.passGuaranteeNotesTelugu.quickSummary}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#4F46E5]" />
                  Must-Know Formulas (100% Exam Weightage)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(language === 'EN'
                    ? activeModule.passGuaranteeNotesEnglish.coreFormulae
                    : activeModule.passGuaranteeNotesTelugu.coreFormulae
                  ).map((f, i) => (
                    <div key={i} className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-mono font-bold text-[#0F172A]">
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#4F46E5]" />
                  High-Weightage Exam Questions
                </h4>
                <div className="space-y-2">
                  {(language === 'EN'
                    ? activeModule.passGuaranteeNotesEnglish.highWeightageQuestions
                    : activeModule.passGuaranteeNotesTelugu.highWeightageQuestions
                  ).map((q, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white border border-[#E2E8F0] text-xs font-semibold text-[#0F172A]">
                      {q}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="prose max-w-none text-xs text-[#0F172A] space-y-4">
              <pre className="whitespace-pre-wrap font-sans text-xs bg-[#F8FAFC] p-4 rounded-2xl border border-[#E2E8F0]">
                {language === 'EN' ? activeModule.standardNotesEnglish : activeModule.standardNotesTelugu}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
