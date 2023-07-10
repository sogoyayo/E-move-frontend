/*eslint-disable*/
// import useFetch from '../hooks/useFetch'
import { StyledTransaction } from '../styles/transaction.styled';
import React, { useEffect, useState } from 'react'
import { getTransactions } from '../api/api'
import { TransactionType } from '../interfaces/apiTypes'

export default function () {

  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const itemsPerPage = 10
  const [transactions, setTransactions] = useState<any>(null)

  useEffect(() => {
    const res = async () => {
      const transactionResponse: any = await getTransactions()
      setTransactions(transactionResponse.data.reverse())
      setTotalPages(Math.ceil(transactionResponse.data.length / 10))
    }
    res()
  }, [])

  const firstItemIndex = (currentPage - 1) * itemsPerPage
  const lastItemIndex = firstItemIndex + itemsPerPage

  const itemsToDisplay = transactions
    ? transactions.slice(firstItemIndex, lastItemIndex)
    : null

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <StyledTransaction>
      <table>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Transaction Type</th>
            <th>Amount(#)</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {itemsToDisplay &&
            itemsToDisplay.map((transaction: TransactionType, index: number) => (
              <tr key={transaction._id} className="tr">
                <td>{firstItemIndex + (index + 1)}</td>
                <td>{transaction.transactionType}</td>
                <td>{transaction.amount / 100}</td>
                <td>{new Date(transaction.createdAt).toDateString()}</td>
                <td>{transaction.status}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <button onClick={handlePrevClick} disabled={currentPage === 1}>Previous</button>
      <button onClick={handleNextClick} disabled={currentPage === totalPages}>Next</button>
    </StyledTransaction>
  )
}
