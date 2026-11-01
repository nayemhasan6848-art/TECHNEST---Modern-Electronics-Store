'use client';

import React from 'react';
import { PRODUCTS } from '@/data/products';
import { Star, MessageSquare } from 'lucide-react';

export default function CustomerReviews() {
  // Aggregate prominent product-specific sample reviews
  const featuredReviews = [
    {
      productName: 'AeroBook Pro Laptop',
      userName: 'Julian Vance',
      role: 'Staff Audio Engineer',
      rating: 5,
      date: 'October 2026',
      title: 'Workstation power in an ultra-portable format',
      comment: 'As a front-end developer and audio engineer, compiling large repositories while running Ableton used to make laptops roar. The AeroBook Pro remains dead silent with zero frame drops.',
    },
    {
      productName: 'Pulse Wireless Headphones',
      userName: 'Marcus Thorne',
      role: 'Commercial Architect',
      rating: 5,
      date: 'October 2026',
      title: 'Unbelievable noise suppression on long flights',
      comment: 'Rivals the top German and Japanese audio makers with noticeably more natural midrange clarity and no uncomfortable ear cabin pressure. 40 hours of battery easily lasted my transatlantic flight.',
    },
    {
      productName: 'Nova Mechanical Keyboard',
      userName: 'Chloe Chen',
      role: 'Hardware Enthusiast & Designer',
      rating: 5,
      date: 'September 2026',
      title: 'The best typing sound I have ever experienced',
      comment: 'No rattling stabs, no hollow ping. The gasket dampening delivers that deep, refined acoustic pop keyboard enthusiasts spend hundreds modding for right out of the box.',
    },
    {
      productName: 'Vision 4K Monitor',
      userName: 'Devon Takahashi',
      role: 'Product Visual Lead',
      rating: 5,
      date: 'October 2026',
      title: 'Single cable desk heaven',
      comment: 'Plugging in one USB-C cable for 90W charging, 4K 144Hz video, and all USB accessories transformed my desk clutter completely. The included arm is heavy-duty and silky smooth.',
    }
  ];

  return (
    <section className="py-20 bg-[#070B18] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
              Community Perspectives
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Sample Demonstration Reviews
            </h2>
          </div>
          <div className="text-xs text-slate-400 max-w-sm">
            <span className="font-semibold text-slate-300">Demonstration notice:</span> The reviews shown below are fictional sample comments illustrating customer feedback presentation, not verified customer purchases.
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredReviews.map((rev, index) => (
            <div
              key={index}
              className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                {/* Product Tag & Rating */}
                <div className="flex items-center justify-between text-xs text-blue-400 font-medium mb-3">
                  <span className="truncate pr-2 font-semibold">{rev.productName}</span>
                  <div className="flex items-center text-amber-400 shrink-0">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Review Title */}
                <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                  &ldquo;{rev.title}&rdquo;
                </h3>

                {/* Comment */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {rev.comment}
                </p>
              </div>

              {/* Author & Demo status */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                <div>
                  <div className="font-semibold text-slate-200">{rev.userName}</div>
                  <div className="text-slate-400">{rev.role}</div>
                </div>
                <span className="text-slate-400">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
