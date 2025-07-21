import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const VehicleCard = ({ vehicle }) => {
  const { store, dispatch } = useGlobalReducer();
  
    const isFavorite = store.favorites.some(fav => fav.uid === vehicle.uid);
  
    const toggleFavorite = () => {
      if (isFavorite) {
        dispatch({
          type: "delete_favorites",
          payload: { removeuid: vehicle.uid }
        });
      } else {
        dispatch({
          type: "add_favorites",
          payload: {
            name: vehicle.name,
            uid: vehicle.uid,
            url: `/character/${vehicle.uid}`
          }
        });
      }
    };

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
          <button className="btn btn-outline-warning" onClick={toggleFavorite}>
            {isFavorite ? (
              <i className="fa-solid fa-heart"></i>
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;