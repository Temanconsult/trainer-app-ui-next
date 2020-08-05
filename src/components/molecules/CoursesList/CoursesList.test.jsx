import React from 'react'
import { render } from '@testing-library/react'
import CoursesList from '.'

describe('CoursesList', () => {
  it('creates courses list', () => {
    const { asFragment } = render(
      <CoursesList
        courses={[
          { name: 'Name 1', description: 'Description 1' },
          { name: 'Name 2', description: 'Description 2' },
        ]}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
