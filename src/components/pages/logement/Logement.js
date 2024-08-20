import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Logements from "../../../data/logements.json";
import Collapse from "../../molecules/collapse/Collapse";
import Slideshow from "../../molecules/slideshow/Slideshow";
import Tag from "../../atoms/tag/Tag";
import Host from "../../molecules/host/Host";
import Rating from "../../atoms/rating/Rating";


const Logement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [place, setPlace] = useState(null);


  useEffect(() => {
    //checks the data file against the id in the url
    const foundPlace = Logements.find((place) => place.id === id);

    if (foundPlace) {
      setPlace(foundPlace);

    } else {
      navigate("/error");
    }
  }, [id, navigate]);

  if (!place) {
    return null; //prevents rendering of error messages
  }

  return (
    <div className="accommodationpage">
      <Slideshow pictures={place.pictures} title={place.title}/>
      <div className="accommodationpage__main">
      <div className="accommodationpage__basics">
        <h1 className="accommodationpage__title">{place.title}</h1>
        <p className="accommodationpage__location">{place.location}</p>
        <div className="accommodationpage__tags">
          <Tag tags={place.tags}/>
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
        <Collapse title="Description">
          {place.description}
        </Collapse>
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
