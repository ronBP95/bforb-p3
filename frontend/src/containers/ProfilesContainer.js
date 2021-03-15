import { useState, useEffect } from 'react'
import ProfileModel from '../components/models/Profile'
import Profile from '../components/Profile'
import Profile from '../components/models/Profile'

export default function ProfileContainer () {
    const [profile, setProfile] = useState({})
    
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
            <Profile profile={profile}/>
        </div>
    )
}