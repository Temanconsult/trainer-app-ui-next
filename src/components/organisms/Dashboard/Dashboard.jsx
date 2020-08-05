import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import LoaderWrapper from '../../atoms/LoaderWrapper'
import CoursesList from '../../molecules/CoursesList'
import coursesQuery from '../../../graphql/queries/courses'

const Dashboard = () => {
  const [courses, setCourses] = useState([])
  const { data, loading } = useQuery(coursesQuery)

  useEffect(() => {
    if (data) {
      setCourses(data.allCourses)
    }
  }, [data])

  return (
    <LoaderWrapper loading={loading}>
      <CoursesList courses={courses} className="" />
    </LoaderWrapper>
  )
}

export default Dashboard
