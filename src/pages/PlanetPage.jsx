import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const PlanetPage = () => {
    const [planet, setPlanet] = useState([]);
    const { uid } = useParams();

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/planets/${uid}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.result.properties);
              setPlanet({
                    ...data.result.properties,
                    uid: uid  // <- attach the UID manually since you're getting it from the URL
                });
            })
            .catch((err) => console.error("Error fetching planet:", err));
    }, []);

    return (
        <div className="container mt-5">
            <div className="">
                <div className="row align-items-center">
                    <div className="col-6">
                        <img
                            src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/planets/${planet.uid}.jpg`}
                            alt={planet.name}
                            className="img-fluid rounded"
                        />
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-start align-items-center">
                        <h2 className="text-center">{planet.name}</h2>
                        <p className="fs-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                </div><br></br>

                <div style={{ height: "4px", backgroundColor: "red", width: "100%", margin: "1rem 0" }}></div>

                <div className="col-md-12">
                    <div className="card-body">
                        <div className="d-flex flex-wrap justify-content-between">
                            <div><strong><h4>Climate</h4></strong> <div className="text-center"><h5>{planet.climate}</h5></div></div>
                            <div><strong><h4>Diameter</h4></strong> <div className="text-center"><h5>{planet.diameter}</h5></div></div>
                            <div><strong><h4>Gravity</h4></strong> <div className="text-center"><h5>{planet.gravity}</h5></div></div>
                            <div><strong><h4>Population</h4></strong> <div className="text-center"><h5>{planet.population}</h5></div></div>
                            <div><strong><h4>Terrain</h4></strong> <div className="text-center"><h5>{planet.terrain}</h5></div></div>
                            <div><strong><h4>Orbital Period</h4></strong> <div className="text-center"><h5>{planet.orbital_period}</h5></div></div>
                        </div>
                    </div>
                </div>

                <div style={{ height: "4px", width: "100%", margin: "5rem 0" }}></div>
            </div>
        </div>
    );
};
