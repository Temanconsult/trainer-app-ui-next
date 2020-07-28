import React from 'react'
import { render } from '@testing-library/react'
import LayoutWrapper from '.'

describe('LayoutWrapper', () => {
  it('creates layout wrapper', () => {
    const { asFragment } = render(
      <LayoutWrapper>
        <div />
      </LayoutWrapper>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
