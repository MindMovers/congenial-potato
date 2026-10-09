import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { MOCK_EXAMS } from '../../data/mockData';
import type { ExamMock } from '../../types';
import confetti from 'canvas-confetti';
import {
  Clock,
  Timer,
  CheckCircle2
} from 'lucide-react';

export const ExamHubView: React.FC = () => {
  const { recordTestScore, addVerifiedBadge } = useApp();
  const [selectedExam, setSelectedExam] = useState<ExamMock>(MOCK_EXAMS[0]);
  const [isTestStarted, setIsTestStarted] = useState<boolean>(false);
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [markedForReview, setMarkedForReview] = useState<number[]>([]);
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(15 * 60);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (!isTestStarted || isSubmitted) return;
    const interval = setInterval(() => {
      setTimeLeftSeconds(prev => {
        if (prev <= 1) {
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isTestStarted, isSubmitted]);

  const handleStartExam = (exam: ExamMock) => {
    setSelectedExam(exam);
    setUserAnswers({});
    setMarkedForReview([]);
    setTimeLeftSeconds(exam.timeLimitMinutes * 60);
    setCurrentQIndex(0);
    setIsSubmitted(false);
    setIsTestStarted(true);
  };

  const handleSelectOption = (qIdx: number, optionIdx: number) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [qIdx]: optionIdx }));
  };

  const toggleMarkForReview = (qIdx: number) => {
    setMarkedForReview(prev =>
      prev.includes(qIdx) ? prev.filter(i => i !== qIdx) : [...prev, qIdx]
    );
  };

  const handleSubmitExam = () => {
    setIsSubmitted(true);
    setIsTestStarted(false);

    let correctCount = 0;
    selectedExam.questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctAnswer) {
        correctCount += 1;
      }
    });

    const percent = Math.round((correctCount / selectedExam.questions.length) * 100);
    recordTestScore(selectedExam.title, percent);
    if (percent >= 70) {
      confetti({ particleCount: 80, spread: 60 });
      addVerifiedBadge(`${selectedExam.category} Exam Mastery`);
    }
  };

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const calculateResults = () => {
    let correct = 0;
    let wrong = 0;
    let unattempted = 0;

    selectedExam.questions.forEach((q, idx) => {
      if (userAnswers[idx] === undefined) {
        unattempted += 1;
      } else if (userAnswers[idx] === q.correctAnswer) {
        correct += 1;
      } else {
        wrong += 1;
      }
    });

    return { correct, wrong, unattempted, total: selectedExam.questions.length };
  };

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white p-6 rounded-3xl border border-[#E2E8F0] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold uppercase tracking-wider mb-1">
            STAGE 4 • FEATURE 4
          </div>
          <h2 className="text-2xl font-extrabold text-[#0F172A]">
            Entrance & Govt Exam Engine (PYQ 2010 - 2026)
          </h2>
          <p className="text-xs text-[#64748B] mt-0.5">
            Full-screen timed mock tests for AP EAPCET, NEET UG, JEE Main, SSC CHSL & Railway RRB.
          </p>
        </div>
      </div>

      {/* Mode 1: Exam Selection Repository */}
      {!isTestStarted && !isSubmitted && (
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider">
            Select Mock Exam Simulator
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {MOCK_EXAMS.map((exam) => (
              <div
                key={exam.id}
                className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-xs hover:border-[#4F46E5] transition flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-[#4F46E5] bg-[#EEF2FF] px-2.5 py-0.5 rounded-full uppercase">
                    {exam.category} • {exam.year}
                  </span>
                  <h4 className="text-base font-extrabold text-[#0F172A]">
                    {exam.title}
                  </h4>
                  <div className="text-xs text-[#64748B] flex items-center gap-3 pt-1">
                    <span>⏱️ {exam.timeLimitMinutes} Mins</span>
                    <span>📝 {exam.totalQuestions} Questions</span>
                  </div>
                </div>

                <button
                  onClick={() => handleStartExam(exam)}
                  className="w-full py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#4F46E5] text-white text-xs font-extrabold shadow-md transition flex items-center justify-center gap-2"
                >
                  <Clock className="w-4 h-4 text-[#EEF2FF]" />
                  Launch Timed Exam Simulator
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mode 2: Live Test Interface */}
      {isTestStarted && !isSubmitted && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-md space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="text-xs font-extrabold text-[#0F172A]">
                Question {currentQIndex + 1} of {selectedExam.questions.length} ({selectedExam.questions[currentQIndex].subject})
              </span>

              <div className="flex items-center gap-2 text-sm font-extrabold text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                <Timer className="w-4 h-4 animate-spin" />
                <span>{formatTimer(timeLeftSeconds)}</span>
              </div>
            </div>

            <div className="text-sm sm:text-base font-bold text-[#0F172A]">
              {selectedExam.questions[currentQIndex].question}
            </div>

            <div className="space-y-3">
              {selectedExam.questions[currentQIndex].options.map((opt, oIdx) => {
                const isSelected = userAnswers[currentQIndex] === oIdx;
                return (
                  <button
                    key={oIdx}
                    onClick={() => handleSelectOption(currentQIndex, oIdx)}
                    className={`w-full p-4 rounded-2xl border text-left text-xs font-semibold transition flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#4F46E5] text-white border-[#4F46E5] font-bold shadow-md'
                        : 'bg-[#F8FAFC] text-[#0F172A] border-[#E2E8F0] hover:border-[#4F46E5]'
                    }`}
                  >
                    <span>{opt}</span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-[#EEF2FF]" />}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => toggleMarkForReview(currentQIndex)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition ${
                  markedForReview.includes(currentQIndex)
                    ? 'bg-amber-100 text-amber-900 border-amber-300'
                    : 'bg-[#F8FAFC] text-[#64748B] border-[#E2E8F0]'
                }`}
              >
                {markedForReview.includes(currentQIndex) ? '★ Marked for Review' : '☆ Mark for Review'}
              </button>

              <div className="flex gap-2">
                <button
                  disabled={currentQIndex === 0}
                  onClick={() => setCurrentQIndex(prev => prev - 1)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-xs font-bold text-[#64748B] disabled:opacity-50"
                >
                  Previous
                </button>
                {currentQIndex < selectedExam.questions.length - 1 ? (
                  <button
                    onClick={() => setCurrentQIndex(prev => prev + 1)}
                    className="px-4 py-2 rounded-xl bg-[#0F172A] text-xs font-bold text-white hover:bg-[#4F46E5]"
                  >
                    Next Question
                  </button>
                ) : (
                  <button
                    onClick={handleSubmitExam}
                    className="px-5 py-2 rounded-xl bg-[#10B981] text-xs font-bold text-white hover:bg-emerald-600 shadow-md"
                  >
                    Submit Exam Now
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-xs space-y-4">
            <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
              Question Palette
            </h4>

            <div className="grid grid-cols-4 gap-2">
              {selectedExam.questions.map((_, qIdx) => {
                const isAnswered = userAnswers[qIdx] !== undefined;
                const isMarked = markedForReview.includes(qIdx);
                const isCurrent = qIdx === currentQIndex;

                let badgeColor = 'bg-slate-100 text-slate-700 border-slate-200';
                if (isCurrent) badgeColor = 'ring-2 ring-[#4F46E5] font-extrabold';
                if (isAnswered) badgeColor = 'bg-[#10B981] text-white';
                if (isMarked) badgeColor = 'bg-amber-500 text-white';

                return (
                  <button
                    key={qIdx}
                    onClick={() => setCurrentQIndex(qIdx)}
                    className={`w-9 h-9 rounded-xl text-xs font-bold transition flex items-center justify-center border ${badgeColor}`}
                  >
                    {qIdx + 1}
                  </button>
                );
              })}
            </div>

            <div className="border-t border-slate-100 pt-3 text-[10px] space-y-1 text-[#64748B]">
              <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded bg-[#10B981] inline-block" /> Answered</div>
              <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded bg-amber-500 inline-block" /> Marked for Review</div>
              <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded bg-slate-200 inline-block" /> Unanswered</div>
            </div>
          </div>
        </div>
      )}

      {/* Mode 3: Instant Diagnostic Report */}
      {isSubmitted && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-lg space-y-6">
          {(() => {
            const res = calculateResults();
            const scorePct = Math.round((res.correct / res.total) * 100);

            return (
              <>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                  <div>
                    <span className="text-xs font-bold text-[#4F46E5] uppercase">Diagnostic Performance Report</span>
                    <h3 className="text-2xl font-extrabold text-[#0F172A]">{selectedExam.title}</h3>
                  </div>

                  <div className="text-right bg-[#F8FAFC] p-4 rounded-2xl border border-[#E2E8F0]">
                    <div className="text-2xl font-extrabold text-[#0F172A]">{scorePct}%</div>
                    <div className="text-[10px] text-[#10B981] font-bold">{res.correct} of {res.total} Correct</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                    Detailed Step-by-Step Solutions & Explanations
                  </h4>

                  {selectedExam.questions.map((q, idx) => {
                    const userChoice = userAnswers[idx];
                    const isCorrect = userChoice === q.correctAnswer;

                    return (
                      <div key={q.id} className={`p-4 rounded-2xl border space-y-2 text-xs ${isCorrect ? 'bg-emerald-50/60 border-emerald-200' : 'bg-rose-50/60 border-rose-200'}`}>
                        <div className="flex items-start justify-between font-bold">
                          <span className="text-[#0F172A]">Q{idx + 1}: {q.question}</span>
                          <span className={`px-2 py-0.5 rounded font-bold ${isCorrect ? 'bg-emerald-200 text-emerald-800' : 'bg-rose-200 text-rose-800'}`}>
                            {isCorrect ? 'Correct' : 'Incorrect / Skipped'}
                          </span>
                        </div>

                        <div className="text-[#64748B]">
                          <span className="font-semibold text-[#0F172A]">Correct Answer: </span>
                          <span className="font-bold">{q.options[q.correctAnswer]}</span>
                        </div>

                        <div className="text-[#0F172A] bg-white p-2.5 rounded-xl border border-slate-200">
                          <span className="font-bold text-[#4F46E5]">Explanation: </span>
                          {q.explanation}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => { setIsSubmitted(false); setIsTestStarted(false); }}
                    className="px-5 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#4F46E5] text-white text-xs font-bold shadow-md transition"
                  >
                    Take Another Exam
                  </button>
                </div>
              </>
            );
          })()}
        </div>
      )}
    </div>
  );
};
