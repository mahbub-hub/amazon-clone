import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items = [],
}

export const cartSlice = createSlice({
  name : "Cart",
  initialState,
  reducers: {
      addToCart: (state, action) => {},
      removeFromCart: (state, action) => {},
  }

})

export const {addToCart, removeFromCart } = cartSlice.