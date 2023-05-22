import { createSlice } from "@reduxjs/toolkit";
import { products } from '../data/products'

const initialState = {
   items: []
}

export const cardSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      additems: (state, action) => {
         state.items.push(action.payload)
      },
      removeitems: (state, { payload }) => {
         let idx = state.items.indexOf(payload)
         state.items.splice(idx, 1)
      }
   }
})

export let { additems, removeitems } = cardSlice.actions

export const selectWithId = (state, id) => state.cart.items.filter(item => item.id === id )

// export let findItems = (state, id) => state.cart.items.find((el) => el.id === id )

export let selectedItems = state => state.cart.items

export const totalPrice = state => state.cart.items.reduce((total, itme) => total += itme.price, 0)

export default cardSlice.reducer