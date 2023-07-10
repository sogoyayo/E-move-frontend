import { Actions } from './actions'
import { StyledDriver } from './styles/driver.styled'
// import man2 from '../dashboard/images/man.png'
import Profile from './profile'
import EditAndDelete from './editAndDeleteModal'
import { ModalContext } from '../../context/dashboardContext'
import { useContext, useEffect, useState } from 'react'
import { DriverType } from '../../interfaces/apiTypes'
import { deleteDriver, getAllDrivers } from '../../api/api'
import Edit from './edit'

const Driver = () => {
  const [driver, setDriver] = useState<DriverType | null>(null)
  const { modals, setModals }: any = useContext(ModalContext)
  const { editAndDeleteModal, profileModal } = modals
  // const { drivers } = useFetchData()
  const [myData, setMyData] = useState<any>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [id, setId] = useState('')
  const [showEdit, setShowEdit] = useState(false)
  const itemsPerPage = 10

  useEffect(() => {
    const res = async () => {
      const driversResponse = await getAllDrivers()
      setMyData(driversResponse.data.data.reverse())
      setTotalPages(Math.ceil(driversResponse.data.data.length / itemsPerPage))
    }
    res()
  }, [itemsPerPage])

  const firstItemIndex = (currentPage - 1) * itemsPerPage
  const lastItemIndex = firstItemIndex + itemsPerPage

  const itemsToDisplay = myData
    ? myData.slice(firstItemIndex, lastItemIndex)
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

  const handleShow = (driver: DriverType) => {
    setModals({ ...modals, profileModal: true })
    setDriver(driver)
  }

  const handleCloseProfile = () => {
    setModals({ ...modals, profileModal: false })
  }

  const handleGiveId = (id: string) => {
    setId(id)
  }

  const handleDelete = async (driverId: string) => {
    await deleteDriver(driverId)
    setModals({ ...modals, editAndDeleteModal: false })

    const driversRes = await getAllDrivers()
    setMyData(driversRes.data.data)
  }

  const handleUpdate = (id: string) => {
    setShowEdit(true)
    setId(id)
  }

  return (
    <>
      {showEdit ? (
        <Edit id={id} />
      ) : (
        <StyledDriver>
          {profileModal && (
            <Profile
              driver={driver}
              handleClose={handleCloseProfile}
              handleUpdate={handleUpdate}
            />
          )}
          {editAndDeleteModal && (
            <EditAndDelete
              id={id}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          )}
          <div className="top">
            <h1>All Drivers</h1>
          </div>
          <section>
            <table>
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Route of Operation</th>
                  <th>Phone Number</th>
                  <th>Account Number</th>
                  <th>Valid ID</th>
                  <th>Photo</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {itemsToDisplay &&
                  itemsToDisplay.map((driver: DriverType) => (
                    <tr className="tr" key={driver._id}>
                      <td onClick={() => handleShow(driver)}>
                        {driver.fullName}
                      </td>
                      <td onClick={() => handleShow(driver)}>
                        {driver.operationRoute}
                      </td>
                      <td onClick={() => handleShow(driver)}>{driver.phone}</td>
                      <td onClick={() => handleShow(driver)}>
                        {driver.accountNo}
                      </td>
                      <td onClick={() => handleShow(driver)}>NIN Slip</td>
                      <td className="flex" onClick={() => handleShow(driver)}>
                        <img src={driver.photo} alt="..." />
                      </td>
                      <td
                        className="driver"
                        onClick={() => handleGiveId(driver._id)}
                      >
                        <Actions />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="btns-container">
              <button
                className="prev"
                onClick={handlePrevClick}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                className="next"
                onClick={handleNextClick}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </section>
        </StyledDriver>
      )}
    </>
  )
}

export default Driver