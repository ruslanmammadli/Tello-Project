import React from 'react'

const AdvantageCard = (props) => {
  return (
    <div className='advantage_card'>
        <img src={props.img} alt="icon" />
        <h5>{props.title}</h5>
        <p>{props.txt}</p>
    </div>
  )
}

export default AdvantageCard