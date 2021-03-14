import axios from 'axios';
import React, { useImperativeHandle } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { isCompositeComponent } from 'react-dom/test-utils';


const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const getProfile = async (props) => {
    const userProfiles = await Axios.get(`${REACT_APP_SERVER_URL}/profiles`);
   // const thisProfile = userProfiles.filter(profile => Profile.userId === props.user.id);

    console.log(typeof userProfiles.data)
    console.log(userProfiles.data )
    const arrOfProfiles = userProfiles.data.map((profileData, id) => { }
    
    )}

 getProfile();

const Profile = (props) => {
    const userData = props.user ? 
    (<div>
        <h1>Profile</h1>
        <p><strong>Name:</strong> {props.user.name}</p> 
        <p><strong>Email:</strong> {props.user.email}</p> 
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