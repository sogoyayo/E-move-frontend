import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchRoutes } from '../api/api'
import { IRoute } from '../interfaces/apiTypes'
import { StyledMoreRoutes } from '../styles/moreRoutes.styled'
import { PulseLoader } from 'react-spinners'
import { FaCaretRight } from 'react-icons/fa'

const MoreRoutes = () => {
  const [routes, setRoutes] = useState<IRoute[]>([])
  const [loading, setIsloading] = useState(false)
  useEffect(() => {
    const fetch = async () => {
      setIsloading(true)
      const result = await fetchRoutes()
      if (result) {
        setIsloading(false)
        setRoutes(result)
      }
    }
    fetch()
  }, [])
  return (
    <StyledMoreRoutes>
      <li>Other available routes</li>
      {loading ? (
        <div className='loader'><PulseLoader color="#F79009" /></div>
      ) : (
        routes.map((route: any) => (
          <li key={route?._id}>
            <FaCaretRight className="icon" />
            <Link to={`/user/trip-details/${route?._id}`}>
              {route?.destination} - {route?.pickup}
            </Link>
          </li>
        ))
      )}
    </StyledMoreRoutes>
  )
}

export default MoreRoutes
