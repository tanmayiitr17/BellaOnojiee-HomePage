import React from 'react'
import { images } from './constants';
import { Header, Navbar } from './components';
import Createaccount from './components/AppWork/Createaccount'
import Explorevarieties from './components/AppWork/Explorevarieties';
import Checkout from './components/AppWork/Checkout';
import Download from './components/Download/Download';
import Footer from './components/Footer/Footer';
import './App.css';
const App = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Createaccount />
            <Explorevarieties />
            <Checkout />
            <Download />
            <Footer/>
        </div>
    )
}


export default App;