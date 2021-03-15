import React from 'react';
import { NavLink } from 'react-router-dom'

const Profile = (props) => {
    return (
        <ul data-places-index={props.key}>
            <NavLink className="locationprop" to="/">Location: {props.profile.name}</NavLink>
        </ul>
    );
}

export default Profile;
