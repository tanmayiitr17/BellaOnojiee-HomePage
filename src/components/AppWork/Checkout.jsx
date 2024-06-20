import React from 'react'
import { images } from '../../constants'
import './Checkout.css';
const Checkout = () => {
  return (
    <div className="app__appwork_checkout">

      <div className="app__appwork_checkout_laptop">

        <div className="app__appwork_checkout-img">
          <img src={images.checkoutphone} alt="phone" />
        </div>

        <div className="app__appwork_checkout-content">
          <h5>Checkout</h5>
          <h3 className="app__appwork_heading" id="app__appwork_heading-tab">When you done check out</h3>
          <h3 className="app__appwork_heading" id="app__appwork_heading-tab">and get it delivered.</h3>
          <p className=".p__montserrat">When you done check out and get it</p>
          <p className=".p__montserrat">delivered with ease.</p>
        </div>

      </div>

      <div className="app__appwork_checkout_smallscreen">

        <div className="app__appwork_checkout-img">
          <img src={images.checkoutphone} alt="phone" />
        </div>

        <div className="app__appwork_checkout-content">
          <h5>Checkout</h5>
          <h3 className="app__appwork_heading">When you</h3>
          <h3 className="app__appwork_heading">done check</h3>
          <h3 className="app__appwork_heading">out and get it</h3>
          <h3 className="app__appwork_heading">delivered.</h3>
          <p className=".p__montserrat">When you done</p>
          <p className=".p__montserrat">check out and get it</p>
          <p className=".p__montserrat">delivered with ease.</p>
        </div>
      </div>

    </div>
  )
}

export default Checkout