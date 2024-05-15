import React, { useState } from "react";
import "./Slider.css";
import { Card } from '../Card/Card';
import data from '../../data/products-data';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export const Slider = ({ category, sectionName, filter, search }) => {
    const [products, setProducts] = useState(data);
    console.log("Filter: ", filter)
    console.log("Search: ", search)

    const filterByName = (product) => {
        console.log("product.name.toLowerCase(): ", product.name.toLowerCase())
        console.log("search.toLowerCase(): ", search.toLowerCase())
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            return true;
        }
        return false;
    }

    const filterByProducer = (product) => {
        if (product.producer.toLowerCase().includes(search.toLowerCase())) {
            return true;
        }
        return false;
    }

    const filterByPrice = (product) => {
        if (product.price.toString().toLowerCase().includes(search.toLowerCase())) {
            return true;
        }
        return false;
    }

    return (
        <div className="section-container">
            {

                ((filter !== "Category") || (filter === "Category" && category.toLowerCase().includes(search?.toLowerCase()))) ? (
                    <>
                        <h1 className="section-title">{sectionName}</h1>
                        <div className="s-container">
                            <Swiper
                                breakpoints={{
                                    640: { slidesPerView: 5 },
                                    0: { slidesPerView: 1 }
                                }}

                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                                navigation={true}
                                loopFillGroupWithBlank={true}
                                slidesPerView={3} spaceBetween={40} slidesPerGroup={1} loop={true}>
                                {products.map((product, id) => {
                                    if (product.category === category) {
                                        return (
                                            <span>
                                                {
                                                    ((filter === "All") || (filter !== "All" && !search) || (filter === "Name" && filterByName(product)) || (filter === "Producer" && filterByProducer(product)) || (filter === "Price" && filterByPrice(product))) ? (
                                                        <SwiperSlide className="card" key={id}>
                                                            <Card id={product.id} image={product.image} category={product.category} name={product.name} description={product.description} price={product.price} producer={product.producer}></Card>
                                                        </SwiperSlide>
                                                    ) : null
                                                }
                                            </span>
                                        )
                                    }
                                }
                                )}

                            </Swiper>
                        </div>
                    </>

                ) : null
            }

        </div>

    )
}