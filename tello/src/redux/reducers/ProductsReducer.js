import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  fetchProducts: [],
  menuProducts: ""
};

const productsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.fetchProducts=payload
      state.loading = true;
    },
    setMenu: (state, { payload }) => {
      state.menuProducts=payload
    },
  },
});

export const {setProducts, setMenu} = productsReducer.actions

export default productsReducer.reducer;