import React from 'react'
import { Row, Col } from 'react-bootstrap'
import SignUpForm from '../../components/organisms/SignUpForm'

const SignUp = () => {
  return (
    <Row>
      <Col sm={0} md={0} lg={6} />
      <Col sm={12} md={12} lg={6}>
        <SignUpForm />
      </Col>
    </Row>
  )
}

export default SignUp
