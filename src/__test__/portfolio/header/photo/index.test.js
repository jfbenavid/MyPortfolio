import 'jsdom-global/register'
import React from 'react'
import { mount } from 'enzyme'
import { Photo } from '../../../../portfolio/header/photo'

describe('<Photo />', () => {
  test('Rendering with no props', () => {
    try {
      mount(<Photo />)
    } catch (e) {
      expect(e.message).toBe("Cannot read property 'link' of undefined")
    }
  })

  test('Rendering with props', () => {
    const data = {
      photoInfo: {
        link: 'test',
        alt: 'test'
      }
    }

    const component = mount(<Photo {...data} />)
    expect(component.length).toBe(1)
  })
})
