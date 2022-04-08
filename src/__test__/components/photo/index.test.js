/**
 * @jest-environment jsdom
 */
import React from 'react'
import { mount } from 'enzyme'
import { Photo } from '../../../components/photo'
import ErrorBoundary from '../../../util/common/error-boundary'
import ThemeMock from '../../../__mocks__/theme-mock'

describe('<Photo />', () => {
  test('Rendering with no props', () => {
    console.error = jest.fn()
    mount(<ErrorBoundary><Photo /></ErrorBoundary>)
    expect(console.error).toHaveBeenCalled()
  })

  test('Rendering with props', () => {
    const data = {
      link: 'test',
      alt: 'test'
    }

    const component = mount(
      <ThemeMock>
        <Photo {...data} />
      </ThemeMock>)
    expect(component.length).toBe(1)
  })
})
