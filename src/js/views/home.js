import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useContext } from "react"
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Home = () => {

	const { actions, store } = useContext(Context)

	return <div className="content mt-5 pt-5" >

		{/* PERSONAJES */}
		<div className="m-4">
			<div>
				<h2 className="fw-semibold m-2 text-danger">Characters</h2>
			</div>

			<div className="d-flex overflow-auto">
				{store.characters.map(people => <div className="car mb-2 mx-1 border border-dark rounded bg-dark text-white" style={{ width: "16rem", height: "33rem", flex: "none", margin: "10px" }}>
					<img src={`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`} className="card-img-top" alt="..."  style={{ height: "60%"}}/>
					<div className="card-body">
						<h5 className="card-title">{people.name}</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<Link to={"/character/" +people.uid} className="btn btn-warning me-5">Learn more!</Link>
						
							
							<button className="btn btn-light"
										onClick={()=>{
											actions.addFavoriteCharacter(people.name);
										}}
										>
										{
											store.favorites.includes(people.name) ?  <i className="fas fa-check"></i> : <i className="fas fa-heart"></i>
										}
									</button>
						 
					</div>
				</div>
				)}
			</div>
		</div>

		{/* PLANETAS */}

		<div className="m-4">

			<div>
				<h2 className="fw-semibold mt-5 text-danger">Planets</h2>
			</div>

			<div className="d-flex overflow-auto">
				{store.planets.map(planets => <div className="car mb-2 mx-1 border border-dark rounded bg-dark text-white" style={{ width: "17rem", flex: "none", margin: "10px" }}>
					<img src={`https://starwars-visualguide.com/assets/img/planets/${planets.uid}.jpg`} className="card-img-top" alt="..." style={{ height: "60%"}}/>
					<div className="card-body">
						<h5 className="card-title">{planets.name}</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<Link to={"/planet/" +planets.uid} className="btn btn-warning me-5">Learn more!</Link>
						<button className="btn btn-light"
										onClick={()=>{
											actions.addFavoriteCharacter(planets.name);
										}}
										>
										{
											store.favorites.includes(planets.name) ?  <i className="fas fa-check"></i> : <i className="fas fa-heart"></i>
										}
									</button>
					</div>
				</div>
				)}
			</div>

		</div>


		{/* VEHICULOS */}

		<div className="m-4">

			<div>
				<h2 className="fw-semibold mt-5 text-danger">Vehicles</h2>
			</div>

			<div className="d-flex overflow-auto">
				{store.vehicles.map(vehicles => <div className="car mb-2 mx-1 border border-dark rounded bg-dark text-white" style={{ width: "18rem", height: "32rem", flex: "none", margin: "10px" }}>
					<img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`} className="card-img-top" alt="..." style={{ height: "60%"}} />
					<div className="card-body">
						<h5 className="card-title">{vehicles.name}</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<Link to={"/vehicle/" +vehicles.uid} className="btn btn-warning me-5">Learn more!</Link>
						<button className="btn btn-light"
										onClick={()=>{
											actions.addFavoriteCharacter(vehicles.name);
										}}
										>
										{
											store.favorites.includes(vehicles.name) ?  <i className="fas fa-check"></i> : <i className="fas fa-heart"></i>
										}
									</button>
					</div>
				</div>
				)}
			</div>

		</div>


	</div>




}


