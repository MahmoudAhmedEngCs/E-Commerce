import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { createContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';

export const ContextCart = createContext();

let headers = {
  token: localStorage.getItem('token'),
};

export default function CartContextProvider({ children }) {
  const [allCart, setAllCart] = useState([]);


  function addProductToCart(productId) {
    axios
      .post('https://ecommerce.routemisr.com/api/v1/cart', { productId }, { headers })
      .then((response) => {
        console.log(response);
        toast(
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
            <span>Product added to cart!</span>
          </div>
        );
      })
      .catch((error) => {
        console.log(error);
        toast.error('Failed to add product to cart.');
      });
  }

  const fetchCart = async () => {
    const response = await axios.get('https://ecommerce.routemisr.com/api/v1/cart', { headers });
    setAllCart(response.data.data.products); 
    return response.data.data.products;
  };

  
  function handleUpdateCount(id, updateCount) {
    return axios
      .put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, { count: updateCount }, { headers })
      .then((response) => {
      
        setAllCart((prevCart) =>
          prevCart.map((item) =>
            item.product._id === id ? { ...item, count: updateCount } : item
          )
        );
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }
  function deleteItem(id){
    axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, { headers })
    .then((response) => {
      setAllCart(response.data.data.products)
    })
    .catch((error) => {
      
    });
      
  }


  const { data, isError, isLoading } = useQuery('cart', fetchCart, {
    onSuccess: (data) => setAllCart(data),
  });

  return (
    <ContextCart.Provider value={{ addProductToCart, allCart, isError, isLoading, handleUpdateCount, deleteItem }}>
      {children}
    </ContextCart.Provider>
  );
}
