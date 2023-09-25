import './styles/style.scss'

function App() {
	return (
		<div className="App">
			<nav className="navbar bg-body-tertiary">
				<div className="container-fluid">
					<span href="/" className="navbar-brand">
						等等甜點
					</span>
					<button
						className="btn btn-outline-dark position-relative"
						type="button"
					>
						購物車
						<span className="badge rounded-pill text-bg-danger position-absolute top-0 start-100 translate-middle">
							99
						</span>
					</button>
				</div>
			</nav>

			<div className="container mt-4">
				<div className="row">
					<div className="col-md-7">
						<div className="row row-cols-3 g-3">
							<div className="col">
								<div className="card">
									<img
										src="https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2756&q=80"
										className="card-img-top"
										alt="..."
									/>
									<div className="card-body">
										<h5 className="card-title">
											草莓鬆餅
											<span className="float-end">NT$ 200</span>
										</h5>
										<button
											type="button"
											className="btn btn-outline-primary w-100"
										>
											加入購物車
										</button>
									</div>
								</div>
							</div>
              <div className="col">
								<div className="card">
									<img
										src="https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2756&q=80"
										className="card-img-top"
										alt="..."
									/>
									<div className="card-body">
										<h5 className="card-title">
											草莓鬆餅
											<span className="float-end">NT$ 200</span>
										</h5>
										<button
											type="button"
											className="btn btn-outline-primary w-100"
										>
											加入購物車
										</button>
									</div>
								</div>
							</div>
              <div className="col">
								<div className="card">
									<img
										src="https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2756&q=80"
										className="card-img-top"
										alt="..."
									/>
									<div className="card-body">
										<h5 className="card-title">
											草莓鬆餅
											<span className="float-end">NT$ 200</span>
										</h5>
										<button
											type="button"
											className="btn btn-outline-primary w-100"
										>
											加入購物車
										</button>
									</div>
								</div>
							</div>
              <div className="col">
								<div className="card">
									<img
										src="https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2756&q=80"
										className="card-img-top"
										alt="..."
									/>
									<div className="card-body">
										<h5 className="card-title">
											草莓鬆餅
											<span className="float-end">NT$ 200</span>
										</h5>
										<button
											type="button"
											className="btn btn-outline-primary w-100"
										>
											加入購物車
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-5">
						<div className='bg-light p-3'>
							<table className='table align-middle'>
								<tbody>
									<tr>
										<td>
											<a href="/">x</a>
										</td>
										<td>
											<img src="" alt="" />
										</td>
										<td>草莓鬆餅
											<br />
											<small className='text-muted'>NT$ 200</small>
										</td>
										<td>
											<select className="form-select"></select>
										</td>
										<td className='text-end'>
											NT$ 400
										</td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
										<td colSpan={5} className='text-end'>總金額 NT$ 400</td>
									</tr>
								</tfoot>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
