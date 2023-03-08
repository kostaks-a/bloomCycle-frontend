import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from './Footer';
//import { AppShell, Navbar, Header } from "@mantine/core";

function OutletComponent() {
  return (
      <>
      <Footer />
      <Outlet />
      </>
  )
}

export default OutletComponent