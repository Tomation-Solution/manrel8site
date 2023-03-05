import React, { useState } from 'react'
import './Navbar.scss'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import TranslateIcon from '@mui/icons-material/Translate'
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
            <div className='listd'>
              <Link
                className={location === 'about' ? 'list active' : 'list'}
                to='/about'
              >
                About Us
              </Link>
            </div>
            <div className='listd'>
              <Link
                className={location === 'services' ? 'list active' : 'list'}
                to='/Services'
              >
                Services
              </Link>
            </div>
            <div className='listd'>
              <Link className='list' to='/insight'>
                Insights
              </Link>
            </div>
            <div className='listd'>
              <Link
                className={
                  location.includes('membership') ? 'list active' : 'list'
                }
                to='/become-membership'
              >
                Membership
              </Link>
            </div>
            <div className='listd'>
              <Link className='list' to='/'>
                Our Structure
              </Link>
            </div>
            <div className='listd ai'>
              <TranslateIcon className='list2' />
            </div>
            <button
              className='listd'
              onClick={() => navigate('/become-membership')}
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
