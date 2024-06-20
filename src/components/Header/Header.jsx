import React from 'react'
import { images } from '../../constants';
import './Header.css';

const Header = () => {
  return (
    <div className="app__header">
      <div className='app__header_home-content flex__center_column'>
        <div className="app__home-content_laptop">

          <h5 className='heading__montserrat'>Food app</h5>
          <h1 className='poppins '>Why stay hungry when</h1>
          <h1 className='poppins'>you can order form Bella Onojie</h1>
          <p className='p__montserrat'>Download the bella onoje’s food app now on </p>

          <div className="app__header_button">
            <button className='app__header_home-button bg__orange'>Playstore</button>
            <button className='app__header_home-button button_2 bg__transparent'>App store</button>

          </div>
        </div>

        <div className="app__home-content_smallscreen">

          <h5 className='heading__montserrat'>Food app</h5>
          <h1 className='poppins '>Why stay hungry</h1>
          <h1 className='poppins'>when you can order</h1>
          <h1 className='poppins'>form Bella Onojie</h1>
          <p className='p__montserrat'>Download the bella onoje’s</p>
          <p className='p__montserrat'>food app now on </p>

        <div className="app__header_button">
          <button className='app__header_home-button bg__orange'>Playstore</button>
          <button className='app__header_home-button button_2 '>App store</button>

          </div>
          
        </div>


        <div className="app__header_home-phone">

          {/* <div className="app__header_home-phone1">
            <img src={images.homephone1} alt="phone" />
          </div>

          <div className="app__header_home-phone2">
            <img src={images.homephone2} alt="phone" />
          </div> */}
          <img src={images.homephone} alt="phone" />

        </div>

        <div className="app__header_home-line">

        </div>

      </div>

    </div>
  )
}

export default Header;