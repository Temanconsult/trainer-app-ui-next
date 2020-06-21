import React from 'react'
import { Card, Col, Row, ListGroup } from 'react-bootstrap'

const Footer = () => {
  return (
    <Card className="mt-2 footer" text="white" bg="dark">
      <Card.Body>
        <Row>
          <Col sm={12} md={6} lg={5} className="footer-section">
            <Card.Title>Best Tutor</Card.Title>
            <Card.Text>
              Best tutor provides the platform for instructors and students to
              connect. Instructors will have the opportunity to teach the topics
              of their expertise while students get to learn their desired
              courses from the best minds around. Sign up today and kick off
              that opportunity to start a new carrer or learn more about what
              you already know.
            </Card.Text>
          </Col>
          <Col sm={12} md={3} lg={4} className="footer-section">
            <Card.Title>Contact Us</Card.Title>
            <Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>Phone: +1-612-402-1495</ListGroup.Item>
                <ListGroup.Item>Email: info@besttutor.com</ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Col>
          <Col sm={12} md={3} lg={3} className="footer-section">
            <Card.Title>Our Courses</Card.Title>
            <Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>Scrum Master</ListGroup.Item>
                <ListGroup.Item>Project Management</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>DevOps</ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default Footer
