import {configureStore} from '@reduxjs/toolkit'

import hamburgerReducer from './reducers/hamburgerReducer'
import productsReducer from './reducers/productsReducer'

export const store = configureStore({
    reducer:{
        hamburger:hamburgerReducer,
        products:productsReducer,
    },
})