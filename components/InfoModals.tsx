'use client';

import React, { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { DEMO_FAQS } from '@/data/products';
import {
  X,
  HelpCircle,
  Truck,
  Mail,
  User,
  CheckCircle2,
  Send,
  ShieldCheck,
  PackageCheck
} from 'lucide-react';

export default function InfoModals() {
  const {
    infoModal,
    setInfoModal,
    isAccountOpen,
    setIsAccountOpen
  } = useStore();

  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  // Close helper
  const closeAll = () => {
    setInfoModal(null);
    setIsAccountOpen(false);
    setContactSubmitted(false);
  };

  if (!infoModal && !isAccountOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={closeAll}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#0B132B] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#070B18]">
          <div className="flex items-center gap-2">
            {infoModal === 'faq' && <HelpCircle className="w-5 h-5 text-blue-500" />}
            {infoModal === 'shipping' && <Truck className="w-5 h-5 text-blue-500" />}
            {infoModal === 'contact' && <Mail className="w-5 h-5 text-blue-500" />}
            {isAccountOpen && <User className="w-5 h-5 text-blue-500" />}
            <h2 className="text-base font-bold text-white">
              {infoModal === 'faq' && 'Frequently Asked Questions'}
              {infoModal === 'shipping' && 'Shipping & Demonstration Policies'}
              {infoModal === 'contact' && 'Contact TECHNEST Demo Team'}
              {isAccountOpen && 'Account Interface (Demonstration)'}
            </h2>
          </div>
          <button
            onClick={closeAll}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-sm text-slate-300">
          {/* FAQ Modal */}
          {infoModal === 'faq' && (
            <div className="space-y-5">
              <p className="text-xs text-slate-400">
                Common inquiries regarding the TECHNEST brand, digital store architecture, and demonstration capabilities.
              </p>
              <div className="space-y-4">
                {DEMO_FAQS.map((faq, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <h3 className="font-semibold text-white mb-2 text-sm">
                      {faq.question}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Shipping & Returns Policy Modal */}
          {infoModal === 'shipping' && (
            <div className="space-y-5">
              <div className="bg-blue-950/40 border border-blue-900/40 p-4 rounded-xl text-xs text-blue-300">
                <strong className="block text-white mb-1">Demonstration Content Notice:</strong>
                All shipping times and return protocols described below are structured sample content showing how a real electronics retailer organizes fulfillment disclosures.
              </div>

              <div className="space-y-4 text-xs leading-relaxed">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <h3 className="font-bold text-white text-sm mb-1.5 flex items-center gap-2">
                    <Truck className="w-4 h-4 text-blue-400" />
                    <span>Sample Delivery Timelines</span>
                  </h3>
                  <p className="text-slate-400">
                    Domestic orders in the sample scenario process within 24 hours. Express air courier delivers within 2–3 business days with continuous tracking.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <h3 className="font-bold text-white text-sm mb-1.5 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                    <span>Sample 30-Day Evaluation Period</span>
                  </h3>
                  <p className="text-slate-400">
                    Demonstration customers may initiate an evaluation return within 30 days of simulated delivery in original condition with all accessories and packaging intact.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Contact Us Modal */}
          {infoModal === 'contact' && (
            <div>
              {contactSubmitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white">
                    Demonstration Message Received
                  </h3>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Thank you, {contactForm.name}. Your inquiry has been processed in this frontend portfolio prototype. No real email was dispatched.
                  </p>
                  <button
                    onClick={() => {
                      setContactSubmitted(false);
                      setContactForm({ name: '', email: '', message: '' });
                    }}
                    className="text-xs text-blue-400 hover:text-blue-300 underline"
                  >
                    Send another sample message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4 text-xs">
                  <p className="text-xs text-slate-400">
                    Feel free to test the client-side communication form.
                  </p>
                  <div>
                    <label className="block text-slate-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Your questions or feedback regarding the TECHNEST catalog..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Sample Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Account Modal */}
          {isAccountOpen && (
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                  JD
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Jane Doe</h3>
                  <p className="text-xs text-slate-400">jane.doe@example.com</p>
                  <span className="inline-block mt-1 text-[10px] text-blue-400 bg-blue-950/60 border border-blue-900/60 px-2 py-0.5 rounded">
                    Demonstration Profile Active
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Recent Simulated Orders
                </h4>
                <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800 text-xs flex items-center justify-between">
                  <div>
                    <div className="font-mono font-semibold text-white">#TN-784210</div>
                    <div className="text-slate-400 text-[11px]">Pulse Headphones · Space Gray</div>
                  </div>
                  <div className="text-right">
                    <span className="text-emerald-400 font-medium">Demo Delivered</span>
                    <div className="font-mono text-slate-300">$299.00</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800 text-xs flex items-center justify-between">
                  <div>
                    <div className="font-mono font-semibold text-white">#TN-419082</div>
                    <div className="text-slate-400 text-[11px]">Nova Mechanical Keyboard</div>
                  </div>
                  <div className="text-right">
                    <span className="text-emerald-400 font-medium">Demo Delivered</span>
                    <div className="font-mono text-slate-300">$169.00</div>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800 text-center">
                This account view illustrates how customer profiles and order histories render in a production web application.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
