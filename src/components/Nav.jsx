import React from 'react';
import './nav.css';
import { AiOutlineSearch } from "react-icons/ai";
import { BsHeart, BsCart3 } from "react-icons/bs";

const Nav = () => {
  return (
    <>
      <div className="discount">
        <p>Summer Sale For All Swim Suits And Free Express Delivery-OFF 50%! <span>Shop Now</span></p>
      </div>
      <div className="container">
        <div className="header">
          <div className="left-section">
            <h3>Exclusive</h3>
          </div>
          <div className="center-section">
            <p>Home</p>
            <p>Contact</p>
            <p>About</p>
            <p>Sign Up</p>
          </div>
          <div className="right-section">
            <div className="search-container">
              <input type="text" placeholder="What are you looking for?" className="search-input" />
              <AiOutlineSearch className="search-icon" />
            </div>
            <div className="icon-container">
              <BsHeart className="heart-icon" size='20px'/>
              <BsCart3 className="cart-icon" size='20px'/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
