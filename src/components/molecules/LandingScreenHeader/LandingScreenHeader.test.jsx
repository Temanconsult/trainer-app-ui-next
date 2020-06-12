import React from 'react'
import { render } from '@testing-library/react'
import LandingScreenHeader from '.'

describe('LandingScreenHeader', () => {
  it('creates landingg screen top bar', () => {
    const { asFragment } = render(<LandingScreenHeader />)
    expect(asFragment()).toMatchSnapshot()
  })
})
