export type ViewStage = 
  | 'dashboard'
  | 'profile-security'
  | 'stream-selection'
  | 'opportunity-graph'
  | 'course-comparator'
  | 'pathway-roadmap'
  | 'video-classroom'
  | 'quiz-games'
  | 'exam-notes'
  | 'reference-books'
  | 'offline-manager'
  | 'exam-hub'
  | 'scholarship-matcher'
  | 'real-cost-calculator'
  | 'skill-gap-studio'
  | 'resume-builder'
  | 'mock-interviews'
  | 'reverse-job-market'
  | 'ai-companion';

export interface UserProfile {
  id: string;
  name: string;
  currentStream: string;
  targetRole: string;
  district: string;
  grade: string;
  avatar: string;
  isProfileLocked: boolean;
  pinCode: string;
  familyIncome: number;
  aadhaarLast4: string;
  scholarshipId: string;
  completedModules: string[];
  testScores: Record<string, number>;
  verifiedBadges: string[];
  cachedDownloads: string[];
}

export interface College {
  id: string;
  name: string;
  district: string;
  type: 'Government' | 'Private' | 'Autonomous' | 'Polytechnic';
  category: 'Engineering' | 'Medical/Healthcare' | 'Commerce/Arts' | 'Vocational';
  nirfRank?: number;
  estYear: number;
  totalSeats: number;
  avgFeesPerYear: number;
  cutoffRank: string;
  placementRate: number;
  avgPackageLpa: number;
  facilities: string[];
  popularCourses: string[];
}

export interface Scholarship {
  id: string;
  name: string;
  type: 'State AP' | 'National' | 'Corporate';
  benefitAmount: string;
  eligibilityCriteria: string[];
  maxIncomeLimit: number;
  documentsRequired: string[];
  deadline: string;
  portalUrl: string;
  applicationStatus?: 'Eligible' | 'Applied' | 'Approved' | 'Requires Document';
  category: string;
}

export interface ExamQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  subject: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface ExamMock {
  id: string;
  title: string;
  category: 'AP EAPCET' | 'NEET UG' | 'JEE Main' | 'SSC' | 'RRB NTPC' | 'APPSC / AP Police';
  totalQuestions: number;
  timeLimitMinutes: number;
  year: string;
  questions: ExamQuestion[];
}

export interface GraphNode {
  id: string;
  title: string;
  category: 'Stream' | 'Exam' | 'Degree' | 'Skill' | 'Career';
  x: number;
  y: number;
  description: string;
  duration?: string;
  avgSalary?: string;
  costEst?: string;
  prerequisites?: string[];
}

export interface GraphEdge {
  from: string;
  to: string;
  label?: string;
}

export interface VideoLecture {
  id: string;
  title: string;
  creatorName: string;
  creatorAvatar: string;
  subject: string;
  stream: string;
  duration: string;
  viewsCount: number;
  earningsRupees: number;
  thumbnailUrl: string;
  videoUrl: string;
  quizGameId: string;
  summaryNotes: string;
}

export interface NoteModule {
  id: string;
  subject: string;
  topic: string;
  stream: string;
  standardNotesEnglish: string;
  standardNotesTelugu: string;
  passGuaranteeNotesEnglish: {
    coreFormulae: string[];
    highWeightageQuestions: string[];
    mnemonics: string[];
    quickSummary: string;
  };
  passGuaranteeNotesTelugu: {
    coreFormulae: string[];
    highWeightageQuestions: string[];
    mnemonics: string[];
    quickSummary: string;
  };
  downloadSizeMb: number;
  isCachedOffline?: boolean;
}

export interface SkillGapTarget {
  id: string;
  roleName: string;
  streamCategory: 'Engineering' | 'Healthcare/Medical' | 'Commerce/CA' | 'Design' | 'Civil Services' | 'Vocational';
  benchmarks: {
    skillName: string;
    requiredLevel: number; // 0 - 100
    category: 'Core Technical' | 'Domain Knowledge' | 'Practical / Lab' | 'Soft Skills';
  }[];
}

export interface CompanyInterviewModule {
  id: string;
  companyName: string;
  logo: string;
  roleTitle: string;
  behavioralQuestions: {
    id: string;
    question: string;
    starPrompt: {
      situation: string;
      task: string;
      action: string;
      result: string;
    };
    sampleAnswer: string;
  }[];
  technicalQuestions: {
    id: string;
    question: string;
    keyTopics: string[];
    sampleAnswer: string;
  }[];
}
