import { useState, useContext } from 'react'
import { CartDispatchContext } from '../contexts/CartContext'

const Products = ({ id, title, imgPath, price }) => {
	const dispatch = useContext(CartDispatchContext)
	const [addQty, setAddQty] = useState(1)
	return (
		<div className="col">
			<div className="card">
				<img src={imgPath} className="card-img-top" alt={title} />
				<div className="card-body">
					<div className='d-flex justify-content-between align-items-center flex-column flex-xl-row mb-xl-2'>
						<h6 className="card-title mb-0">{title}</h6>
						<span className="float-end">NT$ {price}</span>
					</div>
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
								payload: { id, title, img: imgPath, price, quantity: addQty },
							})
						}}
					>
						加入購物車
					</button>
				</div>
			</div>
		</div>
	)
}

export default Products
