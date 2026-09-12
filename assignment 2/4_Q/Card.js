import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600"
        alt="Laptop"
        className="card-image"
      />

      <div className="card-content">
        <h2>Gaming Laptop</h2>

        <p>
          Powerful laptop for Coding, AI/ML, Gaming, and Web Development.
        </p>

        <button className="card-button">Buy Now</button>
      </div>
    </div>
  );
}

export default Card;