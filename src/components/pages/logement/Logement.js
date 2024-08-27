import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Logements from "../../../data/logements.json";
import Collapse from "../../molecules/collapse/Collapse";
import Slideshow from "../../molecules/slideshow/Slideshow";
import Tag from "../../atoms/tag/Tag";
import Host from "../../molecules/host/Host";
import Rating from "../../atoms/rating/Rating";

const Logement = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    // Tries to get the data from the props passed through the link in Cards on home page
    const stateData = location.state?.logementData;

    if (stateData && stateData.id === id) {
      setPlace(stateData);
    } else {
      // Failsafe to get the data from Logements in case the link is not used directly (opened in new tab)
      const foundPlace = Logements.find((place) => place.id === id);
      if (foundPlace) {
        setPlace(foundPlace);
      } else {
        //means the place doesn't exist/the id isn't found in either situation
        navigate("/error");
      }
    }
  }, [id, location.state, navigate]);

  if (!place) {
    //safety! Would be optimal to think of a loader of some sort when fetching from the API to account for loading time
    return null;
  }

  return (
    <div className="accommodationpage">
      <Slideshow pictures={place.pictures} title={place.title} />
      <div className="accommodationpage__main">
        <div className="accommodationpage__basics">
          <h1 className="accommodationpage__title">{place.title}</h1>
          <p className="accommodationpage__location">{place.location}</p>
          <div className="accommodationpage__tags">
            <Tag tags={place.tags} />
          </div>
        </div>
        <div className="accommodationpage__user">
          <Host name={place.host.name} picture={place.host.picture} />

          <div className="accommodationpage__rating">
            <Rating rating={place.rating} />
          </div>
        </div>
      </div>

      <div className="accommodationpage__details">
        <Collapse title="Description">{place.description}</Collapse>
        <Collapse title="Équipements">
          <ul>
            {place.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
};

export default Logement;
