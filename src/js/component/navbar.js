
import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useContext } from "react"
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar bg-black bg-gradient p-0 fixed-top">
			<Link to="/" className="navbar-brand ms-5" >
				<img src="https://i.pinimg.com/originals/b6/af/5a/b6af5aeff0ee43a4253fc70c167bb6db.png" width="100" height="70" />
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-warning me-5 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu dropdown-menu-end m-2">
						{
							store.favorites.map(
								(item, index) => <li key={index} className="d-flex align-items-center mb-2">
									<p className="dropdown-item mb-0 me-2">
										{item}
									</p>
									<i className="fas fa-trash fa-xs me-1" onClick={() => {
											actions.removeFavorites(item)
										}}></i>
								</li>
							)
						}
					</ul>
				</div>
			</div>
		</nav>
	);
};


