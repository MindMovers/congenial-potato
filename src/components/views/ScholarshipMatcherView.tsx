import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MOCK_SCHOLARSHIPS } from '../../data/mockData';
import { CheckCircle2, ExternalLink } from 'lucide-react';

export const ScholarshipMatcherView: React.FC = () => {
  const { activeProfile } = useApp();
  const [maxIncome, setMaxIncome] = useState<number>(activeProfile.familyIncome || 250000);

  const eligibleScholarships = MOCK_SCHOLARSHIPS.filter(
    s => s.maxIncomeLimit >= maxIncome
  );

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      {/* View Header */}
      <div className="bg-white p-6 rounded-3xl border border-[#E2E8F0] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold uppercase tracking-wider mb-1">
            STAGE 4 • AP SCHOLARSHIPS
          </div>
          <h2 className="text-2xl font-extrabold text-[#0F172A]">
            AP & National Scholarship Matcher (JVD & NSP)
          </h2>
          <p className="text-xs text-[#64748B] mt-0.5">
            Verified state schemes: Jagananna Vidya Deevena (100% Fee), Vasathi Deevena (Hostel), and NSP Portal.
          </p>
        </div>

        {/* Income Filter */}
        <div className="bg-[#F8FAFC] p-3 rounded-2xl border border-[#E2E8F0] space-y-1">
          <label className="block text-[10px] font-bold text-[#64748B] uppercase">
            Filter Family Income: ₹{maxIncome.toLocaleString('en-IN')}
          </label>
          <input
            type="range"
            min={50000}
            max={500000}
            step={10000}
            value={maxIncome}
            onChange={(e) => setMaxIncome(Number(e.target.value))}
            className="w-full accent-[#4F46E5]"
          />
        </div>
      </div>

      {/* Matching Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {eligibleScholarships.map((sch) => (
          <div key={sch.id} className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-xs hover:border-[#4F46E5] transition flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#4F46E5] bg-[#EEF2FF] px-2.5 py-0.5 rounded-full uppercase">
                  {sch.type} SCHEME
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {sch.applicationStatus}
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-[#0F172A]">
                {sch.name}
              </h3>

              <div className="p-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs">
                <span className="font-semibold text-[#64748B]">Financial Benefit: </span>
                <span className="font-extrabold text-[#0F172A]">{sch.benefitAmount}</span>
              </div>

              <div className="space-y-1">
                <div className="text-[11px] font-bold text-[#64748B]">Eligibility Terms:</div>
                <ul className="space-y-1">
                  {sch.eligibilityCriteria.map((c, i) => (
                    <li key={i} className="text-xs text-[#0F172A] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between">
              <span className="text-[10px] text-[#64748B]">Deadline: {sch.deadline}</span>
              <a
                href={sch.portalUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-[#0F172A] hover:bg-[#4F46E5] text-white text-xs font-bold transition flex items-center gap-1.5"
              >
                <span>JnanaBhumi Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
