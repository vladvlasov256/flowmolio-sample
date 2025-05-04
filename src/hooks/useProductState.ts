import { useState, useCallback } from 'react';
import { Product, initialProduct } from '../data/initialData';

export const useProductState = () => {
  const [product, setProduct] = useState<Product>(initialProduct);

  const updateField = useCallback((field: keyof Product, value: string | string[]) => {
    setProduct(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  const updateCareInstruction = useCallback((index: number, value: string) => {
    setProduct(prev => {
      const updatedInstructions = [...prev.care_instructions];
      updatedInstructions[index] = value;
      return {
        ...prev,
        care_instructions: updatedInstructions
      };
    });
  }, []);

  const addCareInstruction = useCallback(() => {
    setProduct(prev => ({
      ...prev,
      care_instructions: [...prev.care_instructions, '']
    }));
  }, []);

  const removeCareInstruction = useCallback((index: number) => {
    setProduct(prev => {
      const updatedInstructions = [...prev.care_instructions];
      updatedInstructions.splice(index, 1);
      return {
        ...prev,
        care_instructions: updatedInstructions
      };
    });
  }, []);

  return {
    product,
    updateField,
    updateCareInstruction,
    addCareInstruction,
    removeCareInstruction
  };
};

export default useProductState;