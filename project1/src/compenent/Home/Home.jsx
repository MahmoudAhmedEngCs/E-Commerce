import React, { useContext } from 'react';

import Product from '../Product/Product';
import SliderCopm from '../Slider/SliderComp';
import { Hourglass } from 'react-loader-spinner';
import CategoriesContext, { ContextCategories } from '../Context/CategoriesContext';
import ProductProvider, { ContextProduct } from '../Context/ProductContext';
import CartContextProvider from '../Context/CartContext';


export default function Home() {
  return (
    <CategoriesContext>
      <ProductProvider>
        
        <HomeContent />
        
      </ProductProvider>
    </CategoriesContext>
  );
}

function HomeContent() {
  const { isLoading: categoriesLoading } = useContext(ContextCategories);
  const { isLoading: productsLoading } = useContext(ContextProduct);
  
  const isLoading = categoriesLoading || productsLoading;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Hourglass
          visible={true}
          height="100"
          width="80"
          ariaLabel="hourglass-loading"
          colors={['#306cce', '#72a1ed']}
        />
      </div>
    );
  }

  return (
    <>
      <SliderCopm />
      <Product showSearchBar={false} />
    </>
  );
}
