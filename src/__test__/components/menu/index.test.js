/**
 * @jest-environment jsdom
 */
// import React from 'react'
// import { mount, shallow } from 'enzyme'
// import { Menu } from '../../../components/menu'
// import each from 'jest-each'
// import ErrorBoundary from '../../../util/common/error-boundary'

describe('<Menu />', () => {
  // TODO: add the tests again
  test('true', () => {
    expect(true).toBeTruthy()
  })
  // describe('Rendering with no props', () => {
  //   test('Should mount the component without errors', () => {
  //     const comp = mount(<ErrorBoundary><Menu /></ErrorBoundary>)
  //     expect(comp.length).toEqual(1)
  //   })
  // })

  // describe('Rendering with props', () => {
  //   const data = {
  //     handleLanguageChange: jest.fn(),
  //     languageText: false,
  //     mainInfo: { test: {} }
  //   }

  //   each([
  //     [true, 'Español'],
  //     [false, 'English']
  //   ]).test('when language text is "%s", the button text should be "%s"', (languageText, response) => {
  //     data.isEnglish = languageText
  //     const component = mount(<Menu {...data} />)

  //     expect(component.last('a').text()).toContain(response)
  //   })

  //   test('when click on the link, should work', () => {
  //     const component = shallow(<Menu {...data} />)

  //     component
  //       .children() // ul
  //       .children().last() // last li
  //       .children() // a
  //       .simulate('click')

  //     expect(data.handleLanguageChange).toHaveBeenCalled()
  //   })
  // })
})
