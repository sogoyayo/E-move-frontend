import { useState } from 'react'
import ReactDOM from 'react-dom'
import { FaTimes } from 'react-icons/fa'
import { fundWallet } from '../api/api'
import { StyledFundModal } from '../styles/fundModal.styled'
import { useContext } from 'react'
import { ModalContext } from '../context/dashboardContext';

export default function FundModal() {
  const [formData, setFormData] = useState({})
    const { modals, setModals }: any = useContext(ModalContext);


  const handleClick = () => {
    setModals({...modals, fundwallet: false})
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const fundResponse: any = await fundWallet(formData)
    if (fundResponse.status === 200) {
      window.location.href = fundResponse.data.authorization_url
    }
  }

  const handleChange = (e: any) => {
    // setAmount(e.target.value)
    const fundRequest = { amount: e.target.value }
    setFormData(fundRequest)
    // setFormData(400)
  }
  return ReactDOM.createPortal(
    <StyledFundModal>
      <div className="modal-backdrop">
        <div className="modal">
          <div className='close'>
          <FaTimes onClick={handleClick}  />
          </div>
          <form onSubmit={handleSubmit}>
            <h2>Fund Wallet</h2>
            <hr />
            <div className="form-group1">
              <label>Amount</label>
              <div className="input">
                <input
                  onChange={handleChange}
                  type="number"
                  name="amount"
                  placeholder="Enter amount"
                />
              </div>
            </div>
            <button className="button" type="submit">
              Continue
            </button>
          </form>
        </div>
      </div>
    </StyledFundModal>,
    document.body
  )
}
