import React, { useState } from "react";
import Nav from "./../Nav/Nav";
import { Formik, useFormik } from "formik";
import * as yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Login from './../Login/Login';
import { Oval, TailSpin } from 'react-loader-spinner'
export default function Regester() {
  const navegate = useNavigate()
  const [iserror, setiserror] = useState(null)
  const [islogin, setislogin] = useState(null)
  const [isclicked, setisclicked] = useState(false)
  async function regestuser(values) {
    setisclicked(true)
    try {
      const res= await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)
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
      name: "",
      phone: "",
      password: "",
      email: "",
      rePassword: "",
    },
    onSubmit: regestuser,
    validationSchema: yup.object().shape({
      name:yup.string().min(3,"minmum must be a more than 3 characters").required("name is requierd"),
      email:yup.string().email("invalid email").required("email is requierd"),
     password:yup.string().required("password is requierd").min(6,"minmum must be a more than 6 characters"),
     rePassword:yup.string().required("rePassword is requierd").oneOf([yup.ref("password"),yup.ref('password'),"rePassword must be the same as password"]),
     phone:yup.string().required("phone number is requierd").matches(/^01[0125][0-9]{8}$/,"must be egyptian nummber")
  })
  });
  
  
  return (
    <>
      
      <div className="max-w-4xl mx-auto font-[sans-serif] p-6 mt-12">
        <form onSubmit={myformik.handleSubmit}>
          {iserror? <div class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="sr-only">Info</span>
  <div>
    {iserror}
  </div>
</div>: ''}
          {islogin? <div class="text-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
 {islogin}
</div>: ''}
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                First Name
              </label>
              <input
                onChange={myformik.handleChange}
                value={myformik.values.name}
                onBlur={myformik.handleBlur}
                id="name"
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter name"
              />
              {myformik.errors.name && myformik.touched.name ?<div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 {myformik.errors.name}
</div>: ''}
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Email Id
              </label>
              <input
                onChange={myformik.handleChange}
                onBlur={myformik.handleChange}
                value={myformik.values.email}
                name="email"
                id="email"
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter email"
              />
              {myformik.errors.email && myformik.touched.email ?<div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 {myformik.errors.email}
</div>: ''}
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Mobile No.
              </label>
              <input
                onChange={myformik.handleChange}
                value={myformik.values.phone}
                onBlur={myformik.handleBlur}
                name="phone"
                id="phone"
                type="string"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter mobile number"
              />
              {myformik.errors.phone && myformik.touched.phone ?<div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 {myformik.errors.phone}</div>: ''}
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Password
              </label>
              <input
                onChange={myformik.handleChange}
                value={myformik.values.password}
                name="password"
                id="password"
                onBlur={myformik.handleBlur}
                type="password"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter password"
              />
              {myformik.errors.password && myformik.touched.password ?<div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 {myformik.errors.password}
</div>: ''}
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Confirm Password
              </label>
              <input
                onChange={myformik.handleChange}
                value={myformik.values.rePassword}
                onBlur={myformik.handleBlur}
                name="rePassword"
                id="rePassword"
                type="password"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter confirm password"
                
              />
              {myformik.errors.rePassword && myformik.touched.rePassword ?<div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 {myformik.errors.rePassword}
</div>: ''}
            </div>
          </div>
          <div className="!mt-12">
           {!isclicked ?  <button
              type="submit"
              className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              Sign up
            </button>:
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
            
          </div>
        </form>
        <p className=" pt-9 text-sm text-center  font-light text-gray-500 dark:text-gray-400">
            Alredy have account?{" "}
            <Link
              to={"/Login"}
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Log in
            </Link>
          </p>
      </div>
    
    </>
  );
}
