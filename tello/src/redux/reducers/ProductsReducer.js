import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  phone: [],
  accessory:[],
};

const productsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    setPhone: (state, { payload }) => {
      state.phone=payload
      state.loading = false;
    },
    setAccessory: (state, { payload }) => {
      state.accessory = payload;
      state.loading = false;
    },
    setFetchStatus: (state,{ payload })=>{
      state.fetchProduct = payload
    },
  },
});

export const {setPhone,setAccessory} = productsReducer.actions

export default productsReducer.reducer;