import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import Regester from './compenent/Regester/Regester'
import Login from './compenent/Login/Login';
import { QueryClient, QueryClientProvider } from 'react-query'
import Forgetpassword from './compenent/Forgetpassword/Forgetpassword'
import Home from './compenent/Home/Home';

import Wishlist from './compenent/wishlist/Wishlist';
import Product from './compenent/Product/Product';
import Catrgories from './compenent/catrgories/Catrgories';
import Brand from './compenent/Brand/Brand';
import Erorr from './compenent/Erorr/Erorr'

import Layout from './compenent/Layout/Layout';
import Cart from './compenent/Cart/Cart';
import ContextProvider from './compenent/Context/Context'
import ProtectedRoute from './compenent/protect/ProtectedRoute'
import Protectlogin from './compenent/protect/Protectlogin';
import ProductContextProvider from './compenent/Context/ProductContext'
import CategoriesContext from './compenent/Context/CategoriesContext'
import ProductProvider from './compenent/Context/ProductContext'
import ProductDetails from './compenent/ProductDetails/ProductDetails';
import CartContextProvider from './compenent/Context/CartContext'

const router=  createBrowserRouter([
  {path: '', element:<Layout />, children:[
    { path: "", element:<Protectlogin><Login /></Protectlogin> },
    { path: "/login", element: <Protectlogin><Login /></Protectlogin> },
    { path: "/regester", element: <Protectlogin><Regester /></Protectlogin> },
    { path: "/fpassword", element: <Protectlogin><Forgetpassword /></Protectlogin>},
    { path: "/Home", element:<ProtectedRoute>  <Home /> </ProtectedRoute> },
    { path: "/Wishlist", element: <ProtectedRoute><Wishlist /></ProtectedRoute>},
    { path: "/Product", element: <ProtectedRoute><ProductContextProvider><Product /></ProductContextProvider></ProtectedRoute>},
    { path: "/Catrgories", element: <ProtectedRoute><Catrgories /></ProtectedRoute>},
    { path: "/Brand", element: <ProtectedRoute><Brand /></ProtectedRoute>},
    { path: "/Cart", element: <ProtectedRoute><Cart /></ProtectedRoute>},
    { path: "/ProductDetails/:id", element: <ProtectedRoute><ProductDetails /></ProtectedRoute>},
    { path: "*", element: <Erorr />},
  ]}
 
]
)
const reactqueryconfig= new QueryClient()
QueryClientProvider
function App() {

  return (
    <>
   <ContextProvider>

    <QueryClientProvider client={reactqueryconfig}>
      <CartContextProvider>
     <RouterProvider router={router} />
     </CartContextProvider>
   </QueryClientProvider>
   </ContextProvider>

    </>
  )
}

export default App
