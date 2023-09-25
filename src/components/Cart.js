import { useContext } from 'react'
import { CartContext, CartDispatchContext } from '../contexts/CartContext'

const Cart = () => {
	const state = useContext(CartContext)
	const dispatch = useContext(CartDispatchContext)
	return (
		<div className="bg-light p-3">
			<table className="table align-middle">
				<tbody>
					{state.cartList.map((item) => {
						return (
							<tr key={item.id}>
								<td>
									<button
										type="button"
										className="btn btn-sm"
										onClick={() => {
											dispatch({
												type: 'REMOVE_CART_ITEM',
												payload: {
													...item,
												},
											})
										}}
									>
										x
									</button>
								</td>
								<td>
									<img className="table-img" src={item.img} alt={item.title} />
								</td>
								<td>
									{item.title}
									<br />
									<small className="text-muted">NT$ {item.price}</small>
								</td>
								<td>
									<select
										className="form-select"
										value={item.quantity}
										onChange={(e) => {
											e.preventDefault()
											const quantity = parseInt(e.target.value)
											dispatch({
												type: 'CHANGE_CART_QTY',
												payload: {
													...item,
													quantity,
												},
											})
										}}
									>
										{[...Array(20)].map((_, i) => {
											return (
												<option value={i + 1} key={i}>
													{i + 1}
												</option>
											)
										})}
									</select>
								</td>
								<td className="text-end">NT$ {item.price * item.quantity}</td>
							</tr>
						)
					})}
				</tbody>
				<tfoot>
					<tr>
						<td colSpan={5} className="text-end">
							總金額 NT$ {state.total || 0}
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	)
}

export default Cart
