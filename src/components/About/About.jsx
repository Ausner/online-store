import React from "react";
import "./About.css";
import { Footer } from "../Footer/Footer";

export const About = () => {
    return (
        <>
            <div className="about-container animate__animated animate__flipInX">
                <p>
                    <h1>About Us</h1>
                    <br />
                    Welcome to AM Store, your one-stop destination for stylish clothing, trendy shoes, and cutting-edge tech products. At AM Store, we believe that fashion and technology should be accessible, innovative, and tailored to fit your lifestyle.
                    Who We Are

                    Founded with a passion for quality and a commitment to exceptional customer service, AM Store is more than just a retail space; it's a community of trendsetters and tech enthusiasts. Our journey began with a simple idea: to bring together the best in fashion and technology under one roof. Today, we're proud to offer a curated selection of products that reflect our dedication to style, functionality, and innovation.
                    <br />

                    <h1>What We Offer</h1>
                    <br />
                    Clothing: Discover our extensive range of clothing that caters to every style and occasion. From casual wear to sophisticated ensembles, our collection is designed to make you look and feel your best.

                    Shoes: Step up your game with our diverse shoe collection. Whether you're looking for the perfect pair of sneakers, elegant heels, or comfortable loafers, AM Store has something to suit every taste and need.

                    Tech Products: Stay ahead of the curve with our array of tech gadgets and accessories. From the latest smartphones and smartwatches to high-performance laptops and innovative home tech, we bring you the best the tech world has to offer.
                </p>
            </div>
            <Footer />
        </>
    )
}