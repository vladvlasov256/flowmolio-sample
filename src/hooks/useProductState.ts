import { useState, useCallback } from 'react';
import { Product, initialProduct } from '../data/initialData';

export const useProductState = () => {
  const [product, setProduct] = useState<Product>(initialProduct);

  const updateField = useCallback((field: keyof Product, value: string) => {
    setProduct(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  return {
    product,
    updateField
  };
};

export default useProductState;