import React from 'react'
import { render } from '@testing-library/react'
import Login from '../../../pages/login'

xdescribe('Pages:Login', () => {
  it('renders the Login page', () => {
    const { asFragment } = render(<Login />)
    expect(asFragment()).toMatchSnapshot()
  })
})
