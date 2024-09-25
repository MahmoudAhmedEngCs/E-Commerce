import React from 'react'
import Navbar from '../Nav/Nav'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <Navbar />
    <Outlet />
    
    </>
  )
}
