'use client';

import React from 'react';
import { useStore } from '@/context/StoreContext';
import { CheckCircle2, Info } from 'lucide-react';

export default function Toast() {
  const { toastMessage } = useStore();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-200">
      <div className="flex items-center gap-2.5 px-4 py-3 bg-[#070B18]/95 border border-blue-500/50 shadow-2xl shadow-blue-950/60 rounded-xl text-white text-xs font-medium backdrop-blur-md">
        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
        <span>{toastMessage}</span>
      </div>
    </div>
  );
}
