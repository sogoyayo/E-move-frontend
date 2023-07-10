import { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners'
import { getTripsByPassenger } from '../api/api'
import { TripIRoute } from '../interfaces/apiTypes'
import { StyledPayment } from '../styles/Payment.styled'

const Payment = () => {
  const [trips, setTrips] = useState<TripIRoute[]>()

  useEffect(() => {
    const fetch = async () => {
      const res: any = await getTripsByPassenger()
      if (res) {
        setTrips(res?.data?.data)
      }
    }

    fetch()
  }, [])
  return (
    <StyledPayment>
      <div className="container">
        <h1>Your past trips with Emove</h1>
        {!trips ? (
          <div className="loader">
            <BeatLoader color="#F79009" />
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Pickup</th>
                <th>Destinaton</th>
                <th>Price</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {trips.map((trip) => (
                <tr key={trip._id}>
                  <td>{trip?.pickup}</td>
                  <td>{trip?.destination}</td>
                  <td>{trip?.price}</td>
                  <td>{new Date(trip?.createdAt).toDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </StyledPayment>
  )
}

export default Payment
