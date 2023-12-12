import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Container(){
  return (
    <>
      <Navbar />
        <Outlet />
      <Footer />
    </>
  )
}

export default Container