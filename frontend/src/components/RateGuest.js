import React, { useState } from 'react';
import Axios from 'axios';


const RateGuest = () => {
//FUNTIONS

    const handleComments = (e) => setComments(e.target.value);
    const handleRating = (e) => {
        setRating(e.target.value);
        console.log(e.target.value);
    }

    const handleSubmit = async() => {
        await Axios.update({})
     }


//STATE
const [rating, setRating] = useState(0);
const [comments, setComments] = useState(''); 


return (
    <div className="row mt-4">
        <div className="col-md-7 offset-md-3">
            <div className="card card-body">
                <h2 className="py-2">How was your visit from 'GUEST'S NAME'?</h2>
                <form onSubmit={handleSubmit}>
        {/* Place name and location from params or db */}
                    <div className="form-group">
                        <input type="hidden" value={'props.writtenById'} name="writtenBy" />
                        <input type="hidden" value={'props.writtenAboutID'} name="writtenAbout" />
                    </div>

        {/* Rating */}
        {/* Thanks to hongde_he for the star rating code: https://codepen.io/hesguru/pen/BaybqXv  */}
        <div className="form-group">
        <label htmlFor="rating">Rating</label>
            <body>

                <div className="rate" value={rating} onClick={handleRating} >
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label for="star5" title="text">5 stars</label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text">4 stars</label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text">3 stars</label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text">2 stars</label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text">1 star</label>
                </div>
            </body>
        </div>

            {/* Comments */}
                        <div className="form-group">
                            <label htmlFor="comments">Comments:</label>
                            <body>
                            <textarea value={comments} name="comments" placeholder="Describe your stay" onChange={handleComments} className="form-control"/>
                            </body>
                        </div>

                        <button type="submit" className="btn btn-primary float-left">Submit</button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default RateGuest;
