/**
 * @jest-environment jsdom
 */
import { shallow } from 'enzyme';
import { Header } from './';

describe('<Header />', () => {
  it('renders with children', () => {
    const component = shallow(<Header>Test header</Header>);
    expect(component.find('header').length).toBe(1);
    expect(component.text()).toBe('Test header');
  });

  it('renders without children', () => {
    const component = shallow(<Header children=''/>);
    expect(component.find('header').length).toBe(1);
    expect(component.text()).toBe('');
  });
});
