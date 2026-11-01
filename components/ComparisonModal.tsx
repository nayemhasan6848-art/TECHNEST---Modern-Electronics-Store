'use client';

import React from 'react';
import Image from 'next/image';
import { useStore } from '@/context/StoreContext';
import {
  X,
  Trash2,
  ShoppingBag,
  SlidersHorizontal,
  Check,
  Star,
  Plus
} from 'lucide-react';

export default function ComparisonModal() {
  const {
    compareList,
    isCompareOpen,
    setIsCompareOpen,
    removeFromCompare,
    clearCompare,
    addToCart,
    setSelectedProduct
  } = useStore();

  if (!isCompareOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={() => setIsCompareOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-[#0B132B] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#070B18]">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-blue-500" />
            <div>
              <h2 className="text-base font-bold text-white">
                Side-by-Side Product Comparison
              </h2>
              <p className="text-xs text-slate-400">
                Comparing {compareList.length} of 3 maximum selected electronics
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {compareList.length > 0 && (
              <button
                onClick={clearCompare}
                className="text-xs text-slate-400 hover:text-red-400 transition-colors"
              >
                Clear all
              </button>
            )}
            <button
              onClick={() => setIsCompareOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close comparison"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {compareList.length === 0 ? (
            <div className="text-center py-12">
              <SlidersHorizontal className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <h3 className="text-base font-bold text-white mb-1">
                No products selected for comparison
              </h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto mb-4">
                Click the comparison icon on any product card in the catalog to evaluate specs, pricing, and features side-by-side.
              </p>
              <button
                onClick={() => setIsCompareOpen(false)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Explore Products
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <div className="min-w-[640px]">
                {/* Product Card Row */}
                <div className="grid grid-cols-4 gap-4 pb-6 border-b border-slate-800">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider self-end pb-4">
                    Overview
                  </div>
                  {compareList.map((product) => (
                    <div key={product.id} className="relative bg-slate-900/60 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
                      <button
                        onClick={() => removeFromCompare(product.id)}
                        className="absolute top-2 right-2 p-1 text-slate-500 hover:text-red-400 transition-colors"
                        title="Remove from comparison"
                        aria-label={`Remove ${product.name} from comparison`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div
                        onClick={() => {
                          setIsCompareOpen(false);
                          setSelectedProduct(product);
                        }}
                        className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-950 mb-3 cursor-pointer"
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <h4
                        onClick={() => {
                          setIsCompareOpen(false);
                          setSelectedProduct(product);
                        }}
                        className="text-sm font-semibold text-white hover:text-blue-400 cursor-pointer line-clamp-1 mb-1"
                      >
                        {product.name}
                      </h4>
                      <div className="text-xs text-slate-400 mb-2">{product.category}</div>

                      <div className="text-lg font-bold text-blue-400 font-mono mb-3 tabular-nums">
                        ${product.price.toLocaleString()}
                      </div>

                      <button
                        onClick={() => addToCart(product, product.variants[0], 1)}
                        className="w-full flex items-center justify-center gap-1.5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium rounded-lg transition-colors"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  ))}

                  {/* Placeholder for 2nd or 3rd slot */}
                  {Array.from({ length: 3 - compareList.length }).map((_, i) => (
                    <div
                      key={i}
                      onClick={() => setIsCompareOpen(false)}
                      className="border-2 border-dashed border-slate-800 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-slate-700 transition-colors"
                    >
                      <Plus className="w-8 h-8 text-slate-600 mb-2" />
                      <span className="text-xs font-medium text-slate-400">
                        Add product from catalog
                      </span>
                    </div>
                  ))}
                </div>

                {/* Rating & Popularity */}
                <div className="grid grid-cols-4 gap-4 py-4 border-b border-slate-800/60 text-xs">
                  <div className="font-semibold text-slate-400">Rating & Reviews</div>
                  {compareList.map((product) => (
                    <div key={product.id} className="flex items-center gap-1.5 text-slate-300">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="font-semibold text-white">{product.rating}</span>
                      <span className="text-slate-400">({product.reviewCount} reviews)</span>
                    </div>
                  ))}
                </div>

                {/* Availability */}
                <div className="grid grid-cols-4 gap-4 py-4 border-b border-slate-800/60 text-xs">
                  <div className="font-semibold text-slate-400">Inventory Status</div>
                  {compareList.map((product) => (
                    <div key={product.id} className="flex items-center gap-1.5 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{product.inStock ? `In Stock (${product.stockCount} units)` : 'Sold Out'}</span>
                    </div>
                  ))}
                </div>

                {/* Primary Specs Summary */}
                <div className="grid grid-cols-4 gap-4 py-4 border-b border-slate-800/60 text-xs">
                  <div className="font-semibold text-slate-400">Key Specification</div>
                  {compareList.map((product) => (
                    <div key={product.id} className="font-mono text-slate-300 text-[11px] leading-relaxed">
                      {product.specsSummary}
                    </div>
                  ))}
                </div>

                {/* Available Variants */}
                <div className="grid grid-cols-4 gap-4 py-4 border-b border-slate-800/60 text-xs">
                  <div className="font-semibold text-slate-400">Available Finishes</div>
                  {compareList.map((product) => (
                    <div key={product.id} className="text-slate-300">
                      {product.variants.join(', ')}
                    </div>
                  ))}
                </div>

                {/* Features Highlight */}
                <div className="grid grid-cols-4 gap-4 py-4 border-b border-slate-800/60 text-xs">
                  <div className="font-semibold text-slate-400">Key Differentiators</div>
                  {compareList.map((product) => (
                    <ul key={product.id} className="space-y-1.5 text-slate-300">
                      {product.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span className="text-[11px]">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
