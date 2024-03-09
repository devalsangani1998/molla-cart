import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import CartSlice from "./CartSlice";

const store = configureStore({
    reducer: {
        products : productsSlice,
        cart : CartSlice
    }
})

export default store