import React from "react";
import Banner from "../../atoms/banner/Banner";
import AboutBanner from "../../../images/about-banner-img.png";
import Collapse from "../../molecules/collapse/Collapse";

const About = () => {
  const aboutContent = [
    {
      title: "Fiabilité",
      text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      title: "Respect",
      text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Sécurité",
      text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <div className="aboutpage">
      <Banner bannerImg={AboutBanner} bannerImgBrightness="0.7" />
      <div className="aboutpage__content">
        {aboutContent.map((content, index) => (
          <Collapse key={index} title={content.title}>
            {content.text}
          </Collapse>
        ))}
      </div>
    </div>
  );
};

export default About;
