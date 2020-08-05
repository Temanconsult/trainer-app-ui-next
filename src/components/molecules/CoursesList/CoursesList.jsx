import React from 'react'
import PropTypes from 'prop-types'

import { Row } from 'react-bootstrap'
import CourseInfoCard from '../CourseInfoCard'

const CoursesList = ({ courses, className, showHeading }) => {
  return (
    <Row className={`${className} mt-4 mx-auto`}>
      {showHeading && <h2>Courses</h2>}
      <Row className="courses">
        {courses.map((course) => {
          return <CourseInfoCard key={course.name} course={course} />
        })}
      </Row>
    </Row>
  )
}

CoursesList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  className: PropTypes.string,
  showHeading: PropTypes.bool,
}

CoursesList.defaultProps = {
  courses: [],
  className: '',
  showHeading: false,
}

export default CoursesList
