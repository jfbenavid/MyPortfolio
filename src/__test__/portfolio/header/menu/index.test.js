import 'jsdom-global/register'
import React from 'react'
import { mount, shallow } from 'enzyme'
import { Menu } from '../../../../portfolio/header/menu'
import each from 'jest-each'

describe('<Menu />', () => {
  test('Rendering with no props', () => {
    try {
      mount(<Menu />)
    } catch (e) {
      expect(e.message).toBe("Cannot read property 'handleLanguageChange' of undefined")
    }
  })

  describe('Rendering with props', () => {
    const data = {
      handleLanguageChange: jest.fn(),
      languageText: false
    }

    each([
      true,
      false
    ]).test('when language text is "%s"', (languageText) => {
      data.languageText = languageText

      const component = mount(<Menu {...data} />)
      expect(component.length).toBe(1)
    })

    test('when click on the link, should work', () => {
      const component = shallow((<Menu {...data} />))
      component
        .find('ul').shallow()
        .find('li').shallow()
        .find('a').shallow()
        .simulate('click')

      expect(data.handleLanguageChange.mock.calls.length).toEqual(1)
    })
  })
})
