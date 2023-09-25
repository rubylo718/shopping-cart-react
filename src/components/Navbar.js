import React from 'react'

const Navbar = () => {
	return (
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
	)
}

export default Navbar
