import React, { useState } from 'react';

export const CourseComparatorView: React.FC = () => {
  const [streamA, setStreamA] = useState('mpc');
  const [streamB, setStreamB] = useState('bipc');

  const OPTIONS = [
    {
      id: 'mpc',
      name: 'Inter MPC (Engineering / AI)',
      duration: '4 Years B.Tech',
      exam: 'AP EAPCET / JEE Main',
      salary: '₹6.5 - ₹24 LPA',
      difficulty: 'High Math & Physics',
      jobStability: 'Very High (IT & Software)',
      investment: '₹1.5L - ₹6.0L',
      keySkill: 'Coding, Data Structures, Calculus',
      apColleges: 'AU Vizag, JNTUK Kakinada'
    },
    {
      id: 'bipc',
      name: 'Inter BiPC (Medical / Pharma)',
      duration: '5.5 Yrs (MBBS) / 4 Yrs (Pharm.D)',
      exam: 'NEET UG / AP EAPCET (BiPC)',
      salary: '₹6.0 - ₹20 LPA',
      difficulty: 'High Memory & Biology',
      jobStability: 'Essential / Recession-Proof',
      investment: '₹1.0L - ₹15.0L',
      keySkill: 'Anatomy, Pharmacology, Clinical GCP',
      apColleges: 'Andhra Med Vizag, Siddhartha Med'
    },
    {
      id: 'mec',
      name: 'Inter MEC (CA / Finance)',
      duration: '3 Yrs B.Com + 3 Yrs CA',
      exam: 'CA Foundation / AP ICET',
      salary: '₹5.5 - ₹18 LPA',
      difficulty: 'High Audit & Accountancy',
      jobStability: 'High (Corporate Finance)',
      investment: '₹80,000 - ₹3.0L',
      keySkill: 'GST Tax, Financial Modeling',
      apColleges: 'SVU Tirupati, Loyola Vijayawada'
    },
    {
      id: 'polytechnic',
      name: '3-Year Polytechnic Diploma',
      duration: '3 Years Diploma',
      exam: 'AP POLYCET (10th) / AP ECET',
      salary: '₹3.5 - ₹8 LPA',
      difficulty: 'Practical Practical Labs',
      jobStability: 'Moderate - High (Industrial)',
      investment: '₹15,000 - ₹50,000 (JVD 100%)',
      keySkill: 'PLC Automation, Hardware',
      apColleges: 'Govt Poly Vijayawada'
    }
  ];

  const itemA = OPTIONS.find(o => o.id === streamA) || OPTIONS[0];
  const itemB = OPTIONS.find(o => o.id === streamB) || OPTIONS[1];

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white p-6 rounded-3xl border border-[#E2E8F0] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold uppercase tracking-wider mb-1">
            STAGE 2 • DISCOVERY
          </div>
          <h2 className="text-2xl font-extrabold text-[#0F172A]">
            Course & Career What-If Comparator
          </h2>
          <p className="text-xs text-[#64748B] mt-0.5">
            Compare duration, exam difficulty, salary expectations, and AP college options side-by-side.
          </p>
        </div>
      </div>

      {/* Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-[#E2E8F0] flex items-center justify-between">
          <span className="text-xs font-bold text-[#0F172A]">Option A:</span>
          <select
            value={streamA}
            onChange={(e) => setStreamA(e.target.value)}
            className="px-3 py-1.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-xs font-bold text-[#0F172A] focus:ring-2 focus:ring-[#4F46E5]"
          >
            {OPTIONS.map(o => (
              <option key={o.id} value={o.id}>{o.name}</option>
            ))}
          </select>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-[#E2E8F0] flex items-center justify-between">
          <span className="text-xs font-bold text-[#4F46E5]">Option B:</span>
          <select
            value={streamB}
            onChange={(e) => setStreamB(e.target.value)}
            className="px-3 py-1.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-xs font-bold text-[#0F172A] focus:ring-2 focus:ring-[#4F46E5]"
          >
            {OPTIONS.map(o => (
              <option key={o.id} value={o.id}>{o.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-xs space-y-4">
        <div className="grid grid-cols-3 gap-4 pb-4 border-b border-slate-100 text-xs font-extrabold text-[#0F172A]">
          <div>Metric Dimension</div>
          <div className="text-[#0F172A] bg-[#EEF2FF] p-2 rounded-xl text-center">{itemA.name}</div>
          <div className="text-[#4F46E5] bg-[#F1F5F9] p-2 rounded-xl text-center">{itemB.name}</div>
        </div>

        {[
          { label: 'Course Duration', a: itemA.duration, b: itemB.duration },
          { label: 'Key Entrance Exam', a: itemA.exam, b: itemB.exam },
          { label: 'Starting Salary Range', a: itemA.salary, b: itemB.salary, highlight: true },
          { label: 'Syllabus Focus', a: itemA.difficulty, b: itemB.difficulty },
          { label: 'Job Stability / Demand', a: itemA.jobStability, b: itemB.jobStability },
          { label: 'Est. Total Investment', a: itemA.investment, b: itemB.investment },
          { label: 'Core Skill Focus', a: itemA.keySkill, b: itemB.keySkill },
          { label: 'Top AP Institutions', a: itemA.apColleges, b: itemB.apColleges }
        ].map((row, idx) => (
          <div key={idx} className={`grid grid-cols-3 gap-4 p-3 rounded-2xl text-xs ${row.highlight ? 'bg-[#EEF2FF]/60 font-bold' : 'hover:bg-[#F8FAFC]'}`}>
            <div className="font-semibold text-[#64748B] flex items-center">{row.label}</div>
            <div className="text-[#0F172A] font-medium text-center">{row.a}</div>
            <div className="text-[#0F172A] font-medium text-center">{row.b}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
