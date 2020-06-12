import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import routeTo from '../../../utils/routeTo'

const LandingScreenHeader = () => {
  return (
    <Navbar bg="light" expand="lg" className="mt-sm-4">
      <Navbar.Brand onClick={() => routeTo('/')}>Best Tutors</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => routeTo('/')}>Home</Nav.Link>
          <Nav.Link onClick={() => routeTo('/about')}>About</Nav.Link>
          <Nav.Link onClick={() => routeTo('/courses')}>Courses</Nav.Link>
          <Nav.Link onClick={() => routeTo('/tutors')}>Tutors</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link onClick={() => routeTo('/signup')}>
            Become and Instructor
          </Nav.Link>
          <Button
            variant="outline-primary"
            className="mr-lg-3 mb-lg-0 mb-sm-3"
            onClick={() => routeTo('/login')}
          >
            Login
          </Button>
          <Button variant="primary" onClick={() => routeTo('/signup')}>
            SignUp
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default LandingScreenHeader
