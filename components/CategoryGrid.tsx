'use client';

import React from 'react';
import Image from 'next/image';
import { useStore } from '@/context/StoreContext';
import { CATEGORIES } from '@/data/products';
import { ArrowUpRight } from 'lucide-react';

export default function CategoryGrid() {
  const { setSelectedCategory, selectedCategory } = useStore();

  const handleCategorySelect = (slug: string) => {
    setSelectedCategory(slug);
    const catalog = document.getElementById('catalog-section');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-[#0B132B] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
              Product Categories
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Engineered by Discipline
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Filter our catalogue by domain. Every product represents a synthesis of rigorous industrial design and high performance.
          </p>
        </div>

        {/* Varied Asymmetric Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Laptops & Computing (Prominent Span on large displays) */}
          <div
            onClick={() => handleCategorySelect('laptops-computing')}
            className={`group relative rounded-2xl overflow-hidden cursor-pointer border transition-all duration-300 md:col-span-2 lg:col-span-2 min-h-[300px] sm:min-h-[360px] ${
              selectedCategory === 'laptops-computing'
                ? 'border-blue-500 ring-2 ring-blue-500/30'
                : 'border-slate-800 hover:border-slate-700 bg-slate-900/60'
            }`}
          >
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/laptops.jpg"
                alt="Laptops and Computing"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/60 to-transparent" />
            </div>

            <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-end">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-blue-400 tracking-wide uppercase">
                  Flagship Architecture
                </span>
                <span className="p-2 rounded-full bg-slate-900/80 text-white group-hover:bg-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Laptops & Computing
              </h3>
              <p className="text-sm text-slate-300 max-w-lg mb-3">
                High-performance ultra-thin laptops and studio monitors designed for creators, developers, and power users.
              </p>
              <div className="text-xs text-slate-400">
                2 Products Available · View Collection →
              </div>
            </div>
          </div>

          {/* Card 2: Headphones & Audio */}
          <div
            onClick={() => handleCategorySelect('headphones-audio')}
            className={`group relative rounded-2xl overflow-hidden cursor-pointer border transition-all duration-300 min-h-[300px] sm:min-h-[360px] ${
              selectedCategory === 'headphones-audio'
                ? 'border-blue-500 ring-2 ring-blue-500/30'
                : 'border-slate-800 hover:border-slate-700 bg-slate-900/60'
            }`}
          >
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/headphones.jpg"
                alt="Headphones and Audio"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/60 to-transparent" />
            </div>

            <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-end">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-blue-400 tracking-wide uppercase">
                  Acoustic Engineering
                </span>
                <span className="p-2 rounded-full bg-slate-900/80 text-white group-hover:bg-blue-600 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Headphones & Audio
              </h3>
              <p className="text-sm text-slate-300 mb-3">
                Hybrid active noise cancellation, custom graphene drivers, and broadcast mics.
              </p>
              <div className="text-xs text-slate-400">
                3 Products Available · View Collection →
              </div>
            </div>
          </div>

          {/* Card 3: Keyboards & Accessories */}
          <div
            onClick={() => handleCategorySelect('keyboards-accessories')}
            className={`group relative rounded-2xl overflow-hidden cursor-pointer border transition-all duration-300 min-h-[260px] sm:min-h-[290px] ${
              selectedCategory === 'keyboards-accessories'
                ? 'border-blue-500 ring-2 ring-blue-500/30'
                : 'border-slate-800 hover:border-slate-700 bg-slate-900/60'
            }`}
          >
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/keyboards.jpg"
                alt="Keyboards and Accessories"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/70 to-transparent" />
            </div>

            <div className="relative z-10 p-6 h-full flex flex-col justify-end">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-blue-400 tracking-wide uppercase">
                  Desk Peripherals
                </span>
                <span className="p-1.5 rounded-full bg-slate-900/80 text-white group-hover:bg-blue-600 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                Keyboards & Accessories
              </h3>
              <p className="text-xs text-slate-300 line-clamp-2 mb-2">
                Mechanical boards, electromagnetic mice, CNC aluminum risers, and 10-in-1 hubs.
              </p>
              <div className="text-xs text-slate-400">
                4 Products · View →
              </div>
            </div>
          </div>

          {/* Card 4: Smart Home */}
          <div
            onClick={() => handleCategorySelect('smart-home')}
            className={`group relative rounded-2xl overflow-hidden cursor-pointer border transition-all duration-300 min-h-[260px] sm:min-h-[290px] ${
              selectedCategory === 'smart-home'
                ? 'border-blue-500 ring-2 ring-blue-500/30'
                : 'border-slate-800 hover:border-slate-700 bg-slate-900/60'
            }`}
          >
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/smarthome.jpg"
                alt="Smart Home"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/70 to-transparent" />
            </div>

            <div className="relative z-10 p-6 h-full flex flex-col justify-end">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-blue-400 tracking-wide uppercase">
                  Ambient Intelligence
                </span>
                <span className="p-1.5 rounded-full bg-slate-900/80 text-white group-hover:bg-blue-600 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                Smart Home
              </h3>
              <p className="text-xs text-slate-300 line-clamp-2 mb-2">
                Circadian task lighting and Matter-enabled connected environmental systems.
              </p>
              <div className="text-xs text-slate-400">
                1 Product · View →
              </div>
            </div>
          </div>

          {/* Card 5: Mobile & Gaming Combined Column or 2 individual Cards */}
          <div
            onClick={() => handleCategorySelect('mobile-accessories')}
            className={`group relative rounded-2xl overflow-hidden cursor-pointer border transition-all duration-300 min-h-[260px] sm:min-h-[290px] ${
              selectedCategory === 'mobile-accessories'
                ? 'border-blue-500 ring-2 ring-blue-500/30'
                : 'border-slate-800 hover:border-slate-700 bg-slate-900/60'
            }`}
          >
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/mobile.jpg"
                alt="Mobile Accessories"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/70 to-transparent" />
            </div>

            <div className="relative z-10 p-6 h-full flex flex-col justify-end">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-blue-400 tracking-wide uppercase">
                  Charging & Power
                </span>
                <span className="p-1.5 rounded-full bg-slate-900/80 text-white group-hover:bg-blue-600 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                Mobile Accessories
              </h3>
              <p className="text-xs text-slate-300 line-clamp-2 mb-2">
                Qi2 ultra-slim magnetic chargers, CNC chamfered housings, and Kevlar cables.
              </p>
              <div className="text-xs text-slate-400">
                1 Product · View →
              </div>
            </div>
          </div>
        </div>

        {/* 6th Category banner strip (Gaming Essentials) */}
        <div
          onClick={() => handleCategorySelect('gaming-essentials')}
          className={`mt-6 group relative rounded-2xl overflow-hidden cursor-pointer border transition-all duration-300 min-h-[160px] flex items-center ${
            selectedCategory === 'gaming-essentials'
              ? 'border-blue-500 ring-2 ring-blue-500/30'
              : 'border-slate-800 hover:border-slate-700 bg-slate-900/80'
          }`}
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/gaming.jpg"
              alt="Gaming Essentials"
              fill
              sizes="100vw"
              className="object-cover object-[center_35%] group-hover:scale-102 transition-transform duration-500 opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B] via-[#0B132B]/80 to-transparent" />
          </div>

          <div className="relative z-10 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4">
            <div>
              <span className="text-xs font-medium text-blue-400 tracking-wide uppercase">
                Esports Precision Hardware
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Gaming Essentials
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-1">
                Hall Effect anti-drift magnetic joysticks, microswitch tactile triggers, and 1000Hz polling rate.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-400 group-hover:text-blue-300 shrink-0">
              <span>Explore Gaming Hardware</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
