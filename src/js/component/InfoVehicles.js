import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const InfoVehicle = () => {
  const { id } = useParams()

  const [vehicle, setVehicle] = useState()

  const { actions, store } = useContext(Context)

  useEffect(() => {
    fetch("https://www.swapi.tech/api/vehicles/" + id)
      .then(res => res.json())
      .then(data => {
        setVehicle(data.result)
      })
      .catch(err => console.error(err))

  }, []);


  return <div className="content mt-5 pt-5 ">
    <div className="container">
      <div className="card bg-black text-white text-center mb-3 mx-3 mx-md-5 border border-secondary border-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + (id) + ".jpg"} class="img-fluid rounded-start " alt="vehicle" style={{ height: "100%"}}/>

          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title fs-2 text-warning m-3">{vehicle && vehicle.properties.name}</h5>
              <p className="card-text m-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis faucibus nulla sed facilisis. Donec ultricies, elit et malesuada gravida, sapien odio aliquam nibh, viverra venenatis orci elit in odio. Integer non vulputate lorem, id sodales arcu. Maecenas dignissim pretium elementum. Nunc sit amet ligula scelerisque, imperdiet augue sit amet, tempor mi. Vivamus varius mi sed massa euismod sollicitudin. Vestibulum ac massa pulvinar, lobortis eros eget, consequat diam. </p>

              <div className="row mt-5 d-flex justify-content-between">
                <div className="col-3 mb-3">
                  <div className="bg-gradient p-1 rounded h-100 text-center">
                    <h6 className="text-warning">CREATED</h6>
                    <p className="mb-0">{vehicle && vehicle.properties.created}</p></div>
                </div>
                <div className="col-3 mb-3">
                  <div className="bg-gradient p-1 rounded h-100 text-center">
                    <h6 className="text-warning">MODEL</h6>
                    <p className="mb-0">{vehicle && vehicle.properties.model}</p></div>
                </div>
                <div className="col-3 mb-3">
                  <div className="bg-gradient p-1 rounded h-100 text-center">
                    <h6 className="text-warning">CLASS</h6>
                    <p className="mb-0">{vehicle && vehicle.properties.vehicle_class}</p></div>
                </div>
                <div className="col-3 mb-3">
                  <div className="bg-gradient p-1 rounded h-100 text-center">
                    <h6 className="text-warning">MANUFACTURER</h6>
                    <p className="mb-0">{vehicle && vehicle.properties.manufacturer}</p></div>
                </div>
        <div className="card-footer">
            <Link to="/">
            <button className="border border-0 btn btn-secondary bg-gradient w-100" type="button">Go back <i className="fas fa-chevron-right"></i></button>
            </Link>

        </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

}

export default InfoVehicle;