import React,{useState,useEffect} from 'react'
import BrandsSkeleton from '../../Skeleton/BrandsSkeleton';
import { Swiper, SwiperSlide } from "swiper/react";
import commerce from '../../../commerce'

import "swiper/css"
import "swiper/css/pagination";
import { Pagination } from "swiper";


const PartnersSwipe = () => {
    const [brands, setBrands] = useState([])
    const [brandsLoading, setBrandsLoading] = useState(false);

    const fetchBrands=()=>{
        commerce.products.list({ category_slug: ["brands-logo"] })
        .then((brands)=>{
            setBrands(brands.data)
            setBrandsLoading(true)
        })
        .catch((error) => {
            console.log(error)
        });
    }

    useEffect(()=>{
        fetchBrands()
    },[])


    const pagination = {
        clickable: true,
      };

  return (
    <div className='partners'>
        <Swiper
        className="partners_card" 
        slidesPerView={6.4} 
        spaceBetween={5} 
        pagination={pagination} 
        modules={[Pagination]}
        >
            {brandsLoading ? (
                brands.map((item,index)=>(
                    <SwiperSlide key={index}>
                        <img src={item.image.url} alt="" />
                    </SwiperSlide>  
                ))
            ) : (
                Array(7)
                .fill()
                .map((item, index)=>(
                    <SwiperSlide key={index}>
                        <BrandsSkeleton/>
                    </SwiperSlide>
                ))
            )
            }
        </Swiper>
    </div>
  )
}

export default PartnersSwipe