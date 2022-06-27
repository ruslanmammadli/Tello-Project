import React from 'react'

import { Swiper,SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import { icons } from '../../lib/Image';
import ProductsSkeleton from '../../components/Skeleton/ProductsSkeleton'

const ProductsSwipe = (props) => {
    const {RightArr}=icons

  return (
    <div className='products'>
        <div className='products_title'>
            <h3>{props.title}</h3>
            <Link to={props.link}>
                <p className='look-all'>
                    Hamısına bax
                    <img src={RightArr} alt="arrow" />
                </p>
            </Link>
        </div>
        <Swiper slidesPerView={"auto"} spaceBetween={40} className="products_swiper">
            {props.loading ? (
                    Array(7)
                    .fill()
                    .map((item, index) => (
                    <SwiperSlide key={index}>
                        <ProductsSkeleton/>
                    </SwiperSlide>
                    ))

                ) : (
            props.data.map((item) => (
                <SwiperSlide key={item.id}>
                    <Link className="link-swiper" to={`${item.name.split(' ')[0].toLowerCase()}/${item.id}`}>
                        <div className='pr-img'>
                            <img src={item.image.url} alt="logo" />
                        </div>
                        <div className='pr-content'>
                            <h4>{item.name} {item.variant_groups.length>1 && item.variant_groups[1].options[0].name}</h4>
                            <p className="product-price">
                            <span>{item.price.formatted_with_symbol}</span>
                            </p>
                        </div>
                    </Link>
                </SwiperSlide>
                )))
            }
        </Swiper>
    </div>
  )
}

export default ProductsSwipe