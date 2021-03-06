import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const endPoint = `${REACT_APP_SERVER_URL}/profiles/showAll`

class ProfileModel {
    static all = (req, res) => {
        console.log('hit Profile model')
        let request = axios.get(endPoint)
        console.log('Got Profile from DB')
        res.json(request)
        return request
    }
    static update = (req, res) => {
        console.log('hit Profile model')
        let request = axios.get(`${REACT_APP_SERVER_URL}/profiles/put`)
        console.log('Got Profile from DB')
        return request
    }

}

export default ProfileModel;