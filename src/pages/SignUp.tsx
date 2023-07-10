import { useContext, useState } from 'react'
import { signUpUser } from '../api/api'
import { Link, useNavigate } from 'react-router-dom'
import { StyledSignUpPage } from '../styles/StyledSignupPage'
import image1 from '../images/image1.png'
import Road from '../images/Road.png'
import { AiOutlineUser } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import { MdOutlinePhone } from 'react-icons/md'
import { CgLock } from 'react-icons/cg'
import { BsGenderAmbiguous } from 'react-icons/bs'
import { SlCalender } from 'react-icons/sl'
import { UserContext } from '../context/userContext'
import { PulseLoader  } from 'react-spinners'


export default function SignUp() {
  const { setUser }: any = useContext(UserContext);
  const [signUpData, setSignUpData] = useState({})
  const [error, setError] = useState<string>('')
  const [loading, setIsloading] = useState(false);

  const navigate = useNavigate()

  const updateSignUpData = (e: any) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    })
    setError('')
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsloading(true);
    const signUpResponse: any = await signUpUser(signUpData)
    if (signUpResponse.response) {
      setIsloading(false);
      const { data } = signUpResponse.response
      if (data.message) {
        setError(data.message)
      } else if (data.errors) {
        const dataErrors = Object.keys(data.errors)
        dataErrors.forEach(() => {
          setError('error2')
        })
      }
      return
    }
    const { data } = signUpResponse
    localStorage.setItem('userToken', JSON.stringify(data))
    setUser(data)
    if (data.status === 'success') {
      navigate(`/verify-email`)
    } else {
      navigate('/')
    }
  }

  const renderError = () => {
    setTimeout(() => {
      setError('')
    }, 5000)
    return <p style={{ color: 'red' }}>{error}</p>
  }

  return (
    <StyledSignUpPage>
        <div className="form-container">
          <div className='logo-header'>
            <img src={Road} alt="" />
            <h1>E-Move</h1>
          </div>
          <div className="form">
            <h2>Create your account</h2>
            <div className="form-group1">
              <label>Full Name</label>
              <div className="input">
                <AiOutlineUser className="icon" />
                <input
                  onChange={updateSignUpData}
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                />
              </div>
            </div>

            <div className="form-group1">
              <label>Email</label>
              <div className="input">
                <HiOutlineMail className="icon" />
                <input
                  onChange={updateSignUpData}
                  type="email"
                  placeholder="email"
                  name="email"
                />
              </div>
            </div>

            <div className="form-group1">
              <label>Phone Number</label>
              <div className="input">
                <MdOutlinePhone className="icon" />
                <input
                  onChange={updateSignUpData}
                  type="number"
                  placeholder="Mobile Number"
                  name="phone"
                />
              </div>
            </div>

            <div className="form-group1">
              <label>Gender</label>
              <div className="input">
                <BsGenderAmbiguous className="icon" />
                <select
                  name="gender"
                  className="select"
                  onChange={updateSignUpData}
                >
                  <option value="select">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div className="form-group1">
              <label>Date of Birth</label>
              <div className="input">
                <SlCalender className="icon" />
                <input
                  onChange={updateSignUpData}
                  type="date"
                  placeholder="Date of birth"
                  name="DOB"
                />
              </div>
            </div>

            <div className="form-group1">
              <label>Password</label>
              <div className="input">
                <CgLock className="icon" />
                <input
                  onChange={updateSignUpData}
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </div>
            </div>
          <button onClick={handleSubmit}>{loading ? <PulseLoader color="#fff" /> : "Sign up" }</button>
          </div>
          <div className='error'>{error && renderError()}</div>
          <div className="para">
            <p>
              Already have an account,{' '}
              <Link to="/login" className="link">
                Log in
              </Link>
            </p>
          </div>
        </div>

        <div className="image-container">
          <img src={image1} alt="" />
        </div>
    </StyledSignUpPage>
  )
}
