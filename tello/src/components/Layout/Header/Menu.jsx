import React,{useEffect} from 'react'
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setMenu } from '../../../redux/reducers/productsReducer.js';

import commerce from "../../../commerce.js"


const Menu = () => {

  const dispatch = useDispatch()
  const hamburger = useSelector((state)=> state.hamburger.show)
  const menu= useSelector((state)=>state.products.menuProducts)

  useEffect(() => {
    const fetchMenu=()=>{
      commerce.categories.retrieve('products', { type: 'slug',depth:'3' })
      .then((products) => {
        dispatch(setMenu(products.children))
      }).catch((error) => {
        console.log(error)
      });
    }

    fetchMenu()
  }, [dispatch])


  return (
    <div className={hamburger ? "navbar_catalog show" : "navbar_catalog"}>
        <ul className='categories'>
          {menu && 
            menu.map((product)=>(
              <li 
              className='nav-link'
              key={product.id}>
                <NavLink
                className={(navData)=>(navData.isActive ? "active" : "")}
                to={`/products/${product.slug}`}
                >
                {product.name}
                </NavLink>
                <div className={product.children.length===0 ? "hide" : "sub-link"}>
                  {
                    product.children.map((sub)=>(
                      <ul key={sub.id}>
                        <p>{sub.name}</p>
                        {sub.children.map((item)=>(
                          <li 
                          key={item.id}
                          className="sub2-link"
                          >
                          {item.name}
                          </li>
                        ))}
                      </ul>
                    ))
                  }
                  <div className='black-page'></div>
                </div>
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default Menu