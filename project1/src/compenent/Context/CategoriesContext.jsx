import React, { createContext } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

export const ContextCategories = createContext();

export default function CategoriesContext({ children }) {  
  const fetchCategories = async () => {
    const response = await axios.get('https://ecommerce.routemisr.com/api/v1/categories');
    return response.data.data;
  };

  const { data: allCategories, isLoading } = useQuery('Categories', fetchCategories);

  return (
    <ContextCategories.Provider value={{ allCategories,isLoading }}>
      {children} 
    </ContextCategories.Provider>
  );
}
