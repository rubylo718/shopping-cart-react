import React from 'react'

const Cart = () => {
	return (
		<div className="bg-light p-3">
			<table className="table align-middle">
				<tbody>
					<tr>
						<td>
							<a href="/">x</a>
						</td>
						<td>
							<img
								className="table-img"
								src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
								alt=""
							/>
						</td>
						<td>
							草莓鬆餅
							<br />
							<small className="text-muted">NT$ 200</small>
						</td>
						<td>
							<select className="form-select"></select>
						</td>
						<td className="text-end">NT$ 400</td>
					</tr>
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
