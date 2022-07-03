import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';


const SkeletonPhone = ()=>{
    return(
        <div className="products-sk">
            <Skeleton 
            className="sk-img"
            variant="rectangular"
             />
            <Skeleton 
            className="sk-title" 
            animation="wave" />
            <Skeleton 
            className="sk-text" 
            animation="wave" />
        </div>
    )
}

export default SkeletonPhone