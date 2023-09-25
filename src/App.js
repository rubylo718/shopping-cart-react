import Navbar from './components/Navbar'
import Products from './components/Products'
import Cart from './components/Cart'
import { CartProvider } from './contexts/CartContext'
import './styles/style.scss'

function App() {
	return (
		<CartProvider>
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
		</CartProvider>
	)
}


export default App
