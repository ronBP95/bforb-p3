import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Axios from 'axios'
 

const Profile = (props) => {
    console.log(props);
    const userData = props.user ? 
    (<div>
        <h1>Profile</h1>
        <NavLink to="/editprofile">Edit Profile</NavLink>
        <NavLink id="share" to="/addplace">Share a Place</NavLink>
        <p><strong>Name:</strong> {props.user.name}</p> 
        <p><strong>Email:</strong> {props.user.email}</p> 
        <p><strong>About Me: {props.user.aboutMe}</strong></p>
        <p><strong>Why Travel: {props.user.whyTravel}</strong></p>
        <p><strong>Favorite Breakfast: {props.user.favBreakfast}</strong></p>
        <img src="db.userphoto" max-width="400px" max-height="400px" alt="user photo"></img>
        <p><strong>ID:</strong> {props.user.id}</p> 
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