/**
 * @jest-environment jsdom
 */
import React from 'react'
import { mount } from 'enzyme'
import { Photo } from '.'
import { ImageDiv } from './styles';

describe('<Photo />', () => {
  it('renders with link and alt props', () => {
    const props = {
      link: 'https://example.com/image.jpg',
      alt: 'Example image',
    };
    const component = mount(<Photo {...props} />);
    expect(component.find(ImageDiv).length).toBe(1);
    expect(component.find('img').prop('src')).toBe(props.link);
    expect(component.find('img').prop('alt')).toBe(props.alt);
  });

  it('renders with no props', () => {
    const component = mount(<Photo alt='' link='' />);
    expect(component.find(ImageDiv).length).toBe(1);
    expect(component.find('img').prop('src')).toBeUndefined();
    expect(component.find('img').prop('alt')).toBeUndefined();
  });
});
