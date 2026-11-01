'use client';

import React from 'react';
import { WHY_TECHNEST_ITEMS } from '@/data/products';
import { Cpu, Compass, Layers, ShieldCheck } from 'lucide-react';

export default function WhyTechnest() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-blue-400" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-blue-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-blue-400" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section className="py-20 bg-[#0B132B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            The TECHNEST Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Why Choose TECHNEST?
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Four foundational principles that govern our consumer tech curation and digital store architecture.
          </p>
        </div>

        {/* 4 Customer Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_TECHNEST_ITEMS.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-5 shrink-0">
                {getIcon(item.icon)}
              </div>

              <h3 className="text-base font-semibold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Demonstration Disclaimer Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-slate-500" />
            <span>
              All sample specifications, delivery terms, and product guarantees presented are fictional demonstration content.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
