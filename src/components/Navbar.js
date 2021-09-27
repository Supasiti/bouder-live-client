import { PropTypes } from 'prop-types'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Container from '../elements/Container'

const Navbar = (props) => {
  const height = 'height' in props ? props.height : ''
  const [showMenu, setShowMenu] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const history = useHistory()

  const menuHeight = showMenu ? 'h-full' : 'h-0'

  // handle open menu
  const handletoggleMenu = (e) => {
    e.preventDefault()
    if (showMenu) {
      setShowMenu(false)
    } else {
      setShowMenu(true)
    }
  }

  useEffect(() => {
    const userString = localStorage.getItem('user')
    if (!userString) {
      setLoggedIn(false)
    } else {
      setLoggedIn(true)
    }
  }, [])

  // to go dashboard
  const handleGoToDashboard = (e) => {
    e.preventDefault()
    const purpose = JSON.parse(localStorage.getItem('purpose'))
    if (purpose) history.push(`/${purpose}`)
  }

  // logout
  const handleLogOut = (e) => {
    e.preventDefault()
    const savedUser = localStorage.getItem('user')
    const purpose = localStorage.getItem('purpose')
    if (savedUser) {
      localStorage.setItem('user', '')
    }
    if (purpose) {
      localStorage.setItem('purpose', '')
    }
    history.push('/')
  }

  return (
    <header
      className={`${height} fixed z-50 top-0 left-0 right-0
    bg-gradient-to-b from-yellow-500 to-yellow-600`}
    >
      <Container extraClasses="relative px-4 py-2 sm:py-4">
        <nav className="flex space-x-4 justify-between items-center">
          <div className="flex flex-grow justify-center sm:justify-start sm:space-x-4 sm:items-end">
            <h2
              className="text-2xl text-gray-200 font-extralight
              sm:text-3xl"
            >
              <a href="/">Boulder Live</a>
            </h2>

            {/* dashboard */}
            {loggedIn && (
              <button
                type="button"
                className="hidden sm:inline-block text-gray-200 mb-0.5"
                onClick={handleGoToDashboard}
              >
                Dashboard
              </button>
            )}

            {/* scoreboard */}
            <a href="/" className="hidden sm:inline-block text-gray-200 mb-0.5">
              Scoreboard
            </a>
          </div>

          {/* Only allow to log out when a user is logged in */}
          {loggedIn && (
            <div className="hidden sm:inline-block ">
              <button
                type="button"
                className="text-gray-200"
                onClick={handleLogOut}
              >
                Logout
              </button>
            </div>
          )}
        </nav>

        {/* hamburger  */}
        <div
          className="absolute z-50 right-0 top-0 mt-3.5 mr-4 
           text-gray-300 
            sm:hidden"
        >
          <div className="flex justify-end text-xl mb-4">
            <button type="button" onClick={handletoggleMenu}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={`flex flex-col items-end space-y-3
              overflow-hidden 
              transition-all ease-in-out duration-300 ${menuHeight}`}
          >
            <a href="/" className="btn btn-primary">
              Scoreboard
            </a>

            {/* Only allow to go to dashboard when a user is logged in */}
            {loggedIn && (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleGoToDashboard}
              >
                Dashboard
              </button>
            )}

            {/* Only allow to log out when a user is logged in */}
            {loggedIn && (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleLogOut}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </Container>
    </header>
  )
}
Navbar.propTypes = {
  height: PropTypes.string,
}

export default Navbar
