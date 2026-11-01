'use client';

import React, { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  SlidersHorizontal,
  X,
  Menu,
  Laptop,
  Headphones,
  Keyboard,
  Home as HomeIcon,
  Smartphone
} from 'lucide-react';

export default function Navbar() {
  const {
    cartItemCount,
    setIsCartOpen,
    wishlist,
    setIsWishlistOpen,
    setIsAccountOpen,
    searchQuery,
    setSearchQuery,
    setSelectedCategory,
    compareList,
    setIsCompareOpen
  } = useStore();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const handleNavClick = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
    setIsMobileMenuOpen(false);
    const element = document.getElementById('catalog-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedCategory('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-[#070B18] border-b border-slate-800/80 text-xs py-2 px-4 text-center text-slate-400">
        <span className="font-medium text-slate-300">Portfolio Demonstration Store</span>
        <span className="mx-2 text-slate-600">·</span>
        <span>All products, prices, and orders are fictional demonstration data</span>
      </div>

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#0B132B]/90 backdrop-blur-md border-b border-slate-800 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 gap-4 md:gap-8">
            {/* Zone 1: Brand Wordmark */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#"
                onClick={handleLogoClick}
                className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-lg tracking-wider shadow-sm group-hover:bg-blue-500 transition-colors">
                  T
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-white whitespace-nowrap">
                    TECHNEST
                  </span>
                </div>
              </a>
            </div>

            {/* Zone 2: Navigation Links (Single-line, clean unboxed text) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
              <button
                onClick={() => handleNavClick('all')}
                className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('laptops-computing')}
                className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
              >
                Computers
              </button>
              <button
                onClick={() => handleNavClick('headphones-audio')}
                className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
              >
                Audio
              </button>
              <button
                onClick={() => handleNavClick('keyboards-accessories')}
                className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
              >
                Accessories
              </button>
              <button
                onClick={() => handleNavClick('smart-home')}
                className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
              >
                Smart Devices
              </button>
              <button
                onClick={() => handleNavClick('gaming-essentials')}
                className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
              >
                Gaming
              </button>
            </nav>

            {/* Zone 3: Interactive Action Controls */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Search Toggle / Input */}
              <div className="relative">
                {isSearchExpanded ? (
                  <div className="flex items-center bg-slate-900 border border-blue-500/50 rounded-lg px-2.5 py-1.5 w-48 sm:w-64 transition-all">
                    <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                    <input
                      type="text"
                      placeholder="Search electronics..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                      className="bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none w-full"
                    />
                    <button
                      onClick={() => {
                        setIsSearchExpanded(false);
                        if (!searchQuery) setSearchQuery('');
                      }}
                      className="text-slate-400 hover:text-white p-0.5"
                      aria-label="Close search"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setIsSearchExpanded(true);
                      const el = document.getElementById('catalog-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors"
                    aria-label="Search products"
                    title="Search catalog"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Compare Button (when products are selected) */}
              {compareList.length > 0 && (
                <button
                  onClick={() => setIsCompareOpen(true)}
                  className="relative p-2 text-blue-400 hover:text-blue-300 hover:bg-slate-800/80 rounded-lg transition-colors hidden sm:flex items-center gap-1.5 text-xs font-medium"
                  title="Compare selected products"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>Compare ({compareList.length})</span>
                </button>
              )}

              {/* Wishlist Button */}
              <button
                onClick={() => setIsWishlistOpen(true)}
                className="relative p-2 text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors"
                aria-label="View wishlist"
                title="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-blue-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Account Interface Button */}
              <button
                onClick={() => setIsAccountOpen(true)}
                className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors"
                aria-label="Account demo profile"
                title="Account"
              >
                <User className="w-5 h-5" />
              </button>

              {/* Shopping Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors font-medium text-sm shadow-sm"
                aria-label="Open shopping cart"
                title="Cart"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="hidden sm:inline">Cart</span>
                <span className="bg-white/20 text-white text-xs px-1.5 py-0.2 rounded font-semibold tabular-nums">
                  {cartItemCount}
                </span>
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#0A1128] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <button
                onClick={() => handleNavClick('all')}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 text-slate-200 hover:bg-slate-800 hover:text-white text-left font-medium"
              >
                <HomeIcon className="w-4 h-4 text-blue-400" />
                All Products
              </button>
              <button
                onClick={() => handleNavClick('laptops-computing')}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 text-slate-200 hover:bg-slate-800 hover:text-white text-left font-medium"
              >
                <Laptop className="w-4 h-4 text-blue-400" />
                Computers
              </button>
              <button
                onClick={() => handleNavClick('headphones-audio')}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 text-slate-200 hover:bg-slate-800 hover:text-white text-left font-medium"
              >
                <Headphones className="w-4 h-4 text-blue-400" />
                Audio
              </button>
              <button
                onClick={() => handleNavClick('keyboards-accessories')}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 text-slate-200 hover:bg-slate-800 hover:text-white text-left font-medium"
              >
                <Keyboard className="w-4 h-4 text-blue-400" />
                Accessories
              </button>
              <button
                onClick={() => handleNavClick('smart-home')}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 text-slate-200 hover:bg-slate-800 hover:text-white text-left font-medium"
              >
                <HomeIcon className="w-4 h-4 text-blue-400" />
                Smart Home
              </button>
              <button
                onClick={() => handleNavClick('mobile-accessories')}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 text-slate-200 hover:bg-slate-800 hover:text-white text-left font-medium"
              >
                <Smartphone className="w-4 h-4 text-blue-400" />
                Mobile Acc.
              </button>
            </div>

            {compareList.length > 0 && (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsCompareOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-slate-800 text-blue-400 rounded-lg text-sm font-medium"
              >
                <SlidersHorizontal className="w-4 h-4" />
                View Side-by-Side Comparison ({compareList.length})
              </button>
            )}
          </div>
        )}
      </header>
    </>
  );
}
