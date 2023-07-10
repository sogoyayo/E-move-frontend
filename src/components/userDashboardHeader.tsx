// eslint-disable-next-line
import logo from './dashboard/images/logo.png'
import { Link } from 'react-router-dom'
import { FaChevronDown } from 'react-icons/fa'
import { StyledUserDashboardNavbar } from '../styles/userDashboardHeader.styled'
import { ModalContext } from '../context/dashboardContext'
import { useContext } from 'react'
import { UserProfileModal } from './userProfileModal'
import UserLogutConfirm from './userLogoutConfirm'
import { UserContext } from '../context/userContext'

const UserDashboardHeader = () => {
  const { user }: any = useContext(UserContext)
  const { modals, setModals }: any = useContext(ModalContext)
  const { bookTripSuccess, userProfile, logoutConfirm, fundwallet } = modals

  const handleClose = () => {
    setModals({
      ...modals,
      bookTripSuccess: false,
      userProfile: false,
      logoutConfirm: false,
      fundwallet: false,
    })
  }

  const handleUserProfile = () => {
    setModals({ ...modals, userProfile: !userProfile })
  }
  
  return (
    <StyledUserDashboardNavbar>
      {logoutConfirm && <UserLogutConfirm />}
      {(bookTripSuccess || logoutConfirm || fundwallet) && (
        <div onClick={handleClose} className="overlay"></div>
      )}
      <div className="container">
        <div className="logo">
          <img src={logo} alt="..." />
          E-move
        </div>
        <div className="right">
          <ul>
            <li>
              <Link to="/user/book-route">Book a route</Link>
            </li>
            <li>
              <Link to="/user/trips">Trips</Link>
            </li>
            <li>
              <Link to="/user/fund-wallet">Wallet</Link>
            </li>
          </ul>
        </div>
        <div className="user">
          {user ? <h4>Hi {user?.name.split(' ')[0]}</h4> : <></>}
          <FaChevronDown onClick={handleUserProfile} />
          {userProfile && <UserProfileModal />}
        </div>
      </div>
    </StyledUserDashboardNavbar>
  )
}

export default UserDashboardHeader
