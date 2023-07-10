import { Link } from 'react-router-dom'
import { StyledSuccessModal } from '../styles/successmodal.styled'

const SuccessModal: React.FC = () => {
  return (
    <StyledSuccessModal>
      <div className="box">
        <img src="check.svg" alt="an email icon" />
        <h1>Successful</h1>
        <p>
          Your password has been changed successfully. Login to access your
          account.
        </p>
        <Link to="/login">Back to Login</Link>
      </div>
    </StyledSuccessModal>
  )
}

export default SuccessModal
