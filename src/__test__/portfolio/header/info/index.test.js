import 'jsdom-global/register'
import React from 'react'
import { mount } from 'enzyme'
import Info from '../../../../portfolio/header/info'

describe('<Info />', () => {
  test('Rendering', () => {
    const component = mount(<Info />)
    expect(component.length).toEqual(1)
  })
})
