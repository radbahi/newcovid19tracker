import { Navbar, Nav } from 'react-bootstrap'
import React from 'react';

const NavBar = () => {
    return (
        <Navbar className="navbar" >
            <Navbar.Brand href="/">COVID-19 Tracker 
       <img
        alt=""
        src="./public/covidLogo.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
         />
            </Navbar.Brand>   
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                <Nav.Link href="/login"> Login </Nav.Link>
                <Nav.Link href="/register"> Register </Nav.Link>
                <Nav.Link href="/about"> About </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;