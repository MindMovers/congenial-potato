import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  ArrowLeft,
  Search,
  Lock,
  Unlock,
  ChevronDown,
  Menu,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { ProfileLockModal } from './ProfileLockModal';

interface TopHeaderProps {
  onMobileMenuToggle: () => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({ onMobileMenuToggle }) => {
  const {
    historyStack,
    goBack,
    activeProfile,
    allProfiles,
    switchProfile,
    isUnlocked,
    lockProfile,
    searchQuery,
    setSearchQuery,
    navigateTo
  } = useApp();

  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);
  const [showLockModal, setShowLockModal] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-[#F8FAFC]/90 backdrop-blur-md border-b border-[#E2E8F0] px-4 py-3 sm:px-6 transition-all duration-200">
      <div className="flex items-center justify-between gap-3">
        {/* Left: Mobile Toggle, Back Button & Breadcrumbs */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onMobileMenuToggle}
            className="lg:hidden p-2 text-[#0F172A] hover:bg-[#E2E8F0]/50 rounded-lg transition"
            aria-label="Toggle Navigation Menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Prominent Back Button */}
          <button
            onClick={goBack}
            disabled={historyStack.length <= 1}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition border shadow-xs ${
              historyStack.length > 1
                ? 'bg-[#0F172A] text-white border-[#0F172A] hover:bg-[#4F46E5] cursor-pointer'
                : 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed opacity-60'
            }`}
            title="Go back to prior screen"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          {/* Breadcrumb Navigation Guarantee */}
          <nav className="hidden sm:flex items-center gap-1.5 text-xs text-[#64748B] overflow-hidden whitespace-nowrap">
            <span
              onClick={() => navigateTo('dashboard')}
              className="hover:text-[#0F172A] cursor-pointer font-medium hover:underline"
            >
              Home
            </span>
            {historyStack.map((item, index) => (
              <React.Fragment key={index}>
                <span className="text-[#CBD5E1] font-bold">/</span>
                <span
                  onClick={() => navigateTo(item.stage, item.breadcrumbLabel)}
                  className={`max-w-[140px] truncate cursor-pointer transition ${
                    index === historyStack.length - 1
                      ? 'font-bold text-[#0F172A]'
                      : 'hover:text-[#4F46E5]'
                  }`}
                  title={item.breadcrumbLabel}
                >
                  {item.breadcrumbLabel}
                </span>
              </React.Fragment>
            ))}
          </nav>
        </div>

        {/* Center: Global Search Bar */}
        <div className="hidden md:flex flex-1 max-w-xs mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
            <input
              type="text"
              placeholder="Search streams, colleges, exams, notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-full border border-[#E2E8F0] bg-white text-[#0F172A] placeholder-[#64748B]/70 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition"
            />
          </div>
        </div>

        {/* Right: Security Indicator & User Profile Switcher */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => {
              if (isUnlocked) {
                lockProfile();
              } else {
                setShowLockModal(true);
              }
            }}
            className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full border transition ${
              isUnlocked
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
                : 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100'
            }`}
            title={isUnlocked ? 'Profile Unlocked. Click to Lock.' : 'Sensitive Profile Details Locked. Click to Unlock.'}
          >
            {isUnlocked ? (
              <>
                <Unlock className="w-3.5 h-3.5 text-emerald-600" />
                <span className="hidden xs:inline">Unlocked</span>
              </>
            ) : (
              <>
                <Lock className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                <span className="hidden xs:inline">Lock Active</span>
              </>
            )}
          </button>

          <div className="relative">
            <button
              onClick={() => setIsSwitcherOpen(!isSwitcherOpen)}
              className="flex items-center gap-2 p-1 pl-2 pr-2.5 rounded-full bg-white border border-[#E2E8F0] hover:border-[#4F46E5] transition shadow-2xs"
            >
              <img
                src={activeProfile.avatar}
                alt={activeProfile.name}
                className="w-7 h-7 rounded-full object-cover border border-[#E2E8F0]"
              />
              <div className="text-left hidden md:block">
                <div className="text-xs font-bold text-[#0F172A] leading-none">
                  {activeProfile.name}
                </div>
                <div className="text-[10px] text-[#64748B] mt-0.5 leading-none truncate max-w-[110px]">
                  {activeProfile.currentStream}
                </div>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-[#64748B]" />
            </button>

            {isSwitcherOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-[#E2E8F0] py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-3 py-1.5 border-b border-[#F8FAFC] text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                  Active Student Profile
                </div>
                {allProfiles.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      switchProfile(p.id);
                      setIsSwitcherOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-left hover:bg-[#F8FAFC] transition ${
                      p.id === activeProfile.id ? 'bg-[#EEF2FF] border-l-4 border-[#4F46E5]' : ''
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <img
                        src={p.avatar}
                        alt={p.name}
                        className="w-8 h-8 rounded-full object-cover border border-[#E2E8F0]"
                      />
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-[#0F172A] truncate">
                          {p.name}
                        </div>
                        <div className="text-[10px] text-[#64748B] truncate">
                          {p.currentStream} • {p.district}
                        </div>
                      </div>
                    </div>
                    {p.id === activeProfile.id && (
                      <CheckCircle2 className="w-4 h-4 text-[#4F46E5] shrink-0" />
                    )}
                  </button>
                ))}
                <div className="border-t border-[#F8FAFC] pt-1 mt-1 px-2">
                  <button
                    onClick={() => {
                      setIsSwitcherOpen(false);
                      navigateTo('profile-security');
                    }}
                    className="w-full flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold text-[#4F46E5] hover:bg-[#EEF2FF] rounded-lg transition"
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Manage Security & Profiles
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showLockModal && (
        <ProfileLockModal onClose={() => setShowLockModal(false)} />
      )}
    </header>
  );
};
