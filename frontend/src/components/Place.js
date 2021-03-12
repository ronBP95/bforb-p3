import React from 'react';
import { NavLink } from 'react-router-dom'

const Place = (props) => {
    return (
        <ul data-places-index={props.key}>
            <NavLink className="locationprop" to="/">Location: {props.place.location}</NavLink>
            <li className="locationprop">Photo: {props.place.bedPhoto}</li>
            <li className="locationprop">Description: {props.place.description}</li>
            <li className="locationprop">Rating: {props.place.rating}</li>
        </ul>
    );
}

export default Place;
