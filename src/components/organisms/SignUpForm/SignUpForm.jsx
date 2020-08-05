import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useMutation } from '@apollo/react-hooks'
import { Form, Button, Col, InputGroup, Alert, Row } from 'react-bootstrap'
import { Formik } from 'formik'
import signUpSchema from '../../../utils/yupSchema/signUpSchema'
import CREATE_USER from '../../../utils/apollo/tags/createUser'

const SignUpForm = () => {
  const [createUserOnSubmit, { data }] = useMutation(CREATE_USER)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const onSubmit = (formData) => {
    createUserOnSubmit({
      variables: {
        firstname: formData.firstname,
        lastname: formData.lastname,
        username: formData.username,
        email: formData.email,
        password: formData.password,
      },
    })
  }

  useEffect(() => {
    if (data && !data.createUser.error) {
      setShowConfirmation(true)
    }
  }, [data])

  return (
    <div className="full-width">
      {showConfirmation ? (
        <Alert variant="success">
          <Alert.Heading>Congratulations!</Alert.Heading>
          <hr />
          <p>
            Your signup was successful, please check your email to continue.
          </p>
        </Alert>
      ) : (
        <>
          {data && data.createUser.error && (
            <Alert variant="danger">
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <hr />
              {data.createUser.error.split(',').map((error) => (
                <p>{error}</p>
              ))}
            </Alert>
          )}
          <Formik
            validationSchema={signUpSchema}
            onSubmit={onSubmit}
            validateOnChange={false}
            initialValues={{}}
          >
            {({ handleSubmit, handleChange, values, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col} controlId="validationFormikFirstname">
                    <Form.Control
                      type="text"
                      placeholder="Firstname"
                      name="firstname"
                      value={values.firstname}
                      onChange={handleChange}
                      isInvalid={!!errors.firstname}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.firstname}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="validationFormikLastname">
                    <Form.Control
                      type="text"
                      placeholder="Lastname"
                      name="lastname"
                      value={values.lastname}
                      onChange={handleChange}
                      isInvalid={!!errors.lastname}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.lastname}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="validationFormikUsername">
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend">
                          @
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        isInvalid={!!errors.username}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.username}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="validationFormikEmail">
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
                  <Form.Group
                    as={Col}
                    controlId="validationFormiConfirmPassword"
                  >
                    <InputGroup>
                      <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmpassword"
                        value={values.confirmpassword}
                        onChange={handleChange}
                        isInvalid={!!errors.confirmpassword}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.confirmpassword}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Form.Row>

                <Form.Group>
                  <Form.Check
                    required
                    type="switch"
                    name="terms"
                    label="Agree to Terms and Conditions"
                    onChange={handleChange}
                    isInvalid={errors.terms}
                    feedback={errors.terms}
                    id="validationFormikTerms"
                  />
                </Form.Group>
                <Button type="submit" size="lg" className="rounded" block>
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>
          <Row>
            <Col className="mt-sm-2">
              <Button
                size="lg"
                variant="outline-primary"
                className="rounded"
                block
                disabled
              >
                Sign Up With Google
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="mt-sm-2">
              <Button size="lg" className="rounded" block disabled>
                Sign Up With Facebook
              </Button>
            </Col>
          </Row>

          <Col className="mt-sm-2">
            <span>Already have an account? </span>
            <Link href="/login">Login</Link>
          </Col>
        </>
      )}
    </div>
  )
}

export default SignUpForm
