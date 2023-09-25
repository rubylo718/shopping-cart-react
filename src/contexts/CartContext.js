import { createContext, useReducer } from 'react'

export const CartContext = createContext(null)
export const CartDispatchContext = createContext(null)

export function CartProvider({ children }) {
	const [state, dispatch] = useReducer(cartReducer, initialCart)
	return (
		<CartContext.Provider value={state}>
			<CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
		</CartContext.Provider>
	)
}

const initialCart = { cartList: [], }

function calTotalPrice(cartList) {
	return cartList
		.map((item) => item.quantity * item.price)
		.reduce((a, b) => a + b, 0)
}

function cartReducer (state, action) {
	const cartList = [...state.cartList]
	const index = cartList.findIndex((item) => item.id === action.payload.id)
	switch (action.type) {
		case 'ADD_TO_CART':
			if (index === -1) {
				cartList.push(action.payload)
			} else {
				cartList[index].quantity++
			}
			return {
				...state,
				cartList,
				total: calTotalPrice(cartList),
			}
		case 'CHANGE_CART_QTY':
			cartList[index].quantity = action.payload.quantity
			return { ...state, cartList, total: calTotalPrice(cartList) }
		case 'REMOVE_CART_ITEM':
			cartList.splice(index, 1)
			return { ...state, cartList, total: calTotalPrice(cartList) }
		default:
			return state
	}
}
