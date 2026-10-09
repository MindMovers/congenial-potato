import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2 } from 'lucide-react';

export const PathwayRoadmapView: React.FC = () => {
  const { activeProfile } = useApp();

  const MILESTONES = [
    {
      stage: 'Phase 1: Class 10 Board Completion',
      timeline: 'Completed (88% GPA)',
      status: 'Completed',
      desc: 'SSC Board exams cleared with strong distinction in Mathematics and Science.',
      action: 'Verified'
    },
    {
      stage: 'Phase 2: Stream Selection & Inter Foundation',
      timeline: 'Months 1 - 6 (Current)',
      status: 'In Progress',
      desc: 'Enrolled in 2-year Intermediate MPC/BiPC program. Covering core syllabus physics, chemistry, and math fundamentals.',
      action: 'Study Pass-Guarantee Notes'
    },
    {
      stage: 'Phase 3: AP EAPCET & NEET High-Yield PYQs',
      timeline: 'Months 12 - 18',
      status: 'Upcoming',
      desc: 'Solve past 15 years entrance exam papers with timed mock test engine.',
      action: 'Take Mock Tests'
    },
    {
      stage: 'Phase 4: College Admissions & JVD Scholarship',
      timeline: 'Month 24',
      status: 'Upcoming',
      desc: 'Secure top rank in EAPCET/NEET and apply for 100% tuition reimbursement via JnanaBhumi portal.',
      action: 'Check Eligibility'
    },
    {
      stage: 'Phase 5: Graduation & Reverse Job Placement',
      timeline: 'Years 3 - 6',
      status: 'Upcoming',
      desc: 'Complete degree coursework, earn verified skill badges, and accept interview invites from recruiters.',
      action: 'View Reverse Market'
    }
  ];

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white p-6 rounded-3xl border border-[#E2E8F0] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold uppercase tracking-wider mb-1">
            STAGE 2 • ROADMAP
          </div>
          <h2 className="text-2xl font-extrabold text-[#0F172A]">
            Step-by-Step Pathway Roadmap & Timeline
          </h2>
          <p className="text-xs text-[#64748B] mt-0.5">
            Personalized execution timeline tracking {activeProfile.name}'s goal toward becoming a <span className="font-bold text-[#0F172A]">{activeProfile.targetRole}</span>.
          </p>
        </div>
      </div>

      {/* Timeline List */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs relative">
        <div className="absolute left-[39px] sm:left-[47px] top-12 bottom-12 w-0.5 bg-[#CBD5E1]" />

        <div className="space-y-8 relative">
          {MILESTONES.map((m, idx) => (
            <div key={idx} className="flex items-start gap-4 sm:gap-6 group">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm shrink-0 z-10 shadow-xs ${
                m.status === 'Completed'
                  ? 'bg-[#10B981] text-white'
                  : m.status === 'In Progress'
                  ? 'bg-[#4F46E5] text-white ring-4 ring-[#C7D2FE]'
                  : 'bg-[#F8FAFC] text-[#64748B] border-2 border-[#CBD5E1]'
              }`}>
                {m.status === 'Completed' ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
              </div>

              <div className="flex-1 bg-[#F8FAFC] p-5 rounded-2xl border border-[#E2E8F0] space-y-2 group-hover:border-[#4F46E5] transition">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-base font-extrabold text-[#0F172A]">
                    {m.stage}
                  </h3>
                  <span className="text-xs font-bold text-[#4F46E5] bg-[#EEF2FF] px-2.5 py-0.5 rounded-full self-start sm:self-auto">
                    {m.timeline}
                  </span>
                </div>
                <p className="text-xs text-[#64748B]">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
