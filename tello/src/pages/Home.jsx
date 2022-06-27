import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BannerSwipe from '../components/Carousel/BannerSwipe'
import ProductSwipe from '../components/Carousel/ProductsSwipe'
import { setPhone, setAccessory } from '../redux/reducers/ProductsReducer'

import commerce from "../commerce.js"


const Home = () => {

  const dispatch=useDispatch();
  const phoneArr=useSelector((state)=>state.products.phone)
  const accessoryArr=useSelector((state)=>state.products.accessory)
  const loading=useSelector((state)=>state.products.loading)

  useEffect(()=>{

    const fetchPhone=()=>{
      commerce.products.list({category_slug: ['b-t-n-brendl-r'],})
        .then((products) => {
          dispatch(setPhone(products.data))
        }).catch((error) => {
          console.log(error)
        });
    }

    const fetchAccessory=()=>{
      commerce.products.list({category_slug: ['aksessuarlar'],})
        .then((products) => {
          dispatch(setAccessory(products.data))
        }).catch((error) => {
          console.log(error)
        });
    }
    fetchPhone()
    fetchAccessory()
  
  },[dispatch])


  console.log(phoneArr);
  console.log(loading);


  return (
    <div className='home'>
      <BannerSwipe/>
      <div className="home_main">
        <ProductSwipe
        title="Ən çox satılan məhsullar"
        link={"/butun-telefonlar"}
        loading={loading}
        data={phoneArr}
        />
        <ProductSwipe
        title="Yeni gələn məhsullar"
        link={"/butun-telefonlar"}
        loading={loading}
        data={phoneArr}
        />
        <ProductSwipe
        title="Yeni gələn aksessuarlar"
        link={"/butun-aksessuarlar"}
        loading={loading}
        data={accessoryArr}
        />
      </div>
    </div>
  )
}

export default Home