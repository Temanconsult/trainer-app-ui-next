import React from 'react'
import { render } from '@testing-library/react'
import SignUp from '../../../pages/signup'

describe('Pages:SignUp', () => {
  it('renders the Sign Up page', () => {
    const { asFragment } = render(<SignUp />)
    expect(asFragment()).toMatchSnapshot()
  })
})
