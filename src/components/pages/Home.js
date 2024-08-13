import React from "react";
import Banner from "../atoms/Banner"
import HomeBanner from "../../images/home-banner-img.png"

const homeBannerText = "Chez vous, partout et ailleurs"
const Home = () => {
    return (
        <div className="homepage">
        <Banner bannerImg = {HomeBanner} bannerText = {homeBannerText}/>
        </div>
    )
}

export default Home;