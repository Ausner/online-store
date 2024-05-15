import React, { useState, useEffect } from "react";
import "./CartNotification.css";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartNotification = () => {
    const [cart, setCart] = useState([]);

    const displayNotification = () => {
        toast("You don't have any items added in the cart!");
    }

    setInterval(() => {
        const data = localStorage.getItem('Cart');
        if (data) {
            setCart(JSON.parse(data));
        } else {
            setCart([])
        }

    }, 1000);

    useEffect(() => { if (cart.length > 0) { localStorage.setItem('Cart', JSON.stringify(cart)) } }, [cart]);

    return (
        <>
            {
                cart.length > 0 && cart.filter(p => p.qty > 0) ? (
                    <Link to="/cart">
                        <div className="cart-container">
                            <h3>{cart.length}</h3>
                            <img width="80px" src="../../assets/cart.png" />
                        </div>
                    </Link>

                ) :
                    <>
                        <div className="cart-container" onClick={() => displayNotification()}>
                            <h3>{cart.length}</h3>
                            <img width="80px" src="../../assets/cart.png" />
                        </div>
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            theme="light"
                            closeOnClick
                            />                   
                     </>



            }

        </>



    )
}