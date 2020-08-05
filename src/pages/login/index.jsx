import React from 'react'
import { Row, Col, ResponsiveEmbed } from 'react-bootstrap'
import LoginForm from '../../components/organisms/LoginForm'
import tutors from '../../assets/images/tutor.svg'

const Login = () => {
  return (
    <Row className="p-sm-4 full-width">
      <Col sm={0} md={0} lg={6} className="d-none d-md-block">
        <ResponsiveEmbed aspectRatio="16by9">
          <embed type="image/svg+xml" src={tutors} />
        </ResponsiveEmbed>
      </Col>
      <Col sm={12} md={12} lg={6}>
        <LoginForm />
      </Col>
    </Row>
  )
}

export default Login
