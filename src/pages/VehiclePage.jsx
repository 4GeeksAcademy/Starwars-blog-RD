import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const VehiclePage = () => {
    const [vehicle, setVehicle] = useState([]);
    const { uid } = useParams();

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.result.properties);
                setVehicle({
                    ...data.result.properties,
                    uid: uid  // <- attach the UID manually since you're getting it from the URL
                });
            })
            .catch((err) => console.error("Error fetching vehicle:", err));
    }, []);

    return (
        <div className="container mt-5">
            <div className="">
                <div className="row align-items-center">
                    <div className="col-6">
                        <img
                            src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/vehicles/${vehicle.uid}.jpg`}
                            alt={vehicle.name}
                            className="img-fluid rounded"
                        />
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-start align-items-center">
                        <h2 className="text-center">{vehicle.name}</h2>
                        <p className="fs-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div><br />

                <div style={{ height: "4px", backgroundColor: "red", width: "100%", margin: "1rem 0" }}></div>

                <div className="col-md-12">
                    <div className="card-body">
                        <div className="d-flex flex-wrap justify-content-between">
                            <div><strong><h4>Model</h4></strong> <div className="text-center"><h5>{vehicle.model}</h5></div></div>
                            <div><strong><h4>Manufacturer</h4></strong> <div className="text-center"><h5>{vehicle.manufacturer}</h5></div></div>
                            <div><strong><h4>Cost in Credits</h4></strong> <div className="text-center"><h5>{vehicle.cost_in_credits}</h5></div></div>
                            
                            <div><strong><h4>Crew</h4></strong> <div className="text-center"><h5>{vehicle.crew}</h5></div></div>
                            <div><strong><h4>Vehicle Class</h4></strong> <div className="text-center"><h5>{vehicle.vehicle_class}</h5></div></div>
                        </div>
                    </div>
                </div>

                <div style={{ height: "4px", width: "100%", margin: "5rem 0" }}></div>
            </div>
        </div>
    );
};
