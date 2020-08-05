import gql from 'graphql-tag'

export default gql`
  query getAllCourses {
    allCourses {
      name
      description
      id
    }
  }
`
