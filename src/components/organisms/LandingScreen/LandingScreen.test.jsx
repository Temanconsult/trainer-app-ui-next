import React from 'react'
import { render } from '@testing-library/react'
import LandingScreen from '.'

describe('LandingScreen', () => {
  it('creates landing screen', () => {
    const { asFragment } = render(<LandingScreen />)
    expect(asFragment()).toMatchSnapshot()
  })
})
