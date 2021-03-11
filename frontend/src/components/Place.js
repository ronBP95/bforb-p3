import React from 'react';

const Place = (props) => {
    return (
        <ul data-places-index={props.key}>
            <li className="locationprop">Location: {props.place.location}</li>
            <li className="locationprop">Photo: {props.place.bedPhoto}</li>
            <li className="locationprop">Description: {props.place.description}</li>
            <li className="locationprop">Rating: {props.place.rating}</li>
        </ul>
    );
}

export default Place;
