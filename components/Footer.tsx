'use client';

import React from 'react';
import { useStore } from '@/context/StoreContext';
import { CATEGORIES } from '@/data/products';
import {
  ShieldCheck,
  ArrowUpRight,
  HelpCircle,
  Truck,
  Mail,
  User,
  ExternalLink
} from 'lucide-react';

export default function Footer() {
  const { setSelectedCategory, setInfoModal, setIsAccountOpen } = useStore();

  const handleCategoryClick = (slug: string) => {
    setSelectedCategory(slug);
    const catalog = document.getElementById('catalog-section');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#070B18] border-t border-slate-800 text-slate-400 text-xs">
      {/* Upper Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-base shadow-sm">
                T
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                TECHNEST
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Portfolio demonstration created for a professional web design agency. High-performance consumer electronics, workspace peripherals, and acoustic hardware engineered with uncompromising precision.
            </p>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-[11px] text-slate-400 max-w-sm">
              <strong className="text-slate-300 block mb-0.5">Agency Demonstration Model</strong>
              All products, pricing, reviews, and transaction workflows are realistic fictional representations.
            </div>
          </div>

          {/* Product Categories */}
          <div className="space-y-3">
            <div className="text-white font-bold text-sm tracking-wider uppercase">
              Categories
            </div>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <button
                    onClick={() => handleCategoryClick(cat.slug)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleCategoryClick('workspace-essentials')}
                  className="hover:text-white transition-colors text-left text-blue-400 font-medium"
                >
                  Workspace Essentials
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Support & Policies */}
          <div className="space-y-3">
            <div className="text-white font-bold text-sm tracking-wider uppercase">
              Support & Policies
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => setInfoModal('faq')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
                  <span>Frequently Asked Questions</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setInfoModal('shipping')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Truck className="w-3.5 h-3.5 text-blue-400" />
                  <span>Demonstration Shipping Policy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setInfoModal('contact')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <span>Contact Demo Team</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsAccountOpen(true)}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <User className="w-3.5 h-3.5 text-blue-400" />
                  <span>Demonstration Account</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Demonstration Socials & Agency note */}
          <div className="space-y-3">
            <div className="text-white font-bold text-sm tracking-wider uppercase">
              Agency Portfolio
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Demonstrating modern frontend engineering capabilities: responsive grids, state-managed shopping bags, live search, and accessible interactions.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs">
              <span className="text-slate-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                Pure HTML / CSS / JavaScript
              </span>
              <span className="text-slate-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Zero Backend Dependency
              </span>
              <span className="text-slate-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                Edge & Cloudflare Pages Ready
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Copyright & Legal Strip */}
      <div className="border-t border-slate-800/80 bg-[#050811] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} TECHNEST Electronics. Portfolio Demonstration. Fictional brand representation.
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <button onClick={() => setInfoModal('shipping')} className="hover:text-white transition-colors">
              Terms & Simulation
            </button>
            <span>·</span>
            <button onClick={() => setInfoModal('shipping')} className="hover:text-white transition-colors">
              Privacy Demonstration
            </button>
            <span>·</span>
            <button onClick={() => setInfoModal('faq')} className="hover:text-white transition-colors">
              Store FAQ
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
