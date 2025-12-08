"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export interface WishlistProduct {
  handle: string;
  name: string;
  price: number;
  originalPrice?: number;
  img: string;
  category: string;
  rating: number;
}

interface WishlistContextType {
  wishlist: WishlistProduct[];
  addToWishlist: (product: WishlistProduct) => void;
  removeFromWishlist: (handle: string) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<WishlistProduct[]>([]);

  const addToWishlist = (product: WishlistProduct) => {
    setWishlist((prev) =>
      prev.find((item) => item.handle === product.handle)
        ? prev
        : [...prev, product]
    );
  };

  const removeFromWishlist = (handle: string) => {
    setWishlist((prev) => prev.filter((item) => item.handle !== handle));
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx)
    throw new Error("useWishlist must be wrapped in a WishlistProvider");
  return ctx;
}
