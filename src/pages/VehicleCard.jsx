import React from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="card" style={{ width: "22rem", flex: "0 0 auto" }}>
      <img
        src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/vehicles/${vehicle.uid}.jpg`}
        className="card-img-top"
        alt={vehicle.name}
      />
      <div className="card-body">
        <h5 className="card-title">{vehicle.name}</h5>
        <p className="card-text text-start">
          <strong>Model:</strong> {vehicle.model}<br />
          <strong>Class:</strong> {vehicle.vehicle_class}<br />
          <strong>Manufacturer:</strong> {vehicle.manufacturer}
        </p>
        <div className="d-flex justify-content-between mt-3">
          <Link to={`/vehicles/${vehicle.uid}`} className="btn btn-outline-primary">
            Learn more!
          </Link>
          <a className="btn btn-outline-warning">
            <i className="fa-regular fa-heart"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;