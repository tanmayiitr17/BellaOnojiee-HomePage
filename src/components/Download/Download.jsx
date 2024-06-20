import React from 'react';
// import { images } from '../../constants';
import './Download.css';

const Download = () => {
    return (
        <div className="app__download">
            <div className="app__download_laptop">

                <div className="app__download-content flex__center_column">
                    <h1 className="heading__montserrat">Download the app now.</h1>
                    <p className="p__montserrat">Available on your favorite store. Start your premium experience now</p>
                </div>

                <div className='flex__center_row'>

                    <button className='app__download-button bg__orange .heading__montserrat'>Playstore</button>
                    <button className='app__download-button bg__transparent .heading__montserrat'>App store</button>

                </div>

            </div>

            <div className="app__download_smallscreen">

                <div className="app__download-content flex__center_column">
                    <h1 className="heading__montserrat">Download the</h1>
                    <h1 className="heading__montserrat">app now.</h1>
                    <p className="p__montserrat">Most calendars are</p>
                    <p className="p__montserrat">designed for teams. </p>
                </div>

                <div className='flex__center_row app__phone_download_button'>

                    <button className='app__download-button bg__orange .heading__montserrat'>Buy now</button>
                    <button className='app__download-button bg__transparent .heading__montserrat'>Try for free</button>

                </div>

            </div>

        </div>
    )
}

export default Download