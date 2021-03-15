import React, { useState } from 'react';
import Axios from 'axios';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';


const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const CreateProfile = (props) => {
    let [name, setName] = useState(props.user.name);
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
        .catch((error) => {
            console.log('ERROR IN CLOUDINARY');
            console.log(error);
            setPhoto('https://res.cloudinary.com/dbljwcjis/image/upload/v1615592116/Keyboard_cat_hxiuix.jpg')
        })

    };
    const handleName = (e) => setName(e.target.value)

    const handleSelect = async (value) => {
        setLocation(value);
        // const results = await geocodeByAddress(value);
        // const latLng = await getLatLng(results[0])
        // console.log(latLng)
        // setCoordinates(latLng);
        // console.log(coordinates)
    };

    const handleAboutMe = (e) => setAboutMe(e.target.value);
    const handleWhyTravel = (e) => setWhyTravel(e.target.value);
    const handleFavBreakfast = (e) => setFavBreakfast(e.target.value);
    const handleIsGuest = (e) => setIsGuest(e.target.value);
    const handleIsHost = (e) => setIsHost(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
       console.log("Submit button pressed")
        const updatedProfile = {
            name,
            photo,
            location,
            aboutMe,
            whyTravel,
            favBreakfast,
            isGuest,
            isHost
        }
  
        console.log(updatedProfile)
        Axios.post(`${REACT_APP_SERVER_URL}/profiles`, updatedProfile)
        .then((response) => {
        console.log('It posted!')
        return <Redirect to={`${REACT_APP_SERVER_URL}/profile`} />
        })
        .catch(error => {
            console.log('Error in Profile Update')
            console.log(error)
            console.log(error.response.data)
        })
    }

    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">Edit Profile for { props.user.name }</h2>
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
                                            <div className="autocomplete-dropdown-container">
                                                {suggestions.map((suggestion, key) => {
                                                    const style = {
                                                        backgroundColor: suggestion.active ? "#a1f7ff" : "#fff"
                                                    }
                                                    return <div {...getSuggestionItemProps(suggestion, { style })} >{suggestion.description}</div>
                                                },)}
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
                            <input type="checkbox" value={isGuest} name="isGuest" onChange={handleIsGuest} className="checkbox"  />
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
