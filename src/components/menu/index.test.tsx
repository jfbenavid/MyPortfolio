import { render, screen } from '@testing-library/react'
import { Menu, menuProps } from '.'
import ThemeMock from '../../__mocks__/theme-mock'

describe('Menu component', () => {
  let props: menuProps

  beforeEach(() => {
    props = {
      sectionKeys: ['about', 'contact'],
      locale: {
        home: 'Home',
        about: 'About',
        contact: 'Contact',
        language: 'Language'
      },
      toggleLanguage: jest.fn()
    }
  })

  it('renders correctly', async () => {
    render(
      <ThemeMock>
        <Menu {...props} />
      </ThemeMock>
      )

    const languageItem = await screen.findByText(props.locale['language'])

    expect(languageItem).not.toBeNull()
  })

  describe('language button', () => {
    it('calls toggleLanguage when clicked', () => {
      render(
        <ThemeMock>
          <Menu {...props} />
        </ThemeMock>
      )

      const languageItem = screen.getByText(props.locale['language'])
      languageItem.click()

      expect(props.toggleLanguage).toHaveBeenCalled()
    })
  })

  describe('menu links', () => {
    it('renders the correct number of links', () => {
      render(
        <ThemeMock>
          <Menu {...props} />
        </ThemeMock>
      )

      const components = screen.getAllByRole('link')

      expect(components).toHaveLength(props.sectionKeys.length + 2)
    })

    it('renders the links in the correct order', () => {
      render(
        <ThemeMock>
          <Menu {...props} />
        </ThemeMock>
      )

      const components = screen.getAllByRole('link')

      const links = components.map((link) => link.textContent)

      expect(links).toEqual(['Language', 'Contact', 'About', 'Home'])
    })

    it('renders the links with the correct href', () => {
      render(
        <ThemeMock>
          <Menu {...props} />
        </ThemeMock>
      )

      const components = screen.getAllByRole('link')
      const hrefs = components.map((link) => link.getAttribute('href').toLowerCase())

      expect(hrefs).toEqual(['#', '#contact', '#about', '#home'])
    })
  })
})
