import React, { useState } from 'react';
import Profile from './Profile'
const Profiles = (props) => {
    return(
        <div>
            <h1>{props.profiles.name}</h1>
        </div>
    );
}

export default Profiles;