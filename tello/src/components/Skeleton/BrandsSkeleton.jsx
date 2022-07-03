import React from 'react'
import Skeleton from '@mui/material/Skeleton';

const BrandsSkeleton = () => {
  return (
    <div className='brands-sk'>
        <Skeleton className='brand-sk' animation="wave"/>
    </div>
  )
}

export default BrandsSkeleton