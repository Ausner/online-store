import React from "react";
import './Header.css';
import { CartNotification } from "../CartNotification/CartNotification";
import { Link } from 'react-router-dom';


export const Header = () => {
    return (
        <>
            <div id="navlist" >
                <Link to="/">
                    <img width={20} src="../../assets/logo.svg"/> <b>AM Store</b>
                </Link>
                <div className="links">
                    <Link to="/about">About Us</Link>
                    <Link to="/refunds">Refunds</Link>
                    <Link to="/">Home</Link>
                </div>

            </div>
            <CartNotification />
        </>


    )
}