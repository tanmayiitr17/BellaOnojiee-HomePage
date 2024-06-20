import React from 'react'
import { images } from '../../constants';
import './Createaccount.css';

const Createaccount = () => {
    return (

        <div className="app__appwork_createAnAccount">
            <div className="app__appwork_createAnAccount_laptop">
                
                    <h2>How the app works</h2>
                
                <div className="app__appwork_createAnAccount-img">
                    <img src={images.loginphone} alt="login" />
                </div>
                <div className="app__appwork_createAnAccount-content">
                    <h5>Create an account</h5>
                    <h3 className="app__appwork_heading"  id="app__appwork_heading-tab">Create/login to an existing</h3>
                    <h3 className="app__appwork_heading"  id="app__appwork_heading-tab">  account to get started</h3>
                    <p className=".p__montserrat">An account is created with your email</p>
                    <p className=".p__montserrat">and a desired password</p>
                </div>

            </div>

            <div className="app__appwork_createAnAccount_smallscreen">

                <h2>How the app works</h2>
                <div className="app__appwork_createAnAccount-img">
                    <img src={images.loginphone} alt="login" />
                </div>
                <div className="app__appwork_createAnAccount-content">
                    <h5>Create an account</h5>
                    <h3 className="app__appwork_heading">Create/login to</h3>
                    <h3 className="app__appwork_heading">an existing</h3>
                    <h3 className="app__appwork_heading">account to get</h3>
                    <h3 className="app__appwork_heading">started</h3>
                    <p className=".p__montserrat">An account is</p>
                    <p className=".p__montserrat">created with your</p>
                    <p className=".p__montserrat">email and a desired </p>
                    <p className=".p__montserrat">password</p>
                </div>

            </div>

        </div>

    )
}

export default Createaccount;