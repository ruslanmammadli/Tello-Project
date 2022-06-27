// import { createAsyncThunk } from "@reduxjs/toolkit";
// import * as api from "../../api/https";

// export const getProductsAsync = createAsyncThunk(
//   "product/fetchProducts",
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await api.getProducts();
//       return res.data;

//     } catch (err) {
//       if (!err.response) {
//         throw err;
//       }

//       return rejectWithValue(err.response.data);
//     }
//   }
// );