import React from 'react'
import { render } from '@testing-library/react'
import LandingScreenJumbotron from '.'

describe('LandingScreenJumbotron', () => {
  it('creates landing screen jumbotron', () => {
    const { asFragment } = render(<LandingScreenJumbotron />)
    expect(asFragment()).toMatchSnapshot()
  })
})
