import React from 'react'
import { Link } from 'react-router-dom'
import { icons } from '../../lib/Image';

const ProductsBanner = (props) => {

    const {RightArr}=icons

  return (
    <div className={props.className}>
        <div className={`${props.className}_content`}>
            <h4>{props.title}</h4>
            <p>Məhsul sayı:
                <span>{props.count}</span>
            </p>
            <Link to={props.slug}>
                Məhsullara keçid
                <img src={RightArr} alt="arrow" />
            </Link>
        </div>
        <div className={`${props.className}_img`}>
            <img src={props.img} alt="product" />
        </div>
    </div>
  )
}

export default ProductsBanner