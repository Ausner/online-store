import React from "react";
import './Header.css';
import { CartNotification } from "../CartNotification/CartNotification";
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.svg"


export const Header = () => {
    return (
        <>
            <div id="navlist" >
                <Link to="/">
                    <img width={20} src={Logo}/> <b>AM Store</b>
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