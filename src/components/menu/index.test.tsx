import { mount, shallow } from 'enzyme';
import { Squeeze as Hamburger } from 'hamburger-react';
import { Menu, menuProps } from '.';

describe('Menu component', () => {
  let props: menuProps;

  beforeEach(() => {
    props = {
      sectionKeys: ['home', 'about', 'contact'],
      locale: {
        home: 'Home',
        about: 'About',
        contact: 'Contact',
        language: 'Language',
      },
      toggleLanguage: jest.fn(),
    };
  });

  it('renders correctly', () => {
    const component = shallow(<Menu {...props} />);
    expect(component.exists()).toBe(true);
  });

  describe('language button', () => {
    it('calls toggleLanguage when clicked', () => {
      const component = shallow(<Menu {...props} />);
      component.find('a').simulate('click');
      expect(props.toggleLanguage).toHaveBeenCalled();
    });
  });

  describe('hamburger button', () => {
    it('toggles isOpen state when clicked', () => {
      const component = shallow(<Menu {...props} />);
      component.find(Hamburger).simulate('click');
      expect(component.state('isOpen')).toBe(true);
      component.find(Hamburger).simulate('click');
      expect(component.state('isOpen')).toBe(false);
    });
  });

  describe('menu links', () => {
    it('renders the correct number of links', () => {
      const component = mount(<Menu {...props} />);
      expect(component.find('li')).toHaveLength(props.sectionKeys.length + 2);
    });

    it('renders the links in the correct order', () => {
      const component = mount(<Menu {...props} />);
      const links = component.find('a').map((link) => link.text());
      expect(links).toEqual(['Language', 'Contact', 'About', 'Home']);
    });

    it('renders the links with the correct href', () => {
      const component = mount(<Menu {...props} />);
      const hrefs = component.find('a').map((link) => link.prop('href'));
      expect(hrefs).toEqual(['#', '#Contact', '#About', '#Home']);
    });
  });
});