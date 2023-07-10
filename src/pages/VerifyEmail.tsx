import { StyledVerifyEmailPage } from '../styles/StyledVerifyEmailPage'
import Icon from '../images/Icon.png'
export default function VerifyEmail() {


  return (
    <StyledVerifyEmailPage>
      <div className="box">
        <img src={Icon} alt="" />
        <h1>Verify your email</h1>
          <p>Hi there, a verification link has been sent to your email.</p>
      </div>
    </StyledVerifyEmailPage>
  )
}
