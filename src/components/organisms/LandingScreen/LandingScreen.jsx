import React from 'react'
import LandingScreenHeader from '../../molecules/LandingScreenHeader'
import LandingScreenJumbotron from '../../molecules/LandingScreenJumbotron'
import LandingScreenCourses from '../../molecules/LandingScreenCourses'
import Footer from '../../atoms/Footer'

const LandingScreen = () => {
  return (
    <>
      <LandingScreenHeader />
      <LandingScreenJumbotron />
      <LandingScreenCourses />
      <Footer />
    </>
  )
}

export default LandingScreen
