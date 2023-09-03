import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <div>
        <div className="menu-item-container">
          <div>
            <ul className="short-menu-item">
              <li className="media-items">Body</li>
              <li className="media-items">Read</li>
              <li className="media-items">Store</li>
            </ul>
          </div>
          <div className="menu-list-container">
            <ul className="menu-item">
              <li className="items">Skin Care</li>
              <li className="items">Body & Hand</li>
              <li className="items">Hair</li>
              <li className="items">Fragrance</li>
              <li className="items">Home</li>
              <li className="items">Kits & Travel</li>
              <li className="items">Gifts</li>
              <li className="items">Read</li>
              <li className="items">Store</li>
              <li className="items">Facial Appointments</li>
            </ul>
          </div>
          <div className="login-container">
            <ul className="login-menu-container">
              <li className="items">Log In</li>
              <li className="items">Cabinet</li>
              <li className="items">Cart</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
