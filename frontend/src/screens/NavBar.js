import { Navbar, Nav } from 'react-bootstrap'
import React from 'react'
import logo from '../covidLogo.png'

const NavBar = () => {
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
          <Nav.Link href='/login'> Login </Nav.Link>
          <Nav.Link href='/register'> Register </Nav.Link>
          <Nav.Link href='/aboutus'> About us </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
