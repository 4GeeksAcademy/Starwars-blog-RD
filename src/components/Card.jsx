import PropTypes from "prop-types";

export const Peoplecard = () => {
    return (

        <div className="card" style={{ width: "18rem" }}>
            <div className="card" style={{ width: "22rem", flex: "0 0 auto" }} key={index}>
                <div className="card-body">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
                        className="card-img-top"
                        alt={person.name}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{person.name}</h5>
                        <p className="card-text text-start">
                            <strong>Gender:</strong> {person.gender}<br />
                            <strong>Hair Color:</strong> {person.hair_color}<br />
                            <strong>Eye Color:</strong> {person.eye_color}
                        </p>
                        <div className="d-flex justify-content-between mt-3">
                            <button type="button" className="btn btn-outline-primary">Learn more!</button>
                            <button type="button" className="btn btn-outline-warning">
                                <i className="fa-regular fa-heart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
