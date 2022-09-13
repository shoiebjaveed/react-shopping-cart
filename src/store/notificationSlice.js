import { createSlice } from "@reduxjs/toolkit";


const notificationSlice = createSlice({
    name: 'notification',
    initialState: { notification: null, visible: false  },
    reducers: {
        addNotification: (state, action) => {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            }
        },
        toggleCart: (state, action) => {
            state.visible = !state.visible
        },

    }
})

export const notificationActions = notificationSlice.actions;

export default notificationSlice;