import React from 'react'
import NavBar from '../shared/navbar/NavBar'
import Footer from '../shared/footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
   <>
   
   <NavBar />
      <main className="content">
        <Outlet /> 
      </main>
      <Footer />
   
   
   </>
  )
}

export default Layout