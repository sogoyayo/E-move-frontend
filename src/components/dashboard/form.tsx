/*eslint-disable*/
import { useState } from 'react'
import { getAllRoutes, registerDriver } from '../../api/api'
import useFetchData from '../../hooks/useFetch'
// import { DriverType, Route } from '../../interfaces/apiTypes'
import Button from './button'
import Driver from './driver'
import { StyledForm } from './styles/form.styled'
// import image from '../../images/image1.png'
// import { icons } from 'react-icons/lib'

const Form = () => {
  const { routes } = useFetchData()
  // const [error, setError] = useState('')
  const [fullName, setFullName] = useState('')
  const [operationRoute, setOperationRoute] = useState('')
  const [phone, setPhone] = useState('')
  const [accountNo, setAccountNo] = useState('')
  const [photo, setPhoto] = useState({})
  const [id, setId] = useState({})
  const [allDrivers, setAllDrivers] = useState(false)

  const handlePhotoChange = (e: any) => {
    setPhoto(e.target.files[0])
  }

  const handleIdChange = (e: any) => {
    setId(e.target.files[0])
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

  const uploadHandler = async (event: any) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('fullName', fullName)
    formData.append('operationRoute', operationRoute)
    formData.append('phone', phone)
    formData.append('accountNo', accountNo)
    // @ts-ignore
    formData.append('photo', photo)
    // @ts-ignore
    formData.append('driverId', id)

    const result = Object.fromEntries(formData.entries())
    const signUpResponse = await registerDriver(result)
    console.log(signUpResponse.data)
    if (
      signUpResponse.status === 201 &&
      signUpResponse.data.status === 'success'
    ) {
      setAllDrivers(true)
    }
  }

  return (
    <>
      {allDrivers ? (
        <Driver />
      ) : (
        <StyledForm onSubmit={uploadHandler}>
          <div className="field">
            <label className="label" htmlFor="name">
              Full Name
            </label>
            <div className="inputbox">
              <input
                type="text"
                placeholder="Enter your full name"
                name="fullName"
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
                onChange={handleRouteChange}
              >
                <option className="placeholder" value="">
                  Select
                </option>
                {routes &&
                  routes.map((route: any) => (
                    <option key={route._id} value={route._id}>
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
                  onChange={handlePhotoChange}
                />
              </div>
            </div>
          </div>
          <Button bookTrip={''} formText="Sign up driver" text={''} />
        </StyledForm>
      )}
    </>
  )
}

export default Form
