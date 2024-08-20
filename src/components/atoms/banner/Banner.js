import React from "react";


const Banner = (props) => {
    let bannerImg = props.bannerImg
    let bannerImgBrightness = props.bannerImgBrightness
    let bannerText = props.bannerText
    const bannerBrightness = {filter: `brightness(${bannerImgBrightness})`}

    return (
        <div className="banner">
            <img className="banner__img" style={bannerBrightness} alt="Photo de paysage" src={bannerImg} />
<p className="banner__text" >{bannerText}</p>
        </div>
    )
}

export default Banner;