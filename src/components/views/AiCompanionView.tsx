import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Bot, Send, Volume2, Sparkles } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  textEnglish: string;
  textTelugu: string;
}

export const AiCompanionView: React.FC = () => {
  const { activeProfile } = useApp();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'bot',
      textEnglish: `Namaste ${activeProfile.name}! I am your Udhbhava AI Companion. How can I help you today with stream selection, entrance exams, or JVD scholarships?`,
      textTelugu: `నమస్తే ${activeProfile.name}! నేను మీ ఉద్భవ AI సహచరుడిని. కోర్సు ఎంపిక, ప్రవేశ పరీక్షలు లేదా స్కాలర్‌షిప్‌ల గురించి నన్ను అడగండి!`
    }
  ]);
  const [inputMsg, setInputMsg] = useState('');
  const [lang, setLang] = useState<'EN' | 'TE'>('EN');

  const PROMPT_CHIPS = [
    { label: 'Which stream after Class 10?', target: 'stream-selection' },
    { label: 'How to get JVD Fee Waiver?', target: 'scholarship-matcher' },
    { label: 'Physics Pass Guarantee formulas', target: 'exam-notes' },
    { label: 'AP EAPCET Mock Test strategy', target: 'exam-hub' }
  ];

  const handleSend = (text?: string) => {
    const query = text || inputMsg;
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      textEnglish: query,
      textTelugu: query
    };

    let replyEn = `Based on your profile in ${activeProfile.currentStream}, I recommend checking our AI Pass-Guarantee notes and practice PYQ tests to boost your preparation.`;
    let replyTe = `మీ ${activeProfile.currentStream} ప్రొఫైల్ ఆధారంగా, మీరు AI పాస్ గ్యారంటీ నోట్స్ మరియు AP EAPCET మాక్ టెస్టులను ప్రాక్టీస్ చేయాలని సిఫార్సు చేస్తున్నాను.`;

    if (query.toLowerCase().includes('jvd') || query.toLowerCase().includes('scholarship')) {
      replyEn = `For Jagananna Vidya Deevena (JVD), your annual family income must be under ₹2,50,000. Apply via the JnanaBhumi portal with your college admission receipt and Rice Card.`;
      replyTe = `జగనన్న విద్యా దీవెన కోసం మీ కుటుంబ వార్షిక ఆదాయం ₹2,50,000 లోపు ఉండాలి. మీ కాలేజీ రశీదుతో జ్ఞానభూమి పోర్టల్‌లో దరఖాస్తు చేసుకోండి.`;
    }

    const botMsg: ChatMessage = {
      id: `b-${Date.now()}`,
      sender: 'bot',
      textEnglish: replyEn,
      textTelugu: replyTe
    };

    setMessages(prev => [...prev, userMsg, botMsg]);
    setInputMsg('');
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Text-to-speech simulation: ' + text);
    }
  };

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      {/* Header */}
      <div className="bg-white p-6 rounded-3xl border border-[#E2E8F0] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold uppercase tracking-wider mb-1">
            STAGE 6 • PERSONAL COMPANION
          </div>
          <h2 className="text-2xl font-extrabold text-[#0F172A]">
            Udhbhava AI Companion (Bilingual: Telugu & English)
          </h2>
          <p className="text-xs text-[#64748B] mt-0.5">
            Instant 24/7 bilingual academic & career counseling with voice synthesis support.
          </p>
        </div>

        {/* Language Toggle */}
        <div className="flex items-center bg-[#F8FAFC] p-1 rounded-2xl border border-[#E2E8F0]">
          <button
            onClick={() => setLang('EN')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              lang === 'EN' ? 'bg-[#0F172A] text-white' : 'text-[#64748B]'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLang('TE')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              lang === 'TE' ? 'bg-[#0F172A] text-white' : 'text-[#64748B]'
            }`}
          >
            తెలుగు
          </button>
        </div>
      </div>

      {/* Prompt Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {PROMPT_CHIPS.map((chip, idx) => (
          <button
            key={idx}
            onClick={() => {
              handleSend(chip.label);
            }}
            className="px-3 py-1.5 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#4F46E5] text-xs font-semibold text-[#0F172A] whitespace-nowrap shadow-2xs transition flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#4F46E5]" />
            <span>{chip.label}</span>
          </button>
        ))}
      </div>

      {/* Chat Window */}
      <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm flex flex-col h-[520px]">
        {/* Messages Body */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 custom-scrollbar">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex items-start gap-3 ${
                m.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {m.sender === 'bot' && (
                <div className="w-8 h-8 rounded-full bg-[#0F172A] text-white flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-[#EEF2FF]" />
                </div>
              )}

              <div
                className={`max-w-md p-4 rounded-2xl text-xs leading-relaxed space-y-2 ${
                  m.sender === 'user'
                    ? 'bg-[#0F172A] text-white font-medium rounded-tr-none'
                    : 'bg-[#F8FAFC] text-[#0F172A] border border-[#E2E8F0] rounded-tl-none'
                }`}
              >
                <div>{lang === 'EN' ? m.textEnglish : m.textTelugu}</div>

                {m.sender === 'bot' && (
                  <button
                    onClick={() => speakText(lang === 'EN' ? m.textEnglish : m.textTelugu)}
                    className="flex items-center gap-1 text-[10px] font-bold text-[#4F46E5] hover:text-[#0F172A] pt-1 cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" /> Listen Audio
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-[#E2E8F0] bg-[#F8FAFC] rounded-b-3xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              placeholder={lang === 'EN' ? 'Ask Udhbhava AI anything...' : 'ఏదైనా అడగండి...'}
              className="flex-1 px-4 py-2.5 rounded-2xl border border-[#E2E8F0] bg-white text-xs font-medium text-[#0F172A] focus:ring-2 focus:ring-[#4F46E5] focus:outline-none"
            />
            <button
              type="submit"
              className="p-2.5 rounded-2xl bg-[#0F172A] hover:bg-[#4F46E5] text-white transition shadow-xs cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
