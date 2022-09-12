import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import notificationSlice from "./notificationSlice";


const Store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        notification: notificationSlice.reducer
    }
})

export default Store