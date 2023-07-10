import { FaEdit, FaTimes } from 'react-icons/fa'
import { StyledProfile } from './styles/profile.styled'
// import { DriverType } from '../../interfaces/apiTypes';

const Profile = ({driver, handleClose, handleUpdate}: any) => {
  return (
    <StyledProfile>
      <div className="flex">
        <h1>Profile Details</h1>
        <span>
          <FaTimes onClick={handleClose}/>
        </span>
      </div>
      <div className="flex1">
        <img src={driver?.photo} alt="..." />
        <h4>{driver?.fullName}</h4>
        <span onClick={() => handleUpdate(driver._id)}>
          <FaEdit className="edi-icon" />
          Edit
        </span>
      </div>
      <hr />
      <div>
        <div className="flex2">
          <h5>Route of Operation</h5>
          <small></small>
          <span>{driver?.operationRoute}</span>
        </div>
        <div className="flex2">
          <h5>Phone Number</h5>
          <small></small>
          <span>{driver?.phone}</span>
        </div>
        <div className="flex2">
          <h5>Account Number</h5>
          <small></small>
          <span>{driver?.accountNo}</span>
        </div>
        <div className="flex2">
          <h5>Upload Valid ID</h5>
          <small></small>
          <span>NIN</span>
        </div>
      </div>
    </StyledProfile>
  )
}

export default Profile