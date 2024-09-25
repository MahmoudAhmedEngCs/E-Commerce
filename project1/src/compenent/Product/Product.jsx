import {
  faCheckCircle,
  faFire,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { ContextProduct } from "../Context/ProductContext";
import { Hourglass } from "react-loader-spinner";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import ProductDetails from "./../ProductDetails/ProductDetails";
import { ContextCart } from "../Context/CartContext";

export default function Product({ showSearchBar = true }) {
  const { allProducts, isLoading, isError } = useContext(ContextProduct);
  const [searchQuery, setSearchQuery] = useState("");
  const { addProductToCart, allCart } = useContext(ContextCart);
console.log(allCart);

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
      <Alert color="red">
        There was an error fetching the products. Please try again later.
      </Alert>
    );
  }

  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="md:w-10/12 mt-4 m-auto">
      {showSearchBar && (
        <form
          className="max-w-md mx-auto mb-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              required
            />
          </div>
        </form>
      )}

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="product shadow px-4 transition duration-300 border rounded-md hover:shadow-blue-700"
          >
            <Link to={`/ProductDetails/${product._id}`}>
              <img
                src={product.imageCover || "default-image-url"}
                alt={product.title}
                className=""
              />
            </Link>
            <div className="flex justify-between mb-4">
              <div>
                <p className="text-blue-700 font-normal">
                  {product.category.name}
                </p>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faHeart}
                  className=" duration-100 hover:text-red-700"
                  size="xl"
                />
              </div>
            </div>
            <p className="text-lg font-medium mb-1">
              {product.title.split(" ").slice(0, 2).join(" ")}
            </p>
            <div className="flex justify-between">
              {product.priceAfterDiscount ? (
                <div className="flex flex-wrap">
                  <p className="font-normal me-2 line-through">
                    ${product.price}
                  </p>
                  <p className="text-red-500">
                    <FontAwesomeIcon icon={faFire} className="me-1" />$
                    {product.priceAfterDiscount}
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-blue-700 font-normal">${product.price}</p>
                </div>
              )}
              <div className="flex flex-wrap">
                <FontAwesomeIcon
                  className="self-center"
                  icon={faStar}
                  style={{ color: "#FFD43B" }}
                />
                <p className="self-center ms-1">{product.ratingsAverage}</p>
              </div>
            </div>
            <a
              onClick={() => addProductToCart(product._id)}
              className=" cursor-pointer flex items-center justify-center rounded-md mb-2 bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to cart
            </a>
            <Toaster toastOptions={{ duration: 500 }} />
          </div>
        ))}
      </div>
    </div>
  );
}
