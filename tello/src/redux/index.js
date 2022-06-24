import {configureStore} from '@reduxjs/toolkit'

import hamburgerReducer from './reducers/hamburgerReducer'

export const store = configureStore({
    reducer:{
        hamburger:hamburgerReducer,
    },
})