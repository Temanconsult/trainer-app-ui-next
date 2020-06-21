import React from 'react'
import { render } from '@testing-library/react'
import Footer from '.'

describe('Footer', () => {
  it('creates footer', () => {
    const { asFragment } = render(<Footer />)
    expect(asFragment()).toMatchSnapshot()
  })
})
