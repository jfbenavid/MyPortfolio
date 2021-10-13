import 'jsdom-global/register'
import React from 'react'
import { mount } from 'enzyme'
import { Header } from '../../../portfolio/header'
import { ThemeProvider } from 'styled-components'

describe('<Header />', () => {
  test('Rendering with no props', () => {
    try {
      mount(<Header />)
    } catch (e) {
      expect(e.message).toBe("Cannot read property 'photoInfo' of undefined")
    }
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

    const theme = {
      colors: {
        header: 'white',
        background: 'cyan',
        text: 'red'
      }
    }

    const component = mount(
      <ThemeProvider theme={theme}>
        <Header {...data} />
      </ThemeProvider>)
    expect(component.length).toBe(1)
  })
})
