import React from 'react'
import { Row } from 'react-bootstrap'

import CourseInfoCard from '../../atoms/CourseInfoCard'
import courses from '../../../utils/courses'

const LandingScreenCourses = () => {
  return (
    <Row className="landing-screen-courses mt-4 mx-auto ">
      <h2>Courses</h2>
      <Row className="courses">
        {courses.map((course) => {
          return <CourseInfoCard key={course.title} course={course} />
        })}
      </Row>
    </Row>
  )
}

export default LandingScreenCourses
