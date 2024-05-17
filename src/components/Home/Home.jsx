import React, { useEffect, useState } from "react";
import './Home.css';
import { Footer } from '../Footer/Footer';
import { Slider } from "../Slider/Slider";
import { Banner } from "../Banner/Banner";
import { Spinner } from "../Spinner/Spinner";

export const Home = () => {
    const [filter, setFilter] = useState('All')
    const [displayFilter, setDisplayFilyer] = useState(false);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);


    const manageFilter = (newFilter) => {
        setFilter(newFilter);
    }

    const validateSearch = (e) => {
        setSearch(e.target.value);
    }


    const startLoading = (loaded) => {
        if (loaded) {
            setLoading(true);
            setTimeout(() => {
                localStorage.setItem("firstLoad", false);
                setLoading(false);
            }, 15000);
        }
    };

    useEffect(() => {
        const loaded = localStorage.getItem("firstLoad");
        console.log("loaded: ", loaded)
        startLoading(loaded ? JSON.parse(loaded) : true)
    }, {})

    return (
        <> {
            loading ? <><Spinner /></> : (
                <>
                    <Banner />
                    <div className="main-content" id="main-view">
                        <div className="filter-container" >
                            <button onClick={() => { setDisplayFilyer(!displayFilter); setFilter('All'); }}>{displayFilter ? 'Remove filters' : 'Filter by'} </button>
                            {
                                displayFilter ? (
                                    <div className="radio-inputs">
                                        <label className="radio" onClick={() => manageFilter("Name")}>
                                            <input type="radio" name="radio" />
                                            <span className="name">Name</span>
                                        </label>
                                        <label className="radio" onClick={() => manageFilter("Category")}>
                                            <input type="radio" name="radio" />
                                            <span className="name">Category</span>
                                        </label>

                                        <label className="radio" onClick={() => manageFilter("Producer")}>
                                            <input type="radio" name="radio" />
                                            <span className="name">Producer</span>
                                        </label>

                                        <label className="radio" onClick={() => manageFilter("Price")}>
                                            <input type="radio" name="radio" />
                                            <span className="name">Price</span>
                                        </label>
                                    </div>
                                ) : <spam></spam>

                            }

                            {
                                filter !== 'All' ? (
                                    <>
                                        <br />
                                        <input type={filter === "Price" ? "number" : "text"} className="input" placeholder={"Type a " + filter + "..."} onChange={validateSearch} />
                                    </>

                                ) : <span></span>
                            }

                        </div>
                        <Slider category='Clothes' sectionName='Best Sellers in Clothes!' filter={filter} search={search}></Slider>
                        <Slider category='Shoes' sectionName='Comfortable New Shoes!' filter={filter} search={search}></Slider>
                        <Slider category='Technology' sectionName='Tech Inventary!' filter={filter} search={search}></Slider>
                    </div>
                    <Footer />
                </>

            )
        }

        </>
    )
};