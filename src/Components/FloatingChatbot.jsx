import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Bot, MessageCircle, SendHorizonal, X, Sparkles } from 'lucide-react';

/** * Add this to your global CSS or a <style> tag:
 * * @keyframes rotate {
 * from { transform: rotate(0deg); }
 * to { transform: rotate(360deg); }
 * }
 * .animate-google-spin {
 * animation: rotate 4s linear infinite;
 * }
 */

const starterPrompts = [
  'Library timing',
  'Membership process',
  'How to access e-resources?',
];

const initialMessages = [
  {
    id: crypto.randomUUID(),
    role: 'bot',
    text: 'Hi! I am the library assistant. Ask me anything about our Library. i am yet to be fully trained, but I can answer some basic questions.',
  },
];

const getBotReply = (message) => {
  const lower = message.toLowerCase();
  if (lower.includes('timing') || lower.includes('hour')) return 'Library hours are 8 AM - 8 PM daily. Check the "Facilities" page for holiday schedules.';
  if (lower.includes('membership')) return 'Sign up at the front desk with a valid ID or register via the "Membership Protocol" portal.';
  return 'I am currently in development at  GTU campus and serving as a demo assistant for now. For more details, please visit our main desk ';
};

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const canSend = useMemo(() => input.trim().length > 0, [input]);

  const pushUserMessage = (text) => {
    const cleanText = text.trim();
    if (!cleanText) return;

    setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: 'user', text: cleanText }]);
    setInput('');
    setIsTyping(true);

    window.setTimeout(() => {
      setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: 'bot', text: getBotReply(cleanText) }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-9999 flex flex-col items-end">
      {/* Chat Window */}
      <div
        className={`mb-4 w-[min(24rem,90vw)] origin-bottom-right overflow-hidden rounded-3xl border border-slate-200 bg-white/95 shadow-2xl backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'translate-y-0 scale-100 opacity-100' : 'pointer-events-none translate-y-8 scale-90 opacity-0'
        }`}
      >
        {/* Animated Header */}
        <div className="relative h-1 overflow-hidden">
             <div className="absolute inset-0 flex w-[200%] animate-google-spin">
                <div className="h-full w-full bg-linear-to-r from-blue-500 via-red-500  to-green-500 " />
                <div className="h-full w-full bg-linear-to-r from-green-500  via-red-500 to-yellow-500 opacity-80" />
             </div>
        </div>

        <div className="flex items-center justify-between bg-white px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="relative">
                <div className="absolute -inset-1 animate-pulse rounded-full bg-blue-100" />
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
                    <Bot size={20} />
                </div>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900"> Centeral Library Chat-AI</p>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">Online</p>
              </div>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Message Area */}
        <div className="h-80 space-y-4 overflow-y-auto bg-slate-50/50 px-5 py-6">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${
                message.role === 'user' 
                ? 'bg-slate-900 text-white rounded-br-none' 
                : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none'
              }`}>
                {message.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start gap-1">
               <div className="flex items-center gap-1 rounded-full bg-white border border-slate-200 px-4 py-3 shadow-sm">
                  <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" />
                  <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:0.2s]" />
                  <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:0.4s]" />
               </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        {/* Footer */}
        <div className="bg-white p-4">
          <div className="mb-3 flex flex-wrap gap-2">
            {starterPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => pushUserMessage(prompt)}
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-slate-400 hover:bg-slate-50 transition-all"
              >
                {prompt}
              </button>
            ))}
          </div>

          <form onSubmit={(e) => { e.preventDefault(); pushUserMessage(input); }} className="relative flex items-center">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything..."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-4 pr-12 text-sm focus:border-slate-400 focus:bg-white focus:outline-none transition-all"
            />
            <button
              disabled={!canSend}
              className="absolute right-2 flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white opacity-0 transition-all disabled:opacity-0 enabled:opacity-100"
            >
              <SendHorizonal size={16} />
            </button>
          </form>
        </div>
      </div>

      {/* Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* The "Google Color Wheel" Background Animation */}
        <div className="absolute inset-0 flex animate-[spin_4s_linear_infinite] opacity-40">
            <div className="h-full w-full bg-blue-500" />
            <div className="h-full w-full bg-red-500" />
            <div className="h-full w-full bg-yellow-500" />
            <div className="h-full w-full bg-green-500" />
        </div>
        
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-inner">
           {isOpen ? <X size={24} /> : <MessageCircle size={24} className="fill-white" />}
        </div>
      </button>
    </div>
  );
};

export default FloatingChatbot;