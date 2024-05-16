import React from "react";
import "./Banner.css";
import BannerImage from "../../assets/banner.png";

export const Banner = () => {


    const scrollToSection = () => {
        const section = document.getElementById('main-view');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <div className="banner-container animate__animated  animate__fadeIn">
            <div className="banner" style={{'background-image': BannerImage} }>
                <div className="banner-text">
                    <h2>WHATEVER YOU WANT IN ONE PLACE!</h2>
                    <h1>SALE</h1>
                    <button id="btn" onClick={scrollToSection}>SHOP NOW!</button>
                </div>
            </div>
        </div>
    )
}