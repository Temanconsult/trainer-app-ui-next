import React from 'react'
import { Row, Col, ResponsiveEmbed } from 'react-bootstrap'
import SignUpForm from '../../components/organisms/SignUpForm'
import tutors from '../../assets/images/tutor.svg'

const SignUp = () => {
  return (
    <Row>
      <Col sm={0} md={0} lg={6} className="d-none d-md-block">
        <ResponsiveEmbed aspectRatio="16by9">
          <embed type="image/svg+xml" src={tutors} />
        </ResponsiveEmbed>
      </Col>
      <Col sm={12} md={12} lg={6}>
        <SignUpForm />
      </Col>
    </Row>
  )
}

export default SignUp
