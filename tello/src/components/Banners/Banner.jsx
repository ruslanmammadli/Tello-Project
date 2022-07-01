import React from 'react'
import { Link } from 'react-router-dom'

const Banner = (props) => {
  return (
    <div className={props.className}>
        <div className='banner_content'>
            <div className='banner_content_txt'>
                <p>{props.txt}</p>
                <p>{props.txtSecond}</p>
                <p>{props.txtThird}</p>
            </div>
            <div className='banner_content_price'>
                {props.price}
                <span>{props.priceTxt}</span>
            </div>
            <Link to={`/${props.slug}`} className='banner_content_btn'>
                İndi alın
            </Link>
        </div>
        <div className='banner_img'>
            <img src={props.img} alt="product"/>
            {props.imgAdd ? <img src={props.imgAdd} alt="product" /> : "" }
        </div>
    </div>
  )
}

export default Banner