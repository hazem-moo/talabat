import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   basket: {
      id: null,
      name: null, 
      dsc: null, 
      rate: null, 
      img: null, 
      price: null 
   }
}
export const basketSlice = createSlice({
   name: 'basket',
   initialState,
   reducers: {
      setBasket: (state, acton) => {
         state.basket = acton.payload
      }
   }
})

export const { setBasket } = basketSlice.actions

export default basketSlice.reducer