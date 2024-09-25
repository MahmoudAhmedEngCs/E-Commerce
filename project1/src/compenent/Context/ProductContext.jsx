import React, { createContext } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

export const ContextProduct = createContext();

export default function ProductProvider({ children }) {
  const fetchProducts = async () => {
    const response = await axios.get('https://ecommerce.routemisr.com/api/v1/products');
    return response.data.data;
  };

  const { data: allProducts, isError, isLoading } = useQuery('products', fetchProducts);

  return (
    <ContextProduct.Provider value={{ allProducts, isLoading, isError }}>
      {children}
    </ContextProduct.Provider>
  );
}
