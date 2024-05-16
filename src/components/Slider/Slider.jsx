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

    const availableProducts = () => {
        const productsFiltered =  products.filter(p => p.category === category);
        let data = [];
        switch (filter) {
            case "Name":
                data =  productsFiltered.filter(p => p.name.substring(0, search.length).toLowerCase() === search.toLowerCase())
                return data.length > 0;
            case "Producer":
                data =  productsFiltered.filter(p => p.producer.substring(0, search.length).toLowerCase() === search.toLowerCase())
                return data.length > 0;
            case "Price":
                data = productsFiltered.filter(p => p.price.toString().substring(0, search.length).toLowerCase() === search.toLowerCase())
                return data.length > 0;
        }
    }

    const filterByName = (product) => {
        if (product.name.substring(0, search.length).toLowerCase() === search.toLowerCase()) {
            return true;
        }
        return false;
    }

    const filterByProducer = (product) => {
        if (product.producer.substring(0, search.length).toLowerCase() === search.toLowerCase()) {
            return true;
        }
        return false;
    }

    const filterByPrice = (product) => {
        if (product.price.toString().substring(0, search.length).toLowerCase() === search.toLowerCase()) {
            return true;
        }
        return false;
    }

    return (
        <div className="section-container">
            {

                ((filter === "Category" && category.toLowerCase().includes(search?.toLowerCase())) || (filter === "All") || (filter !== "All" && !search) || (availableProducts())) ? (
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
                                                    ((filter === "All" || filter === "Category") || (filter !== "All" && !search) || (filter === "Name" && filterByName(product)) || (filter === "Producer" && filterByProducer(product)) || (filter === "Price" && filterByPrice(product))) ? (
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