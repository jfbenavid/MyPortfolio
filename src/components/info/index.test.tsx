import { shallow } from 'enzyme';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { StyledInfo } from './styles';
import { Info } from './index';

describe('<Info />', () => {
  const mockData = {
    occupation: 'Software Engineer',
    socialMedia: {
      linkedin: 'https://www.linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
    },
  };

  it('renders with data', () => {
    const component = shallow(<Info {...mockData} />);
    expect(component.find(StyledInfo).length).toBe(1);
    expect(component.find('h2').text()).toBe('Software Engineer');
    expect(component.find(FaLinkedinIn).prop('href')).toBe('https://www.linkedin.com/in/johndoe');
    expect(component.find(FaGithub).prop('href')).toBe('https://github.com/johndoe');
  });

  it('renders without data', () => {
    const component = shallow(<Info occupation="" socialMedia={{ linkedin: '', github: '' }} />);
    expect(component.find(StyledInfo).length).toBe(1);
    expect(component.find('h2').text()).toBe('');
    expect(component.find(FaLinkedinIn).prop('href')).toBe('');
    expect(component.find(FaGithub).prop('href')).toBe('');
  });
});