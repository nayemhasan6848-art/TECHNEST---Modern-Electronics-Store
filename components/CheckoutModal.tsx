'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useStore } from '@/context/StoreContext';
import {
  X,
  ShieldAlert,
  CreditCard,
  CheckCircle2,
  PackageCheck,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Printer
} from 'lucide-react';

export default function CheckoutModal() {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    cartTotal,
    clearCart,
    completedOrder,
    setCompletedOrder
  } = useStore();

  const [formData, setFormData] = useState({
    fullName: 'Jane Doe',
    email: 'jane.doe@example.com',
    address: '742 Evergreen Terrace',
    city: 'San Francisco',
    postalCode: '94107',
    paymentMethod: 'demo-card',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCheckoutOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const orderId = `TN-${Math.floor(100000 + Math.random() * 900000)}`;
      const order = {
        orderId,
        items: [...cart],
        total: cartTotal,
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        customerName: formData.fullName,
      };

      setCompletedOrder(order);
      clearCart();
      setIsSubmitting(false);
    }, 1200);
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setCompletedOrder(null);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#0B132B] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#070B18]">
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-blue-500" />
            <h2 className="text-base font-bold text-white">
              {completedOrder ? 'Demonstration Order Receipt' : 'Demonstration Checkout'}
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Clear Demonstration Notice Banner */}
        <div className="bg-amber-950/40 border-b border-amber-800/40 px-6 py-3 text-xs text-amber-200 flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p>
            <strong>PORTFOLIO DEMONSTRATION NOTICE:</strong> No actual monetary transaction will occur. Do not enter real credit card numbers or sensitive private information.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {completedOrder ? (
            /* Order Confirmed View */
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  Simulation Order Confirmed!
                </h3>
                <p className="text-sm text-slate-300">
                  Thank you, {completedOrder.customerName}. Your sample order has been simulated successfully.
                </p>
                <div className="mt-3 inline-block font-mono text-sm bg-slate-900 border border-slate-700 px-3 py-1 rounded text-blue-400 font-semibold">
                  Order ID: {completedOrder.orderId}
                </div>
              </div>

              {/* Order Items Summary */}
              <div className="text-left bg-slate-900/60 rounded-xl border border-slate-800 p-4 space-y-3">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800 pb-2">
                  Itemized Summary
                </div>
                {completedOrder.items.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs py-1">
                    <div className="truncate pr-2">
                      <span className="font-medium text-white">{item.product.name}</span>
                      <span className="text-slate-400 ml-1.5 font-mono">
                        ({item.variant} x{item.quantity})
                      </span>
                    </div>
                    <span className="font-mono text-slate-300 tabular-nums shrink-0">
                      ${(item.product.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-sm font-bold text-white">
                  <span>Total Simulated Amount</span>
                  <span className="font-mono text-blue-400 tabular-nums">
                    ${completedOrder.total.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="text-xs text-slate-400">
                This simulated order receipt confirms successful end-to-end shopping cart interactions.
              </div>

              <button
                onClick={handleClose}
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-colors cursor-pointer"
              >
                Return to Storefront
              </button>
            </div>
          ) : (
            /* Checkout Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Shipping Information */}
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                  1. Shipping Information (Sample Data)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-400 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-slate-400 mb-1">Street Address</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">City</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">Postal Code</label>
                    <input
                      type="text"
                      required
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                  2. Select Demonstration Payment Method
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <label
                    className={`flex flex-col p-3 rounded-lg border cursor-pointer transition-all ${
                      formData.paymentMethod === 'demo-card'
                        ? 'bg-blue-600/20 border-blue-500 text-white'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="demo-card"
                      checked={formData.paymentMethod === 'demo-card'}
                      onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                      className="sr-only"
                    />
                    <span className="font-semibold text-white">Simulated Card</span>
                    <span className="text-[11px] text-slate-400 mt-1">Instant demo approval</span>
                  </label>

                  <label
                    className={`flex flex-col p-3 rounded-lg border cursor-pointer transition-all ${
                      formData.paymentMethod === 'demo-pay'
                        ? 'bg-blue-600/20 border-blue-500 text-white'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="demo-pay"
                      checked={formData.paymentMethod === 'demo-pay'}
                      onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                      className="sr-only"
                    />
                    <span className="font-semibold text-white">Demo Apple/Google Pay</span>
                    <span className="text-[11px] text-slate-400 mt-1">One-tap simulation</span>
                  </label>

                  <label
                    className={`flex flex-col p-3 rounded-lg border cursor-pointer transition-all ${
                      formData.paymentMethod === 'demo-cod'
                        ? 'bg-blue-600/20 border-blue-500 text-white'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="demo-cod"
                      checked={formData.paymentMethod === 'demo-cod'}
                      onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                      className="sr-only"
                    />
                    <span className="font-semibold text-white">Simulated COD</span>
                    <span className="text-[11px] text-slate-400 mt-1">Pay on demo arrival</span>
                  </label>
                </div>
              </div>

              {/* Cart Summary strip */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-400">Total Demonstration Cart Amount:</span>
                  <div className="text-xl font-bold font-mono text-white mt-0.5 tabular-nums">
                    ${cartTotal.toLocaleString()}
                  </div>
                </div>
                <div className="text-right text-slate-400">
                  <span>Shipping: Free Demo</span>
                  <div className="text-[11px] text-emerald-400">Taxes included</div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || cart.length === 0}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 text-white font-semibold text-sm rounded-xl transition-colors shadow-lg cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Processing Demonstration Order...</span>
                ) : (
                  <>
                    <span>Place Demonstration Order (${cartTotal.toLocaleString()})</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
