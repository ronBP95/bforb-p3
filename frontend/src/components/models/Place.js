import axios from 'axios'

const endPoint = "http://localhost:8000/places"

class PlaceModel {
    static all = () => {
        console.log("inside of placemodel.all")
        let request = axios.get(endPoint)
        return request
    }
}

export default PlaceModel;