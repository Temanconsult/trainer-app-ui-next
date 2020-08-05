import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import routeTo from '../../../utils/routeTo'
import logo from '../../../assets/images/logo.svg'
import userSignedin from '../../../utils/sessionUtils'

const LandingScreenHeader = () => {
  const [userSessionPresent, setuserSessionPresent] = useState(false)

  useEffect(() => {
    setuserSessionPresent(userSignedin())
  }, [])
  return (
    <Navbar bg="light" expand="lg" className="mt-sm-4 landing-screen-header">
      <Navbar.Brand onClick={() => routeTo('/')} className="logo">
        <img type="image/svg+xml" src={logo} alt="best tutor" />
      </Navbar.Brand>
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
          {!userSessionPresent && (
            <>
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
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default LandingScreenHeader
