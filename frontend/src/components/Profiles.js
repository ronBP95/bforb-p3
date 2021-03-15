import React, { useState } from 'react';
import Profile from './Profile'

const Profiles = (props) => {
    console.log(props)
    const listOfProfiles = props.profiles.map((profileData, index) => {
        return(
        <div key={profileData._id}><Profile profile={profileData} /></div>
        )
    })

    return(
        <div>
            <h1>{listOfProfiles}</h1>
        </div>
    );
}

export default Profiles;