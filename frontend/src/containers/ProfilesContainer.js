import { useState, useEffect } from 'react'
import ProfileModel from '../components/models/Profile'
import Profile from '../components/Profile'
import Profile from '../components/models/Profile'

export default function PlacesContainer () {
    const [profile, setProfile] = useState({})
    
    useEffect((props) => {
        const fetchData = async() => {
            const res = await profileModel.find(props.user._id)
            console.log(res)
            setrPofile(res.data)
        }
        fetchData()
    }, [])

    return (
        <div>
            <Profile profiles={updatedProfile}/>
        </div>
    )
}