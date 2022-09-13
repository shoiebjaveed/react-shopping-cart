import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartItems: [], totalQuantity: 0, totalAmount: 0, changed: false }

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload
            const exitsItem = state.cartItems.find((item) => item.id === newItem.id);
            state.totalQuantity = state.totalQuantity + 1
            state.changed = true
            if (!exitsItem) {
                state.cartItems.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                })
            } else {
                exitsItem.quantity = exitsItem.quantity + 1
                exitsItem.totalPrice = exitsItem.totalPrice + newItem.price;
            }
        },
        removeItem: (state, action) => {
            const newItem = action.payload;
            const exitsItem = state.cartItems.find((item) => item.id === newItem)
            state.totalQuantity = state.totalQuantity - 1
            state.changed = true
            if (exitsItem.quantity === 1) {
                state.cartItems = state.cartItems.filter((item) => item.id !== newItem.id)
            } else {
                exitsItem.quantity = exitsItem.quantity - 1
                exitsItem.totalPrice = exitsItem.totalPrice - exitsItem.price
            }
        },
        deleteItem: (state, action) => {
            const id = action.payload
            state.cartItems = state.cartItems.filter((item) => item.id === id)
            state.totalQuantity = 0
            state.changed = true
        },
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.cartItems = action.payload.cartItems;
        },
    }
});



export const cartAction = cartSlice.actions;
export default cartSlice;