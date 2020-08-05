import React, { useEffect } from 'react'
import Link from 'next/link'
import { useMutation } from '@apollo/react-hooks'
import { Form, Button, Col, InputGroup, Alert } from 'react-bootstrap'
import { Formik } from 'formik'
import loginSchema from '../../../utils/yupSchema/loginSchema'
import LOGIN_USER from '../../../utils/apollo/tags/loginUser'
import routeTo from '../../../utils/routeTo'

const LoginForm = () => {
  const [loginUserOnSubmit, { data }] = useMutation(LOGIN_USER)

  const onSubmit = (formData) => {
    loginUserOnSubmit({
      variables: {
        email: formData.email,
        password: formData.password,
      },
    })
  }

  useEffect(() => {
    if (data && !data.signinUser.error) {
      sessionStorage.setItem('authToken', data.signinUser.jwt)
      sessionStorage.setItem('refreshToken', data.signinUser.user.refreshToken)
      routeTo('/')
    }
  }, [data])

  return (
    <div className="full-width">
      {data && data.signinUser.error && (
        <Alert variant="danger">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <hr />
          {data.signinUser.error.split(',').map((error) => (
            <p>{error}</p>
          ))}
        </Alert>
      )}
      <Formik
        validationSchema={loginSchema}
        onSubmit={onSubmit}
        validateOnChange={false}
        initialValues={{}}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="validationFormikLoginEmail">
                <InputGroup>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="validationFormikPassword">
                <InputGroup>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Col className="mr-auto">
                <Button type="submit" size="lg">
                  Login
                </Button>
              </Col>

              <Col className="mt-sm-2">
                <span>No Account? </span>
                <Link href="/signup">Sign Up</Link>
              </Col>
            </Form.Row>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default LoginForm
