import React from 'react'
import { Media, Button, Col, Row, ResponsiveEmbed } from 'react-bootstrap'
import tutors from '../../../assets/images/tutor.svg'

const LandingScreenJumbotron = () => {
  return (
    <Media className="landing-screen-jumbotron mt-4">
      <Media.Body>
        <Row>
          <Col sm={12} md={12} lg={5} className="call-out">
            <h1>Learn with Ease and at your own pace</h1>
            <p className="mt-4">
              Connect with the best minds in any field of study or professional
              cources of your choice and learn the best way you can.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Col>
          <Col sm={0} md={0} lg={7} className="d-none d-md-block">
            <ResponsiveEmbed aspectRatio="16by9">
              <embed type="image/svg+xml" src={tutors} />
            </ResponsiveEmbed>
          </Col>
        </Row>
      </Media.Body>
    </Media>
  )
}

export default LandingScreenJumbotron
