import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { getAllRoutes, getSingleDriver, updateDriver } from '../../api/api'
import { DriverType, Ride } from '../../interfaces/apiTypes'
import Button from './button'
import Driver from './driver'
import { StyledDiv, StyledForm } from './styles/form.styled'

export default function Edit({ id }: any) {
  // const navigate = useNavigate()
  const [driverDetails, setDriverDetails] = useState<DriverType | null>(null)
  const [myRoutes, setMyRoutes] = useState<Ride[]>([])
  const [fullName, setFullName] = useState(driverDetails?.fullName)
  const [operationRoute, setOperationRoute] = useState(
    driverDetails?.operationRoute
  )
  const [phone, setPhone] = useState(driverDetails?.phone)
  const [accountNo, setAccountNo] = useState(driverDetails?.accountNo)
  const [photo, setPhoto] = useState({})
  const [driverId, setDriverId] = useState({})
  const [showAllDrivers, setShowAllDrivers] = useState(false)

  const handlePhotoChange = (e: any) => {
    setPhoto(e.target.files ? e.target.files[0] : null)
  }

  const handleIdChange = (e: any) => {
    setDriverId(e.target.files ? e.target.files[0] : null)
  }

  const handleNameChange = (e: any) => {
    setFullName(e.target.value)
  }

  const handleRouteChange = (e: any) => {
    setOperationRoute(e.target.value)
  }

  const handleAccountChange = (e: any) => {
    setAccountNo(e.target.value)
  }

  const handlePhoneChange = (e: any) => {
    setPhone(e.target.value)
  }

  useEffect(() => {
    const res = async () => {
      const routesResponse: any = await getAllRoutes()
      const routes = routesResponse.data
      setMyRoutes(routes)
      const singleDriverResponse: any = await getSingleDriver(id)
      // const defRoute = routes.find(
      //   (route: any) =>
      //     `${route.pickup} - ${route.destination}` ===
      //     singleDriverResponse.data.data.operationRoute
      // )

      // const routeId = defRoute ? defRoute._id : ''
      setDriverDetails(singleDriverResponse.data.data)
      setFullName(singleDriverResponse.data.data.fullName)
      setOperationRoute(singleDriverResponse.data.data.operationRoute)
      setPhone(singleDriverResponse.data.data.phone)
      setAccountNo(singleDriverResponse.data.data.accountNo)
      setPhoto(singleDriverResponse.data.data.photo)
      setDriverId(singleDriverResponse.data.data.driverId)
    }

    res()
  }, [])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const formData = new FormData()
    // @ts-ignore
    formData.append('fullName', fullName)
    // @ts-ignore
    formData.append('operationRoute', operationRoute)
    formData.append('phone', phone)
    formData.append('accountNo', accountNo)
    // @ts-ignore
    formData.append('photo', photo)
    // @ts-ignore
    formData.append('driverId', driverId)

    const result = Object.fromEntries(formData.entries())

    const updateResponse: any = await updateDriver(result, id)
    if (updateResponse.data.status === 'success') {
      setShowAllDrivers(true)
    }
  }

  return (
    <>
      {showAllDrivers ? (
        <Driver />
      ) : (
        <StyledDiv>
          <h1 className="header">Update Driver</h1>
          <StyledForm onSubmit={handleSubmit}>
            <div className="field">
              <label className="label" htmlFor="name">
                Full Name
              </label>
              <div className="inputbox">
                <input
                  type="text"
                  placeholder="Enter your full name"
                  name="fullName"
                  defaultValue={driverDetails?.fullName}
                  onChange={handleNameChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="route">
                Route of operation
              </label>
              <div className="inputbox">
                <select
                  className="route"
                  name="operationRoute"
                  defaultValue={driverDetails?.operationRoute}
                  onChange={handleRouteChange}
                >
                  <option
                    className="placeholder"
                    value={driverDetails?.operationRoute}
                  >
                    {driverDetails?.operationRoute}
                  </option>
                  {myRoutes &&
                    myRoutes.map((route: any) => (
                      <option
                        key={route._id}
                        value={`${route.pickup} - ${route.destination}`}
                      >
                        {route.pickup} - {route.destination}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="phone">
                Phone number
              </label>
              <div className="inputbox">
                <input
                  className="phone"
                  type="text"
                  placeholder="Enter your phone number"
                  name="phone"
                  defaultValue={driverDetails?.phone}
                  onChange={handlePhoneChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="Account">
                Account Number
              </label>
              <div className="inputbox">
                <input
                  className="account"
                  type="number"
                  placeholder="Type your account number"
                  name="accountNo"
                  defaultValue={driverDetails?.accountNo}
                  onChange={handleAccountChange}
                />
              </div>
            </div>
            <div className="ID-field">
              <label className="label" htmlFor="files">
                Upload a valid ID
              </label>
              <div className="field1">
                <div className="photobox">
                  <label htmlFor="files" className="btn">
                    Upload
                  </label>
                  <input
                    id="driverId"
                    // style={{ visibility: 'hidden' }}
                    type="file"
                    name="driverId"
                    defaultValue={driverDetails?.driverId}
                    accept="image/png, image/jpeg"
                    onChange={handleIdChange}
                  />
                </div>
              </div>
            </div>
            <div className="pho-field">
              <label className="label" htmlFor="files">
                Upload photo
              </label>
              <div className="field1">
                <div className="photobox">
                  <label htmlFor="files" className="btn">
                    Upload
                  </label>
                  <input
                    id="photo"
                    // style={{ visibility: 'hidden' }}
                    type="file"
                    name="photo"
                    defaultValue={driverDetails?.photo}
                    onChange={handlePhotoChange}
                  />
                </div>
              </div>
            </div>
            <Button formText="Update Driver" text={''} bookTrip={''} />
          </StyledForm>
        </StyledDiv>
      )}
    </>
  )
}
