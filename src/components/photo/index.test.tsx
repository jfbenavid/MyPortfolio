import { render, screen } from '@testing-library/react'
import { Photo } from '.'
import ThemeMock from '../../__mocks__/theme-mock';

describe('<Photo />', () => {
  describe('Rendering with', () => {
    it('props', async () => {
      const props = {
        link: 'https://example.com/image.jpg',
        alt: 'Example image',
      };
      render(
        <ThemeMock>
          <Photo {...props} />
        </ThemeMock>
      );

      const image = await screen.findByAltText(props.alt)
      expect(image).not.toBeNull()
      expect(image.getAttribute('src')).toBe(props.link)
    });

    it('no props', async () => {
      render(
        <ThemeMock>
          <Photo alt='' link='' />
        </ThemeMock>
      );

      const image = await screen.findByAltText('')
      expect(image).not.toBeNull()
      expect(image.getAttribute('src')).toBe('')
      expect(image.getAttribute('alt')).toBe('')
    })
  })
})