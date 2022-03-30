/**
 * @jest-environment jsdom
 */
import React from 'react'
import { mount } from 'enzyme'
import { Info } from '../../../portfolio/info'
import ErrorBoundary from '../../../util/common/error-boundary'

describe('<Info />', () => {
  test('Rendering with no props', () => {
    console.error = jest.fn()
    mount(<ErrorBoundary><Info /></ErrorBoundary>)
    expect(console.error).toHaveBeenCalled()
  })

  test('Rendering with props', () => {
    const data = {
      name: 'test',
      occupation: 'test',
      socialMedia: {
        linkedIn: {},
        github: {}
      }
    }

    const component = mount(<Info info={data} />)
    expect(component.length).toBe(1)
  })
})
