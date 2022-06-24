import React from 'react'

import Navbar from './Navbar'
import Menu from './Menu'


const Header = () => {
  
  return (
    <header>
        <nav className='navbar'>
            <Navbar/>
            <Menu/>
        </nav>
    </header>
  )
}

export default Header