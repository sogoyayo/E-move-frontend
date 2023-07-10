import { StyledVerifyEmailPage } from '../styles/StyledVerifyEmailPage'
import { Link } from 'react-router-dom'


export default function VerifyEmailSuccess() {

  return (
    <StyledVerifyEmailPage>
     <div className="box">
         Email verified successfully
        <Link to="/login">
          Back to Login
        </Link>
      </div>
    </StyledVerifyEmailPage>
  )
}
