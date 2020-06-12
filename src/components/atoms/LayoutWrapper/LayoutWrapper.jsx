import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const LayoutWrapper = ({ children }) => {
  return (
    <Container fluid as="main">
      <Row>
        <Col>{children}</Col>
      </Row>
    </Container>
  )
}

export default LayoutWrapper
