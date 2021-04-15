import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { A } from 'hookrouter'


function Header() {
    return(
        <div className="header">
    <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/home">Piano Play</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
    <A href="/home"><Nav.Link>Home</Nav.Link></A>
    <A href="/play"><Nav.Link>Play</Nav.Link></A>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
    )
}

export default Header