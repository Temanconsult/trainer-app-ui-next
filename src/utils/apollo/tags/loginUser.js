import gql from 'graphql-tag'

const LOGIN_USER = gql`
  mutation SignInUser($email: String!, $password: String!) {
    signinUser(credentials: { email: $email, password: $password }) {
      error
      jwt
      user {
        refreshToken
        username
      }
    }
  }
`
export default LOGIN_USER
