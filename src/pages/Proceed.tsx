import Icon from "../images/Icon.png"
import { StyledVerifyEmailPage } from '../styles/StyledVerifyEmailPage'

export default function Proceed() {


  return (
    <StyledVerifyEmailPage>
      <div className="box">
        <div className="icon">
          <img src={Icon} alt="" />
        </div>
        <h2><strong>Verify your email</strong></h2>
        <p>
          Hi there, a verification link has been sent to your email.
        </p>
        {/* <input type="submit" onClick={handleSubmit} value="Proceed to Login" /> */}
      </div>
    </StyledVerifyEmailPage>
  )
}
