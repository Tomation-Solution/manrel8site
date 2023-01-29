import React, { useState } from 'react'
import '../../Styles/Navbar/Navbar.scss'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Logo from '../../images/manlogo2.png'
import { Link, useNavigate } from 'react-router-dom'

function NavBar({ location }) {
  const [handleToggle, setHandleToggle] = useState('false')
  const navigate = useNavigate()
  return (
    <div className={handleToggle ? 'navBar' : 'navBar collapse'}>
      <div className='nav-menu'>
        <div className='logo'>
          <img
            className='img1'
            src={Logo}
            alt=''
            onClick={() => navigate('/')}
          />
        </div>
        <div className='toggle-icon'>
          <div className='menu-icon'>
            {handleToggle ? (
              <MenuIcon
                className='drop-icon'
                onClick={() => setHandleToggle(!handleToggle)}
              />
            ) : (
              <CloseIcon
                className=' drop-icon times'
                onClick={() => setHandleToggle(!handleToggle)}
              />
            )}
          </div>
        </div>
        <div className='nav-list'>
          <div className='nav-row'>
            <Link
              className={location === 'about' ? 'list active' : 'list'}
              to='/about'
            >
              About Me
            </Link>
            <Link
              className={location === 'services' ? 'list active' : 'list'}
              to='/Services'
            >
              Services
            </Link>
            <Link className='list' to='/insight'>
              Insights
            </Link>
            <Link
              className={
                location.includes('membership') ? 'list active' : 'list'
              }
              to='/become-membership'
            >
              Membership
            </Link>
            <Link
              className={location === 'news' ? 'list active' : 'list'}
              to='/News'
            >
              News
            </Link>
            <Link
              className={location === 'events' ? 'list active' : 'list'}
              to='/events'
            >
              Events
            </Link>
            <Link className='list' to='/'>
              Sector
            </Link>
            <Link className='list' to='/'>
              Sign In
            </Link>
            <Link className='list' to='/'>
              <button>Become a Member</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
