import React from 'react'
import LandingScreenJumbotron from '../../molecules/LandingScreenJumbotron'
import CoursesList from '../../molecules/CoursesList'

import courses from '../../../utils/courses'

const LandingScreen = () => {
  return (
    <>
      <LandingScreenJumbotron />
      <CoursesList
        courses={courses}
        className="landing-screen-courses"
        showHeading
      />
    </>
  )
}

export default LandingScreen
