import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useContext } from "react"
import { Context } from "../store/appContext";

export const Home = () => {

	const { store } = useContext(Context)

	return <div>

		{/* PERSONAJES */}
		<div className="m-3">
			<div>
				<h2 className="fw-semibold m-2 text-danger">Characters</h2>
			</div>

			<div className="d-flex overflow-auto">
				{store.characters.map(people => <div className="car mb-2 mx-1 border border-secondary-subtle rounded" style={{ width: "18rem", flex: "none", margin: "10px" }}>
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

		{/* PLANETAS */}

		<div className="m-3">

			<div>
				<h2 className="fw-semibold mt-5 text-danger">Planets</h2>
			</div>

			<div className="d-flex overflow-auto">
				{store.planets.map(planets => <div className="car mb-2 mx-1 border border-secondary-subtle rounded" style={{ width: "18rem", flex: "none", margin: "10px" }}>
					<img src={`https://starwars-visualguide.com/assets/img/planets/${planets.uid}.jpg`} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{planets.name}</h5>
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


		{/* VEHICULOS */}

		<div className="m-3">

			<div>
				<h2 className="fw-semibold mt-5 text-danger">Vehicles</h2>
			</div>

			<div className="d-flex overflow-auto">
				{store.vehicles.map(vehicles => <div className="car mb-2 mx-1 border border-secondary-subtle rounded" style={{ width: "18rem", flex: "none", margin: "10px" }}>
					<img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{vehicles.name}</h5>
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


	</div>




}


