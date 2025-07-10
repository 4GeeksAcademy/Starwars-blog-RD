import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const CharacterCard = ({ people }) => {
  const { store, dispatch } = useGlobalReducer();

  const isFavorite = store.favorites.some(fav => fav.uid === people.uid);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch({
        type: "delete_favorites",
        payload: { removeuid: people.uid }
      });
    } else {
      dispatch({
        type: "add_favorites",
        payload: {
          name: people.name,
          uid: people.uid,
          url: `/character/${people.uid}`
        }
      });
    }
  };

  return (
    <div className="card m-2" style={{ width: "22rem", flex: "0 0 auto" }}>
      <img
        src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${people.uid}.jpg`}
        style={{ height: "440px" }}
        className="card-img-top"
        alt={people.name}
      />
      <div className="card-body">
        <h5 className="card-title">{people.name}</h5>
        <p className="card-text text-start">
          <strong>Gender:</strong> {people.gender}<br />
          <strong>Hair Color:</strong> {people.hair_color}<br />
          <strong>Eye Color:</strong> {people.eye_color}
        </p>
        <div className="d-flex justify-content-between mt-3">
          <Link to={`/character/${people.uid}`} className="btn btn-outline-primary">
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

export default CharacterCard;


/*<button 
          className="btn btn-outline-primary"
          onClick={() => Navigate("/details/")}
          >Learn more!</button> */