import { StyledLandingPage } from '../styles/Landing.styled'
import logo from '../components/dashboard/images/logo.png'
import bus from '../components/dashboard/images/bus.png'
import { Link } from 'react-router-dom'
import { FaCaretRight, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function LandingPage() {
  return (
    <StyledLandingPage>
      <header>
        <div className="top-container">
          <div className="logo">
            <img src={logo} alt="..." />
            E-move
          </div>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li className='get-started'>
              <Link  to="/signup">Get Started</Link>
            </li>
          </ul>
        </div>
      </header>

      {/* ....................Hero Section..................... */}

      <section>
        <div className="hero-container">
          <div className="left">
            <h1>Need to go out?</h1>
            <p>
              You no longer need cash! Make payment<br /> to go to your daily routes
              via E-move
            </p>
            <span>How to book a trip</span>
            <ul>
              <li>
                <FaCaretRight className='caret' />
                Pick a route
              </li>
              <li>
                <FaCaretRight className='caret'  />
                Make your booking
              </li>
              <li>
                <FaCaretRight className='caret'  />
                Board a registered vehicle
              </li>
              <li>
                <FaCaretRight className='caret'  />
                make payment
              </li>
              <li>
                <FaCaretRight className='caret'  />
                Arrive at your destination safely
              </li>
            </ul>
          </div>
          <div className="img-box">
            <img src={bus} alt="..." />
          </div>
        </div>
      </section>

      {/* .............Footer....................................... */}

      <footer>
        <div className="ft-container">
          <div className="top">
            <div className='logo'>
              <img src={logo} alt=".../" />
              E-move
            </div>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <hr />
          <div className="bottom">
            <p>All rights reserved &copy; 2023 E-move</p>
            <div className="socials">
              <div className="social-icons">
                <span>
                  <FaInstagram />
                </span>
                <span>
                  <FaTwitter />
                </span>
                <span>
                  <FaYoutube />
                </span>
              </div>
              <div className="email">Help2gmail.com</div>
            </div>
          </div>
        </div>
      </footer>
    </StyledLandingPage>
  )
}
