import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Sparkles,
  Compass,
  Network,
  Video,
  FileText,
  Clock,
  Award,
  Target,
  ArrowRight,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

export const DashboardView: React.FC = () => {
  const { activeProfile, navigateTo, creatorEarnings } = useApp();

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-300">
      {/* Welcome Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#312E81] text-white p-6 sm:p-8 shadow-xl border border-slate-800">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-[#A5B4FC]">
            <Sparkles className="w-3.5 h-3.5 text-[#818CF8]" />
            <span>Official AP Education & Career Empowerment Platform</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Namaste, {activeProfile.name}! 👋
          </h1>
          <p className="text-sm sm:text-base text-[#CBD5E1] font-medium">
            Welcome to <span className="font-bold text-white">UDHBHAVA</span> — Where Potential Meets Possibility. Track your stream readiness, explore career node networks, and prepare for entrance exams with AI pass guarantees.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => navigateTo('skill-gap-studio', 'Skill Gap Analyzer')}
              className="px-4 py-2.5 rounded-xl bg-[#4F46E5] text-white font-bold text-xs sm:text-sm hover:bg-[#6366F1] shadow-md transition flex items-center gap-2"
            >
              <Target className="w-4 h-4 text-white" />
              Analyze Dream Skill Gap
            </button>
            <button
              onClick={() => navigateTo('opportunity-graph', 'Opportunity Graph')}
              className="px-4 py-2.5 rounded-xl bg-[#1E293B] hover:bg-[#334155] text-white font-semibold text-xs sm:text-sm border border-slate-700 transition flex items-center gap-2"
            >
              <Network className="w-4 h-4 text-[#818CF8]" />
              Explore Career Graph
            </button>
          </div>
        </div>

        {/* Decorative background glow */}
        <div className="absolute right-[-40px] bottom-[-40px] w-64 h-64 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none" />
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-xs hover:shadow-md transition flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center text-[#4F46E5] shrink-0">
            <Compass className="w-6 h-6 text-[#4F46E5]" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Current Stream</div>
            <div className="text-base font-extrabold text-[#0F172A] truncate">{activeProfile.currentStream}</div>
            <div className="text-[10px] text-[#4F46E5] font-semibold mt-0.5">{activeProfile.district} District</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-xs hover:shadow-md transition flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center text-[#4F46E5] shrink-0">
            <Target className="w-6 h-6 text-[#4F46E5]" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Target Dream Role</div>
            <div className="text-base font-extrabold text-[#0F172A] truncate">{activeProfile.targetRole}</div>
            <div className="text-[10px] text-[#10B981] font-semibold mt-0.5 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> 84% Competency Score
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-xs hover:shadow-md transition flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center text-[#4F46E5] shrink-0">
            <Award className="w-6 h-6 text-[#4F46E5]" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Verified Badges</div>
            <div className="text-base font-extrabold text-[#0F172A]">{activeProfile.verifiedBadges.length} Earned</div>
            <div className="text-[10px] text-[#64748B] mt-0.5 truncate">
              {activeProfile.verifiedBadges[0] || 'Pass Certified'}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-xs hover:shadow-md transition flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center text-[#4F46E5] shrink-0">
            <Video className="w-6 h-6 text-[#4F46E5]" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Creator Wallet</div>
            <div className="text-base font-extrabold text-[#0F172A]">₹{creatorEarnings}</div>
            <div className="text-[10px] text-[#4F46E5] font-semibold mt-0.5">4,250 Video Views</div>
          </div>
        </div>
      </div>

      {/* Primary Action Modules Grid */}
      <div className="space-y-3">
        <h2 className="text-lg font-bold text-[#0F172A] flex items-center gap-2">
          <span>Revolutionary Feature Hub</span>
          <span className="text-xs font-normal text-[#64748B]">(Click any module to launch)</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1 */}
          <div
            onClick={() => navigateTo('skill-gap-studio', 'Skill Gap Studio')}
            className="bg-white rounded-2xl p-6 border border-[#E2E8F0] hover:border-[#4F46E5] shadow-xs hover:shadow-lg transition cursor-pointer group relative overflow-hidden"
          >
            <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#4F46E5] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Target className="w-5 h-5 text-[#4F46E5]" />
            </div>
            <span className="text-[10px] font-bold text-[#4F46E5] uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#EEF2FF] inline-block mb-2">
              FEATURE 1
            </span>
            <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#4F46E5] transition">
              Cross-Stream Skill Gap Analyzer
            </h3>
            <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
              Diagnostic for Engineering, Healthcare, CA, Design & Vocational roles with visual radar charts.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#4F46E5] group-hover:gap-2 transition-all">
              <span>Run Diagnostic</span>
              <ArrowRight className="w-4 h-4 text-[#4F46E5]" />
            </div>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => navigateTo('video-classroom', 'Video Classroom')}
            className="bg-white rounded-2xl p-6 border border-[#E2E8F0] hover:border-[#4F46E5] shadow-xs hover:shadow-lg transition cursor-pointer group relative overflow-hidden"
          >
            <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#4F46E5] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Video className="w-5 h-5 text-[#4F46E5]" />
            </div>
            <span className="text-[10px] font-bold text-[#4F46E5] uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#EEF2FF] inline-block mb-2">
              FEATURE 2
            </span>
            <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#4F46E5] transition">
              Video Classes & Creator Earnings
            </h3>
            <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
              Direct video lectures, post-class animated quiz games, and live creator earnings simulator.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#4F46E5] group-hover:gap-2 transition-all">
              <span>Watch & Earn</span>
              <ArrowRight className="w-4 h-4 text-[#4F46E5]" />
            </div>
          </div>

          {/* Card 3 */}
          <div
            onClick={() => navigateTo('exam-notes', 'AI Exam Notes')}
            className="bg-white rounded-2xl p-6 border border-[#E2E8F0] hover:border-[#4F46E5] shadow-xs hover:shadow-lg transition cursor-pointer group relative overflow-hidden"
          >
            <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#4F46E5] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FileText className="w-5 h-5 text-[#4F46E5]" />
            </div>
            <span className="text-[10px] font-bold text-[#4F46E5] uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#EEF2FF] inline-block mb-2">
              FEATURE 3
            </span>
            <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#4F46E5] transition">
              AI Notes & Pass-Guarantee Mode
            </h3>
            <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
              Slow-Learner Pass Guarantee mode, high-weightage formulas, and English/Telugu bilingual toggle.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#4F46E5] group-hover:gap-2 transition-all">
              <span>View Notes</span>
              <ArrowRight className="w-4 h-4 text-[#4F46E5]" />
            </div>
          </div>

          {/* Card 4 */}
          <div
            onClick={() => navigateTo('exam-hub', 'Exam Hub')}
            className="bg-white rounded-2xl p-6 border border-[#E2E8F0] hover:border-[#4F46E5] shadow-xs hover:shadow-lg transition cursor-pointer group relative overflow-hidden"
          >
            <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#4F46E5] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Clock className="w-5 h-5 text-[#4F46E5]" />
            </div>
            <span className="text-[10px] font-bold text-[#4F46E5] uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#EEF2FF] inline-block mb-2">
              FEATURE 4
            </span>
            <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#4F46E5] transition">
              Timed PYQ & Govt Exam Simulator
            </h3>
            <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
              AP EAPCET, NEET, JEE, SSC & Railway mock tests with real timer & diagnostic reports.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#4F46E5] group-hover:gap-2 transition-all">
              <span>Start Mock Test</span>
              <ArrowRight className="w-4 h-4 text-[#4F46E5]" />
            </div>
          </div>

          {/* Card 5 */}
          <div
            onClick={() => navigateTo('opportunity-graph', 'Opportunity Graph')}
            className="bg-white rounded-2xl p-6 border border-[#E2E8F0] hover:border-[#4F46E5] shadow-xs hover:shadow-lg transition cursor-pointer group relative overflow-hidden"
          >
            <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#4F46E5] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Network className="w-5 h-5 text-[#4F46E5]" />
            </div>
            <span className="text-[10px] font-bold text-[#4F46E5] uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#EEF2FF] inline-block mb-2">
              FEATURE 8
            </span>
            <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#4F46E5] transition">
              Interactive Opportunity Node Graph
            </h3>
            <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
              HTML5 visual graph showing node pathways from Class 10 to B.Tech, MBBS, CA & Salary bands.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#4F46E5] group-hover:gap-2 transition-all">
              <span>Launch Canvas Graph</span>
              <ArrowRight className="w-4 h-4 text-[#4F46E5]" />
            </div>
          </div>

          {/* Card 6 */}
          <div
            onClick={() => navigateTo('scholarship-matcher', 'Scholarship Matcher')}
            className="bg-white rounded-2xl p-6 border border-[#E2E8F0] hover:border-[#4F46E5] shadow-xs hover:shadow-lg transition cursor-pointer group relative overflow-hidden"
          >
            <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#4F46E5] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Award className="w-5 h-5 text-[#4F46E5]" />
            </div>
            <span className="text-[10px] font-bold text-[#4F46E5] uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#EEF2FF] inline-block mb-2">
              AP DATASET
            </span>
            <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#4F46E5] transition">
              JVD & NSP Scholarship Matcher
            </h3>
            <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
              Jagananna Vidya Deevena (100% Fee), Vasathi Deevena & National NSP eligibility calculator.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#4F46E5] group-hover:gap-2 transition-all">
              <span>Check Eligibility</span>
              <ArrowRight className="w-4 h-4 text-[#4F46E5]" />
            </div>
          </div>
        </div>
      </div>

      {/* AP Educational Ecosystem Overview Banner */}
      <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2 text-xs font-bold text-[#4F46E5] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span>Pre-Populated 26 AP Districts Dataset</span>
          </div>
          <h3 className="text-xl font-extrabold text-[#0F172A]">
            Institutions, Cutoffs & Real Living Costs
          </h3>
          <p className="text-xs text-[#64748B]">
            Explore verified data for AU Vizag, JNTUK, AMC, SVU, and Siddhartha Medical College along with real district living cost indices across all 26 districts of Andhra Pradesh.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => navigateTo('stream-selection', 'Stream Selection')}
            className="px-4 py-2 text-xs font-bold text-[#4F46E5] bg-[#EEF2FF] hover:bg-[#E0E7FF] rounded-xl transition"
          >
            Class 10 Streams
          </button>
          <button
            onClick={() => navigateTo('real-cost-calculator', 'Cost Calculator')}
            className="px-4 py-2 text-xs font-bold text-white bg-[#0F172A] hover:bg-[#4F46E5] rounded-xl shadow-xs transition"
          >
            Calculate 4-Year Real Cost
          </button>
        </div>
      </div>
    </div>
  );
};
