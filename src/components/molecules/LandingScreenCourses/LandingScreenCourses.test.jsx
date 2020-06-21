import React from 'react'
import { render } from '@testing-library/react'
import LandingScreenCourses from '.'

describe('LandingScreenCourses', () => {
  it('creates landing screen courses', () => {
    const { asFragment } = render(<LandingScreenCourses />)
    expect(asFragment()).toMatchSnapshot()
  })
})
