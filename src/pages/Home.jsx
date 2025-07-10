import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import CharacterCard from "./CharacterCard.jsx";
import PlanetCard from "./PlanetCard.jsx";
import VehicleCard from "./VehicleCard.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const [people, setPeople] = useState([]);
  const [planet, setPlanet] = useState([]);
  const [vehicle, setVehicle] = useState([]);

  // Fetch people
  useEffect(() => {
  fetch("https://www.swapi.tech/api/people")
    .then(res => res.json())
    .then(dataObj => {
      let shortChars = dataObj.results;

      let promises = shortChars.map(shortChar =>
        fetch(`https://www.swapi.tech/api/people/${shortChar.uid}`)
          .then(res => res.json())
           .then(detail => ({
            ...detail.result.properties,
            uid: shortChar.uid // optional: include UID for links/images
          }))
      );

      Promise.all(promises).then(data => setPeople(data)); // <- match the correct variable name
    })
    .catch(err => console.log("Error fetching people:", err));
}, []);

  // Fetch planets
  useEffect(() => {
  fetch("https://www.swapi.tech/api/planets")
    .then(res => res.json())
    .then(dataObj => {
      let shortPlanets = dataObj.results;

      let promises = shortPlanets.map(shortPlanet =>
        fetch(`https://www.swapi.tech/api/planets/${shortPlanet.uid}`)
          .then(res => res.json())
          .then(detail => ({
            ...detail.result.properties,
            uid: shortPlanet.uid // optional: include UID for links/images
          }))
      );

      Promise.all(promises).then(data => setPlanet(data)); // <- match the correct variable name
    })
    .catch(err => console.log("Error fetching planets:", err));
}, []);

  // Fetch vehicles
 useEffect(() => {
  fetch("https://www.swapi.tech/api/vehicles")
    .then(res => res.json())
    .then(dataObj => {
      let shortVehicles = dataObj.results;

      let promises = shortVehicles.map(shortVehicle =>
        fetch(`https://www.swapi.tech/api/vehicles/${shortVehicle.uid}`)
          .then(res => res.json())
          .then(detail => ({
            ...detail.result.properties,
            uid: shortVehicle.uid // optional: include UID for links/images
          }))
      );

      Promise.all(promises).then(data => setVehicle(data)); // <- match the correct variable name
    })
    .catch(err => console.log("Error fetching vehicles:", err));
}, []);

  return (
    <div>
      <h2 className="mt-5">Characters</h2>
      <div className="d-flex flex-nowrap overflow-auto gap-3">
        {people.map((people) => (
          <CharacterCard people={people} />
        ))}
      </div>

      <h2 className="mt-5">Planets</h2>
      <div className="d-flex flex-nowrap overflow-auto gap-3">
        {planet.map((planet) => (
          <PlanetCard planet={planet} />
        ))}
      </div>

      <h2 className="mt-5">Vehicles</h2>
      <div className="d-flex flex-nowrap overflow-auto gap-3">
        {vehicle.map((vehicle) => (
          <VehicleCard vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
}
