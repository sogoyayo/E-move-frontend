import { FaArrowLeft } from 'react-icons/fa'
import map from '../images/map.png'
import img from '../components/dashboard/images/rec.png'
import { StyledChooseRoute } from '../styles/chooseRoute.styled'
import { useParams, Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { IRoute } from '../interfaces/apiTypes'
import { fetchRoutes } from '../api/api'
import BookTripSuccessModal from './BookTripSuccessModal'
import { ModalContext } from '../context/dashboardContext'
import { dateString } from '../helpers/date'
import { bookTrip } from '../api/api'

const TripDetails = () => {
  const { modals, setModals }: any = useContext(ModalContext)
  const { bookTripSuccess } = modals
  const [loading, setIsloading] = useState<boolean>(false)

  const [route, setRoute] = useState<IRoute>()
  const { id } = useParams()

  const handleBookTrip = async () => {
    setIsloading(true)
    const res = await bookTrip(`/users/booktrip/${id}`, route)
    if (res) {
      setIsloading(false)
      setModals({ ...modals, bookTripSuccess: true })
    }
  }



  useEffect(() => {
    const fetch = async () => {
      if (id === 'default') {
        const defaultRoute = {
          pickup: 'Bariga',
          destination: 'Gbagada',
          price: 600,
          __v: 1,
          _id: 'defaultId',
        }
        setRoute(defaultRoute)
        return
      }
      const result = await fetchRoutes()
      if (result) {
        const theRoute = result.find((r: any) => r._id === id)
        setRoute(theRoute)
      }
    }
    fetch()
  }, [])
  return (
    <StyledChooseRoute>
      {bookTripSuccess && <BookTripSuccessModal />}
      <div className="container">
        <Link to="/user/book-route" className="backbtn">
          <FaArrowLeft />
          Go back
        </Link>
        <section>
          <div className="left">
            <h1>Trip Details</h1>
            <div className="map">
              <img src={map} alt="..." />
            </div>
            <table>
              <thead>
                <tr>
                  <th>Route</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {route && (
                  <tr>
                    <td>
                      {route?.pickup} - {route?.destination}
                    </td>
                    <td>N{route.price}</td>
                    <td>{dateString}</td>
                  </tr>
                )}
              </tbody>
            </table>
            <button onClick={handleBookTrip} className="gBtn">
              {loading ? "Booking in Progress" : "Book a Trip"}
            </button>
          </div>
          <div className="right">
            <img src={img} alt="..." />
            <h2>Board our vehicles anywhere in Lagos at regular rates</h2>
          </div>
        </section>
      </div>
    </StyledChooseRoute>
  )
}

export default TripDetails
