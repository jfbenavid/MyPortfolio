import { render, screen } from '@testing-library/react'
import { Info } from './index';

describe('<Info />', () => {
  describe('renders with data', () => {
    const mockData = {
      occupation: 'Software Engineer',
      socialMedia: {
        linkedin: 'https://www.linkedin.com/in/johndoe',
        github: 'https://github.com/johndoe',
      },
    };

    it('links correctly', () => {
      render(<Info {...mockData} />);
      const components = screen.getAllByRole('link')
      const hrefs = components.map((link) => link.getAttribute('href').toLowerCase())

      expect(hrefs).toEqual(['https://www.linkedin.com/in/johndoe', 'https://github.com/johndoe'])
    })

    it('header correctly', () => {
      render(<Info {...mockData} />);

      const component = screen.getByRole('heading')

      expect(component.textContent).toBe('Software Engineer')
    })
  });

  describe('renders without data', () => {
    it('links correctly', () => {
      render(<Info  occupation="" socialMedia={{ linkedin: '', github: '' }}  />);
      const components = screen.getAllByRole('link')
      const hrefs = components.map((link) => link.getAttribute('href').toLowerCase())

      expect(hrefs).toEqual(['', ''])
    })

    it('header correctly', () => {
      render(<Info  occupation="" socialMedia={{ linkedin: '', github: '' }}  />);

      const component = screen.getByRole('heading')

      expect(component.textContent).toBe('')
    })
  });
});