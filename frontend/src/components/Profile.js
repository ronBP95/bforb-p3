import React, { useImperativeHandle, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Axios from 'axios';
import { isCompositeComponent } from 'react-dom/test-utils';
import ProfileModel from './models/Profile'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL



const Profile = () => {
    try {
    const profileData = Axios.get(`${REACT_APP_SERVER_URL}/profiles/myProfile`)
    console.log(profileData)
    } catch(error) {
        console.log(error)
        console.log(error.message)
    }
        
    
    return (
        <div>
           THIS IS THE PROFILE PAGE
        </div>
    );
}







// const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

// const getProfile = async (props) => {
//     const userProfiles = await Axios.get(`${REACT_APP_SERVER_URL}/profiles`);
//    // const thisProfile = userProfiles.filter(profile => Profile.userId === props.user.id);

//     console.log(typeof userProfiles.data)
//     console.log(userProfiles.data )
//     const arrOfProfiles = userProfiles.data.map((profileData, id) => { }
    
//     )}


// const Profile = (props) => {
//     console.log(props);
//     const userData = props.user ? 
//     (<div>
//         <h1>Profile</h1>
//         <NavLink to="/editprofile">Edit Profile</NavLink>
//         <NavLink id="share" to="/addplace">Share a Place</NavLink>
//         <p><strong>Name:</strong> {props.user.name}</p> 
//         <p><strong>Email:</strong> {props.user.email}</p> 
//         <p><strong>About Me: {props.user.aboutMe}</strong></p>
//         <p><strong>Why Travel: {props.user.whyTravel}</strong></p>
//         <p><strong>Favorite Breakfast: {props.user.favBreakfast}</strong></p>
//         <img src="db.userphoto" max-width="400px" max-height="400px" alt="user photo"></img>
//         <p><strong>ID:</strong> {props.user.id}</p> 
//     </div>) : <h4>Loading...</h4>
//     const errorDiv = () => {
//         return (
//             <div className="text-center pt-4">
//                 <h3>Please <Link to="/login">login</Link> to view this page</h3>
//             </div>
//         );
//     };
//     return (
//         <div>
//             { props.user ? userData : errorDiv() }
//         </div>
//     );
// }

export default Profile;