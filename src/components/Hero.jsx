import React from 'react';
import './Hero.css'; // Import the CSS file
import redshoe from '../assets/red_shoe.png'
import flipkart from '../assets/flipkart.png'
import amazon from '../assets/amazon.png'


const Hero = () => {
  return (
    <section className="hero-section">
      <div className="content-area">
        <h1 className="heading">YOUR FEET DESERVE THE BEST</h1>
        <p className="subtext">
          We're here to help you with our shoes. Your feet deserve the best and
          we're here to help you with our shoes.
        </p>
        <div>
          <button className="cta-button">Shop Now</button>
          <button className="category-button">Category</button>
        </div>
        <div className="additional-info">
          <p>Also Available On</p>
          <div className="logo-container">
            {/* Add logo images here */}
            <img src={flipkart} alt="Flipkart" className="logo" />
            <img src={amazon} alt="Amazon" className="logo" />
          </div>
        </div>
      </div>
      <div className="image-area">
        <img src={redshoe} alt="Red Nike shoe" className="product-image" />
      </div>
    </section>
  );
};

export default Hero;