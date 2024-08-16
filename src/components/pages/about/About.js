import React from "react";
import Banner from "../../atoms/banner/Banner";
import AboutBanner from "../../../images/about-banner-img.png"

const About = () => {
    return (
      <div className="aboutpage">
        <Banner bannerImg={AboutBanner} bannerImgBrightness="0.4"/>

      </div>
    );
  }

  export default About