import React from "react";
import Banner from "../atoms/Banner";
import HomeBanner from "../../images/home-banner-img.png";
import Card from "../atoms/Card"


const Home = () => {
 const homeBannerText = "Chez vous, partout et ailleurs";

  return (
    <div className="homepage">
      <Banner bannerImg={HomeBanner} bannerText={homeBannerText} />
      <div className="accommodation">
        <Card />
      </div>
    </div>
  );
};

export default Home;
