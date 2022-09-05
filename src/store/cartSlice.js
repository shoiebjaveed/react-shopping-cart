import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: { visible: false },
    reducers : {
        toggleCart: (state) => {
            state.visible = !state.visible;
        }
    }
})

export const cartAction = cartSlice.actions;
export default cartSlice;