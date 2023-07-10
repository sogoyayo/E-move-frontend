import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { StyledForgotPassword } from '../styles/forgotpassword.styled'
import { retrievePassword } from '../api/api';

export const ForgotPassword = () => {
  const [email, setEmail] = useState<string>('');
  const navigate = useNavigate();

  const handleReset = async (e:any) => {
    e.preventDefault();
    await retrievePassword("/users/forgotPassword", email);
    setEmail('');
    navigate("/verify-forgotten-password");
  }

  return (
    <StyledForgotPassword>
      <form className="box">
        <h1>Forgot Password</h1>
        <p>
          Enter the email associated with your accout and we'll send an email
          with instructions to reset your password
        </p>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <button onClick={handleReset}>Reset Password</button>
        </div>
        <Link to="/login">Back to Login</Link>
      </form>
    </StyledForgotPassword>
  )
}
