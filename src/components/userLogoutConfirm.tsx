import { StyledUserLogoutConfirm } from "../styles/UserProfileDrop.styled";
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { ModalContext } from "../context/dashboardContext";

const UserLogutConfirm = () => {
 const navigate = useNavigate();
    const { setUser }: any = useContext(UserContext);
    const { modals, setModals }: any = useContext(ModalContext);

     const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
     }
    
    const handleClose = () => {
     setModals({...modals, bookTripSuccess:false, userProfile:false, logoutConfirm:false})
   }
    return (  
        <StyledUserLogoutConfirm>
            <h1>Logout Confirmation</h1>
            <hr />
            <p>Are you sure you want to logout from your account?</p>
            <div className="flex">
                <button onClick={handleClose} className="btn1">No</button>
                <button onClick={handleLogout}>Yes</button>
            </div>
        </StyledUserLogoutConfirm>
    );
}
 
export default UserLogutConfirm;