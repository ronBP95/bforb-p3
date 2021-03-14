import React, { useImperativeHandle, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { isCompositeComponent } from 'react-dom/test-utils';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL



const Profile = async (props) => {

    const thisProfile = await Axios.get(`${REACT_APP_SERVER_URL}/profiles/604d3be0ed06bd191ca6f4dc`)
    const { name, photo, aboutMe } = thisProfile.data
    (<div>
        <h1>Profile</h1>
        <p><strong>Name:</strong> {name}</p> 
        <p><strong>About:</strong> {aboutMe}</p> 
        <img src={photo} max-width="400px" max-height="400px" alt="user photo"></img>
        <p><strong>ID:</strong> {props.user.id}</p> 
    </div>) 
    
    
    
    return (
        <div>
            { thisProfile }
        </div>
    );
}

export default Profile;







// const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

// const getProfile = async (props) => {
//     const userProfiles = await Axios.get(`${REACT_APP_SERVER_URL}/profiles`);
//    // const thisProfile = userProfiles.filter(profile => Profile.userId === props.user.id);

//     console.log(typeof userProfiles.data)
//     console.log(userProfiles.data )
//     const arrOfProfiles = userProfiles.data.map((profileData, id) => { }
    
//     )}

//  getProfile();

// const Profile = async (props) => {
//     const userData = await Axios.get(`${REACT_APP_SERVER_URL}/profiles/`)  
//     console.log(userData)
    // (<div>
    //     <h1>Profile</h1>
    //     <p><strong>Name:</strong> {props.user.name}</p> 
    //     <p><strong>Email:</strong> {props.user.email}</p> 
    //     <img src="db.userphoto" max-width="400px" max-height="400px" alt="user photo"></img>
    //     <p><strong>ID:</strong> {props.user.id}</p> 
    // </div>) 

//     const errorDiv = () => {
//         return (
//             <div className="text-center pt-4">
//                 <h3>Please <Link to="/login">login</Link> to view this page</h3>
//             </div>
//         );
//     };
    
//     return (
//         <div>
//             "Hello!"
//             {/* { userData ? userData : errorDiv() } */}
//         </div>
//     );

// }

// export default Profile;