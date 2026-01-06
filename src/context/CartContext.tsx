import React, { createContext, useContext, useState, useCallback } from 'react';
import { Plant } from '@/data/plants';

export interface CartItem {
  plant: Plant;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (plant: Plant, quantity?: number) => void;
  removeFromCart: (plantId: string) => void;
  updateQuantity: (plantId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((plant: Plant, quantity = 1) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.plant.id === plant.id);
      if (existingItem) {
        return currentItems.map((item) =>
          item.plant.id === plant.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...currentItems, { plant, quantity }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((plantId: string) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.plant.id !== plantId)
    );
  }, []);

  const updateQuantity = useCallback((plantId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(plantId);
      return;
    }
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.plant.id === plantId ? { ...item, quantity } : item
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.plant.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
