import BarChart from '../graph'
import { StyledHome } from '../styles/home.styled'
import { FaCarSide } from 'react-icons/fa'
import useFetch from '../../../hooks/useFetch'
import { BeatLoader } from 'react-spinners'
import { useEffect, useState } from 'react'

const Home = () => {
  const [name, setName] = useState('');
    useEffect(() => {
    const user = localStorage.getItem("userToken");
    if (user) {
      const admin = JSON.parse(user);
      setName(admin?.name);
    }
},[])
  const { drivers, passengers, rides, loading, error } = useFetch();
  if (loading) {
    return (
      <StyledHome>
        <div className='loader'>
          <BeatLoader color="#F79009" />
        </div>
    </StyledHome>);
  }
  if (error) {
   return (
      <StyledHome>
       <div className='loader'>
         <h1>Internal Server Error</h1>
        </div>
    </StyledHome>);
  }


  const data: Array<[string, number]> = [
    ['Jan', 15000],
    ['Feb', 18000],
    ['Mar', 20000],
    ['Apr', 10000],
    ['May', 0],
    ['Jun', 0],
    ['Jul', 0],
    ['Aug', 0],
    ['Sep', 0],
    ['Oct', 0],
    ['Nov', 0],
    ['Dec', 0],
  ]

  return (
    <StyledHome>
      <div>
        {name ? <h1>Welcome {name}</h1> : <h1></h1>}
      </div>
      <div className="boxes">
        <div className="box">
          {rides &&
            (<div className="left">
              <h3>{rides?.length}</h3>
              <small>rides</small>
            </div>
          )}
          <div className="icon">
            <FaCarSide />
          </div>
        </div>
        <div className="box">
          {passengers && (
            <div className="left">
              <h3>{passengers?.length}</h3>
              <small>passengers</small>
            </div>
          )}
          <div className="icon">
            <FaCarSide />
          </div>
        </div>
        <div className="box">
          {drivers && (
            <div className="left">
              <h3>{drivers?.length}</h3>
              <small>drivers</small>
            </div>
          )}
          <div className="icon">
            <FaCarSide />
          </div>
        </div>
      </div>
      <BarChart data={data} title="" />
    </StyledHome>
  )
}

export default Home
