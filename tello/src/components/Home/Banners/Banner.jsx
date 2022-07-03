import React from 'react'
import BannerCard from './BannerCard'

import { images } from '../../../lib/Image'

const Banner = () => {

    const {Iphone13,IphoneAirTag,AirTag}=images;

  return (
    <div className='banner-section'>
        <BannerCard
        className={"banner-wh"}
        txt={"Iphone 13."}
        txtSecond={"Rəngli. Güclü."}
        txtThird={"Əsl sizə lazım olan."}
        price={"2089 AZN"}
        priceTxt={"Faizsiz taksitlə 127 AZN-dən"}
        slug={"apple/prod_gvRjwOqNmB54mN"}
        img={Iphone13}
        />
        <BannerCard
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
  )
}

export default Banner