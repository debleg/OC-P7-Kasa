import React from "react";


const Banner = (props) => {
    let bannerImg = props.bannerImg
    let bannerText = props.bannerText

    return (
        <div className="banner">
            
            <img className="banner__img" alt="Photo de paysage" src={bannerImg} />
<p className="banner__text">{bannerText}</p>
        </div>
    )
}

export default Banner;