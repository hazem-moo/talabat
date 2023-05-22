import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cardSlice";
import basketSlice from "./basketSlice";

export default configureStore({
   reducer: {
      cart: cartSlice,
      basket: basketSlice
   }
})