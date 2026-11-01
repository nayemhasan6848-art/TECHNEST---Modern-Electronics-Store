'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useStore } from '@/context/StoreContext';
import { PRODUCTS, Product } from '@/data/products';
import {
  X,
  Star,
  ShoppingBag,
  Heart,
  SlidersHorizontal,
  Truck,
  RotateCcw,
  ShieldCheck,
  Check,
  ArrowRight
} from 'lucide-react';

export default function ProductDetailModal() {
  const {
    selectedProduct,
    setSelectedProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    toggleCompare,
    isInCompare
  } = useStore();

  const [selectedVariant, setSelectedVariant] = useState<string>('');
  const [selectedImageIdx, setSelectedImageIdx] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  if (!selectedProduct) return null;

  const currentVariant = selectedVariant || selectedProduct.variants[0] || 'Default';
  const isFavorited = isInWishlist(selectedProduct.id);
  const isCompared = isInCompare(selectedProduct.id);

  // Related products from same category or workspace
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== selectedProduct.id && (p.categorySlug === selectedProduct.categorySlug || p.isWorkspaceEssential)
  ).slice(0, 3);

  const handleAddToCart = () => {
    addToCart(selectedProduct, currentVariant, quantity);
  };

  const currentImage = selectedProduct.galleryImages[selectedImageIdx] || selectedProduct.image;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={() => setSelectedProduct(null)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#0B132B] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#070B18]/70">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>{selectedProduct.category}</span>
            <span>/</span>
            <span className="text-white font-medium">{selectedProduct.name}</span>
          </div>
          <button
            onClick={() => setSelectedProduct(null)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Main PDP Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Gallery Left */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#070B18] border border-slate-800 flex items-center justify-center">
                <Image
                  src={currentImage}
                  alt={selectedProduct.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Thumbnails */}
              {selectedProduct.galleryImages.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-1">
                  {selectedProduct.galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIdx(idx)}
                      className={`relative w-20 h-16 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                        selectedImageIdx === idx ? 'border-blue-500 scale-95' : 'border-slate-800 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${selectedProduct.name} view ${idx + 1}`}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Availability Notice */}
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span>
                  Availability: <strong className="text-white">In Stock</strong> ({selectedProduct.stockCount} units in demonstration inventory)
                </span>
              </div>
            </div>

            {/* Purchase Module Right */}
            <div className="flex flex-col">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {selectedProduct.name}
              </h2>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-3 text-sm text-slate-400 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-semibold text-white">{selectedProduct.rating}</span>
                </div>
                <span>·</span>
                <span className="text-slate-300">
                  {selectedProduct.reviewCount} demonstration reviews
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold text-white tabular-nums">
                  ${selectedProduct.price.toLocaleString()}
                </span>
                {selectedProduct.originalPrice && (
                  <span className="text-base text-slate-400 line-through tabular-nums">
                    ${selectedProduct.originalPrice.toLocaleString()}
                  </span>
                )}
                <span className="text-xs text-slate-400">
                  Includes demo sales tax & express shipping
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {selectedProduct.fullDescription}
              </p>

              {/* Variant Selector */}
              {selectedProduct.variants && selectedProduct.variants.length > 0 && (
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                    Finish / Variant: <span className="text-blue-400 font-normal">{currentVariant}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.variants.map((v) => (
                      <button
                        key={v}
                        onClick={() => setSelectedVariant(v)}
                        className={`px-3.5 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                          currentVariant === v
                            ? 'bg-blue-600/20 border-blue-500 text-white shadow-sm'
                            : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-600'
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector & Add to Cart */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center bg-slate-900 border border-slate-700 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-slate-300 hover:text-white transition-colors"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="px-3 py-2 text-sm font-semibold text-white min-w-[2.5rem] text-center tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-slate-300 hover:text-white transition-colors"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-lg transition-colors shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Demonstration Cart</span>
                </button>
              </div>

              {/* Wishlist & Compare actions */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800 text-xs">
                <button
                  onClick={() => toggleWishlist(selectedProduct.id)}
                  className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                >
                  <Heart className={`w-4 h-4 ${isFavorited ? 'fill-blue-500 text-blue-500' : ''}`} />
                  <span>{isFavorited ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
                </button>
                <span className="text-slate-700">|</span>
                <button
                  onClick={() => toggleCompare(selectedProduct)}
                  className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                >
                  <SlidersHorizontal className={`w-4 h-4 ${isCompared ? 'text-blue-400' : ''}`} />
                  <span>{isCompared ? 'In Comparison Matrix' : 'Compare Specifications'}</span>
                </button>
              </div>

              {/* Sample Delivery Information */}
              <div className="mt-6 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-2 text-slate-300 font-medium">
                  <Truck className="w-4 h-4 text-blue-400" />
                  <span>Demonstration Delivery: Standard 2–3 Business Days</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 font-medium">
                  <RotateCcw className="w-4 h-4 text-blue-400" />
                  <span>Demonstration Policy: 30-Day Evaluation Window</span>
                </div>
                <div className="text-[11px] text-slate-400 pt-1">
                  * Note: Shipping and return guarantees are simulated portfolio content.
                </div>
              </div>
            </div>
          </div>

          {/* Key Technical Specifications Table */}
          <div className="pt-6 border-t border-slate-800">
            <h3 className="text-lg font-bold text-white mb-4">
              Technical Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 bg-slate-900/50 p-5 rounded-xl border border-slate-800">
              {selectedProduct.specifications.map((spec, i) => (
                <div key={i} className="flex flex-col py-1.5 border-b border-slate-800/60 text-xs">
                  <span className="text-slate-400 font-medium uppercase tracking-wider text-[11px]">
                    {spec.label}
                  </span>
                  <span className="text-white font-mono mt-0.5">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Engineering Features */}
          {selectedProduct.features && selectedProduct.features.length > 0 && (
            <div className="pt-4">
              <h3 className="text-lg font-bold text-white mb-3">
                Key Hardware Features
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
                {selectedProduct.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 bg-slate-900/40 p-3 rounded-lg border border-slate-800/60">
                    <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Demonstration Reviews */}
          <div className="pt-6 border-t border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Sample Demonstration Reviews
                </h3>
                <p className="text-xs text-slate-400">
                  Clearly labeled sample feedback created for portfolio evaluation.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {selectedProduct.reviews.map((rev) => (
                <div key={rev.id} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">{rev.userName}</span>
                    <span className="text-slate-400">{rev.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                    <span className="ml-2 text-[10px] text-blue-400 border border-blue-500/30 px-1.5 py-0.5 rounded">
                      Sample Feedback
                    </span>
                  </div>
                  <div className="font-medium text-slate-200">{rev.title}</div>
                  <p className="text-slate-400 leading-relaxed">{rev.comment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="pt-6 border-t border-slate-800">
              <h3 className="text-lg font-bold text-white mb-4">
                Complementary Tech Essentials
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedProducts.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      setSelectedProduct(rel);
                      setSelectedImageIdx(0);
                      setSelectedVariant('');
                      setQuantity(1);
                    }}
                    className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 hover:border-slate-700 cursor-pointer transition-colors group"
                  >
                    <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-slate-950 mb-2">
                      <Image
                        src={rel.image}
                        alt={rel.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="text-xs font-semibold text-white group-hover:text-blue-400 truncate">
                      {rel.name}
                    </div>
                    <div className="text-xs text-blue-400 font-mono mt-0.5 tabular-nums">
                      ${rel.price.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
