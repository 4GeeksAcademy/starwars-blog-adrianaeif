import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useContext } from "react"
import { Context } from "../store/appContext";

export const Home = () => {

	const { store } = useContext(Context)

	return <div className="text-center mt-5">

		<div className="d-flex flex-wrap justify-content-center">
			{store.characters.map(people => <div className="car mb-4 mx-2 border border-secondary-subtle rounded" style={{ width: "18rem" }}>
				<img src={`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{people.name}</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" className="btn btn-outline-primary me-5">Learn more!</a>
					<a href="#" className="btn btn-outline-warning">
                                    <i className="fas fa-heart"></i>
                                </a>
				</div>
			</div>
			)}
		</div>

	</div>


}


