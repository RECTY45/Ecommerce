import React from 'react'
import './home.css'
import '/public/slider.png'
const Home = () => {
    return (
      <>
        <div className="container">
          <div className="side">
            <p>Woman's Fashion</p>
            <p>Men's Fashion</p>
            <p>Electronics</p>
            <p>Home & Lifestyle</p>
            <p>Medicine</p>
            <p>Sports & Outdoor</p>
            <p>Baby's & Toy's</p>
            <p>Groceries & Pets</p>
            <p>Health & Beauty</p>
          </div>
          <div className="slider">
            <img src="slider.png" alt="avatar" />
          </div>
        </div>
      </>
    );
}

export default Home
