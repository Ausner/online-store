import React, {useState} from "react";
import "./Receipt.css";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Receipt = ({id}) => {

    const width = window.innerWidth;
    const height = window.innerHeight;

    const copyToClipboard = () => {
        toast("Copied!");
        navigator.clipboard.writeText(id);
    }

    return (
        <>
            <div className="receipt-container">
                <h2>Your purchase is completed!</h2>
                <h3>Check your receipt code</h3>
                <div className="receipt-code">
                    <h1>{id}</h1>
                    <img onClick={() => copyToClipboard()} width={20} height={20} className="copy-icon" src="../../assets/copy.png" />
                </div>

                <img width={250} src="../../assets/complete.png" />
                <Link to="/home"><button className="button2">Got it!</button></Link>

            </div>
            <Confetti
                width={width}
                height={height}
            />
            <ToastContainer
                position="top-right"
                autoClose={500}
                theme="light"
                closeOnClick
            />
            <Footer />
        </>
    )
}