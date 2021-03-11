import React, { useState } from 'react';
import Place from './Place'
const Places = (props) => {
    console.log(props)
    const listOfPlaces = props.places.map((placeData, index) => {
        return(
        <div key={placeData._id}><Place place={placeData} /></div>
        )
    })

    return(
        <div>
            <h1>{listOfPlaces}</h1>
        </div>
    );
}

export default Places;