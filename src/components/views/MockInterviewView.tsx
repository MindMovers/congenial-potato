import React, { useState } from 'react';
import { MOCK_COMPANY_INTERVIEWS } from '../../data/mockData';
import type { CompanyInterviewModule } from '../../types';
import { Building2, Sparkles, Star } from 'lucide-react';

export const MockInterviewView: React.FC = () => {
  const [selectedComp, setSelectedComp] = useState<CompanyInterviewModule>(MOCK_COMPANY_INTERVIEWS[0]);
  const [userSpeechText, setUserSpeechText] = useState('');
  const [scoreResult, setScoreResult] = useState<{ clarity: number; confidence: number; keywordsMatched: string[] } | null>(null);

  const handleEvaluate = () => {
    if (!userSpeechText) return;
    setScoreResult({
      clarity: 88,
      confidence: 92,
      keywordsMatched: ['STAR Framework', 'Problem Resolution', 'Delivered Ahead of Time']
    });
  };

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white p-6 rounded-3xl border border-[#E2E8F0] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold uppercase tracking-wider mb-1">
            STAGE 5 • FEATURE 6
          </div>
          <h2 className="text-2xl font-extrabold text-[#0F172A]">
            Company-Specific HR & Technical Mock Interviews
          </h2>
          <p className="text-xs text-[#64748B] mt-0.5">
            STAR framework behavioral HR questions & technical practice for TCS, Apollo Hospitals, & HDFC Bank.
          </p>
        </div>

        {/* Selector */}
        <div className="flex gap-2">
          {MOCK_COMPANY_INTERVIEWS.map((comp) => (
            <button
              key={comp.id}
              onClick={() => setSelectedComp(comp)}
              className={`px-3 py-2 rounded-2xl text-xs font-bold transition border cursor-pointer ${
                selectedComp.id === comp.id ? 'bg-[#0F172A] text-white border-[#0F172A]' : 'bg-white text-[#64748B] border-[#E2E8F0]'
              }`}
            >
              {comp.companyName.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Columns: STAR Interview Practice */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs space-y-6">
          <div className="flex items-center gap-3 border-b border-[#E2E8F0] pb-4">
            <Building2 className="w-8 h-8 text-[#0F172A]" />
            <div>
              <h3 className="text-lg font-extrabold text-[#0F172A]">{selectedComp.companyName}</h3>
              <p className="text-xs text-[#4F46E5] font-semibold">{selectedComp.roleTitle}</p>
            </div>
          </div>

          {/* Behavioral STAR Question */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              Behavioral Question (STAR Method)
            </h4>

            {selectedComp.behavioralQuestions.map((q) => (
              <div key={q.id} className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-4">
                <div className="text-sm font-bold text-[#0F172A]">"{q.question}"</div>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2.5 rounded-xl bg-white border border-[#E2E8F0]">
                    <span className="font-extrabold text-[#4F46E5]">S (Situation): </span>
                    <span className="text-[#64748B]">{q.starPrompt.situation}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#E2E8F0]">
                    <span className="font-extrabold text-[#4F46E5]">T (Task): </span>
                    <span className="text-[#64748B]">{q.starPrompt.task}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#E2E8F0]">
                    <span className="font-extrabold text-[#4F46E5]">A (Action): </span>
                    <span className="text-[#64748B]">{q.starPrompt.action}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#E2E8F0]">
                    <span className="font-extrabold text-[#4F46E5]">R (Result): </span>
                    <span className="text-[#64748B]">{q.starPrompt.result}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-semibold text-[#64748B]">
                    Your Voice/Text Interview Response:
                  </label>
                  <textarea
                    rows={3}
                    value={userSpeechText}
                    onChange={(e) => setUserSpeechText(e.target.value)}
                    placeholder="Type or dictate your STAR response here..."
                    className="w-full p-3 rounded-xl border border-[#E2E8F0] text-xs font-medium focus:ring-2 focus:ring-[#4F46E5] bg-white text-[#0F172A]"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => setUserSpeechText(q.sampleAnswer)}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-[#64748B] cursor-pointer"
                    >
                      Use Sample Answer
                    </button>
                    <button
                      onClick={handleEvaluate}
                      className="px-4 py-1.5 rounded-lg bg-[#0F172A] hover:bg-[#4F46E5] text-xs font-bold text-white shadow-xs cursor-pointer"
                    >
                      Evaluate Answer Clarity
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: AI Scoring Feedback */}
        <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-xs space-y-4">
          <h3 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#4F46E5]" />
            AI Self-Evaluation Score
          </h3>

          {scoreResult ? (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#EEF2FF] border border-[#E2E8F0] space-y-2">
                <div className="flex justify-between text-xs font-bold text-[#0F172A]">
                  <span>Clarity Rating:</span>
                  <span className="text-emerald-600">{scoreResult.clarity}%</span>
                </div>
                <div className="flex justify-between text-xs font-bold text-[#0F172A]">
                  <span>Confidence Index:</span>
                  <span className="text-emerald-600">{scoreResult.confidence}%</span>
                </div>
              </div>

              <div className="space-y-1 text-xs">
                <div className="font-bold text-[#64748B]">Keywords Detected:</div>
                <div className="flex flex-wrap gap-1.5">
                  {scoreResult.keywordsMatched.map((k, i) => (
                    <span key={i} className="px-2 py-1 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                      ✓ {k}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-xs text-[#64748B]">
              Type a response and click Evaluate to see clarity & confidence AI scores.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
