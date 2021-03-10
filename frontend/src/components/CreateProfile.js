import React, { useState } from 'react';
import Axios from 'axios';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { Redirect } from 'react-router-dom';

const CreateProfile = (props) => {
    let [name, setName] = useState('currentUser.name');
    let [photo, setPhoto] = useState('');
    let [location, setLocation] = useState('');
    let [aboutMe, setAboutMe] = useState('');
    let [whyTravel, setWhyTravel] = useState('');
    let [favBreakfast, setFavBreakfast]= useState('');
    let [isGuest, setIsGuest] = useState(true);
    let [isHost, setIsHost] = useState(false);
    let [coordinates, setCoordinates] = useState({
            lat: null, 
            lng: null
        });

    const handlePhoto = (e) =>  {
        e.preventDefault();
        const formData = new FormData()
        formData.append("file", photo)
        formData.append("upload_preset", "p3bforb")
        console.log(photo);
        Axios.post("https://api.cloudinary.com/v1_1/dbljwcjis/image/upload", formData)
        .then((response) => {
                console.log(response);
                const photoUrl = response.data.url;
                return photoUrl 
            })

    };
    const handleName = (e) => setName(e.target.value)

    const handleSelect = async (value) => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0])
        console.log(latLng)
        setLocation(value);
        setCoordinates(latLng);
        console.log(coordinates)

    };

    const handleAboutMe = (e) => setAboutMe(e.target.value);
    const handleWhyTravel = (e) => setWhyTravel(e.target.value);
    const handleFavBreakfast = (e) => setFavBreakfast(e.target.value);
    const handleIsGuest = (e) => setIsGuest(e.target.value);
    const handleIsHost = (e) => setIsHost(e.target.value);

    const handleSubmit = async() => {
        //Axios
        //Redirect
    }

    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">Signup</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">

                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" value={name} name="name" onChange={handleName} className="form-control"/>
                        </div>
                        
                            <label htmlFor="name">Photo</label>
                            <input type="File" name="photo" 
                                onChange={(e) => {setPhoto(e.target.files[0])}}  
                                className="form-control"
                            />
                            <button onClick={handlePhoto} className="button float-right">Upload Photo</button>
                        </div>

                        <div className="form-group">
                            <label htmlFor="location">Location</label>
                            <PlacesAutocomplete name="location" value={location} onChange={setLocation} onSelect={handleSelect} className="form-control">
                                { ({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
                                  return(
                                  <div>
                                        <input {...getInputProps({placeholder: "My location"})} />
                                            <div >
                                                {suggestions.map(suggestion => {
                                                    return <div {...getSuggestionItemProps(suggestion)}>{suggestion.description}</div>
                                                })}
                                            </div>
                                    </div>
                                    )}
                                }
                            </PlacesAutocomplete>
                        </div>
                        <div className="form-group">
                            <label htmlFor="aboutMe">About Me:</label>
                            <textarea value={aboutMe} name="aboutMe" placeholder="People want to know about you. Here's your chance" onChange={handleAboutMe} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="whyTravel">Why I Travel:</label>
                            <textarea value={whyTravel} name="WhyTravel" placeholder="Let everyone know why you love to travel" onChange={handleWhyTravel} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="favBreakfast">My favorite breakfast:</label>
                            <input value={favBreakfast} type="text" name="favBreakfast" onChange={handleFavBreakfast} className="form-control"/>
                        </div> 
                        <div className="form-group">
                            <label htmlFor="isGuest">I am a traveler</label>
                            <input type="checkbox" value={isGuest} name="isGuest" onChange={handleIsGuest} className="checkbox" checked />
                        </div>
                        <div className="form-group">
                            <label htmlFor="isHost">I am a host</label>
                            <input type="checkbox" value={isHost} name="isHost" onChange={handleIsHost} className="checkbox" />
                        </div>
                        <button type="submit" className="btn btn-primary float-left">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateProfile;
