import React, { useContext } from 'react';
import { ContextCart } from '../Context/CartContext';
import { Hourglass } from 'react-loader-spinner';

export default function Cart() {
  const { allCart, isLoading, isError, handleUpdateCount ,deleteItem } = useContext(ContextCart);

  async function updateCount(id, count) {
    if (count < 1) return; 
    let response = await handleUpdateCount(id, count);
    console.log(response);
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Hourglass
          visible={true}
          height="100"
          width="80"
          ariaLabel="hourglass-loading"
          colors={["#306cce", "#72a1ed"]}
        />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-red-500 text-center">
        There was an error fetching the products. Please try again later.
      </div>
    );
  }

  const totalPrice = allCart.reduce((total, item) => {
    return total + item.price * item.count;
  }, 0);

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
          Shopping Cart
        </h2>
        {allCart && allCart.length > 0 ? (
          allCart.map((item, index) => (
            <div key={index} className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4">
              <div className="col-span-12 lg:col-span-2 img box">
                <img
                  src={item.product.imageCover}
                  alt={item.product.title}
                  className="max-lg:w-full lg:w-[180px] rounded-lg object-cover"
                />
              </div>
              <div className="mt-20 col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                <div className="flex items-center justify-between w-full mb-4">
                  <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
                    {item.product.title}
                  </h5>
                  <button onClick={()=>(deleteItem(item.product._id))} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">DELETE</button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    {/* Quantity update buttons */}
                    <button onClick={() => updateCount(item.product._id, item.count - 1)} className="group rounded-[50px] border border-gray-200 shadow-sm p-2.5">
                      <svg width={18} height={19} viewBox="0 0 18 19" fill="none">
                        <path d="M4.5 9.5H13.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <input
                      type="text"
                      className="border border-gray-200 rounded-full w-10 text-center"
                      value={item.count}
                      readOnly
                    />
                    <button onClick={() => updateCount(item.product._id, item.count + 1)} className="group rounded-[50px] border border-gray-200 shadow-sm p-2.5">
                      <svg width={18} height={19} viewBox="0 0 18 19" fill="none">
                        <path d="M3.75 9.5H14.25M9 14.75V4.25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                  <h6 className="pe-4 text-indigo-600 font-manrope font-bold text-2xl">
                    ${item.price}
                  </h6>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">
            Your cart is empty.
          </div>
        )}
        <div className="flex justify-between items-center lg:px-6 pb-6 border-b border-gray-200">
          <h5 className="text-gray-900 font-manrope font-semibold text-2xl">
            Subtotal
          </h5>
          <h6 className="font-manrope font-bold text-3xl text-indigo-600">
            ${totalPrice.toFixed(2)} 
          </h6>
        </div>
        <button className="rounded-full py-4 px-6 bg-indigo-600 text-white font-semibold text-lg w-full transition-all hover:bg-indigo-700">
          Checkout
        </button>
      </div>
    </section>
  );
}
