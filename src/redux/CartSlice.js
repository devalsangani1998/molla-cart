import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  cart: [],
  total: 0
}

const loadCartFromLocalStorage = () => {
  const cartData = localStorage.getItem('cart');
  return cartData ? JSON.parse(cartData) : initialState;
};

// export const GetProducts = createAsyncThunk(
//   "Cart/GetProducts",
//   async () => {
//     try {
//       const response = await axios.get('https://dummyjson.com/products')
//       return response.data
//     } catch (error) {
//       console.log(error)
//       throw error
//     }
//   }
// )

const CartSlice = createSlice({
  // name: 'Cart',
  // initialState: {
  //   productsArray: [],
  //   isLoading: false,
  //   error: false
  // },
  // reducers: {},
  // extraReducers: (builder) => {
  //   builder
  //   .addCase(GetProducts.pending, (state) => {
  //     state.isLoading = true;
  //     state.error = false
  //       })
  //       .addCase(GetProducts.fulfilled, (state, action) => {
  //         state.isLoading = false;
  //         state.error = true
  //     state.GetProducts = action.payload
  //     console.log('action.payload=>>',action.payload)
  //       })
  //       .addCase(GetProducts.rejected, (state, action) => {
  //         state.isLoading = false;
  //         state.error = action.error.message
  //       })
  // }
  name: "Cart",
  initialState:loadCartFromLocalStorage(),
  reducers: {
    addToCart: (state, action) => {
      const obj = {
        ...action.payload,
        quantity: 1,
        subtotal: action.payload.price
      }
      const check = state.cart.some((val) => val.id === action.payload.id)
      if (check === true) {
        const cartIndex = state.cart.findIndex((val) => val.id === action.payload.id)
        state.cart[cartIndex].quantity = state.cart[cartIndex].quantity + 1
        state.cart[cartIndex].subtotal = state.cart[cartIndex].subtotal + action.payload.price
        let newTotal = 0;
        state.cart.map(item => {
          newTotal += item.subtotal
        })
        state.total = newTotal
      }
      else {
        state.cart.push(obj)
        let newTotal = 0;
        state.cart.map(item => {
          newTotal += item.subtotal
        })
        state.total = newTotal
      }
    },
    removeCart: (state, action) => {
      const filter = state.cart.filter((val) => val.id !== action.payload.id)
      state.cart = filter
      let newTotal = 0;
      state.cart.map(item => {
        newTotal += item.subtotal
      })
      state.total = newTotal

    }
  }
});

export const { addToCart, removeCart } = CartSlice.actions

export default CartSlice.reducer

// Subscribe to store changes and update local storage
const updateLocalStorageMiddleware = store => next => action => {
  const result = next(action);
  const { cart } = store.getState();
  localStorage.setItem('cart', JSON.stringify(cart));
  return result;
};

export const middleware = [updateLocalStorageMiddleware];