/**
 * @jest-environment jsdom
 */
import React from 'react'
import { mount } from 'enzyme'
import {ErrorBoundary} from '../../util/common/error-boundary'
import { Study } from '.'

describe('<Study />', () => {
  // test('Rendering with no props', () => {
  //   console.error = jest.fn()
  //   mount(<ErrorBoundary><Study /></ErrorBoundary>)
  //   expect(console.error).toHaveBeenCalled()
  // })

  // describe('Rendering with props', () => {
  //   const data = {
  //     urlFile: '',
  //     institute: '',
  //     instituteLogo: '',
  //     title: '',
  //     endingDate: ''
  //   }

  //   test('should render successfully', () => {
  //     const component = mount(<Study data={data} />)
  //     expect(component.length).toBe(1)
  //   })
  // })
})
