import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  fetchProducts: [],
};

const productsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.fetchProducts=payload
      state.loading = true;
    },
  },
});

export const {setProducts} = productsReducer.actions

export default productsReducer.reducer;