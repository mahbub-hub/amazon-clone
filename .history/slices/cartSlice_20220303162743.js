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
         
        if(index >= 0){
          //the item exists in the cart... remove it..
          newCart.splice(index, 1);  
        }else{
         console.warn(`Cant remove prduct (id: ${state.i})`)   
        }
      },
  }
})

export const {addToCart, removeFromCart } = cartSlice.actions;
//selectors - this is how we pull information from the global store slice
export const selectItems = (state) => state.cart.items;
export default cartSlice.reducer;