import { useReducer } from 'react'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Cart from './components/Cart'
import { CartContext } from './contexts/CartContext'
import './styles/style.scss'

function App() {
	const cartReducer = useReducer((state, action) => {
		const cartList = [...state.cartList]
		const index = cartList.findIndex(item => item.id === action.payload.id)
		switch (action.type) {
			case 'ADD_TO_CART':
				if (index === -1) {
					cartList.push(action.payload)
				} else {
					cartList[index].quantity++
				}
				return {
					...state,
					cartList
				}
			case 'CHANGE_CART_QTY':
				cartList[index].quantity = action.payload.quantity
				 return {...state, cartList}
			default: 
			  return state
		}
	}, {cartList: [],})
	return (
		<CartContext.Provider value={cartReducer}>
			<Navbar />
			<div className="container mt-4">
				<div className="row">
					<div className="col-md-7">
						<Products />
					</div>
					<div className="col-md-5">
						<Cart />
					</div>
				</div>
			</div>
		</CartContext.Provider>
	)
}

export default App
