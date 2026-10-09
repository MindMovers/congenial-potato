import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MOCK_VIDEOS } from '../../data/mockData';
import type { VideoLecture } from '../../types';
import {
  Upload,
  DollarSign,
  Gamepad2,
  Plus
} from 'lucide-react';

export const VideoClassroomView: React.FC = () => {
  const { navigateTo, creatorEarnings, addCreatorEarnings } = useApp();
  const [activeVideo, setActiveVideo] = useState<VideoLecture>(MOCK_VIDEOS[0]);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newSubject, setNewSubject] = useState('Physics');

  const handleSimulateView = () => {
    addCreatorEarnings(80);
    setActiveVideo(prev => ({
      ...prev,
      viewsCount: prev.viewsCount + 100,
      earningsRupees: prev.earningsRupees + 80
    }));
  };

  const handleCreatorUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTitle) {
      const created: VideoLecture = {
        id: `vid-custom-${Date.now()}`,
        title: newTitle,
        creatorName: 'You (Student Creator)',
        creatorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
        subject: newSubject,
        stream: 'Intermediate MPC',
        duration: '15 mins',
        viewsCount: 1,
        earningsRupees: 0,
        thumbnailUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=500',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        quizGameId: 'quiz-physics-1',
        summaryNotes: 'Uploaded lecture notes summary.'
      };
      MOCK_VIDEOS.unshift(created);
      setActiveVideo(created);
      setShowUploadModal(false);
      setNewTitle('');
    }
  };

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      {/* View Header with Creator Monetization Banner */}
      <div className="bg-white p-6 rounded-3xl border border-[#E2E8F0] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold uppercase tracking-wider mb-1">
            STAGE 3 • FEATURE 2
          </div>
          <h2 className="text-2xl font-extrabold text-[#0F172A]">
            Video Classroom Hub & Creator Monetization
          </h2>
          <p className="text-xs text-[#64748B] mt-0.5">
            Watch expert AP lectures or upload your own notes lectures to earn ₹0.80 per view!
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-[#F8FAFC] px-4 py-2 rounded-2xl border border-[#E2E8F0] text-right">
            <div className="text-[10px] font-bold text-[#64748B] uppercase">Total Creator Payout</div>
            <div className="text-base font-extrabold text-[#0F172A]">₹{creatorEarnings}</div>
          </div>
          <button
            onClick={() => setShowUploadModal(true)}
            className="px-4 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#4F46E5] text-white text-xs font-bold shadow-md transition flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Upload Video Lecture
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Columns: Video Player & Post-Class Quiz Button */}
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-black rounded-3xl overflow-hidden shadow-xl border border-[#E2E8F0] relative">
            <video
              src={activeVideo.videoUrl}
              controls
              poster={activeVideo.thumbnailUrl}
              className="w-full h-[320px] sm:h-[420px] object-cover"
            />
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-bold text-[#4F46E5] bg-[#EEF2FF] px-2.5 py-0.5 rounded-full uppercase">
                  {activeVideo.subject} • {activeVideo.stream}
                </span>
                <h3 className="text-xl font-extrabold text-[#0F172A] mt-1">
                  {activeVideo.title}
                </h3>
              </div>
              <button
                onClick={() => navigateTo('quiz-games', `Quiz Game - ${activeVideo.subject}`)}
                className="px-5 py-2.5 rounded-xl bg-[#4F46E5] hover:bg-[#0F172A] text-white text-xs font-extrabold shadow-md transition flex items-center justify-center gap-2 shrink-0 animate-pulse-subtle"
              >
                <Gamepad2 className="w-4 h-4 text-[#EEF2FF]" />
                Play Post-Class Quiz Game
              </button>
            </div>

            <div className="flex items-center justify-between text-xs text-[#64748B] pt-1">
              <div className="flex items-center gap-2">
                <img
                  src={activeVideo.creatorAvatar}
                  alt={activeVideo.creatorName}
                  className="w-7 h-7 rounded-full object-cover border border-[#E2E8F0]"
                />
                <span className="font-bold text-[#0F172A]">{activeVideo.creatorName}</span>
              </div>
              <div className="flex items-center gap-4">
                <span>👁️ {activeVideo.viewsCount.toLocaleString()} Views</span>
                <span className="font-bold text-[#10B981]">💰 Est. Earnings: ₹{activeVideo.earningsRupees}</span>
                <button
                  onClick={handleSimulateView}
                  className="px-2.5 py-1 bg-[#EEF2FF] hover:bg-[#E0E7FF] text-[#4F46E5] font-bold rounded-lg transition"
                >
                  +100 Views Simulator
                </button>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <h4 className="text-xs font-bold text-[#0F172A] uppercase mb-1">
                Lecture Notes Summary
              </h4>
              <p className="text-xs text-[#0F172A]">
                {activeVideo.summaryNotes}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Playlist & Creator Earnings Tracker */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white rounded-3xl p-6 shadow-md space-y-4 border border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-[#818CF8] uppercase tracking-wider">
                CREATOR REVENUE ENGINE
              </span>
              <DollarSign className="w-5 h-5 text-[#818CF8]" />
            </div>
            <div>
              <div className="text-2xl font-extrabold">₹0.80 / Student View</div>
              <p className="text-xs text-[#94A3B8] mt-1">
                Verified student teachers earn passive income for uploaded video notes.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-xs space-y-1.5">
              <div className="flex justify-between">
                <span>Current Total Views:</span>
                <span className="font-bold">4,250</span>
              </div>
              <div className="flex justify-between text-[#A5B4FC]">
                <span>Payout Available:</span>
                <span className="font-extrabold text-white">₹{creatorEarnings}</span>
              </div>
            </div>

            <button
              onClick={() => alert(`Payout of ₹${creatorEarnings} initiated to active bank account!`)}
              className="w-full py-2 bg-[#4F46E5] hover:bg-white hover:text-[#0F172A] font-extrabold text-xs rounded-xl shadow-xs transition"
            >
              Request Bank Payout
            </button>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-xs space-y-4">
            <h3 className="text-base font-bold text-[#0F172A]">
              Available Class Lectures
            </h3>
            <div className="space-y-3">
              {MOCK_VIDEOS.map((vid) => (
                <div
                  key={vid.id}
                  onClick={() => setActiveVideo(vid)}
                  className={`p-3 rounded-2xl border transition cursor-pointer flex gap-3 ${
                    activeVideo.id === vid.id
                      ? 'bg-[#EEF2FF] border-[#4F46E5]'
                      : 'bg-[#F8FAFC] border-[#E2E8F0] hover:border-[#4F46E5]'
                  }`}
                >
                  <img
                    src={vid.thumbnailUrl}
                    alt={vid.title}
                    className="w-20 h-14 rounded-xl object-cover shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs font-bold text-[#0F172A] truncate">
                      {vid.title}
                    </h4>
                    <div className="text-[10px] text-[#64748B] mt-0.5">
                      {vid.creatorName} • {vid.duration}
                    </div>
                    <div className="text-[10px] text-[#4F46E5] font-semibold mt-1">
                      👁️ {vid.viewsCount} views
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 border border-[#E2E8F0] shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-[#0F172A] flex items-center gap-2">
              <Upload className="w-5 h-5 text-[#4F46E5]" />
              Upload Educational Lecture
            </h3>
            <form onSubmit={handleCreatorUpload} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-[#64748B] mb-1">Lecture Title</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. AP EAPCET Integration Tricks"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#64748B] mb-1">Subject</label>
                <select
                  value={newSubject}
                  onChange={(e) => setNewSubject(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]"
                >
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Biology">Biology</option>
                  <option value="Accountancy">Accountancy</option>
                </select>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  className="flex-1 py-2 text-xs font-bold text-[#64748B] bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 text-xs font-bold text-white bg-[#0F172A] rounded-xl hover:bg-[#4F46E5]"
                >
                  Publish & Start Earning
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
