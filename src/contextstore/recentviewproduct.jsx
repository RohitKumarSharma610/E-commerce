import React, { createContext, useState, useEffect } from 'react';

// 1️⃣ Create context
export const Recentviewdata = createContext(null);

// 2️⃣ Provider
export const Recentviewproduct = ({ children }) => {
  const [recent, setRecent] = useState([]);

  // 3️⃣ Load recent products from localStorage on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('recentProducts')) || [];
    setRecent(stored);
  }, []);

  // 4️⃣ Save recent products to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('recentProducts', JSON.stringify(recent));
  }, [recent]);

  // 5️⃣ Function to add a product to recent view
  const addToRecent = (product) => {
    setRecent(prev => {
      // Remove all duplicates of the same product
      let filtered = prev.filter(item => item.id !== product.id);

      // Add new product at start
      filtered = [product, ...filtered];

      // Keep max 25 items in storage
      if (filtered.length > 25) filtered = filtered.slice(0, 25);

      return filtered;
    });
  };

  // 6️⃣ Helper to show only 7 latest products in UI
  const recentForUI = recent.slice(0, 5);
  console.log(recent);
  

  return (
    <Recentviewdata.Provider value={{ recent, addToRecent, recentForUI }}>
      {children}
    </Recentviewdata.Provider>
  );
};
