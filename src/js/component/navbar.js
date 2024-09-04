import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<a className="navbar-brand ms-5" href="/">
				<img src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png" width="60" height="34"/>
			</a>
			<div className="ml-auto">
				<Link>
					<button className="btn btn-primary me-4">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
