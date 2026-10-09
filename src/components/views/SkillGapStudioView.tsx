import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MOCK_SKILL_TARGETS } from '../../data/mockData';
import type { SkillGapTarget } from '../../types';
import {
  ArrowRight,
  Zap
} from 'lucide-react';

export const SkillGapStudioView: React.FC = () => {
  const { navigateTo } = useApp();
  const [selectedTarget, setSelectedTarget] = useState<SkillGapTarget>(MOCK_SKILL_TARGETS[0]);

  // Simulated student current skill ratings (0-100)
  const [userRatings, setUserRatings] = useState<Record<string, number>>({
    'Python & Data Structures': 75,
    'Machine Learning Frameworks (PyTorch/Scikit)': 45,
    'SQL & Database Architecture': 85,
    'Linear Algebra & Probability': 70,
    'Git Version Control & Deployment': 60,
    'Technical Problem Solving & Communication': 80,
    'Human Physiology & Anatomy': 88,
    'Medicinal Chemistry & Formulations': 80,
    'Clinical Trial Protocols (GCP)': 50,
    'Pharmacovigilance & Drug Safety': 40,
    'Biostatistics & SAS Analysis': 60,
    'Medical Ethics & Patient Communication': 85,
    'Financial Accounting & Balance Sheet': 90,
    'GST Compliance & Direct Taxation': 70,
    'Corporate Law & Auditing Standards': 65,
    'Tally Prime & Financial Modeling': 80,
    'Commercial Ethics & Client Advisory': 82
  });

  const handleRatingChange = (skillName: string, val: number) => {
    setUserRatings(prev => ({ ...prev, [skillName]: val }));
  };

  const getGapStatus = (userVal: number, reqVal: number) => {
    const diff = userVal - reqVal;
    if (diff >= 0) return { label: 'Strong', color: 'bg-emerald-500 text-white' };
    if (diff >= -15) return { label: 'Developing', color: 'bg-amber-500 text-white' };
    return { label: 'Critical Gap', color: 'bg-rose-500 text-white' };
  };

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white p-6 rounded-3xl border border-[#E2E8F0] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold uppercase tracking-wider mb-1">
            STAGE 5 • FEATURE 1
          </div>
          <h2 className="text-2xl font-extrabold text-[#0F172A]">
            Cross-Stream Dream-Career Skill Gap Diagnostic Studio
          </h2>
          <p className="text-xs text-[#64748B] mt-0.5">
            Evaluate your current aptitude vs. industry benchmark across Engineering, Healthcare, CA, Design & Vocational.
          </p>
        </div>

        {/* Target Role Selector */}
        <div className="bg-[#F8FAFC] p-2 rounded-2xl border border-[#E2E8F0]">
          <select
            value={selectedTarget.id}
            onChange={(e) => {
              const found = MOCK_SKILL_TARGETS.find(t => t.id === e.target.value);
              if (found) setSelectedTarget(found);
            }}
            className="px-3 py-1.5 rounded-xl border border-[#E2E8F0] bg-white text-xs font-bold text-[#0F172A] focus:ring-2 focus:ring-[#4F46E5]"
          >
            {MOCK_SKILL_TARGETS.map(t => (
              <option key={t.id} value={t.id}>{t.roleName} ({t.streamCategory})</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Columns: Visual Gap Radar & Competency Engine */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
            <div>
              <span className="text-[10px] font-bold text-[#4F46E5] bg-[#EEF2FF] px-2.5 py-0.5 rounded-full uppercase">
                {selectedTarget.streamCategory} BENCHMARK
              </span>
              <h3 className="text-xl font-extrabold text-[#0F172A] mt-1">
                Target Role: {selectedTarget.roleName}
              </h3>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="flex items-center gap-1 font-bold text-emerald-600"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Strong</span>
              <span className="flex items-center gap-1 font-bold text-amber-600"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Developing</span>
              <span className="flex items-center gap-1 font-bold text-rose-600"><span className="w-2.5 h-2.5 rounded-full bg-rose-500" /> Critical Gap</span>
            </div>
          </div>

          {/* Competency Skill Rows */}
          <div className="space-y-4">
            {selectedTarget.benchmarks.map((b, idx) => {
              const userVal = userRatings[b.skillName] || 50;
              const gapStatus = getGapStatus(userVal, b.requiredLevel);

              return (
                <div key={idx} className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                    <div className="font-bold text-[#0F172A] flex items-center gap-2">
                      <span>{b.skillName}</span>
                      <span className="text-[10px] text-[#64748B] font-normal">({b.category})</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[#64748B]">Self: <b>{userVal}%</b> | Target: <b>{b.requiredLevel}%</b></span>
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase ${gapStatus.color}`}>
                        {gapStatus.label}
                      </span>
                    </div>
                  </div>

                  {/* Dual Bar Chart Comparison */}
                  <div className="space-y-1 pt-1">
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden relative">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          userVal >= b.requiredLevel ? 'bg-emerald-500' : userVal >= b.requiredLevel - 15 ? 'bg-amber-500' : 'bg-rose-500'
                        }`}
                        style={{ width: `${userVal}%` }}
                      />
                    </div>
                  </div>

                  {/* Slider to adjust self rating */}
                  <div className="flex items-center gap-2 pt-1 text-[10px] text-[#64748B]">
                    <span>Adjust Self-Score:</span>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={userVal}
                      onChange={(e) => handleRatingChange(b.skillName, Number(e.target.value))}
                      className="w-32 accent-[#4F46E5]"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Dynamic Remediation Roadmap */}
        <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-xs space-y-5">
          <h3 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#4F46E5]" />
            Dynamic Learning Remediation Plan
          </h3>

          <div className="space-y-3">
            {selectedTarget.benchmarks
              .filter(b => (userRatings[b.skillName] || 50) < b.requiredLevel)
              .map((b, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-[#EEF2FF] border border-[#E2E8F0] space-y-1.5 text-xs">
                  <div className="font-extrabold text-[#0F172A]">
                    Remediation #{i + 1}: {b.skillName}
                  </div>
                  <p className="text-[11px] text-[#0F172A]">
                    Gap of {b.requiredLevel - (userRatings[b.skillName] || 50)} points detected. Complete recommended AI Pass-Guarantee notes and practice questions.
                  </p>
                  <button
                    onClick={() => navigateTo('exam-notes', b.skillName)}
                    className="mt-1 px-3 py-1 bg-[#0F172A] hover:bg-[#4F46E5] text-white font-bold text-[10px] rounded-lg transition"
                  >
                    Open Remediation Notes
                  </button>
                </div>
              ))}
          </div>

          <button
            onClick={() => navigateTo('resume-builder', 'Resume Builder')}
            className="w-full py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#4F46E5] text-white text-xs font-extrabold shadow-md transition flex items-center justify-center gap-2"
          >
            <span>Generate Stream Resume</span>
            <ArrowRight className="w-4 h-4 text-[#EEF2FF]" />
          </button>
        </div>
      </div>
    </div>
  );
};
