import { StyledChooseRoute } from '../styles/chooseRoute.styled'
import img from './dashboard/images/rec.png'
import line from '../images/line.png'
import { FaChevronDown } from 'react-icons/fa'
import MoreRoutes from './moreRoutes'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ChooseRoutes = () => {
  const [more, setMore] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleMore = () => {
    setMore(!more);
  }

  const navigateToBookTrip = () => {
    navigate("/user/book-trip")
  }

  return (
    <StyledChooseRoute>
      <div className="container">
        <h1>Choose route</h1>
        <section>
          <div className="left">
            <div>
              <img src={line} alt="..." />
            </div>
            <button onClick={handleMore} className='more'>
              See more routes <FaChevronDown />
            </button>
            {more && <MoreRoutes />}
            <Link to="/user/trip-details/default" className='bookRouteBtn' onClick={navigateToBookTrip}>Continue</Link>
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

export default ChooseRoutes