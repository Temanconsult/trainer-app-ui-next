import React from 'react'
import { render } from '@testing-library/react'
import LoaderWrapper from '.'

describe('LoaderWrapper', () => {
  it('creates loader wrapper loading state', () => {
    const { asFragment } = render(
      <LoaderWrapper loading>
        <div>Loading </div>
      </LoaderWrapper>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('creates loader wrapper none loading state', () => {
    const { asFragment } = render(
      <LoaderWrapper>
        <div>Loaded </div>
      </LoaderWrapper>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
