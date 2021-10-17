import 'jsdom-global/register'
import React from 'react'
import { mount } from 'enzyme'
import { Photo } from '../../../../portfolio/header/photo'
import ErrorBoundary from '../../../../util/common/error-boundary'

describe('<Photo />', () => {
  test('Rendering with no props', () => {
    console.error = jest.fn()
    mount(<ErrorBoundary><Photo /></ErrorBoundary>)
    expect(console.error).toHaveBeenCalled()
  })

  test('Rendering with props', () => {
    const data = {
      link: 'test',
      alt: 'test'
    }

    const component = mount(<Photo photoInfo={data} />)
    expect(component.length).toBe(1)
  })
})
