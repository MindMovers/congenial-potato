import React from 'react';
import { useApp } from '../../context/AppContext';
import { MOCK_NOTES, MOCK_VIDEOS } from '../../data/mockData';
import { Trash2, HardDrive, CheckCircle2 } from 'lucide-react';

export const OfflineManagerView: React.FC = () => {
  const { activeProfile, toggleOfflineCache } = useApp();

  const cachedNotes = MOCK_NOTES.filter(n => activeProfile.cachedDownloads?.includes(n.id));
  const cachedVideos = MOCK_VIDEOS.filter(v => activeProfile.cachedDownloads?.includes(v.id));

  const totalSizeMb = (cachedNotes.reduce((acc, n) => acc + n.downloadSizeMb, 0) + (cachedVideos.length * 15.5)).toFixed(1);

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white p-6 rounded-3xl border border-[#E2E8F0] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold uppercase tracking-wider mb-1">
            STAGE 3 • FEATURE 7
          </div>
          <h2 className="text-2xl font-extrabold text-[#0F172A]">
            Offline Download Manager (IndexedDB Engine)
          </h2>
          <p className="text-xs text-[#64748B] mt-0.5">
            Access saved video lectures and AI pass guarantee notes without active internet connectivity.
          </p>
        </div>

        <div className="bg-[#F8FAFC] px-4 py-2 rounded-2xl border border-[#E2E8F0] text-right">
          <div className="text-[10px] font-bold text-[#64748B] uppercase">Offline Storage Quota</div>
          <div className="text-base font-extrabold text-[#0F172A]">{totalSizeMb} MB / 500 MB</div>
        </div>
      </div>

      {/* Storage Progress Bar */}
      <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-xs space-y-2">
        <div className="flex justify-between text-xs font-semibold text-[#64748B]">
          <span>Browser IndexedDB Cache Usage</span>
          <span>{((Number(totalSizeMb) / 500) * 100).toFixed(1)}% Full</span>
        </div>
        <div className="w-full bg-[#F8FAFC] h-3 rounded-full overflow-hidden border border-[#E2E8F0]">
          <div
            className="bg-gradient-to-r from-[#0F172A] to-[#4F46E5] h-full rounded-full transition-all duration-300"
            style={{ width: `${Math.min(100, (Number(totalSizeMb) / 500) * 100)}%` }}
          />
        </div>
      </div>

      {/* Cached Items Grid */}
      <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-xs space-y-4">
        <h3 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
          <HardDrive className="w-5 h-5 text-[#4F46E5]" />
          Cached Offline Files Ready for Offline Study
        </h3>

        <div className="space-y-3">
          {cachedNotes.map((note) => (
            <div key={note.id} className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0" />
                <div>
                  <div className="text-xs font-bold text-[#0F172A]">{note.topic}</div>
                  <div className="text-[10px] text-[#64748B]">{note.subject} • {note.downloadSizeMb} MB</div>
                </div>
              </div>

              <button
                onClick={() => toggleOfflineCache(note.id)}
                className="p-2 text-rose-600 hover:bg-rose-50 rounded-xl transition"
                title="Remove from Cache"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}

          {cachedNotes.length === 0 && (
            <div className="text-center py-8 text-xs text-[#64748B]">
              No notes or videos saved offline yet. Click "Download Notes" in AI Notes to cache for offline study.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
