import React from 'react'
import { render } from '@testing-library/react'
import CourseInfoCard from '.'

describe('CourseInfoCard', () => {
  it('creates course info card', () => {
    const { asFragment } = render(
      <CourseInfoCard
        course={{
          title: 'Cloud',
          body:
            'Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user.',
          image: 'devops',
          bg: 'light',
        }}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
