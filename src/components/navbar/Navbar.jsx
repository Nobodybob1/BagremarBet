import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import './navbar.scss';
import { useState } from 'react';

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false)

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => {
      window.onscroll = null
    }
  }

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="container">
        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="react" />
          <span>Homepage</span>
          <span>Games</span>
          <span>Dogs</span>
          <span>Lucky 6</span>
        </div>
        <div className="right">
          <Search className='icon' />
          <Notifications className='icon' />
          <img src="https://cdn.worldvectorlogo.com/logos/react-1.svg" alt="react" />
          <div className="profile">
            <ArrowDropDown className='icon' />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar