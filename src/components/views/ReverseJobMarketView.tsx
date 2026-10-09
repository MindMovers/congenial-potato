import React from 'react';
import { Mail } from 'lucide-react';

export const ReverseJobMarketView: React.FC = () => {
  const INVITES = [
    { company: 'Tata Consultancy Services (TCS)', role: 'Junior AI Engineer Trainee', salary: '₹7.5 LPA', date: 'Today', status: 'Invite Pending' },
    { company: 'Apollo Hospitals Vizag', role: 'Clinical Data Coordinator', salary: '₹6.2 LPA', date: 'Yesterday', status: 'Invite Pending' },
    { company: 'Dr. Reddy’s Laboratories', role: 'Quality Control Pharmacist', salary: '₹5.8 LPA', date: '3 days ago', status: 'Interview Scheduled' }
  ];

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      <div className="bg-white p-6 rounded-3xl border border-[#E2E8F0] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold uppercase tracking-wider mb-1">
            STAGE 5 • REVERSE HIRING
          </div>
          <h2 className="text-2xl font-extrabold text-[#0F172A]">
            Reverse Job Market Portal
          </h2>
          <p className="text-xs text-[#64748B] mt-0.5">
            Companies approach you! Top recruiters search verified Udhbhava student scores and issue direct interview invites.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-xs space-y-4">
        <h3 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
          <Mail className="w-5 h-5 text-[#4F46E5]" />
          Direct Employer Interview Invites Received
        </h3>

        <div className="space-y-3">
          {INVITES.map((inv, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold text-[#4F46E5] bg-[#EEF2FF] px-2.5 py-0.5 rounded-full uppercase">
                  {inv.company}
                </span>
                <h4 className="text-sm font-bold text-[#0F172A] mt-1">{inv.role}</h4>
                <div className="text-xs text-[#64748B] mt-0.5">Offered CTC: <span className="font-bold text-emerald-700">{inv.salary}</span> • Received {inv.date}</div>
              </div>

              <button
                onClick={() => alert(`Accepted interview invite from ${inv.company}!`)}
                className="px-4 py-2 rounded-xl bg-[#0F172A] hover:bg-[#4F46E5] text-white font-bold text-xs shadow-xs transition shrink-0 cursor-pointer"
              >
                Accept Interview Invite
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
