// import { createAsyncThunk } from "@reduxjs/toolkit";
// import * as api from "../../api/https";

// export const getProductsAsync = createAsyncThunk(
//   "product/fetchProducts",
//   async (_, { slug }) => {
//     try {
//       const res = await api.getProducts(slug);
//       return res.data;

//     } catch (err) {
//       if (!err.response) {
//         throw err;
//       }

//       return slug(err.response.data);
//     }
//   }
// );