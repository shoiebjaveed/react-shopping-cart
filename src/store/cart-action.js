import { cartAction } from "./cartSlice";
import { notificationActions } from "./notificationSlice";

export const fetchCartData = () => {
    return async (dispatch) => {

        const fetchData = async () => {
            const response = await fetch('https://react-cart-3f398-default-rtdb.firebaseio.com/cart.json');
            if (!response.ok) {
                throw new Error('failed to fetch')
            }
            const data = await response.json();
            return data
        }
        try {
            const cartData = await fetchData()
            dispatch(cartAction.replaceCart({
                cartItems: cartData.cartItems || [],
                totalQuantity: cartData.totalQuantity
            }))
        } catch (error) {
            dispatch(notificationActions.addNotification({
                status: 'error',
                title: 'Error!',
                message: 'failed to get cart data'
            }))
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(notificationActions.addNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'sending cart data!'
        }))

        const sendRequest = async () => {
            const response = await fetch('https://react-cart-3f398-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify({
                    cartItems: cart.cartItems,
                    totalQuantity: cart.totalQuantity
                })
            });

            if (!response.ok) {
                throw new Error('Failed...')
            }
        }
        try {
            await sendRequest()
            dispatch(notificationActions.addNotification({
                status: 'success',
                title: 'Success..',
                message: 'sent cart data sucessfully!'
            }))
        } catch (error) {
            dispatch(notificationActions.addNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed'
            }))
        }
    }
}