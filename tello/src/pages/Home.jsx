import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BannerSwipe from '../components/Carousel/BannerSwipe'
import ProductSwipe from '../components/Carousel/ProductsSwipe'
import ProductsBanner from '../components/Banners/ProductsBanner'
import Banner from '../components/Banners/Banner'

import { setProducts } from '../redux/reducers/productsReducer'
import { images } from '../lib/Image'

import commerce from "../commerce.js"


const Home = () => {

  const {Iphone13,IphoneAirTag,AirTag,Xiaomi,Watch,Accessory}=images

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
            }else{
              return false
            }
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
        <div className='banner-section'>
          <Banner
          className={"banner-wh"}
          txt={"Iphone 13."}
          txtSecond={"Rəngli. Güclü."}
          txtThird={"Əsl sizə lazım olan."}
          price={"2089 AZN"}
          priceTxt={"Faizsiz taksitlə 127 AZN-dən"}
          slug={"apple/prod_gvRjwOqNmB54mN"}
          img={Iphone13}
          />
          <Banner
          className={"banner-gr"}
          txt={"AirTag"}
          txtSecond={"Əşyalarınızı tapmağın"}
          txtThird={"super asan yolu."}
          price={"79"}
          priceTxt={"AZN-dən*"}
          slug={"apple/prod_BkyN5Y1Nj950b6"}
          img={IphoneAirTag}
          imgAdd={AirTag}
          />
        </div>
        <ProductSwipe
        title="Yeni gələn aksessuarlar"
        slug={"/butun-aksessuarlar"}
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
          slug={"/butun-aksessuarla"}
          img={Watch}
          />
          <ProductsBanner
          className={"accessory-card"}
          title={"Aksesuar"}
          count={setData("aksessuarlar").length}
          slug={"/butun-aksessuarla"}
          img={Accessory}
          />
        </div>
      </div>
    </div>
  )
}

export default Home