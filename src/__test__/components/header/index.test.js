/**
 * @jest-environment jsdom
 */
import React from 'react'
import { mount } from 'enzyme'
import { Header } from '../../../components/header'
import ThemeMock from '../../../__mocks__/theme-mock'
import ErrorBoundary from '../../../util/common/error-boundary'

describe('<Header />', () => {
  test('Rendering with no props', () => {
    console.error = jest.fn()
    mount(<ErrorBoundary><Header /></ErrorBoundary>)
    expect(console.error).toHaveBeenCalled()
  })

  test('Rendering with props', () => {
    const data = {
      handleLanguageChange: jest.fn(),
      isEnglish: true,
      mainInfo: {
        test: {}
      }
    }

    const component = mount(
      <ThemeMock>
        <Header {...data} />
      </ThemeMock>)
    expect(component.length).toBe(1)
  })
})
