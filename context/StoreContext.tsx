'use client';

import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { Product, PRODUCTS } from '@/data/products';

export interface CartItem {
  product: Product;
  variant: string;
  quantity: number;
}

export type SortOption = 'popular' | 'newest' | 'price-asc' | 'price-desc';

interface StoreContextType {
  // Cart
  cart: CartItem[];
  addToCart: (product: Product, variant?: string, quantity?: number) => void;
  removeFromCart: (productId: string, variant: string) => void;
  updateQuantity: (productId: string, variant: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartItemCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;

  // Wishlist
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;

  // Compare
  compareList: Product[];
  toggleCompare: (product: Product) => void;
  removeFromCompare: (productId: string) => void;
  clearCompare: () => void;
  isInCompare: (productId: string) => boolean;
  isCompareOpen: boolean;
  setIsCompareOpen: (open: boolean) => void;

  // Filtering & Search
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (catSlug: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  sortBy: SortOption;
  setSortBy: (sort: SortOption) => void;
  onlyInStock: boolean;
  setOnlyInStock: (val: boolean) => void;
  resetFilters: () => void;
  filteredProducts: Product[];
  activeFilterCount: number;

  // Product Detail Modal
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;

  // Checkout & Modals
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  isAccountOpen: boolean;
  setIsAccountOpen: (open: boolean) => void;
  infoModal: 'faq' | 'shipping' | 'contact' | null;
  setInfoModal: (modal: 'faq' | 'shipping' | 'contact' | null) => void;

  // Toast notifications
  toastMessage: string | null;
  showToast: (message: string) => void;

  // Order confirmation state
  completedOrder: {
    orderId: string;
    items: CartItem[];
    total: number;
    date: string;
    customerName: string;
  } | null;
  setCompletedOrder: (order: any) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  // Cart state with safe lazy initializer
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const saved = localStorage.getItem('technest_cart_v1');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Wishlist state with safe lazy initializer
  const [wishlist, setWishlist] = useState<string[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const saved = localStorage.getItem('technest_wishlist_v1');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Comparison state
  const [compareList, setCompareList] = useState<Product[]>([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  // Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1500]);
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const [onlyInStock, setOnlyInStock] = useState(false);

  // Modals state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [infoModal, setInfoModal] = useState<'faq' | 'shipping' | 'contact' | null>(null);

  // Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Order simulation
  const [completedOrder, setCompletedOrder] = useState<{
    orderId: string;
    items: CartItem[];
    total: number;
    date: string;
    customerName: string;
  } | null>(null);

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('technest_cart_v1', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  // Save wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('technest_wishlist_v1', JSON.stringify(wishlist));
    } catch {
      // ignore
    }
  }, [wishlist]);

  // Toast trigger
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3200);
  };

  // Cart actions
  const addToCart = (product: Product, variant?: string, quantity: number = 1) => {
    const chosenVariant = variant || product.variants[0] || 'Standard';
    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.variant === chosenVariant
      );
      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx] = {
          ...next[existingIdx],
          quantity: next[existingIdx].quantity + quantity,
        };
        return next;
      }
      return [...prev, { product, variant: chosenVariant, quantity }];
    });
    showToast(`Added ${product.name} (${chosenVariant}) to cart`);
  };

  const removeFromCart = (productId: string, variant: string) => {
    setCart((prev) => prev.filter((item) => !(item.product.id === productId && item.variant === variant)));
    showToast('Item removed from cart');
  };

  const updateQuantity = (productId: string, variant: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, variant);
      return;
    }
    setCart((prev) =>
      prev.map((item) => {
        if (item.product.id === productId && item.variant === variant) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
    showToast('Shopping cart cleared');
  };

  const cartTotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }, [cart]);

  const cartItemCount = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }, [cart]);

  // Wishlist actions
  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      const target = PRODUCTS.find((p) => p.id === productId);
      const name = target?.name || 'Item';
      if (exists) {
        showToast(`Removed ${name} from wishlist`);
        return prev.filter((id) => id !== productId);
      } else {
        showToast(`Saved ${name} to wishlist`);
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => {
    return wishlist.includes(productId);
  };

  // Compare actions
  const toggleCompare = (product: Product) => {
    setCompareList((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        showToast(`Removed ${product.name} from comparison`);
        return prev.filter((p) => p.id !== product.id);
      }
      if (prev.length >= 3) {
        showToast('You can compare a maximum of 3 products at a time');
        return prev;
      }
      showToast(`Added ${product.name} to side-by-side comparison`);
      setIsCompareOpen(true);
      return [...prev, product];
    });
  };

  const removeFromCompare = (productId: string) => {
    setCompareList((prev) => prev.filter((p) => p.id !== productId));
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  const isInCompare = (productId: string) => {
    return compareList.some((p) => p.id === productId);
  };

  // Filter and Search calculation
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setPriceRange([0, 1500]);
    setSortBy('popular');
    setOnlyInStock(false);
  };

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (searchQuery.trim()) count++;
    if (selectedCategory !== 'all') count++;
    if (priceRange[0] > 0 || priceRange[1] < 1500) count++;
    if (onlyInStock) count++;
    return count;
  }, [searchQuery, selectedCategory, priceRange, onlyInStock]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Search by name and specs
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchName = product.name.toLowerCase().includes(query);
        const matchDesc = product.shortDescription.toLowerCase().includes(query);
        const matchCat = product.category.toLowerCase().includes(query);
        const matchSpecs = product.specsSummary.toLowerCase().includes(query);
        if (!matchName && !matchDesc && !matchCat && !matchSpecs) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'workspace-essentials') {
          if (!product.isWorkspaceEssential) return false;
        } else if (product.categorySlug !== selectedCategory) {
          return false;
        }
      }

      // Price filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }

      // Availability filter
      if (onlyInStock && !product.inStock) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') {
        return a.price - b.price;
      }
      if (sortBy === 'price-desc') {
        return b.price - a.price;
      }
      if (sortBy === 'newest') {
        return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
      }
      // default: popular
      return b.popularityScore - a.popularityScore;
    });
  }, [searchQuery, selectedCategory, priceRange, onlyInStock, sortBy]);

  return (
    <StoreContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartItemCount,
        isCartOpen,
        setIsCartOpen,
        wishlist,
        toggleWishlist,
        isInWishlist,
        isWishlistOpen,
        setIsWishlistOpen,
        compareList,
        toggleCompare,
        removeFromCompare,
        clearCompare,
        isInCompare,
        isCompareOpen,
        setIsCompareOpen,
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
        filteredProducts,
        activeFilterCount,
        selectedProduct,
        setSelectedProduct,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isAccountOpen,
        setIsAccountOpen,
        infoModal,
        setInfoModal,
        toastMessage,
        showToast,
        completedOrder,
        setCompletedOrder,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}
