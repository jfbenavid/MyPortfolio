import 'jsdom-global/register'
import React from 'react'
import { mount } from 'enzyme'
import { Info } from '../../../../portfolio/header/info'

describe('<Info />', () => {
  test('Rendering with no props', () => {
    try {
      mount(<Info />)
    } catch (e) {
      expect(e.message).toBe("Cannot read property 'name' of undefined")
    }
  })

  test('Rendering with props', () => {
    const data = {
      info: {
        name: 'test',
        occupation: 'test',
        socialMedia: {
          linkedIn: {},
          github: {}
        }
      }
    }

    const component = mount(<Info {...data} />)
    expect(component.length).toBe(1)
  })
})
