'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from '@/data/products';
import { useStore } from '@/context/StoreContext';
import { Heart, ShoppingBag, SlidersHorizontal, Check, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
    toggleCompare,
    isInCompare,
    setSelectedProduct,
  } = useStore();

  const isFavorited = isInWishlist(product.id);
  const isCompared = isInCompare(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, product.variants[0], 1);
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const handleCompareClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleCompare(product);
  };

  return (
    <div
      onClick={() => setSelectedProduct(product)}
      className="group relative flex flex-col bg-slate-900/60 rounded-xl border border-slate-800 hover:border-slate-700 hover:shadow-xl hover:shadow-black/40 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Top Image Showcase (65-70% height area on neutral clean surface) */}
      <div className="relative w-full aspect-[4/3] bg-[#0E1626] overflow-hidden flex items-center justify-center p-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />

        {/* Quiet Subtle Dark Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />

        {/* Floating Quick Action Overlays */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-10">
          {/* Wishlist Button */}
          <button
            onClick={handleWishlistClick}
            aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
            className={`p-2 rounded-lg backdrop-blur-md transition-colors ${
              isFavorited
                ? 'bg-blue-600 text-white'
                : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
            title="Save to wishlist"
          >
            <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
          </button>

          {/* Compare Button */}
          <button
            onClick={handleCompareClick}
            aria-label="Compare specifications"
            className={`p-2 rounded-lg backdrop-blur-md transition-colors ${
              isCompared
                ? 'bg-blue-500 text-white'
                : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
            title="Compare side-by-side"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        </div>

        {/* Availability status (Quiet inline indicator, no garish badge spam) */}
        <div className="absolute bottom-3 left-3 z-10 text-[11px] font-medium tracking-tight">
          {product.inStock ? (
            <span className="text-emerald-400 bg-slate-950/80 backdrop-blur-md px-2 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              In Stock · {product.stockCount} units
            </span>
          ) : (
            <span className="text-slate-400 bg-slate-950/80 backdrop-blur-md px-2 py-0.5 rounded border border-slate-700">
              Sold Out
            </span>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1 p-5">
        {/* Category & Rating (Zero-pill discipline: unboxed text with typographic dot) */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
          <span className="uppercase tracking-wider font-semibold text-slate-400">
            {product.category}
          </span>
          <div className="flex items-center gap-1 text-slate-300">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-white">{product.rating}</span>
            <span className="text-slate-400 text-[11px]">({product.reviewCount})</span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors mb-2 line-clamp-1">
          {product.name}
        </h3>

        {/* Short Description */}
        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-3">
          {product.shortDescription}
        </p>

        {/* Key Technical Specs summary (clean hairline divider) */}
        <div className="pt-2.5 pb-3 border-t border-slate-800/80 mt-auto">
          <div className="text-[11px] font-mono text-slate-300 leading-tight truncate">
            {product.specsSummary}
          </div>
        </div>

        {/* Price & Add to Cart action */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-white tabular-nums">
              ${product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-slate-400 line-through tabular-nums">
                ${product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          <button
            onClick={handleQuickAdd}
            disabled={!product.inStock}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-400 text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
