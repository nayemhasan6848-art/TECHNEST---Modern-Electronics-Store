'use client';

import React from 'react';
import { StoreProvider } from '@/context/StoreContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import ProductCatalog from '@/components/ProductCatalog';
import WorkspacePromo from '@/components/WorkspacePromo';
import WhyTechnest from '@/components/WhyTechnest';
import CustomerReviews from '@/components/CustomerReviews';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import ProductDetailModal from '@/components/ProductDetailModal';
import CartDrawer from '@/components/CartDrawer';
import WishlistDrawer from '@/components/WishlistDrawer';
import ComparisonModal from '@/components/ComparisonModal';
import CheckoutModal from '@/components/CheckoutModal';
import InfoModals from '@/components/InfoModals';
import Toast from '@/components/Toast';

export default function Home() {
  return (
    <StoreProvider>
      <div className="min-h-screen flex flex-col bg-[#0B132B] text-slate-100">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. Category Navigation */}
          <CategoryGrid />

          {/* 3. Featured Products & Filters */}
          <ProductCatalog />

          {/* 4. Featured Technology Section: "Your Workspace, Upgraded." */}
          <WorkspacePromo />

          {/* 5. Why Shop With TECHNEST? */}
          <WhyTechnest />

          {/* 6. Sample Customer Reviews */}
          <CustomerReviews />

          {/* 7. Newsletter Section */}
          <Newsletter />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Modals and Drawers */}
        <ProductDetailModal />
        <CartDrawer />
        <WishlistDrawer />
        <ComparisonModal />
        <CheckoutModal />
        <InfoModals />
        <Toast />
      </div>
    </StoreProvider>
  );
}
