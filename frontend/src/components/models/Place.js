import axios from 'axios'

const endPoint = "http://localhost:8000/places"

class PlaceModel {
    static all = () => {
        console.log("inside of placemodel.all")
        let request = axios.get(endPoint)
        return request
    }
    static create = () => {
        console.log("created a place!")
        let request = axios.post(endPoint)
        return request
    }
}

export default PlaceModel;