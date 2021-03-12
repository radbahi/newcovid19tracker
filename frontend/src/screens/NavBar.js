import { Navbar, Nav, Button } from 'react-bootstrap'
import React from 'react'
import logo from '../covidLogo.png'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../actions/userActions.js'

const NavBar = () => {
  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch(logout())
  }

  const userState = useSelector((state) => state.userState)

  return (
    <Navbar className='navbar'>
      <Navbar.Brand className='navbar-brand' href='/'>
        <img alt='' src={logo} width='55' height='55' className='logo' />
      </Navbar.Brand>
      <h1 className='navbar-title' href='/'>
        COVID-19 Tracker
      </h1>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav>
          {userState ? (
            <Button className='logoutButton' onClick={logoutHandler}>
              {' '}
              Logout{' '}
            </Button>
          ) : null}
          <Nav.Link href='/aboutus'> About us </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
