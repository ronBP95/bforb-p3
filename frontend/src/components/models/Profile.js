import axios from 'axios'

const endPoint = "http://localhost:8000/profiles/"

class ProfileModel {
    static all = () => {
        console.log("inside of placemodel.all")
        let request = axios.get(endPoint)
        return request
    }

}

export default ProfileModel;