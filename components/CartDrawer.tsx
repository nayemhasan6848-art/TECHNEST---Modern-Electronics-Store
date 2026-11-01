'use client';

import React from 'react';
import Image from 'next/image';
import { useStore } from '@/context/StoreContext';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartItemCount,
    setIsCheckoutOpen,
    setSelectedProduct
  } = useStore();

  if (!isCartOpen) return null;

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm transition-opacity"
      onClick={() => setIsCartOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-[#0B132B] border-l border-slate-800 h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#070B18]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-blue-500" />
            <h2 className="text-base font-bold text-white">Your Shopping Cart</h2>
            <span className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full font-mono tabular-nums">
              {cartItemCount}
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Demonstration Disclaimer Bar */}
        <div className="bg-blue-950/40 border-b border-blue-900/40 px-6 py-2 text-xs text-blue-300 flex items-center justify-between">
          <span>Demonstration Cart State</span>
          <span className="text-[11px] text-blue-400">Persists in browser</span>
        </div>

        {/* Drawer Body: Cart Items or Empty State */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div
                key={`${item.product.id}-${item.variant}`}
                className="flex gap-4 p-3.5 bg-slate-900/60 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                {/* Product Thumbnail */}
                <div
                  onClick={() => {
                    setIsCartOpen(false);
                    setSelectedProduct(item.product);
                  }}
                  className="relative w-20 h-20 rounded-lg overflow-hidden bg-slate-950 shrink-0 cursor-pointer border border-slate-800"
                >
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Item Details */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3
                        onClick={() => {
                          setIsCartOpen(false);
                          setSelectedProduct(item.product);
                        }}
                        className="text-sm font-semibold text-white hover:text-blue-400 transition-colors truncate cursor-pointer"
                      >
                        {item.product.name}
                      </h3>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.variant)}
                        className="text-slate-500 hover:text-red-400 p-1 transition-colors"
                        aria-label="Remove item"
                        title="Remove from cart"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      Finish: <span className="text-slate-300">{item.variant}</span>
                    </div>
                  </div>

                  {/* Quantity and Price */}
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/60">
                    <div className="flex items-center bg-slate-800 rounded-md border border-slate-700">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.variant, item.quantity - 1)}
                        className="p-1 text-slate-300 hover:text-white transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-semibold text-white tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.variant, item.quantity + 1)}
                        className="p-1 text-slate-300 hover:text-white transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="text-sm font-bold text-white font-mono tabular-nums">
                      ${(item.product.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            /* Empty Cart State */
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 mb-4">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Your cart is empty</h3>
              <p className="text-xs text-slate-400 max-w-xs mb-6">
                Explore our catalog of precision-engineered electronics and workspace gear to add items to your cart.
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  const el = document.getElementById('catalog-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Browse Catalog
              </button>
            </div>
          )}
        </div>

        {/* Drawer Footer with Subtotal & Actions */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-slate-800 bg-[#070B18] space-y-4">
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center justify-between text-slate-400">
                <span>Subtotal</span>
                <span className="text-white font-mono font-medium tabular-nums">
                  ${cartTotal.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>Estimated Express Shipping</span>
                <span className="text-emerald-400 font-medium">Free (Demo)</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>Estimated Sales Tax</span>
                <span className="text-slate-400 font-mono">$0.00</span>
              </div>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-sm font-bold text-white">
                <span>Total</span>
                <span className="text-lg font-mono text-blue-400 tabular-nums">
                  ${cartTotal.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={handleCheckoutClick}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-colors shadow-lg shadow-blue-950/40 cursor-pointer"
              >
                <span>Proceed to Demonstration Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={clearCart}
                className="w-full py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
              >
                Clear Cart
              </button>
            </div>

            <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
              <span>Simulated e-commerce portfolio demonstration</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
