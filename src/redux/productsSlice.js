import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { productsData } from './productsData';
import axios from 'axios';



const API_URL = 'https://fakestoreapi.com/products';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get(API_URL);
    return response.data;
  });

const initialState = {
    products: productsData
}

const productsSlice = createSlice({
    name: "products",
    // initialState,
    initialState: {
        items: [],
        status: 'idle',
        error: null,
      },
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchProducts.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload;
            console.log('action.payload',action.payload)
          })
          .addCase(fetchProducts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      },
});

export const { } = productsSlice.actions

export default productsSlice.reducer