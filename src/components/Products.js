import { useState, useContext } from 'react'
import productsData from '../assets/productsData'
import { CartDispatchContext } from '../contexts/CartContext'

const Products = () => {
	const dispatch = useContext(CartDispatchContext)
	const [addQty, setAddQty] = useState(1)
	return (
		<div className="row row-cols-3 g-3">
			{productsData.map((product) => {
				return (
					<div className="col" key={product.id}>
						<div className="card">
							<img
								src={product.img}
								className="card-img-top"
								alt="{product.title}"
							/>
							<div className="card-body">
								<h6 className="card-title">
									{product.title}
									<span className="float-end">NT$ {product.price}</span>
								</h6>
								<div
									className="btn-group btn-group-sm d-flex align-items-center mb-2"
									role="group"
								>
									<button
										type="button"
										className="btn btn-primary w-25"
										onClick={() => {
											addQty > 1 && setAddQty(addQty - 1)
										}}
									>
										-
									</button>
									<span className="text-center w-50">{addQty}</span>
									<button
										type="button"
										className="btn btn-primary p-1 w-25"
										onClick={() => {
											setAddQty(addQty + 1)
										}}
									>
										+
									</button>
								</div>
								<button
									type="button"
									className="btn btn-outline-primary w-100"
									onClick={() => {
										dispatch({
											type: 'ADD_TO_CART',
											payload: { ...product, quantity: 1 },
										})
									}}
								>
									加入購物車
								</button>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Products
