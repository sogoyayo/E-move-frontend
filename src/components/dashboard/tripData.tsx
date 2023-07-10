import React, {useEffect, useState} from 'react'
import TripHistory from './screens/tripHistory'

export const TripData = () => {
   const [trips, setTrips] = useState([])
     useEffect(() => {
    fetch("http://localhost:8081/api/v1/admin/tripHistory")
      .then(resp => resp.json())
      .then(data => setTrips(data)) 
  }, []);
  return (
    <div>
      <TripHistory trips={trips} />
    </div>
  )
}
