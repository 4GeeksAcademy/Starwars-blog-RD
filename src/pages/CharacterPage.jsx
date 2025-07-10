import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const CharacterPage = () => {
    const [people, setPeople] = useState([]);
    const { uid } = useParams()

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/people/${uid}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.result.properties)
                setPeople({
                    ...data.result.properties,
                    uid: uid  // <- attach the UID manually since you're getting it from the URL
                });
            })

            .catch((err) => console.error("Error fetching people:", err));
    }, []);


    return (
        <div className="container mt-5">
            <div className="">
                <div className="row align-items-center">
                    <div className="col-6">
                        <img
                            src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${people.uid}.jpg`}
                            style={{width:"450px" }}
                            alt={people.name}
                            className="img-fluid rounded"
                        />
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-start align-items-center">
                        <h2 className="text-center">{people.name}</h2>
                        <p className="fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </div><br></br>

                <div style={{ height: "4px", backgroundColor: "red", width: "100%", margin: "1rem 0" }}></div>

                <div className="col-md-12">
                    <div className="card-body">
                        <div className="d-flex flex-wrap justify-content-between">
                            <div><strong><h3>Birth Year</h3></strong> <div className="text-center"><h5>{people.birth_year}</h5></div></div>
                            <div><strong><h3>Gender</h3></strong> <div className="text-center"><h5>{people.gender}</h5></div></div>
                            <div><strong><h3>Height</h3></strong> <div className="text-center"><h5>{people.height}</h5></div></div>
                            <div><strong><h3>Skin Color</h3></strong> <div className="text-center"><h5>{people.skin_color}</h5></div></div>
                            <div><strong><h3>Hair Color</h3></strong> <div className="text-center"><h5>{people.hair_color}</h5></div></div>
                            <div><strong><h3>Eye Color</h3></strong> <div className="text-center"><h5>{people.eye_color}</h5></div></div>
                        </div>
                    </div>
                </div>

                <div style={{ height: "4px", width: "100%", margin: "5rem 0" }}></div>
            </div>
        </div>

    )

}