import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from './Footer';


function OutletComponent() {
  return (
      <>
      <Outlet />
      <Footer />
      </>
  )
}

export default OutletComponent