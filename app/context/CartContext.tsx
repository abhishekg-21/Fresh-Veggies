"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export interface CartProduct {
  handle: string;
  name: string;
  price: number;
  quantity: number; // 👈 needed for CartPage
  img: string;
  originalPrice: number;
  category: string;
  inStock: boolean;
  maxQuantity: number;
  badge?: string;
}

interface CartContextType {
  cart: CartProduct[];
  addToCart: (item: Omit<CartProduct, "quantity">) => void;
  updateQuantity: (handle: string, change: number) => void; // 👈 add this
  removeFromCart: (handle: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartProduct[]>([]);

  const addToCart = (item: Omit<CartProduct, "quantity">) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.handle === item.handle);
      if (existing) {
        return prev.map((p) =>
          p.handle === item.handle ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (handle: string, change: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.handle === handle) {
          const newQuantity = Math.max(
            1,
            Math.min(item.maxQuantity ?? 99, item.quantity + change)
          );
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeFromCart = (handle: string) => {
    setCart((prev) => prev.filter((item) => item.handle !== handle));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
