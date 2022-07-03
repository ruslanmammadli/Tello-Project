import React from 'react'
import AdvantageCard from './AdvantageCard'

import { images } from '../../../lib/Image'

const Advantage = () => {

  const {Box,Card,Medal} =images;

  return (
    <div className='advantage'>
      <AdvantageCard
      title={"Çatdırılma"}
      img={Box}
      txt={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
      />
      <AdvantageCard
      title={"Kredit"}
      img={Card}
      txt={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
      />
      <AdvantageCard
      title={"Zəmanət"}
      img={Medal}
      txt={"Lorem ipsum dolor sit amet, consectetur adipiscing elit "}
      />
    </div>
  )
}

export default Advantage