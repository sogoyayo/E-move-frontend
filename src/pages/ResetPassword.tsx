import { useState } from 'react'
import { useParams } from 'react-router-dom'
// import { StyledEmailConfirmation } from '../styles/emailconfirmation.styled'
import { StyledForgotPassword } from '../styles/forgotpassword.styled'
import { resetPassword } from '../api/api'
import SuccessModal from '../components/SuccessModal'

const ResetPassword = () => {
  const { id } = useParams()
  const [newPassword, setNewPassword] = useState<string>('')
  const [confirm, setConfirm] = useState<string>('')
  const [modal, setModal] = useState<boolean>(false)
  const [loading, setIsloading] = useState<boolean>(false);

  const handleReset = async (e: any) => {
    e.preventDefault()
    setIsloading(true);
    const res = await resetPassword(`/users/password-reset/${id}`, newPassword, confirm);
    if (res) {
      setIsloading(false);
      setModal(true)
    }
    setNewPassword('')
    setConfirm('')
  }

  return (
    <StyledForgotPassword>
      {modal && <SuccessModal />}
      <form onSubmit={handleReset} className="box">
        <h1>Reset Password</h1>
        <div className="field">
          <label htmlFor="newpassword">New Password</label>
          <input
            type="text"
            value={newPassword}
            placeholder="Enter your new password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            type="text"
            placeholder="confirm password"
          />
        </div>
        <button className="main-reset">{loading ? "Loading" : "Reset Password" }</button>
      </form>
    </StyledForgotPassword>
  )
}

export default ResetPassword
