import React from 'react';

const Place = (props) => {
    return (
        <ul data-places-index={props.key}>
            <li>Location: {props.place.location}</li>
            <li>Photo: {props.place.bedPhoto}</li>
            <li>Description: {props.place.description}</li>
            <li>Rating: {props.place.rating}</li>
        </ul>
    );
}

export default Place;
