import React, { useState } from 'react';
import { AP_DISTRICTS } from '../../data/mockData';
import { Calculator, Landmark } from 'lucide-react';

export const RealCostCalculatorView: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(AP_DISTRICTS[0].name);
  const [tuitionPerYear, setTuitionPerYear] = useState(35000);
  const [hasJvdFeeReimbursement, setHasJvdFeeReimbursement] = useState(true);
  const [courseYears, setCourseYears] = useState(4);

  // EMI Studio state
  const [loanPrincipal, setLoanPrincipal] = useState(300000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenureYears, setTenureYears] = useState(7);

  const distObj = AP_DISTRICTS.find(d => d.name === selectedDistrict) || AP_DISTRICTS[0];
  const livingCostEstPerYear = distObj.livingCost.includes('High') ? 75000 : 50000;

  const totalTuitionFull = tuitionPerYear * courseYears;
  const jvdDeduction = hasJvdFeeReimbursement ? totalTuitionFull : 0;
  const netTuitionCost = totalTuitionFull - jvdDeduction;
  const totalLivingCost = livingCostEstPerYear * courseYears;
  const netOutofPocketTotal = netTuitionCost + totalLivingCost;

  // EMI Calculation: P * r * (1+r)^n / ((1+r)^n - 1)
  const r = (interestRate / 100) / 12;
  const n = tenureYears * 12;
  const monthlyEmi = Math.round((loanPrincipal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
  const totalLoanRepayment = monthlyEmi * n;
  const totalInterestPaid = totalLoanRepayment - loanPrincipal;

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white p-6 rounded-3xl border border-[#E2E8F0] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold uppercase tracking-wider mb-1">
            STAGE 4 • REAL COST & LOAN STUDIO
          </div>
          <h2 className="text-2xl font-extrabold text-[#0F172A]">
            Real-Cost Calculator & Education Loan EMI Studio
          </h2>
          <p className="text-xs text-[#64748B] mt-0.5">
            Calculate net out-of-pocket costs with AP JVD fee waivers across all 26 AP districts.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Section 1: Real Degree Cost Calculator */}
        <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-xs space-y-5">
          <h3 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
            <Calculator className="w-5 h-5 text-[#4F46E5]" />
            4-Year Degree Real Out-of-Pocket Cost
          </h3>

          <div className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold text-[#64748B] mb-1">Select AP District Study Hub</label>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] font-bold"
              >
                {AP_DISTRICTS.map(d => (
                  <option key={d.name} value={d.name}>{d.name} ({d.hub})</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-[#64748B] mb-1">Tuition Fee / Year</label>
                <input
                  type="number"
                  value={tuitionPerYear}
                  onChange={(e) => setTuitionPerYear(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] font-bold text-[#0F172A]"
                />
              </div>
              <div>
                <label className="block font-semibold text-[#64748B] mb-1">Course Duration</label>
                <select
                  value={courseYears}
                  onChange={(e) => setCourseYears(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] font-bold text-[#0F172A]"
                >
                  <option value={2}>2 Years (Inter/Diploma)</option>
                  <option value={3}>3 Years (B.Sc/B.Com)</option>
                  <option value={4}>4 Years (B.Tech/B.Pharm)</option>
                  <option value={5.5}>5.5 Years (MBBS)</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="jvdCheck"
                checked={hasJvdFeeReimbursement}
                onChange={(e) => setHasJvdFeeReimbursement(e.target.checked)}
                className="w-4 h-4 accent-[#4F46E5]"
              />
              <label htmlFor="jvdCheck" className="font-bold text-[#0F172A]">
                Apply 100% AP Jagananna Vidya Deevena (JVD) Tuition Waiver
              </label>
            </div>

            {/* Total Cost Summary Card */}
            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
              <div className="flex justify-between text-[#64748B]">
                <span>Total College Tuition ({courseYears} yrs):</span>
                <span>₹{totalTuitionFull.toLocaleString('en-IN')}</span>
              </div>
              {hasJvdFeeReimbursement && (
                <div className="flex justify-between text-emerald-600 font-bold">
                  <span>JVD Fee Waiver (100% Paid by AP Govt):</span>
                  <span>- ₹{jvdDeduction.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between text-[#64748B]">
                <span>Est. Living & Mess Costs ({selectedDistrict}):</span>
                <span>₹{totalLivingCost.toLocaleString('en-IN')}</span>
              </div>
              <div className="border-t border-[#E2E8F0] pt-2 flex justify-between text-sm font-extrabold text-[#0F172A]">
                <span>Net Family Out-of-Pocket Expense:</span>
                <span>₹{netOutofPocketTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Education Loan EMI Studio */}
        <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-xs space-y-5">
          <h3 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
            <Landmark className="w-5 h-5 text-[#4F46E5]" />
            Education Loan EMI Studio
          </h3>

          <div className="space-y-4 text-xs">
            <div>
              <div className="flex justify-between font-bold text-[#64748B] mb-1">
                <span>Loan Principal Amount</span>
                <span className="text-[#0F172A]">₹{loanPrincipal.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min={50000}
                max={1500000}
                step={25000}
                value={loanPrincipal}
                onChange={(e) => setLoanPrincipal(Number(e.target.value))}
                className="w-full accent-[#4F46E5]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-[#64748B] mb-1">Interest Rate (% p.a)</label>
                <input
                  type="number"
                  step={0.1}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] font-bold text-[#0F172A]"
                />
              </div>
              <div>
                <label className="block font-semibold text-[#64748B] mb-1">Repayment Tenure</label>
                <select
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] font-bold text-[#0F172A]"
                >
                  <option value={5}>5 Years</option>
                  <option value={7}>7 Years</option>
                  <option value={10}>10 Years</option>
                </select>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white space-y-2">
              <div className="text-[10px] font-bold text-[#EEF2FF] uppercase">Monthly Education EMI</div>
              <div className="text-2xl font-extrabold">₹{monthlyEmi.toLocaleString('en-IN')} / month</div>
              <div className="text-xs text-slate-300 pt-1 flex justify-between">
                <span>Total Loan Interest: ₹{totalInterestPaid.toLocaleString('en-IN')}</span>
                <span>Tenure: {tenureYears} Yrs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
