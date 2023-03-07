import React from 'react'
//import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
//import { AppShell, Navbar, Header } from "@mantine/core";

function OutletComponent() {
  return (
      <>

      <Outlet />
      </>
  )
}

export default OutletComponent