import { configureStore } from "@reduxjs/toolkit";
// import productsSlice from "./productsSlice";
import productsReducer from '../redux/productsSlice';
import CartSlice from "./CartSlice";
import cartReducer, {middleware as cartMiddleware} from './CartSlice'

// const rootReducer = combineReducers({
//     Cart : CartReducer
// })

// const store = configureStore({
//     reducer : rootReducer
// })
const store = configureStore({
    reducer: {
        products : productsReducer,
        cart : CartSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(cartMiddleware)
})

export default store