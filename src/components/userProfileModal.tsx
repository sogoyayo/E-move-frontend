import { FaSignOutAlt, FaUser } from 'react-icons/fa'
import { StyledUserProfileDropdown } from '../styles/UserProfileDrop.styled';
import { useContext } from 'react';
import { ModalContext } from '../context/dashboardContext';
import { UserContext } from '../context/userContext';



export const UserProfileModal = () => {
    const { user }: any = useContext(UserContext);
    const { modals, setModals }: any = useContext(ModalContext);

   const handleLogoutConfirm = () => {
    setModals({...modals, logoutConfirm:true})
   }
    
   
  return (
    <StyledUserProfileDropdown>
          {user ? <h1>{user?.name }</h1> : undefined}
        <hr />
        <div className="flex">
          <FaUser className='icon' />
          Account
        </div>
        <div onClick={handleLogoutConfirm} className="flex">
          <FaSignOutAlt  className='icon' />
          Logout
        </div>
    </StyledUserProfileDropdown>
  )
}
