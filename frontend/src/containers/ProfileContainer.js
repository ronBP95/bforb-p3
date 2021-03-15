import { useState, useEffect } from 'react'
import Profiles from '../components/Profiles'
import ProfileModel from '../components/models/Profile'

export default function ProfileContainer () {
    const [profiles, setProfile] = useState([])
    
    useEffect(() => {
        const fetchData = async() => {
            const res = await ProfileModel.all()
            console.log(res)
            setProfile(res.data)
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1>List of Places</h1>
            <Profiles profiles={profiles}/>
        </div>
    )
}