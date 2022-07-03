import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import { icons } from '../../lib/Image';

const Footer = () => {

  const {Logo,Location,Email,Phone,Instagram,Facebook,Youtube,Twitter}=icons

  const menu= useSelector((state)=>state.products.menuProducts)

  return (
    <div className='footer'>
      <div className='first-sec'>
        <div className='soc-link'>
          <img src={Logo} alt="Logo" />
          <div className='soc-link_icons'>
            <img src={Instagram} alt="İnstagram" />
            <img src={Facebook} alt="Facebook" />
            <img src={Youtube} alt="Youtube" />
            <img src={Twitter} alt="Twitter" />
          </div>
        </div>
        <ul>
          <p>Menu</p>
          {menu && 
            menu.map((item)=>(
              <Link 
              key={item.id}
              to={`/products/${item.slug}`}>
                <li>{item.name}</li>
              </Link>
            ))
          }
        </ul>
        <ul>
          <p>Kömək</p>
          <Link to='/sual-cavab'>
            <li>Tez-tez soruşulan suallar</li>
          </Link>
          <li>Çatdırılma xidməti</li>
          <li>Geri qaytarılma şərtləri</li>
        </ul>
        <ul>
          <p>Əlaqə</p>
          <li>
              <img src={Location} alt="location"/>
              M. K. Ataturk avenue 89, Baku, Azerbaijan</li>
          <li>
              <img src={Email} alt="email"/>
              example@gmail.com</li>
          <li>
              <img src={Phone} alt="phone"/>
              *2108</li>
        </ul>
      </div>
      <div className='second-sec'>
        <p className="copyright">ProjectX 2021. Bütün hüquqlar qorunur.</p>
        <div className="rules">
            <p>Qaydalar və şərtlər</p>
            <p>Məxfilik siyasəti</p>
        </div>
      </div>
    </div>
  )
}

export default Footer