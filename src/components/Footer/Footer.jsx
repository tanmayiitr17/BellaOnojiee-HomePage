import React from 'react';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => {
    return (
        <div className="app__footer">
            <div className="app__footer-logo">
                <img src={images.footerlogo} alt="logo" />
            </div>
            <div className="app__footer-socialMedia">
                <img src={images.socialmedia} alt="socialmedia" />
            </div>
            <div className="app__footer-copywrite">
                Copywright 2020 Bella Onojie.com
            </div>

            <div className="app__footer-line">
                Just type what's on your mind and we'll
            </div>

        </div>
    )
}

export default Footer