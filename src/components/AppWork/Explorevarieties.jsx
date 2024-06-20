import React from 'react';
import { images } from '../../constants';
import './Explorevarieties.css';

const Explorevarieties = () => {
  return (
    <div className="app__appwork_explore_varieties">
      <div className="app__appwork_explore_varieties-content_laptop">

        <div className="app__appwork_explore_varieties-content">
          <h5>Explore varieties</h5>
          <h3 className="app__appwork_heading"  id="app__appwork_heading-tab">Shop for your favorites</h3>
          <h3 className="app__appwork_heading"  id="app__appwork_heading-tab">meal as e dey hot.</h3>
          <p className=".p__montserrat">Shop for your favorite meals or drinks</p>
          <p className=".p__montserrat">and enjoy while doing it.</p>
        </div>

        <div className="app__appwork_explore_varieties-img">
          <img src={images.varietiesphone} alt="phone" />
        </div>

      </div>

      <div className="app__appwork_explore_varieties-content_smallscreen">

        <div className="app__appwork_explore_varieties-content">
          <h5>Explore while shopping</h5>
          <h3 className="app__appwork_heading">Shop for your</h3>
          <h3 className="app__appwork_heading">favorites meal</h3>
          <h3 className="app__appwork_heading">as e dey hot.</h3>
          <p className=".p__montserrat">Shop for your</p>
          <p className=".p__montserrat">favorite meals or</p>
          <p className=".p__montserrat">drinks and enjoy</p>
          <p className=".p__montserrat">while doing it.</p>
        </div>

        <div className="app__appwork_explore_varieties-img">
          <img src={images.varietiesphone} alt="phone" />
        </div>

      </div>
    </div>
  )
}

export default Explorevarieties;