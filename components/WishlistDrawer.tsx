'use client';

import React from 'react';
import Image from 'next/image';
import { useStore } from '@/context/StoreContext';
import { PRODUCTS } from '@/data/products';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

export default function WishlistDrawer() {
  const {
    wishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
    addToCart,
    setSelectedProduct,
  } = useStore();

  if (!isWishlistOpen) return null;

  const wishlistProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm transition-opacity"
      onClick={() => setIsWishlistOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-[#0B132B] border-l border-slate-800 h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#070B18]">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-blue-500 fill-blue-500" />
            <h2 className="text-base font-bold text-white">Your Saved Wishlist</h2>
            <span className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full font-mono tabular-nums">
              {wishlist.length}
            </span>
          </div>
          <button
            onClick={() => setIsWishlistOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wishlist Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {wishlistProducts.length > 0 ? (
            wishlistProducts.map((product) => (
              <div
                key={product.id}
                className="flex gap-4 p-3.5 bg-slate-900/60 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <div
                  onClick={() => {
                    setIsWishlistOpen(false);
                    setSelectedProduct(product);
                  }}
                  className="relative w-20 h-20 rounded-lg overflow-hidden bg-slate-950 shrink-0 cursor-pointer border border-slate-800"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3
                        onClick={() => {
                          setIsWishlistOpen(false);
                          setSelectedProduct(product);
                        }}
                        className="text-sm font-semibold text-white hover:text-blue-400 transition-colors truncate cursor-pointer"
                      >
                        {product.name}
                      </h3>
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="text-slate-500 hover:text-red-400 p-1 transition-colors"
                        title="Remove from wishlist"
                        aria-label={`Remove ${product.name} from wishlist`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {product.category}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/60">
                    <span className="text-sm font-bold text-white font-mono tabular-nums">
                      ${product.price.toLocaleString()}
                    </span>

                    <button
                      onClick={() => addToCart(product, product.variants[0], 1)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>Move to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Your wishlist is empty</h3>
              <p className="text-xs text-slate-400 max-w-xs mb-6">
                Tap the heart icon on any electronic device to bookmark items for later comparison or checkout.
              </p>
              <button
                onClick={() => {
                  setIsWishlistOpen(false);
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
      </div>
    </div>
  );
}
