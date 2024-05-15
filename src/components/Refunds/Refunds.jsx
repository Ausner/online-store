import React from "react";
import "./Refunds.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from "../Footer/Footer";

export const Refunds = () => {


    const sendRefund = () => {
        toast("Your refund request have been received. We'll check it and contact you as soon as posible!");

    }

    return (
        <>
            <div className="refunds-container">
                <h1 className="animate__animated  animate__lightSpeedInLeft">Refunds Form</h1>
                <div className="input-group animate__animated  animate__lightSpeedInRight">
                    <label className="label">Receipt Code</label>
                    <input autocomplete="off" name="receiptCode" id="receiptCode" className="input" type="text" required/>
                </div>
                <div className="input-group animate__animated  animate__lightSpeedInLeft">
                    <label className="label">Client First Name</label>
                    <input autocomplete="off" name="firstName" id="firstName" className="input" type="text" required/>
                </div>
                <div className="input-group animate__animated  animate__lightSpeedInRight">
                    <label className="label">Client Last Name</label>
                    <input autocomplete="off" name="lastName" id="lastName" className="input" type="text" required/>
                </div>
                <div className="input-group animate__animated  animate__lightSpeedInLeft">
                    <label className="label">Client Email</label>
                    <input autocomplete="off" name="email" id="email" className="input" type="email" required/>
                </div>
                <div className="input-group animate__animated  animate__lightSpeedInRight">
                    <label className="label">Refund Details</label>
                    <textarea autocomplete="off" name="details" id="details" className="input textarea" required/>
                </div>

                <button className="button2 animate__animated  animate__lightSpeedInLeft" onClick={() => sendRefund()}>Save</button>
            </div>
            <ToastContainer
                            position="top-center"
                            autoClose={8000}
                            theme="light"
                            closeOnClick
                            /> 
            <Footer />
        </>
    )
}