import {configureStore} from '@reduxjs/toolkit'

import hamburgerReducer from './reducers/hamburgerReducer'
import ProductsReducer from './reducers/ProductsReducer'

export const store = configureStore({
    reducer:{
        hamburger:hamburgerReducer,
        products:ProductsReducer,
    },
})