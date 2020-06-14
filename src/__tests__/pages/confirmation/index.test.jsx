import React from 'react'
import { render } from '@testing-library/react'
import Confirmation from '../../../pages/confirmation'

describe('Pages:Confirmation', () => {
  it('renders the confirmation page', () => {
    const { asFragment } = render(<Confirmation />)
    expect(asFragment()).toMatchSnapshot()
  })
})
