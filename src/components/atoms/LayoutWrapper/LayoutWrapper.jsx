import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'

const LayoutWrapper = ({ children }) => {
  return (
    <Container fluid as="main" className="p-sm-4">
      <Row>
        <Col>{children}</Col>
      </Row>
    </Container>
  )
}

LayoutWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
}

export default LayoutWrapper
