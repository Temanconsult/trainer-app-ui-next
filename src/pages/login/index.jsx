import React from 'react'
import { Row, Col } from 'react-bootstrap'
import LoginForm from '../../components/organisms/LoginForm'

const Login = () => {
  return (
    <Row>
      <Col sm={0} md={0} lg={6} />
      <Col sm={12} md={12} lg={6}>
        <LoginForm />
      </Col>
    </Row>
  )
}

export default Login
