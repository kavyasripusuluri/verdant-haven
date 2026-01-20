import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Child, Parent, defaultChild, defaultParent } from '@/data/parentpal';

type AppMode = 'parent' | 'child';

interface AppContextType {
  isLoggedIn: boolean;
  mode: AppMode;
  parent: Parent;
  currentChild: Child;
  setIsLoggedIn: (value: boolean) => void;
  setMode: (mode: AppMode) => void;
  setParent: (parent: Parent) => void;
  setCurrentChild: (child: Child) => void;
  addChild: (child: Child) => void;
  updateChild: (childId: string, updates: Partial<Child>) => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mode, setMode] = useState<AppMode>('parent');
  const [parent, setParent] = useState<Parent>(defaultParent);
  const [currentChild, setCurrentChild] = useState<Child>(defaultChild);

  const addChild = (child: Child) => {
    setParent(prev => ({
      ...prev,
      children: [...prev.children, child]
    }));
  };

  const updateChild = (childId: string, updates: Partial<Child>) => {
    setParent(prev => ({
      ...prev,
      children: prev.children.map(c => 
        c.id === childId ? { ...c, ...updates } : c
      )
    }));
    if (currentChild.id === childId) {
      setCurrentChild(prev => ({ ...prev, ...updates }));
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setMode('parent');
  };

  return (
    <AppContext.Provider value={{
      isLoggedIn,
      mode,
      parent,
      currentChild,
      setIsLoggedIn,
      setMode,
      setParent,
      setCurrentChild,
      addChild,
      updateChild,
      logout
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};