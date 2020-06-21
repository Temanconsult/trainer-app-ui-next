import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'

const CourseInfoCard = ({ course }) => {
  return (
    <Card
      className="mb-4 mr-md-2 mr-lg-4 mr-sm-0"
      text={course.bg === 'light' ? 'dark' : 'white'}
      bg={course.bg}
      style={{ maxWidth: '30rem' }}
    >
      <Card.Body>
        <Card.Img variant="top" src={course.image} />
        <Card.Title>{course.title}</Card.Title>
        <Card.Text>{course.body}</Card.Text>
      </Card.Body>
    </Card>
  )
}

CourseInfoCard.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
}

export default CourseInfoCard
