import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Sidebar } from './components/layout/Sidebar';
import { TopHeader } from './components/layout/TopHeader';

// Stage Views
import { DashboardView } from './components/views/DashboardView';
import { ProfileSecurityView } from './components/views/ProfileSecurityView';
import { StreamSelectionView } from './components/views/StreamSelectionView';
import { OpportunityGraphView } from './components/views/OpportunityGraphView';
import { CourseComparatorView } from './components/views/CourseComparatorView';
import { PathwayRoadmapView } from './components/views/PathwayRoadmapView';
import { VideoClassroomView } from './components/views/VideoClassroomView';
import { PostClassQuizView } from './components/views/PostClassQuizView';
import { ExamNotesView } from './components/views/ExamNotesView';
import { ReferenceBooksView } from './components/views/ReferenceBooksView';
import { OfflineManagerView } from './components/views/OfflineManagerView';
import { ExamHubView } from './components/views/ExamHubView';
import { ScholarshipMatcherView } from './components/views/ScholarshipMatcherView';
import { RealCostCalculatorView } from './components/views/RealCostCalculatorView';
import { SkillGapStudioView } from './components/views/SkillGapStudioView';
import { ResumeBuilderView } from './components/views/ResumeBuilderView';
import { MockInterviewView } from './components/views/MockInterviewView';
import { ReverseJobMarketView } from './components/views/ReverseJobMarketView';
import { AiCompanionView } from './components/views/AiCompanionView';

const MainWorkspace: React.FC = () => {
  const { currentStage } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderActiveStage = () => {
    switch (currentStage) {
      case 'dashboard':
        return <DashboardView />;
      case 'profile-security':
        return <ProfileSecurityView />;
      case 'stream-selection':
        return <StreamSelectionView />;
      case 'opportunity-graph':
        return <OpportunityGraphView />;
      case 'course-comparator':
        return <CourseComparatorView />;
      case 'pathway-roadmap':
        return <PathwayRoadmapView />;
      case 'video-classroom':
        return <VideoClassroomView />;
      case 'quiz-games':
        return <PostClassQuizView />;
      case 'exam-notes':
        return <ExamNotesView />;
      case 'reference-books':
        return <ReferenceBooksView />;
      case 'offline-manager':
        return <OfflineManagerView />;
      case 'exam-hub':
        return <ExamHubView />;
      case 'scholarship-matcher':
        return <ScholarshipMatcherView />;
      case 'real-cost-calculator':
        return <RealCostCalculatorView />;
      case 'skill-gap-studio':
        return <SkillGapStudioView />;
      case 'resume-builder':
        return <ResumeBuilderView />;
      case 'mock-interviews':
        return <MockInterviewView />;
      case 'reverse-job-market':
        return <ReverseJobMarketView />;
      case 'ai-companion':
        return <AiCompanionView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex font-sans antialiased">
      {/* Sidebar Navigation */}
      <Sidebar
        isOpen={mobileMenuOpen}
        onCloseMobile={() => setMobileMenuOpen(false)}
      />

      {/* Main Workspace Area (Offset by sidebar width 270px on desktop) */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-[270px] transition-all">
        <TopHeader
          onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        />

        <main className="flex-1 p-4 sm:p-6 md:p-8 max-w-7xl w-full mx-auto">
          {renderActiveStage()}
        </main>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainWorkspace />
    </AppProvider>
  );
}
