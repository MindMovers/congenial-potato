import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Lock, Unlock, KeyRound, AlertCircle, X } from 'lucide-react';

interface ProfileLockModalProps {
  onClose: () => void;
}

export const ProfileLockModal: React.FC<ProfileLockModalProps> = ({ onClose }) => {
  const { unlockProfile, activeProfile } = useApp();
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (unlockProfile(pin)) {
      setError('');
      onClose();
    } else {
      setError('Incorrect Security PIN. (Default demo PIN is 1234)');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-sm w-full p-6 border border-[#E2E8F0] shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-[#64748B] hover:text-[#0F172A] p-1 rounded-lg transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-[#EEF2FF] flex items-center justify-center text-[#4F46E5] mb-3">
            <Lock className="w-6 h-6 text-[#4F46E5]" />
          </div>
          <h3 className="text-lg font-bold text-[#0F172A]">
            Profile Security Verification
          </h3>
          <p className="text-xs text-[#64748B] mt-1 mb-4">
            Enter 4-digit PIN to access sensitive documents (Income Certificates, Aadhaar, & Scholarship IDs) for <span className="font-semibold text-[#0F172A]">{activeProfile.name}</span>.
          </p>

          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="relative">
              <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
              <input
                type="password"
                maxLength={4}
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter 4-digit PIN (e.g. 1234)"
                className="w-full pl-9 pr-3 py-2 text-center text-lg font-bold tracking-widest rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] focus:ring-2 focus:ring-[#4F46E5] focus:outline-none"
                autoFocus
              />
            </div>

            {error && (
              <div className="flex items-center gap-1.5 text-xs text-rose-600 bg-rose-50 p-2 rounded-lg border border-rose-200 text-left">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2 text-xs font-semibold text-[#64748B] bg-slate-100 hover:bg-slate-200 rounded-xl transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2 text-xs font-bold text-white bg-[#0F172A] hover:bg-[#4F46E5] rounded-xl shadow-md transition flex items-center justify-center gap-1.5"
              >
                <Unlock className="w-3.5 h-3.5" />
                Unlock Profile
              </button>
            </div>
          </form>
          <div className="text-[10px] text-[#64748B] mt-3">
            Demo Security PIN: <code className="bg-[#EEF2FF] px-1 py-0.5 rounded font-mono font-bold text-[#4F46E5]">1234</code>
          </div>
        </div>
      </div>
    </div>
  );
};
