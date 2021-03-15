import React from 'react';
import logo from './logo2.PNG'
import cark from './cark.jfif'
import dond from './dond.jpg'
import { NavLink } from 'react-router-dom'

const Welcome = () => {
    return (
        <div className="welcomepage">
        <div>
        <img src={logo} alt="Logo"/>
        </div>
        <div className="photos">
        <img src={cark} id="cark"/>
        <p id="carkquote">"Forget about AirBnB, Bforb is obviously what the cool kids are using and is so hip" 
        - <strong>Cark Muban</strong></p>
        <img src={dond} id="dond"/>
        <p id="dondquote">"I just recently sold my entire chair collection to invest in Bforb and I'm not sure if that is saying much." - <strong>Don Jaymond</strong></p>
        </div>
        <h2 className="welcomeheader"> <u>"You provide the bed, the guest provides the breakfast"</u></h2>
        <h3 className="welcomeunder"> Come see why trillionaire investors Cark and Don Rank BFORB as the leading startup in 2021 to do well probably</h3>
        <NavLink to="/signup" className="welcomesign">Sign Up Now</NavLink>
        </div>

    );
}

export default Welcome;