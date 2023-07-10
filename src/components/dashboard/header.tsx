import { StyledHeader } from './styles/header.styled'
import logo from '../dashboard/images/logo.png'
import { ModalContext } from '../../context/dashboardContext'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/userContext'
import { useNavigate } from 'react-router-dom'


const Header = () => {
  const { setUser }: any = useContext(UserContext);
  const { modals, setModals }:any = useContext(ModalContext)
  const { editAndDeleteModal, editPriceModal, profileModal } = modals
  const [admin, setAdmin] = useState<string>('');
  const navigate = useNavigate();
   

   const handleClose = () => {
    setModals({...modals, editAndDeleteModal: false, profileModal: false, editPriceModal:false})
   }
  
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setUser(null);
    navigate("/");
  }


  useEffect(() => {
    const user = localStorage.getItem("userToken");
    if (user) {
      const admin = JSON.parse(user);
      setAdmin(admin?.name.split(" ")[0]);
    }
},[])
  return (
    <StyledHeader>
      {(editPriceModal || profileModal) && <div onClick={handleClose} className="overlay"></div>}
      {editAndDeleteModal && <div onClick={handleClose} className="faintOverlay"></div>}
      <div className="container">
        <div className="logo">
          <img src={logo} alt="..." />
          E-move
        </div>
        <div className="right">
          {admin ? <h4>Hi {admin}</h4> : <h4>Admin</h4>}
          <span></span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </StyledHeader>
  )
}

export default Header
