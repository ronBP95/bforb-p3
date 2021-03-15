import React, { useImperativeHandle, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Axios from 'axios';
import { isCompositeComponent } from 'react-dom/test-utils';
import ProfileModel from './models/Profile'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

// const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

// const getProfile = async (props) => {
//     const userProfiles = await Axios.get(`${REACT_APP_SERVER_URL}/profiles`);
//    // const thisProfile = userProfiles.filter(profile => Profile.userId === props.user.id);

//     console.log(typeof userProfiles.data)
//     console.log(userProfiles.data )
//     const arrOfProfiles = userProfiles.data.map((profileData, id) => { }
    
//     )}


const Profile = (props) => {
    console.log(props);
    const userData = props.user ? 
    (<div className="profilepage">
        <div className="profilebar">
        <div className="inbar">
        <NavLink to="/editprofile" id="edit">Edit Profile</NavLink>
        <NavLink id="share" to="/addplace" id="share">Share a Place</NavLink>
        </div>
        </div>
        <h1>{props.user.name}'s profile</h1> 
        <p><strong>Email:</strong> {props.user.email}</p> 
        <p><strong>About Me: {props.user.aboutMe}</strong></p>
        <p><strong>Why Travel: {props.user.whyTravel}</strong></p>
        <p><strong>Favorite Breakfast: {props.user.favBreakfast}</strong></p>
        <img src="db.userphoto" max-width="400px" max-height="400px" alt="user photo"></img>
        <p><strong>ID:</strong> {props.user.id}</p> 
        <div className="ratebar">
        <div className="inbar2">
        <NavLink to="/ratehost"  id="ratehost" user={props.user}>Rate Host</NavLink>
        <NavLink to="/rateguest" id="rateguest">Rate Guest</NavLink>
        </div>
        </div>
    </div>) : <h4>Loading...</h4>
    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };
    return (
        <div>
            { props.user ? userData : errorDiv() }
        </div>
    );
}

export default Profile;