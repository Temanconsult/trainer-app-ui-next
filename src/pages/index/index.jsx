import React, { useState, useEffect } from 'react'
import PageTitle from '../../components/organisms/PageTitle'
import LandingScreen from '../../components/organisms/LandingScreen'
import Dashboard from '../../components/organisms/Dashboard'
import LoaderWrapper from '../../components/atoms/LoaderWrapper'
import userSignedin from '../../utils/sessionUtils'

const Home = () => {
  const [userSessionPresent, setuserSessionPresent] = useState(false)
  const [loading, setloading] = useState(true)

  useEffect(() => {
    setloading(true)
    setuserSessionPresent(userSignedin())
    setloading(false)
  }, [])

  useEffect(() => {
    setloading(false)
  }, [userSessionPresent])

  return (
    <LoaderWrapper loading={loading}>
      <PageTitle title="Best Tutors" />
      {userSessionPresent ? <Dashboard /> : <LandingScreen />}
    </LoaderWrapper>
  )
}

export default Home
