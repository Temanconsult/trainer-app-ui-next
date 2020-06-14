import gql from 'graphql-tag'

const CREATE_USER = gql`
  mutation CreateUser(
    $firstname: String!
    $lastname: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      firstname: $firstname
      lastname: $lastname
      username: $username
      authProvider: { credentials: { email: $email, password: $password } }
    ) {
      error
      user {
        refreshToken
      }
    }
  }
`
export default CREATE_USER
