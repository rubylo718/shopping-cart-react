import Navbar from './components/Navbar'
import Products from './components/Products'
import Cart from './components/Cart'
import { CartProvider } from './contexts/CartContext'
import './styles/style.scss'
import productsData from './assets/productsData'

function App() {
	return (
		<CartProvider>
			<Navbar />
			<div className="container mt-4">
				<div className="row">
					<div className="col-md-7">
						<div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
							{productsData.map((product) => {
								return (
									<Products
										id={product.id}
										title={product.title}
										imgPath={product.img}
										price={product.price}
										key={product.id}
									/>
								)
							})}
						</div>
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
