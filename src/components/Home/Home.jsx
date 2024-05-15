import React, { useState } from "react";
import './Home.css';
import { Footer } from '../Footer/Footer';
import { Slider } from "../Slider/Slider";
import { Banner } from "../Banner/Banner";

export const Home = () => {
    const [filter, setFilter] = useState('All')
    const [displayFilter, setDisplayFilyer] = useState(false);
    const [search, setSearch] = useState("");

    const manageFilter = (newFilter) => {
        setFilter(newFilter);
    }

    const validateSearch = (e) => {
        setSearch(e.target.value);
    }

    return (
        <>
            <Banner/>
            <div className="main-content" id="main-view">
                <div className="filter-container" >
                    <button onClick={() => {setDisplayFilyer(!displayFilter); setFilter('All');}}>{displayFilter ? 'Remove filters' : 'Filter by'} </button>
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
                                <br/>
                                <input type={filter === "Price" ? "number" : "text"} className="input" placeholder={"Type a "+ filter + "..."} onChange={ validateSearch}/>
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
};