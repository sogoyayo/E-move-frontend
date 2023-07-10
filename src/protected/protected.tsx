import { Navigate } from 'react-router-dom'

export const Admin = ({ children }: any) => {
  let isAdmin = false
  //check if any user is signed.....................
  const user = localStorage.getItem('userToken')
  if (!user) {
    return <Navigate to="/login" />
  }

  //check if signed in user is admin
  const admin = JSON.parse(user).isAdmin
  if (admin) {
    isAdmin = true
  }
  return isAdmin ? children : <Navigate to="/login" />
}

export const User = ({ children }: any) => {
  let nonAdmin = false
  //check if any user is signed.....................
  const user = localStorage.getItem('userToken')
  if (!user) {
    return <Navigate to="/login" />
  }

  //check if signed in user is ordinary user
  const admin = JSON.parse(user).isAdmin
  if (!admin) {
    nonAdmin = true
  }
  return nonAdmin ? children : <Navigate to="/login" />
}
