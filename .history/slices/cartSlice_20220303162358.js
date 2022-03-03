import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const cartSlice = createSlice({
  name : "cart",
  initialState,
  reducers: {
      addToCart: (state, action) => {
          state.items = [...state.items, action.payload]
      },

      removeFromCart: (state, action) => {
          const index = state.items.findIndex(cartItem => cartItem.id === action.payload.id);
          let newCart = [...state.items];
            
      },
  }
})

export const {addToCart, removeFromCart } = cartSlice.actions;
//selectors - this is how we pull information from the global store slice
export const selectItems = (state) => state.cart.items;
export default cartSlice.reducer;