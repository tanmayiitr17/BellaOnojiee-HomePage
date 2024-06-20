import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { images } from '../../constants';
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.navlogo} alt="app logo" />
      </div>

      {/* <div id="app__navbar-links-div"> */}
      <ul className="app__navbar-links">
        <li className=""><a href="#home">Home</a></li>
        <li className=""><a href="#product">Product</a></li>
        <li className=""><a href="#faq">Faq</a></li>
        <li className=""><a href="#contact">Contact</a></li>
      </ul>

      {/* </div> */}

      <div className="app__navbar-tab">
        <GiHamburgerMenu color="#737373" fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className=""><a href="#home">Home</a></li>
              <li className=""><a href="#product">Product</a></li>
              <li className=""><a href="#faq">Faq</a></li>
              <li className=""><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#737373" fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className=""><a href="#home">Home</a></li>
              <li className=""><a href="#product">Product</a></li>
              <li className=""><a href="#faq">Faq</a></li>
              <li className=""><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}
      </div>

    </nav>
  )
};

export default Navbar;