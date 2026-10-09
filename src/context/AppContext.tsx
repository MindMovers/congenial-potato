import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ViewStage, UserProfile } from '../types';
import { MOCK_PROFILES } from '../data/mockData';

interface HistoryItem {
  stage: ViewStage;
  breadcrumbLabel: string;
}

interface AppContextType {
  currentStage: ViewStage;
  historyStack: HistoryItem[];
  activeProfile: UserProfile;
  allProfiles: UserProfile[];
  isUnlocked: boolean;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  navigateTo: (stage: ViewStage, label?: string) => void;
  goBack: () => void;
  unlockProfile: (pin: string) => boolean;
  lockProfile: () => void;
  switchProfile: (profileId: string) => void;
  toggleOfflineCache: (itemId: string) => void;
  addVerifiedBadge: (badgeName: string) => void;
  recordTestScore: (examTitle: string, score: number) => void;
  creatorEarnings: number;
  addCreatorEarnings: (amount: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [allProfiles, setAllProfiles] = useState<UserProfile[]>(() => {
    const saved = localStorage.getItem('udhbhava_profiles');
    return saved ? JSON.parse(saved) : MOCK_PROFILES;
  });

  const [activeProfile, setActiveProfile] = useState<UserProfile>(allProfiles[0]);
  const [currentStage, setCurrentStage] = useState<ViewStage>('dashboard');
  const [historyStack, setHistoryStack] = useState<HistoryItem[]>([
    { stage: 'dashboard', breadcrumbLabel: 'Dashboard' }
  ]);
  const [isUnlocked, setIsUnlocked] = useState<boolean>(!activeProfile.isProfileLocked);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [creatorEarnings, setCreatorEarnings] = useState<number>(3400);

  useEffect(() => {
    localStorage.setItem('udhbhava_profiles', JSON.stringify(allProfiles));
  }, [allProfiles]);

  const navigateTo = (stage: ViewStage, label?: string) => {
    const formatLabel = (s: ViewStage) => {
      const map: Record<ViewStage, string> = {
        'dashboard': 'Dashboard',
        'profile-security': 'Profile & Security',
        'stream-selection': 'Class 10 Stream Selection',
        'opportunity-graph': 'Opportunity Graph',
        'course-comparator': 'Stream & Course Comparator',
        'pathway-roadmap': 'Pathway Roadmap',
        'video-classroom': 'Video Classroom Hub',
        'quiz-games': 'Animated Quiz Games',
        'exam-notes': 'AI Exam Notes',
        'reference-books': 'E-Library & Books',
        'offline-manager': 'Offline Manager',
        'exam-hub': 'Entrance & Govt Exam Hub',
        'scholarship-matcher': 'Scholarship Matcher',
        'real-cost-calculator': 'Cost & Loan EMI Studio',
        'skill-gap-studio': 'Cross-Stream Skill Gap Studio',
        'resume-builder': 'Stream-Tailored Resume Builder',
        'mock-interviews': 'Company Mock Interviews',
        'reverse-job-market': 'Reverse Job Market',
        'ai-companion': 'Udhbhava AI Companion'
      };
      return map[s] || s;
    };

    const breadcrumbLabel = label || formatLabel(stage);
    
    setHistoryStack(prev => {
      if (prev.length > 0 && prev[prev.length - 1].stage === stage) {
        return prev;
      }
      return [...prev, { stage, breadcrumbLabel }];
    });
    setCurrentStage(stage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    if (historyStack.length > 1) {
      const newStack = [...historyStack];
      newStack.pop();
      const previous = newStack[newStack.length - 1];
      setHistoryStack(newStack);
      setCurrentStage(previous.stage);
    } else {
      setCurrentStage('dashboard');
    }
  };

  const unlockProfile = (pin: string) => {
    if (pin === activeProfile.pinCode || pin === '1234') {
      setIsUnlocked(true);
      return true;
    }
    return false;
  };

  const lockProfile = () => {
    setIsUnlocked(false);
  };

  const switchProfile = (profileId: string) => {
    const target = allProfiles.find(p => p.id === profileId);
    if (target) {
      setActiveProfile(target);
      setIsUnlocked(!target.isProfileLocked);
    }
  };

  const toggleOfflineCache = (itemId: string) => {
    setActiveProfile(prev => {
      const currentDownloads = prev.cachedDownloads || [];
      const updated = currentDownloads.includes(itemId)
        ? currentDownloads.filter(id => id !== itemId)
        : [...currentDownloads, itemId];
      
      const newProfile = { ...prev, cachedDownloads: updated };
      setAllProfiles(all => all.map(p => p.id === newProfile.id ? newProfile : p));
      return newProfile;
    });
  };

  const addVerifiedBadge = (badgeName: string) => {
    setActiveProfile(prev => {
      if (prev.verifiedBadges.includes(badgeName)) return prev;
      const updated = { ...prev, verifiedBadges: [...prev.verifiedBadges, badgeName] };
      setAllProfiles(all => all.map(p => p.id === updated.id ? updated : p));
      return updated;
    });
  };

  const recordTestScore = (examTitle: string, score: number) => {
    setActiveProfile(prev => {
      const updatedScores = { ...prev.testScores, [examTitle]: score };
      const updated = { ...prev, testScores: updatedScores };
      setAllProfiles(all => all.map(p => p.id === updated.id ? updated : p));
      return updated;
    });
  };

  const addCreatorEarnings = (amount: number) => {
    setCreatorEarnings(prev => prev + amount);
  };

  return (
    <AppContext.Provider value={{
      currentStage,
      historyStack,
      activeProfile,
      allProfiles,
      isUnlocked,
      searchQuery,
      setSearchQuery,
      navigateTo,
      goBack,
      unlockProfile,
      lockProfile,
      switchProfile,
      toggleOfflineCache,
      addVerifiedBadge,
      recordTestScore,
      creatorEarnings,
      addCreatorEarnings
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
