import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'
import image from '../../../assets/images/pmp.svg'

const CourseInfoCard = ({ course }) => {
  const bg = course.bg || 'light'
  const imageIcon = course.image || image
  return (
    <Card
      className="mb-4 mr-md-2 mr-lg-4 mr-sm-0"
      text={bg === 'light' ? 'dark' : 'white'}
      bg={bg}
      style={{ maxWidth: '30rem' }}
    >
      <Card.Body>
        <Card.Img variant="top" src={imageIcon} />
        <Card.Title>{course.name}</Card.Title>
        <Card.Text>{course.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

CourseInfoCard.propTypes = {
  course: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    bg: PropTypes.string,
    image: PropTypes.string,
  }),
}

CourseInfoCard.defaultProps = {
  course: {
    name: '',
    description: '',
    bg: 'light',
    image,
  },
}

export default CourseInfoCard
