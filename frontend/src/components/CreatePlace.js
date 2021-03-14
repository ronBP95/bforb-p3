import React, { useState } from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import Place from './models/Place'
import axios from 'axios';
//import userEvent from '@testing-library/user-event';

// const placesToStaySchema = new Schema({
//     title: String,     
//     bedPhoto: String,
//     description: String,
//     rating: Number
// })

const initMap = () => console.log('initMap function called');

const CreatePlace = (props) => {
   //state 
let [title, setTitle] = useState('');
let [bedPhoto, setBedPhoto] = useState('');
let [description, setDescription] = useState('');

    //handler functions
const handleTitle = (e) => setTitle(e.target.value);
//PHOTO
const handleBedPhoto = (e) =>  {
    e.preventDefault();
    const formData = new FormData()
    formData.append("file", bedPhoto)
    formData.append("upload_preset", "p3bforb")
    console.log(bedPhoto);
    Axios.post("https://api.cloudinary.com/v1_1/dbljwcjis/image/upload", formData)
    .then((response) => {
            console.log(response.data.url);

        })

};
//DESCRIPTION
const handleDescription = (e) => setDescription(e.target.value);
//SUBMIT BUTTON
const handleSubmit = (e) => {
e.preventDefault();
const placeInfo = {
    title,
    bedPhoto,
    description,
}
axios.post("http://localhost:8000/places", placeInfo)
. then((response) => {
    console.log(response.data.url)
})
}

    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">Share a Place to Sleep</h2>
                    <form onSubmit={handleSubmit}>
            {/* User name and location from params or db */}
                        <div className="form-group">
                            <input type="hidden" value={props.userId} name="userID" />
                            <input type="hidden" value={props.userLocation} name="location" />
                        </div>

            {/* Title */}
                        <div className="form-group">
                            <label htmlFor="name">Title</label>
                            <input type="text" value={title} name="title" onChange={handleTitle} placeholder="Enter a nickname for your place" className="form-control"/>
                        </div>
            {/* Photo */}
                        <div className="form-group">
                            <label htmlFor="bedPhoto">Photo</label>
                            <input type="File" name="bedPhoto" 
                                onChange={(e) => {setBedPhoto(e.target.files[0])}}  
                                className="form-control"
                            />
                            <button onClick={handleBedPhoto} className="button float-right">Upload Photo</button>
                        </div>

            {/* Description */}
                        <div className="form-group">
                            <label htmlFor="decription">Description:</label>
                            <textarea value={description} name="description" placeholder="Describe your place" onChange={handleDescription} className="form-control"/>
                        </div>

                        <button type="submit" className="btn btn-primary float-left">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreatePlace;
