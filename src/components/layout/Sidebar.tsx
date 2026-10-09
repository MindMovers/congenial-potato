import React from 'react';
import { useApp } from '../../context/AppContext';
import type { ViewStage } from '../../types';
import {
  LayoutDashboard,
  UserCheck,
  Compass,
  Network,
  GitCompare,
  MapPin,
  Video,
  Gamepad2,
  FileText,
  BookOpen,
  WifiOff,
  Clock,
  Award,
  Calculator,
  Target,
  FileCheck,
  Building2,
  Briefcase,
  Bot,
  Sparkles,
  ShieldCheck,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onCloseMobile: () => void;
}

interface NavItem {
  id: ViewStage;
  label: string;
  icon: React.ElementType;
  badge?: string;
}

interface NavGroup {
  stageTitle: string;
  stageNumber: string;
  items: NavItem[];
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onCloseMobile }) => {
  const { currentStage, navigateTo, activeProfile, creatorEarnings } = useApp();

  const navGroups: NavGroup[] = [
    {
      stageNumber: 'STAGE 1',
      stageTitle: 'YOUR SPACE',
      items: [
        { id: 'dashboard', label: 'Learner Overview & Dashboard', icon: LayoutDashboard },
        { id: 'profile-security', label: 'Profile & Security Settings', icon: UserCheck, badge: 'Lock' }
      ]
    },
    {
      stageNumber: 'STAGE 2',
      stageTitle: 'DISCOVERY & GRAPH EXPLORATION',
      items: [
        { id: 'stream-selection', label: 'Class 10 & Stream Selection', icon: Compass, badge: 'AP 2026' },
        { id: 'opportunity-graph', label: 'Student Opportunity Graph', icon: Network, badge: 'Visual' },
        { id: 'course-comparator', label: 'Course & Career Comparator', icon: GitCompare },
        { id: 'pathway-roadmap', label: 'Step-by-Step Pathway Roadmap', icon: MapPin }
      ]
    },
    {
      stageNumber: 'STAGE 3',
      stageTitle: 'LEARNING, CLASSES & CREATOR PORTAL',
      items: [
        { id: 'video-classroom', label: 'Video Class Hub & Creator Upload', icon: Video, badge: `₹${creatorEarnings}` },
        { id: 'quiz-games', label: 'Post-Class Animated Quiz Games', icon: Gamepad2, badge: 'Interactive' },
        { id: 'exam-notes', label: 'AI-Refined Exam Notes', icon: FileText, badge: 'Pass-Mode' },
        { id: 'reference-books', label: 'Reference Books & E-Library', icon: BookOpen },
        { id: 'offline-manager', label: 'Offline Download Manager', icon: WifiOff, badge: 'IndexedDB' }
      ]
    },
    {
      stageNumber: 'STAGE 4',
      stageTitle: 'EXAMS, SCHOLARSHIPS & AID',
      items: [
        { id: 'exam-hub', label: 'Entrance & Govt Exam Hub', icon: Clock, badge: 'PYQ Engine' },
        { id: 'scholarship-matcher', label: 'AP & National Scholarship Matcher', icon: Award, badge: 'JVD & NSP' },
        { id: 'real-cost-calculator', label: 'Real-Cost & Education Loan EMI', icon: Calculator }
      ]
    },
    {
      stageNumber: 'STAGE 5',
      stageTitle: 'SKILLS, INTERVIEWS & PLACEMENTS',
      items: [
        { id: 'skill-gap-studio', label: 'Skill-Gap Diagnostic Studio', icon: Target, badge: 'Multi-Stream' },
        { id: 'resume-builder', label: 'AI Stream-Tailored Resume', icon: FileCheck },
        { id: 'mock-interviews', label: 'Company HR & Tech Interviews', icon: Building2, badge: 'STAR' },
        { id: 'reverse-job-market', label: 'Reverse Job Market', icon: Briefcase, badge: 'Employers' }
      ]
    },
    {
      stageNumber: 'STAGE 6',
      stageTitle: 'PERSONAL COMPANION',
      items: [
        { id: 'ai-companion', label: 'Udhbhava AI Companion', icon: Bot, badge: 'Bilingual' }
      ]
    }
  ];

  const handleSelect = (stage: ViewStage, label: string) => {
    navigateTo(stage, label);
    onCloseMobile();
  };

  return (
    <>
      {isOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 bg-[#0F172A]/60 backdrop-blur-xs z-40 lg:hidden transition-opacity"
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-[270px] bg-[#0F172A] text-white flex flex-col transition-transform duration-300 ease-in-out shadow-2xl lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-5 border-b border-slate-800 flex flex-col gap-2 relative bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#4F46E5] flex items-center justify-center text-white shadow-md font-extrabold text-xl tracking-tight border border-indigo-400/30">
                U
              </div>
              <div>
                <h1 className="text-xl font-extrabold tracking-wider text-white font-sans flex items-center gap-1.5">
                  UDHBHAVA
                  <Sparkles className="w-4 h-4 text-[#818CF8]" />
                </h1>
                <p className="text-[10px] text-[#94A3B8] font-medium tracking-tight">
                  Where Potential Meets Possibility
                </p>
              </div>
            </div>
            <button
              onClick={onCloseMobile}
              className="lg:hidden text-[#94A3B8] hover:text-white p-1 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-2 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1E293B] border border-slate-700/60">
            <img
              src={activeProfile.avatar}
              alt={activeProfile.name}
              className="w-6 h-6 rounded-full object-cover border border-slate-600"
            />
            <div className="min-w-0 flex-1">
              <div className="text-xs font-semibold text-white truncate">
                {activeProfile.name}
              </div>
              <div className="text-[10px] text-[#94A3B8] truncate">
                {activeProfile.currentStream}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-5 custom-scrollbar">
          {navGroups.map((group) => (
            <div key={group.stageNumber} className="space-y-1">
              <div className="px-3 text-[10px] font-bold text-[#64748B] uppercase tracking-widest flex items-center justify-between">
                <span>{group.stageNumber}</span>
                <span className="text-[9px] text-slate-500">{group.stageTitle}</span>
              </div>
              <div className="space-y-0.5">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentStage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(item.id, item.label)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition group ${
                        isActive
                          ? 'bg-[#4F46E5] text-white shadow-md border border-indigo-400/30 font-semibold'
                          : 'text-[#94A3B8] hover:bg-[#1E293B] hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Icon
                          className={`w-4 h-4 shrink-0 transition ${
                            isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'
                          }`}
                        />
                        <span className="truncate">{item.label}</span>
                      </div>
                      {item.badge && (
                        <span
                          className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider shrink-0 ${
                            isActive
                              ? 'bg-white text-[#4F46E5]'
                              : 'bg-slate-800 text-[#94A3B8] group-hover:bg-indigo-900 group-hover:text-indigo-200'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 border-t border-slate-800 bg-[#1E293B] text-center">
          <div className="text-[10px] text-[#94A3B8] font-medium flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
            <span>AP Education & Skill Verified</span>
          </div>
        </div>
      </aside>
    </>
  );
};
