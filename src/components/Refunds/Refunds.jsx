import React, {useState} from "react";
import "./Refunds.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from "../Footer/Footer";

export const Refunds = () => {
    const notify = () => toast("Your refund request have been received. We'll check it and contact you as soon as posible!");
    const [FormData, setFormData] = useState({receiptCode:'', firstName: '', lastName: '', email:'', details:''})

    const handleInput = (e) => {
        setFormData({...FormData, [e.target.name]: e.target.value});
    }

    const sendRefund = (e) => {
        e.preventDefault();
       notify();
       setFormData({receiptCode:'', firstName: '', lastName: '', email:'', details:''})
    }

    return (
        <>
            <div className="refunds-container">
                <h1 className="animate__animated  animate__lightSpeedInLeft">Refunds Form</h1>
                <form action="" onSubmit={sendRefund}>
                    <div className="input-group animate__animated  animate__lightSpeedInRight">
                        <label className="label">Receipt Code</label>
                        <input autocomplete="off" name="receiptCode" id="receiptCode" className="input" type="text" required  onChange={handleInput} value={FormData.receiptCode}/>
                    </div>
                    <div className="input-group animate__animated  animate__lightSpeedInLeft">
                        <label className="label">Client First Name</label>
                        <input autocomplete="off" name="firstName" id="firstName" className="input" type="text" required  onChange={handleInput} value={FormData.firstName}/>
                    </div>
                    <div className="input-group animate__animated  animate__lightSpeedInRight">
                        <label className="label">Client Last Name</label>
                        <input autocomplete="off" name="lastName" id="lastName" className="input" type="text" required  onChange={handleInput} value={FormData.lastName}/>
                    </div>
                    <div className="input-group animate__animated  animate__lightSpeedInLeft">
                        <label className="label">Client Email</label>
                        <input autocomplete="off" name="email" id="email" className="input" type="email" required  onChange={handleInput} value={FormData.email}/>
                    </div>
                    <div className="input-group animate__animated  animate__lightSpeedInRight">
                        <label className="label">Refund Details</label>
                        <textarea autocomplete="off" name="details" id="details" className="input textarea" required  onChange={handleInput} value={FormData.details}/>
                    </div>

                    <button className="button2 animate__animated  animate__lightSpeedInLeft" type="submit">Save</button>
                </form>

            </div>
            <ToastContainer />
            <Footer />
        </>
    )
}