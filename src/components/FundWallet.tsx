import { useEffect, useState } from 'react'
import { getUserDetails } from '../api/api'
import { StyledFundWallet } from '../styles/fundWallet.styled'
import FundModal from './FundModal'
import EmptyVector from '../images/EmptyVector.png'
import Transaction from './Transaction'
import { TransactionType } from '../interfaces/apiTypes'
import { useContext } from 'react'
import { ModalContext } from '../context/dashboardContext'
import { BeatLoader } from 'react-spinners'
import axios from '../api/axios'
import useFetch from '../hooks/useFetch'

export default function FundWallet() {
  const { transactions } = useFetch()
  const { modals, setModals }: any = useContext(ModalContext)
  const { fundwallet } = modals
  const [loading, setIsloading] = useState(false)
  const [trans, setTrans] = useState<TransactionType[] | null>(null)
  const [userDetails, setUserDetails] = useState<any>({})

  const handleClick = () => {
    setModals({ ...modals, fundwallet: true })
  }
  useEffect(() => {
    if (transactions?.length === 0) {
      setTrans(null)
    }
    setTrans(transactions)
  }, [transactions])

  const handleClear = () => {
    setTrans(null)
  }

  useEffect(() => {
    let stringToken: string = localStorage.getItem('userToken') as string
    let token = JSON.parse(stringToken).loginToken
    const res = async () => {
      setIsloading(true)
      const getUserResponse: any = await getUserDetails()
      if (getUserResponse) {
        setIsloading(false)
        setUserDetails(getUserResponse.data)
        const transactionResponse = await axios.get('/users/transactions', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })

        const transactions = transactionResponse.data.reverse()
        if (transactions?.length === 0) {
          setTrans(null)
        } else {
          setTrans(transactions)
        }
      }
    }
      res()

  }, [])

  return (
    <section>
      {fundwallet && <FundModal />}
      <StyledFundWallet>
        <div className="container">
          <h1 className="header">Wallet</h1>
          <div className="box">
            <div className="balance">
              <p>Available amount</p>
              {loading ? (
                <BeatLoader color="#F79009" />
              ) : (
                <h1>NGN {userDetails?.user?.walletBalance}</h1>
              )}
            </div>

            <button onClick={handleClick}>Fund wallet</button>
          </div>
          <div className="middle">
            <p className="left-para">Activity</p>
            <p className="right-para" onClick={handleClear}>
              Clear all
            </p>
          </div>
          {trans ? (
            <div className="trans-bottom">
              <Transaction />
            </div>
          ) : (
            <div className="bottom">
              <img src={EmptyVector} alt="" />
              <p className="top-para">No transaction</p>
              <p className="bottom-para">
                You have not made any transaction yet
              </p>
            </div>
          )}
        </div>
      </StyledFundWallet>
    </section>
  )
}
