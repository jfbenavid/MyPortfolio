import { render, screen } from '@testing-library/react'
import { Header } from './'

describe('<Header />', () => {
  it('renders correctly', () => {
    render(<Header>Test header</Header>)

    const component = screen.getByRole('banner')

    expect(component).not.toBeNull()
    expect(component.innerHTML).toBe('Test header')
  })
})
