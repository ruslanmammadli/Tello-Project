import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header/Header'

const Main = () => {
  return (
      <>
      <Header/>

        <div>
            <Outlet/>
        </div>

      <Footer/>
      </>
  )
}

export default Main