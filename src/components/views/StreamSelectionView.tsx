import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  BookOpen,
  Building2,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Award
} from 'lucide-react';

interface StreamOption {
  id: string;
  code: string;
  name: string;
  tagline: string;
  subjects: string[];
  entranceExams: string[];
  popularCareers: string[];
  avgStartingSalary: string;
  apGovtPriority: string;
  duration: string;
  fitFor: string;
  color: string;
}

export const StreamSelectionView: React.FC = () => {
  const { navigateTo } = useApp();
  const [selectedStream, setSelectedStream] = useState<string>('mpc');

  const STREAMS: StreamOption[] = [
    {
      id: 'mpc',
      code: 'MPC',
      name: 'Mathematics, Physics, Chemistry',
      tagline: 'The Gateway to Engineering, Software, Data Science & Physical Sciences',
      subjects: ['Mathematics (1A, 1B, 2A, 2B)', 'Physics', 'Chemistry'],
      entranceExams: ['AP EAPCET (Engineering)', 'JEE Main', 'JEE Advanced', 'BITSAT', 'AP ECET (Lateral)'],
      popularCareers: ['AI & Data Science Engineer', 'Robotics Specialist', 'Aerospace Engineer', 'Cloud Architect'],
      avgStartingSalary: '₹6.0 - ₹25.0 LPA',
      apGovtPriority: 'High Priority in AP IT Hubs (Vizag & Tirupati)',
      duration: '2 Years (Inter) + 4 Years (B.Tech)',
      fitFor: 'Students who love solving mathematical puzzles, logic, coding, and spatial mechanics.',
      color: '#0F172A'
    },
    {
      id: 'bipc',
      code: 'BiPC',
      name: 'Biology, Physics, Chemistry',
      tagline: 'The Pathway to Medicine, Clinical Research, Pharmacy & Agriculture',
      subjects: ['Botany', 'Zoology', 'Physics', 'Chemistry'],
      entranceExams: ['NEET UG', 'AP EAPCET (BiPC Agriculture & Pharmacy)', 'AIIMS', 'ICAR UG'],
      popularCareers: ['MBBS Doctor', 'Clinical Data Specialist', 'B.Pharm / Pharm.D', 'Agricultural Scientist'],
      avgStartingSalary: '₹5.5 - ₹20.0 LPA',
      apGovtPriority: 'Supported by AP Medical Colleges & Pharma Hubs (Vizag & Guntur)',
      duration: '2 Years (Inter) + 4-5.5 Years (MBBS/Pharm.D)',
      fitFor: 'Students fascinated by human anatomy, medicine, biological life, plants, and clinical trials.',
      color: '#4F46E5'
    },
    {
      id: 'mec',
      code: 'MEC',
      name: 'Mathematics, Economics, Commerce',
      tagline: 'The Strategic Blend of Financial Analytics, Business & Chartered Accountancy',
      subjects: ['Mathematics', 'Economics', 'Commerce & Accountancy'],
      entranceExams: ['CA Foundation', 'CMA Foundation', 'AP ICET', 'CUET UG (B.Com / BBA)'],
      popularCareers: ['Chartered Accountant (CA)', 'Financial Risk Analyst', 'Investment Banker', 'Tax Consultant'],
      avgStartingSalary: '₹5.0 - ₹18.0 LPA',
      apGovtPriority: 'High Demand in AP Commercial Centers (Vijayawada & Vizag)',
      duration: '2 Years (Inter) + 3 Years (B.Com/BBA) + CA Articleship',
      fitFor: 'Students strong in math who want to apply numbers directly to money, corporate finance, and business.',
      color: '#1E293B'
    },
    {
      id: 'cec',
      code: 'CEC',
      name: 'Civics, Economics, Commerce',
      tagline: 'Focus on Law, Business Administration, Civil Services & Public Governance',
      subjects: ['Civics / Political Science', 'Economics', 'Commerce'],
      entranceExams: ['CLAT (Law)', 'AP LAWCET', 'APPSC Group Services', 'UPSC CSE'],
      popularCareers: ['Corporate Lawyer', 'IAS / IPS Civil Servant', 'Economic Policy Advisor', 'Business Manager'],
      avgStartingSalary: '₹4.5 - ₹16.0 LPA',
      apGovtPriority: 'Foundational Stream for AP Civil Servants & Legal Advisors',
      duration: '2 Years (Inter) + 3-5 Years (BA/LLB)',
      fitFor: 'Students interested in Indian Constitution, politics, economics, legal debates, and civil service.',
      color: '#334155'
    },
    {
      id: 'polytechnic',
      code: 'POLYCET',
      name: '3-Year Polytechnic Engineering Diploma',
      tagline: 'Direct Hands-On Technical Training After Class 10 with Lateral Entry to B.Tech',
      subjects: ['Applied Physics', 'Applied Math', 'Branch Engineering Labs (CS/Mech/ECE)'],
      entranceExams: ['AP POLYCET (Class 10)', 'AP ECET (For B.Tech 2nd Year)'],
      popularCareers: ['Hardware Specialist', 'Sub-Engineer', 'PLC Automation Technician', 'Plant Supervisor'],
      avgStartingSalary: '₹3.5 - ₹8.0 LPA',
      apGovtPriority: '100% Eligible for JVD Fee Reimbursement & Skill AP Industry Internships',
      duration: '3 Years Diploma (Option to join B.Tech 2nd Year via AP ECET)',
      fitFor: 'Students who want immediate job-oriented practical technical skills right after 10th class.',
      color: '#64748B'
    },
    {
      id: 'iti',
      code: 'ITI',
      name: 'Industrial Training Institute (Trade Certifications)',
      tagline: 'Short-Term High-Demand Skilled Trades in Electrical, Fitter & Machinist',
      subjects: ['Electrician Trade', 'Fitter & CNC Machining', 'Workshop Calculation & Science'],
      entranceExams: ['AP ITI Merit Admission', 'NCTVT Trade Certificate Exam'],
      popularCareers: ['Industrial Electrician', 'CNC Operator', 'Precision Tool Maker', 'Solar Installer'],
      avgStartingSalary: '₹3.0 - ₹6.5 LPA',
      apGovtPriority: 'Direct Hiring by AP Heavy Heavy Metal & Maritime Industries (Anakapalli/Vizag)',
      duration: '1 - 2 Years Technical Certification',
      fitFor: 'Students seeking fast 1-2 year trade certification for immediate workshop and industrial employment.',
      color: '#475569'
    }
  ];

  const current = STREAMS.find(s => s.id === selectedStream) || STREAMS[0];

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white p-6 rounded-3xl border border-[#E2E8F0] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold uppercase tracking-wider mb-1">
            STAGE 2 • DISCOVERY
          </div>
          <h2 className="text-2xl font-extrabold text-[#0F172A]">
            Class 10 & Stream Selection Guide (AP 2026)
          </h2>
          <p className="text-xs text-[#64748B] mt-0.5">
            Discover the ideal 2-year Intermediate or Diploma path after 10th Class with subject breakdowns and AP entrance requirements.
          </p>
        </div>

        <button
          onClick={() => navigateTo('course-comparator', 'Comparator')}
          className="px-4 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#4F46E5] text-white text-xs font-bold shadow-md transition flex items-center gap-2 shrink-0"
        >
          Compare Streams Side-by-Side
          <ArrowRight className="w-4 h-4 text-[#EEF2FF]" />
        </button>
      </div>

      {/* Stream Tabs Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {STREAMS.map((s) => (
          <button
            key={s.id}
            onClick={() => setSelectedStream(s.id)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition whitespace-nowrap border ${
              selectedStream === s.id
                ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-md scale-105'
                : 'bg-white text-[#64748B] border-[#E2E8F0] hover:bg-[#EEF2FF] hover:text-[#4F46E5]'
            }`}
          >
            {s.code} — {s.name.split(',')[0]}
          </button>
        ))}
      </div>

      {/* Detailed Stream Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div className="space-y-1">
            <div className="inline-block px-3 py-1 rounded-full bg-[#EEF2FF] text-[#4F46E5] font-extrabold text-xs">
              {current.code} STREAM
            </div>
            <h3 className="text-2xl font-extrabold text-[#0F172A]">
              {current.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#4F46E5] font-medium">
              "{current.tagline}"
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-[#E2E8F0] flex flex-col sm:items-end justify-center">
            <div className="text-[10px] font-bold text-[#64748B] uppercase">Average Salary Potential</div>
            <div className="text-lg font-extrabold text-[#0F172A]">{current.avgStartingSalary}</div>
            <div className="text-[10px] text-[#10B981] font-semibold">{current.duration}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-[#E2E8F0] space-y-3">
            <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#4F46E5]" />
              Core Syllabus Subjects
            </h4>
            <ul className="space-y-2">
              {current.subjects.map((sub, i) => (
                <li key={i} className="text-xs font-semibold text-[#0F172A] flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span>{sub}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-[#E2E8F0] space-y-3">
            <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#4F46E5]" />
              AP & National Entrance Exams
            </h4>
            <ul className="space-y-2">
              {current.entranceExams.map((exam, i) => (
                <li key={i} className="text-xs font-semibold text-[#0F172A] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] shrink-0" />
                  <span>{exam}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-[#E2E8F0] space-y-3">
            <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-[#4F46E5]" />
              Top Dream Careers
            </h4>
            <ul className="space-y-2">
              {current.popularCareers.map((car, i) => (
                <li key={i} className="text-xs font-semibold text-[#0F172A] flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-[#4F46E5] shrink-0" />
                  <span>{car}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-[#EEF2FF] p-4 rounded-2xl border border-[#E2E8F0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold text-[#0F172A]">Best Fit For You If: </span>
            <span className="text-xs text-[#0F172A]">{current.fitFor}</span>
          </div>
          <button
            onClick={() => navigateTo('opportunity-graph', `Opportunity Graph - ${current.code}`)}
            className="px-4 py-2 rounded-xl bg-[#0F172A] text-white text-xs font-bold hover:bg-[#4F46E5] transition shrink-0"
          >
            View Node Graph
          </button>
        </div>
      </div>
    </div>
  );
};
