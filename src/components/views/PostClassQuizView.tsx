import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import confetti from 'canvas-confetti';
import {
  Timer,
  Trophy,
  CheckCircle2,
  XCircle,
  Flame,
  ArrowRight,
  RotateCcw
} from 'lucide-react';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const PostClassQuizView: React.FC = () => {
  const { addVerifiedBadge, recordTestScore, navigateTo, activeProfile } = useApp();
  const [timeLeft, setTimeLeft] = useState(30);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);

  const QUESTIONS: QuizQuestion[] = [
    {
      id: 'q1',
      question: 'What is the SI unit of Torque (τ) in Physics?',
      options: ['Newton-meter (N·m)', 'Joule / second', 'Pascal', 'Watt'],
      correct: 0,
      explanation: 'Torque τ = r × F, measured in Newton-meters (N·m).'
    },
    {
      id: 'q2',
      question: 'Which node in the human heart acts as the natural Pacemaker?',
      options: ['AV Node', 'Sinoatrial (SAN) Node', 'Purkinje Fibers', 'Bundle of His'],
      correct: 1,
      explanation: 'Sinoatrial Node (SAN) generates spontaneous electrical impulses.'
    },
    {
      id: 'q3',
      question: 'What is the basic Accounting Equation for Balance Sheets?',
      options: ['Assets = Liabilities + Capital', 'Assets = Income - Expenses', 'Capital = Liabilities', 'Assets = Tax'],
      correct: 0,
      explanation: 'The fundamental accounting equation states Assets = Liabilities + Capital.'
    }
  ];

  useEffect(() => {
    if (isGameOver || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleNextQuestion();
          return 30;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isGameOver, currentIdx]);

  const handleSelectOption = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    if (idx === QUESTIONS[currentIdx].correct) {
      setScore(prev => prev + (100 * streak));
      setStreak(prev => prev + 1);
    } else {
      setStreak(1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setTimeLeft(30);
    } else {
      setIsGameOver(true);
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      addVerifiedBadge('Quiz Game Champion');
      recordTestScore('Animated Quiz Game', score + (selectedOption === QUESTIONS[currentIdx].correct ? 100 : 0));
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setScore(0);
    setStreak(1);
    setTimeLeft(30);
    setIsGameOver(false);
  };

  const current = QUESTIONS[currentIdx];

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white p-6 rounded-3xl border border-[#E2E8F0] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold uppercase tracking-wider mb-1">
            STAGE 3 • FEATURE 2
          </div>
          <h2 className="text-2xl font-extrabold text-[#0F172A]">
            Post-Class Animated Quiz Game & Leaderboard
          </h2>
          <p className="text-xs text-[#64748B] mt-0.5">
            Interactive countdown quiz game testing lecture concepts with streak multipliers.
          </p>
        </div>

        {/* Live Score & Streak */}
        <div className="flex items-center gap-3">
          <div className="bg-[#F8FAFC] px-3 py-1.5 rounded-2xl border border-[#E2E8F0] flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500 animate-bounce" />
            <span className="text-xs font-extrabold text-[#0F172A]">{streak}x Streak</span>
          </div>
          <div className="bg-[#0F172A] text-white px-4 py-1.5 rounded-2xl font-extrabold text-sm shadow-md">
            {score} PTS
          </div>
        </div>
      </div>

      {!isGameOver ? (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-md space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div className="text-xs font-bold text-[#64748B]">
              Question {currentIdx + 1} of {QUESTIONS.length}
            </div>

            <div className="flex items-center gap-2 text-xs font-extrabold text-[#4F46E5] bg-[#EEF2FF] px-3 py-1 rounded-full">
              <Timer className="w-4 h-4 animate-spin" />
              <span>{timeLeft}s Remaining</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white space-y-2">
            <div className="text-[10px] font-bold text-[#A5B4FC] uppercase tracking-wider">Lecture Concept Check</div>
            <h3 className="text-lg sm:text-xl font-extrabold">
              {current.question}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {current.options.map((opt, i) => {
              let isSelected = selectedOption === i;
              let isCorrect = i === current.correct;

              let cardStyle = 'bg-[#F8FAFC] border-[#E2E8F0] text-[#0F172A] hover:border-[#4F46E5]';
              if (selectedOption !== null) {
                if (isCorrect) {
                  cardStyle = 'bg-emerald-100 border-emerald-500 text-emerald-900 font-bold scale-[1.02]';
                } else if (isSelected) {
                  cardStyle = 'bg-rose-100 border-rose-500 text-rose-900 font-bold';
                }
              }

              return (
                <button
                  key={i}
                  disabled={selectedOption !== null}
                  onClick={() => handleSelectOption(i)}
                  className={`p-4 rounded-2xl border text-left text-xs font-semibold transition-all duration-200 flex items-center justify-between ${cardStyle}`}
                >
                  <span>{opt}</span>
                  {selectedOption !== null && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                  {selectedOption !== null && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-600 shrink-0" />}
                </button>
              );
            })}
          </div>

          {selectedOption !== null && (
            <div className="p-4 rounded-2xl bg-[#EEF2FF] border border-[#E2E8F0] space-y-3 animate-in fade-in">
              <div className="text-xs font-bold text-[#0F172A]">
                Explanation: <span className="font-normal text-[#0F172A]">{current.explanation}</span>
              </div>
              <button
                onClick={handleNextQuestion}
                className="w-full py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#4F46E5] text-white text-xs font-extrabold shadow-md transition flex items-center justify-center gap-2"
              >
                <span>Next Question</span>
                <ArrowRight className="w-4 h-4 text-[#EEF2FF]" />
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-xl text-center space-y-6 max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-[#EEF2FF] text-[#4F46E5] mx-auto flex items-center justify-center">
            <Trophy className="w-8 h-8 text-[#4F46E5]" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-extrabold text-[#0F172A]">
              Quiz Completed! 🎉
            </h3>
            <p className="text-xs text-[#64748B]">
              Congratulations {activeProfile.name}! You scored <span className="font-bold text-[#0F172A]">{score} Points</span> and earned the <span className="font-bold text-[#4F46E5]">Quiz Game Champion</span> badge.
            </p>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={handleRestart}
              className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#64748B] text-xs font-bold transition flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" />
              Play Again
            </button>
            <button
              onClick={() => navigateTo('video-classroom', 'Video Classroom')}
              className="flex-1 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#4F46E5] text-white text-xs font-bold shadow-md transition flex items-center justify-center gap-1.5"
            >
              Back to Classes
            </button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-xs space-y-4">
        <h3 className="text-base font-extrabold text-[#0F172A] flex items-center gap-2">
          <Trophy className="w-5 h-5 text-[#4F46E5]" />
          Andhra Pradesh State Student Leaderboard
        </h3>

        <div className="space-y-2">
          {[
            { rank: 1, name: 'Ananya Lakshmi', district: 'Vijayawada', score: '2,450 pts', badge: 'BiPC Scholar' },
            { rank: 2, name: activeProfile.name + ' (You)', district: activeProfile.district, score: `${score + 1800} pts`, badge: 'Quiz Champion' },
            { rank: 3, name: 'Karthik Varma', district: 'Visakhapatnam', score: '1,720 pts', badge: 'MPC Master' }
          ].map((row) => (
            <div key={row.rank} className={`p-3 rounded-2xl border flex items-center justify-between text-xs ${row.rank === 2 ? 'bg-[#EEF2FF] border-[#4F46E5] font-bold' : 'bg-[#F8FAFC] border-[#E2E8F0]'}`}>
              <div className="flex items-center gap-3">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${row.rank === 1 ? 'bg-amber-400 text-amber-950' : 'bg-slate-200 text-slate-700'}`}>
                  #{row.rank}
                </span>
                <div>
                  <div className="text-[#0F172A]">{row.name}</div>
                  <div className="text-[10px] text-[#64748B]">{row.district}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-extrabold text-[#0F172A]">{row.score}</div>
                <div className="text-[10px] text-[#4F46E5] font-semibold">{row.badge}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
