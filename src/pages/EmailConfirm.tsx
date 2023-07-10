import { StyledResetPassword } from '../styles/resetpassword.styled'
import { Link } from 'react-router-dom'

function EmailConfirmation() {
  return (
    <StyledResetPassword>
      <div className="box">
        <img src="jpg" alt="" />
        <h1>Check your email</h1>
        <p>
          We sent a password reset link to your email. Please click the link to
          reset your password
        </p>
        <p>
          Didn't received an email?{' '}
          <a className="resend" href="">
            Click to resend
          </a>
        </p>
        <Link to="/lgoin">Back to login</Link>
      </div>
    </StyledResetPassword>
  )
}

export default EmailConfirmation
