import { createSlice } from '@reduxjs/toolkit'
import { productsData } from './productsData';

const initialState = {
    products: productsData
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {}
});

export const { } = productsSlice.actions

export default productsSlice.reducer