import React from 'react'

export default function Allproducts({product}) {
  return (
<div key={product._id} className='product shadow px-4 transition duration-300 border rounded-md hover:shadow-blue-700'>
            <img src={product.imageCover || 'default-image-url'} alt={product.title} className='' />
            <div className='flex justify-between mb-4'>
              <div><p className='text-blue-700 font-normal'>{product.category.name}</p></div>
              <div><FontAwesomeIcon icon={faHeart} size='xl' /></div>
            </div>
            <p className='text-lg font-medium mb-1'>{product.title.split(' ').slice(0,2).join(' ')}</p>
            <div className='flex justify-between'>
              {product.priceAfterDiscount ? 
                <div className='flex flex-wrap'>
                  <p className='font-normal me-2 line-through'>${product.price}</p> 
                  <p className='text-red-500'><FontAwesomeIcon icon={faFire} className='me-1' />${product.priceAfterDiscount}</p>  
                </div> 
                : 
                <div><p className='text-blue-700 font-normal'>${product.price}</p></div> 
              }
              <div className='flex flex-wrap'>
                <FontAwesomeIcon className='self-center' icon={faStar} style={{ color: "#FFD43B" }} />
                <p className='self-center ms-1'>{product.ratingsAverage}</p>
              </div>
            </div>
            <a href="#" className="flex items-center justify-center rounded-md mb-2 bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </a>
          </div>
  )
}
