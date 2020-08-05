import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'

import Footer from '../../atoms/Footer'
import Header from '../../molecules/Header'

const LayoutWrapper = ({ children }) => {
  return (
    <Container fluid as="main" className="p-sm-0">
      <Header />
      <Row>
        <Col className="inner-page-wrapper">{children}</Col>
      </Row>
      <Footer />
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
