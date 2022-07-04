import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BannerSwipe from '../components/Home/Carousel/BannerSwipe'
import ProductSwipe from '../components/Home/Carousel/ProductsSwipe'
import ProductsBanner from '../components/Home/Banners/ProductsBanner'
import Banner from '../components/Home/Banners/Banner'
import Advantage from '../components/Home/Advantage/Advantage'
import PartnersSwipe from '../components/Home/Carousel/PartnersSwipe'

import { setProducts } from '../redux/reducers/productsReducer'
import { images } from '../lib/Image'

import commerce from "../commerce.js"


const Home = () => {

  const {Xiaomi,Watch,Accessory}=images

  const dispatch=useDispatch();
  const allProducts=useSelector((state)=>state.products.fetchProducts)
  const loading=useSelector((state)=>state.products.loading)

  useEffect(()=>{

    const fetchPhone=()=>{
      commerce.products.list({category_slug: ['butun-brendler']})
        .then((products) => {
          dispatch(setProducts(products.data))
        }).catch((error) => {
          console.log(error)
        });
    }

    fetchPhone()
  
  },[dispatch])
  

  const setData = (slug) => {
    const data = []
    allProducts.map(element => {
      element.categories.map(el => {
            if (el.slug === slug) {
                data.push(element)
            }return false
        })
        return true
    })
    return data
  }
  

  return (
    <div className='home'>
      <BannerSwipe/>
      <div className="home_main">
        <ProductSwipe 
        title="Ən çox satılan məhsullar"
        slug={"/butun-telefonlar"}
        loading={loading}
        data={setData("butun-brendler")}
        />
        <ProductSwipe
        title="Yeni gələn məhsullar"
        slug={"/butun-telefonlar"}
        loading={loading}
        data={setData("butun-brendler")}
        />
        <Banner/>
        <ProductSwipe
        title="Yeni gələn aksessuarlar"
        slug={"/aksessuarlar"}
        loading={loading}
        data={setData("aksessuarlar")}
        />
        <div className='pr-banner'>
          <ProductsBanner
          className={"phone-card"}
          title={"Telefon"}
          count={setData("butun-brendler").length}
          slug={"/butun-telefonlar"}
          img={Xiaomi}
          />
          <ProductsBanner
          className={"watch-card"}
          title={"Smart Saat"}
          count={setData("aksessuarlar").length}
          slug={"/aksessuarlar"}
          img={Watch}
          />
          <ProductsBanner
          className={"accessory-card"}
          title={"Aksesuar"}
          count={setData("aksessuarlar").length}
          slug={"/aksessuarlar"}
          img={Accessory}
          />
        </div>
        <Advantage/>
      </div>
      <PartnersSwipe/>
    </div>
  )
}

export default Home