import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  ShieldCheck,
  Lock,
  Unlock,
  KeyRound,
  CheckCircle2,
  Award,
  AlertCircle
} from 'lucide-react';
import { ProfileLockModal } from '../layout/ProfileLockModal';

export const ProfileSecurityView: React.FC = () => {
  const { activeProfile, isUnlocked, lockProfile } = useApp();
  const [showModal, setShowModal] = useState(false);
  const [newPin, setNewPin] = useState('');
  const [pinSuccess, setPinSuccess] = useState(false);

  const handleSetPin = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPin.length === 4) {
      activeProfile.pinCode = newPin;
      setPinSuccess(true);
      setTimeout(() => setPinSuccess(false), 3000);
      setNewPin('');
    }
  };

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      {/* View Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-[#E2E8F0] shadow-xs">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold uppercase tracking-wider mb-1">
            STAGE 1 • YOUR SPACE
          </div>
          <h2 className="text-2xl font-extrabold text-[#0F172A]">
            Profile & Security Lock Center
          </h2>
          <p className="text-xs text-[#64748B] mt-0.5">
            Protect sensitive student data (Income Certificates, Aadhaar Last 4, & Jnanabhumi Scholarship IDs) with password/PIN verification.
          </p>
        </div>

        {/* Lock / Unlock Toggle Button */}
        <div>
          {isUnlocked ? (
            <button
              onClick={lockProfile}
              className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition flex items-center gap-2"
            >
              <Lock className="w-4 h-4" />
              Lock Sensitive Details Now
            </button>
          ) : (
            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2.5 rounded-xl bg-[#10B981] hover:bg-emerald-600 text-white font-bold text-xs shadow-md transition flex items-center gap-2"
            >
              <Unlock className="w-4 h-4" />
              Unlock Profile Details
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Basic Profile Info */}
        <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-xs space-y-5">
          <div className="flex items-center gap-4">
            <img
              src={activeProfile.avatar}
              alt={activeProfile.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-[#4F46E5]"
            />
            <div>
              <h3 className="text-lg font-extrabold text-[#0F172A]">
                {activeProfile.name}
              </h3>
              <div className="text-xs text-[#4F46E5] font-semibold">
                {activeProfile.currentStream}
              </div>
              <div className="text-xs text-[#64748B]">
                District: {activeProfile.district}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-4 space-y-3">
            <div className="flex justify-between text-xs">
              <span className="text-[#64748B] font-medium">Target Role:</span>
              <span className="font-bold text-[#0F172A]">{activeProfile.targetRole}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-[#64748B] font-medium">Qualification:</span>
              <span className="font-bold text-[#0F172A]">{activeProfile.grade}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-[#64748B] font-medium">Security Status:</span>
              <span className={`font-bold px-2 py-0.5 rounded ${isUnlocked ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                {isUnlocked ? 'UNLOCKED' : 'LOCKED'}
              </span>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-4 space-y-2">
            <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#4F46E5]" />
              Verified Badges
            </h4>
            <div className="flex flex-wrap gap-2">
              {activeProfile.verifiedBadges.map((badge, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-[#EEF2FF] text-[#4F46E5] text-xs font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Center & Right Column: Protected Sensitive Document Vault & Change PIN */}
        <div className="lg:col-span-2 space-y-6">
          {/* Sensitive Document Vault */}
          <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#0F172A]" />
                <h3 className="text-base font-bold text-[#0F172A]">
                  Protected Sensitive Documents Vault
                </h3>
              </div>
              <span className="text-xs text-[#64748B]">
                {isUnlocked ? '🔓 Visible' : '🔒 Masked'}
              </span>
            </div>

            {!isUnlocked && (
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-center justify-between text-xs text-amber-900">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Sensitive documents are hidden for privacy. Enter your 4-digit PIN to reveal full IDs.</span>
                </div>
                <button
                  onClick={() => setShowModal(true)}
                  className="px-3 py-1.5 bg-amber-600 text-white font-bold rounded-lg shrink-0 ml-2 hover:bg-amber-700"
                >
                  Enter PIN
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                <div className="text-[11px] font-bold text-[#64748B] uppercase">Family Income Cert</div>
                <div className="text-base font-extrabold text-[#0F172A]">
                  {isUnlocked ? `₹${activeProfile.familyIncome.toLocaleString('en-IN')}/yr` : '₹ • • • • • •'}
                </div>
                <div className="text-[10px] text-[#10B981] font-semibold">
                  {isUnlocked ? 'Eligible for 100% JVD Aid' : 'Masked (PIN Required)'}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                <div className="text-[11px] font-bold text-[#64748B] uppercase">Aadhaar Identification</div>
                <div className="text-base font-extrabold text-[#0F172A] font-mono">
                  {isUnlocked ? `XXXX-XXXX-${activeProfile.aadhaarLast4}` : 'XXXX-XXXX-••••'}
                </div>
                <div className="text-[10px] text-[#64748B]">
                  {isUnlocked ? 'UIDAI Verified' : 'Masked (PIN Required)'}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                <div className="text-[11px] font-bold text-[#64748B] uppercase">Jnanabhumi Scholarship ID</div>
                <div className="text-base font-extrabold text-[#4F46E5] font-mono">
                  {isUnlocked ? activeProfile.scholarshipId : 'AP-JVD-••••-••••'}
                </div>
                <div className="text-[10px] text-[#10B981] font-semibold">
                  {isUnlocked ? 'AP Govt Linked' : 'Masked (PIN Required)'}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-xs space-y-4">
            <h3 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
              <KeyRound className="w-5 h-5 text-[#4F46E5]" />
              Update 4-Digit Security PIN
            </h3>

            <form onSubmit={handleSetPin} className="max-w-md space-y-3">
              <div>
                <label className="block text-xs font-semibold text-[#64748B] mb-1">
                  New 4-Digit PIN Code
                </label>
                <input
                  type="password"
                  maxLength={4}
                  value={newPin}
                  onChange={(e) => setNewPin(e.target.value)}
                  placeholder="Enter new 4-digit PIN"
                  className="w-full px-3 py-2 text-sm rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] focus:ring-2 focus:ring-[#4F46E5] focus:outline-none font-mono"
                />
              </div>

              {pinSuccess && (
                <div className="text-xs text-emerald-600 bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                  ✓ Security PIN updated successfully!
                </div>
              )}

              <button
                type="submit"
                disabled={newPin.length !== 4}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition ${
                  newPin.length === 4
                    ? 'bg-[#0F172A] text-white hover:bg-[#4F46E5] shadow-md cursor-pointer'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                Save New Security PIN
              </button>
            </form>
          </div>
        </div>
      </div>

      {showModal && <ProfileLockModal onClose={() => setShowModal(false)} />}
    </div>
  );
};
