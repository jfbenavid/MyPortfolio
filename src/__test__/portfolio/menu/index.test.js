/**
 * @jest-environment jsdom
 */
import React from 'react'
import { mount, shallow } from 'enzyme'
import { Menu } from '../../../portfolio/menu'
import each from 'jest-each'

describe('<Menu />', () => {
  test('Rendering with no props', () => {
    const comp = mount(<Menu />)
    expect(comp.length).toEqual(1)
  })

  describe('Rendering with props', () => {
    const data = {
      handleLanguageChange: jest.fn(),
      languageText: false
    }

    each([
      [true, 'Español'],
      [false, 'English']
    ]).test('when language text is "%s"', (languageText, response) => {
      data.languageText = languageText
      const component = mount(<Menu {...data} />)

      expect(component.first('a').text()).toContain(response)
    })

    test('when click on the link, should work', () => {
      const component = shallow(<Menu {...data} />)
      component
        .find('ul').shallow()
        .find('li').shallow()
        .find('a').shallow()
        .simulate('click')

      expect(data.handleLanguageChange).toHaveBeenCalled()
    })
  })
})
