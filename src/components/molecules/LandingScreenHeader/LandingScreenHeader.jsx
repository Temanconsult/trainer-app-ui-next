import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'

const LandingScreenHeader = () => {
  return (
    <Navbar bg="light" expand="lg" className="mt-sm-4">
      <Navbar.Brand href="#home">Best Tutors</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#link">Courses</Nav.Link>
          <Nav.Link href="#link">Tutors</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#link">Become and Instructor</Nav.Link>
          <Button variant="outline-primary" className="mr-lg-3 mb-lg-0 mb-sm-3">
            Login
          </Button>
          <Button variant="primary">SignUp</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default LandingScreenHeader
