import React from 'react';
import { BookOpen, Download } from 'lucide-react';

export const ReferenceBooksView: React.FC = () => {
  const BOOKS = [
    { title: 'NCERT Class 11 & 12 Physics Exemplar', author: 'NCERT Board', category: 'Physics', size: '18.4 MB' },
    { title: 'AP EAPCET 15-Year Solved Papers (2010 - 2025)', author: 'Udhbhava Academic Cell', category: 'Entrance PYQ', size: '32.1 MB' },
    { title: 'NEET Biology Objective Handbook (Vol 1 & 2)', author: 'Dr. Swapna Reddy', category: 'Biology', size: '24.8 MB' },
    { title: 'CA Foundation Principles of Accounting', author: 'ICAI Handbook', category: 'Commerce', size: '14.2 MB' }
  ];

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      <div className="bg-white p-6 rounded-3xl border border-[#E2E8F0] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold uppercase tracking-wider mb-1">
            STAGE 3 • E-LIBRARY
          </div>
          <h2 className="text-2xl font-extrabold text-[#0F172A]">
            Competitive Reference Books & E-Library
          </h2>
          <p className="text-xs text-[#64748B] mt-0.5">
            Free digital access to NCERT, AP SCERT, and entrance handbooks with offline viewing.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {BOOKS.map((b, idx) => (
          <div key={idx} className="bg-white p-5 rounded-3xl border border-[#E2E8F0] shadow-xs flex items-center justify-between gap-4 hover:border-[#4F46E5] transition">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-14 rounded-xl bg-[#0F172A] text-white flex items-center justify-center font-bold shrink-0">
                <BookOpen className="w-6 h-6 text-[#EEF2FF]" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#4F46E5] uppercase bg-[#EEF2FF] px-2 py-0.5 rounded">
                  {b.category}
                </span>
                <h3 className="text-sm font-bold text-[#0F172A] mt-1">{b.title}</h3>
                <div className="text-[10px] text-[#64748B]">{b.author} • {b.size}</div>
              </div>
            </div>

            <button
              onClick={() => alert(`Downloading ${b.title} to local browser storage...`)}
              className="p-2.5 rounded-xl bg-[#F8FAFC] text-[#0F172A] border border-[#E2E8F0] hover:bg-[#0F172A] hover:text-white transition"
              title="Download Book PDF"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
