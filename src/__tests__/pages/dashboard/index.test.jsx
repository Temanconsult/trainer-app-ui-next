import React from 'react'
import { render } from '@testing-library/react'
import Dashboard from '../../../pages/dashboard'

describe('Pages:Dashboard', () => {
  it('renders the dashboard page', () => {
    const { asFragment } = render(<Dashboard />)
    expect(asFragment()).toMatchSnapshot()
  })
})
