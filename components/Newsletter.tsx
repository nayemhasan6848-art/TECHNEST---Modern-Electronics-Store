'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="py-20 bg-[#0B132B] border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Unboxed Kicker */}
        <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
          Demonstration Newsletter
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
          Stay Ahead of What&apos;s Next.
        </h2>

        {/* Supporting text */}
        <p className="text-sm text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
          Receive design engineering dispatches, upcoming product teardowns, and industrial ergonomics deep dives directly in your inbox.
        </p>

        {isSubmitted ? (
          <div className="max-w-md mx-auto bg-slate-900/80 border border-emerald-500/30 rounded-xl p-6 text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white">
              Demonstration Submission Received
            </h3>
            <p className="text-xs text-slate-400">
              Thank you for testing the newsletter subscription interface. Since this is a frontend portfolio demonstration with no backend, no emails will ever be sent to <span className="text-white font-mono">{email}</span>.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setEmail('');
              }}
              className="text-xs text-blue-400 hover:text-blue-300 underline pt-2 cursor-pointer"
            >
              Subscribe with another test email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-slate-900/90 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Subscribe</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <div className="mt-4 text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
          <span>Fictional demonstration store · Zero spam guarantee · No backend persistence</span>
        </div>
      </div>
    </section>
  );
}
