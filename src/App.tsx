import { Routes, Route } from 'react-router-dom'
import { Admin,User } from './protected/protected'
import Dashboard from './components/dashboard/main'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { useEffect, useState } from 'react';
import { UserContext } from './context/userContext';
import VerifyEmail from './pages/VerifyEmail';
import VerifyEmailSuccess from './pages/Redirect';
import EmailConfirmation from './pages/EmailConfirm';
import { ForgotPassword } from './pages/Forgotpassword';
import ResetPassword from './pages/ResetPassword';
import UserDashboard from './pages/userDashboard';



function App() {
  const [user, setUser] = useState(null);

 


  useEffect(() => {
    const user = localStorage.getItem("userToken");
    if (user) {
      setUser(JSON.parse(user))
    }
  },[])



  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route
            path="/verify-forgotten-password"
            element={<EmailConfirmation />}
          />
          <Route path="/reset-password/:id" element={<ResetPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/users/verify" element={<VerifyEmailSuccess />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin/*"
            element={
              <Admin>
                <Dashboard />
              </Admin>
              
            }
          />
          <Route
            path="/user/*"
            element={
              <User>
                <UserDashboard />
              </User>
            }
          />
        </Routes>
      </div>
    </UserContext.Provider>
  )
}

export default App
