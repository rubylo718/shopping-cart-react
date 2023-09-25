import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

const Cart = () => {
	const [state, dispatch] = useContext(CartContext)
	return (
		<div className="bg-light p-3">
			<table className="table align-middle">
				<tbody>
					{state.cartList.map((item) => {
						return (
							<tr key={item.id}>
								<td>
									<a href="/">x</a>
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
									<select className="form-select"></select>
								</td>
								<td className="text-end">NT$ {item.price * item.quantity}</td>
							</tr>
						)
					})}
				</tbody>
				<tfoot>
					<tr>
						<td colSpan={5} className="text-end">
							總金額 NT$ 400
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	)
}

export default Cart
