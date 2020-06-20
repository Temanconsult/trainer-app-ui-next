import React from 'react'
import { render } from '@testing-library/react'
import LoginForm from '.'

describe('LoginForm', () => {
  xit('creates log in form', () => {
    const { asFragment } = render(<LoginForm />)
    expect(asFragment()).toMatchSnapshot()
  })
})
