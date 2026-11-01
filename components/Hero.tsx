'use client';

import React from 'react';
import Image from 'next/image';
import { useStore } from '@/context/StoreContext';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  const { setSelectedCategory, setSortBy } = useStore();

  const handleExploreClick = () => {
    setSelectedCategory('all');
    const catalog = document.getElementById('catalog-section');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiscoverNewClick = () => {
    setSortBy('newest');
    const catalog = document.getElementById('catalog-section');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-hidden border-b border-slate-800">
      {/* Background Image filling the hero */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/hero.jpg"
          alt="TECHNEST modern electronics studio setup"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-100"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark overlay scrim ensuring 4.5:1 text contrast across all viewports */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/85 to-[#070B18]/70" />
        <div className="absolute inset-0 bg-radial-[at_center_center] from-transparent via-[#0B132B]/40 to-[#0B132B]/95" />
      </div>

      {/* Overlay Content directly on the image */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Quiet Kicker Metadata (Zero-Pill discipline: quiet inline text) */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase mb-4">
          <span>Curated Flagship Collection</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Fictional Demonstration Store</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl leading-[1.1] mb-6 [text-wrap:balance]">
          Technology That Moves You Forward.
        </h1>

        {/* Supporting text */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-10 [text-wrap:balance]">
          Explore thoughtfully selected tech essentials for work, entertainment, and everyday life.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={handleExploreClick}
            className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-medium text-base rounded-xl transition-all shadow-lg shadow-blue-900/30 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Explore Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={handleDiscoverNewClick}
            className="w-full sm:w-auto px-7 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-base rounded-xl border border-slate-700/80 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Discover What&apos;s New</span>
          </button>
        </div>

        {/* Quiet Trust Anchors */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-slate-400 max-w-2xl w-full">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="whitespace-nowrap">12 Flagship Products</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="whitespace-nowrap">Technical Specifications</span>
          </div>
          <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="whitespace-nowrap">Interactive Discovery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
