import Header from './header';
import Home from './screens/home';
import Drivers from './screens/drivers';
import Pricing from './screens/pricing';
import TripHistory from './screens/tripHistory';
import Driver from './driver';
import Sidebar from './sidebar';
import {  Routes, Route} from 'react-router-dom';
import { StyledMain } from './styles/main.styled';
import { ModalContext } from '../../context/dashboardContext';
import { useState } from 'react';


function Dashboard() {
    const [modals, setModals] = useState({
         editAndDeleteModal: false,
         editPriceModal: false,
         profileModal: false,
    })

  
  return (
    <ModalContext.Provider value={{modals, setModals}}>
        <StyledMain>
          <Header />
          <section className='main-section'>
            <Sidebar />
            <div className="pagination">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/drivers" element={<Drivers />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/triphistory" element={<TripHistory />} />
                <Route path="/driver" element={<Driver />} />
              </Routes>
            </div>
          </section>
        </StyledMain>
    </ModalContext.Provider>
  )
}

export default Dashboard
