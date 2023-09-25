import React, { useContext } from 'react'
import productsData from '../assets/productsData'
import { CartContext } from '../contexts/CartContext';

const Products = () => {
  const [state, dispatch] = useContext(CartContext)
	return (
		<div className="row row-cols-3 g-3">
			{productsData.map((product) => {
				return (
					<div className="col" key={product.id}>
						<div className="card">
							<img src={product.img} className="card-img-top" alt="{product.title}" />
							<div className="card-body">
								<h6 className="card-title">
									{product.title}
									<span className="float-end">NT$ {product.price}</span>
								</h6>
								<button type="button" className="btn btn-outline-primary w-100"
                onClick={() => {
                  dispatch({type: 'ADD_TO_CART', payload: {...product, quantity: 1}})
                }}>
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
