import {createSlice} from '@reduxjs/toolkit'

const initialState={
    show: false,
}

export const hamburgerSlice = createSlice({
    name:"hamburger",
    initialState,
    reducers:{
        toggle: (state,action) => {
            state.show = action.payload
          }
    },
})

export const {toggle} = hamburgerSlice.actions;   

export default hamburgerSlice.reducer;