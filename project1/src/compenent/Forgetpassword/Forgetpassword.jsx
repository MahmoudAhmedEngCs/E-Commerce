import Nav from './../Nav/Nav';
import { Link } from 'react-router-dom';
import Regester from './../Regester/Regester';
import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import { Oval } from 'react-loader-spinner'
import Login from './../Login/Login';

export default function Fprgetpassword() {
  const navegate = useNavigate()
  const [iserror, setiserror] = useState(null)
  const [islogin, setislogin] = useState(null)
  const [isclicked, setisclicked] = useState(false)
  async function regestuser(values) {
    setisclicked(true)
    try {
      const res= await axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', values)
    console.log('res',res.data);
    setislogin("success");
    setisclicked(false)
 setTimeout(() => {
  setislogin(null)
  navegate('/login')
 }, 2000);
    } catch (error) {
      console.log("error",error);
      
      setiserror(error.response.data.message)
      setisclicked(false)
      setTimeout(() => {
        setiserror(null)
       }, 2000);
    }
    
  }
  const myformik = useFormik({
    initialValues: {
     
      email: "",
    },
    onSubmit: regestuser,
    validationSchema: yup.object().shape({
      email:yup.string().email("invalid email").required("email is requierd"),
  })
  });
  return (
    <>
    
    <section className="bg-gray-50 dark:bg-gray-900">
      
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          
          Forgot your password?
        </h1>
        {iserror? <div class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="sr-only">Info</span>
  <div>
    {iserror}
  </div>
</div>: ''}
{islogin? <div class="text-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
 {islogin}
</div>: ''}
        <form className="space-y-4 md:space-y-6" action="#" onSubmit={myformik.handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter your email
            </label>
            <input
               onChange={myformik.handleChange}
               onBlur={myformik.handleChange}
               value={myformik.values.email}
               name="email"
               id="email"
               type='text'
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required=""
            />
              {myformik.errors.email && myformik.touched.email ?<div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 {myformik.errors.email}
</div>: ''}
          </div>
     
        
          {!isclicked? <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Verify
          </button> :
          <button
          type="submit"
          className="w-full flex justify-center items-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          <Oval
            visible={true}
            height="20"
            width="20"
            color="#4fa94d"
            ariaLabel="oval-loading"
          />
        </button>}
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            try to login?{" "}
            <Link
              to={"/login"}
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              login
            </Link>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

