import React from 'react'
import { render } from '@testing-library/react'
import SignUp from '.'

xdescribe('SignUp', () => {
  it('creates sign up content', () => {
    const { asFragment } = render(<SignUp />)
    expect(asFragment()).toMatchSnapshot()
  })
})
