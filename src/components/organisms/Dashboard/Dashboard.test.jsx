import React from 'react'
import { render } from '@testing-library/react'
import Dashboard from '.'

xdescribe('Dashboard', () => {
  it('creates user dasboard', () => {
    const { asFragment } = render(<Dashboard />)
    expect(asFragment()).toMatchSnapshot()
  })
})
