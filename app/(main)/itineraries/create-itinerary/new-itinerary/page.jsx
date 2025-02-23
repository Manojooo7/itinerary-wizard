"use client"

import React, { useEffect, useState } from 'react'
import DisplayItinerary from '../../_components/display-itinerary'

const NewItinerary = () => {
    const [itineraryData, setItineraryData] = useState(null)
    useEffect(()=>{
        try {
            const itinerary = localStorage.getItem("NewItinerary")
            if(itinerary){
                setItineraryData(JSON.parse(itinerary))
            }
            
        } catch (error) {
            console.error('Error parsing itinerary data:', error)
        }
    },[])
    if(!itineraryData) return null
  return (
    <div className='mt-28'>
        <DisplayItinerary
            itineraryData={itineraryData}
        />
    </div>
  )
}

export default NewItinerary