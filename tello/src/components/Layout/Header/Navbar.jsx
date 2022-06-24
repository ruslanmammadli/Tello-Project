import React from 'react'
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../../../redux/reducers/hamburgerReducer';

//* Icons
import {icons} from '../../../lib/Image'


const Navbar = () => {

  const {Profile, Logo, Basket, Favourite,Search} = icons;

  const dispatch = useDispatch()
  const hamburger = useSelector((state)=> state.hamburger.show)
  console.log(hamburger);

  const hamburgerToggle = ()=>{
    if(!hamburger){
        dispatch(toggle(true))
    }else{
        dispatch(toggle(false))
    }
  }
   
  return (
    <div className='navbar_brand'>
        <div
        onClick={hamburgerToggle}
        className='navbar_toggle'>
            <div className={hamburger ? "toggle x-btn" : "toggle"}> 
                <div className={hamburger ? "line left-line" : "line"}></div>
                <div className={hamburger ? "line hide-line" : "line"}></div>
                <div className={hamburger ? "line right-line" : "line"}></div>
            </div>
        </div>
        <div className='logo'>
            <Link to={'/'}>
                <img src={Logo} alt="Logo" />
            </Link>
        </div>
        <form className='search'>
            <img src={Search} alt="Search" />
            <input type="text" placeholder='Axtarış...' />
        </form>
        <div className='profile_content'>
            <Link to={"/profil"} className="user">
                <img src={Profile} alt="" />
            </Link>
            <Link to={"/sevimli"} className="fav">
                <img src={Favourite} alt="" />
            </Link>
            <Link to={"/sebet"} className="cart">
                <img src={Basket} alt="" />
            </Link>
        </div>
    </div>
  )
}

export default Navbar