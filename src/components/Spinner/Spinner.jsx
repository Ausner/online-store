import React from "react";
import "./Spinner.css";

export const Spinner = () => {
  return (
    <div className="spinner">
      <div className="loader"></div>
      <h2 className="loading-text">Loading...</h2>
    </div>
  )
}