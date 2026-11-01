'use client';

import React, { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import ProductCard from '@/components/ProductCard';
import { CATEGORIES } from '@/data/products';
import {
  Search,
  Filter,
  X,
  RotateCcw,
  SlidersHorizontal,
  ChevronDown,
  Sparkles,
  ArrowUpDown
} from 'lucide-react';

export default function ProductCatalog() {
  const {
    filteredProducts,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    sortBy,
    setSortBy,
    onlyInStock,
    setOnlyInStock,
    resetFilters,
    activeFilterCount,
  } = useStore();

  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);

  return (
    <section id="catalog-section" className="py-20 bg-[#0B132B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Controls Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6">
          <div>
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
              Demonstration Catalog
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Tech Essentials
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Showing {filteredProducts.length} precision-crafted electronics and workspace peripherals
            </p>
          </div>

          {/* Quick Search & Sort on Desktop */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64 min-w-[200px]">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search products or specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 bg-slate-900/90 border border-slate-700/80 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort Selector */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort products by"
                className="appearance-none bg-slate-900/90 border border-slate-700/80 text-white text-sm rounded-lg pl-3 pr-8 py-2 focus:outline-none focus:border-blue-500 cursor-pointer"
              >
                <option value="popular">Most Popular</option>
                <option value="newest">Newest Releases</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Filter Toggle Button */}
            <button
              onClick={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium border transition-colors ${
                isFilterPanelOpen || activeFilterCount > 0
                  ? 'bg-blue-600/20 border-blue-500 text-blue-400'
                  : 'bg-slate-900/90 border-slate-700/80 text-slate-300 hover:text-white hover:border-slate-600'
              }`}
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Category Filter Tabs (Zero-Pill: functional segmented tabs with active state) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            All Products (12)
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors shrink-0 ${
                selectedCategory === cat.slug
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat.name} ({cat.productCount})
            </button>
          ))}
          <button
            onClick={() => setSelectedCategory('workspace-essentials')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors shrink-0 ${
              selectedCategory === 'workspace-essentials'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            Workspace Essentials (9)
          </button>
        </div>

        {/* Expandable Advanced Filter Drawer/Bar */}
        {isFilterPanelOpen && (
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 mb-8 transition-all">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              {/* Price Range Slider */}
              <div>
                <div className="flex items-center justify-between text-xs text-slate-300 font-medium mb-2">
                  <span>Price Range</span>
                  <span className="text-blue-400 font-mono tabular-nums">
                    ${priceRange[0]} — ${priceRange[1]}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0"
                    max="1500"
                    step="50"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    aria-label="Maximum price filter"
                    className="w-full accent-blue-500 bg-slate-800 rounded-lg cursor-pointer"
                  />
                </div>
              </div>

              {/* In-Stock Only Toggle */}
              <div className="flex items-center h-10">
                <label className="flex items-center gap-2.5 text-sm text-slate-300 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={onlyInStock}
                    onChange={(e) => setOnlyInStock(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <span>Show In-Stock items only</span>
                </label>
              </div>

              {/* Reset Controls */}
              <div className="flex items-center justify-start md:justify-end gap-3">
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Active Filter Pills Indicator */}
        {activeFilterCount > 0 && (
          <div className="flex items-center gap-2 flex-wrap mb-6 text-xs text-slate-400">
            <span>Active filters:</span>
            {searchQuery && (
              <span className="inline-flex items-center gap-1 bg-slate-800 text-slate-200 px-2.5 py-1 rounded-md">
                Search: &quot;{searchQuery}&quot;
                <button onClick={() => setSearchQuery('')} className="hover:text-white" aria-label="Remove search filter">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center gap-1 bg-slate-800 text-slate-200 px-2.5 py-1 rounded-md">
                Category: {selectedCategory}
                <button onClick={() => setSelectedCategory('all')} className="hover:text-white" aria-label="Reset category filter">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {(priceRange[0] > 0 || priceRange[1] < 1500) && (
              <span className="inline-flex items-center gap-1 bg-slate-800 text-slate-200 px-2.5 py-1 rounded-md">
                Up to ${priceRange[1]}
                <button onClick={() => setPriceRange([0, 1500])} className="hover:text-white" aria-label="Reset price filter">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {onlyInStock && (
              <span className="inline-flex items-center gap-1 bg-slate-800 text-slate-200 px-2.5 py-1 rounded-md">
                In Stock Only
                <button onClick={() => setOnlyInStock(false)} className="hover:text-white" aria-label="Reset in-stock filter">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            <button
              onClick={resetFilters}
              className="text-blue-400 hover:text-blue-300 underline ml-2 cursor-pointer"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-12 text-center max-w-lg mx-auto my-12">
            <div className="w-12 h-12 rounded-xl bg-slate-800 text-slate-400 flex items-center justify-center mx-auto mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No matching products found</h3>
            <p className="text-sm text-slate-400 mb-6">
              We couldn&apos;t find any electronic essentials matching your filter criteria. Try loosening your search terms or price range.
            </p>
            <button
              onClick={resetFilters}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Reset Filters & Show All Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
