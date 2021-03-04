import { Navbar, Nav } from 'react-bootstrap'
import React from 'react';

const NavBar = () => {
    return (
        <Navbar bg="light" variant="light" >
            <Navbar.Brand href="/">App Name Here</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="app-links">
                <Nav.Link href="/login"> Login </Nav.Link>
                <Nav.Link href="/register"> Register </Nav.Link>
                <Nav.Link href="/about"> About </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;