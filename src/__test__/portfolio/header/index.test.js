import 'jsdom-global/register'
import React from 'react'
import { mount } from 'enzyme'
import { Header } from '../../../portfolio/header'
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
      english: true,
      headerData: {
        information: {
          name: 'test',
          occupation: 'test',
          socialMedia: {
            linkedin: 'test',
            github: 'test'
          }
        },
        photoInfo: {
          link: 'test',
          alt: 'test'
        }
      }
    }

    const component = mount(
      <ThemeMock>
        <Header {...data} />
      </ThemeMock>)
    expect(component.length).toBe(1)
  })
})
