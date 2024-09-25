import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './nav.css';
import Login from './../Login/Login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faRightFromBracket,  } from '@fortawesome/free-solid-svg-icons'
import Home from './../Home/Home';
import Cart from './../Cart/Cart';
import Wishlist from './../wishlist/Wishlist';
import Product from './../Product/Product';
import Catrgories from './../catrgories/Catrgories';
import Brand from './../Brand/Brand';

import Regester from './../Regester/Regester';
import { Context } from '../Context/Context';
export default function Navbar() {
  const {token,setToken}= useContext(Context)
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-white border-gray-200 dark:bg-gray-900 sticky">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/000/538/499/small/shopping_cart-01.jpg" className="h-16" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Frech Cart</span>
        </Link>
        <button 
          onClick={toggleMenu} 
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`${isOpen ? 'nav-open' : 'nav-closed'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
         
          {token? <li>
              <NavLink to={"/Home"} className=" block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</NavLink>
            </li>: null}
           
            
            {token?<li>
              <NavLink to={"/Product"} className=" block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Product</NavLink>
            </li>:null}
            {token?<li>
              <NavLink to={"/Catrgories"} className=" block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Catrgories</NavLink>
            </li>:null}
            {token?<li>
              <NavLink to={"/Cart"} className=" block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><FontAwesomeIcon icon={faCartShopping} />Cart</NavLink>
            </li>:null}
            
            {token==null?<li>
               <NavLink to={"/Login"} className=" block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</NavLink>
            </li>:null}
            {token?<li className='self-end'>
              <NavLink to={"Login"} onClick={()=>{localStorage.clear('token');setToken(null);}} className="  block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> <FontAwesomeIcon icon={faRightFromBracket} /></NavLink>
            </li>:null }
           
          {token==null?   <li>
              <NavLink to={"/Regester"} className=" block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Singup</NavLink>
            </li>:null}
         
            
          </ul>
        </div>
      </div>
    </nav>
  );
}
