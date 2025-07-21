import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


const PlanetCard = ({ planet }) => {
  const { store, dispatch } = useGlobalReducer();
  
    const isFavorite = store.favorites.some(fav => fav.uid === planet.uid);
  
    const toggleFavorite = () => {
      if (isFavorite) {
        dispatch({
          type: "delete_favorites",
          payload: { removeuid: planet.uid }
        });
      } else {
        dispatch({
          type: "add_favorites",
          payload: {
            name: planet.name,
            uid: planet.uid,
            url: `/character/${planet.uid}`
          }
        });
      }
    };

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
    </div>

  );
};

export default PlanetCard;