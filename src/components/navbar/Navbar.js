import React from 'react'
import "./navbar.css"
import { auth } from '../../firebase.js';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))

  const signOut = async () => {
    await auth.signOut()
    localStorage.removeItem('user')
    navigate('/')
  }

  return (
    <div className='nav-container'>
      <div>
        {!user && <a href='/'>Sign in</a>}
        {!user && <a href='/sign-up'>Sign up</a>}
        <a href='/calculator'>Calculator</a>
      </div>
      {user && <div style={{ display: 'flex', justifyContent: 'end' }}>
        <p>Welcome, {user?.displayName || user?.email}</p>
        <p onClick={signOut}>Sign out</p>
      </div>}
    </div>
  )
}

export default Navbar