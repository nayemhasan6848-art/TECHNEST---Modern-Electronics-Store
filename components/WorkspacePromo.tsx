'use client';

import React from 'react';
import Image from 'next/image';
import { useStore } from '@/context/StoreContext';
import { ArrowRight, Monitor, Keyboard, Laptop } from 'lucide-react';

export default function WorkspacePromo() {
  const { setSelectedCategory } = useStore();

  const handleShopWorkspace = () => {
    setSelectedCategory('workspace-essentials');
    const catalog = document.getElementById('catalog-section');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full py-28 sm:py-36 overflow-hidden border-t border-b border-slate-800 my-12">
      {/* Background Desk Setup Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/workspace.jpg"
          alt="TECHNEST modern upgraded workspace desk setup"
          fill
          sizes="100vw"
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark scrim for 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B]/95 via-[#0B132B]/85 to-[#0B132B]/60" />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Unboxed Kicker */}
          <div className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            Featured Collection Spotlight
          </div>

          {/* Headline overlaid directly on the image */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4 [text-wrap:balance]">
            Your Workspace, Upgraded.
          </h2>

          {/* Supporting text */}
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 [text-wrap:balance]">
            Thoughtful technology for a more productive everyday setup.
          </p>

          {/* CTA Button */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={handleShopWorkspace}
              className="px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm rounded-xl transition-all shadow-lg shadow-blue-900/40 flex items-center gap-2 group cursor-pointer"
            >
              <span>Shop Workspace Essentials</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Feature highlights */}
          <div className="mt-10 pt-6 border-t border-slate-700/60 flex flex-wrap items-center gap-6 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Monitor className="w-4 h-4 text-blue-400" />
              <span>4K Precision Displays</span>
            </div>
            <div className="flex items-center gap-2">
              <Keyboard className="w-4 h-4 text-blue-400" />
              <span>Acoustic Gasket Keyboards</span>
            </div>
            <div className="flex items-center gap-2">
              <Laptop className="w-4 h-4 text-blue-400" />
              <span>Ergonomic CNC Stands</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
