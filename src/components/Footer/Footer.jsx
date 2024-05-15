import React from "react";
import "./Footer.css";

export const Footer = () => {
    return (
        <>
        
            <div className="Footer">

                <div className="left-section">
                    <h3>Assistance</h3>
                    <p>"Thank you for shopping with us! Your support means the world to us.<br/> For any inquiries, feedback, or assistance, please don't hesitate to reach out to our friendly customer service team.<br/>Happy shopping!"</p>
                </div>
                <div className="middle-section">
                <p>© {new Date().getFullYear()} AM Store. All Rights Reserved.</p>
            </div>
                <div className="rigth-section">
                    <h3>Contact Us:</h3>
                    <p>ausnermiranda@gmail.com</p>
                </div>
            </div>

        </>

    )
}

