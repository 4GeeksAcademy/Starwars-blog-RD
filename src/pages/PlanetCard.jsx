import React from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";


const PlanetCard = ({ planet }) => {
  return (
    <div>
      <div className="card" style={{ width: "22rem", flex: "0 0 auto" }}>
        <img
          src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/planets/${planet.uid}.jpg`}
          className="card-img-top"
          alt={planet.name}
        />
        <div className="card-body">
          <h5 className="card-title">{planet.name}</h5>
          <p className="card-text text-start">
            <strong>Population:</strong> {planet.population}<br />
            <strong>Climate:</strong> {planet.climate}<br />
            <strong>Terrain:</strong> {planet.terrain}
          </p>
          <div className="d-flex justify-content-between mt-3">
            <Link to={`/planet/${planet.uid}`} className="btn btn-outline-primary">
              Learn more!
            </Link>
            <a className="btn btn-outline-warning">
              <i className="fa-regular fa-heart"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

  );
};

export default PlanetCard;