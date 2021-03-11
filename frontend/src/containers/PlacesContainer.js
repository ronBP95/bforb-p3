import { useState, useEffect } from 'react'
import PlaceModel from '../components/models/Place'
import Places from '../components/Places'
import Place from '../components/models/Place'

export default function PlacesContainer () {
    const [places, setPlaces] = useState([])
    
    useEffect(() => {
        const fetchData = async() => {
            const res = await PlaceModel.all()
            console.log(res)
            setPlaces(res.data)
        }
        fetchData()
    }, [])

    return (
        <div>
            <Places places={places}/>
            <h1>List of Places</h1>
        </div>
    )
}