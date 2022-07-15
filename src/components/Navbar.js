import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
         <h1>Logo</h1>
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
        </ul>
      </div>
    </nav>
    
    
    </>
  )
}

export default Navbar
