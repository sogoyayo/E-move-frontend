import UserDashboardHeader from '../components/userDashboardHeader'
import { Routes, Route } from 'react-router-dom'
import ChooseRoutes from '../components/bookRoutes';
import TripDetails from '../components/tripDetails'
import FundWallet from '../components/FundWallet'
import Payment from './Payment'
import { ModalContext } from '../context/dashboardContext'
import { useState } from 'react'

export default function UserDashboard() {
  const [modals, setModals] = useState({
    bookTripSuccess: false,
    userProfile: false,
    logoutConfirm: false,
    fundwallet:false
  })


  return (
    <ModalContext.Provider value={{ modals, setModals }}>
      <div className="userApp">
        <UserDashboardHeader />
        <section className='userBox'>
          <Routes>
            <Route path="/book-route" element={<ChooseRoutes />} />
            <Route path="/trip-details/:id" element={<TripDetails />} />
            <Route path="/fund-wallet" element={<FundWallet />} />
            <Route path="/trips" element={<Payment />} />
          </Routes>
        </section>
      </div>
    </ModalContext.Provider>
  )
}
